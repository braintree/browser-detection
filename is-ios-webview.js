'use strict';

var isIos = require('./is-ios');

// The Google Search iOS app is technically a webview and doesn't support popups.
function isGoogleSearchApp(ua) {
  return /\bGSA\b/.test(ua);
}

module.exports = function isIosWebview(ua) {
  ua = ua || global.navigator.userAgent;
  if (isIos(ua)) {
    if (isGoogleSearchApp(ua)) {
      return true;
    }
    return /.+AppleWebKit(?!.*Safari)/.test(ua);
  }
  return false;
};
