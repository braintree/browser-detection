'use strict';

var isIe9 = require('../is-ie9');
var AGENTS = require('./helpers/user-agents');

describe('isIe9', function () {
  it('false when chrome', function () {
    expect(isIe9(AGENTS.pcChrome_41)).to.equal(false);
  });

  it('true when IE9', function () {
    expect(isIe9(AGENTS.ie9)).to.equal(true);
  });

  it('false when IE8', function () {
    expect(isIe9(AGENTS.ie8)).to.equal(false);
  });
});

