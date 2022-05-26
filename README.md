# virens

[![build + deploy](https://github.com/gbdev/virens/actions/workflows/deploy.yml/badge.svg)](https://github.com/gbdev/virens/actions/workflows/deploy.yml)

Experimental Homebrew Hub frontend in Nuxt 3 (`3.0.0-rc.1` - Vue 3), consuming the new [Homebrew Hub API](https://github.com/gbdev/homebrewhub/).

The GB/GBC emulation is powered by the [binjgb](https://github.com/binji/binjgb) emulator, running in the browser via WebAssembly.

The UI component library used is [PrimeVue](https://www.primefaces.org/primevue).

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn
```

## Development Server

Start the development server on http://localhost:3000

```bash
yarn dev
```

## Production

Build the application for production:

```bash
yarn build
```

Locally preview production build:

```bash
yarn preview
```

## Deploy

Deployment to `hh.gbdev.io` is handled by a GitHub Action:

- A **CNAME** DNS record on `hh.gbdev.io` points to GitHub servers.
- Every time there's a push to the `master` branch, the [deploy.yml](https://github.com/gbdev/virens/blob/master/.github/workflows/deploy.yml) GitHub Action gets triggered, running `npm run build` and uploading the result build in the `gh-pages` branch of this repository which in turns gets served by GitHub Pages.
- A "CNAME" file is in the build directory, containing "hh.gbdev.io"
- A '.nojekyll' file is needed to allow the `_nuxt` folder to be statically served (otherwise ignored by a standard Jekyll build).

## Acknowledgements

[@binji](https://github.com/binji/binjgb) for the emulator and the additional browser code to make the wasm build work. mrioa and [aes](https://github.com/aesdotjs) for their nuxt knowledge.

_Virens_? The name of this project comes from _Flavo-virens_ and _Atro-virens_, two colors from [Saccardo's chromotaxy scale](https://en.wikipedia.org/wiki/File:Saccardo%27s_chromotaxy_scale.jpg), proposed by an Italian mycologist in 1894, for standardizing color naming of plant specimens. They are similar to the shades in the original Game Boy palette.
