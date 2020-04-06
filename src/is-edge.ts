export default function isEdge(ua): boolean {
  ua = ua || window.navigator.userAgent;

  return ua.indexOf("Edge/") !== -1;
}
