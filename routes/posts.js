const { default: axios } = require('axios');
var express = require('express');
var router = express.Router();

const URL = "https://jsonplaceholder.typicode.com/posts"

/* GET users listing. */
router.get('/', async function (req, res, next) {
  const posts = await axios.get(URL)

  res.json(posts.data);
});

module.exports = router;
