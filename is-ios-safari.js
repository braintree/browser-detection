'use strict';

var isIos = require('./is-ios');
var webkitRegexp = /webkit/i;

function isWebkit(ua) {
  return ua.match(webkitRegexp);
}

module.exports = function isIosSafari(ua) {
  ua = ua || navigator.userAgent;

  return isIos(ua) && isWebkit(ua) && ua.indexOf('CriOS') === -1;
};
