import isIE11 from "./is-ie11";

function isIE(ua?: string): boolean {
  ua = ua || window.navigator.userAgent;

  return ua.indexOf("MSIE") !== -1 || isIE11(ua);
}

export default isIE;
