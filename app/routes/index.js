var express = require('express');
var router = express.Router(),
index = require('../controllers/index.controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.json({
    "page" : "Index is working..."
  })
});

module.exports = router;
