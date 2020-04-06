import isIE11 from "./is-ie11";

export default function isIE(ua): boolean {
  ua = ua || window.navigator.userAgent;

  return ua.indexOf("MSIE") !== -1 || isIE11(ua);
}
