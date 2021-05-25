# Changelog

The `UPCOMING` section is for the coming release and will be updated with a version & date when ready.

Releases are in chronological order (newest on top).

**Each version should:**  
List its release date in the format `YYYY-MM-DD`.  
Group changes to describe their impact on the project, as follows:

- `Added` for new features.
- `Changed` for changes in existing functionality.
- `Deprecated` for once-stable features removed in upcoming releases.
- `Removed` for deprecated features removed in this release.
- `Fixed` for any bug fixes.
- `Security` to invite users to upgrade in case of vulnerabilities.

## UPCOMING

## 0.1.0 (2021-05-24)

`Added` `electron-builder` for packaging for distribution. App now packages!  
`Added` environment config files for future use.  
`Changed` project structure. Now broken down into `app/`, `build/`, and `src/`. Read more about this in the README.  
`Changed` main entry points of the application to align with new build tooling.  
`Changed` local dev script `start` to be more convenient (now does webpack build & runs electron app at once, quickly!).

## 0.0.1 (2021-05-24)

`Added` StorybookJS.  
`Added` Prettier & related eslint plugin support.  
`Changed` Tailwind (and deps) to be compatible with Storybook.  
`Changed` main entry points (`main.js` & `index.html`) to live in `src/`.  
`Removed` custom frame, re-added default frame.  
`Fixed` Prettier. Actually works now!

## 0.0.0 (2021-05-19)

`Added` Airbnb style guide & eslint config.  
`Added` Tailwindcss.  
`Added` Commitizen.  
`Added` Cypress & Jest for e2e and unit testing.
