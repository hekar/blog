---
layout: post
date: 2019-08-23
title: Electron, Vue.js and Vuetify Guide
author: hkhani
---

This post is a quick tutorial on how to create an [electron-vue][electron-vue-github] application with the [vuetify] library. The resulting application will bundles into Windows, macOS and Linux binaries.

Disclaimer: The included version of [electron] with [electron-vue][electron-vue-github] is rather dated. There are defects in the version of electron shipped with electron-vue. Upgrading the version of electron is a difficult undertaking and may not be worthwhile. The end of this post contains links to various resources that can provide more update to date environments. Updating electron can be important if you are building a security sensitive application or using the application to browse external websites.

If you want to skip the tutorial and simply download the template, it can be found here: https://github.com/hekar/electron-vue-starter

##### Install dependencies

Install [vue-cli] and [electron-vue] to get started
```
npm install -g vue-cli
vue init simulatedgreg/electron-vue electron-vue-starter

npm install -g yarn
cd electron-vue-starter
yarn install
```

##### Install Vuetify

Add the dependency for vuetify 2.x and material design fonts
```
yarn add vuetify@^2.0.1 @mdi/font
```

Edit `src/renderer/main.js` to use include Vuetify in the list of plugins

Add the following
```js
import Vuetify from 'vuetify'
import '@mdi/font/css/materialdesignicons.min.css'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const vue = new Vue({
  ...
  vuetify: new Vuetify({})
})
```

##### Configure Vuetify theme

Default to the light theme by disabling dark mode

Edit `src/renderer/App.vue`
```js
  export default {
    name: 'electron-vue-starter',
    created () {
      this.$vuetify.theme.dark = false
    }
  }
```

##### Whitelist Vuetify

This is the easiest step to overlook. Add `vuetify` to the `whiteListedModules` list, so that it will be included in the webpack bundle.

Edit `.electron-vue/webpack.renderer.config.js`

```js
let whiteListedModules = ['vue', 'vuetify']
```

##### Start the electron app

```
yarn run dev
```

Debug using port 5858 in Google Chrome or Node Inspector for the server side portion of the application or press `Shift + Ctrl + I` for internal devtools in Electron for editing the web rendering portion.

##### Create your first view

Edit `src/renderer/components/LandingPage.vue`

Replace
```js
  <div id="wrapper">
    ...
  </div>
```

With
```js
  <div id="wrapper">
    <v-card
        max-width="344"
        class="mx-auto"
    >
        <v-card-title>My First electron-vue App</v-card-title>
        <v-card-text>This is awesome!</v-card-text>
        <v-card-actions>
        <v-btn text>Click Here</v-btn>
        </v-card-actions>
    </v-card>
  </div>
```

##### Package the electron app

```
yarn run build
```

The results of the build process will be visible in `./build/` and will depend on your platform. Cross platform compilation is not supported, so you will need the target operating system to compile that release.

Supported target formats are:

- **All platforms:** 7z, zip, tar.xz, tar.lz, tar.gz, tar.bz2, dir (unpacked directory).
- **Windows:** nsis (Installer), nsis-web (Web installer), portable (portable app without installation), AppX (Windows Store), Squirrel.Windows.
- **Linux:** AppImage, snap, debian package (deb), rpm, freebsd, pacman, p5p, apk.
- **macOS:** dmg, pkg, mas, mas-dev.

From the [electron-builder] documentation

### Conclusion

Getting started with electron-vue and vuetify is fairly simple, though there are issues that require workarounds. Changes such as adding the vuetify module to the `whitelist` collection are easy to miss. [electron-vue][electron-vue] is a little out of date, so in a follow up post, I will go over how to configure electron, [electron-builder], [vue] and [vuetify] from scratch. I will also go over [electron-nuxt] which is a project looking to replace [electron-vue].

For now, [electron-vue] is still a great project and highly recommended for users that wish to quickly create desktop applications with [electron], [vue] and [vuetify].


[vue]: https://github.com/vuejs/vue
[vue-cli]: https://github.com/vuejs/vue-cli
[electron]: https://electronjs.org
[electron-builder]: https://www.electron.build
[electron-vue-github]: https://github.com/SimulatedGREG/electron-vue
[electron-vue]: https://madewithvuejs.com/electron-vue
[electron-nuxt]: https://github.com/michalzaq12/electron-nuxt
[vuetify]: https://vuetifyjs.com
[electron-builder]: https://www.electron.build
