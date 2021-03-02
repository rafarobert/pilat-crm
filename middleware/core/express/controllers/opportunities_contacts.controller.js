/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:01:13 GMT-0400 (Bolivia Time)
 * Time: 14:1:13
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:01:13 GMT-0400 (Bolivia Time)
 * Last time updated: 14:1:13
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const opportunityContactService = require('../services/opportunities_contacts.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const opportunitiesContactsCtrl = {};
opportunitiesContactsCtrl.service = opportunityContactService;


opportunitiesContactsCtrl.getAllOpportunitiesContacts = async (req, res) => {
    try {
        const objOpportunitiesContacts = await opportunityContactService.getAllOpportunitiesContacts(req.query);
        if (objOpportunitiesContacts.length > 0) {
            util.setSuccess(200, 'OpportunitiesContacts retrieved', objOpportunitiesContacts);
        } else {
            util.setSuccess(200, 'No opportunityContact found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

opportunitiesContactsCtrl.getAOpportunityContact = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objOpportunityContact = await opportunityContactService.getAOpportunityContact(id, req.query);
        if (!objOpportunityContact) {
            util.setError(404, `Cannot find opportunityContact with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found opportunityContact', objOpportunityContact);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

opportunitiesContactsCtrl.addOpportunityContact = async (req, res) => {
    try {
        const objOpportunityContact = await opportunityContactService.addOpportunityContact(req.body);
        util.setSuccess(201, 'OpportunityContact Added!', objOpportunityContact);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

opportunitiesContactsCtrl.updateOpportunityContact = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objOpportunityContact = await opportunityContactService.updateOpportunityContact(id, req.body);
        if (!objOpportunityContact) {
            util.setError(404, `Cannot find opportunityContact with the id: ${id}`);
        } else {
            util.setSuccess(200, 'OpportunityContact updated', objOpportunityContact);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

opportunitiesContactsCtrl.deleteOpportunityContact = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please provide a String value');
            return util.send(res);
        }
        const objOpportunityContact = await opportunityContactService.deleteOpportunityContact(id);
        if (objOpportunityContact) {
            util.setSuccess(200, 'OpportunityContact deleted', objOpportunityContact);
        } else {
            util.setError(404, `OpportunityContact with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



opportunitiesContactsCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objOpportunityContact = await opportunityContactService.findOneById(id, req.query);
        if (!objOpportunityContact) {
            util.setError(404, `Cannot find opportunityContact with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found opportunityContact', objOpportunityContact);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

opportunitiesContactsCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objOpportunityContact = await opportunityContactService.findOneByDeleted(deleted, req.query);
        if (!objOpportunityContact) {
            util.setError(404, `Cannot find opportunityContact with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found opportunityContact', objOpportunityContact);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

opportunitiesContactsCtrl.findOneByContactId = async (req, res) => {
    try {
        const { contactId } = req.params;
        const objOpportunityContact = await opportunityContactService.findOneByContactId(contactId, req.query);
        if (!objOpportunityContact) {
            util.setError(404, `Cannot find opportunityContact with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found opportunityContact', objOpportunityContact);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

opportunitiesContactsCtrl.findOneByOpportunityId = async (req, res) => {
    try {
        const { opportunityId } = req.params;
        const objOpportunityContact = await opportunityContactService.findOneByOpportunityId(opportunityId, req.query);
        if (!objOpportunityContact) {
            util.setError(404, `Cannot find opportunityContact with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found opportunityContact', objOpportunityContact);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

opportunitiesContactsCtrl.findOneByContactRole = async (req, res) => {
    try {
        const { contactRole } = req.params;
        const objOpportunityContact = await opportunityContactService.findOneByContactRole(contactRole, req.query);
        if (!objOpportunityContact) {
            util.setError(404, `Cannot find opportunityContact with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found opportunityContact', objOpportunityContact);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

opportunitiesContactsCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objOpportunityContact = await opportunityContactService.findOneByDateModified(dateModified, req.query);
        if (!objOpportunityContact) {
            util.setError(404, `Cannot find opportunityContact with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found opportunityContact', objOpportunityContact);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



opportunitiesContactsCtrl.updateOpportunityContactById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objOpportunityContact = await opportunityContactService.updateOpportunityContactById(id, req.body);
            if (!objOpportunityContact) {
                util.setError(404, `Cannot find opportunityContact with the id: ${id}`);
            } else {
                util.setSuccess(200, 'OpportunityContact updated', objOpportunityContact);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

opportunitiesContactsCtrl.updateOpportunityContactByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objOpportunityContact = await opportunityContactService.updateOpportunityContactByDeleted(deleted, req.body);
            if (!objOpportunityContact) {
                util.setError(404, `Cannot find opportunityContact with the id: ${id}`);
            } else {
                util.setSuccess(200, 'OpportunityContact updated', objOpportunityContact);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

opportunitiesContactsCtrl.updateOpportunityContactByContactId = async (req, res) => {
     const { contactId } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objOpportunityContact = await opportunityContactService.updateOpportunityContactByContactId(contactId, req.body);
            if (!objOpportunityContact) {
                util.setError(404, `Cannot find opportunityContact with the id: ${id}`);
            } else {
                util.setSuccess(200, 'OpportunityContact updated', objOpportunityContact);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

opportunitiesContactsCtrl.updateOpportunityContactByOpportunityId = async (req, res) => {
     const { opportunityId } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objOpportunityContact = await opportunityContactService.updateOpportunityContactByOpportunityId(opportunityId, req.body);
            if (!objOpportunityContact) {
                util.setError(404, `Cannot find opportunityContact with the id: ${id}`);
            } else {
                util.setSuccess(200, 'OpportunityContact updated', objOpportunityContact);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

opportunitiesContactsCtrl.updateOpportunityContactByContactRole = async (req, res) => {
     const { contactRole } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objOpportunityContact = await opportunityContactService.updateOpportunityContactByContactRole(contactRole, req.body);
            if (!objOpportunityContact) {
                util.setError(404, `Cannot find opportunityContact with the id: ${id}`);
            } else {
                util.setSuccess(200, 'OpportunityContact updated', objOpportunityContact);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

opportunitiesContactsCtrl.updateOpportunityContactByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objOpportunityContact = await opportunityContactService.updateOpportunityContactByDateModified(dateModified, req.body);
            if (!objOpportunityContact) {
                util.setError(404, `Cannot find opportunityContact with the id: ${id}`);
            } else {
                util.setSuccess(200, 'OpportunityContact updated', objOpportunityContact);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = opportunitiesContactsCtrl;
//</es-section>
