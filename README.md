css-reset-and-normalize
=======================

  > A combination of css reset and normalize (available in CSS, SCSS, Stylus and
  > LESS).

[![npm Package Version](https://img.shields.io/npm/v/css-reset-and-normalize?)](https://www.npmjs.com/package/css-reset-and-normalize)
[![npm Downloads](https://img.shields.io/npm/dw/css-reset-and-normalize?color=gold)](https://www.npmjs.com/package/css-reset-and-normalize)
[![Package Dependencies](https://img.shields.io/david/simbo/css-reset-and-normalize?label=deps)](https://www.npmjs.com/package/css-reset-and-normalize?activeTab=dependencies)
[![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/simbo/css-reset-and-normalize/CI/master)](https://github.com/simbo/css-reset-and-normalize/actions?query=workflow%3ACI)
[![GitHub last Commit](https://img.shields.io/github/last-commit/simbo/css-reset-and-normalize/master)](https://github.com/simbo/css-reset-and-normalize/commits/master)
[![GitHub Repo](https://img.shields.io/badge/repo-public-87ceeb)](https://github.com/simbo/css-reset-and-normalize)
[![License MIT](https://img.shields.io/badge/license-MIT-4cc552)](http://simbo.mit-license.org/)


<!-- TOC depthFrom:2 anchorMode:github.com -->

- [About](#about)
  - [Rules and Reasons](#rules-and-reasons)
- [Installation](#installation)
- [Usage](#usage)
- [Optional Addons:](#optional-addons)
  - [Usage](#usage-1)
- [License](#license)

<!-- /TOC -->

---


## About

This combination of css reset and normalize is based on

  - [CSS Reset 2.0](https://meyerweb.com/eric/tools/css/reset/)
    (public domain) by Eric Meyer

  - [normalize.css 8.0.1](https://github.com/necolas/normalize.css)
    (MIT) by Nicolas Gallagher and Jonathan Neal

  - [Bootstrap 4.5.3 Reboot](https://github.com/twbs/bootstrap/blob/v4.5.3/scss/_reboot.scss)
    (MIT) by Twitter Inc.


### Rules and Reasons

Take a look at the [source code](./scss/reset-and-normalize.scss), it has
comments.

BTW: Here's an article about [Reboot, Resets and Reasoning](https://css-tricks.com/reboot-resets-reasoning/)
by Chris Coyier.


## Installation

`css-reset-and-normalize` is a npm package. You can install it…

``` sh
# …using npm
npm install --save css-reset-and-normalize
# …or yarn
yarn add css-reset-and-normalize
```

You can also use the latest generated CSS directly from a CDN:

- from *jsdelivr*:  
  `<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/css-reset-and-normalize/css/reset-and-normalize.min.css">`

- from *unpkg*:  
  `<link rel="stylesheet" href="//unpkg.com/css-reset-and-normalize/css/reset-and-normalize.min.css">`


## Usage

There are multiple ways:

  - HTML `<link>`

    ``` html
    <link rel="stylesheet" href="path/to/reset-and-normalize.min.css">
    ```

  - CSS `@import`

    ``` css
    @import "path/to/reset-and-normalize.min.css";
    ```

  - SCSS `@import`

    ``` scss
    @import 'path/to/node_modules/css-reset-and-normalize/scss/reset-and-normalize';
    ```

  - Stylus `@require`

    ``` stylus
    @require 'path/to/node_modules/css-reset-and-normalize/stylus/reset-and-normalize'
    ```

  - LESS `@import`

    ``` less
    @import 'path/to/node_modules/css-reset-and-normalize/less/reset-and-normalize';
    ```


## Optional Addons:

  - `button-reset`
  - `link-reset`

See source code.


### Usage

The optional addons can be included the same way like the base library.

SCSS example:

``` scss
@import 'path/to/node_modules/css-reset-and-normalize/scss/reset-and-normalize';
@import 'path/to/node_modules/css-reset-and-normalize/scss/button-reset';
@import 'path/to/node_modules/css-reset-and-normalize/scss/link-reset';
```


## License

[MIT &copy; Simon Lepel](http://simbo.mit-license.org/)
