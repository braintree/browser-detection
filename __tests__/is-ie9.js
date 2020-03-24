
var isIe9 = require('../is-ie9');
var AGENTS = require('./helpers/user-agents');

describe('isIe9', function () {
  it('false when chrome', function () {
    expect(isIe9(AGENTS.pcChrome_41)).toBe(false);
  });

  it('true when IE9', function () {
    expect(isIe9(AGENTS.ie9)).toBe(true);
  });

  it('false when IE8', function () {
    expect(isIe9(AGENTS.ie8)).toBe(false);
  });
});

