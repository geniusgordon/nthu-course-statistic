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

    router.post('/', function(req, res) {
        request.post({
            url: url + 'pre_select_entry.php',
            jar: jar,
            form: req.body
        }, function(err, r, body) {
            if (body.indexOf('Error') != -1) {
                res.status(401).json({
                    login: false
                });
            } else {
                var query = body.split('?').slice(-1)[0];
                var acixstore = query.split('&')[0];
                request({
                    url: url + 'select_entry.php',
                    jar: jar,
                    qs: {
                        ACIXSTORE: acixstore.split('=').slice(-1)[0]
                    }
                }, function(err, r, body) {
                    res.status(200).json({
                        login: true,
                        acixstore: acixstore.split('=').slice(-1)[0]
                    });
                });
            }
        });
    });

    router.get('/auth-img', function(req, res) {
        var pwdstr = req.query.pwdstr || '';
        request({
            url: url + 'auth_img.php?' + pwdstr,
            jar: jar,
            qs: {
                pwdstr: pwdstr
            }
        }).pipe(res);
    });

    return router;
}

