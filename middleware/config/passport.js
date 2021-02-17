//const ketCrypt = require('crypto').randomBytes(64).toString('hex');
require('dotenv').config();
const env = process.env.NODE_ENV || 'development';
const configJson = require('./config');
const config = configJson[env];
const userService = require('../core/express/services/users.service');
const LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const configAuth = require('../config/auth');
const passport = require('passport');
const models = require('../core/express');
const bcrypt = require("bcrypt");
const Util = require('../utils/Utils');
const util = new Util();
const ExtractJwt = require('passport-jwt').ExtractJwt;
const jwt = require("jsonwebtoken");

let error = {};
let opts = {};

//console.log(ketCrypt);

function generateAccessToken(username, token = '', time = '') {
	// expires after half and hour (1800 seconds = 30 minutes)
	let tokenTime;
	if(!time) {
		time = '1800s';
	}
	tokenTime = { expiresIn: time };
	if(token) {
		return [token, time];
	} else {
		return [jwt.sign(username, config.secret_token, tokenTime), time];
	}
}

function authenticateToken(req, res, next) {
	// Gather the jwt access token from the request header
	const authHeader = req.headers['authorization'];
	const token = authHeader && authHeader.split(' ')[1];
	if (token == null) {
		util.setError(401, res);
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


module.exports = function (app) {
	passport.serializeUser((user, done) => {
    if(user) done(null, user);
	});
	passport.deserializeUser(async (user, done) => {
		try {
			let authUser = await userService.findOneById(user.id);
			generateAccessToken({username: authUser.user_name});
			done(null, authUser);
		} catch (error) {
			throw done(error);
		}
	});

	passport.use('local-signup', new LocalStrategy({
		usernameField: 'user_name',
		passwordField: 'user_hash',
		passReqToCallback: true
	}, (req, username, password, done) => {
		process.nextTick(async () => {
			try {
				let token, time;
				const authUser = await userService.findOneByUserName(username);
				if (authUser) {
					return done({id: 7, code: 'signup_email_exists', message: 'That email already exists'}, false, req.flash('signupMessage', error));
				} else {
					[token, time] = generateAccessToken({username: req.body.user_name});
					//req.body.usr_token = token;
					//req.body.usr_token_time = time;
					const newUser = await userService.addUser(req.body);
					return done(null, newUser);
				}
			} catch (error) {
				throw done(error);
			}
		})
	}));

	passport.use('local-login', new LocalStrategy({
		usernameField: 'user_name',
		passwordField: 'user_hash',
		passReqToCallback: true
	}, (req, username, password, done) => {
		process.nextTick(async () => {
			try {
				let token, time;
				const authUser = await userService.findOneByUserName(username);
				if (!authUser)
					return done({id: 7, code: 'login_invalid_user', message: "That user doesn't exists"}, false, req.flash('loginMessage', 'No user found'));
				let compare = await bcrypt.compare(password, authUser.user_hash).then((resp)=>{return resp});
				if (!compare) {
					return done({id: 8, code: 'login_invalid_pass', message: 'User has Invalid password'}, authUser, req.flash('loginMessage', error));
				}
				return done(null, authUser);
			} catch (error) {
				throw done(error)
			}
		})
	}));



  // passport.use(new LocalStrategy(
  //   async (username, password, done) => {
  //     try {
  //       const authUser = await userService.findOneByUsrUserName(username);
  //       if (!authUser)
  //         return done(null, false, req.flash('loginMessage', 'No user found'));
  //       let compare = await bcrypt.compare(password, authUser.usr_password).then((resp)=>{return resp});
  //       if (!compare) {
  //         return done(null, false, req.flash('loginMessage', 'invalid user'));
  //       }
  //       return done(null, authUser);
  //     } catch (error) {
  //       throw done(error)
  //     }
  //   }
  // ));



	passport.use("facebook", new FacebookStrategy({
		clientID: configAuth.facebookAuth.clientId,
		clientSecret: configAuth.facebookAuth.clientSecret,
		callbackURL: configAuth.facebookAuth.callbackURL,
		profileFields: ["name", "email", "link", "locale", "timezone"],
		passReqToCallback: true
	}, (accessToken, refreshToken, profile, done) => {
		process.nextTick(async () => {
			try {
				let authUser = await userService.findOneByUsrId(profile.id);
				const newEsUser = {
					usr_id: profile.id,
					usr_token: accessToken,
					usr_name: profile.displayName,
					usr_mail: profile.emails ? profile.emails[0].value : '',
					user_name: profile.emails ? profile.emails[0].value : '',
					usr_par_auth_strategy_uid: 'facebook'
				};
				if (authUser)
					authUser = await userService.updateUserById(profile.id, newEsUser);
				else {
					authUser = await userService.addUser(newEsUser);
				}
				return done(null, authUser);
			} catch (error) {
				done(error);
			}
		})
	}));

	// opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
	// opts.secretOrKey = config.secret_key;
	// opts.issuer = 'accounts.examplesoft.com';
	// opts.audience = 'yoursite.net';

	passport.use('jwt-local-login', new JwtStrategy({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			secretOrKey: config.secret_token,
			issuer: 'accounts.examplesoft.com',
			audience: 'yoursite.net'
		}, (jwt_payload, done) => {
			process.nextTick(async () => {
				try {
					const authUser = userService.findOneById({id: jwt_payload.sub});
					if (!authUser){
						return done({id: 7, code: 'login_invalid_user', message: "That user doesn't exists"}, false, req.flash('loginMessage', 'No user found'));
					}
					return done(null, authUser);
				} catch (e) {
					done(error);
				}
			});
		}));


	passport.use('jwt-local-signup', new JwtStrategy({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			secretOrKey: config.secret_token,
			issuer: 'accounts.examplesoft.com',
			audience: 'yoursite.net'
		}, (jwt_payload, done) => {
			process.nextTick(async () => {
				try {
					const authUser = await userService.findOneByUserName(username);
					if (authUser) {
						return done({id: 7, code: 'signup_email_exists', message: 'That email already exists'}, false, req.flash('signupMessage', error));
					} else {
						const newUser = await userService.addUser(req.body);
						return done(null, newUser);
					}
				} catch (e) {
					done(error);
				}
			});
		}));

};
