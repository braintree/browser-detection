export default function isAndroid(ua): boolean {
  ua = ua || window.navigator.userAgent;

  return /Android/.test(ua);
}
