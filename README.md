# Simple Modular Scale

Modular scale based on an array of factors

## Usage

```bash
npm i simple-modular-scale
```

```js
var ms = require('simple-modular-scale')

var scale = ms({
  base: 16,
  factors: [3/2, 4/3],
  length: 8
})
// [ 16, 24, 32, 48, 64, 96, 128, 192 ]
```

MIT License

