
var isIe10 = require('../is-ie10');
var AGENTS = require('./helpers/user-agents');

describe('isIe10', function () {
  it('false when chrome', function () {
    expect(isIe10(AGENTS.pcChrome_41)).toBe(false);
  });

  it('true when IE10', function () {
    expect(isIe10(AGENTS.ie10)).toBe(true);
  });

  it('false when IE9', function () {
    expect(isIe10(AGENTS.ie9)).toBe(false);
  });
});
