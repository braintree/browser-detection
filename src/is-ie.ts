import isIE11 = require("./is-ie11");

export = function isIE(ua?: string): boolean {
  ua = ua || window.navigator.userAgent;

  return ua.indexOf("MSIE") !== -1 || isIE11(ua);
};
