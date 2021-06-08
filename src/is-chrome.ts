import isEdge = require("./is-edge");
import isSamsung = require("./is-samsung");
import isDuckDuckGo = require("./is-duckduckgo");
import isOpera = require("./is-opera");
import isSilk = require("./is-silk");

export = function isChrome(ua?: string): boolean {
  ua = ua || window.navigator.userAgent;

  return (
    (ua.indexOf("Chrome") !== -1 || ua.indexOf("CriOS") !== -1) &&
    !isEdge(ua) &&
    !isSamsung(ua) &&
    !isDuckDuckGo(ua) &&
    !isOpera(ua) &&
    !isSilk(ua)
  );
};
