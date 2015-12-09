
# curry-all

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Curry all of the functions in an object

## Installation

    $ npm install @micro-js/curry-all

## Usage

```js
var curryAll = require('@micro-js/curry-all')

var a = {test: add}
var b = curryAll(a)

b.test(1)(2) === 3

function add (a, b) {
  return a + b
}

```

## API

### curryAll(obj)

- `obj` - An object containing functions (other values will be skipped) that will be curried by [curry-once](https://github.com/micro-js/curry-once).

**Returns:** A new object with all of its functions curried by [curry-once](https://github.com/micro-js/curry-once)

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/curry-all.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/curry-all
[git-image]: https://img.shields.io/github/tag/micro-js/curry-all.svg
[git-url]: https://github.com/micro-js/curry-all
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@micro-js/curry-all.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@micro-js/curry-all
