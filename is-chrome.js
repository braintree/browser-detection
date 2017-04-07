'use strict';

module.exports = function isChrome(ua) {
  ua = ua || navigator.userAgent;
  return ua.indexOf('Chrome') !== -1 || ua.indexOf('CriOS') !== -1;
};
