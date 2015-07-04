
var ms = require('..')
var assert = require('assert')
var scale

describe('simple-modular-scale', function() {

  it('should return an array', function() {
    scale = ms({
      base: 16,
      factors: [3/2, 4/3],
      length: 8
    })
    assert.equal(Array.isArray(scale), true)
  })

  it('should have a length of 8', function() {
    console.log(scale)
    assert.equal(scale.length, 8)
  })

})


