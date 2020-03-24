
var isIosFirefox = require('../is-ios-firefox');
var AGENTS = require('./helpers/user-agents');

describe('isIosFirefox', function () {
  it('returns true for iPhone Firefox', function () {
    expect(isIosFirefox(AGENTS.iPhoneFirefox)).toBe(true);
  });

  it('returns true for iPad Firefox', function () {
    expect(isIosFirefox(AGENTS.iPadFirefox)).toBe(true);
  });

  it('returns true for iPod Firefox', function () {
    expect(isIosFirefox(AGENTS.iPodFirefox)).toBe(true);
  });

  it('returns false for Android phone Firefox', function () {
    expect(isIosFirefox(AGENTS.androidPhoneFirefox)).toBe(false);
  });

  it('returns false for Android tablet Firefox', function () {
    expect(isIosFirefox(AGENTS.androidTabletFirefox)).toBe(false);
  });

  it('returns false for desktop Firefox', function () {
    var ua;

    Object.keys(AGENTS).forEach(function (key) {
      if (!/iphone|ipad|ipod|phone|tablet/i.test(key) && /firefox/i.test(key)) {
        ua = AGENTS[key];
        expect(isIosFirefox(ua)).toBe(false);
      }
    });
  });

  it('returns false for all other browsers', function () {
    var ua;

    Object.keys(AGENTS).forEach(function (key) {
      if (!/iphone|ipad|ipod|phone|tablet/i.test(key) && !/firefox/i.test(key)) {
        ua = AGENTS[key];
        expect(isIosFirefox(ua)).toBe(false);
      }
    });
  });
});
