css-reset-and-normalize
=======================

  > A cleaned up combination of Eric Meyer's
  > [*Reset CSS 2.0*](http://meyerweb.com/eric/tools/css/reset/)
  > and Nicolas Gallagher's 
  > [*normalize.css*](http://necolas.github.io/normalize.css/)
  > with some optional flavor. 

# WORK IN PROGRESS

<!-- MarkdownTOC -->

- [Usage](#usage)
- [Differences from Reset 2.0](#differences-from-reset-20)
- [Differences from normalize.css 3.2.2](#differences-from-normalizecss-322)
- [Optional additional flavor](#optional-additional-flavor)
- [Why?](#why)
- [License](#license)

<!-- /MarkdownTOC -->

---

## Usage

Sources are available in [stylus](http://stylus-lang.com/) or generated css 
including minified versions.

`<link…>` or `@import` the minified or unminified css version:

  - `css/reset-and-normalize.min.css`
  - `css/reset-and-normalize.css`

Or with some [additional flavor](#optional-additional-flavor):

  - `css/flavored-reset-and-normalize.min.css`
  - `css/flavored-reset-and-normalize.css`

Or `@require` the stylus versions:

  - `stylus/reset-and-normalize.styl`
  - `stylus/flavored-reset-and-normalize.styl`


## Differences from Reset 2.0

  - Removed `hgroup` from all selectors as it is not included in the HTML5 
    specification anymore
  - Added `main` to basic reset
  - Added `main` and `summary` to HTML5 display-role reset selector


## Differences from normalize.css 3.2.2

  - Removed everything that is already covered or overwritten by Reset:
      * HTML5 display-role reset
      * `h1`: `font-size`, `margin`
      * `sub, sup`: `vertical-align`
      * `figure`: `margin`
      * `code, kbd, pre, samp`: `font-size`
      * `fieldset`: `border`, `margin`, `padding`
      * `table`: `border-collapse`, `border-spacing`
      * `td, th`: `padding`
  - Removed vendor prefixes for `box-sizing` (autoprefixer handles that)


## Optional additional flavor

  - Add rules for responsive `@viewport`
  - Set `box-sizing:border-box` for everything
  - Add transparent tap highlight for iOS
  - help cursor for `abbr`


## Why?

I personally prefer normalizing over resetting in general.
But when it comes to producing detailed custom styles for all elements, i find 
myself overwriting and resetting most rules, that were previously normalized.
That's why I ended up with a combination of both: reset and normalize – with 
some optional flavor…


## License

[MIT &copy; Simon Lepel 2015](http://simbo.mit-license.org/)
