var express = require("express"),
	bodyParser = require('body-parser'),
	// db = require('./models'),
	path = require('path'),
	app = module.exports.app = exports.app = express(),
	mongoose = require('mongoose'),
	db = mongoose.connection,
	User = require('./models/user');

mongoose.connect('mongodb://localhost/test');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/static'));
app.use(express.static(__dirname + '/public'));
app.use(require('connect-livereload')());

db.on('error', function(){
	console.log("We didn't connect");
});
db.once('open', function() {
  console.log("We're connected!");
});

app.get('/', function(req, res){
	res.render('index.html')
});

app.listen(3000);


