![Main Image](bookmark.svg)

# Contents
- [Contents](#contents)
- [Introduction](#introduction)
- [Supported platform](#supported-platform)
- [Pages](#pages)
  - [Sign in page](#sign-in-page)
  - [Sign up page](#sign-up-page)
  - [Bookmark page](#bookmark-page)
- [Commands](#commands)
  - [```Install```](#install)
  - [```Editing```](#editing)
  - [```Scripts```](#scripts)
    - [```npm start```](#npm-start)
    - [```npm run build```](#npm-run-build)
    - [```npm run test```](#npm-run-test)
    - [```npm run test:watch```](#npm-run-testwatch)
    - [```npm run pack```](#npm-run-pack)
- [Technologies](#technologies)
  - [HTML](#html)
  - [SCSS](#scss)
  - [Typescript](#typescript)
- [Credits](#credits)
- [Licence](#licence)


# Introduction

The goal is to prevent lock-in into a single browser. You can use the same bookmark across multiple browsers. It also supports tagging or the use of labels.

# Supported platform
At the moment, **chrome** browser and **chromium based** browsers are supported on PCs


# Pages
This is a single page app. All other pages are rendered inside the `popup.html`.

## Sign in page
For return users

## Sign up page
For new users

## Bookmark page
This is the main page, for adding new bookmarks. User should be logged in for it to work.

# Commands
## ```Install```

Clone the repo
```sh
git clone https://github.com/Diorla/bookmarker
```


## ```Editing```
Use any text-editor to update the content

## ```Scripts```

### ```npm start```
To start both compilation in the developer mode. This support Hot Module Reloading.
To load unpacked extension use `dist/`


### ```npm run build```
This compiles into `dist/` as well, but minimises the files for production



### ```npm run test```

To test using jest

### ```npm run test:watch```

To test in watch mode

### ```npm run pack```

This will generate a zip file that can be uploaded to chrome extension developer page. It runs a shell script.


# Technologies
This is based on chrome extension relying on this [link](https://developer.chrome.com/docs/extensions/reference/). All source code can be found inside `src/` folder


## HTML
![HTML](https://img.shields.io/badge/HTML-document-dd4b25)

This is a single html file, `src/index.html`, where all the initial content is loaded

## SCSS
![SCSS](https://img.shields.io/badge/CSS-style-orange)

This is a single file, `src/styles.scss`

## Typescript
![TS](https://img.shields.io/badge/TS-language-3178c6)

All typescript modules point to a `src/index.ts`


# Credits
- Badges from [shields](https://shields.io/)
- Readme image from [undraw](https://undraw.co/)
- [Favicon](https://iconarchive.com/show/all-flat-icons-by-mahm0udwally/Favorites-icon.html) from [IconArchive](https://iconarchive.com/artist/mahm0udwally.html)

# Licence
This is under [MIT](https://choosealicense.com/licenses/mit/) license, for more details, please check [Licence](LICENCE.md)

[(Back to top)](#contents)