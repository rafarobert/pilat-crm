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
const userService = require('./user.service');
//</es-section>
const Util = require('../../../../utils/Utils');
const util = new Util();
const passport = require('passport');

// Controller for DB Mongoose

const userCtrl = {};
userCtrl.service = userService;

userCtrl.getAllUsers = async (req, res) => {
	try {
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

module.exports = userCtrl;
