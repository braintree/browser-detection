'use strict';

var isAndroid = require('./is-android');
var isChrome = require('./is-chrome');
var isIe = require('./is-ie');
var isIe9 = require('./is-ie9');
var isIe10 = require('./is-ie10');
var isIe11 = require('./is-ie11');
var isEdge = require('./is-edge');
var isIos = require('./is-ios');
var isIosFirefox = require('./is-ios-firefox');
var isIosSafari = require('./is-ios-safari');
var isIosUIWebview = require('./is-ios-uiwebview');
var isIosWebview = require('./is-ios-webview');
var isIosWKWebview = require('./is-ios-wkwebview');
var isMobileFirefox = require('./is-mobile-firefox');
var isSamsungBrowser = require('./is-samsung');
var supportsPopups = require('./supports-popups');
var supportsPaymentRequestApi = require('./supports-payment-request-api');

module.exports = {
  isAndroid: isAndroid,
  isChrome: isChrome,
  isIe: isIe,
  isIe9: isIe9,
  isIe10: isIe10,
  isIe11: isIe11,
  isEdge: isEdge,
  isIos: isIos,
  isIosFirefox: isIosFirefox,
  isIosSafari: isIosSafari,
  isIosUIWebview: isIosUIWebview,
  isIosWebview: isIosWebview,
  isIosWKWebview: isIosWKWebview,
  isMobileFirefox: isMobileFirefox,
  isSamsungBrowser: isSamsungBrowser,
  supportsPaymentRequestApi: supportsPaymentRequestApi,
  supportsPopups: supportsPopups
};
