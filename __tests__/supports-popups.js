
const supportsPopups = require('../supports-popups');
const AGENTS = require('./helpers/user-agents');

describe('supportsPopups', () => {
  it('returns false for webviews', () => {
    let key, ua;

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

  it('returns true for browsers', () => {
    let key, ua;
    const keysToSkip = [
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

  it('returns false for Google Search App', () => {
    expect(supportsPopups(AGENTS.iPhoneGoogleSearchAppWebview)).toBe(false);
  });

  it('returns false for Opera Mini', () => {
    expect(supportsPopups(AGENTS.androidOperaMini)).toBe(false);
  });

  it('returns false for iOS Chrome less than 48', () => {
    expect(supportsPopups(AGENTS.iPhoneUnsupportedChrome)).toBe(false);
  });

  it('returns true for iOS Chrome greater than 48', () => {
    expect(supportsPopups(AGENTS.iPhoneSupportedChrome)).toBe(true);
  });

  it('returns false for old unsupported Samsung browser', () => {
    expect(supportsPopups(AGENTS.androidSamsungUnsupported)).toBe(false);
  });
});
