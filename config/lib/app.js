'use strict';

/**
 * Module dependencies.
 */
var   mongoose = require('./mongoose'),
      express = require('./express');

module.exports.init = function init(callback) {
  mongoose.connect(function (db) {
    // Initialize express
    var app = express.init(db);
    if (callback) callback(app, db);

  });
};

module.exports.start = function start() {
  var _this = this;

  _this.init(function (app, db) {

  // Start the app by listening on <port> at <host>
  app.listen(3000, function () {
    console.log("Server started on port ");
  });
});
};
