var api = require('express')();

module.exports = function(jar) {
    var login = require('./api/login')(jar);
    api.use('/login', login);

    return api;
}

