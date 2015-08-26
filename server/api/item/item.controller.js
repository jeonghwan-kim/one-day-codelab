'use strict';

var _ = require('lodash');
var r = require("../../components/apiResponse");
var d = require("../../components/dbHelpers");

// Get list of items
exports.index = function(req, res) {
  var q = (req.query.q) ?
    'select * from codelab.item where title like "%' + req.query.q + '%"' :
    'select * from codelab.item ';
  d.query(q, function (err, data){
    if (err) {
      r.result(res, 500, 5000, "",{});
    } else {
      if (data.length === 0) {
        r.result(res, 500, 1, "no item",{items:data});
      } else {
        r.result(res, 200, 0, "",{items:data});
      }
    }
  });

};

exports.get = function(req, res) {
  var itemId = req.params.itemId;
  d.query('select * from codelab.item where id = ' +  itemId, function (err, data){
    if (err) {
      r.result(res, 500, 5000, "",{});
    } else {
      if (data.length === 0) {
        r.result(res, 500, 1, "no item",{item:data});
      } else {
        r.result(res, 200, 0, "",{item:data});
      }
    }
  });
}


exports.buy = function(req, res) {

}
