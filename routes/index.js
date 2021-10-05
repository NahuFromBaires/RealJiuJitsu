var express = require('express');
var router = express.Router();
var path = require('path')

let local = path.join(__dirname, '../index.html')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render(local);
  console.log(local);
});

module.exports = router;
