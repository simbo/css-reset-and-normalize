css-reset-and-normalize
=======================

  > A combination of css reset and normalize (available in CSS, SCSS, Stylus and
  > LESS).

[![npm package version](https://img.shields.io/npm/v/css-reset-and-normalize.svg?style=flat-square)](https://www.npmjs.com/package/css-reset-and-normalize)
[![Travis CI build status](https://travis-ci.org/simbo/css-reset-and-normalize.svg?branch=master)](https://travis-ci.org/simbo/css-reset-and-normalize/builds)


<!-- TOC -->

- [About](#about)
  - [Rules and Reasons](#rules-and-reasons)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

<!-- /TOC -->

---


## About

This combination of css reset and normalize is based on

  - [CSS Reset 2.0](https://meyerweb.com/eric/tools/css/reset/)
    (public domain) by Eric Meyer

  - [normalize.css 8.0.0](https://github.com/necolas/normalize.css)
    (MIT) by Nicolas Gallagher and Jonathan Neal

  - [Bootstrap 4.1.1 Reboot](https://github.com/twbs/bootstrap/blob/v4-dev/scss/_reboot.scss)
    (MIT) by Twitter Inc.


### Rules and Reasons

Take a look at the [source code](./scss/reset-and-normalize.scss), it has
comments.

BTW: There's a good article about [Reboot, Resets and Reasoning](https://css-tricks.com/reboot-resets-reasoning/)
by Chris Coyier.


## Installation

`css-reset-and-normalize` is a npm package. You can install it…

``` sh
# …using npm
npm install css-reset-and-normalize
# …or yarn
yarn add css-reset-and-normalize
```

You can also download or import the latest generated CSS directly:

  - CSS with comments:  
    [https://simbo.github.io/css-reset-and-normalize/reset-and-normalize.css](https://simbo.github.io/css-reset-and-normalize/reset-and-normalize.css)

  - Minified CSS:  
    [https://simbo.github.io/css-reset-and-normalize/reset-and-normalize.min.css](https://simbo.github.io/css-reset-and-normalize/reset-and-normalize.min.css)


## Usage

There are multiple ways:

  - HTML `<link>`

    ``` html
    <link rel="stylesheet" href="path/to/reset-and-normalize.min.css">
    ```

  - CSS `@import`

    ``` css
    @import "path/to/reset-and-normalize.min.css"
    ```

  - SCSS `@import`

    ``` scss
    @import 'path/to/node_modules/css-reset-and-normalize/scss/reset-and-normalize'
    ```

  - Stylus `@require`

    ``` stylus
    @require 'path/to/node_modules/css-reset-and-normalize/stylus/reset-and-normalize'
    ```

  - LESS `@import`

    ``` less
    @import 'path/to/node_modules/css-reset-and-normalize/less/reset-and-normalize'
    ```


## License

[MIT &copy; Simon Lepel](http://simbo.mit-license.org/)
