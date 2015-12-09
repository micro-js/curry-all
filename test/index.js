/**
 * Imports
 */

var curryAll = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  var a = {test: add}
  var b = curryAll(a)

  t.equal(b.test(1)(2), 3)
  t.end()
})

function add (a, b) {
  return a + b
}
