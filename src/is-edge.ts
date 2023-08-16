export = function isEdge(ua?: string): boolean {
  ua = ua || window.navigator.userAgent;

  return ua.indexOf("Edge/") !== -1 || ua.indexOf("Edg/") !== -1;
};
