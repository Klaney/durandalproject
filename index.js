var express = require("express"),
	bodyParser = require('body-parser'),
	// db = require('./models'),
	path = require('path'),
	app = module.exports.app = exports.app = express(),
	mongoose = require('mongoose');
	// durandal = require('durandal');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/static'));
app.use(express.static(__dirname + '/public'));
app.use(require('connect-livereload')());


app.get('/*', function(req, res){
	res.render('index.html')
	//res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(3000);


