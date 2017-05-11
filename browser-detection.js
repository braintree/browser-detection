'use strict';

var isAndroid = require('./is-android');
var isChrome = require('./is-chrome');
var isIe9 = require('./is-ie9');
var isIe10 = require('./is-ie10');
var isIos = require('./is-ios');
var isIosWebview = require('./is-ios-webview');
var supportsPopups = require('./supports-popups');

module.exports = {
  isAndroid: isAndroid,
  isChrome: isChrome,
  isIe9: isIe9,
  isIe10: isIe10,
  isIos: isIos,
  isIosWebview: isIosWebview,
  supportsPopups: supportsPopups
};
