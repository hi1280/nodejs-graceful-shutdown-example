var express = require('express');
var router = express.Router();

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

router.get('/', async function(req, res, next) {
  await timeout(5000);
  res.send('respond with a resource');
});

module.exports = router;
