function isIE9(ua?: string): boolean {
  ua = ua || window.navigator.userAgent;

  return ua.indexOf("MSIE 9") !== -1;
}

export default isIE9;
