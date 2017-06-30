'use strict';

var isIe11 = require('../is-ie11');
var AGENTS = require('./helpers/user-agents');

describe('isIe11', function () {
  it('returns false when chrome', function () {
    expect(isIe11(AGENTS.pcChrome_41)).to.equal(false);
  });

  it('returns true when IE11', function () {
    expect(isIe11(AGENTS.ie11)).to.equal(true);
  });

  it('returns false when IE9', function () {
    expect(isIe11(AGENTS.ie9)).to.equal(false);
  });

  it('returns false when IE10', function () {
    expect(isIe11(AGENTS.ie10)).to.equal(false);
  });
});
