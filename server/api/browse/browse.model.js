'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BrowseSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Browse', BrowseSchema);