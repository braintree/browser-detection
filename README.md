# Browser Detection

A utility for detecting browser support for Braintree libs.

## Example

Import the named exports you need from the package entrypoint:

```js
import {
  isAndroid,
  isIos,
} from "@braintree/browser-detection";

console.log('Android', isAndroid());
console.log('iOS', isIos());
```

### Notes on isIpadOs

`isIpadOS` is a new option for browser detection, and is also included in isIos. isIos defaults to checking for iPads to maintain consistent behavior with how it acted in the past. If `checkIpadOS` is set to false, then it will only check for older gen iPads and current iOS

```js
import { isIos } from "@braintree/browser-detection";

// assume ua is from iPadOs 13 "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.4 Safari/605.1.15"
const ua = window.navigator.userAgent;

isIos(ua);
// will return true

isIos(ua, false);
// will return false
```

### Notes on Safari

`isSafari` is used for _desktop_ Safari detection, if you are trying to detect an iOS version of Safari, use `isIosSafari`.

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
