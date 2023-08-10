// #![warn(unused_crate_dependencies, unused_extern_crates)]
#![warn(unreachable_pub)]

// TODO: Absence of per package targets
// https://doc.rust-lang.org/cargo/reference/unstable.html#per-package-target
// otherwise could be reorganized to make this file more pretty.

cfg_if::cfg_if! {
    if #[cfg(target_arch = "wasm32")] {
        mod barretenberg;
        mod black_box_solvers;
        mod build_info;
        mod compression;
        mod execute;
        mod foreign_call;
        mod js_witness_map;
        mod logging;
        mod public_witness;

        pub use build_info::build_info;
        pub use black_box_solvers::{and, xor, blake2s256, sha256, keccak256, hash_to_field_128_security, ecdsa_secp256k1_verify, ecdsa_secp256r1_verify};
        pub use compression::{compress_witness, decompress_witness};
        pub use execute::execute_circuit;
        pub use js_witness_map::JsWitnessMap;
        pub use logging::{init_log_level, LogLevel};
        pub use public_witness::{get_public_parameters_witness, get_public_witness, get_return_witness};

    }
}
