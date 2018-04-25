'use strict';

/**
 * Module dependencies
 */
 var path = require('path');

 /**
  * Render the main application page
  */
exports.renderIndex = function (req, res) {
  res.sendFile(path.resolve('client/index.html'));
};
