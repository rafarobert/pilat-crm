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
const accountService = require('./account.service');
//</es-section>
const Util = require('../../../../utils/Utils');
const util = new Util();
const passport = require('passport');

// Controller for DB Mongoose

const accountCtrl = {};
accountCtrl.service = accountService;

accountCtrl.getAllAccounts = async (req, res) => {
	try {
		const objAccounts = await accountService.getAllAccounts(req.query);
		if (objAccounts.length > 0) {
			util.setSuccess(200, 'Accounts retrieved', objAccounts);
		} else {
			util.setSuccess(200, 'No accounts found');
		}
		return util.send(res);
	} catch(e) {
		util.setError(400, e);
		return util.send(res);
	}
}

accountCtrl.getAAccount = async (req, res) => {
	try {
		const { id } = req.params;
		if (!util.isChar(id)) {
			util.setError(400, 'Please input a valid Char value');
			return util.send(res);
		}
		const objAccount = await accountService.getAAccount(id, req.query);
		if (!objAccount) {
			util.setError(404, `Cannot find account with the id ${id}`);
		} else {
			util.setSuccess(200, 'Found account', objAccount);
		}
		return util.send(res);
	} catch (e) {
		util.setError(400, e);
		return util.send(res);
	}
}

accountCtrl.updateAccount = async (req, res) => {
	try {
		const { id } = req.params;
		if (!util.isChar(id)) {
			util.setError(400, 'Please input a valid Char value');
			return util.send(res);
		}
		const objAccount = await accountService.updateAccount(id, req.body);
		if (!objAccount) {
			util.setError(404, `Cannot find account with the id: ${id}`);
		} else {
			util.setSuccess(200, 'Account updated', objAccount);
		}
		return util.send(res);
	} catch (e) {
		util.setError(400, e);
		return util.send(res);
	}
};

accountCtrl.addAccount = async (req, res) => {
	try {
		const objAccount = await accountService.addAccount(req.body);
		util.setSuccess(201, 'Account Added!', objAccount);
		return util.send(res);
	} catch (e) {
		util.setError(400, e);
		return util.send(res);
	}
}

accountCtrl.deleteAccount = async (req, res) => {
	try {
		const { id } = req.params;
		if (!util.isChar(id)) {
			util.setError(400, 'Please provide a Char value');
			return util.send(res);
		}
		const objAccount = await accountService.deleteAccount(id);
		if (objAccount) {
			util.setSuccess(200, 'Account deleted', objAccount);
		} else {
			util.setError(404, `Account with the id ${id} cannot be found`);
		}
		return util.send(res);
	} catch (e) {
		util.setError(400, e);
		return util.send(res);
	}
};

module.exports = accountCtrl;
