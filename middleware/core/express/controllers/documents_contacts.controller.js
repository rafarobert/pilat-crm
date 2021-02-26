/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:22:45 GMT-0400 (Bolivia Time)
 * Time: 0:22:45
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:22:45 GMT-0400 (Bolivia Time)
 * Last time updated: 0:22:45
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const documentContactService = require('../services/documents_contacts.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const documentsContactsCtrl = {};
documentsContactsCtrl.service = documentContactService;


documentsContactsCtrl.getAllDocumentsContacts = async (req, res) => {
    try {
        const objDocumentsContacts = await documentContactService.getAllDocumentsContacts(req.query);
        if (objDocumentsContacts.length > 0) {
            util.setSuccess(200, 'DocumentsContacts retrieved', objDocumentsContacts);
        } else {
            util.setSuccess(200, 'No documentContact found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

documentsContactsCtrl.getADocumentContact = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objDocumentContact = await documentContactService.getADocumentContact(id, req.query);
        if (!objDocumentContact) {
            util.setError(404, `Cannot find documentContact with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found documentContact', objDocumentContact);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

documentsContactsCtrl.addDocumentContact = async (req, res) => {
    try {
        const objDocumentContact = await documentContactService.addDocumentContact(req.body);
        util.setSuccess(201, 'DocumentContact Added!', objDocumentContact);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

documentsContactsCtrl.updateDocumentContact = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objDocumentContact = await documentContactService.updateDocumentContact(id, req.body);
        if (!objDocumentContact) {
            util.setError(404, `Cannot find documentContact with the id: ${id}`);
        } else {
            util.setSuccess(200, 'DocumentContact updated', objDocumentContact);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

documentsContactsCtrl.deleteDocumentContact = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please provide a String value');
            return util.send(res);
        }
        const objDocumentContact = await documentContactService.deleteDocumentContact(id);
        if (objDocumentContact) {
            util.setSuccess(200, 'DocumentContact deleted', objDocumentContact);
        } else {
            util.setError(404, `DocumentContact with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



documentsContactsCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objDocumentContact = await documentContactService.findOneById(id, req.query);
        if (!objDocumentContact) {
            util.setError(404, `Cannot find documentContact with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found documentContact', objDocumentContact);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

documentsContactsCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objDocumentContact = await documentContactService.findOneByDeleted(deleted, req.query);
        if (!objDocumentContact) {
            util.setError(404, `Cannot find documentContact with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found documentContact', objDocumentContact);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

documentsContactsCtrl.findOneByDocumentId = async (req, res) => {
    try {
        const { documentId } = req.params;
        const objDocumentContact = await documentContactService.findOneByDocumentId(documentId, req.query);
        if (!objDocumentContact) {
            util.setError(404, `Cannot find documentContact with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found documentContact', objDocumentContact);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

documentsContactsCtrl.findOneByContactId = async (req, res) => {
    try {
        const { contactId } = req.params;
        const objDocumentContact = await documentContactService.findOneByContactId(contactId, req.query);
        if (!objDocumentContact) {
            util.setError(404, `Cannot find documentContact with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found documentContact', objDocumentContact);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

documentsContactsCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objDocumentContact = await documentContactService.findOneByDateModified(dateModified, req.query);
        if (!objDocumentContact) {
            util.setError(404, `Cannot find documentContact with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found documentContact', objDocumentContact);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



documentsContactsCtrl.updateDocumentContactById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objDocumentContact = await documentContactService.updateDocumentContactById(id, req.body);
            if (!objDocumentContact) {
                util.setError(404, `Cannot find documentContact with the id: ${id}`);
            } else {
                util.setSuccess(200, 'DocumentContact updated', objDocumentContact);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

documentsContactsCtrl.updateDocumentContactByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objDocumentContact = await documentContactService.updateDocumentContactByDeleted(deleted, req.body);
            if (!objDocumentContact) {
                util.setError(404, `Cannot find documentContact with the id: ${id}`);
            } else {
                util.setSuccess(200, 'DocumentContact updated', objDocumentContact);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

documentsContactsCtrl.updateDocumentContactByDocumentId = async (req, res) => {
     const { documentId } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objDocumentContact = await documentContactService.updateDocumentContactByDocumentId(documentId, req.body);
            if (!objDocumentContact) {
                util.setError(404, `Cannot find documentContact with the id: ${id}`);
            } else {
                util.setSuccess(200, 'DocumentContact updated', objDocumentContact);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

documentsContactsCtrl.updateDocumentContactByContactId = async (req, res) => {
     const { contactId } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objDocumentContact = await documentContactService.updateDocumentContactByContactId(contactId, req.body);
            if (!objDocumentContact) {
                util.setError(404, `Cannot find documentContact with the id: ${id}`);
            } else {
                util.setSuccess(200, 'DocumentContact updated', objDocumentContact);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

documentsContactsCtrl.updateDocumentContactByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objDocumentContact = await documentContactService.updateDocumentContactByDateModified(dateModified, req.body);
            if (!objDocumentContact) {
                util.setError(404, `Cannot find documentContact with the id: ${id}`);
            } else {
                util.setSuccess(200, 'DocumentContact updated', objDocumentContact);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = documentsContactsCtrl;
//</es-section>
