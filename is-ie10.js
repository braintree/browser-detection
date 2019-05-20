'use strict';

module.exports = function isIe10(ua) {
  ua = ua || navigator.userAgent;

  return ua.indexOf('MSIE 10') !== -1;
};
