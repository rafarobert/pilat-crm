/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:42:47 GMT-0400 (Bolivia Time)
 * Time: 4:42:47
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:42:47 GMT-0400 (Bolivia Time)
 * Last time updated: 4:42:47
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const contactCaseService = require('../services/contacts_cases.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const contactsCasesCtrl = {};
contactsCasesCtrl.service = contactCaseService;


contactsCasesCtrl.getAllContactsCases = async (req, res) => {
    try {
        const objContactsCases = await contactCaseService.getAllContactsCases(req.query);
        if (objContactsCases.length > 0) {
            util.setSuccess(200, 'ContactsCases retrieved', objContactsCases);
        } else {
            util.setSuccess(200, 'No contactCase found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

contactsCasesCtrl.getAContactCase = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objContactCase = await contactCaseService.getAContactCase(id, req.query);
        if (!objContactCase) {
            util.setError(404, `Cannot find contactCase with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found contactCase', objContactCase);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

contactsCasesCtrl.addContactCase = async (req, res) => {
    try {
        const objContactCase = await contactCaseService.addContactCase(req.body);
        util.setSuccess(201, 'ContactCase Added!', objContactCase);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

contactsCasesCtrl.updateContactCase = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objContactCase = await contactCaseService.updateContactCase(id, req.body);
        if (!objContactCase) {
            util.setError(404, `Cannot find contactCase with the id: ${id}`);
        } else {
            util.setSuccess(200, 'ContactCase updated', objContactCase);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

contactsCasesCtrl.deleteContactCase = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please provide a String value');
            return util.send(res);
        }
        const objContactCase = await contactCaseService.deleteContactCase(id);
        if (objContactCase) {
            util.setSuccess(200, 'ContactCase deleted', objContactCase);
        } else {
            util.setError(404, `ContactCase with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



contactsCasesCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objContactCase = await contactCaseService.findOneById(id, req.query);
        if (!objContactCase) {
            util.setError(404, `Cannot find contactCase with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found contactCase', objContactCase);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

contactsCasesCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objContactCase = await contactCaseService.findOneByDeleted(deleted, req.query);
        if (!objContactCase) {
            util.setError(404, `Cannot find contactCase with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found contactCase', objContactCase);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

contactsCasesCtrl.findOneByContactId = async (req, res) => {
    try {
        const { contactId } = req.params;
        const objContactCase = await contactCaseService.findOneByContactId(contactId, req.query);
        if (!objContactCase) {
            util.setError(404, `Cannot find contactCase with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found contactCase', objContactCase);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

contactsCasesCtrl.findOneByCaseId = async (req, res) => {
    try {
        const { caseId } = req.params;
        const objContactCase = await contactCaseService.findOneByCaseId(caseId, req.query);
        if (!objContactCase) {
            util.setError(404, `Cannot find contactCase with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found contactCase', objContactCase);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

contactsCasesCtrl.findOneByContactRole = async (req, res) => {
    try {
        const { contactRole } = req.params;
        const objContactCase = await contactCaseService.findOneByContactRole(contactRole, req.query);
        if (!objContactCase) {
            util.setError(404, `Cannot find contactCase with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found contactCase', objContactCase);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

contactsCasesCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objContactCase = await contactCaseService.findOneByDateModified(dateModified, req.query);
        if (!objContactCase) {
            util.setError(404, `Cannot find contactCase with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found contactCase', objContactCase);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



contactsCasesCtrl.updateContactCaseById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objContactCase = await contactCaseService.updateContactCaseById(id, req.body);
            if (!objContactCase) {
                util.setError(404, `Cannot find contactCase with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ContactCase updated', objContactCase);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

contactsCasesCtrl.updateContactCaseByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objContactCase = await contactCaseService.updateContactCaseByDeleted(deleted, req.body);
            if (!objContactCase) {
                util.setError(404, `Cannot find contactCase with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ContactCase updated', objContactCase);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

contactsCasesCtrl.updateContactCaseByContactId = async (req, res) => {
     const { contactId } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objContactCase = await contactCaseService.updateContactCaseByContactId(contactId, req.body);
            if (!objContactCase) {
                util.setError(404, `Cannot find contactCase with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ContactCase updated', objContactCase);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

contactsCasesCtrl.updateContactCaseByCaseId = async (req, res) => {
     const { caseId } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objContactCase = await contactCaseService.updateContactCaseByCaseId(caseId, req.body);
            if (!objContactCase) {
                util.setError(404, `Cannot find contactCase with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ContactCase updated', objContactCase);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

contactsCasesCtrl.updateContactCaseByContactRole = async (req, res) => {
     const { contactRole } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objContactCase = await contactCaseService.updateContactCaseByContactRole(contactRole, req.body);
            if (!objContactCase) {
                util.setError(404, `Cannot find contactCase with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ContactCase updated', objContactCase);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

contactsCasesCtrl.updateContactCaseByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objContactCase = await contactCaseService.updateContactCaseByDateModified(dateModified, req.body);
            if (!objContactCase) {
                util.setError(404, `Cannot find contactCase with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ContactCase updated', objContactCase);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = contactsCasesCtrl;
//</es-section>
