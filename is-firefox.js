'use strict';

module.exports = function isFirefox(ua) {
  ua = ua || global.navigator.userAgent;

  return /Firefox/i.test(ua);
};
