import isIosFirefox from "./is-ios-firefox";
import isFirefox from "./is-firefox";

function isMobileFirefox(ua?: string): boolean {
  ua = ua || window.navigator.userAgent;

  return (
    isIosFirefox(ua) ||
    (/iPhone|iPod|iPad|Mobile|Tablet/i.test(ua) && isFirefox(ua))
  );
}

export default isMobileFirefox;
