export default function isSilk(ua?: string): boolean {
  ua = ua || window.navigator.userAgent;

  return ua.indexOf("Silk/") !== -1;
};
