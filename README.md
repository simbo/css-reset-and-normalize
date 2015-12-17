css-reset-and-normalize
=======================

  > A cleaned up combination of Eric Meyer's [*Reset CSS 2.0*](http://meyerweb.com/eric/tools/css/reset/),
  > Nicolas Gallagher's [*normalize.css*](http://necolas.github.io/normalize.css/).

## Why?

I personaly prefer normalizing over resetting by default.
But when it comes to producing custom styles for detailed elements, i find myself overwriting and resetting most rules, that were previously normalized.
That's why I ended up with a combination of both: reset and normalize.


## Differences from Eric Meyer's Reset 2.0

  - Removed `hgroup` from all selectors as it is not included in the HTML5 specification anymore
  - Added `section` and `summary` to HTML5 display-role reset selector


## Differences from Nicolas Gallagher's normalize.css

  - Removed everything that is already covered by Eric Meyer's Reset:
      * `display:block` for HTML5 elements
      * `h1`: `font-size`, `margin`
      * `sub, sup`: `vertical-align`
      * `figure`: `margin`
      * `code, kbd, pre, samp`: `font-size`
      * `fieldset`: `border`, `margin`, `padding`
      * `table`: `border-collapse`, `border-spacing`
      * `td, th`: `padding`


## License

[MIT &copy; Simon Lepel 2015](http://simbo.mit-license.org/)
