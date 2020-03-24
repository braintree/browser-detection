
var isEdge = require('../is-edge');
var AGENTS = require('./helpers/user-agents');

describe('isEdge', function () {
  it('returns false when chrome', function () {
    expect(isEdge(AGENTS.pcChrome_41)).toBe(false);
  });

  it('returns false when IE11', function () {
    expect(isEdge(AGENTS.ie11)).toBe(false);
  });

  it('returns false when IE9', function () {
    expect(isEdge(AGENTS.ie9)).toBe(false);
  });

  it('returns false when IE10', function () {
    expect(isEdge(AGENTS.ie10)).toBe(false);
  });

  it('returns true when Edge 12', function () {
    expect(isEdge(AGENTS.edge12)).toBe(true);
  });

  it('returns true when Edge 13', function () {
    expect(isEdge(AGENTS.edge13)).toBe(true);
  });
});
