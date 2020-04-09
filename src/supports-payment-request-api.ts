import isChrome from "./is-chrome";

const MINIMUM_SUPPORTED_CHROME_VERSION = 61;

function isSupportedChromeVersion(ua: string): boolean {
  const match = ua.match(/Chrome\/(\d+)\./);

  if (!match) {
    return false;
  }

  const version = parseInt(match[1], 10);

  return version >= MINIMUM_SUPPORTED_CHROME_VERSION;
}

export default function supportsPaymentRequestApi(ua?: string): boolean {
  ua = ua || window.navigator.userAgent;

  if (!window.PaymentRequest) {
    return false;
  }

  if (!isChrome(ua)) {
    // if browser is not chrome based, but has Payment Request API
    // this means that it implemented the API after it was finalized
    return true;
  }

  // Chrome introduce the Payment Request API in some versions of
  // Android Chrome as early as Chrome v53, but it was not
  // finalized until v61
  return isSupportedChromeVersion(ua);
}
