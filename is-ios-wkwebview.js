'use strict';

var isIosWebview = require('./is-ios-webview');

module.exports = function isIosWKWebview(ua, statusBarVisible) {
  statusBarVisible = typeof statusBarVisible !== 'undefined' ? statusBarVisible : global.statusbar.visible;

  return isIosWebview(ua) && statusBarVisible;
};
