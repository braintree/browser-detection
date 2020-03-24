
var supportsPopups = require('../supports-popups');
var AGENTS = require('./helpers/user-agents');

describe('supportsPopups', function () {
  it('returns false for webviews', function () {
    var key, ua;

    for (key in AGENTS) {
      if (!AGENTS.hasOwnProperty(key)) {
        continue;
      }
      if (/webview/i.test(key)) {
        ua = AGENTS[key];
        expect(supportsPopups(ua)).toBe(false);
      }
    }
  });

  it('returns true for browsers', function () {
    var key, ua;
    var keysToSkip = [
      'androidOperaMini',
      'iPhoneUnsupportedChrome',
      'androidSamsungUnsupported',
      'iPadFirefox',
      'iPodFirefox',
      'iPhoneFirefox'
    ];

    for (key in AGENTS) {
      if (!AGENTS.hasOwnProperty(key)) {
        continue;
      }
      if (keysToSkip.indexOf(key) > -1) {
        continue;
      }
      if (!/webview/i.test(key)) {
        ua = AGENTS[key];
        expect(supportsPopups(ua)).toBe(true);
      }
    }
  });

  it('returns false for Google Search App', function () {
    expect(supportsPopups(AGENTS.iPhoneGoogleSearchAppWebview)).toBe(false);
  });

  it('returns false for Opera Mini', function () {
    expect(supportsPopups(AGENTS.androidOperaMini)).toBe(false);
  });

  it('returns false for iOS Chrome less than 48', function () {
    expect(supportsPopups(AGENTS.iPhoneUnsupportedChrome)).toBe(false);
  });

  it('returns true for iOS Chrome greather than 48', function () {
    expect(supportsPopups(AGENTS.iPhoneSupportedChrome)).toBe(true);
  });

  it('returns false for old unsupported Samsung browser', function () {
    expect(supportsPopups(AGENTS.androidSamsungUnsupported)).toBe(false);
  });
});
