import isIosFirefox = require("./is-ios-firefox");
import isFirefox = require("./is-firefox");

export = function isMobileFirefox(ua?: string): boolean {
  ua = ua || window.navigator.userAgent;

  return (
    isIosFirefox(ua) ||
    (/iPhone|iPod|iPad|Mobile|Tablet/i.test(ua) && isFirefox(ua))
  );
};
