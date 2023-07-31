import isIos from "./is-ios";

function isGoogleSearchApp(ua: string): boolean {
  return /\bGSA\b/.test(ua);
}

function isIosGoogleSearchApp(ua?: string): boolean {
  ua = ua || window.navigator.userAgent;

  return isIos(ua) && isGoogleSearchApp(ua);
}

export default isIosGoogleSearchApp;
