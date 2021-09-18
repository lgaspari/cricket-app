<!-- omit in toc -->
# Cricket

<!-- omit in toc -->
## Table of contents

- [Welcome to Cricket!](#welcome-to-cricket)
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [Libraries](#libraries)
- [Tools](#tools)
- [Attributions](#attributions)

## Welcome to Cricket!

This repository contains all the bits related to the [Cricket application](https://lgaspari.github.io/cricket-app/) hosted on GitHub Pages.

Cricket is a PWA (Progressive Web Application) that can be installed on any device through the browser.

## Getting Started

<!-- omit in toc -->
### Cloning the repository

First, clone the `cricket-app` repository:

```sh
# HTTPS
git clone https://github.com/lgaspari/cricket-app.git

# SSH
git clone git@github.com:lgaspari/cricket-app.git
```

Then, move to the folder:

```sh
cd cricket-app/
```

<!-- omit in toc -->
### Installing the dependencies

This repository uses `yarn` for managing the project's packages:

```sh
yarn install  # or simply `yarn`
```

<!-- omit in toc -->
### Running the application

Now, you should be able to start the application:

```sh
yarn start
```

After running the command above, the application should be opened automatically on your default browser, else you can do open it manually by clicking the following link: [http://localhost:3000/cricket-app](http://localhost:3000/cricket-app).

<!-- omit in toc -->
### Deploy the application

Therefore, you can deploy the application (if needed) on GitHub Pages:

```sh
yarn deploy
```

The above command will take care of the following actions:

1. Cleaning up the `build/` folder
2. Building the application
3. Deploying the application using the latest build

<!-- omit in toc -->
### Tests

```sh
yarn test
```

<!-- omit in toc -->
### Linter

```sh
yarn lint
```

## Folder Structure

```txt
.
├── build/                  # Generated after running `yarn build`
├── node_modules/           # Generated after running `yarn install`
├── public/
│   ├── assets/
│   │   ├── audios/         # Cricket sounds
│   │   ├── icons/          # Favicon assets
│   │   └── images/         # Cricket images
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── src/                    # Source code bits
│   ├── components/
│   └── index.tsx
├── .gitignore
├── package.json
├── README.md
├── tsconfig.json
└── yarn.lock
```

## Libraries

- Deployment: [gh-pages](https://www.npmjs.com/package/gh-pages)
- Linter: [eslint](https://www.npmjs.com/package/eslint)
- Tests: [@testing-library/react](https://www.npmjs.com/package/@testing-library/react)

## Tools

- Assets generator: [pwa-asset-generator](https://github.com/onderceylan/pwa-asset-generator)
- Favicon generator: [RealFaviconGenerator](https://realfavicongenerator.net/)
- Folder structure generator: [tree.nathanfriend.io](https://tree.nathanfriend.io/)
- SVG optimizations: [SVGOMG](https://jakearchibald.github.io/svgomg/)

## Attributions

- [Insect Vectors by Vecteezy](https://www.vecteezy.com/free-vector/insect)
