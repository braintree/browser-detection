export default function isSamsungBrowser(ua): boolean {
  ua = ua || window.navigator.userAgent;

  return /SamsungBrowser/i.test(ua);
}
