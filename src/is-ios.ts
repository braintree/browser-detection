export default function isIos(ua): boolean {
  ua = ua || window.navigator.userAgent;

  return /iPhone|iPod|iPad/i.test(ua);
}
