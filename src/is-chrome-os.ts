export = function isChromeOS(ua?: string): boolean {
  ua = ua || window.navigator.userAgent;

  return /CrOS/i.test(ua);
};
