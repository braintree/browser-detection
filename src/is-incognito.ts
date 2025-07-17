import detectIncognito = require("detectincognitojs");

export = function isIncognito() {
  return detectIncognito.detectIncognito();
};
