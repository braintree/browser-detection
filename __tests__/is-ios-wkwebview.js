
var isIosWKWebview = require('../is-ios-wkwebview');
var AGENTS = require('./helpers/user-agents');

describe('isIosWKWebview', function () {
  var key, ua;

  it('returns true for iOS webviews when statusbar.visible is true', function () {
    for (key in AGENTS) {
      if (!AGENTS.hasOwnProperty(key)) {
        continue;
      }
      if (/webview/i.test(key) && !/android/i.test(key)) {
        ua = AGENTS[key];
        try {
          expect(isIosWKWebview(ua, true)).toBe(true);
        } catch (e) {
          throw key;
        }
      }
    }
  });

  it('returns false for iOS webviews when statusbar.visible is false', function () {
    for (key in AGENTS) {
      if (!AGENTS.hasOwnProperty(key)) {
        continue;
      }
      if (/webview/i.test(key) && !/android/i.test(key)) {
        ua = AGENTS[key];
        try {
          expect(isIosWKWebview(ua, false)).toBe(false);
        } catch (e) {
          throw key;
        }
      }
    }
  });
});
