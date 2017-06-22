'use strict';

module.exports = function isMobileFirefox(ua) {
  ua = ua || global.navigator.userAgent;
  return /iPhone|iPod|iPad|Mobile|Tablet/i.test(ua) && /Firefox|FxiOS/i.test(ua);
};
