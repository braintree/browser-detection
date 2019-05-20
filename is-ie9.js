'use strict';

module.exports = function isIe9(ua) {
  ua = ua || navigator.userAgent;

  return ua.indexOf('MSIE 9') !== -1;
};
