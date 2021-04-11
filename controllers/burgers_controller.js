var express = require('express');
var router = express.Router();
var burgers = require('../models/burgermodel.js');


router.get('/', function (req, res) {
	res.redirect('/burgers');
});
router.get('/burgers', function (req, res) {
	burgers.all(function (data) {
		var hbsObject = { burgers: data };
		console.log(hbsObject);
		res.render('index', hbsObject);
	});
});
router.post('/burgers/create', function (req, res) {
	burgers.create('burger_name', [req.body.name], function () {
		res.redirect('/burgers');
	});
});
router.put('/burgers/update', function (req, res) {
	burgers.update('devoured',req.body.devoured,condition, function () {
		res.redirect('/burgers');
	});
});


module.exports = router;