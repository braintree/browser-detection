export default function isFirefox(ua): boolean {
  ua = ua || window.navigator.userAgent;

  return /Firefox/i.test(ua);
}
