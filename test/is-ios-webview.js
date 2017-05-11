'use strict';

var isIosWebview = require('../is-ios-webview');
var AGENTS = require('./helpers/user-agents');

describe('isIosWebview', function () {
  it('returns true for iOS webviews', function () {
    var key, ua;

    for (key in AGENTS) {
      if (!AGENTS.hasOwnProperty(key)) {
        continue;
      }
      if (/webview/i.test(key) && !/android/i.test(key)) {
        ua = AGENTS[key];
        expect(isIosWebview(ua)).to.equal(true);
      }
    }
  });

  it('returns true for Android webviews', function () {
    var key, ua;

    for (key in AGENTS) {
      if (!AGENTS.hasOwnProperty(key)) {
        continue;
      }
      if (/webview/i.test(key) && /android/i.test(key)) {
        ua = AGENTS[key];
        expect(isIosWebview(ua)).to.equal(false);
      }
    }
  });

  it('returns false for desktop Safari', function () {
    expect(isIosWebview(AGENTS.macSafari7_0_2)).to.equal(false);
  });

  it('returns false for non-webviews', function () {
    var key, ua;

    for (key in AGENTS) {
      if (!AGENTS.hasOwnProperty(key)) {
        continue;
      }
      if (!/webview/i.test(key)) {
        ua = AGENTS[key];
        try {
          expect(isIosWebview(ua)).to.equal(false);
        } catch (e) {
          throw key;
        }
      }
    }
  });

  it('returns true for Google Search App', function () {
    expect(isIosWebview(AGENTS.iPhoneGoogleSearchAppWebview)).to.equal(true);
  });
});
