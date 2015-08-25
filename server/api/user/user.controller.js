'use strict';

var _ = require('lodash');
var r = require("../../components/apiResponse");
var d = require("../../components/dbHelpers");

// Get list of users
exports.index = function(req, res) {
  d.query('select * from codelab.user', function (err, data){
    if (err) r.result(res, 500, 5000, "",{});
    r.result(res, 200, 0, "",{name:data});
  });
};
