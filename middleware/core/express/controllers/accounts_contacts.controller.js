/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:21:50 GMT-0400 (Bolivia Time)
 * Time: 0:21:50
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:21:50 GMT-0400 (Bolivia Time)
 * Last time updated: 0:21:50
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const accountContactService = require('../services/accounts_contacts.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const accountsContactsCtrl = {};
accountsContactsCtrl.service = accountContactService;


accountsContactsCtrl.getAllAccountsContacts = async (req, res) => {
    try {
        const objAccountsContacts = await accountContactService.getAllAccountsContacts(req.query);
        if (objAccountsContacts.length > 0) {
            util.setSuccess(200, 'AccountsContacts retrieved', objAccountsContacts);
        } else {
            util.setSuccess(200, 'No accountContact found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

accountsContactsCtrl.getAAccountContact = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objAccountContact = await accountContactService.getAAccountContact(id, req.query);
        if (!objAccountContact) {
            util.setError(404, `Cannot find accountContact with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found accountContact', objAccountContact);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

accountsContactsCtrl.addAccountContact = async (req, res) => {
    try {
        const objAccountContact = await accountContactService.addAccountContact(req.body);
        util.setSuccess(201, 'AccountContact Added!', objAccountContact);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

accountsContactsCtrl.updateAccountContact = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objAccountContact = await accountContactService.updateAccountContact(id, req.body);
        if (!objAccountContact) {
            util.setError(404, `Cannot find accountContact with the id: ${id}`);
        } else {
            util.setSuccess(200, 'AccountContact updated', objAccountContact);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

accountsContactsCtrl.deleteAccountContact = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please provide a String value');
            return util.send(res);
        }
        const objAccountContact = await accountContactService.deleteAccountContact(id);
        if (objAccountContact) {
            util.setSuccess(200, 'AccountContact deleted', objAccountContact);
        } else {
            util.setError(404, `AccountContact with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



accountsContactsCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objAccountContact = await accountContactService.findOneById(id, req.query);
        if (!objAccountContact) {
            util.setError(404, `Cannot find accountContact with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found accountContact', objAccountContact);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

accountsContactsCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objAccountContact = await accountContactService.findOneByDeleted(deleted, req.query);
        if (!objAccountContact) {
            util.setError(404, `Cannot find accountContact with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found accountContact', objAccountContact);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

accountsContactsCtrl.findOneByContactId = async (req, res) => {
    try {
        const { contactId } = req.params;
        const objAccountContact = await accountContactService.findOneByContactId(contactId, req.query);
        if (!objAccountContact) {
            util.setError(404, `Cannot find accountContact with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found accountContact', objAccountContact);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

accountsContactsCtrl.findOneByAccountId = async (req, res) => {
    try {
        const { accountId } = req.params;
        const objAccountContact = await accountContactService.findOneByAccountId(accountId, req.query);
        if (!objAccountContact) {
            util.setError(404, `Cannot find accountContact with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found accountContact', objAccountContact);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

accountsContactsCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objAccountContact = await accountContactService.findOneByDateModified(dateModified, req.query);
        if (!objAccountContact) {
            util.setError(404, `Cannot find accountContact with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found accountContact', objAccountContact);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



accountsContactsCtrl.updateAccountContactById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objAccountContact = await accountContactService.updateAccountContactById(id, req.body);
            if (!objAccountContact) {
                util.setError(404, `Cannot find accountContact with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AccountContact updated', objAccountContact);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

accountsContactsCtrl.updateAccountContactByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objAccountContact = await accountContactService.updateAccountContactByDeleted(deleted, req.body);
            if (!objAccountContact) {
                util.setError(404, `Cannot find accountContact with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AccountContact updated', objAccountContact);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

accountsContactsCtrl.updateAccountContactByContactId = async (req, res) => {
     const { contactId } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objAccountContact = await accountContactService.updateAccountContactByContactId(contactId, req.body);
            if (!objAccountContact) {
                util.setError(404, `Cannot find accountContact with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AccountContact updated', objAccountContact);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

accountsContactsCtrl.updateAccountContactByAccountId = async (req, res) => {
     const { accountId } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objAccountContact = await accountContactService.updateAccountContactByAccountId(accountId, req.body);
            if (!objAccountContact) {
                util.setError(404, `Cannot find accountContact with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AccountContact updated', objAccountContact);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

accountsContactsCtrl.updateAccountContactByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objAccountContact = await accountContactService.updateAccountContactByDateModified(dateModified, req.body);
            if (!objAccountContact) {
                util.setError(404, `Cannot find accountContact with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AccountContact updated', objAccountContact);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = accountsContactsCtrl;
//</es-section>
