Browser Detection
=================

A utility for detecing browser support for Braintree libs.

## Example

```js
var browserDetection = require('browser-detection');

browserDetection.isAndroid();
browserDetection.isChrome();
browserDetection.isIe9();
browserDetection.isIe10();
browserDetection.isIos();
browserDetection.isIosWebview();
browserDetection.supportsPopups();
```

To reduce build sizes, you can require just the modules you need:

```js
var isAndroid = require('browser-detection/is-android');
var isChrome = require('browser-detection/is-chrome');
var isIe9 = require('browser-detection/is-ie9');
var isIe10 = require('browser-detection/is-ie10');
var isIos = require('browser-detection/is-ios');
var isIosWebview = require('browser-detection/is-ios-webview');
var supportsPopups = require('browser-detection/supports-popups');
```

## Testing

```sh
npm test
```
