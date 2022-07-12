import isIos from "./is-ios";

function isGoogleSearchApp(ua: string): boolean {
  return /\bGSA\b/.test(ua);
}

export default function isIosGoogleSearchApp(ua?: string): boolean {
  ua = ua || window.navigator.userAgent;

  return isIos(ua) && isGoogleSearchApp(ua);
};
