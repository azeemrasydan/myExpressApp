var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({"user": "Hello Folks"});
});

/* GET users listing. */
router.post('/', function(req, res, next) {
  res.send(req.body);
});

/* GET users listing. */
router.get('/message', function(req, res, next) {
  res.send({"message": "Hello world!"});
});



module.exports = router;
