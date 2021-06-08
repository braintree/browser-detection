# Browser Detection - Release Notes

# 1.12.0 (2021-06-08)

- Add `is-duckduckgo` method
- Add `is-ios-google-search-app` method
- Add `is-opera` method
- Add `is-silk` method
- Fix issue where `is-chrome` would incorrectly report `true` for DuckDuckGo and Silk browsers
- Fix issue where `supports-popups` would incorrectly report `false` for DuckDuckGo

# 1.11.1 (2021-04-07)

- Fix issue where `is-ios-safari` was returning `true` for iOS Firefox browsers

# 1.11.0 (2020-10-27)

- Add `has-software-keyboard` method

# 1.10.1 (2020-10-19)

- Fix issue where typescript declarations did not get published

# 1.10.0 (2020-07-10)

- Add typescript types

## v1.9.0 (2019-09-18)

- Add `is-firefox` method

## v1.8.0 (2019-08-07)

- Add `is-chrome-os` method
- Fix README typo for iOS
- Update README code samples to use `const`

## 1.7.0 (2017-10-18)

- Add `supports-payment-request-api` method

## 1.6.0 (2017-07-25)

- Correct is-chrome to not return true on edge browser
- Correct supports-popups to not return true on iOS Firefox
- Add `is-samsung-browser` method
- Add `is-mobile-firefox` method
- Add `is-ios-firefox` method

## 1.5.0 (2017-07-03)

- Add `is-ie` method
- Add `is-ie11` method
- Add `is-edge` method

## 1.4.1 (2017-06-01)

- publish to npm as scoped package `@braintree/browser-detection`

## 1.4.0 (2017-05-22)

- Add `is-ios-uiwebview` method
- Add `is-ios-wkwebview` method

## 1.3.0 (2017-04-11)

- Add `is-ios-webview` method
- Add `is-ios-safari` method

## 1.2.0 (2017-04-10)

- Add `is-ie10` method

## 1.1.0 (2017-04-07)

- Add `is-chrome` method

## 1.0.0 (2017-04-05)

- Initial public release of browser-detection
