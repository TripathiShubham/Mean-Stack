'use strict';

/**
 * Module dependencies.
 */
 var glob = require('glob'),
     path = require('path'),
     assets = require('../assets/default.js'),
     express = require('express');

/**
 * Initialize application middleware
 */
module.exports.initMiddleware = function (app) {

  app.use('/client', express.static("client"));

  // Initialize favicon middleware
  // app.use(favicon(app.locals.favicon));
  //
  // // Request body parsing middleware should be above methodOverride
  // app.use(bodyParser.urlencoded({
  //   extended: true
  // }));
  // app.use(bodyParser.json());

};

/**
 * Configure the modules server routes
 */
module.exports.initModulesServerRoutes = function (app) {
  glob.sync(assets.server.routes).forEach(function(file) {
    require(path.resolve(file))(app);
  });
};

/**
 * Initialize the Express application
 */
module.exports.init = function (db) {
  // Initialize express app
  var app = express();

  // Initialize Express middleware
  this.initMiddleware(app);

  // Initialize modules server routes
  this.initModulesServerRoutes(app);

  return app;
}
