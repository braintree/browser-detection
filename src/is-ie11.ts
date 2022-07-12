export default function isIe11(ua?: string): boolean {
  ua = ua || window.navigator.userAgent;

  return ua.indexOf("Trident/7") !== -1;
};
