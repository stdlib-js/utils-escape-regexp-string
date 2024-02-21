<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# rescape

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Escape a [regular expression][mdn-regexp] string or pattern.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import rescape from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-escape-regexp-string@esm/index.mjs';
```

#### rescape( str )

Escapes a [regular expression][mdn-regexp] `string` or pattern.

```javascript
var str = rescape( '/[A-Z]*/' );
// returns '/\\[A\\-Z\\]\\*/'

str = rescape( '[A-Z]*' );
// returns '\\[A\\-Z\\]\\*'
```

If provided a value which is not a primitive `string`, the function **throws** a `TypeError`.

```javascript
try {
    rescape( null );
    // throws an error...
} catch ( err ) {
    console.error( err );
}
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

-   The following characters have special meaning inside of regular expressions and need to be escaped in case the characters should be treated literally:

    | description   | value    |
    | ------------- | -------- |
    | Backslash     | `&#92;`  |
    | Braces        | `{ }`    |
    | Brackets      | `[ ]`    |
    | Caret         | `^`      |
    | Dollar Sign   | `$`      |
    | Forward Slash | `/`      |
    | Asterisk      | `*`      |
    | Parentheses   | `( )`    |
    | Period        | `.`      |
    | Plus Sign     | `+`      |
    | Vertical Bar  | `&#124;` |
    | Question Mark | `?`      |

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint-disable no-useless-escape -->

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import rescape from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-escape-regexp-string@esm/index.mjs';

var out = rescape( '/beep/' );
// returns '/beep/'

out = rescape( 'beep' );
// returns 'beep'

out = rescape( '/[A-Z]*/' );
// returns '/\\[A\\-Z\\]\\*/'

out = rescape( '[A-Z]*' );
// returns '\\[A\\-Z\\]\\*'

out = rescape( '/\\\//ig' );
// returns '/\\\\\\\//ig'

out = rescape( '\\\/' );
// returns '\\\\\\\/'

out = rescape( '/[A-Z]{0,}/' );
// returns '/\\[A\\-Z\\]\\{0,\\}/'

out = rescape( '[A-Z]{0,}' );
// returns '\\[A\\-Z\\]\\{0,\\}'

out = rescape( '/^boop$/' );
// returns '/\\^boop\\$/'

out = rescape( '^boop$' );
// returns '\\^boop\\$'

out = rescape( '/(?:.*)/' );
// returns '/\\(\\?:\\.\\*\\)/'

out = rescape( '(?:.*)' );
// returns '\\(\\?:\\.\\*\\)'

out = rescape( '/(?:beep|boop)/' );
// returns '/\\(\\?:beep\\|boop\\)/'

out = rescape( '(?:beep|boop)' );
// returns '\\(\\?:beep\\|boop\\)'

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-escape-regexp-string.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-escape-regexp-string

[test-image]: https://github.com/stdlib-js/utils-escape-regexp-string/actions/workflows/test.yml/badge.svg?branch=v0.2.1
[test-url]: https://github.com/stdlib-js/utils-escape-regexp-string/actions/workflows/test.yml?query=branch:v0.2.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-escape-regexp-string/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-escape-regexp-string?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-escape-regexp-string.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-escape-regexp-string/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-escape-regexp-string/tree/deno
[deno-readme]: https://github.com/stdlib-js/utils-escape-regexp-string/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/utils-escape-regexp-string/tree/umd
[umd-readme]: https://github.com/stdlib-js/utils-escape-regexp-string/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/utils-escape-regexp-string/tree/esm
[esm-readme]: https://github.com/stdlib-js/utils-escape-regexp-string/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/utils-escape-regexp-string/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-escape-regexp-string/main/LICENSE

[mdn-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

</section>

<!-- /.links -->
