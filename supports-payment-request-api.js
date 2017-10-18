'use strict';

var isChrome = require('./is-chrome');

var MINIMUM_SUPPORTED_CHROME_VERSION = 61;

function isSupportedChromeVersion(ua) {
  var version;
  var match = ua.match(/Chrome\/(\d+)\./);

  if (!match) {
    return false;
  }

  version = parseInt(match[1], 10);

  return version >= MINIMUM_SUPPORTED_CHROME_VERSION;
}

module.exports = function supportsPaymentRequestApi(ua) {
  ua = ua || global.navigator.userAgent;

  if (!global.PaymentRequest) {
    return false;
  }

  if (!isChrome(ua)) {
    // if browser is not chrome based, but has Payment Request API
    // this means that it implimented the API after it was finalized
    return true;
  }

  // Chrome introduce the Payment Request API in some versions of
  // Android Chrome as early as Chrome v53, but it was not
  // finalized until v61
  return isSupportedChromeVersion(ua);
};
