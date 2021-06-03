# Browser Detection

A utility for detecting browser support for Braintree libs.

## Example

```js
const browserDetection = require("browser-detection");

browserDetection.isAndroid();
browserDetection.isChromeOS();
browserDetection.isChrome();
browserDetection.isDuckDuckGo();
browserDetection.isEdge();
browserDetection.isFirefox();
browserDetection.isIe();
browserDetection.isIe9();
browserDetection.isIe10();
browserDetection.isIe11();
browserDetection.isIos();
browserDetection.isIosFirefox();
browserDetection.isIosGoogleSearchApp();
browserDetection.isIosSafari();
browserDetection.isIosWebview();
browserDetection.isIosUIWebview();
browserDetection.isIosWKWebview();
browserDetection.isMobileFirefox();
browserDetection.isOpera();
browserDetection.isSamsungBrowser();
browserDetection.isSilk();
browserDetection.hasSoftwareKeyboard();
browserDetection.supportsPaymentRequestApi();
browserDetection.supportsPopups();
```

To reduce build sizes, you can require just the modules you need:

```js
const isAndroid = require("browser-detection/is-android");
const isChromeOS = require("browser-detection/is-chrome-os");
const isChrome = require("browser-detection/is-chrome");
const isDuckDuckGo = require("browser-detection/is-duckduckgo");
const isEdge = require("browser-detection/is-edge");
const isFirefox = require("browser-detection/is-firefox");
const isIe = require("browser-detection/is-ie");
const isIe9 = require("browser-detection/is-ie9");
const isIe10 = require("browser-detection/is-ie10");
const isIe11 = require("browser-detection/is-ie11");
const isIos = require("browser-detection/is-ios");
const isIosFirefox = require("browser-detection/is-ios-firefox");
const isIosGoogleSearchApp = require("browser-detection/is-ios-google-search-app");
const isIosSafari = require("browser-detection/is-ios-safari");
const isIosWebview = require("browser-detection/is-ios-webview");
const isIosUIWebview = require("browser-detection/is-ios-uiwebview");
const isIosWKWebview = require("browser-detection/is-ios-wkwebview");
const isMobileFirefox = require("browser-detection/is-mobile-firefox");
const isOpera = require("browser-detection/is-opera");
const isSamsungBrowser = require("browser-detection/is-samsung");
const isSilk = require("browser-detection/is-silk");
const hasSoftwareKeyboard = require("browser-detection/has-software-keyboard");
const suportsPaymentRequestApi = require("browser-detection/supports-payment-request-api");
const supportsPopups = require("browser-detection/supports-popups");
```

## Testing

```sh
npm test
```
