var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([
    { id: 1, name: "test1" },
    { id: 2, name: "test2" },
    {id: 3, name: "test3"},
  ]);
});

module.exports = router;
