import { isEdge, isSamsung, isDuckDuckGo, isOpera, isSilk } from "../";

function isChrome(ua?: string): boolean {
  ua = ua || window.navigator.userAgent;

  return (
    (ua.indexOf("Chrome") !== -1 || ua.indexOf("CriOS") !== -1) &&
    !isEdge(ua) &&
    !isSamsung(ua) &&
    !isDuckDuckGo(ua) &&
    !isOpera(ua) &&
    !isSilk(ua)
  );
}

export default isChrome;
