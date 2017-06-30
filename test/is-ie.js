'use strict';

var isIe = require('../is-ie');
var AGENTS = require('./helpers/user-agents');

describe('isIe', function () {
  it('returns false when chrome', function () {
    expect(isIe(AGENTS.pcChrome_41)).to.equal(false);
  });

  it('returns false when Edge 12', function () {
    expect(isIe(AGENTS.edge12)).to.equal(false);
  });

  it('returns false when Edge 13', function () {
    expect(isIe(AGENTS.edge13)).to.equal(false);
  });

  it('returns true when IE7', function () {
    expect(isIe(AGENTS.ie7)).to.equal(true);
  });

  it('returns true when IE8', function () {
    expect(isIe(AGENTS.ie8)).to.equal(true);
  });

  it('returns true when IE9', function () {
    expect(isIe(AGENTS.ie9)).to.equal(true);
  });

  it('returns true when IE10', function () {
    expect(isIe(AGENTS.ie10)).to.equal(true);
  });

  it('returns true when IE11', function () {
    expect(isIe(AGENTS.ie11)).to.equal(true);
  });
});
