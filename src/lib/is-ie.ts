import { isIE11 } from "../";

function isIE(ua?: string): boolean {
  ua = ua || window.navigator.userAgent;

  return ua.indexOf("MSIE") !== -1 || isIE11(ua);
}

export default isIE;
