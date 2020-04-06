export default function isIosFirefox(ua): boolean {
  ua = ua || window.navigator.userAgent;

  return /FxiOS/i.test(ua);
}
