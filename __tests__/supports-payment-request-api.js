
const supportsPaymentRequestApi = require('../supports-payment-request-api');
const AGENTS = require('./helpers/user-agents');

describe('supportsPaymentRequestApi', () => {
  let testContext;

  beforeEach(() => {
    testContext = {};
    testContext.oldPaymentRequest = global.PaymentRequest;

    global.PaymentRequest = {};
  });

  afterEach(() => {
    global.PaymentRequest = testContext.oldPaymentRequest;
  });

  it('returns false if Payment Request object does not exist', () => {
    let key, ua;

    delete global.PaymentRequest;

    for (key in AGENTS) {
      if (!AGENTS.hasOwnProperty(key)) {
        continue;
      }

      ua = AGENTS[key];

      expect(supportsPaymentRequestApi(ua)).toBe(false);
    }
  });

  it('returns true if Payment Request object exists in a non-Chrome environment', () => {
    let key, ua;

    for (key in AGENTS) {
      if (!AGENTS.hasOwnProperty(key)) {
        continue;
      }

      if (/chrome/i.test(key) || /android/i.test(key)) {
        continue;
      }

      ua = AGENTS[key];

      expect(supportsPaymentRequestApi(ua)).toBe(true);
    }
  });

  it('returns true for Desktop Chrome version 61 or greater', () => {
    expect(supportsPaymentRequestApi(AGENTS.pcChrome_61)).toBe(true);
  });

  it('returns true for Android Chrome version 61 or greater', () => {
    expect(supportsPaymentRequestApi(AGENTS.androidPhoneChrome_61)).toBe(true);
  });

  it('returns false for Desktop Chrome versions less than 61', () => {
    expect(supportsPaymentRequestApi(AGENTS.pcChrome_60)).toBe(false);
    expect(supportsPaymentRequestApi(AGENTS.pcChrome_41)).toBe(false);
    expect(supportsPaymentRequestApi(AGENTS.pcChrome_27)).toBe(false);
  });

  it('returns false for Android Chrome versions less than 61', () => {
    expect(supportsPaymentRequestApi(AGENTS.androidPhoneChrome)).toBe(false);
    expect(supportsPaymentRequestApi(AGENTS.androidPhoneChrome_60)).toBe(false);
  });
});
