# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [1.16.0](https://github.com/Enigma-Laboratory/money-keeper-backend/compare/v1.15.0...v1.16.0) (2024-10-12)


### Features

* update new type operational setting ([e97098d](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/e97098d50b699fc3b8f1bd9a36d87fb2634c6fff))

## [1.15.0](https://github.com/Enigma-Laboratory/money-keeper-backend/compare/v1.14.0...v1.15.0) (2024-10-12)


### Features

* implement new role ([938557f](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/938557fd80f2fc49ac5a4eee3be4b1327834b396))

## [1.14.0](https://github.com/Enigma-Laboratory/money-keeper-backend/compare/v1.13.0...v1.14.0) (2024-10-12)


### Features

* add auth service & guard jwt ([103ab15](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/103ab1583ec864f9182bbdbc8c4b739af66f982f))
* add script for load balancing EL-48 ([7bd67c5](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/7bd67c56b20850a45fe2666b8eadbde55e344a29))
* add sort group by create at ([349af96](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/349af96b581e8e734f895210dded776baa22a861))
* add swagger auth service EL-45 ([8637e37](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/8637e37fe3d9444bf4a4657d15808aea337b241d))
* add test for auth ([d75cbf6](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/d75cbf658b63ea0e66c0938ade378de3fbd24088))
* add test for user EL-45 ([d55cf65](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/d55cf657ba6c6014225b757cfc9bdbe5c86443f3))
* change pnpm lock ([56bf17e](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/56bf17e229936f545c434a80ba391caac84def1e))
* implement proxy service EL-48 ([c7ad6a1](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/c7ad6a16897e96cbf62ac4174a370aa401780f45))
* implement role of user ([2dfc3d2](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/2dfc3d22b00ad7a8b3abcb93bca8fef217ac5a24))
* setup auth service and pipeline: ([15f19a5](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/15f19a54e97bbbd73077a4f6a55ee24a3dd37278))
* setup connect db with postgre ([0a7fd0c](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/0a7fd0c8d4484bfd79ee7d0b37f1e5f291ec173e))
* setup init auth service ([6232266](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/623226652af814837799260b32ed1b48b6a04af9))
* update to dockerhub ([bf21e5b](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/bf21e5bddc2d50942048f667432ce8f9e134a38f))


### Bug Fixes

* docker file EL-46 ([6e87df4](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/6e87df40aa62e9f3bfb62130d1f81a3e24f51d54))
* update docker file for order service EL-46 ([9f20802](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/9f20802711209393d363d91feffe196d9f5eadeb))
* update pnpm lock change ([15dd6d0](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/15dd6d04063b766a5f240bf95754728aaeb180df))

## [1.13.0](https://github.com/Enigma-Laboratory/money-keeper-backend/compare/v1.12.0...v1.13.0) (2024-06-02)


### Features

* EL-39 add api for get daily order ([b14562a](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/b14562ad91ac9eee145757ce2406a945c65a0e14))
* EL-39 add api for get daily user ([0250955](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/02509550484cce50ea33d18784741b06503a8bf4))


### Bug Fixes

* throw internal server error when edit order status not work ([de62130](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/de6213059287f36d0daa3c0fece93f55cbd4129c))

## [1.12.0](https://github.com/Enigma-Laboratory/money-keeper-backend/compare/v1.11.0...v1.12.0) (2024-06-02)


### Features

* EL-39 add daily revenue order in dashboard ([4cdc763](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/4cdc7631206158c4915dcb1994f1949eca9a4bf4))

## [1.11.0](https://github.com/Enigma-Laboratory/money-keeper-backend/compare/v1.10.3...v1.11.0) (2024-06-02)


### Features

* EL-37 get timeline order dashboard ([6995d69](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/6995d695677383c1511d49703c2a98292cfbd6ca))


### Bug Fixes

* broad cast event for return user and orders ([2228717](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/2228717957531171ba191dab15a3db11aa95829a))
* change forget to fogot password ([68b092d](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/68b092d6ca0271ea1530977351e78a22cdbac7e0))
* cors with pencusto ([55af0d5](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/55af0d5a21f5ea2fa904f0d1f6ea3e227291bbb1))
* cors with pencusto ([54d576e](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/54d576e98c26537f48e728cf43d309083c80f1f5))

### [1.10.3](https://github.com/Enigma-Laboratory/money-keeper-backend/compare/v1.10.2...v1.10.3) (2024-06-01)


### Bug Fixes

* return current user change status ([1a6cfbc](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/1a6cfbc7b5ffaab753565dad2299e137444f4409))
* return current user change status ([2b29a4d](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/2b29a4dfc6c78df46a9e3f8ac69214d5bfe3ad43))

### [1.10.2](https://github.com/Enigma-Laboratory/money-keeper-backend/compare/v1.10.1...v1.10.2) (2024-06-01)


### Bug Fixes

* build interfaces ([aaea045](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/aaea0457d52f8cd0d60f2bb77f7d0bf0d1f7192e))

### [1.10.1](https://github.com/Enigma-Laboratory/money-keeper-backend/compare/v1.10.0...v1.10.1) (2024-05-31)


### Bug Fixes

* update many orders statuses ([076678a](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/076678a904421a3a9f1b6f060c6acca43f8f58b8))

## [1.10.0](https://github.com/Enigma-Laboratory/money-keeper-backend/compare/v1.9.0...v1.10.0) (2024-05-31)


### Features

* update api for update order statuses ([3e0903b](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/3e0903b3c3a0e198aa71f24eb6fd499559e0d728))


### Bug Fixes

* change route name to forgot password ([052ec61](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/052ec613c592c60a24ae80d2801c67db1544493f))

## [1.9.0](https://github.com/Enigma-Laboratory/money-keeper-backend/compare/v1.8.0...v1.9.0) (2024-05-27)


### Features

* add docker file for server api ([afba77e](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/afba77e5209d935a39cd6240f6c2f3fdef4a7077))


### Bug Fixes

* add interfaces and handle compare password ([97855e0](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/97855e02cbbef7bb3f4fd817a642299fea04d971))

## [1.8.0](https://github.com/Enigma-Laboratory/money-keeper-backend/compare/v1.7.2...v1.8.0) (2024-05-24)


### Features

* change login response to required ([5b57a43](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/5b57a4303e7de0c24315d973d21ef7d5bb59c459))
* config access refresh token ttl ([b29c08f](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/b29c08f185830f7715953620749aeade96262602))
* setup refresh token and signout EL-30 ([d2f1dd8](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/d2f1dd89b61bbe23f37d572d63a5e0f3f67fada0))


### Bug Fixes

* user buyer can edit order ([92abe43](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/92abe431b141b7b3fdb685ca88c2d1e4b8c4ecb8))

### [1.7.2](https://github.com/Enigma-Laboratory/money-keeper-backend/compare/v1.7.1...v1.7.2) (2024-05-20)

### [1.7.1](https://github.com/Enigma-Laboratory/money-keeper-backend/compare/v1.7.0...v1.7.1) (2024-05-20)


### Bug Fixes

* update order when user change user Ids status ([836b4c1](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/836b4c1836754968fe77b0eef3c5f0b24da53a54))

## [1.7.0](https://github.com/Enigma-Laboratory/money-keeper-backend/compare/v1.5.1...v1.7.0) (2024-05-17)


### Features

* add enum user event ([a35277b](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/a35277bc231a509fbf238ffddff6f51cb83a2d2c))

## [1.6.0](https://github.com/Enigma-Laboratory/money-keeper-backend/compare/v1.5.1...v1.6.0) (2024-05-17)


### Features

* add enum user event ([a35277b](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/a35277bc231a509fbf238ffddff6f51cb83a2d2c))

### [1.5.1](https://github.com/Enigma-Laboratory/money-keeper-backend/compare/v1.5.0...v1.5.1) (2024-05-17)

## 1.5.0 (2024-05-17)


### Features

* add enum user event ([0052712](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/005271264c902848e89a76ecd0559afa40586736))
* add env github token ([7aad7a7](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/7aad7a7c5315eb9adad03764126521aad47a1ccb))
* add env github token ([da2028a](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/da2028a555546700540e3ebc6c4b09e5cb110048))
* add env github token ([f1a04fc](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/f1a04fc5b8cdea0b09a2727b86cddaf020e9b946))
* add model detai ([1dd95a4](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/1dd95a416ce147809cbba7926608889b83870383))
* add needs build package after build interfaces ([9d3b7a1](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/9d3b7a1436aef519b038afca03ce32e9a3bf4c25))
* add needs build package after build interfaces ([d23f8ce](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/d23f8ceabaacfe38f2ff7db42c97f73773fb1ff2))
* add nodemailer && handle CRUD update user ([27bfa00](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/27bfa0082287651e8dee57239c9687463e380cc9))
* add pineline deploy to dev ([eaffe56](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/eaffe56ab356821303a14e5d9e2ed50fe3042e2f))
* add pineline deploy to dev ([77b315f](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/77b315fabcb9bb8a7172cb7dc8984a2631cc38c7))
* add timeout pi ([33d438d](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/33d438d5a617a72a52cf1fedf2e146658827281d))
* config cors ([215dbf1](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/215dbf18af3f79e3163859ac7b8296d27d9d2cb6))
* config env ([edb6d05](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/edb6d05d1c22263ebd4df8ccbebabfbc3cc6be40))
* config workflow ([eb75880](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/eb758800e2ca9fd92cfb7e84d4510a2f0c37bbd5))
* config workflow ([cdd7786](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/cdd778683190a9e0c43e03bf10e58900ffc0d06e))
* install husky ([1874350](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/1874350f84842bb6023ee7d181b4140ec13c6cf7))
* install husky v2 ([3a814fc](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/3a814fce31cd859f2a27263b3816e0a835e9096f))
* install husky v2 ([e6765f9](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/e6765f96371ec0a1f8ca7e742bd483833a91b04f))
* install husky v2 ([b15977a](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/b15977a394193cfcf4d5c314f53332bb0487a2ff))
* install husky v3 ([01edc0b](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/01edc0bee8da61a6250344bdffd10e25ed6246f1))
* login, logout, register ([3298893](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/3298893a48f002241cb0c4a52f6c4704042f6e3e))
* remove file money keeper flow ([b8cdf41](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/b8cdf41856dad370665ffea3eed992c058330e62))
* setup husky ([da530fd](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/da530fd116891c657859c5b3851bf5e0ebde0325))
* setup socket.io for order and operational setting ([5173b51](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/5173b51c2256aef2e062295b43c483e8b4be3a26))
* setup workflow ([199b270](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/199b2700002f9e34b8bf710857d9c0b9d60c1a20))
* when user push to main or create PR is build project after deploy to server ([19fb347](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/19fb347bee05366c0f36e2a392f558a3f45d8ffd))


### Bug Fixes

* accept address locolhost:4000 ([b7450cd](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/b7450cd8a1822f211e6d98123a8b2705a3255a49))
* add auth token to npm ([a89e755](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/a89e755e84ba4eca948fc4c994851cf1573971c1))
* add npmrc file logchange ([32e3310](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/32e3310e2281aa7efba703e3607d1a75f37c3257))
* api for auth && customer ([6601f47](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/6601f4762167d8b6235fb6b30aa2978fbe3d1cbe))
* build pipe line ([8fa3000](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/8fa300052cf16e97c91226d3fb170b2c3583f905))
* build pnpm lock change ([75f38a6](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/75f38a6b349e2afb32ddb26c11cb489da6f90b54))
* build server api ([2b4668f](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/2b4668f2f8b20939bca4b0549ce2b78dd7813215))
* build: server api ([8a9ecea](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/8a9ecea7bc714071e9e5ceb9b125b5bfced4b90e))
* can not install pnpm to pipeline ([6345911](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/634591135d702a61ac91b4cb0630a46e4309e40a))
* can user model not use id ([1452d82](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/1452d82e6c9320448ae1b16938f2ac3ee1e82a51))
* change git diff code ([8064551](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/80645518313a708a8f13acdb9d3ad61772f016cc))
* change git diff code ([f506558](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/f5065585630f8125c528ed5c47c4f026ae382077))
* change git diff code ([f70dd0f](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/f70dd0f90e8972c3979d5ec9c9e4932945b8c794))
* change git diff code ([f8d7323](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/f8d7323e1c94ee6518705ed27b151bcf12fd62d0))
* change git diff code ([60e1add](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/60e1adddd6293cbbde76a60546846607365696c2))
* change git diff code ([d0a2290](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/d0a2290c070d24822bda8b8e695bb0a77175d181))
* check for change in build interface ([53418ba](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/53418ba97f1164b4a995aa0223138f2bdef41d1c))
* check for change in build interface ([3dd0814](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/3dd0814586956e12e99cfc77f08c48ae274e3835))
* command standard version notfound ([e7f31ea](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/e7f31eaa2404562b23839c93958a56d7f23754b6))
* config mongodb version with express app ([81f4630](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/81f4630b045478db6e963bf36695b0ff5c48c0cc))
* confused deploy backend to npm ([735fe42](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/735fe42bdf1f20e8840f0275dba2867150769ac9))
* cors ([fbff759](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/fbff75920f1b74034e0d007578e41dd434b1de18))
* delete order && update order event ([52b83a5](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/52b83a51bffaa3b6cda71d76262f320ebfa0a8b9))
* deploy to dev ([c0ba079](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/c0ba0791c6c5a73363851f2bf5ad14a5fe53f89f))
* deploy to dev ([3d46bee](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/3d46bee289566a5a81cbfbb5f52cadac07a44b9e))
* get pine when get all user not pick password ([2d535dd](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/2d535dd05686051f35973ed972568818d856f3db))
* gitgnore ([c229a5f](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/c229a5f15dfbed2f1364fab18e8777d91a282cd0))
* handle publish event emit socket with CRUD ([715f114](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/715f114ce98a43ccf3b424c4c39d192dd875795f))
* import module alias ([30d6b6d](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/30d6b6d6605570782cbc381f46f6c2717f8c19a0))
* jwt ([3fe37dc](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/3fe37dcaf0e669f71660c76fc6b3390d8ae22646))
* main .yml ([bc785bc](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/bc785bc447f1fa9c1fb204898312fb864c1604e5))
* module alias ([b33982e](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/b33982e7994b38e6bce2b060cfdd4d7ad5297cd1))
* node version ([b301960](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/b3019604ce387c39f690b3682f01988542a514c8))
* order route ([489f70e](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/489f70ea71e4928f704abac3d12fd7183921142b))
* prevent the infinite loop when pushing changes and tags ([fea43a4](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/fea43a478a8f05d2c248ab26ce5c2219f7e05aa2))
* remove cache ([7a8a5cc](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/7a8a5cc018f40fb0da6dab674c2c229ed056cd26))
* remove cache ([df39a53](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/df39a5394b2d7591faa21679c67768a1c54d47f4))
* remove cache ([c756664](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/c7566647b7bb2719d0cba9f1e24f22a181b02151))
* remove field id from collection user but not change access token when fetching old field ([e44089a](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/e44089a7c042e8d1044cbbf28b872208b4363b1c))
* remove file node modules ([d88db33](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/d88db339af4dbfd619c42ca7d59a1e92f2700b70))
* remove http to package server api ([65e630b](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/65e630ba030ab43f80b1fe85b7ffa804f0e5f507))
* the version of pnpm required least node.js 18.x ([ba875c1](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/ba875c1cce47800a967f673239d878c6ea329df3))
* uipdate crate order model ([f67853e](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/f67853e74b2dda2ad93d7ce6afd4601b19f2345e))
* update new commit when publish success package ([adc091f](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/adc091f8d7c26f9bf370ed5b9329a40868504685))
* update new commit when publish success package ([71eb1c8](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/71eb1c8f35ebeb36c673ffbb6548cfad0cd3bd65))
* update new commit when publish success package ([62cee36](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/62cee36ff08ec2ee6ffadb963f773eea861b5e7a))
* update new commit when publish success package ([96966e5](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/96966e54baba7a13d837e463b849fbe428b03686))
* update new commit when publish success package ([4a0daee](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/4a0daee78d562f90a30c4c7b956282abce922efe))
* update version name ([66b51c9](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/66b51c9bfeecf14d94629450f897df188613edaf))
* user create order allow edit ([203f789](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/203f789a68e9c1ffd3005dd2d40e242463515604))
* validattion login ([0d77893](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/0d77893422e09ff8d115fe7d63ac46394a853955))
* workflows ([c3e94b7](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/c3e94b71aa089e1ec79071b044ca896a4f80b930))
* workflows ([bdf994c](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/bdf994c32c93706037b16eae4863a8bd0ea0c721))

### [1.4.11](https://github.com/Enigma-Laboratory/money-keeper-backend/compare/v1.4.10...v1.4.11) (2024-05-17)

### [1.4.10](https://github.com/Enigma-Laboratory/money-keeper-backend/compare/v1.4.9...v1.4.10) (2024-05-17)

### [1.4.9](https://github.com/Enigma-Laboratory/money-keeper-backend/compare/v1.4.8...v1.4.9) (2024-05-17)


### Bug Fixes

* prevent the infinite loop when pushing changes and tags ([fea43a4](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/fea43a478a8f05d2c248ab26ce5c2219f7e05aa2))

### [1.4.8](https://github.com/Enigma-Laboratory/money-keeper-backend/compare/v1.4.7...v1.4.8) (2024-05-17)

### [1.4.7](https://github.com/Enigma-Laboratory/money-keeper-backend/compare/v1.4.6...v1.4.7) (2024-05-17)

### [1.4.6](https://github.com/Enigma-Laboratory/money-keeper-backend/compare/v1.4.5...v1.4.6) (2024-05-17)

### [1.4.5](https://github.com/Enigma-Laboratory/money-keeper-backend/compare/v1.4.4...v1.4.5) (2024-05-17)

### [1.4.4](https://github.com/Enigma-Laboratory/money-keeper-backend/compare/v1.4.3...v1.4.4) (2024-05-17)

### [1.4.3](https://github.com/Enigma-Laboratory/money-keeper-backend/compare/v1.4.2...v1.4.3) (2024-05-17)

### [1.4.2](https://github.com/Enigma-Laboratory/money-keeper-backend/compare/v1.4.1...v1.4.2) (2024-05-17)

### [1.4.1](https://github.com/Enigma-Laboratory/money-keeper-backend/compare/v1.4.0...v1.4.1) (2024-05-17)

## [1.4.0](https://github.com/Enigma-Laboratory/money-keeper-backend/compare/v1.1.0...v1.4.0) (2024-05-17)


### Features

* add env github token ([7aad7a7](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/7aad7a7c5315eb9adad03764126521aad47a1ccb))
* add env github token ([da2028a](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/da2028a555546700540e3ebc6c4b09e5cb110048))
* add env github token ([f1a04fc](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/f1a04fc5b8cdea0b09a2727b86cddaf020e9b946))
* add needs build package after build interfaces ([9d3b7a1](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/9d3b7a1436aef519b038afca03ce32e9a3bf4c25))
* add needs build package after build interfaces ([d23f8ce](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/d23f8ceabaacfe38f2ff7db42c97f73773fb1ff2))
* add nodemailer && handle CRUD update user ([27bfa00](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/27bfa0082287651e8dee57239c9687463e380cc9))
* setup socket.io for order and operational setting ([5173b51](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/5173b51c2256aef2e062295b43c483e8b4be3a26))


### Bug Fixes

* accept address locolhost:4000 ([b7450cd](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/b7450cd8a1822f211e6d98123a8b2705a3255a49))
* add npmrc file logchange ([32e3310](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/32e3310e2281aa7efba703e3607d1a75f37c3257))
* build pipe line ([8fa3000](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/8fa300052cf16e97c91226d3fb170b2c3583f905))
* build pnpm lock change ([75f38a6](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/75f38a6b349e2afb32ddb26c11cb489da6f90b54))
* build server api ([2b4668f](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/2b4668f2f8b20939bca4b0549ce2b78dd7813215))
* build: server api ([8a9ecea](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/8a9ecea7bc714071e9e5ceb9b125b5bfced4b90e))
* can user model not use id ([1452d82](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/1452d82e6c9320448ae1b16938f2ac3ee1e82a51))
* check for change in build interface ([53418ba](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/53418ba97f1164b4a995aa0223138f2bdef41d1c))
* check for change in build interface ([3dd0814](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/3dd0814586956e12e99cfc77f08c48ae274e3835))
* delete order && update order event ([52b83a5](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/52b83a51bffaa3b6cda71d76262f320ebfa0a8b9))
* handle publish event emit socket with CRUD ([715f114](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/715f114ce98a43ccf3b424c4c39d192dd875795f))
* import module alias ([30d6b6d](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/30d6b6d6605570782cbc381f46f6c2717f8c19a0))
* module alias ([b33982e](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/b33982e7994b38e6bce2b060cfdd4d7ad5297cd1))
* node version ([b301960](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/b3019604ce387c39f690b3682f01988542a514c8))
* order route ([489f70e](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/489f70ea71e4928f704abac3d12fd7183921142b))
* remove cache ([7a8a5cc](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/7a8a5cc018f40fb0da6dab674c2c229ed056cd26))
* remove cache ([df39a53](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/df39a5394b2d7591faa21679c67768a1c54d47f4))
* remove cache ([c756664](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/c7566647b7bb2719d0cba9f1e24f22a181b02151))
* remove field id from collection user but not change access token when fetching old field ([e44089a](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/e44089a7c042e8d1044cbbf28b872208b4363b1c))
* remove file node modules ([d88db33](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/d88db339af4dbfd619c42ca7d59a1e92f2700b70))
* remove http to package server api ([65e630b](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/65e630ba030ab43f80b1fe85b7ffa804f0e5f507))
* uipdate crate order model ([f67853e](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/f67853e74b2dda2ad93d7ce6afd4601b19f2345e))
* user create order allow edit ([203f789](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/203f789a68e9c1ffd3005dd2d40e242463515604))
* validattion login ([0d77893](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/0d77893422e09ff8d115fe7d63ac46394a853955))
* workflows ([c3e94b7](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/c3e94b71aa089e1ec79071b044ca896a4f80b930))
* workflows ([bdf994c](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/bdf994c32c93706037b16eae4863a8bd0ea0c721))

### [1.3.1](https://github.com/Enigma-Laboratory/money-keeper-backend/compare/v1.3.0...v1.3.1) (2024-05-15)

## [1.3.0](https://github.com/Enigma-Laboratory/money-keeper-backend/compare/v1.2.6...v1.3.0) (2024-05-15)


### Features

* add nodemailer && handle CRUD update user ([27bfa00](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/27bfa0082287651e8dee57239c9687463e380cc9))


### Bug Fixes

* build pipe line ([8fa3000](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/8fa300052cf16e97c91226d3fb170b2c3583f905))
* delete order && update order event ([52b83a5](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/52b83a51bffaa3b6cda71d76262f320ebfa0a8b9))
* user create order allow edit ([203f789](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/203f789a68e9c1ffd3005dd2d40e242463515604))

### [1.2.6](https://github.com/Enigma-Laboratory/money-keeper-backend/compare/v1.2.5...v1.2.6) (2024-05-15)

### [1.2.5](https://github.com/Enigma-Laboratory/money-keeper-backend/compare/v1.2.4...v1.2.5) (2024-05-14)

### [1.2.4](https://github.com/Enigma-Laboratory/money-keeper-backend/compare/v1.2.3...v1.2.4) (2024-05-14)

### [1.2.3](https://github.com/Enigma-Laboratory/money-keeper-backend/compare/v1.2.2...v1.2.3) (2024-05-14)


### Bug Fixes

* accept address locolhost:4000 ([b7450cd](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/b7450cd8a1822f211e6d98123a8b2705a3255a49))
* can user model not use id ([1452d82](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/1452d82e6c9320448ae1b16938f2ac3ee1e82a51))
* remove field id from collection user but not change access token when fetching old field ([e44089a](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/e44089a7c042e8d1044cbbf28b872208b4363b1c))

### [1.2.2](https://github.com/Enigma-Laboratory/money-keeper-backend/compare/v1.2.1...v1.2.2) (2024-05-12)

### [1.2.1](https://github.com/Enigma-Laboratory/money-keeper-backend/compare/v1.2.0...v1.2.1) (2024-05-12)


### Bug Fixes

* handle publish event emit socket with CRUD ([715f114](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/715f114ce98a43ccf3b424c4c39d192dd875795f))

## [1.2.0](https://github.com/Enigma-Laboratory/money-keeper-backend/compare/v1.1.19...v1.2.0) (2024-05-10)


### Features

* setup socket.io for order and operational setting ([5173b51](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/5173b51c2256aef2e062295b43c483e8b4be3a26))


### Bug Fixes

* order route ([489f70e](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/489f70ea71e4928f704abac3d12fd7183921142b))

### [1.1.19](https://github.com/Enigma-Laboratory/money-keeper-backend/compare/v1.1.18...v1.1.19) (2024-05-07)

### [1.1.18](https://github.com/Enigma-Laboratory/money-keeper-backend/compare/v1.1.17...v1.1.18) (2024-05-07)

### [1.1.17](https://github.com/Enigma-Laboratory/money-keeper-backend/compare/v1.1.16...v1.1.17) (2024-05-07)


### Bug Fixes

* remove http to package server api ([65e630b](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/65e630ba030ab43f80b1fe85b7ffa804f0e5f507))

### [1.1.16](https://github.com/Enigma-Laboratory/money-keeper-backend/compare/v1.1.15...v1.1.16) (2024-05-06)

### [1.1.15](https://github.com/Enigma-Laboratory/money-keeper-backend/compare/v1.1.14...v1.1.15) (2024-05-06)

### [1.1.14](https://github.com/Enigma-Laboratory/money-keeper-backend/compare/v1.1.13...v1.1.14) (2024-05-06)

### [1.1.13](https://github.com/Enigma-Laboratory/money-keeper-backend/compare/v1.1.12...v1.1.13) (2024-05-06)

### [1.1.12](https://github.com/Enigma-Laboratory/money-keeper-backend/compare/v1.1.11...v1.1.12) (2024-05-06)

### [1.1.11](https://github.com/Enigma-Laboratory/money-keeper-backend/compare/v1.1.10...v1.1.11) (2024-05-06)

### [1.1.10](https://github.com/Enigma-Laboratory/money-keeper-backend/compare/v1.1.9...v1.1.10) (2024-05-06)

### [1.1.9](https://github.com/Enigma-Laboratory/money-keeper-backend/compare/v1.1.8...v1.1.9) (2024-05-06)

### [1.1.8](https://github.com/Enigma-Laboratory/money-keeper-backend/compare/v1.1.7...v1.1.8) (2024-05-06)

### [1.1.7](https://github.com/Enigma-Laboratory/money-keeper-backend/compare/v1.1.6...v1.1.7) (2024-05-06)

### [1.1.6](https://github.com/Enigma-Laboratory/money-keeper-backend/compare/v1.1.5...v1.1.6) (2024-05-06)


### Bug Fixes

* build: server api ([8a9ecea](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/8a9ecea7bc714071e9e5ceb9b125b5bfced4b90e))
* remove cache ([7a8a5cc](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/7a8a5cc018f40fb0da6dab674c2c229ed056cd26))
* remove cache ([df39a53](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/df39a5394b2d7591faa21679c67768a1c54d47f4))
* remove cache ([c756664](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/c7566647b7bb2719d0cba9f1e24f22a181b02151))
* remove file node modules ([d88db33](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/d88db339af4dbfd619c42ca7d59a1e92f2700b70))
* uipdate crate order model ([f67853e](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/f67853e74b2dda2ad93d7ce6afd4601b19f2345e))

### [1.1.5](https://github.com/Enigma-Laboratory/money-keeper-backend/compare/v1.1.4...v1.1.5) (2024-05-05)

### [1.1.4](https://github.com/Enigma-Laboratory/money-keeper-backend/compare/v1.1.3...v1.1.4) (2024-05-05)

### [1.1.3](https://github.com/Enigma-Laboratory/money-keeper-backend/compare/v1.1.2...v1.1.3) (2024-05-05)

### [1.1.2](https://github.com/Enigma-Laboratory/money-keeper-backend/compare/v1.1.1...v1.1.2) (2024-05-05)


### Bug Fixes

* validattion login ([0d77893](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/0d77893422e09ff8d115fe7d63ac46394a853955))

### [1.1.1](https://github.com/Enigma-Laboratory/money-keeper-backend/compare/v1.1.0...v1.1.1) (2024-05-04)

## [1.1.0](https://github.com/Enigma-Laboratory/money-keeper-backend/compare/v1.0.16...v1.1.0) (2024-05-03)


### Features

* add model detai ([1dd95a4](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/1dd95a416ce147809cbba7926608889b83870383))
* add pineline deploy to dev ([eaffe56](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/eaffe56ab356821303a14e5d9e2ed50fe3042e2f))
* add pineline deploy to dev ([77b315f](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/77b315fabcb9bb8a7172cb7dc8984a2631cc38c7))
* add timeout pi ([33d438d](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/33d438d5a617a72a52cf1fedf2e146658827281d))
* config cors ([215dbf1](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/215dbf18af3f79e3163859ac7b8296d27d9d2cb6))
* config env ([edb6d05](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/edb6d05d1c22263ebd4df8ccbebabfbc3cc6be40))
* config workflow ([eb75880](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/eb758800e2ca9fd92cfb7e84d4510a2f0c37bbd5))
* config workflow ([cdd7786](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/cdd778683190a9e0c43e03bf10e58900ffc0d06e))
* install husky ([1874350](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/1874350f84842bb6023ee7d181b4140ec13c6cf7))
* install husky v2 ([3a814fc](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/3a814fce31cd859f2a27263b3816e0a835e9096f))
* install husky v2 ([e6765f9](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/e6765f96371ec0a1f8ca7e742bd483833a91b04f))
* install husky v2 ([b15977a](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/b15977a394193cfcf4d5c314f53332bb0487a2ff))
* install husky v3 ([01edc0b](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/01edc0bee8da61a6250344bdffd10e25ed6246f1))
* login, logout, register ([3298893](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/3298893a48f002241cb0c4a52f6c4704042f6e3e))
* remove file money keeper flow ([b8cdf41](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/b8cdf41856dad370665ffea3eed992c058330e62))
* setup husky ([da530fd](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/da530fd116891c657859c5b3851bf5e0ebde0325))
* setup workflow ([199b270](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/199b2700002f9e34b8bf710857d9c0b9d60c1a20))
* when user push to main or create PR is build project after deploy to server ([19fb347](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/19fb347bee05366c0f36e2a392f558a3f45d8ffd))


### Bug Fixes

* api for auth && customer ([6601f47](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/6601f4762167d8b6235fb6b30aa2978fbe3d1cbe))
* config mongodb version with express app ([81f4630](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/81f4630b045478db6e963bf36695b0ff5c48c0cc))
* cors ([fbff759](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/fbff75920f1b74034e0d007578e41dd434b1de18))
* deploy to dev ([c0ba079](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/c0ba0791c6c5a73363851f2bf5ad14a5fe53f89f))
* deploy to dev ([3d46bee](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/3d46bee289566a5a81cbfbb5f52cadac07a44b9e))
* get pine when get all user not pick password ([2d535dd](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/2d535dd05686051f35973ed972568818d856f3db))
* gitgnore ([c229a5f](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/c229a5f15dfbed2f1364fab18e8777d91a282cd0))
* jwt ([3fe37dc](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/3fe37dcaf0e669f71660c76fc6b3390d8ae22646))
* main .yml ([bc785bc](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/bc785bc447f1fa9c1fb204898312fb864c1604e5))
* update version name ([66b51c9](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/66b51c9bfeecf14d94629450f897df188613edaf))

### [1.0.16](https://github.com/Enigma-Laboratory/money-keeper-backend/compare/v1.0.15...v1.0.16) (2024-05-03)

### [1.0.15](https://github.com/Enigma-Laboratory/money-keeper-backend/compare/v1.0.14...v1.0.15) (2024-05-03)

### [1.0.14](https://github.com/Enigma-Laboratory/money-keeper-backend/compare/v1.0.13...v1.0.14) (2024-05-03)

### [1.0.13](https://github.com/Enigma-Laboratory/money-keeper-backend/compare/v1.0.12...v1.0.13) (2024-05-03)


### Bug Fixes

* update new commit when publish success package ([adc091f](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/adc091f8d7c26f9bf370ed5b9329a40868504685))

### [1.0.12](https://github.com/Enigma-Laboratory/money-keeper-backend/compare/v1.0.11...v1.0.12) (2024-05-03)


### Bug Fixes

* update new commit when publish success package ([71eb1c8](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/71eb1c8f35ebeb36c673ffbb6548cfad0cd3bd65))

### [1.0.11](https://github.com/Enigma-Laboratory/money-keeper-backend/compare/v1.0.9...v1.0.11) (2024-05-03)


### Bug Fixes

* update new commit when publish success package ([62cee36](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/62cee36ff08ec2ee6ffadb963f773eea861b5e7a))

### [1.0.10](https://github.com/Enigma-Laboratory/money-keeper-backend/compare/v1.0.9...v1.0.10) (2024-05-03)


### Bug Fixes

* update new commit when publish success package ([62cee36](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/62cee36ff08ec2ee6ffadb963f773eea861b5e7a))

### [1.0.9](https://github.com/Enigma-Laboratory/money-keeper-backend/compare/v1.0.10...v1.0.9) (2024-05-03)

### [1.0.8](https://github.com/Enigma-Laboratory/money-keeper-backend/compare/v1.0.10...v1.0.8) (2024-05-03)

### [1.0.7](https://github.com/Enigma-Laboratory/money-keeper-backend/compare/v1.0.10...v1.0.7) (2024-05-03)

### [1.0.10](https://github.com/Enigma-Laboratory/money-keeper-backend/compare/v1.0.8...v1.0.10) (2024-05-03)

### [1.0.8](https://github.com/Enigma-Laboratory/money-keeper-backend/compare/v1.0.7...v1.0.8) (2024-05-03)


### Bug Fixes

* update new commit when publish success package ([96966e5](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/96966e54baba7a13d837e463b849fbe428b03686))
* update new commit when publish success package ([4a0daee](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/4a0daee78d562f90a30c4c7b956282abce922efe))

### [1.0.7](https://github.com/Enigma-Laboratory/money-keeper-backend/compare/v1.0.6...v1.0.7) (2024-05-03)


### Bug Fixes

* add auth token to npm ([a89e755](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/a89e755e84ba4eca948fc4c994851cf1573971c1))
* command standard version notfound ([e7f31ea](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/e7f31eaa2404562b23839c93958a56d7f23754b6))
* confused deploy backend to npm ([735fe42](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/735fe42bdf1f20e8840f0275dba2867150769ac9))

### [1.0.6](https://github.com/Enigma-Laboratory/money-keeper-backend/compare/v1.0.5...v1.0.6) (2024-05-03)

### [1.0.5](https://github.com/Enigma-Laboratory/money-keeper-backend/compare/v1.0.4...v1.0.5) (2024-05-03)

### 1.0.4 (2024-05-03)


### Bug Fixes

* can not install pnpm to pipeline ([6345911](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/634591135d702a61ac91b4cb0630a46e4309e40a))
* the version of pnpm required least node.js 18.x ([ba875c1](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/ba875c1cce47800a967f673239d878c6ea329df3))

### [1.1.1](https://github.com/Enigma-Laboratory/money-keeper-backend/compare/v1.1.0...v1.1.1) (2024-04-22)

## 1.1.0 (2024-03-02)


### Features

* add model detai ([1dd95a4](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/1dd95a416ce147809cbba7926608889b83870383))
* add pineline deploy to dev ([eaffe56](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/eaffe56ab356821303a14e5d9e2ed50fe3042e2f))
* add pineline deploy to dev ([77b315f](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/77b315fabcb9bb8a7172cb7dc8984a2631cc38c7))
* add timeout pi ([33d438d](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/33d438d5a617a72a52cf1fedf2e146658827281d))
* config cors ([215dbf1](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/215dbf18af3f79e3163859ac7b8296d27d9d2cb6))
* config env ([edb6d05](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/edb6d05d1c22263ebd4df8ccbebabfbc3cc6be40))
* config workflow ([eb75880](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/eb758800e2ca9fd92cfb7e84d4510a2f0c37bbd5))
* config workflow ([cdd7786](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/cdd778683190a9e0c43e03bf10e58900ffc0d06e))
* install husky ([1874350](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/1874350f84842bb6023ee7d181b4140ec13c6cf7))
* install husky v2 ([3a814fc](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/3a814fce31cd859f2a27263b3816e0a835e9096f))
* install husky v2 ([e6765f9](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/e6765f96371ec0a1f8ca7e742bd483833a91b04f))
* install husky v2 ([b15977a](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/b15977a394193cfcf4d5c314f53332bb0487a2ff))
* install husky v3 ([01edc0b](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/01edc0bee8da61a6250344bdffd10e25ed6246f1))
* login, logout, register ([3298893](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/3298893a48f002241cb0c4a52f6c4704042f6e3e))
* remove file money keeper flow ([b8cdf41](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/b8cdf41856dad370665ffea3eed992c058330e62))
* setup husky ([da530fd](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/da530fd116891c657859c5b3851bf5e0ebde0325))
* setup workflow ([199b270](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/199b2700002f9e34b8bf710857d9c0b9d60c1a20))
* when user push to main or create PR is build project after deploy to server ([19fb347](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/19fb347bee05366c0f36e2a392f558a3f45d8ffd))


### Bug Fixes

* api for auth && customer ([6601f47](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/6601f4762167d8b6235fb6b30aa2978fbe3d1cbe))
* config mongodb version with express app ([81f4630](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/81f4630b045478db6e963bf36695b0ff5c48c0cc))
* cors ([fbff759](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/fbff75920f1b74034e0d007578e41dd434b1de18))
* deploy to dev ([c0ba079](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/c0ba0791c6c5a73363851f2bf5ad14a5fe53f89f))
* deploy to dev ([3d46bee](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/3d46bee289566a5a81cbfbb5f52cadac07a44b9e))
* get pine when get all user not pick password ([2d535dd](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/2d535dd05686051f35973ed972568818d856f3db))
* gitgnore ([c229a5f](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/c229a5f15dfbed2f1364fab18e8777d91a282cd0))
* jwt ([3fe37dc](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/3fe37dcaf0e669f71660c76fc6b3390d8ae22646))
* update version name ([66b51c9](https://github.com/Enigma-Laboratory/money-keeper-backend/commit/66b51c9bfeecf14d94629450f897df188613edaf))

### [1.0.7](https://github.com/Enigma-Laboratory/money-keeper-backend/compare/v1.0.6...v1.0.7) (2023-08-27)

### [1.0.6](https://github.com/Enigma-Laboratory/money-keeper-backend/compare/v1.0.5...v1.0.6) (2023-08-27)

### [1.0.5](https://github.com/Enigma-Laboratory/money-keeper-backend/compare/v1.0.4...v1.0.5) (2023-08-27)
