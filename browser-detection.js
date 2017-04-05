'use strict';

var isAndroid = require('./is-android');
var isIe9 = require('./is-ie9');
var isIos = require('./is-ios');
var supportsPopups = require('./supports-popups');

module.exports = {
  isAndroid: isAndroid,
  isIe9: isIe9,
  isIos: isIos,
  supportsPopups: supportsPopups
};
