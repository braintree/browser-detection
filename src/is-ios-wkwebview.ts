import isIosWebview = require("./is-ios-webview");

export = function isIosWKWebview(
  ua?: string,
  statusBarVisible?: boolean,
): boolean {
  statusBarVisible =
    typeof statusBarVisible !== "undefined"
      ? statusBarVisible
      : window.statusbar.visible;

  return isIosWebview(ua) && statusBarVisible;
};
