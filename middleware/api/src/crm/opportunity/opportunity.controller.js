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
const opportunityService = require('./opportunity.service');
//</es-section>
const Util = require('../../../../utils/Utils');
const util = new Util();
const passport = require('passport');

// Controller for DB Mongoose

const opportunitiesCtrl = {};
opportunitiesCtrl.service = opportunityService;

opportunitiesCtrl.getAllOpportunities = async (req, res) => {
	try {
		const objOpportunities = await opportunityService.getAllOpportunities(req.query);
		if (objOpportunities.length > 0) {
			util.setSuccess(200, 'Opportunities retrieved', objOpportunities);
		} else {
			util.setSuccess(200, 'No opportunities found');
		}
		return util.send(res);
	} catch(e) {
		util.setError(400, e);
		return util.send(res);
	}
}

opportunitiesCtrl.getAOpportunity = async (req, res) => {
	try {
		const { id } = req.params;
		if (!util.isChar(id)) {
			util.setError(400, 'Please input a valid Char value');
			return util.send(res);
		}
		const objAccount = await opportunityService.getAOpportunity(id, req.query);
		if (!objAccount) {
			util.setError(404, `Cannot find opportunity with the id ${id}`);
		} else {
			util.setSuccess(200, 'Found opportunity', objAccount);
		}
		return util.send(res);
	} catch (e) {
		util.setError(400, e);
		return util.send(res);
	}
}

opportunitiesCtrl.updateOpportunity = async (req, res) => {
	try {
		const { id } = req.params;
		const { userLoggedIn } = req.query;
		if (!util.isChar(id)) {
			util.setError(400, 'Please input a valid Char value');
			return util.send(res);
		}
		const objOpportunity = await opportunityService.updateOpportunity(id, req.body, userLoggedIn);
		if (!objOpportunity) {
			util.setError(404, `Cannot find opportunity with the id: ${id}`);
		} else {
			util.setSuccess(200, 'Opportunity updated', objOpportunity);
		}
		return util.send(res);
	} catch (e) {
		util.setError(400, e);
		return util.send(res);
	}
};

opportunitiesCtrl.addOpportunity = async (req, res) => {
	try {
		const { userLoggedId } = req.query;
		const objOpportunity = await opportunityService.addOpportunity(req.body, userLoggedId);
		util.setSuccess(201, 'Opportunity Added!', objOpportunity);
		return util.send(res);
	} catch (e) {
		util.setError(400, e);
		return util.send(res);
	}
}

opportunitiesCtrl.deleteOpportunity = async (req, res) => {
	try {
		const { id } = req.params;
		if (!util.isChar(id)) {
			util.setError(400, 'Please provide a Char value');
			return util.send(res);
		}
		const objOpportunity = await opportunityService.deleteOpportunity(id);
		if (objOpportunity) {
			util.setSuccess(200, 'Opportunity deleted', objOpportunity);
		} else {
			util.setError(404, `Opportunity with the id ${id} cannot be found`);
		}
		return util.send(res);
	} catch (e) {
		util.setError(400, e);
		return util.send(res);
	}
};

//<es-section>
module.exports = opportunitiesCtrl;
//</es-section>
