import express from "express";

const jwt = require("jsonwebtoken");
require('dotenv').config();
const env = process.env.NODE_ENV || 'development';
const configJson = require('./config');
const config = configJson[env];
const Util = require('../utils/Utils');
const util = new Util();
const passport = require('passport');
const app = express();

module.exports = (req, res, next) => {
	// Gather the jwt access token from the request header
	let user, authHeader, token;
	if(req.session.passport) {
		user = req.session.passport.user;
	}
	if(user) {
		token = user.token;
	} else {
		authHeader = req.headers['authorization'];
		token = authHeader && authHeader.split(' ')[1];
	}
	if (token == null) {
		util.setError(401, 'User not authenticated');
		return util.send(res);
	}
	jwt.verify(token, config.secret_token, (err, user) => {
		if (err) {
			console.log(err);
			res.setError(403, err);
			return util.send(res);
		}
		req.user = user;
		next() // pass the execution off to whatever request the client intended
	});
}
