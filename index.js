
module.exports = function (opts) {

  var opts = opts || {}
  var base = opts.base || 16
  // opts.factors will be deprecated
  var ratios = opts.ratios || opts.factors || [3/2, 4/3]
  var length = opts.length || 16

  var arr = [base]

  for (var i = 0; i < length - 1; i++) {
    var n = i % ratios.length
    var f = ratios[n]
    var a = arr[arr.length - 1]
    arr.push(a * f)
  }

  return arr

}

