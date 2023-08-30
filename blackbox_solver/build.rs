use std::{
    fs::File,
    io::{Cursor, Read},
    path::{Path, PathBuf},
};

use base64ct::{Base64, Encoding};
use flate2::read::GzDecoder;
use sha2::Sha256;
use tar::Archive;

const BARRETENBERG_ARCHIVE: &str = "BARRETENBERG_ARCHIVE";
const BARRETENBERG_BIN_DIR: &str = "BARRETENBERG_BIN_DIR";

const BARRETENBERG_ARCHIVE_FALLBACK: &str = "https://github.com/AztecProtocol/barretenberg/releases/download/barretenberg-v0.4.5/acvm_backend.wasm.tar.gz";
const ARCHIVE_SHA256: &str = "0z24yhvxc0dr13xj7y4xs9p42lzxwpazrmsrdpcgynfajkk6vqy4";

fn unpack_wasm(archive_path: &Path, target_dir: &Path) -> Result<(), String> {
    if archive_path.exists() && archive_path.is_file() {
        let archive = File::open(archive_path).map_err(|_| "Could not read archive")?;
        unpack_archive(archive, target_dir);

        Ok(())
    } else {
        Err(format!("Unable to locate {BARRETENBERG_ARCHIVE} - Please set the BARRETENBERG_BIN_DIR env var to the directory where it exists, or ensure it's located at {}", archive_path.display()))
    }
}

fn unpack_archive<T: Read>(archive: T, target_dir: &Path) {
    let gz_decoder = GzDecoder::new(archive);
    let mut archive = Archive::new(gz_decoder);

    archive.unpack(target_dir).unwrap();
}

/// Try to download the specified URL into a buffer which is returned.
fn download_binary_from_url(url: &str) -> Result<Cursor<Vec<u8>>, String> {
    use sha2::Digest;

    let response = reqwest::blocking::get(url).map_err(|error| error.to_string())?;

    let bytes = response.bytes().unwrap();

    let digest = Sha256::digest(bytes.clone());
    let base64_digest = Base64::encode_string(&digest);
    assert_eq!(base64_digest, ARCHIVE_SHA256);

    Ok(Cursor::new(bytes.to_vec()))
}

fn main() -> Result<(), String> {
    let out_dir = std::env::var("OUT_DIR").unwrap();

    match std::env::var(BARRETENBERG_ARCHIVE) {
        Ok(archive_path) => {
            unpack_wasm(&PathBuf::from(archive_path), &PathBuf::from(&out_dir))?;
            println!("cargo:rustc-env={BARRETENBERG_BIN_DIR}={out_dir}");
            Ok(())
        }
        Err(_) => {
            let wasm_bytes = download_binary_from_url(BARRETENBERG_ARCHIVE_FALLBACK)
                .expect("download should succeed");

            unpack_archive(wasm_bytes, &PathBuf::from(&out_dir));
            println!("cargo:rustc-env={BARRETENBERG_BIN_DIR}={out_dir}");

            Ok(())
        }
    }
}
