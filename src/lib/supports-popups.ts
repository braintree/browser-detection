import {
  isAndroid,
  isIosFirefox,
  isIosWebview,
  isChrome,
  isSamsung,
  isDuckDuckGo,
} from "../";

const MINIMUM_SUPPORTED_CHROME_IOS_VERSION = 48;

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
  return !isChrome(ua) && !isSamsung(ua) && /samsung/i.test(ua);
}

function supportsPopups(ua?: string): boolean {
  ua = ua || window.navigator.userAgent;

  return !(
    isIosWebview(ua) ||
    isIosFirefox(ua) ||
    isAndroidWebview(ua) ||
    isOperaMini(ua) ||
    isUnsupportedIosChrome(ua) ||
    isOldSamsungBrowserOrSamsungWebview(ua)
  );
}

export default supportsPopups;
