'use strict';

var isIos = require('../is-ios');
var AGENTS = require('./helpers/user-agents');

describe('isIos', function () {
  it('returns true for an iPad', function () {
    expect(isIos(AGENTS.iPad3_2Safari)).to.equal(true);
    expect(isIos(AGENTS.iPad5_1Safari)).to.equal(true);
    expect(isIos(AGENTS.iPad9_3Safari)).to.equal(true);
  });

  it('returns true for an iPod', function () {
    expect(isIos(AGENTS.iPodSafari)).to.equal(true);
  });

  it('returns true for an iPhone', function () {
    expect(isIos(AGENTS.iPhone_3_2Safari)).to.equal(true);
    expect(isIos(AGENTS.iPhone_9_3_1Safari)).to.equal(true);
  });

  it('returns true for iOS Chrome', function () {
    expect(isIos(AGENTS.iPhoneUnsupportedChrome)).to.equal(true);
    expect(isIos(AGENTS.iPhoneSupportedChrome)).to.equal(true);
  });

  it('returns true for ipad', function () {
    expect(isIos(AGENTS.iPadChromeLowercase)).to.equal(true);
  });

  it('returns false for non-iOS browsers', function () {
    var key, ua;

    for (key in AGENTS) {
      if (!AGENTS.hasOwnProperty(key)) {
        continue;
      }
      if (!/iPhone|iPad|iPod/.test(key)) {
        ua = AGENTS[key];
        expect(isIos(ua)).to.equal(false);
      }
    }
  });
});

