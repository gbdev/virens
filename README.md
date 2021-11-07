# virens
[![build + deploy](https://github.com/gbdev/virens/actions/workflows/deploy.yml/badge.svg)](https://github.com/gbdev/virens/actions/workflows/deploy.yml)
 
Experimental Homebrew Hub frontend in Vue 3, consuming the new [HHub API](https://github.com/gbdev/homebrewhub/).

The game player is powered by the [binjgb](https://github.com/binji/binjgb) emulator, running in the browser via WebAssembly.

The UI component library used is [PrimeVue](https://www.primefaces.org/primevue).

## Run

Project setup, install npm dependencies
```
npm install
```

Compiles and hot-reloads for development
```
npm run serve
```

Compiles and minifies for production
```
npm run build
```

## Deploy

Deployment to `hh2.gbdev.io` is handled by a GitHub Action:

- A **CNAME** DNS record points to `gbdev.github.io`.
- Every time there's a push to the `master` branch, the [deploy.yml](https://github.com/gbdev/virens/blob/master/.github/workflows/deploy.yml) GitHub Action gets triggered, running `npm run build` and uploading the result build in the `gh-pages` branch of this repository which in turns gets served by GitHub Pages.
- A "CNAME" file is created in the build directory by the GitHub Action, containing "hh2.gbdev.io".

## Acknowledgements

[@binji](https://github.com/binji/binjgb)


V-virens? The name of this project comes from *Flavo-virens* and *Atro-virens*, two colors from [Saccardo's chromotaxy scale](https://en.wikipedia.org/wiki/File:Saccardo%27s_chromotaxy_scale.jpg), proposed by an Italian mycologist in 1894, for standardizing color naming of plant specimens. They are similar to the shades in the original Game Boy palette.
