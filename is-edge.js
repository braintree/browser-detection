'use strict';

module.exports = function isEdge(ua) {
  ua = ua || navigator.userAgent;

  return ua.indexOf('Edge/') !== -1;
};
