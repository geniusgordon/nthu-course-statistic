var express = require('express');
var Department = require('../../models/department');
var router = express.Router();

router.get('/', function(req, res) {
    Department.find({}, function(err, departments) {
        res.status(200).json({
            departments: departments
        });
    });
});

module.exports = router;

