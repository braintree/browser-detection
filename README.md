Browser Detection
=================

A utility for detecing browser support for Braintree libs.

## Example

```js
var browserDetection = require('browser-detection');

browserDetection.isIe9();
browserDetection.isIos();
browserDetection.isAndroid();
browserDetection.supportsPopups();
```

To reduce build sizes, you can require just the modules you need:

```js
var isIe9 = require('browser-detection/is-ie9');
var isIos = require('browser-detection/is-ios');
var isAndroid = require('browser-detection/is-android');
var supportsPopups = require('browser-detection/supports-popups');
```

## Testing

```sh
npm test
```
