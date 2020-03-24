
var fs = require('fs');
var path = require('path');
var browserDetection = require('../browser-detection');

describe('browserDetection', function () {
  it('includes a prop for each js file in the root directory', function () {
    var functions = Object.keys(browserDetection);
    var files = fs.readdirSync('./');
    var jsFileNames = files.filter(function (file) {
      return path.extname(file) === '.js' &&
        file !== 'browser-detection.js';
    });
    var jsFiles = jsFileNames.map(function (file) {
      return require('../' + file);
    });

    expect(jsFiles.length).toBeGreaterThan(0);

    jsFiles.forEach(function (module) {
      var found = functions.find(function (prop) {
        return module === browserDetection[prop];
      });

      if (!found) {
        throw new Error(module + ' was not found on browserDetection');
      }
    });
  });
});
