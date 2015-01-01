var Router = require('express').Router;
var Skyscanner = require('skyscanner');
var s = new Skyscanner();

var router = new Router();

router.get('/destinations/:from/:to', function(req, res) {
  s.destinations(req.params.from, req.params.to, req.query).then(function(data) {
    res.json(data);
  });
});

router.get('/calendar/:from/:to', function(req, res) {
  s.calendar(req.params.from, req.params.to, req.query).then(function(data) {
    res.json(data);
  });
});

router.get('/autosuggest/:query', function(req, res) {
  s.autosuggest(req.params.query).then(function(data) {
    res.json(data);
  });
});

module.exports = router;

