'use strict';

var isIe = require('../is-ie');
var AGENTS = require('./helpers/user-agents');

describe('isIe', function () {
  it('false when chrome', function () {
    expect(isIe(AGENTS.pcChrome_41)).to.equal(false);
  });

  it('false when Edge 12', function () {
    expect(isIe(AGENTS.edge12)).to.equal(false);
  });

  it('false when Edge 13', function () {
    expect(isIe(AGENTS.edge13)).to.equal(false);
  });

  it('true when IE7', function () {
    expect(isIe(AGENTS.ie7)).to.equal(true);
  });

  it('true when IE8', function () {
    expect(isIe(AGENTS.ie8)).to.equal(true);
  });

  it('true when IE9', function () {
    expect(isIe(AGENTS.ie9)).to.equal(true);
  });

  it('true when IE10', function () {
    expect(isIe(AGENTS.ie10)).to.equal(true);
  });

  it('true when IE11', function () {
    expect(isIe(AGENTS.ie11)).to.equal(true);
  });
});
