var connection = require('../config/connection.js');

var orm = {
	selectAll: function (table, cb) {
		var queryString = 'SELECT * FROM ' + table + ';';
		connection.query(queryString, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	},

	insertOne: function (table, column, values, cb) {
		var columnString = column.toString();
		var valuesString = "'"+values +"'";
		var queryString = 'INSERT INTO ' + table + ' (' + columnString + ') ' + 'VALUES(' + "'" + values + "'" + ');'
		connection.query(queryString, values, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	},


	updateOne: function  (table, column, newValue, condition, cb) {
		var queryString = 'UPDATE ' + table + ' SET ' + column + '=' + newValue + ' WHERE ' + condition + ';'
		connection.query(queryString, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	},
};


orm.selectAll('burgers', function(data){console.log();})
orm.insertOne('burgers', function(data){console.log();})
orm.updateOne('burgers','burger_name','"Chickin"', false})




module.exports = orm;
