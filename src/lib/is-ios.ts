import { isIpadOS } from "../";

function isIos(ua?: string, checkIpadOS = true, document?: object): boolean {
  ua = ua || window.navigator.userAgent;
  const iOsTest = /iPhone|iPod|iPad/i.test(ua);
  return checkIpadOS ? iOsTest || isIpadOS(ua, document) : iOsTest;
}

export default isIos;
