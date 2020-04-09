export default function isAndroid(ua?: string): boolean {
  ua = ua || window.navigator.userAgent;

  return /Android/.test(ua);
}
