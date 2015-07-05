# Simple Modular Scale

Modular scale based on an array of ratios

## Usage

```bash
npm i simple-modular-scale
```

```js
var ms = require('simple-modular-scale')

var scale = ms({
  base: 16,
  ratios: [3/2, 4/3],
  length: 8
})
// [ 16, 24, 32, 48, 64, 96, 128, 192 ]
```

## Options

- `base` is the root number from which all values in the scale are derived
- `ratios` is an array of numbers that are multiplied by the previous number in the sequence. Ratios are alternated to create a sort of multi-stranded modular scale.
- `length` is the total number of values output.

## Example

```js
var ms = require('simple-modular-scale', {
  base: 16,
  ratios: [ 9/8, 4/3, 4/3 ],
  length: 8
})
```

Multiplicand | Multiplier | Product
-------------|------------|--------
16 | 1   | 16
16 | 9/8 | 18
18 | 4/3 | 24
24 | 4/3 | 32
32 | 9/8 | 36
36 | 4/3 | 48
48 | 4/3 | 64
64 | 9/8 | 72

Starting with a base of 16, the next number added is 16 * 9/8, which is 18.
Next 18 is multiplied by `ratios[1]` or 4/3 to produce 24.
Then 24 is multiplied by `ratios[2]` or 4/3 to produce 32.
This sequence continues until an array of `length` is produced.


MIT License

