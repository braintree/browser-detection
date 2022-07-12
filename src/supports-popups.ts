const MINIMUM_SUPPORTED_CHROME_IOS_VERSION = 48;

import isAndroid = require("./is-android");
import isIosFirefox = require("./is-ios-firefox");
import isIosWebview = require("./is-ios-webview");
import isChrome = require("./is-chrome");
import isSamsungBrowser = require("./is-samsung");
import isDuckDuckGo = require("./is-duckduckgo");

function isUnsupportedIosChrome(ua?: string): boolean {
  ua = ua || window.navigator.userAgent;

  const match = ua.match(/CriOS\/(\d+)\./);

  if (!match) {
    return false;
  }

  const version = parseInt(match[1], 10);

  return version < MINIMUM_SUPPORTED_CHROME_IOS_VERSION;
}

function isOperaMini(ua?: string): boolean {
  ua = ua || window.navigator.userAgent;

  return ua.indexOf("Opera Mini") > -1;
}

function isAndroidWebview(ua?: string): boolean {
  const androidWebviewRegExp = /Version\/[\d.]+/i;

  ua = ua || window.navigator.userAgent;
  if (isAndroid(ua)) {
    return (
      androidWebviewRegExp.test(ua) && !isOperaMini(ua) && !isDuckDuckGo(ua)
    );
  }

  return false;
}

function isOldSamsungBrowserOrSamsungWebview(ua: string): boolean {
  return !isChrome(ua) && !isSamsungBrowser(ua) && /samsung/i.test(ua);
}

export = function supportsPopups(ua?: string): boolean {
  ua = ua || window.navigator.userAgent;

  return !(
    isIosWebview(ua) ||
    isIosFirefox(ua) ||
    isAndroidWebview(ua) ||
    isOperaMini(ua) ||
    isUnsupportedIosChrome(ua) ||
    isOldSamsungBrowserOrSamsungWebview(ua)
  );
};
