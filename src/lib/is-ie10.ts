function isIE10(ua?: string): boolean {
  ua = ua || window.navigator.userAgent;

  return ua.indexOf("MSIE 10") !== -1;
}

export default isIE10;