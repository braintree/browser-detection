import detectIncognito from "detectincognitojs";

export = function isIncognito() {
  return detectIncognito();
};
