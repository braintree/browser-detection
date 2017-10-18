'use strict';

var supportsPaymentRequestApi = require('../supports-payment-request-api');
var AGENTS = require('./helpers/user-agents');

describe('supportsPaymentRequestApi', function () {
  beforeEach(function () {
    this.oldPaymentRequest = global.PaymentRequest; // eslint-disable-line no-invalid-this

    global.PaymentRequest = {};
  });

  afterEach(function () {
    global.PaymentRequest = this.oldPaymentRequest; // eslint-disable-line no-invalid-this
  });

  it('returns false if Payment Request object does not exist', function () {
    var key, ua;

    delete global.PaymentRequest;

    for (key in AGENTS) {
      if (!AGENTS.hasOwnProperty(key)) {
        continue;
      }

      ua = AGENTS[key];

      expect(supportsPaymentRequestApi(ua)).to.equal(false);
    }
  });

  it('returns true if Payment Request object exists in a non-Chrome environemnt', function () {
    var key, ua;

    for (key in AGENTS) {
      if (!AGENTS.hasOwnProperty(key)) {
        continue;
      }

      if (/chrome/i.test(key) || /android/i.test(key)) {
        continue;
      }

      ua = AGENTS[key];

      expect(supportsPaymentRequestApi(ua)).to.equal(true);
    }
  });

  it('returns true for Desktop Chrome version 61 or greater', function () {
    expect(supportsPaymentRequestApi(AGENTS.pcChrome_61)).to.equal(true);
  });

  it('returns true for Android Chrome version 61 or greater', function () {
    expect(supportsPaymentRequestApi(AGENTS.androidPhoneChrome_61)).to.equal(true);
  });

  it('returns false for Desktop Chrome versions less than 61', function () {
    expect(supportsPaymentRequestApi(AGENTS.pcChrome_60)).to.equal(false);
    expect(supportsPaymentRequestApi(AGENTS.pcChrome_41)).to.equal(false);
    expect(supportsPaymentRequestApi(AGENTS.pcChrome_27)).to.equal(false);
  });

  it('returns false for Android Chrome versions less than 61', function () {
    expect(supportsPaymentRequestApi(AGENTS.androidPhoneChrome)).to.equal(false);
    expect(supportsPaymentRequestApi(AGENTS.androidPhoneChrome_60)).to.equal(false);
  });
});
