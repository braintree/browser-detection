import isIos = require("./is-ios");
import isIosGoogleSearchApp = require("./is-ios-google-search-app");

export = function isIosWebview(ua?: string): boolean {
  ua = ua || window.navigator.userAgent;

  if (isIos(ua)) {
    // The Google Search iOS app is technically a webview and doesn't support popups.
    if (isIosGoogleSearchApp(ua)) {
      return true;
    }

    return (
      // Historically, a webview could be identified by the present of AppleWebKit and _no_ presence of Safari after.
      /.+AppleWebKit(?!.*Safari)/i.test(ua) ||
      // A webview can now have 'Safari', but if it does, then we want to check the `safari` window prop as webviews won't have it.
      (ua.indexOf("Safari") > -1 &&
        (!window.safari || !window.safari.pushNotification))
    );
  }

  return false;
};
