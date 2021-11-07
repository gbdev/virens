# virens

Experimental Homebrew Hub frontend in Vue 3, consuming the new [HHub API](https://github.com/gbdev/homebrewhub/).

The game player is powered by the [binjgb](https://github.com/binji/binjgb) emulator, running in the browser via WebAssembly.

The UI library used is PrimeVue.

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