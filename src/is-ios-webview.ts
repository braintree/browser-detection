import isIos = require("./is-ios");
import isIosGoogleSearchApp = require("./is-ios-google-search-app");

export = function isIosWebview(ua?: string): boolean {
  ua = ua || window.navigator.userAgent;
  console.log("isIos(ua)", isIos(ua));

  if (isIos(ua)) {
    // The Google Search iOS app is technically a webview and doesn't support popups.
    if (isIosGoogleSearchApp(ua)) {
      return true;
    }
    console.log(`ua`, ua);
    console.log(`/.+AppleWebKit(?!.*Safari)/i.test(ua)`, /.+AppleWebKit(?!.*Safari)/i.test(ua));
    console.log(`/(AppleWebKit).*?(Version)(?!.*Mobile)/i.test(ua)`, /(AppleWebKit).*?(Version)(?!.*Mobile)/i.test(ua));
    return (
      /.+AppleWebKit(?!.*Safari)/i.test(ua) ||
      /(AppleWebKit).*?(Version)/i.test(ua)
    );
  }

  return false;
};
