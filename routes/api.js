var api = require('express')();
var login = require('./api/login');

api.use('/login', login);

module.exports = api;

