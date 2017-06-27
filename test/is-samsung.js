'use strict';

var isSamsungBrowser = require('../is-samsung');
var AGENTS = require('./helpers/user-agents');

describe('isSamsungBrowser', function () {
  it('returns true for Samsung browser', function () {
    expect(isSamsungBrowser(AGENTS.androidSamsung)).to.equal(true);
  });

  it('returns false for old unsupported Samsung browsers', function () {
    expect(isSamsungBrowser(AGENTS.androidSamsungUnsupported)).to.equal(false);
  });

  it('returns false for Samsung webviews', function () {
    expect(isSamsungBrowser(AGENTS.androidSamsungWebview)).to.equal(false);
  });

  it('returns false for all other browsers', function () {
    var ua;

    Object.keys(AGENTS).forEach(function (key) {
      if (!/samsung/i.test(key)) {
        ua = AGENTS[key];
        expect(isSamsungBrowser(ua)).to.equal(false);
      }
    });
  });
});
