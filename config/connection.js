var mysql = require('mysql');

var connection;

var connection = mysql.createConnection({
	port: 3000,
	host: 'localhost',
	user: 'root',
	password: '1234567890',
	database: 'burgers_db'
});

if { connection = mysql.createConnection();
} else {
	connection = mysql.createConnection({
	host: 'heroku';
	user: '';
	password:'';
	database: '';
	})
}

if { connection = new Sequelize();
} else {
	connection =new Sequelize('burgers_db','root') {
	 	host: 'localhost';
	 	dialect: 'mysql';
	 	port:'3000';
	})
}


module.exports = connection;