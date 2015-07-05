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

- `base` (default `16`) is the root number from which all values in the scale are derived
- `ratios` (default `[3/2, 4/3]`) is an array of numbers that are multiplied by the previous number in the sequence. Ratios are alternated to create a sort of multi-stranded modular scale.
- `length` (default `16`) is the total number of values output.

## Examples

### Multiple Ratios

```js
var ms = require('simple-modular-scale')

var scale = ms({
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

### Multi-Stranded Scales

For a more traditional multi-stranded scale, call the function twice.

```js
var base = 16
var scaleA = ms({
  base: base,
  ratios: [5/4],
  length: 5
})
var scaleB = ms({
  base: base,
  ratios: [3/2],
  length: 5
})
```

Multiplicand | Multiplier | Product
-------------|------------|--------
16 | 1   | 16
16 | 5/4 | 20
20 | 5/4 | 25
25 | 5/4 | 31.25
31.25 | 5/4 | 39.0625

Multiplicand | Multiplier | Product
-------------|------------|--------
16 | 1   | 16
16 | 3/2 | 24
24 | 3/2 | 36
36 | 3/2 | 54
54 | 3/2 | 81


### Using Values for Styles in React

```js
// styles.js
import ms from 'simple-modular-scale'

let scale = ms({
  base: 8,
  ratios: [9/8, 4/3, 4/3]  
})

export default {
  // font sizes
  h1: scale[6], // 32
  h2: scale[5], // 24
  h3: scale[4], // 18
  h4: scale[3], // 16
  h5: scale[2], // 12
  h6: scale[1]  //  9
}
```

MIT License

