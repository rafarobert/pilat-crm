/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:15 GMT-0400 (Bolivia Time)
 * Time: 14:57:15
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:15 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:15
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const models = require('../../express');
const meetingContactService = require('../services/meetings_contacts.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const meetingsContactsCtrl = {};
meetingsContactsCtrl.service = meetingContactService;


meetingsContactsCtrl.getAllMeetingsContacts = async (req, res) => {
    try {
        const { length } = req.body;
        const { start } = req.body;
        const [column, dir] = util.getOrderByColumnDirection(models.sequelize.meetingsContacts.rawAttributes,req.body);
        req.query.limit = length ? length : req.query.limit;
        req.query.offset = start ? start : req.query.offset;
        req.query.order = column && dir ? [[column,dir]] : req.query.order;

        const objMeetingsContacts = await meetingContactService.getAllMeetingsContacts(req.query);
        if (objMeetingsContacts && objMeetingsContacts.rows && objMeetingsContacts.count) {
            util.setSuccess(200, 'MeetingsContacts retrieved', objMeetingsContacts.rows, objMeetingsContacts.count, req.query.limit, req.query.offset);
        } else {
            util.setSuccess(200, 'No meetingContact found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

meetingsContactsCtrl.getAMeetingContact = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objMeetingContact = await meetingContactService.getAMeetingContact(id, req.query);
        if (!objMeetingContact) {
            util.setError(404, `Cannot find meetingContact with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found meetingContact', objMeetingContact);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

meetingsContactsCtrl.addMeetingContact = async (req, res) => {
    try {
        const objMeetingContact = await meetingContactService.addMeetingContact(req.body);
        util.setSuccess(201, 'MeetingContact Added!', objMeetingContact);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

meetingsContactsCtrl.updateMeetingContact = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objMeetingContact = await meetingContactService.updateMeetingContact(id, req.body);
        if (!objMeetingContact) {
            util.setError(404, `Cannot find meetingContact with the id: ${id}`);
        } else {
            util.setSuccess(200, 'MeetingContact updated', objMeetingContact);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

meetingsContactsCtrl.deleteMeetingContact = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please provide a String value');
            return util.send(res);
        }
        const objMeetingContact = await meetingContactService.deleteMeetingContact(id);
        if (objMeetingContact) {
            util.setSuccess(200, 'MeetingContact deleted', objMeetingContact);
        } else {
            util.setError(404, `MeetingContact with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



meetingsContactsCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objMeetingContact = await meetingContactService.findOneById(id, req.query);
        if (!objMeetingContact) {
            util.setError(404, `Cannot find meetingContact with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found meetingContact', objMeetingContact);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

meetingsContactsCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objMeetingContact = await meetingContactService.findOneByDeleted(deleted, req.query);
        if (!objMeetingContact) {
            util.setError(404, `Cannot find meetingContact with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found meetingContact', objMeetingContact);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

meetingsContactsCtrl.findOneByMeetingId = async (req, res) => {
    try {
        const { meetingId } = req.params;
        const objMeetingContact = await meetingContactService.findOneByMeetingId(meetingId, req.query);
        if (!objMeetingContact) {
            util.setError(404, `Cannot find meetingContact with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found meetingContact', objMeetingContact);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

meetingsContactsCtrl.findOneByContactId = async (req, res) => {
    try {
        const { contactId } = req.params;
        const objMeetingContact = await meetingContactService.findOneByContactId(contactId, req.query);
        if (!objMeetingContact) {
            util.setError(404, `Cannot find meetingContact with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found meetingContact', objMeetingContact);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

meetingsContactsCtrl.findOneByRequired = async (req, res) => {
    try {
        const { required } = req.params;
        const objMeetingContact = await meetingContactService.findOneByRequired(required, req.query);
        if (!objMeetingContact) {
            util.setError(404, `Cannot find meetingContact with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found meetingContact', objMeetingContact);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

meetingsContactsCtrl.findOneByAcceptStatus = async (req, res) => {
    try {
        const { acceptStatus } = req.params;
        const objMeetingContact = await meetingContactService.findOneByAcceptStatus(acceptStatus, req.query);
        if (!objMeetingContact) {
            util.setError(404, `Cannot find meetingContact with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found meetingContact', objMeetingContact);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

meetingsContactsCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objMeetingContact = await meetingContactService.findOneByDateModified(dateModified, req.query);
        if (!objMeetingContact) {
            util.setError(404, `Cannot find meetingContact with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found meetingContact', objMeetingContact);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



meetingsContactsCtrl.updateMeetingContactById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objMeetingContact = await meetingContactService.updateMeetingContactById(id, req.body);
            if (!objMeetingContact) {
                util.setError(404, `Cannot find meetingContact with the id: ${id}`);
            } else {
                util.setSuccess(200, 'MeetingContact updated', objMeetingContact);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

meetingsContactsCtrl.updateMeetingContactByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objMeetingContact = await meetingContactService.updateMeetingContactByDeleted(deleted, req.body);
            if (!objMeetingContact) {
                util.setError(404, `Cannot find meetingContact with the id: ${id}`);
            } else {
                util.setSuccess(200, 'MeetingContact updated', objMeetingContact);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

meetingsContactsCtrl.updateMeetingContactByMeetingId = async (req, res) => {
     const { meetingId } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objMeetingContact = await meetingContactService.updateMeetingContactByMeetingId(meetingId, req.body);
            if (!objMeetingContact) {
                util.setError(404, `Cannot find meetingContact with the id: ${id}`);
            } else {
                util.setSuccess(200, 'MeetingContact updated', objMeetingContact);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

meetingsContactsCtrl.updateMeetingContactByContactId = async (req, res) => {
     const { contactId } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objMeetingContact = await meetingContactService.updateMeetingContactByContactId(contactId, req.body);
            if (!objMeetingContact) {
                util.setError(404, `Cannot find meetingContact with the id: ${id}`);
            } else {
                util.setSuccess(200, 'MeetingContact updated', objMeetingContact);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

meetingsContactsCtrl.updateMeetingContactByRequired = async (req, res) => {
     const { required } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objMeetingContact = await meetingContactService.updateMeetingContactByRequired(required, req.body);
            if (!objMeetingContact) {
                util.setError(404, `Cannot find meetingContact with the id: ${id}`);
            } else {
                util.setSuccess(200, 'MeetingContact updated', objMeetingContact);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

meetingsContactsCtrl.updateMeetingContactByAcceptStatus = async (req, res) => {
     const { acceptStatus } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objMeetingContact = await meetingContactService.updateMeetingContactByAcceptStatus(acceptStatus, req.body);
            if (!objMeetingContact) {
                util.setError(404, `Cannot find meetingContact with the id: ${id}`);
            } else {
                util.setSuccess(200, 'MeetingContact updated', objMeetingContact);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

meetingsContactsCtrl.updateMeetingContactByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objMeetingContact = await meetingContactService.updateMeetingContactByDateModified(dateModified, req.body);
            if (!objMeetingContact) {
                util.setError(404, `Cannot find meetingContact with the id: ${id}`);
            } else {
                util.setSuccess(200, 'MeetingContact updated', objMeetingContact);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = meetingsContactsCtrl;
//</es-section>
