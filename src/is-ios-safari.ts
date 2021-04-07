import isIos = require("./is-ios");
import isIosFirefox = require("./is-ios-firefox");

const webkitRegexp = /webkit/i;

function isWebkit(ua: string): boolean {
  return webkitRegexp.test(ua);
}

export = function isIosSafari(ua?: string): boolean {
  ua = ua || window.navigator.userAgent;

  return (
    isIos(ua) && isWebkit(ua) && ua.indexOf("CriOS") === -1 && !isIosFirefox(ua)
  );
};
