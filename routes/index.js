var express = require('express');
var router = express.Router();
var mysql      = require('mysql');
var pool = mysql.createPool({
  connectionLimit: 10,
  host     : process.env.MYSQL_HOST || 'db',
  port     : process.env.MYSQL_PORT || 3306,
  user     : 'root',
  password : 'root',
  database : 'world'
});

router.get('/', function(req, res, next) {
  pool.query('select Name from country order by name', function (error, results) {
    if (error) throw error;
    res.send(results);
  });
});

router.get('/healthz', function(req, res, next) {
  res.status(200).end();
});

module.exports = router;
