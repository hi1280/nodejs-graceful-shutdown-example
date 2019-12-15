var express = require('express');
var router = express.Router();

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

router.get('/', async function(req, res, next) {
  await timeout(500);
  res.send('respond with a resource');
});

router.get('/healthz', function(req, res, next) {
  res.status(200).end();
});

module.exports = router;
