
const isIosUIWebview = require('../is-ios-uiwebview');
const AGENTS = require('./helpers/user-agents');

describe('isIosUIWebview', () => {
  let key, ua;

  it('returns true for iOS webviews when statusbar.visible is false', () => {
    for (key in AGENTS) {
      if (!AGENTS.hasOwnProperty(key)) {
        continue;
      }
      if (/webview/i.test(key) && !/android/i.test(key)) {
        ua = AGENTS[key];
        try {
          expect(isIosUIWebview(ua, false)).toBe(true);
        } catch (e) {
          throw key;
        }
      }
    }
  });

  it('returns false for iOS webviews when statusbar.visible is true', () => {
    for (key in AGENTS) {
      if (!AGENTS.hasOwnProperty(key)) {
        continue;
      }
      if (/webview/i.test(key) && !/android/i.test(key)) {
        ua = AGENTS[key];
        try {
          expect(isIosUIWebview(ua, true)).toBe(false);
        } catch (e) {
          throw key;
        }
      }
    }
  });
});
