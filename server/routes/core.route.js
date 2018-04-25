'use strict';

/**
 * Module dependencies
 */
 var path = require('path'),
     core = require('../controller/core.server.controller');

module.exports = function (app) {

  // Define application route
  app.route('/*').get(core.renderIndex);

};
