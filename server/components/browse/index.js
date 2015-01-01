var Router = require('express').Router;
var Skyscanner = require('skyscanner');
var s = new Skyscanner();

var router = new Router();

router.get('/autosuggest/:query', function(req, res) {
  s.autosuggest(req.params.query).then(function(data) {
    res.json(data);
  });
});

module.exports = router;

