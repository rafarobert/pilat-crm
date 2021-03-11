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
const callService = require('./call.service');
//</es-section>
const Util = require('../../../../utils/Utils');
const util = new Util();
const passport = require('passport');

// Controller for DB Mongoose

const callCtrl = {};
callCtrl.service = callService;

callCtrl.getAllCalls = async (req, res) => {
	try {
		const { length } = req.body;
		const { start } = req.body;
		const [column, dir] = util.getOrderByColumnDirection(models.sequelize.pilatLogs.rawAttributes,req.body);
		req.query.limit = length ? length : req.query.limit;
		req.query.offset = start ? start : req.query.offset;
		req.query.order = column && dir ? [[column,dir]] : req.query.order;

		const objCalls = await callService.getAllCalls(req.query);
		if (objCalls && objCalls.rows && objCalls.count) {
			util.setSuccess(200, 'Calls retrieved', objCalls.rows, objCalls.count, req.query.limit, req.query.offset);
		} else {
			util.setSuccess(200, 'No calls found');
		}
		return util.send(res);
	} catch(e) {
		util.setError(400, e);
		return util.send(res);
	}
}

callCtrl.getACall = async (req, res) => {
	try {
		const { id } = req.params;
		if (!util.isChar(id)) {
			util.setError(400, 'Please input a valid Char value');
			return util.send(res);
		}
		const objAccount = await callService.getACall(id, req.query);
		if (!objAccount) {
			util.setError(404, `Cannot find call with the id ${id}`);
		} else {
			util.setSuccess(200, 'Found call', objAccount);
		}
		return util.send(res);
	} catch (e) {
		util.setError(400, e);
		return util.send(res);
	}
}

callCtrl.updateCall = async (req, res) => {
	try {
		const { id } = req.params;
		if (!util.isChar(id)) {
			util.setError(400, 'Please input a valid Char value');
			return util.send(res);
		}
		const objCall = await callService.updateCall(id, req.body);
		if (!objCall) {
			util.setError(404, `Cannot find call with the id: ${id}`);
		} else {
			util.setSuccess(200, 'Call updated', objCall);
		}
		return util.send(res);
	} catch (e) {
		util.setError(400, e);
		return util.send(res);
	}
};

callCtrl.addCall = async (req, res) => {
	try {
		const objCall = await callService.addCall(req.body);
		util.setSuccess(201, 'Call Added!', objCall);
		return util.send(res);
	} catch (e) {
		util.setError(400, e);
		return util.send(res);
	}
}

callCtrl.deleteCall = async (req, res) => {
	try {
		const { id } = req.params;
		if (!util.isChar(id)) {
			util.setError(400, 'Please provide a Char value');
			return util.send(res);
		}
		const objCall = await callService.deleteCall(id);
		if (objCall) {
			util.setSuccess(200, 'Call deleted', objCall);
		} else {
			util.setError(404, `Call with the id ${id} cannot be found`);
		}
		return util.send(res);
	} catch (e) {
		util.setError(400, e);
		return util.send(res);
	}
};

module.exports = callCtrl;
