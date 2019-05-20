'use strict';

var isIE11 = require('./is-ie11');

module.exports = function isIE(ua) {
  ua = ua || global.navigator.userAgent;

  return ua.indexOf('MSIE') !== -1 || isIE11(ua);
};
