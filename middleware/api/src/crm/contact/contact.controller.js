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
const contactService = require('./contact.service');
//</es-section>
const Util = require('../../../../utils/Utils');
const util = new Util();
const passport = require('passport');

// Controller for DB Mongoose

const contactCtrl = {};
contactCtrl.service = contactService;

contactCtrl.getAllContacts = async (req, res) => {
	try {
		const { length } = req.body;
		const { start } = req.body;
		const [column, dir] = util.getOrderByColumnDirection(models.sequelize.pilatLogs.rawAttributes,req.body);
		req.query.limit = length ? length : req.query.limit;
		req.query.offset = start ? start : req.query.offset;
		req.query.order = column && dir ? [[column,dir]] : req.query.order;

		const objContacts = await contactService.getAllContacts(req.query);
		if (objContacts && objContacts.rows && objContacts.count) {
			util.setSuccess(200, 'Contacts retrieved', objContacts.rows, objContacts.count, req.query.limit, req.query.offset);
		} else {
			util.setSuccess(200, 'No contacts found');
		}
		return util.send(res);
	} catch(e) {
		util.setError(400, e);
		return util.send(res);
	}
}

contactCtrl.getAContact = async (req, res) => {
	try {
		const { id } = req.params;
		if (!util.isChar(id)) {
			util.setError(400, 'Please input a valid Char value');
			return util.send(res);
		}
		const objAccount = await contactService.getAContact(id, req.query);
		if (!objAccount) {
			util.setError(404, `Cannot find contact with the id ${id}`);
		} else {
			util.setSuccess(200, 'Found contact', objAccount);
		}
		return util.send(res);
	} catch (e) {
		util.setError(400, e);
		return util.send(res);
	}
}

contactCtrl.updateContact = async (req, res) => {
	try {
		const { id } = req.params;
		if (!util.isChar(id)) {
			util.setError(400, 'Please input a valid Char value');
			return util.send(res);
		}
		const objContact = await contactService.updateContact(id, req.body);
		if (!objContact) {
			util.setError(404, `Cannot find contact with the id: ${id}`);
		} else {
			util.setSuccess(200, 'Contact updated', objContact);
		}
		return util.send(res);
	} catch (e) {
		util.setError(400, e);
		return util.send(res);
	}
};

contactCtrl.addContact = async (req, res) => {
	try {
		const objContact = await contactService.addContact(req.body);
		util.setSuccess(201, 'Contact Added!', objContact);
		return util.send(res);
	} catch (e) {
		util.setError(400, e);
		return util.send(res);
	}
}

contactCtrl.deleteContact = async (req, res) => {
	try {
		const { id } = req.params;
		if (!util.isChar(id)) {
			util.setError(400, 'Please provide a Char value');
			return util.send(res);
		}
		const objContact = await contactService.deleteContact(id);
		if (objContact) {
			util.setSuccess(200, 'Contact deleted', objContact);
		} else {
			util.setError(404, `Contact with the id ${id} cannot be found`);
		}
		return util.send(res);
	} catch (e) {
		util.setError(400, e);
		return util.send(res);
	}
};

module.exports = contactCtrl;
