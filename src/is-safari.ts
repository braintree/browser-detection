function isSafari(ua?: string): boolean {
  ua = ua || window.navigator.userAgent;

  return (
    /^Mozilla\/5\.0.*Safari\//.test(ua) &&
    !/(iPhone|iPad|iPod|Android|SM-)/i.test(ua) &&
    !/Chrome|CriOS|FxiOS|OPiOS|mercury/i.test(ua)
  );
}

export default isSafari;
