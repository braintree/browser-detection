'use strict';

var isFirefox = require('../is-firefox');
var AGENTS = require('./helpers/user-agents');

describe('isFirefox', function () {
  it('returns true for android phone Firefox', function () {
    expect(isFirefox(AGENTS.androidPhoneFirefox)).to.equal(true);
  });

  it('returns true for android tablet Firefox', function () {
    expect(isFirefox(AGENTS.androidTabletFirefox)).to.equal(true);
  });

  it('returns false for ios Firefox (simply a safari webview)', function () {
    expect(isFirefox(AGENTS.iPhoneFirefox)).to.equal(false);
  });

  it('returns true for desktop Firefox', function () {
    var ua;

    Object.keys(AGENTS).forEach(function (key) {
      if (!/iphone|ipad|ipod|phone|tablet/i.test(key) && /firefox/i.test(key)) {
        ua = AGENTS[key];
        expect(isFirefox(ua)).to.equal(true);
      }
    });
  });

  it('returns false for all other browsers', function () {
    var ua;

    Object.keys(AGENTS).forEach(function (key) {
      if (!/firefox/i.test(key)) {
        ua = AGENTS[key];
        expect(isFirefox(ua)).to.equal(false);
      }
    });
  });
});
