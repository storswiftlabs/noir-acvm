// See `schnorr_verify_circuit` integration test in `acir/tests/test_program_serialization.rs`.
export const bytecode = Uint8Array.from([
  31, 139, 8, 0, 0, 0, 0, 0, 0, 255, 77, 210, 87, 78, 2, 1, 20, 134, 209, 177, 247, 222, 123,
  71, 68, 68, 68, 68, 68, 68, 68, 68, 68, 221, 133, 251, 95, 130, 145, 27, 206, 36, 78, 50,
  57, 16, 94, 200, 253, 191, 159, 36, 73, 134, 146, 193, 19, 142, 241, 183, 255, 14, 179,
  233, 247, 145, 254, 59, 217, 127, 71, 57, 198, 113, 78, 48, 125, 167, 56, 205, 25, 206,
  114, 142, 243, 92, 224, 34, 151, 184, 204, 21, 174, 114, 141, 235, 220, 224, 38, 183, 184,
  205, 29, 238, 114, 143, 251, 60, 224, 33, 143, 120, 204, 19, 158, 242, 140, 25, 158, 51,
  203, 11, 230, 120, 201, 60, 175, 88, 224, 53, 139, 188, 97, 137, 183, 44, 243, 142, 21,
  222, 179, 202, 7, 214, 248, 200, 58, 159, 216, 224, 51, 155, 124, 97, 235, 223, 142, 241,
  188, 250, 222, 230, 27, 59, 124, 103, 151, 31, 236, 241, 147, 95, 252, 246, 57, 158, 104,
  47, 186, 139, 214, 162, 179, 104, 44, 250, 74, 219, 154, 242, 63, 162, 165, 232, 40, 26,
  138, 126, 162, 157, 232, 38, 154, 137, 94, 162, 149, 232, 36, 26, 137, 62, 162, 141, 232,
  34, 154, 136, 30, 162, 133, 232, 32, 26, 136, 253, 99, 251, 195, 100, 176, 121, 236, 29,
  91, 159, 218, 56, 99, 219, 172, 77, 115, 182, 204, 219, 176, 96, 187, 162, 205, 74, 182,
  42, 219, 168, 98, 155, 170, 77, 106, 182, 168, 219, 160, 225, 246, 77, 55, 111, 185, 113,
  219, 109, 59, 110, 218, 117, 203, 158, 27, 166, 55, 75, 239, 150, 184, 101, 250, 252, 1,
  19, 89, 159, 101, 220, 3, 0, 0,
]);

export const initialWitnessMap = new Map([
  [1, "0x17cbd3ed3151ccfd170efe1d54280a6a4822640bf5c369908ad74ea21518a9c5"],
  [2, "0x0e0456e3795c1a31f20035b741cd6158929eeccd320d299cfcac962865a6bc74"],
  [3, "0x0000000000000000000000000000000000000000000000000000000000000005"],
  [4, "0x00000000000000000000000000000000000000000000000000000000000000ca"],
  [5, "0x000000000000000000000000000000000000000000000000000000000000001f"],
  [6, "0x0000000000000000000000000000000000000000000000000000000000000092"],
  [7, "0x0000000000000000000000000000000000000000000000000000000000000051"],
  [8, "0x00000000000000000000000000000000000000000000000000000000000000f2"],
  [9, "0x00000000000000000000000000000000000000000000000000000000000000f6"],
  [10, "0x0000000000000000000000000000000000000000000000000000000000000045"],
  [11, "0x000000000000000000000000000000000000000000000000000000000000002b"],
  [12, "0x000000000000000000000000000000000000000000000000000000000000006b"],
  [13, "0x00000000000000000000000000000000000000000000000000000000000000f9"],
  [14, "0x0000000000000000000000000000000000000000000000000000000000000099"],
  [15, "0x00000000000000000000000000000000000000000000000000000000000000c6"],
  [16, "0x000000000000000000000000000000000000000000000000000000000000002c"],
  [17, "0x000000000000000000000000000000000000000000000000000000000000000e"],
  [18, "0x000000000000000000000000000000000000000000000000000000000000006f"],
  [19, "0x00000000000000000000000000000000000000000000000000000000000000bf"],
  [20, "0x0000000000000000000000000000000000000000000000000000000000000079"],
  [21, "0x0000000000000000000000000000000000000000000000000000000000000089"],
  [22, "0x00000000000000000000000000000000000000000000000000000000000000a6"],
  [23, "0x00000000000000000000000000000000000000000000000000000000000000a0"],
  [24, "0x0000000000000000000000000000000000000000000000000000000000000067"],
  [25, "0x0000000000000000000000000000000000000000000000000000000000000012"],
  [26, "0x00000000000000000000000000000000000000000000000000000000000000b5"],
  [27, "0x00000000000000000000000000000000000000000000000000000000000000f3"],
  [28, "0x00000000000000000000000000000000000000000000000000000000000000e9"],
  [29, "0x00000000000000000000000000000000000000000000000000000000000000e2"],
  [30, "0x000000000000000000000000000000000000000000000000000000000000005f"],
  [31, "0x0000000000000000000000000000000000000000000000000000000000000043"],
  [32, "0x0000000000000000000000000000000000000000000000000000000000000010"],
  [33, "0x0000000000000000000000000000000000000000000000000000000000000025"],
  [34, "0x0000000000000000000000000000000000000000000000000000000000000080"],
  [35, "0x0000000000000000000000000000000000000000000000000000000000000055"],
  [36, "0x000000000000000000000000000000000000000000000000000000000000004c"],
  [37, "0x0000000000000000000000000000000000000000000000000000000000000013"],
  [38, "0x00000000000000000000000000000000000000000000000000000000000000fd"],
  [39, "0x000000000000000000000000000000000000000000000000000000000000001e"],
  [40, "0x000000000000000000000000000000000000000000000000000000000000004d"],
  [41, "0x00000000000000000000000000000000000000000000000000000000000000c0"],
  [42, "0x0000000000000000000000000000000000000000000000000000000000000035"],
  [43, "0x000000000000000000000000000000000000000000000000000000000000008a"],
  [44, "0x00000000000000000000000000000000000000000000000000000000000000cd"],
  [45, "0x0000000000000000000000000000000000000000000000000000000000000045"],
  [46, "0x0000000000000000000000000000000000000000000000000000000000000021"],
  [47, "0x00000000000000000000000000000000000000000000000000000000000000ec"],
  [48, "0x00000000000000000000000000000000000000000000000000000000000000a3"],
  [49, "0x0000000000000000000000000000000000000000000000000000000000000053"],
  [50, "0x00000000000000000000000000000000000000000000000000000000000000c2"],
  [51, "0x0000000000000000000000000000000000000000000000000000000000000054"],
  [52, "0x0000000000000000000000000000000000000000000000000000000000000089"],
  [53, "0x00000000000000000000000000000000000000000000000000000000000000b8"],
  [54, "0x00000000000000000000000000000000000000000000000000000000000000dd"],
  [55, "0x00000000000000000000000000000000000000000000000000000000000000b0"],
  [56, "0x0000000000000000000000000000000000000000000000000000000000000079"],
  [57, "0x00000000000000000000000000000000000000000000000000000000000000b3"],
  [58, "0x000000000000000000000000000000000000000000000000000000000000001b"],
  [59, "0x000000000000000000000000000000000000000000000000000000000000003f"],
  [60, "0x0000000000000000000000000000000000000000000000000000000000000046"],
  [61, "0x0000000000000000000000000000000000000000000000000000000000000036"],
  [62, "0x0000000000000000000000000000000000000000000000000000000000000010"],
  [63, "0x00000000000000000000000000000000000000000000000000000000000000b0"],
  [64, "0x00000000000000000000000000000000000000000000000000000000000000fa"],
  [65, "0x0000000000000000000000000000000000000000000000000000000000000027"],
  [66, "0x00000000000000000000000000000000000000000000000000000000000000ef"],
  [67, "0x0000000000000000000000000000000000000000000000000000000000000000"],
  [68, "0x0000000000000000000000000000000000000000000000000000000000000001"],
  [69, "0x0000000000000000000000000000000000000000000000000000000000000002"],
  [70, "0x0000000000000000000000000000000000000000000000000000000000000003"],
  [71, "0x0000000000000000000000000000000000000000000000000000000000000004"],
  [72, "0x0000000000000000000000000000000000000000000000000000000000000005"],
  [73, "0x0000000000000000000000000000000000000000000000000000000000000006"],
  [74, "0x0000000000000000000000000000000000000000000000000000000000000007"],
  [75, "0x0000000000000000000000000000000000000000000000000000000000000008"],
  [76, "0x0000000000000000000000000000000000000000000000000000000000000009"],
]);

export const expectedWitnessMap = new Map(initialWitnessMap).set(
  77,
  "0x0000000000000000000000000000000000000000000000000000000000000001"
);
