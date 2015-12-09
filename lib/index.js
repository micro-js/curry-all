/**
 * Modules
 */

var isFunction = require('@micro-js/is-function')
var curryOnce = require('@micro-js/curry-once')
var mapObj = require('@micro-js/map-obj')

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
