var express = require('express');
var cheerio = require('cheerio');
var request = require('request');
var router = express.Router();
var Iconv = require('iconv').Iconv;
var fs = require('fs');

var url = 'https://www.ccxp.nthu.edu.tw/ccxp/INQUIRE/';
var statistic_url = 'https://www.ccxp.nthu.edu.tw/ccxp/COURSE/JH/7/7.2/7.2.7/JH727002.php';

module.exports = function(jar) {
    router.get('/', function(req, res) {
    });

    router.get('/:code', function(req, res) {
        var code = req.params.code;
        getStatisticHtml(code, jar, function(err, html) {
            if (err)
                return res.status(401).json(err);
            res.status(200).json({
                statistic: parseStatisticHtml(html)
            });
        });
    });

    return router;
}

function getStatisticHtml(code, jar, done) {
    request.post({
        url: statistic_url,
        jar: jar,
        form: {
            ACIXSTORE: jar.acixstore,
            select: code.toUpperCase(),
            act: 1
        },
        encoding: null
    }, function(err, res, body) {
        if (body.indexOf('session is interrupted!') != -1)
            return done({
                message: 'not login'
            });
        var iconv = new Iconv('Big5', 'utf-8');
        var html = iconv.convert(body).toString('utf-8');
        done(null, html);
    });
}

function parseStatisticHtml(html) {
    var $ = cheerio.load(html);
    return $('tr').get().map(function (tr) {
        return $(tr).find('td').get().map(function(td) {
            return $(td).text();
        });
    }).slice(3);
}


