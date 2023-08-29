import { isIosWebview } from "../";

function isIosWKWebview(ua?: string, statusBarVisible?: boolean): boolean {
  statusBarVisible =
    typeof statusBarVisible !== "undefined"
      ? statusBarVisible
      : window.statusbar.visible;

  return isIosWebview(ua) && statusBarVisible;
}

export default isIosWKWebview;
