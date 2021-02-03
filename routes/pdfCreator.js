var express = require('express');
var router = express.Router();

//Required package
var pdf = require("pdf-creator-node");
var fs = require('fs');



/* GET users listing. */
router.get('/', function (req, res, next) {

  

  res.sendFile('output.pdf');


});

/* GET users listing. */
router.post('/', function (req, res, next) {
  res.send(req.body);
});

/* GET users listing. */
router.get('/message', function (req, res, next) {
  res.send({ "message": "Hello world!" });
});

module.exports = router;
