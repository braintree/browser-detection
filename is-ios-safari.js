'use strict';

var isIos = require('./is-ios');

module.exports = function isIosSafari(ua) {
  ua = ua || navigator.userAgent;

  return isIos(ua) && isWebkit(ua) && ua.indexOf('CriOS') === -1;
};

function isWebkit(ua) {
  return ua.match(/WebKit/i);
}
