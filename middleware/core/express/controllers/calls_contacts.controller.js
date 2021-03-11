/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:29 GMT-0400 (Bolivia Time)
 * Time: 14:56:29
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:29 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:29
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const models = require('../../express');
const callContactService = require('../services/calls_contacts.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const callsContactsCtrl = {};
callsContactsCtrl.service = callContactService;


callsContactsCtrl.getAllCallsContacts = async (req, res) => {
    try {
        const { length } = req.body;
        const { start } = req.body;
        const [column, dir] = util.getOrderByColumnDirection(models.sequelize.callsContacts.rawAttributes,req.body);
        req.query.limit = length ? length : req.query.limit;
        req.query.offset = start ? start : req.query.offset;
        req.query.order = column && dir ? [[column,dir]] : req.query.order;

        const objCallsContacts = await callContactService.getAllCallsContacts(req.query);
        if (objCallsContacts && objCallsContacts.rows && objCallsContacts.count) {
            util.setSuccess(200, 'CallsContacts retrieved', objCallsContacts.rows, objCallsContacts.count, req.query.limit, req.query.offset);
        } else {
            util.setSuccess(200, 'No callContact found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsContactsCtrl.getACallContact = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objCallContact = await callContactService.getACallContact(id, req.query);
        if (!objCallContact) {
            util.setError(404, `Cannot find callContact with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found callContact', objCallContact);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsContactsCtrl.addCallContact = async (req, res) => {
    try {
        const objCallContact = await callContactService.addCallContact(req.body);
        util.setSuccess(201, 'CallContact Added!', objCallContact);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsContactsCtrl.updateCallContact = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objCallContact = await callContactService.updateCallContact(id, req.body);
        if (!objCallContact) {
            util.setError(404, `Cannot find callContact with the id: ${id}`);
        } else {
            util.setSuccess(200, 'CallContact updated', objCallContact);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

callsContactsCtrl.deleteCallContact = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please provide a String value');
            return util.send(res);
        }
        const objCallContact = await callContactService.deleteCallContact(id);
        if (objCallContact) {
            util.setSuccess(200, 'CallContact deleted', objCallContact);
        } else {
            util.setError(404, `CallContact with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



callsContactsCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objCallContact = await callContactService.findOneById(id, req.query);
        if (!objCallContact) {
            util.setError(404, `Cannot find callContact with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found callContact', objCallContact);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsContactsCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objCallContact = await callContactService.findOneByDeleted(deleted, req.query);
        if (!objCallContact) {
            util.setError(404, `Cannot find callContact with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found callContact', objCallContact);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsContactsCtrl.findOneByCallId = async (req, res) => {
    try {
        const { callId } = req.params;
        const objCallContact = await callContactService.findOneByCallId(callId, req.query);
        if (!objCallContact) {
            util.setError(404, `Cannot find callContact with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found callContact', objCallContact);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsContactsCtrl.findOneByContactId = async (req, res) => {
    try {
        const { contactId } = req.params;
        const objCallContact = await callContactService.findOneByContactId(contactId, req.query);
        if (!objCallContact) {
            util.setError(404, `Cannot find callContact with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found callContact', objCallContact);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsContactsCtrl.findOneByRequired = async (req, res) => {
    try {
        const { required } = req.params;
        const objCallContact = await callContactService.findOneByRequired(required, req.query);
        if (!objCallContact) {
            util.setError(404, `Cannot find callContact with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found callContact', objCallContact);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsContactsCtrl.findOneByAcceptStatus = async (req, res) => {
    try {
        const { acceptStatus } = req.params;
        const objCallContact = await callContactService.findOneByAcceptStatus(acceptStatus, req.query);
        if (!objCallContact) {
            util.setError(404, `Cannot find callContact with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found callContact', objCallContact);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsContactsCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objCallContact = await callContactService.findOneByDateModified(dateModified, req.query);
        if (!objCallContact) {
            util.setError(404, `Cannot find callContact with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found callContact', objCallContact);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



callsContactsCtrl.updateCallContactById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objCallContact = await callContactService.updateCallContactById(id, req.body);
            if (!objCallContact) {
                util.setError(404, `Cannot find callContact with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CallContact updated', objCallContact);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

callsContactsCtrl.updateCallContactByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objCallContact = await callContactService.updateCallContactByDeleted(deleted, req.body);
            if (!objCallContact) {
                util.setError(404, `Cannot find callContact with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CallContact updated', objCallContact);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

callsContactsCtrl.updateCallContactByCallId = async (req, res) => {
     const { callId } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objCallContact = await callContactService.updateCallContactByCallId(callId, req.body);
            if (!objCallContact) {
                util.setError(404, `Cannot find callContact with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CallContact updated', objCallContact);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

callsContactsCtrl.updateCallContactByContactId = async (req, res) => {
     const { contactId } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objCallContact = await callContactService.updateCallContactByContactId(contactId, req.body);
            if (!objCallContact) {
                util.setError(404, `Cannot find callContact with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CallContact updated', objCallContact);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

callsContactsCtrl.updateCallContactByRequired = async (req, res) => {
     const { required } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objCallContact = await callContactService.updateCallContactByRequired(required, req.body);
            if (!objCallContact) {
                util.setError(404, `Cannot find callContact with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CallContact updated', objCallContact);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

callsContactsCtrl.updateCallContactByAcceptStatus = async (req, res) => {
     const { acceptStatus } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objCallContact = await callContactService.updateCallContactByAcceptStatus(acceptStatus, req.body);
            if (!objCallContact) {
                util.setError(404, `Cannot find callContact with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CallContact updated', objCallContact);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

callsContactsCtrl.updateCallContactByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objCallContact = await callContactService.updateCallContactByDateModified(dateModified, req.body);
            if (!objCallContact) {
                util.setError(404, `Cannot find callContact with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CallContact updated', objCallContact);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = callsContactsCtrl;
//</es-section>
