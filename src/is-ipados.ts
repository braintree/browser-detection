export = function isIpadOS(ua?: string, document?: object): boolean {
  ua = ua || window.navigator.userAgent;
  document = document || window.document;

  // "ontouchend" is used to determine if a browser is on an iPad, otherwise
  // user-agents for iPadOS behave/identify as a desktop browser
  return /Mac|iPad/i.test(ua) && "ontouchend" in document;
};
