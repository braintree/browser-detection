
var isChrome = require('../is-chrome');
var AGENTS = require('./helpers/user-agents');

describe('isChrome', function () {
  it('false when IE9', function () {
    expect(isChrome(AGENTS.ie9)).toBe(false);
  });

  it('returns true for iOS Chrome', function () {
    expect(isChrome(AGENTS.iPhoneUnsupportedChrome)).toBe(true);
    expect(isChrome(AGENTS.iPhoneSupportedChrome)).toBe(true);
  });

  it('returns true for Android Chrome', function () {
    expect(isChrome(AGENTS.androidPhoneChrome)).toBe(true);
  });

  it('returns true for desktop Chrome', function () {
    expect(isChrome(AGENTS.pcChrome_27)).toBe(true);
    expect(isChrome(AGENTS.pcChrome_41)).toBe(true);
  });

  it('returns true for Android Chromium-based WebViews in KitKat to Lollipop', function () {
    expect(isChrome(AGENTS.androidChromeWebviewKitKatLollipop)).toBe(true);
  });

  it('returns true for Android Chromium-based WebViews in Lollipop and above', function () {
    expect(isChrome(AGENTS.androidChromeWebviewLollipopAndAbove)).toBe(true);
  });

  it('returns false for old Android Chromium-based WebViews', function () {
    expect(isChrome(AGENTS.androidChromeWebviewOld)).toBe(false);
  });

  it('returns false for other browsers', function () {
    var ua;

    Object.keys(AGENTS).forEach(function (key) {
      if (!/chrome/i.test(key) && !/unsupported/i.test(key)) {
        ua = AGENTS[key];
        try {
          expect(isChrome(ua)).toBe(false);
        } catch (err) {
          throw new Error('key: ' + key + ', ua: ' + ua + '. caused a failure');
        }
      }
    });
  });
});

