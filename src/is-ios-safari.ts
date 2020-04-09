import isIos from "./is-ios";
const webkitRegexp = /webkit/i;

function isWebkit(ua: string): boolean {
  return webkitRegexp.test(ua);
}

export default function isIosSafari(ua?: string): boolean {
  ua = ua || window.navigator.userAgent;

  return isIos(ua) && isWebkit(ua) && ua.indexOf("CriOS") === -1;
}
