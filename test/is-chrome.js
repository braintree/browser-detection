'use strict';

var isChrome = require('../is-chrome');
var AGENTS = require('./helpers/user-agents');

describe('isChrome', function () {
  it('false when IE9', function () {
    expect(isChrome(AGENTS.ie9)).to.equal(false);
  });

  it('returns true for iOS Chrome', function () {
    expect(isChrome(AGENTS.iPhoneUnsupportedChrome)).to.equal(true);
    expect(isChrome(AGENTS.iPhoneSupportedChrome)).to.equal(true);
  });

  it('returns true for Android Chrome', function () {
    expect(isChrome(AGENTS.androidPhoneChrome)).to.equal(true);
  });

  it('returns true for desktop Chrome', function () {
    expect(isChrome(AGENTS.pcChrome_27)).to.equal(true);
    expect(isChrome(AGENTS.pcChrome_41)).to.equal(true);
  });

  it('returns true for Android Chromium-based WebViews in KitKat to Lollipop', function () {
    expect(isChrome(AGENTS.androidChromeWebviewKitKatLollipop)).to.equal(true);
  });

  it('returns true for Android Chromium-based WebViews in Lollipop and above', function () {
    expect(isChrome(AGENTS.androidChromeWebviewLollipopAndAbove)).to.equal(true);
  });

  it('returns false for old Android Chromium-based WebViews', function () {
    expect(isChrome(AGENTS.androidChromeWebviewOld)).to.equal(false);
  });

  it('returns false for other browsers', function () {
    var ua;

    Object.keys(AGENTS).forEach(function (key) {
      if (!/chrome/i.test(key) && !/unsupported/i.test(key)) {
        ua = AGENTS[key];
        try {
          expect(isChrome(ua)).to.equal(false);
        } catch (err) {
          throw new Error('key: ' + key + ', ua: ' + ua + '. caused a failure');
        }
      }
    });
  });
});

