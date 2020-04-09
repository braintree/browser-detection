import isEdge from "./is-edge";
import isSamsung from "./is-samsung";

export default function isChrome(ua?: string): boolean {
  ua = ua || window.navigator.userAgent;

  return (
    (ua.indexOf("Chrome") !== -1 || ua.indexOf("CriOS") !== -1) &&
    !isEdge(ua) &&
    !isSamsung(ua)
  );
}
