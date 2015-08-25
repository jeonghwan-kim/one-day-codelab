'use strict';

var mysql      = require('mysql');
var state = {
  pool: null
};

exports.connect = function() {
  state.pool = mysql.createPool({
    connectionLimit : 10,
    host            : '54.64.145.4',
    user            : 'dev01',
    password        : 'a20150829',
    database        : 'codelab'
  });
};

exports.query = function(q, cb){
  if(!state.pool) new Error();
  state.pool.getConnection(function(err, conn){
    if (err) cb(err, '');
    conn.query(q, function (err, results) {
      // error will be an Error if one occurred during the query
      // results will contain the results of the query
      conn.release();
      if (err) {
        cb(err, '');
      }
      cb(null, results);
    })
  });
}
