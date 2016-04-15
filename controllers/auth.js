var express = require('express'),
	User = require('../models/user'),
	app = module.exports.app = exports.app = express(),
	router = express.Router();

router.route('/signup')
	.post(function(req, res){
		User.create(req.body, function(err, user){
			if(err) return res.status(500).send(err);
			if(user){
				user.save();
				res.send(user);
			}
		});
	});

router.route('/login')
	.post(function(req, res){
		var loginUser = {
			username: req.body.username,
			password: req.body.password
		}
		User.findOne({username:loginUser.username}, function(err, user){
			if (err) return res.status(500).send(err);
			console.log(user);
			user.comparePassword(loginUser.password, function(err, match){
				if (err) throw err;
				console.log(user.password + ":" + match)
				if(match){
					res.redirect('/')
				}
			})
		});
	});

module.exports = router;