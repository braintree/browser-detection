import isAndroid = require("./is-android");
import isChromeOS = require("./is-chrome-os");
import isIos = require("./is-ios");

export = function hasSoftwareKeyboard(): boolean {
  return isAndroid() || isChromeOS() || isIos();
};
