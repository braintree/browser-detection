import { isAndroid } from "./is-android";
import { isChromeOS } from "./is-chrome-os";
import { isIos } from "./is-ios";

export function hasSoftwareKeyboard(): boolean {
  return isAndroid() || isChromeOS() || isIos();
}
