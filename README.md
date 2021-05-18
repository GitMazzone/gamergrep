<p align="center"><img src="./assets/img/banner.png" width="600" alt="View in VS Code or on Github. Bitbucket doesn't support cool Markdown stuff."></p>

<div align="center">

[![GitHub Actions](https://img.shields.io/badge/GitHub_Actions_CI-passing-brightgreen?style=flat-square&logo=GitHub)]()
![License](https://img.shields.io/badge/License-Proprietary-blue?style=flat-square)
[![Semantic Release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/Commitizen-friendly-blue.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)

</div>
<div align="center">

![Latest npm package version](https://img.shields.io/badge/NPM%40stable-1.0.0-blue?logo=npm&style=flat-square)
![Latest npm package version](https://img.shields.io/badge/NPM%40beta-2.0.0-orange?logo=npm&style=flat-square)

</div>
<div align="center">

<p align="center">
  <a href="https://github.com/GitMazzone/wowza/issues">Submit an Issue</a>
  <br>
  <br>
</p>

</div>

<hr>

# GamerGrep

❤️ **Your games. Your stats.**

# Getting Started

## Running locally

```bash
yarn start
```

To debug the prod build, run

```bash
yarn cross-env DEBUG_PROD=true yarn build
yarn cross-env DEBUG_PROD=true yarn start
```

# Build & Deploy

Prod build - `yarn build`  
Inspect build size - `OPEN_ANALYZER=true yarn build`  
Package for local platform, output in release dir - `yarn package`
