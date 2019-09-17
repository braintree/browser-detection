Browser Detection
=================

A utility for detecting browser support for Braintree libs.

## Example

```js
const browserDetection = require('browser-detection');

browserDetection.isAndroid();
browserDetection.isChromeOS();
browserDetection.isChrome();
browserDetection.isEdge();
browserDetection.isFirefox();
browserDetection.isIe();
browserDetection.isIe9();
browserDetection.isIe10();
browserDetection.isIe11();
browserDetection.isIos();
browserDetection.isIosFirefox();
browserDetection.isIosSafari();
browserDetection.isIosWebview();
browserDetection.isIosUIWebview();
browserDetection.isIosWKWebview();
browserDetection.isMobileFirefox();
browserDetection.isSamsungBrowser();
browserDetection.supportsPaymentRequestApi();
browserDetection.supportsPopups();
```

To reduce build sizes, you can require just the modules you need:

```js
const isAndroid = require('browser-detection/is-android');
const isChromeOS = require('browser-detection/is-chrome-os');
const isChrome = require('browser-detection/is-chrome');
const isEdge = require('browser-detection/is-edge');
const isFirefox = require('browser-detection/is-firefox');
const isIe = require('browser-detection/is-ie');
const isIe9 = require('browser-detection/is-ie9');
const isIe10 = require('browser-detection/is-ie10');
const isIe11 = require('browser-detection/is-ie11');
const isIos = require('browser-detection/is-ios');
const isIosFirefox = require('browser-detection/is-ios-firefox');
const isIosSafari = require('browser-detection/is-ios-safari');
const isIosWebview = require('browser-detection/is-ios-webview');
const isIosUIWebview = require('browser-detection/is-ios-uiwebview');
const isIosWKWebview = require('browser-detection/is-ios-wkwebview');
const isMobileFirefox = require('browser-detection/is-mobile-firefox');
const isSamsungBrowser = require('browser-detection/is-samsung');
const suportsPaymentRequestApi = require('browser-detection/supports-payment-request-api');
const supportsPopups = require('browser-detection/supports-popups');
```

## Testing

```sh
npm test
```
