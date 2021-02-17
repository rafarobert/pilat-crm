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
const aosQuoteService = require('./aos-quote.service');
//</es-section>
const Util = require('../../../../utils/Utils');
const util = new Util();
const passport = require('passport');

// Controller for DB Mongoose

const aosQuoteCtrl = {};
aosQuoteCtrl.service = aosQuoteService;

aosQuoteCtrl.getAllAosQuotes = async (req, res) => {
	try {
		const objAosQuotes = await aosQuoteService.getAllAosQuotes(req.query);
		if (objAosQuotes.length > 0) {
			util.setSuccess(200, 'AosQuotes retrieved', objAosQuotes);
		} else {
			util.setSuccess(200, 'No aosQuotes found');
		}
		return util.send(res);
	} catch(e) {
		util.setError(400, e);
		return util.send(res);
	}
}

aosQuoteCtrl.getAAosQuote = async (req, res) => {
	try {
		const { id } = req.params;
		if (!util.isChar(id)) {
			util.setError(400, 'Please input a valid Char value');
			return util.send(res);
		}
		const objAccount = await aosQuoteService.getAAosQuote(id, req.query);
		if (!objAccount) {
			util.setError(404, `Cannot find aosQuote with the id ${id}`);
		} else {
			util.setSuccess(200, 'Found aosQuote', objAccount);
		}
		return util.send(res);
	} catch (e) {
		util.setError(400, e);
		return util.send(res);
	}
}

aosQuoteCtrl.updateAosQuote = async (req, res) => {
	try {
		const { id } = req.params;
		if (!util.isChar(id)) {
			util.setError(400, 'Please input a valid Char value');
			return util.send(res);
		}
		const objAosQuote = await aosQuoteService.updateAosQuote(id, req.body);
		if (!objAosQuote) {
			util.setError(404, `Cannot find aosQuote with the id: ${id}`);
		} else {
			util.setSuccess(200, 'AosQuote updated', objAosQuote);
		}
		return util.send(res);
	} catch (e) {
		util.setError(400, e);
		return util.send(res);
	}
};

aosQuoteCtrl.addAosQuote = async (req, res) => {
	try {
		const objAosQuote = await aosQuoteService.addAosQuote(req.body);
		util.setSuccess(201, 'AosQuote Added!', objAosQuote);
		return util.send(res);
	} catch (e) {
		util.setError(400, e);
		return util.send(res);
	}
}

aosQuoteCtrl.deleteAosQuote = async (req, res) => {
	try {
		const { id } = req.params;
		if (!util.isChar(id)) {
			util.setError(400, 'Please provide a Char value');
			return util.send(res);
		}
		const objAosQuote = await aosQuoteService.deleteAosQuote(id);
		if (objAosQuote) {
			util.setSuccess(200, 'AosQuote deleted', objAosQuote);
		} else {
			util.setError(404, `AosQuote with the id ${id} cannot be found`);
		}
		return util.send(res);
	} catch (e) {
		util.setError(400, e);
		return util.send(res);
	}
};

module.exports = aosQuoteCtrl;
