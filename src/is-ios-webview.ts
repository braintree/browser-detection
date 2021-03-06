import isIos = require("./is-ios");
import isIosGoogleSearchApp = require("./is-ios-google-search-app");

export = function isIosWebview(ua?: string): boolean {
  ua = ua || window.navigator.userAgent;
  if (isIos(ua)) {
    // The Google Search iOS app is technically a webview and doesn't support popups.
    if (isIosGoogleSearchApp(ua)) {
      return true;
    }

    return /.+AppleWebKit(?!.*Safari)/.test(ua);
  }

  return false;
};
