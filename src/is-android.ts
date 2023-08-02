export = function isAndroid(ua?: string): boolean {
  ua = ua || window.navigator.userAgent;

  return /Android/i.test(ua);
};
