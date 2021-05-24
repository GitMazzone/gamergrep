<p align="center"><img src="./assets/img/banner.png" width="600" alt="View in VS Code or on Github. Bitbucket doesn't support cool Markdown stuff."></p>

<div align="center">

[![GitHub Actions](https://img.shields.io/badge/GitHub_Actions_CI-passing-brightgreen?style=flat-square&logo=GitHub)]()
![License](https://img.shields.io/badge/License-Proprietary-blue?style=flat-square)
[![Commitizen friendly](https://img.shields.io/badge/Commitizen-friendly-blue.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)

</div>
<div align="center">

<p align="center">
  <a href="https://github.com/GitMazzone/gamergrep/issues">Submit an Issue</a>
  <br>
  <br>
</p>

</div>

<hr>

# GamerGrep

🏆 **Your games. Your stats.** 🏆

# Getting Started

Style guide: https://github.com/airbnb/javascript  
Tailwindcss docs: https://tailwindcss.com/docs  
Jest docs: https://jestjs.io/docs/tutorial-react  
Cypress docs: https://docs.cypress.io/guides/references/assertions  
StorybookJS docs: https://storybook.js.org/docs/react/get-started/introduction

## Running locally

Make sure you globally install Commitizen with `npm i commitizen -g`. This will allow you to push clean, useful, standardized commits. ❤️

**To design & test individual components, first use Storybook:**

```
yarn storybook
```

**When you're ready to integrate components, continue.**  
With two terminals open, start the Webpack server in one with:

```
yarn watch
```

And start the electron app in the other with:

```
yarn start
```

## Test your code

Run unit tests with:

```
yarn test
```

With the app running, run e2e Cypress tests with:

```
yarn e2e
```

## Commit your code

Commit using:

```
yarn commit
```

Commitizen will walk you through the required fields.  
The main style points are

- Use imperative, present tense, "change" not "changed" nor "changes"
- Don't put a dot (.) at the end
- Breaking changes should start with `BREAKING CHANGE:`

This is not enforced and commits can pass through without using this. But that's nasty.

## Build & deploy

TODO
