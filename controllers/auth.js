var express = require('express'),
	User = require('../models/user'),
	app = module.exports.app = exports.app = express(),
	router = express.Router();

router.route('/signup')
	.get(function(req, res){
		res.sendfile('./public/auth/signup.html');
	})
	.post(function(req, res){
		User.create(req.body, function(err, user){
			if(err) return res.status(500).send(err);
			user.save();
		});
	});

router.route('/login')
	.get(function(req, res){
		res.sendfile('./public/auth/login.html');
	})
	.post(function(req, res){
		var user = {
			username: req.body.username,
			password: req.body.password
		}
		User.findOne({username:user.username}, function(err, user){
			if (err) return res.status(500).send(err);
			user.comparePassword(user.password, function(err, match){
				if (err) throw err;
				if(match){
					res.redirect('/');
				}
			})
		})
	})

module.exports = router;