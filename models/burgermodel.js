var orm = require('../config/orm.js');


var burgermodel = {
	selectAll: function (cb) {     
		orm.selectAll('burgers', function (res) {
			cb(res);
		});
	},
	insertOne: function (column, values, cb) {
		orm.insertOne('burgers',column,values, function (res) {
			cb(res);
		});
	},
	updateOne: function (column, newValue, condition, cb) {
		orm.updateOne('burgers', column, newValue, condition, function (res) {
			cb(res);
		});
	},
};


module.exports = burgermodel;