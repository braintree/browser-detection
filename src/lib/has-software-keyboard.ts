import { isAndroid, isChromeOS, isIos } from "../";

function hasSoftwareKeyboard(): boolean {
  return isAndroid() || isChromeOS() || isIos();
}

export default hasSoftwareKeyboard;
