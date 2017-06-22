'use strict';

var isAndroid = require('./is-android');
var isChrome = require('./is-chrome');
var isIe9 = require('./is-ie9');
var isIe10 = require('./is-ie10');
var isIos = require('./is-ios');
var isIosSafari = require('./is-ios-safari');
var isIosUIWebview = require('./is-ios-uiwebview');
var isIosWebview = require('./is-ios-webview');
var isIosWKWebview = require('./is-ios-wkwebview');
var isMobileFirefox = require('./is-mobile-firefox');
var supportsPopups = require('./supports-popups');

module.exports = {
  isAndroid: isAndroid,
  isChrome: isChrome,
  isIe9: isIe9,
  isIe10: isIe10,
  isIos: isIos,
  isIosSafari: isIosSafari,
  isIosUIWebview: isIosUIWebview,
  isIosWebview: isIosWebview,
  isIosWKWebview: isIosWKWebview,
  isMobileFirefox: isMobileFirefox,
  supportsPopups: supportsPopups
};
