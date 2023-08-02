export = function isDuckDuckGo(ua?: string): boolean {
  ua = ua || window.navigator.userAgent;

  return ua.indexOf("DuckDuckGo/") !== -1;
};
