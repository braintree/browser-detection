import isIosWebview from "./is-ios-webview";

export default function isIosUIWebview(ua, statusBarVisible): boolean {
  statusBarVisible =
    typeof statusBarVisible !== "undefined"
      ? statusBarVisible
      : window.statusbar.visible;

  return isIosWebview(ua) && !statusBarVisible;
}
