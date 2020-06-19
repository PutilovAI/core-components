# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [1.5.2](https://github.com/alfa-laboratory/core-components/compare/v1.5.1...v1.5.2) (2020-06-18)


### Bug Fixes

* **checkbox-group:** fix css classnames ([1ec07fa](https://github.com/alfa-laboratory/core-components/commit/1ec07faa276bfa20917b1ff4decfde2c81c66ffe))

### [1.5.1](https://github.com/alfa-laboratory/core-components/compare/v1.5.0...v1.5.1) (2020-06-18)


### Bug Fixes

* **core-components-button:** fix block button width ([4abf5d9](https://github.com/alfa-laboratory/core-components/commit/4abf5d9d915909c4b5b4beddad7d287df812beb4))

## [1.5.0](https://github.com/alfa-laboratory/core-components/compare/v1.4.1...v1.5.0) (2020-06-15)


### Features

* **button:** keyboard-only focus ([#102](https://github.com/alfa-laboratory/core-components/issues/102)) ([739d240](https://github.com/alfa-laboratory/core-components/commit/739d240ab3d06b5a232b8c863f54ea888f2f635a)), closes [#125](https://github.com/alfa-laboratory/core-components/issues/125)
* **core-components-button:** fix button types ([#138](https://github.com/alfa-laboratory/core-components/issues/138)) ([6af3a2c](https://github.com/alfa-laboratory/core-components/commit/6af3a2c099c52d94fbb91663facfb3d5c79a8492))
* **core-components-form-control:** change errors logic ([#150](https://github.com/alfa-laboratory/core-components/issues/150)) ([1c0e494](https://github.com/alfa-laboratory/core-components/commit/1c0e49489fb59dce68504223744efd290c38d214))
* **core-components-link:** add new component ([#142](https://github.com/alfa-laboratory/core-components/issues/142)) ([33e11eb](https://github.com/alfa-laboratory/core-components/commit/33e11eb403fb7d8231e00cf55adf116b914aef3b))
* **core-components-vars:** update alfa-ui-primitives and build colors ([#153](https://github.com/alfa-laboratory/core-components/issues/153)) ([007e2d6](https://github.com/alfa-laboratory/core-components/commit/007e2d67d5e22e830ca353de3d7ea690b82af73f))


### Bug Fixes

* **core-components-tag:** fix tag background ([#151](https://github.com/alfa-laboratory/core-components/issues/151)) ([03b465b](https://github.com/alfa-laboratory/core-components/commit/03b465b9f6c231375da8803382ed3539b2e7743a))
* **core-components-tooltip:** pass target original classname ([#147](https://github.com/alfa-laboratory/core-components/issues/147)) ([d253f8a](https://github.com/alfa-laboratory/core-components/commit/d253f8a363a0b4c605ee897a9b3172fdf977a073))

### [1.4.1](https://github.com/alfa-laboratory/core-components/compare/v1.4.0...v1.4.1) (2020-06-01)


### Bug Fixes

* fixed themes and default font-family ([6bab367](https://github.com/alfa-laboratory/core-components/commit/6bab367eb0df53c7d42e31c5e404859638d8d6c9))
* **core-components-checkbox-group:** fix classnames to camelcase ([522af20](https://github.com/alfa-laboratory/core-components/commit/522af2088bbc7ef9343b4f6c3de5bb7ee51c6202))

## [1.4.0](https://github.com/alfa-laboratory/core-components/compare/v1.3.1...v1.4.0) (2020-05-28)


### Bug Fixes

* **core-components-select:** move select vars to separate file ([8e09aba](https://github.com/alfa-laboratory/core-components/commit/8e09abaa90d8a91298be69ef136770588630d824))

### [1.3.1](https://github.com/alfa-laboratory/core-components/compare/v1.3.0...v1.3.1) (2020-05-28)


### ⚠ BREAKING CHANGES

* **core-components-form-control:** Компонент Input теперь зависим от FormField. Большая часть стилей перенесена в
FormField

* refactor(core-components-form-control): rename component

* refactor(core-components-form-control): component improvements

### Features

* **core-components-button:** add loading state ([5c0a75a](https://github.com/alfa-laboratory/core-components/commit/5c0a75a3cae3232ce52be5cd800644c2030abb3b))
* **core-components-form-control:** add FormControl component ([#127](https://github.com/alfa-laboratory/core-components/issues/127)) ([1ea79d1](https://github.com/alfa-laboratory/core-components/commit/1ea79d1fc565c2073483a7480893958efff25dff))
* **core-components-loader:** add new component ([24f0c35](https://github.com/alfa-laboratory/core-components/commit/24f0c3538d79059ee64468ab6c7e372eb5647f76))
* **core-components-popover:** can render without Transition ([#130](https://github.com/alfa-laboratory/core-components/issues/130)) ([2569a32](https://github.com/alfa-laboratory/core-components/commit/2569a32994e8de57c4a4a5bce853f706183af749))
* **select:** add select component ([#118](https://github.com/alfa-laboratory/core-components/issues/118)) ([8892bd9](https://github.com/alfa-laboratory/core-components/commit/8892bd94a6be3ad8ba1e609545becadc8be54b47))


### Bug Fixes

* **core-components-button:** iconOnly button min-width fix ([ecdf518](https://github.com/alfa-laboratory/core-components/commit/ecdf518c89a931b649a6c917caa45b9f4dc2dc7b))
* **core-components-select:** fix onOpen description ([b28f75a](https://github.com/alfa-laboratory/core-components/commit/b28f75afe180dd252900139147f2c7c8df92aeb8))

## [1.3.0](https://github.com/alfa-laboratory/core-components/compare/v1.2.0...v1.3.0) (2020-05-22)


### Bug Fixes

* **core-components-popover:** change box-sizing to border-box ([#121](https://github.com/alfa-laboratory/core-components/issues/121)) ([2a6883d](https://github.com/alfa-laboratory/core-components/commit/2a6883d6832713d197447e23ada822ea07bed5f4))
* **core-components-popover:** make transition props optional ([#119](https://github.com/alfa-laboratory/core-components/issues/119)) ([dce9249](https://github.com/alfa-laboratory/core-components/commit/dce924922b67dff1c4ea6b173bd2b70874b56270))

## 1.2.0 (2020-05-08)


### Features

* add comments to bash ([6149931](https://github.com/alfa-laboratory/core-components/commit/61499310c0f928077b887e19621fc50989bac9dc))
* add demo script ([b5d1c00](https://github.com/alfa-laboratory/core-components/commit/b5d1c000e049568768fb6dc018bb8c89a23a8b73))
* add masked-input ([#76](https://github.com/alfa-laboratory/core-components/issues/76)) ([d5c4ba5](https://github.com/alfa-laboratory/core-components/commit/d5c4ba51e6ba1e255345a2b570ee54d3c3dfcf5f))
* delete postInstall ([fd30ef9](https://github.com/alfa-laboratory/core-components/commit/fd30ef9eba4e06d81b52e3668d4d38ac2e2ed5ea))
* fix eslint ([c4f5261](https://github.com/alfa-laboratory/core-components/commit/c4f5261ec4ed63f285e0cb7dc0bdbc17e94dc38d))
* lint fix ([f64c8b9](https://github.com/alfa-laboratory/core-components/commit/f64c8b94c801b92b77ab321d3f5990d070e56ca4))
* modify config for storybook ([c81ad6e](https://github.com/alfa-laboratory/core-components/commit/c81ad6e225324c38052fd8aae37001be0ef5c756))
* post storybook url to PR after push ([#39](https://github.com/alfa-laboratory/core-components/issues/39)) ([9acc8ab](https://github.com/alfa-laboratory/core-components/commit/9acc8abaff1e48c6a62872b803340212b67ae237))
* publishing ([bc584e2](https://github.com/alfa-laboratory/core-components/commit/bc584e224e17e29fd7178ea096a500264e286685))
* setup tests ([3e722bd](https://github.com/alfa-laboratory/core-components/commit/3e722bda2da14460cbf14cadefafe52b84a2fb76))
* update demo script ([46d600c](https://github.com/alfa-laboratory/core-components/commit/46d600cea9eea44b0372b95d73fca7c4e4d3d404))
* update dependencies ([a27310a](https://github.com/alfa-laboratory/core-components/commit/a27310a23532fad6c719775d35a3032b13432f2c))
* use custom css-modules naming ([7eacdab](https://github.com/alfa-laboratory/core-components/commit/7eacdab49c905486c00fafc19abe38d018765ce8))
* **base-input:** add base-input ([55ecad6](https://github.com/alfa-laboratory/core-components/commit/55ecad6b33f44c6ea3fdd548138d8809f1cc97d8))
* **button:** add types. add forwardRef ([bd86206](https://github.com/alfa-laboratory/core-components/commit/bd86206310cbf3cec2215ccdd81158aa036fadfc))
* **button:** fixed story ([4811af8](https://github.com/alfa-laboratory/core-components/commit/4811af87c8ef9f8f37be6d1dad10621f6698d394))
* **button:** href prop, updated types & styles ([8745e44](https://github.com/alfa-laboratory/core-components/commit/8745e4463deaad04f954bf3d4ae0eca66ddfa99a))
* **button:** improved button theming ([0d2a255](https://github.com/alfa-laboratory/core-components/commit/0d2a2553aafbc34090dbc37edcb2291e0c8f09a6))
* **button:** updated button styles ([643429d](https://github.com/alfa-laboratory/core-components/commit/643429df73fb0b5d96975de2b4b9020c42e99416))
* **divider:** add divider ([0e4199c](https://github.com/alfa-laboratory/core-components/commit/0e4199c6d5b23438442393ef9a8f05594bc39a70))
* **input:** add new default input ([2314b3b](https://github.com/alfa-laboratory/core-components/commit/2314b3b6f47e7b4ebfb3718927ecd593d33b2e1b))
* **inputs:** icons & addons improvements ([e0abeba](https://github.com/alfa-laboratory/core-components/commit/e0abeba1772f8f0c12d01ca9ef5482d80a4e59cc))
* **inputs:** improve components, update styles & props ([98ff5dd](https://github.com/alfa-laboratory/core-components/commit/98ff5dda37e4b55ff5f4bd7c8c9bb80791625935))
* **inputs:** some refactor. add events & props ([27f5bba](https://github.com/alfa-laboratory/core-components/commit/27f5bba60e65181ad848a0628b72711f08377653))
* **lint:** add lint ([3bd5492](https://github.com/alfa-laboratory/core-components/commit/3bd5492bba179083cb26aa99c295a43f8e3be037))
* **portal:** add new portal component ([#75](https://github.com/alfa-laboratory/core-components/issues/75)) ([80d5499](https://github.com/alfa-laboratory/core-components/commit/80d5499edfc75c6c382feb3fa638c844c54edd11))
* **stories:** move to mdx stories ([#104](https://github.com/alfa-laboratory/core-components/issues/104)) ([40d6aff](https://github.com/alfa-laboratory/core-components/commit/40d6aff309e93dd7072c325c6752f067670fb263))
* **storybook:** add @storybook/addon-docs. update stories ([1e66461](https://github.com/alfa-laboratory/core-components/commit/1e66461164ac48252a305477a78ab49356a12343))
* **switch:** add new component ([4e23acd](https://github.com/alfa-laboratory/core-components/commit/4e23acd4d05db21930d137de72e55fc9732332d3))
* **tag:** add new component Tag ([1101b57](https://github.com/alfa-laboratory/core-components/commit/1101b5792eda538b2c508ff6ace7294c0544d1f0))
* **themes:** add themes structure ([#108](https://github.com/alfa-laboratory/core-components/issues/108)) ([eb05b6d](https://github.com/alfa-laboratory/core-components/commit/eb05b6df0d56c76f39ebdcf6a1a6de079c3aa63b))
* **typography:** add tools for mixin building ([e995924](https://github.com/alfa-laboratory/core-components/commit/e99592428c15573e9097a6457dd33361f5a75e85))
* **typography:** update tokens & scripts. rebuild ([91c7c76](https://github.com/alfa-laboratory/core-components/commit/91c7c769d9623cc38f9b44a38d3a027f9fed7136))
* **vars:** add index.css ([#90](https://github.com/alfa-laboratory/core-components/issues/90)) ([d9f3af1](https://github.com/alfa-laboratory/core-components/commit/d9f3af1521187d406271fed448dc4af498beb39e))
* **vars:** add negative gaps ([#99](https://github.com/alfa-laboratory/core-components/issues/99)) ([5dc2cf4](https://github.com/alfa-laboratory/core-components/commit/5dc2cf404558d705411f248b353aa4841a508799))


### Bug Fixes

* fix 4 spaces ([049cfa9](https://github.com/alfa-laboratory/core-components/commit/049cfa919cfd96315f716d724c0ea670c667aae2))
* fix issues accodring to PR [#36](https://github.com/alfa-laboratory/core-components/issues/36) ([9c57325](https://github.com/alfa-laboratory/core-components/commit/9c5732519063c89fa5a544ae87611cc1244ee78b))
* fix lint errors ([86fa366](https://github.com/alfa-laboratory/core-components/commit/86fa36694323671bd3e4bbb28980134d4e7e2ce2))
* fixed linter errors ([0c9f9c6](https://github.com/alfa-laboratory/core-components/commit/0c9f9c69127ba979a03e66dd80f4be083d2760ce))
* prepare inputs. move @types/jest to devDeps ([5f30dbb](https://github.com/alfa-laboratory/core-components/commit/5f30dbb064b468e54159914604426c8ec3310522))
* restore babel config ([50eaa68](https://github.com/alfa-laboratory/core-components/commit/50eaa682c93733a4d5f1dc0fbcd32a4214b643f3))
* update scripts & snapshots ([ce35a02](https://github.com/alfa-laboratory/core-components/commit/ce35a026850700af09953e47006bce0885c920aa))
* **build-root-package:** several hyphens in dir name ([aeb5dfb](https://github.com/alfa-laboratory/core-components/commit/aeb5dfba8a88153762602a9c20c8db478ae2943f))
* **button:** add missing href ([756d84b](https://github.com/alfa-laboratory/core-components/commit/756d84b775298045cdb205bc2f5155d04c6d4f35))
* **button:** remove unused deps ([f287d48](https://github.com/alfa-laboratory/core-components/commit/f287d48dadab80b2f98e43c5a9d74029d4286303))
* **button:** transition duration fix ([cd49653](https://github.com/alfa-laboratory/core-components/commit/cd49653db2670f9c846fb9d839f3c75d8e1c1f54))
* **deploy:** fix demo-build for master branch ([fc46861](https://github.com/alfa-laboratory/core-components/commit/fc46861e0c8b9664abda0efaba42a175504ab02f))
* **deps:** fix wrong dependencies ([#92](https://github.com/alfa-laboratory/core-components/issues/92)) ([085e2ce](https://github.com/alfa-laboratory/core-components/commit/085e2cef73841178322c89ef90e90747e6971adf))
* **divider:** delete default margin ([c514bf3](https://github.com/alfa-laboratory/core-components/commit/c514bf386755b7e29f36ae148deea7a08c7984da))
* **divider:** remarks from PR ([5df2c6f](https://github.com/alfa-laboratory/core-components/commit/5df2c6fae1d7eab7aaa77604e4f0f09c3304e1ab))
* **divider:** style ([d718a69](https://github.com/alfa-laboratory/core-components/commit/d718a6922f38ec0e60eea23ebe1803a8798de8fa))
* **input:** fix l bottom margin ([c41a840](https://github.com/alfa-laboratory/core-components/commit/c41a8408e1c8f338be4a787bb06d51be7f1e66da))
* **input:** fix render fn ([4cf8ef1](https://github.com/alfa-laboratory/core-components/commit/4cf8ef18dc8fc703f50ebf70877762b8bcac7a71))
* **input:** fix wrong filled state ([#109](https://github.com/alfa-laboratory/core-components/issues/109)) ([576495a](https://github.com/alfa-laboratory/core-components/commit/576495ac639278bf5e873535173736a8082d1b44))
* **input:** pass sub as BaseInput child ([b60d64c](https://github.com/alfa-laboratory/core-components/commit/b60d64ca432ccf94b7472116f04010327b7c9c72))
* **inputs:** border-box fix ([81752e1](https://github.com/alfa-laboratory/core-components/commit/81752e189382e7c2dc3982b50291b9be5827cea1))
* **inputs:** fix css vars ([1e233a2](https://github.com/alfa-laboratory/core-components/commit/1e233a26423c544ead925851a2e7925402710951))
* **inputs:** fix input width ([9ed950f](https://github.com/alfa-laboratory/core-components/commit/9ed950f103057c74cf02ff4a95a7a6ba868aced8))
* **inputs:** fix placeholders styles ([e404483](https://github.com/alfa-laboratory/core-components/commit/e4044838c96b527228a78a33ee24104c4899c80f))
* **inputs:** fix styles and types ([cb6b189](https://github.com/alfa-laboratory/core-components/commit/cb6b18957d86410deddfae2d41fea0ed201e4073))
* **inputs:** l size side paddings ([b9688a2](https://github.com/alfa-laboratory/core-components/commit/b9688a246aec4c5e442e6ee7a84a77c87d95371b))
* **inputs:** remove  from state, detect by value prop ([208c07e](https://github.com/alfa-laboratory/core-components/commit/208c07e9a73640f43950779615d4ec3f39e61c66))
* **inputs:** remove file type. fix styles. withIcon -> rightAddons ([f149aa8](https://github.com/alfa-laboratory/core-components/commit/f149aa88de2f94329e5c905846034d619589a7bf))
* **inputs:** styles fixes ([9a3199e](https://github.com/alfa-laboratory/core-components/commit/9a3199ef03d8e6a97d48c376b79938c2f1bf1372))
* **masked-input,switch:** fix wrong main field ([76d0e4e](https://github.com/alfa-laboratory/core-components/commit/76d0e4e6b05973977f49ef5edeb56790daffa566))
* **switch:** fix global tag styling ([66ce011](https://github.com/alfa-laboratory/core-components/commit/66ce0111b0e4c47e957f94afbf66f1ff50cab607))
* **switch:** replace div with span ([69624f9](https://github.com/alfa-laboratory/core-components/commit/69624f9c2a2e07aa91829a8940245e83e7576d05))
* **tag:** fix disabled state ([#110](https://github.com/alfa-laboratory/core-components/issues/110)) ([a622101](https://github.com/alfa-laboratory/core-components/commit/a622101cb448e623e95ae9bfecc310548ac52dbe))
* **tag:** fix styles ([#80](https://github.com/alfa-laboratory/core-components/issues/80)) ([bc80ba4](https://github.com/alfa-laboratory/core-components/commit/bc80ba47366a91d998d764675e17aeaed3c31666))
* **tests:** rewrite tests titles ([d0f16ad](https://github.com/alfa-laboratory/core-components/commit/d0f16ad812cb098ba9cbf612bde245784dfb6227))
* **tsconfig:** fix local module resolution ([f8faadf](https://github.com/alfa-laboratory/core-components/commit/f8faadfdfea9e8b570c77e1c8b3bf462ea6d26e6))
* **typography:** add prettier-ignore to fix mixin breaking. rebuild ([6909df6](https://github.com/alfa-laboratory/core-components/commit/6909df62bbc9b0dd67143cdb950dd8e50bf54067))
* **update-colors.js:** fix it ([c9b8c68](https://github.com/alfa-laboratory/core-components/commit/c9b8c68b8ac07e2bff33399cc1a99405bb71132d))
* **vars:** fix build for vars. add typography to index ([cc00344](https://github.com/alfa-laboratory/core-components/commit/cc00344d6db8e60b0b230829d8bed4ef5f20c9d1))