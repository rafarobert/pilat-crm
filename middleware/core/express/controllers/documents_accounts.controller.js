/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:42:51 GMT-0400 (Bolivia Time)
 * Time: 4:42:51
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:42:51 GMT-0400 (Bolivia Time)
 * Last time updated: 4:42:51
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const documentAccountService = require('../services/documents_accounts.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const documentsAccountsCtrl = {};
documentsAccountsCtrl.service = documentAccountService;


documentsAccountsCtrl.getAllDocumentsAccounts = async (req, res) => {
    try {
        const objDocumentsAccounts = await documentAccountService.getAllDocumentsAccounts(req.query);
        if (objDocumentsAccounts.length > 0) {
            util.setSuccess(200, 'DocumentsAccounts retrieved', objDocumentsAccounts);
        } else {
            util.setSuccess(200, 'No documentAccount found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

documentsAccountsCtrl.getADocumentAccount = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objDocumentAccount = await documentAccountService.getADocumentAccount(id, req.query);
        if (!objDocumentAccount) {
            util.setError(404, `Cannot find documentAccount with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found documentAccount', objDocumentAccount);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

documentsAccountsCtrl.addDocumentAccount = async (req, res) => {
    try {
        const objDocumentAccount = await documentAccountService.addDocumentAccount(req.body);
        util.setSuccess(201, 'DocumentAccount Added!', objDocumentAccount);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

documentsAccountsCtrl.updateDocumentAccount = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objDocumentAccount = await documentAccountService.updateDocumentAccount(id, req.body);
        if (!objDocumentAccount) {
            util.setError(404, `Cannot find documentAccount with the id: ${id}`);
        } else {
            util.setSuccess(200, 'DocumentAccount updated', objDocumentAccount);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

documentsAccountsCtrl.deleteDocumentAccount = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please provide a String value');
            return util.send(res);
        }
        const objDocumentAccount = await documentAccountService.deleteDocumentAccount(id);
        if (objDocumentAccount) {
            util.setSuccess(200, 'DocumentAccount deleted', objDocumentAccount);
        } else {
            util.setError(404, `DocumentAccount with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



documentsAccountsCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objDocumentAccount = await documentAccountService.findOneById(id, req.query);
        if (!objDocumentAccount) {
            util.setError(404, `Cannot find documentAccount with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found documentAccount', objDocumentAccount);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

documentsAccountsCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objDocumentAccount = await documentAccountService.findOneByDeleted(deleted, req.query);
        if (!objDocumentAccount) {
            util.setError(404, `Cannot find documentAccount with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found documentAccount', objDocumentAccount);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

documentsAccountsCtrl.findOneByDocumentId = async (req, res) => {
    try {
        const { documentId } = req.params;
        const objDocumentAccount = await documentAccountService.findOneByDocumentId(documentId, req.query);
        if (!objDocumentAccount) {
            util.setError(404, `Cannot find documentAccount with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found documentAccount', objDocumentAccount);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

documentsAccountsCtrl.findOneByAccountId = async (req, res) => {
    try {
        const { accountId } = req.params;
        const objDocumentAccount = await documentAccountService.findOneByAccountId(accountId, req.query);
        if (!objDocumentAccount) {
            util.setError(404, `Cannot find documentAccount with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found documentAccount', objDocumentAccount);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

documentsAccountsCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objDocumentAccount = await documentAccountService.findOneByDateModified(dateModified, req.query);
        if (!objDocumentAccount) {
            util.setError(404, `Cannot find documentAccount with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found documentAccount', objDocumentAccount);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



documentsAccountsCtrl.updateDocumentAccountById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objDocumentAccount = await documentAccountService.updateDocumentAccountById(id, req.body);
            if (!objDocumentAccount) {
                util.setError(404, `Cannot find documentAccount with the id: ${id}`);
            } else {
                util.setSuccess(200, 'DocumentAccount updated', objDocumentAccount);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

documentsAccountsCtrl.updateDocumentAccountByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objDocumentAccount = await documentAccountService.updateDocumentAccountByDeleted(deleted, req.body);
            if (!objDocumentAccount) {
                util.setError(404, `Cannot find documentAccount with the id: ${id}`);
            } else {
                util.setSuccess(200, 'DocumentAccount updated', objDocumentAccount);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

documentsAccountsCtrl.updateDocumentAccountByDocumentId = async (req, res) => {
     const { documentId } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objDocumentAccount = await documentAccountService.updateDocumentAccountByDocumentId(documentId, req.body);
            if (!objDocumentAccount) {
                util.setError(404, `Cannot find documentAccount with the id: ${id}`);
            } else {
                util.setSuccess(200, 'DocumentAccount updated', objDocumentAccount);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

documentsAccountsCtrl.updateDocumentAccountByAccountId = async (req, res) => {
     const { accountId } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objDocumentAccount = await documentAccountService.updateDocumentAccountByAccountId(accountId, req.body);
            if (!objDocumentAccount) {
                util.setError(404, `Cannot find documentAccount with the id: ${id}`);
            } else {
                util.setSuccess(200, 'DocumentAccount updated', objDocumentAccount);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

documentsAccountsCtrl.updateDocumentAccountByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objDocumentAccount = await documentAccountService.updateDocumentAccountByDateModified(dateModified, req.body);
            if (!objDocumentAccount) {
                util.setError(404, `Cannot find documentAccount with the id: ${id}`);
            } else {
                util.setSuccess(200, 'DocumentAccount updated', objDocumentAccount);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = documentsAccountsCtrl;
//</es-section>
