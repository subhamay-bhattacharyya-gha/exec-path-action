# [1.1.0](https://github.com/subhamay-bhattacharyya-gha/exec-path-action/compare/v1.0.0...v1.1.0) (2025-07-15)


### Bug Fixes

* add checks for GitHub Actions context and artifact token before upload ([889e995](https://github.com/subhamay-bhattacharyya-gha/exec-path-action/commit/889e9957163c054bf698efe89fdd2566c3d8f61a))
* downgrade @actions/artifact dependency and update upload method ([c8d8c8c](https://github.com/subhamay-bhattacharyya-gha/exec-path-action/commit/c8d8c8ce884f83d4388df0a6bd3029cdbc77d398))
* downgrade @actions/artifact to v1 and update upload method to verify file existence ([f7c9602](https://github.com/subhamay-bhattacharyya-gha/exec-path-action/commit/f7c9602996a2ba9cbe35326a1b5324ef1d99d833))
* remove trailing braces in dependencies section of package.json ([f87e93c](https://github.com/subhamay-bhattacharyya-gha/exec-path-action/commit/f87e93c526feb8874f9e4e06c2b830f898cd1e27))
* update artifact dependency and use modern uploadArtifact API ([c4e0037](https://github.com/subhamay-bhattacharyya-gha/exec-path-action/commit/c4e0037326bed8ca119db311fb1748afe3c51d97))
* update artifact upload method to handle errors and change artifact name ([0654ae6](https://github.com/subhamay-bhattacharyya-gha/exec-path-action/commit/0654ae6f6a54bbe2617d335e158e5bd6eca638e0))
* update artifact upload process to save execution path data as output and handle optional upload errors ([fe9945b](https://github.com/subhamay-bhattacharyya-gha/exec-path-action/commit/fe9945b8977864df5b78b9a2963abf81503f00bf))
* update artifact upload to continue on error ([7485d4b](https://github.com/subhamay-bhattacharyya-gha/exec-path-action/commit/7485d4b8ae5eb8856e2d34ca197810e2ced1fc7b))
* upgrade to @actions/artifact v2 and add file existence check before upload ([6146e72](https://github.com/subhamay-bhattacharyya-gha/exec-path-action/commit/6146e729587111df5c4c61129048634770da6e69))
* use artifact.create() instead of artifact.getDefaultClient() for artifact upload ([8096644](https://github.com/subhamay-bhattacharyya-gha/exec-path-action/commit/80966445aec97309691333efcdfccd0691570aa9))
* use getDefaultClient for artifact upload instead of create ([2a8c30f](https://github.com/subhamay-bhattacharyya-gha/exec-path-action/commit/2a8c30f62ba86aaf5634d604e7cd9d1a0ff26103))
* use variable for artifact name in uploadArtifact call ([344a8a5](https://github.com/subhamay-bhattacharyya-gha/exec-path-action/commit/344a8a595fe13235ba3979475a5785938138ec61))


### Features

* add artifact upload functionality and save execution path to file ([c78cd6c](https://github.com/subhamay-bhattacharyya-gha/exec-path-action/commit/c78cd6c8e25dfcd94f0d4c40339205bb884f89f4))

# 1.0.0 (2025-05-21)


### Features

* Initial release execution path GitHub action. ([4d0a070](https://github.com/subhamay-bhattacharyya-gha/exec-path-action/commit/4d0a0707e53fb20862917645cc1207e65e460aa6))

# Changelog

All notable changes to this project will be documented in this file.
