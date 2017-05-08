'use strict';

var isIosSafari = require('../is-ios-safari');
var AGENTS = require('./helpers/user-agents');

describe('isIosSafari', function () {
  it('returns true for iOS Safari', function () {
    expect(isIosSafari(AGENTS.iPhone_9_3_1Safari)).to.equal(true);
    expect(isIosSafari(AGENTS.iPhone_3_2Safari)).to.equal(true);
    expect(isIosSafari(AGENTS.iPad3_2Safari)).to.equal(true);
    expect(isIosSafari(AGENTS.iPad5_1Safari)).to.equal(true);
    expect(isIosSafari(AGENTS.iPad9_3Safari)).to.equal(true);
    expect(isIosSafari(AGENTS.iPodSafari)).to.equal(true);
  });

  it('returns false for iOS Chrome', function () {
    expect(isIosSafari(AGENTS.iPhoneUnsupportedChrome)).to.equal(false);
    expect(isIosSafari(AGENTS.iPhoneSupportedChrome)).to.equal(false);
  });

  it('returns false for Android Chrome', function () {
    expect(isIosSafari(AGENTS.androidPhoneChrome)).to.equal(false);
  });

  it('returns false for desktop Safari', function () {
    expect(isIosSafari(AGENTS.macSafari7_0_2)).to.equal(false);
    expect(isIosSafari(AGENTS.pcSafari5_1)).to.equal(false);
  });
});

