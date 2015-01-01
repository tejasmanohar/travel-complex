'use strict';

var _ = require('lodash');
var Browse = require('./browse.model');

// Get list of browses
exports.index = function(req, res) {
  Browse.find(function (err, browses) {
    if(err) { return handleError(res, err); }
    return res.json(200, browses);
  });
};

// Get a single browse
exports.show = function(req, res) {
  Browse.findById(req.params.id, function (err, browse) {
    if(err) { return handleError(res, err); }
    if(!browse) { return res.send(404); }
    return res.json(browse);
  });
};

// Creates a new browse in the DB.
exports.create = function(req, res) {
  Browse.create(req.body, function(err, browse) {
    if(err) { return handleError(res, err); }
    return res.json(201, browse);
  });
};

// Updates an existing browse in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Browse.findById(req.params.id, function (err, browse) {
    if (err) { return handleError(res, err); }
    if(!browse) { return res.send(404); }
    var updated = _.merge(browse, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, browse);
    });
  });
};

// Deletes a browse from the DB.
exports.destroy = function(req, res) {
  Browse.findById(req.params.id, function (err, browse) {
    if(err) { return handleError(res, err); }
    if(!browse) { return res.send(404); }
    browse.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}