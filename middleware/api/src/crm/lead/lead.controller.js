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
const leadService = require('./lead.service');
//</es-section>
const Util = require('../../../../utils/Utils');
const util = new Util();
const passport = require('passport');

// Controller for DB Mongoose

const leadsCtrl = {};
leadsCtrl.service = leadService;

leadsCtrl.getAllLeads = async (req, res) => {
	try {
		const objLeads = await leadService.getAllLeads(req.query);
		if (objLeads.length > 0) {
			util.setSuccess(200, 'Leads retrieved', objLeads);
		} else {
			util.setSuccess(200, 'No leads found');
		}
		return util.send(res);
	} catch(e) {
		util.setError(400, e);
		return util.send(res);
	}
}

leadsCtrl.getALead = async (req, res) => {
	try {
		const { id } = req.params;
		if (!util.isChar(id)) {
			util.setError(400, 'Please input a valid Char value');
			return util.send(res);
		}
		const objAccount = await leadService.getALead(id, req.query);
		if (!objAccount) {
			util.setError(404, `Cannot find lead with the id ${id}`);
		} else {
			util.setSuccess(200, 'Found lead', objAccount);
		}
		return util.send(res);
	} catch (e) {
		util.setError(400, e);
		return util.send(res);
	}
}

leadsCtrl.updateLead = async (req, res) => {
	try {
		const { id } = req.params;
		if (!util.isChar(id)) {
			util.setError(400, 'Please input a valid Char value');
			return util.send(res);
		}
		const objLead = await leadService.updateLead(id, req.body);
		if (!objLead) {
			util.setError(404, `Cannot find lead with the id: ${id}`);
		} else {
			util.setSuccess(200, 'Lead updated', objLead);
		}
		return util.send(res);
	} catch (e) {
		util.setError(400, e);
		return util.send(res);
	}
};

leadsCtrl.addLead = async (req, res) => {
	try {
		const { userLoggedId } = req.query;
		const objLead = await leadService.addLead(req.body, userLoggedId);
		util.setSuccess(201, 'Lead Added!', objLead);
		return util.send(res);
	} catch (e) {
		util.setError(400, e);
		return util.send(res);
	}
}

leadsCtrl.deleteLead = async (req, res) => {
	try {
		const { id } = req.params;
		if (!util.isChar(id)) {
			util.setError(400, 'Please provide a Char value');
			return util.send(res);
		}
		const objLead = await leadService.deleteLead(id);
		if (objLead) {
			util.setSuccess(200, 'Lead deleted', objLead);
		} else {
			util.setError(404, `Lead with the id ${id} cannot be found`);
		}
		return util.send(res);
	} catch (e) {
		util.setError(400, e);
		return util.send(res);
	}
};

//<es-section>
module.exports = leadsCtrl;
//</es-section>
