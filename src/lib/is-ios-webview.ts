import { isIos, isIosGoogleSearchApp } from "../";

function isIosWebview(ua?: string): boolean {
  ua = ua || window.navigator.userAgent;

  if (isIos(ua)) {
    // The Google Search iOS app is technically a webview and doesn't support popups.
    if (isIosGoogleSearchApp(ua)) {
      return true;
    }
    // Historically, a webview could be identified by the presence of AppleWebKit and _no_ presence of Safari after.
    return /.+AppleWebKit(?!.*Safari)/i.test(ua);
  }

  return false;
}

export default isIosWebview;
