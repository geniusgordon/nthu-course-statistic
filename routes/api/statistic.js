var express = require('express');
var cheerio = require('cheerio');
var request = require('request');
var router = express.Router();

var url = 'https://www.ccxp.nthu.edu.tw/ccxp/INQUIRE/';

module.exports = function(jar) {
    router.get('/', function(req, res) {
        request({
            url: url,
            jar: jar
        }, function(err, r, body) {
            var $ = cheerio.load(body);
            var authImgSrc = $('img[src^=auth]').attr('src');
            var query = authImgSrc.split('?').slice(-1)[0];
            res.status(200).json({
                pwdstr: query.split('=').slice(-1)[0]
            });
        });
    });

    return router;
}

