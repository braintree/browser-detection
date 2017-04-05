'use strict';

var isAndroid = require('../is-android');
var AGENTS = require('./helpers/user-agents');

describe('isAndroid', function () {
  it('returns true for Android browsers', function () {
    expect(isAndroid(AGENTS.androidOperaMini)).to.equal(true);
    expect(isAndroid(AGENTS.androidPhoneFirefox)).to.equal(true);
    expect(isAndroid(AGENTS.androidTabletFirefox)).to.equal(true);
    expect(isAndroid(AGENTS.androidPhoneChrome)).to.equal(true);
  });

  it('returns true for Android webviews', function () {
    expect(isAndroid(AGENTS.androidWebviewOld)).to.equal(true);
    expect(isAndroid(AGENTS.androidWebviewKitKatLollipop)).to.equal(true);
    expect(isAndroid(AGENTS.androidWebviewLollipopAndAbove)).to.equal(true);
  });

  it('returns false for non-Android browsers', function () {
    var key, ua;

    for (key in AGENTS) {
      if (!AGENTS.hasOwnProperty(key)) {
        continue;
      }
      if (!/android/.test(key)) {
        ua = AGENTS[key];
        expect(isAndroid(ua)).to.equal(false);
      }
    }
  });
});
