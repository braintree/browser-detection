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
browserDetection.isSafari();
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
browserDetection.isIpadOS();
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
const isSafari = require("browser-detection/is-safari");
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
const isIpadOS = require("browser-detection/is-ipados");
const isMobileFirefox = require("browser-detection/is-mobile-firefox");
const isOpera = require("browser-detection/is-opera");
const isSamsungBrowser = require("browser-detection/is-samsung");
const isSilk = require("browser-detection/is-silk");
const hasSoftwareKeyboard = require("browser-detection/has-software-keyboard");
const suportsPaymentRequestApi = require("browser-detection/supports-payment-request-api");
const supportsPopups = require("browser-detection/supports-popups");
```

### Notes on isIpadOs

`isIpadOS` is a new option for browser detection, and is also included in isIos. isIos defaults to checking for iPads to maintain consistent behavior with how it acted in the past. If `checkIpadOS` is set to false, then it will only check for older gen iPads and current iOS

```js
const browserDetection = require("browser-detection");
const ua = window.navigator.userAgent;
// assume ua is from iPadOs 13 "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.4 Safari/605.1.15"
browserDetection.isIos(ua);
// will return true
browserDetection.isIos(ua, false);
// will return false
```

### Notes on Safari

`is-safari` is used for _desktop_ Safari detection, if you are trying to detect an iOS version of Safari, use `is-ios-safari`.

## Testing

### Unit Tests

Run the unit tests:

```sh
npm test
```

### Playwright Integration Tests

The library includes Playwright tests that verify browser detection functions in real browsers. Both versions start a static file server which injects the browser-detection code into an html file to verify the userAgent. These tests are written per-platform, e.g. `windows.spec.ts`, and all capabilities can be seen at [capabilities.json](./src/__tests__/helpers/capabilities.json).

#### BrowserStack Testing

Run tests on real Windows browsers (Chrome, Firefox, Edge) via tunneling with a local BrowserStack:

```sh
npm run test:playwright
```

Configuration is at `src/__tests__/playwright/windows/playwright.browserstack.windows.ts`.

#### Local Testing

Run tests locally using your installed browsers:

```sh
# Headless mode
npm run test:playwright:local

# Headed mode (shows browser UI)
npm run test:playwright:local:headed
```

The local tests are configured to run tests in Chromium and Firefox. Configuration is at `src/__tests__/playwright/windows/playwright.local.ts`.

**Setup:**

1. Copy `example.env` to `.env`
2. Add your BrowserStack credentials:

   ```env
   BROWSERSTACK_USERNAME=your_username
   BROWSERSTACK_ACCESS_KEY=your_access_key
   ```

The BrowserStack tests connect to remote browsers and verify detection accuracy across different browser versions and platforms.
