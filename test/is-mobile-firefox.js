'use strict';

var isMobileFirefox = require('../is-mobile-firefox');
var AGENTS = require('./helpers/user-agents');

describe('isMobileFirefox', function () {
  it('returns true for iPhone Firefox', function () {
    expect(isMobileFirefox(AGENTS.iPhoneFirefox)).to.equal(true);
  });

  it('returns true for iPad Firefox', function () {
    expect(isMobileFirefox(AGENTS.iPadFirefox)).to.equal(true);
  });

  it('returns true for iPod Firefox', function () {
    expect(isMobileFirefox(AGENTS.iPodFirefox)).to.equal(true);
  });

  it('returns true for Android phone Firefox', function () {
    expect(isMobileFirefox(AGENTS.androidPhoneFirefox)).to.equal(true);
  });

  it('returns true for Android tablet Firefox', function () {
    expect(isMobileFirefox(AGENTS.androidTabletFirefox)).to.equal(true);
  });

  it('returns false for desktop Firefox', function () {
    var ua;

    Object.keys(AGENTS).forEach(function (key) {
      if (!/iphone|ipad|ipod|phone|tablet/i.test(key) && /firefox/i.test(key)) {
        ua = AGENTS[key];
        expect(isMobileFirefox(ua)).to.equal(false);
      }
    });
  });

  it('returns false for all other browsers', function () {
    var ua;

    Object.keys(AGENTS).forEach(function (key) {
      if (!/iphone|ipad|ipod|phone|tablet/i.test(key) && !/firefox/i.test(key)) {
        ua = AGENTS[key];
        expect(isMobileFirefox(ua)).to.equal(false);
      }
    });
  });
});
