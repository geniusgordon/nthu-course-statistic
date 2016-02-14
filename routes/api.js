var api = require('express')();

module.exports = function(jar) {
    var login = require('./api/login')(jar);
    var statistic = require('./api/statistic')(jar);
    var department = require('./api/department');
    api.use('/login', login);
    api.use('/statistic', statistic);
    api.use('/department', department);

    return api;
}

