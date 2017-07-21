'use strict';

var isIosFirefox = require('../is-ios-firefox');
var AGENTS = require('./helpers/user-agents');

describe('isIosFirefox', function () {
  it('returns true for iPhone Firefox', function () {
    expect(isIosFirefox(AGENTS.iPhoneFirefox)).to.equal(true);
  });

  it('returns true for iPad Firefox', function () {
    expect(isIosFirefox(AGENTS.iPadFirefox)).to.equal(true);
  });

  it('returns true for iPod Firefox', function () {
    expect(isIosFirefox(AGENTS.iPodFirefox)).to.equal(true);
  });

  it('returns false for Android phone Firefox', function () {
    expect(isIosFirefox(AGENTS.androidPhoneFirefox)).to.equal(false);
  });

  it('returns false for Android tablet Firefox', function () {
    expect(isIosFirefox(AGENTS.androidTabletFirefox)).to.equal(false);
  });

  it('returns false for desktop Firefox', function () {
    var ua;

    Object.keys(AGENTS).forEach(function (key) {
      if (!/iphone|ipad|ipod|phone|tablet/i.test(key) && /firefox/i.test(key)) {
        ua = AGENTS[key];
        expect(isIosFirefox(ua)).to.equal(false);
      }
    });
  });

  it('returns false for all other browsers', function () {
    var ua;

    Object.keys(AGENTS).forEach(function (key) {
      if (!/iphone|ipad|ipod|phone|tablet/i.test(key) && !/firefox/i.test(key)) {
        ua = AGENTS[key];
        expect(isIosFirefox(ua)).to.equal(false);
      }
    });
  });
});
