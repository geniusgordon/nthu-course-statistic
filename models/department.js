var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var departmentSchema = new Schema({
    "code" : String,
    "name" : String
});

module.exports = mongoose.model('department', departmentSchema);

