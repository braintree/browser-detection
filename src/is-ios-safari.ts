import isIos from "./is-ios";
import isIosFirefox from "./is-ios-firefox";

const webkitRegexp = /webkit/i;

function isWebkit(ua: string): boolean {
  return webkitRegexp.test(ua);
}

function isIosChrome(ua: string): boolean {
  return ua.indexOf("CriOS") > -1;
}

function isFacebook(ua: string): boolean {
  return ua.indexOf("FBAN") > -1;
}

function isIosSafari(ua?: string): boolean {
  ua = ua || window.navigator.userAgent;

  return (
    isIos(ua) &&
    isWebkit(ua) &&
    !isIosChrome(ua) &&
    !isIosFirefox(ua) &&
    !isFacebook(ua)
  );
}

export default isIosSafari;
