
const isIe9 = require('../is-ie9');
const AGENTS = require('./helpers/user-agents');

describe('isIe9', () => {
  it('false when chrome', () => {
    expect(isIe9(AGENTS.pcChrome_41)).toBe(false);
  });

  it('true when IE9', () => {
    expect(isIe9(AGENTS.ie9)).toBe(true);
  });

  it('false when IE8', () => {
    expect(isIe9(AGENTS.ie8)).toBe(false);
  });
});

