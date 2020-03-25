
const isAndroid = require('../is-android');
const AGENTS = require('./helpers/user-agents');

describe('isAndroid', () => {
  it('returns true for Android browsers', () => {
    expect(isAndroid(AGENTS.androidOperaMini)).toBe(true);
    expect(isAndroid(AGENTS.androidPhoneFirefox)).toBe(true);
    expect(isAndroid(AGENTS.androidTabletFirefox)).toBe(true);
    expect(isAndroid(AGENTS.androidPhoneChrome)).toBe(true);
  });

  it('returns true for Android webviews', () => {
    expect(isAndroid(AGENTS.androidChromeWebviewOld)).toBe(true);
    expect(isAndroid(AGENTS.androidChromeWebviewKitKatLollipop)).toBe(true);
    expect(isAndroid(AGENTS.androidChromeWebviewLollipopAndAbove)).toBe(true);
  });

  it('returns false for non-Android browsers', () => {
    let key, ua;

    for (key in AGENTS) {
      if (!AGENTS.hasOwnProperty(key)) {
        continue;
      }
      if (!/android/.test(key)) {
        ua = AGENTS[key];
        expect(isAndroid(ua)).toBe(false);
      }
    }
  });
});
