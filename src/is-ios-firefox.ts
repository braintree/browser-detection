export default function isIosFirefox(ua?: string): boolean {
  ua = ua || window.navigator.userAgent;

  return /FxiOS/i.test(ua);
};
