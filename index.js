var express = require("express"),
	app = express(),
	bodyParser = require('body-parser'),
	// db = require('./models'),
	path = require('path'),
	mongoose = require('mongoose');
	// durandal = require('durandal');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/static'));


app.get('/*', function(req, res){
	res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(3000);


