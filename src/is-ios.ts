export default function isIos(ua?: string): boolean {
  ua = ua || window.navigator.userAgent;

  return /iPhone|iPod|iPad/i.test(ua);
}
