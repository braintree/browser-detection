'use strict';

module.exports = function isIe11(ua) {
  ua = ua || navigator.userAgent;
  return ua.indexOf('Trident/7') !== -1;
};
