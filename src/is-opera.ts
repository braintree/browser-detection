export = function isOpera(ua?: string): boolean {
  ua = ua || window.navigator.userAgent;

  return ua.indexOf("OPR/") !== -1 || ua.indexOf("Opera/") !== -1;
};
