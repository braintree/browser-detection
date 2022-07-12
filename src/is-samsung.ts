export default function isSamsungBrowser(ua?: string): boolean {
  ua = ua || window.navigator.userAgent;

  return /SamsungBrowser/i.test(ua);
};
