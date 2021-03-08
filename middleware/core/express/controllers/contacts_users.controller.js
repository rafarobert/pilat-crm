/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:35:52 GMT-0400 (Bolivia Time)
 * Time: 15:35:52
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:35:52 GMT-0400 (Bolivia Time)
 * Last time updated: 15:35:52
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const contactUserService = require('../services/contacts_users.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const contactsUsersCtrl = {};
contactsUsersCtrl.service = contactUserService;


contactsUsersCtrl.getAllContactsUsers = async (req, res) => {
    try {
        const objContactsUsers = await contactUserService.getAllContactsUsers(req.query);
        if (objContactsUsers.length > 0) {
            util.setSuccess(200, 'ContactsUsers retrieved', objContactsUsers);
        } else {
            util.setSuccess(200, 'No contactUser found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

contactsUsersCtrl.getAContactUser = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objContactUser = await contactUserService.getAContactUser(id, req.query);
        if (!objContactUser) {
            util.setError(404, `Cannot find contactUser with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found contactUser', objContactUser);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

contactsUsersCtrl.addContactUser = async (req, res) => {
    try {
        const objContactUser = await contactUserService.addContactUser(req.body);
        util.setSuccess(201, 'ContactUser Added!', objContactUser);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

contactsUsersCtrl.updateContactUser = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objContactUser = await contactUserService.updateContactUser(id, req.body);
        if (!objContactUser) {
            util.setError(404, `Cannot find contactUser with the id: ${id}`);
        } else {
            util.setSuccess(200, 'ContactUser updated', objContactUser);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

contactsUsersCtrl.deleteContactUser = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please provide a String value');
            return util.send(res);
        }
        const objContactUser = await contactUserService.deleteContactUser(id);
        if (objContactUser) {
            util.setSuccess(200, 'ContactUser deleted', objContactUser);
        } else {
            util.setError(404, `ContactUser with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



contactsUsersCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objContactUser = await contactUserService.findOneById(id, req.query);
        if (!objContactUser) {
            util.setError(404, `Cannot find contactUser with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found contactUser', objContactUser);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

contactsUsersCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objContactUser = await contactUserService.findOneByDeleted(deleted, req.query);
        if (!objContactUser) {
            util.setError(404, `Cannot find contactUser with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found contactUser', objContactUser);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

contactsUsersCtrl.findOneByContactId = async (req, res) => {
    try {
        const { contactId } = req.params;
        const objContactUser = await contactUserService.findOneByContactId(contactId, req.query);
        if (!objContactUser) {
            util.setError(404, `Cannot find contactUser with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found contactUser', objContactUser);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

contactsUsersCtrl.findOneByUserId = async (req, res) => {
    try {
        const { userId } = req.params;
        const objContactUser = await contactUserService.findOneByUserId(userId, req.query);
        if (!objContactUser) {
            util.setError(404, `Cannot find contactUser with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found contactUser', objContactUser);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

contactsUsersCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objContactUser = await contactUserService.findOneByDateModified(dateModified, req.query);
        if (!objContactUser) {
            util.setError(404, `Cannot find contactUser with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found contactUser', objContactUser);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



contactsUsersCtrl.updateContactUserById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objContactUser = await contactUserService.updateContactUserById(id, req.body);
            if (!objContactUser) {
                util.setError(404, `Cannot find contactUser with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ContactUser updated', objContactUser);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

contactsUsersCtrl.updateContactUserByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objContactUser = await contactUserService.updateContactUserByDeleted(deleted, req.body);
            if (!objContactUser) {
                util.setError(404, `Cannot find contactUser with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ContactUser updated', objContactUser);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

contactsUsersCtrl.updateContactUserByContactId = async (req, res) => {
     const { contactId } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objContactUser = await contactUserService.updateContactUserByContactId(contactId, req.body);
            if (!objContactUser) {
                util.setError(404, `Cannot find contactUser with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ContactUser updated', objContactUser);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

contactsUsersCtrl.updateContactUserByUserId = async (req, res) => {
     const { userId } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objContactUser = await contactUserService.updateContactUserByUserId(userId, req.body);
            if (!objContactUser) {
                util.setError(404, `Cannot find contactUser with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ContactUser updated', objContactUser);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

contactsUsersCtrl.updateContactUserByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objContactUser = await contactUserService.updateContactUserByDateModified(dateModified, req.body);
            if (!objContactUser) {
                util.setError(404, `Cannot find contactUser with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ContactUser updated', objContactUser);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = contactsUsersCtrl;
//</es-section>
