
var isIos = require('../is-ios');
var AGENTS = require('./helpers/user-agents');

describe('isIos', function () {
  it('returns true for an iPad', function () {
    expect(isIos(AGENTS.iPad3_2Safari)).toBe(true);
    expect(isIos(AGENTS.iPad5_1Safari)).toBe(true);
    expect(isIos(AGENTS.iPad9_3Safari)).toBe(true);
  });

  it('returns true for an iPod', function () {
    expect(isIos(AGENTS.iPodSafari)).toBe(true);
  });

  it('returns true for an iPhone', function () {
    expect(isIos(AGENTS.iPhone_3_2Safari)).toBe(true);
    expect(isIos(AGENTS.iPhone_9_3_1Safari)).toBe(true);
  });

  it('returns true for iOS Chrome', function () {
    expect(isIos(AGENTS.iPhoneUnsupportedChrome)).toBe(true);
    expect(isIos(AGENTS.iPhoneSupportedChrome)).toBe(true);
  });

  it('returns true for ipad', function () {
    expect(isIos(AGENTS.iPadChromeLowercase)).toBe(true);
  });

  it('returns false for non-iOS browsers', function () {
    var key, ua;

    for (key in AGENTS) {
      if (!AGENTS.hasOwnProperty(key)) {
        continue;
      }
      if (!/iPhone|iPad|iPod/.test(key)) {
        ua = AGENTS[key];
        expect(isIos(ua)).toBe(false);
      }
    }
  });
});

