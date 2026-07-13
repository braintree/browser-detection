import { isIe11 } from "./is-ie11";

export function isIe(ua?: string): boolean {
  ua = ua || window.navigator.userAgent;

  return ua.indexOf("MSIE") !== -1 || isIe11(ua);
}
