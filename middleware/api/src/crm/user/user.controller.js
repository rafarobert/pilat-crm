/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Sep 21 2020 22:55:51 GMT-0400 (Bolivia Time)
 * Time: 22:55:51
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Sep 21 2020 22:55:51 GMT-0400 (Bolivia Time)
 * Last time updated: 22:55:51
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const models = require('../../../../core/express');
const userService = require('./user.service');
//</es-section>
const Util = require('../../../../utils/Utils');
const util = new Util();
const passport = require('passport');
//</es-section>

// Controller for DB Mongoose

const userCtrl = {};
userCtrl.service = userService;

userCtrl.getAllUsers = async (req, res) => {
	try {
		const { length } = req.body;
		const { start } = req.body;
		const [column, dir] = util.getOrderByColumnDirection(models.sequelize.pilatLogs.rawAttributes,req.body);
		req.query.limit = length ? length : req.query.limit;
		req.query.offset = start ? start : req.query.offset;
		req.query.order = column && dir ? [[column,dir]] : req.query.order;

		const objUsers = await userService.getAllUsers(req.query);
		if (objUsers.length > 0) {
			util.setSuccess(200, 'Users retrieved', objUsers);
		} else {
			util.setSuccess(200, 'No users found');
		}
		return util.send(res);
	} catch(e) {
		util.setError(400, e);
		return util.send(res);
	}
}

userCtrl.getAUser = async (req, res) => {
	try {
		const { id } = req.params;
		if (!util.isChar(id)) {
			util.setError(400, 'Please input a valid Char value');
			return util.send(res);
		}
		const objAccount = await userService.getAUser(id, req.query);
		if (!objAccount) {
			util.setError(404, `Cannot find user with the id ${id}`);
		} else {
			util.setSuccess(200, 'Found user', objAccount);
		}
		return util.send(res);
	} catch (e) {
		util.setError(400, e);
		return util.send(res);
	}
}

userCtrl.updateUser = async (req, res) => {
	try {
		const { id } = req.params;
		if (!util.isChar(id)) {
			util.setError(400, 'Please input a valid Char value');
			return util.send(res);
		}
		const objUser = await userService.updateUser(id, req.body);
		if (!objUser) {
			util.setError(404, `Cannot find user with the id: ${id}`);
		} else {
			util.setSuccess(200, 'User updated', objUser);
		}
		return util.send(res);
	} catch (e) {
		util.setError(400, e);
		return util.send(res);
	}
};

userCtrl.addUser = async (req, res) => {
	try {
		const objUser = await userService.addUser(req.body);
		util.setSuccess(201, 'User Added!', objUser);
		return util.send(res);
	} catch (e) {
		util.setError(400, e);
		return util.send(res);
	}
}

userCtrl.deleteUser = async (req, res) => {
	try {
		const { id } = req.params;
		if (!util.isChar(id)) {
			util.setError(400, 'Please provide a Char value');
			return util.send(res);
		}
		const objUser = await userService.deleteUser(id);
		if (objUser) {
			util.setSuccess(200, 'User deleted', objUser);
		} else {
			util.setError(404, `User with the id ${id} cannot be found`);
		}
		return util.send(res);
	} catch (e) {
		util.setError(400, e);
		return util.send(res);
	}
};



// ---



userCtrl.restOnLogin = async (req, res) => {
	if (!req.user) {
		util.setError(404, `Sorry, something went wrong`);
	} else {
		util.setSuccess(200, 'Hello, nice to see you again', req.user);
	}
	return util.send(res);
}

userCtrl.restOnSignup = async (req, res) => {
	if (!req.user) {
		util.setError(404, `Sorry, something went wrong`);
	} else {
		util.setSuccess(200, 'Hello, thanks for signing up', req.user);
	}
	return util.send(res);
}

userCtrl.restLocalLogin = () => {
	return (req, res, next) => {
		passport.authenticate('local-login', (error, user, info) => {
			if(error) {
				if (user) {
					if(info) {
						util.data = error;
						util.setError(200, info);
						return util.send(res);
					}
					util.data = error;
					util.setError(200, error.message);
					return util.send(res);
				}
				util.data = error;
				util.setError(200, error.message);
				return util.send(res);
			}
			req.login(user, (error) => {
				if (error) return next(error);
				next();
			});
		})(req, res, next);
	}
}

userCtrl.restLogout = async (req, res) => {
	req.logOut();
	util.setSuccess(200, 'Bye, have a nice day', req.user);
	return util.send(res);
}

userCtrl.restLocalSignup = () => {
	return (req, res, next) => {
		passport.authenticate('local-signup', (error, user, info) => {
			if(error) {
				if(!user) {
					res.status(400).json({"statusCode" : 200 ,"message" : info});
				}
				res.status(400).json({"statusCode" : 200 ,"message" : error});
			}
			req.login(user, (error) => {
				if (error) return next(error);
				next();
			});
		})(req, res, next);
	}
}

userCtrl.restFacebookLogin = async (req, res) => {
	passport.authenticate('facebook', {scope: ['email', 'user_age_range', 'user_gender']})
}

userCtrl.restFacebookLoginCallback = async (req, res) => {
	passport.authenticate('facebook', {
		successRedirect: '/es-auths/profile',
		failureRedirect: '/es-auths/'
	})
}

userCtrl.isLoggedIn = (req, res, next) => {
	if(req.isAuthenticated()){
		return next()
	}
	res.status(400);
	util.setError(400, `Sorry, you're not authenticated`);
	return util.send(res);
}

module.exports = userCtrl;
