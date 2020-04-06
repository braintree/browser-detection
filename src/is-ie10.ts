export default function isIe10(ua): boolean {
  ua = ua || window.navigator.userAgent;

  return ua.indexOf("MSIE 10") !== -1;
}
