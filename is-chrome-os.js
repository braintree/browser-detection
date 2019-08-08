'use strict';

module.exports = function isChromeOS(ua) {
  ua = ua || global.navigator.userAgent;

  return /CrOS/i.test(ua);
};
