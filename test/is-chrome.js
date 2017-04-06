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
});

