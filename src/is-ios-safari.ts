import isIos from "./is-ios";
const webkitRegexp = /webkit/i;

function isWebkit(ua): boolean {
  return ua.match(webkitRegexp);
}

export default function isIosSafari(ua): boolean {
  ua = ua || window.navigator.userAgent;

  return isIos(ua) && isWebkit(ua) && ua.indexOf("CriOS") === -1;
}
