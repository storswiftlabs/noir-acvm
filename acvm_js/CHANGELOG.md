# Changelog

## [0.25.0](https://github.com/noir-lang/acvm/compare/acvm_js-v0.24.1...acvm_js-v0.25.0) (2023-09-04)


### ⚠ BREAKING CHANGES

* Provide runtime callstacks for brillig failures and return errors in acvm_js ([#523](https://github.com/noir-lang/acvm/issues/523))

### Features

* Provide runtime callstacks for brillig failures and return errors in acvm_js ([#523](https://github.com/noir-lang/acvm/issues/523)) ([7ab7cff](https://github.com/noir-lang/acvm/commit/7ab7cff48a9aba61a97fad2a759fc8e55740b098))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * acvm bumped from 0.24.1 to 0.25.0

## [0.24.1](https://github.com/noir-lang/acvm/compare/acvm_js-v0.24.0...acvm_js-v0.24.1) (2023-09-03)


### Bug Fixes

* Add WASI 20 `_initialize` call to `acvm_backend.wasm` binary ([#518](https://github.com/noir-lang/acvm/issues/518)) ([ec6ab0c](https://github.com/noir-lang/acvm/commit/ec6ab0c6fb2753209abe1e03a449873e255ffd76))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * acvm bumped from 0.24.0 to 0.24.1

## [0.24.0](https://github.com/noir-lang/acvm/compare/acvm_js-v0.23.0...acvm_js-v0.24.0) (2023-08-31)


### ⚠ BREAKING CHANGES

* **acir:** Remove unused `Directive` opcodes ([#510](https://github.com/noir-lang/acvm/issues/510))
* **acir:** Add predicate to MemoryOp ([#503](https://github.com/noir-lang/acvm/issues/503))
* Assertion messages embedded in the circuit ([#484](https://github.com/noir-lang/acvm/issues/484))

### Features

* **acir:** Add predicate to MemoryOp ([#503](https://github.com/noir-lang/acvm/issues/503)) ([ca9eebe](https://github.com/noir-lang/acvm/commit/ca9eebe34e61adabf97318c8ccaf60c8a424aafd))
* Assertion messages embedded in the circuit ([#484](https://github.com/noir-lang/acvm/issues/484)) ([06b97c5](https://github.com/noir-lang/acvm/commit/06b97c51041e16651cf8b2be8bc18214e276c6c9))


### Miscellaneous Chores

* **acir:** Remove unused `Directive` opcodes ([#510](https://github.com/noir-lang/acvm/issues/510)) ([cfd8cbf](https://github.com/noir-lang/acvm/commit/cfd8cbf58307511ac0cc9106c299695c2ca779de))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * acvm bumped from 0.23.0 to 0.24.0

## [0.23.0](https://github.com/noir-lang/acvm/compare/acvm_js-v0.22.0...acvm_js-v0.23.0) (2023-08-30)


### ⚠ BREAKING CHANGES

* **acvm:** Remove `BlackBoxFunctionSolver` from `Backend` trait ([#494](https://github.com/noir-lang/acvm/issues/494))
* **acvm:** Pass `BlackBoxFunctionSolver` to `ACVM` by reference

### Features

* **acvm_js:** Add `execute_circuit_with_black_box_solver` to prevent reinitialization of `BlackBoxFunctionSolver` ([3877e0e](https://github.com/noir-lang/acvm/commit/3877e0e438a8d0e5545a4da7210767dec05c342f))
* Expose a `BlackBoxFunctionSolver` containing a barretenberg wasm from `blackbox_solver` ([#494](https://github.com/noir-lang/acvm/issues/494)) ([a1d4b71](https://github.com/noir-lang/acvm/commit/a1d4b71256dfbf1e883e770dd9c45479235aa860))


### Miscellaneous Chores

* **acvm:** Pass `BlackBoxFunctionSolver` to `ACVM` by reference ([3877e0e](https://github.com/noir-lang/acvm/commit/3877e0e438a8d0e5545a4da7210767dec05c342f))
* **acvm:** Remove `BlackBoxFunctionSolver` from `Backend` trait ([#494](https://github.com/noir-lang/acvm/issues/494)) ([a1d4b71](https://github.com/noir-lang/acvm/commit/a1d4b71256dfbf1e883e770dd9c45479235aa860))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * acvm bumped from 0.22.0 to 0.23.0

## [0.22.0](https://github.com/noir-lang/acvm/compare/acvm_js-v0.21.0...acvm_js-v0.22.0) (2023-08-18)


### Bug Fixes

* Empty commit to trigger release-please ([e8f0748](https://github.com/noir-lang/acvm/commit/e8f0748042ef505d59ab63266d3c36c5358ee30d))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * acvm bumped from 0.21.0 to 0.22.0
