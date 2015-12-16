/**
 * Modules
 */

var isFunction = require('@f/is-function')
var curryOnce = require('@f/curry-once')
var mapObj = require('@f/map-obj')

/**
 * Expose curryAll
 */

module.exports = curryAll['default'] = curryAll

/**
 * curryAll
 */

function curryAll (obj) {
  return mapObj(maybeCurry, obj)
}

function maybeCurry (value) {
  return isFunction(value)
    ? curryOnce(value)
    : value
}
