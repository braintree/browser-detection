
var isMobileFirefox = require('../is-mobile-firefox');
var AGENTS = require('./helpers/user-agents');

describe('isMobileFirefox', function () {
  it('returns true for iPhone Firefox', function () {
    expect(isMobileFirefox(AGENTS.iPhoneFirefox)).toBe(true);
  });

  it('returns true for iPad Firefox', function () {
    expect(isMobileFirefox(AGENTS.iPadFirefox)).toBe(true);
  });

  it('returns true for iPod Firefox', function () {
    expect(isMobileFirefox(AGENTS.iPodFirefox)).toBe(true);
  });

  it('returns true for Android phone Firefox', function () {
    expect(isMobileFirefox(AGENTS.androidPhoneFirefox)).toBe(true);
  });

  it('returns true for Android tablet Firefox', function () {
    expect(isMobileFirefox(AGENTS.androidTabletFirefox)).toBe(true);
  });

  it('returns false for desktop Firefox', function () {
    var ua;

    Object.keys(AGENTS).forEach(function (key) {
      if (!/iphone|ipad|ipod|phone|tablet/i.test(key) && /firefox/i.test(key)) {
        ua = AGENTS[key];
        expect(isMobileFirefox(ua)).toBe(false);
      }
    });
  });

  it('returns false for all other browsers', function () {
    var ua;

    Object.keys(AGENTS).forEach(function (key) {
      if (!/iphone|ipad|ipod|phone|tablet/i.test(key) && !/firefox/i.test(key)) {
        ua = AGENTS[key];
        expect(isMobileFirefox(ua)).toBe(false);
      }
    });
  });
});
