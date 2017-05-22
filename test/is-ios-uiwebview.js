'use strict';

var isIosUIWebview = require('../is-ios-uiwebview');
var AGENTS = require('./helpers/user-agents');

describe('isIosUIWebview', function () {
  var key, ua;

  it('returns true for iOS webviews when statusbar.visible is false', function () {
    for (key in AGENTS) {
      if (!AGENTS.hasOwnProperty(key)) {
        continue;
      }
      if (/webview/i.test(key) && !/android/i.test(key)) {
        ua = AGENTS[key];
        try {
          expect(isIosUIWebview(ua, false)).to.equal(true);
        } catch (e) {
          throw key;
        }
      }
    }
  });

  it('returns false for iOS webviews when statusbar.visible is true', function () {
    for (key in AGENTS) {
      if (!AGENTS.hasOwnProperty(key)) {
        continue;
      }
      if (/webview/i.test(key) && !/android/i.test(key)) {
        ua = AGENTS[key];
        try {
          expect(isIosUIWebview(ua, true)).to.equal(false);
        } catch (e) {
          throw key;
        }
      }
    }
  });
});
