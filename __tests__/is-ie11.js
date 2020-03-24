
var isIe11 = require('../is-ie11');
var AGENTS = require('./helpers/user-agents');

describe('isIe11', function () {
  it('returns false when chrome', function () {
    expect(isIe11(AGENTS.pcChrome_41)).toBe(false);
  });

  it('returns true when IE11', function () {
    expect(isIe11(AGENTS.ie11)).toBe(true);
  });

  it('returns false when IE9', function () {
    expect(isIe11(AGENTS.ie9)).toBe(false);
  });

  it('returns false when IE10', function () {
    expect(isIe11(AGENTS.ie10)).toBe(false);
  });
});
