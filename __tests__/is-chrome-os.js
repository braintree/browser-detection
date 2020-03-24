
var isChromeOS = require('../is-chrome-os');
var AGENTS = require('./helpers/user-agents');

describe('isChromeOS', function () {
  it('returns true for ChromeOS Chrome', function () {
    expect(isChromeOS(AGENTS.chromeOsChrome)).toBe(true);
  });

  it.skip('returns true for ChromeOS [some other browser]', function () {
    // Currently any other browser for ChromeOS is actually a
    // questionably functional Android port. For example Firefox & Brave
    // have Android user agents, and Edge installs but doesn't actually
    // work.
  });

  it('returns false for non-ChromeOS browsers', function () {
    var ua;

    Object.keys(AGENTS).forEach(function (key) {
      if (!/chromeOS/i.test(key)) {
        ua = AGENTS[key];
        try {
          expect(isChromeOS(ua)).toBe(false);
        } catch (err) {
          throw new Error('key: ' + key + ', ua: ' + ua + '. caused a failure');
        }
      }
    });
  });
});

