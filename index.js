
module.exports = function (opts) {

  var base = opts.base || 16
  var factors = opts.factors || [1.5, 4/3]
  var length = opts.length || 16

  var arr = [base]

  for (var i = 0; i < length - 1; i++) {
    var n = i % factors.length
    var f = factors[n]
    var a = arr[arr.length - 1]
    arr.push(a * f)
  }

  return arr

}

