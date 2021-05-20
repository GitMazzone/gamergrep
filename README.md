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

## Running locally

Make sure you globally install Commitizen with `npm i commitizen -g`.

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

### Commit format:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

### Type

Must be one of the following:

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing
  semi-colons, etc)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing or correcting existing tests
- **chore**: Changes to the build process or auxiliary tools and libraries such as documentation
  generation

### Scope

The scope could be anything specifying place of the commit change. For example `$location`,
`$browser`, `$compile`, `$rootScope`, `ngHref`, `ngClick`, `ngView`, etc...

You can use `*` when the change affects more than a single scope.

### Subject

The subject contains succinct description of the change:

- use the imperative, present tense: "change" not "changed" nor "changes"
- don't capitalize first letter
- no dot (.) at the end

### Body

Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes".
The body should include the motivation for the change and contrast this with previous behavior.

### Footer

The footer should contain any information about **Breaking Changes** and is also the place to
[reference GitHub issues that this commit closes][closing-issues].

**Breaking Changes** should start with the word `BREAKING CHANGE:` with a space or two newlines.
The rest of the commit message is then used for this.

A detailed explanation can be found in this [document][commit-message-format].

## Build & deploy

TODO
