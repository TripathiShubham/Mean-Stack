'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose');

// Initialize Mongoose
module.exports.connect = function (cb) {
  var _this = this;

  var db = mongoose.connect('mongodb://127.0.0.1:27017/test', function (err) {
    // Log Error
    if (err) {
      console.log('Could not connect to MongoDB!');
      console.log(err);
    } else {

      // Call callback FN
      if (cb) cb(db);
    }
  });
};
