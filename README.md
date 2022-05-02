# virens

[![build + deploy](https://github.com/gbdev/virens/actions/workflows/deploy.yml/badge.svg)](https://github.com/gbdev/virens/actions/workflows/deploy.yml)

Experimental Homebrew Hub frontend in Nuxt 3, consuming the new [HHub API](https://github.com/gbdev/homebrewhub/).

The game player is powered by the [binjgb](https://github.com/binji/binjgb) emulator, running in the browser via WebAssembly.

The UI component library used is [PrimeVue](https://www.primefaces.org/primevue).

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

## Deploy

Deployment to `hh2.gbdev.io` is handled by a GitHub Action:

- A **CNAME** DNS record points to `gbdev.github.io`.
- Every time there's a push to the `master` branch, the [deploy.yml](https://github.com/gbdev/virens/blob/master/.github/workflows/deploy.yml) GitHub Action gets triggered, running `npm run build` and uploading the result build in the `gh-pages` branch of this repository which in turns gets served by GitHub Pages.
- A "CNAME" file is in the build directory, containing "hh2.gbdev.io"
- A '.nojekyll' file is needed to allow `_nuxt` to be served (otherwise ignored by a standard Jekyll builds)

## Acknowledgements

[@binji](https://github.com/binji/binjgb),

V-virens? The name of this project comes from _Flavo-virens_ and _Atro-virens_, two colors from [Saccardo's chromotaxy scale](https://en.wikipedia.org/wiki/File:Saccardo%27s_chromotaxy_scale.jpg), proposed by an Italian mycologist in 1894, for standardizing color naming of plant specimens. They are similar to the shades in the original Game Boy palette.
