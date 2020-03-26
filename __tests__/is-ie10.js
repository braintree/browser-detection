
const isIe10 = require('../is-ie10');
const AGENTS = require('./helpers/user-agents');

describe('isIe10', () => {
  it('false when chrome', () => {
    expect(isIe10(AGENTS.pcChrome_41)).toBe(false);
  });

  it('true when IE10', () => {
    expect(isIe10(AGENTS.ie10)).toBe(true);
  });

  it('false when IE9', () => {
    expect(isIe10(AGENTS.ie9)).toBe(false);
  });
});
