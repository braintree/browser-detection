export default function isIe11(ua): boolean {
  ua = ua || window.navigator.userAgent;

  return ua.indexOf("Trident/7") !== -1;
}
