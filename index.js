var express = require("express"),
	bodyParser = require('body-parser'),
	// db = require('./models'),
	path = require('path'),
	app = module.exports.app = exports.app = express(),
	mongoose = require('mongoose'),
	db = mongoose.connection,
	User = require('./models/user'),
	ManagementIncident = require('./models/managementincident');

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

app.get('/allmi', function(req, res){
	ManagementIncident.find({}, function(err, incidents){
		var incidentArray = [];

		incidents.forEach(function(incident){
			incidentArray.push(incident);
		});
		res.send(incidentArray);
	})
})

// var addItems = function(){
// 	for(var i = 0; i < 15; i++){
// 	var newIncident = {};
// 	newIncident.referenceNumber = i;
// 	newIncident.summary = "incident" + i;
// 	newIncident.currentStatus = "Awaiting Response";
// 	newIncident.endUser = "SA";
// 	newIncident.minutesToBreach = 1;
// 	ManagementIncident.create(newIncident, function(err, incident){
// 		if(err) {
// 			res.send(err)
// 		}
// 		if(incident){
// 			console.log(incident);
// 		}
// 	})
// 	}
// }
// addItems();

app.use('/auth', require('./controllers/auth'));

app.listen(3000);


