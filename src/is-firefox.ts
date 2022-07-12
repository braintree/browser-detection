export = function isFirefox(ua?: string): boolean {
  ua = ua || window.navigator.userAgent;

  return /Firefox/i.test(ua);
};
