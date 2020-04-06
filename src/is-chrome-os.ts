export default function isChromeOS(ua): boolean {
  ua = ua || window.navigator.userAgent;

  return /CrOS/i.test(ua);
}
