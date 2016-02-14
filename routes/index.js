var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('statistic');
});

router.get('/login', function(req, res) {
    res.render('login');
});

router.get('/statistic', function(req, res) {
    res.render('statistic');
});

module.exports = router;

