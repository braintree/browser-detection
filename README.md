Browser Detection
=================

A utility for detecting browser support for Braintree libs.

## Example

```js
var browserDetection = require('browser-detection');

browserDetection.isAndroid();
browserDetection.isChrome();
browserDetection.isIe9();
browserDetection.isIe10();
browserDetection.isIos();
browserDetection.isIosSafari();
browserDetection.isIosWebview();
browserDetection.isIosUIWebView();
browserDetection.isIosWKWebView();
browserDetection.isMobileFirefox();
browserDetection.supportsPopups();
```

To reduce build sizes, you can require just the modules you need:

```js
var isAndroid = require('browser-detection/is-android');
var isChrome = require('browser-detection/is-chrome');
var isIe9 = require('browser-detection/is-ie9');
var isIe10 = require('browser-detection/is-ie10');
var isIos = require('browser-detection/is-ios');
var isIosSafari = require('browser-detection/is-ios-safari');
var isIosWebview = require('browser-detection/is-ios-webview');
var isIosUIWebview = require('browser-detection/is-ios-uiwebview');
var isIosWKWebview = require('browser-detection/is-ios-wkwebview');
var isMobileFirefox = require('browser-detection/is-mobile-firefox');
var supportsPopups = require('browser-detection/supports-popups');
```

## Testing

```sh
npm test
```
