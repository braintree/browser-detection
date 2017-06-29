'use strict';

var isEdge = require('../is-edge');
var AGENTS = require('./helpers/user-agents');

describe('isEdge', function () {
  it('false when chrome', function () {
    expect(isEdge(AGENTS.pcChrome_41)).to.equal(false);
  });

  it('false when IE11', function () {
    expect(isEdge(AGENTS.ie11)).to.equal(false);
  });

  it('false when IE9', function () {
    expect(isEdge(AGENTS.ie9)).to.equal(false);
  });

  it('false when IE10', function () {
    expect(isEdge(AGENTS.ie10)).to.equal(false);
  });

  it('true when Edge 12', function () {
    expect(isEdge(AGENTS.edge12)).to.equal(true);
  });

  it('true when Edge 13', function () {
    expect(isEdge(AGENTS.edge13)).to.equal(true);
  });
});
