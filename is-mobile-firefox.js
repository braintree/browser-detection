'use strict';

var isIosFirefox = require('./is-ios-firefox');
var isFirefox = require('./is-firefox');

module.exports = function isMobileFirefox(ua) {
  ua = ua || global.navigator.userAgent;

  return isIosFirefox(ua) || (/iPhone|iPod|iPad|Mobile|Tablet/i.test(ua) && isFirefox(ua));
};
