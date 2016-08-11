var express = require('express');
var router = express.Router();
// var path = require('path');

var cats = [{name: 'Luna', trait: 'Fiesty'}];

router.get('/', function(req, res) {
  res.send(cats);
});

router.post('/' , function(req, res) {
cats.push(req.body);
res.sendStatus(201);
});

module.exports = router;
