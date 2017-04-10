'use strict';

var isIe10 = require('../is-ie10');
var AGENTS = require('./helpers/user-agents');

describe('isIe10', function () {
  it('false when chrome', function () {
    expect(isIe10(AGENTS.pcChrome_41)).to.equal(false);
  });

  it('true when IE10', function () {
    expect(isIe10(AGENTS.ie10)).to.equal(true);
  });

  it('false when IE9', function () {
    expect(isIe10(AGENTS.ie9)).to.equal(false);
  });
});
