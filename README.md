Browser Detection
=================

A utility for detecting browser support for Braintree libs.

## Example

```js
var browserDetection = require('browser-detection');

browserDetection.isAndroid();
browserDetection.isChrome();
browserDetection.isEdge();
browserDetection.isIe();
browserDetection.isIe9();
browserDetection.isIe10();
browserDetection.isIe11();
browserDetection.isIos();
browserDetection.isIosFirefox();
browserDetection.isIosSafari();
browserDetection.isIosWebview();
browserDetection.isIosUIWebView();
browserDetection.isIosWKWebView();
browserDetection.isMobileFirefox();
browserDetection.isSamsungBrowser();
browserDetection.supportsPaymentRequestApi();
browserDetection.supportsPopups();
```

To reduce build sizes, you can require just the modules you need:

```js
var isAndroid = require('browser-detection/is-android');
var isChrome = require('browser-detection/is-chrome');
var isEdge = require('browser-detection/is-edge');
var isIe = require('browser-detection/is-ie');
var isIe9 = require('browser-detection/is-ie9');
var isIe10 = require('browser-detection/is-ie10');
var isIe11 = require('browser-detection/is-ie11');
var isIos = require('browser-detection/is-ios');
var isIosFirefox = require('browser-detection/is-ios-firefox');
var isIosSafari = require('browser-detection/is-ios-safari');
var isIosWebview = require('browser-detection/is-ios-webview');
var isIosUIWebview = require('browser-detection/is-ios-uiwebview');
var isIosWKWebview = require('browser-detection/is-ios-wkwebview');
var isMobileFirefox = require('browser-detection/is-mobile-firefox');
var isSamsungBrowser = require('browser-detection/is-samsung');
var suportsPaymentRequestApi = require('browser-detection/supports-payment-request-api');
var supportsPopups = require('browser-detection/supports-popups');
```

## Testing

```sh
npm test
```
