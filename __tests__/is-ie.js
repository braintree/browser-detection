
var isIe = require('../is-ie');
var AGENTS = require('./helpers/user-agents');

describe('isIe', function () {
  it('returns false when chrome', function () {
    expect(isIe(AGENTS.pcChrome_41)).toBe(false);
  });

  it('returns false when Edge 12', function () {
    expect(isIe(AGENTS.edge12)).toBe(false);
  });

  it('returns false when Edge 13', function () {
    expect(isIe(AGENTS.edge13)).toBe(false);
  });

  it('returns true when IE7', function () {
    expect(isIe(AGENTS.ie7)).toBe(true);
  });

  it('returns true when IE8', function () {
    expect(isIe(AGENTS.ie8)).toBe(true);
  });

  it('returns true when IE9', function () {
    expect(isIe(AGENTS.ie9)).toBe(true);
  });

  it('returns true when IE10', function () {
    expect(isIe(AGENTS.ie10)).toBe(true);
  });

  it('returns true when IE11', function () {
    expect(isIe(AGENTS.ie11)).toBe(true);
  });
});
