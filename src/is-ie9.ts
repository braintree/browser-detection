export default function isIe9(ua): boolean {
  ua = ua || window.navigator.userAgent;

  return ua.indexOf("MSIE 9") !== -1;
}
