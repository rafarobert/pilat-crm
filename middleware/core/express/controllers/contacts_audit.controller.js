/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:42:46 GMT-0400 (Bolivia Time)
 * Time: 4:42:46
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:42:46 GMT-0400 (Bolivia Time)
 * Last time updated: 4:42:46
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const contactAuditService = require('../services/contacts_audit.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const contactsAuditCtrl = {};
contactsAuditCtrl.service = contactAuditService;


contactsAuditCtrl.getAllContactsAudit = async (req, res) => {
    try {
        const objContactsAudit = await contactAuditService.getAllContactsAudit(req.query);
        if (objContactsAudit.length > 0) {
            util.setSuccess(200, 'ContactsAudit retrieved', objContactsAudit);
        } else {
            util.setSuccess(200, 'No contactAudit found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

contactsAuditCtrl.getAContactAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objContactAudit = await contactAuditService.getAContactAudit(id, req.query);
        if (!objContactAudit) {
            util.setError(404, `Cannot find contactAudit with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found contactAudit', objContactAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

contactsAuditCtrl.addContactAudit = async (req, res) => {
    try {
        const objContactAudit = await contactAuditService.addContactAudit(req.body);
        util.setSuccess(201, 'ContactAudit Added!', objContactAudit);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

contactsAuditCtrl.updateContactAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objContactAudit = await contactAuditService.updateContactAudit(id, req.body);
        if (!objContactAudit) {
            util.setError(404, `Cannot find contactAudit with the id: ${id}`);
        } else {
            util.setSuccess(200, 'ContactAudit updated', objContactAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

contactsAuditCtrl.deleteContactAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objContactAudit = await contactAuditService.deleteContactAudit(id);
        if (objContactAudit) {
            util.setSuccess(200, 'ContactAudit deleted', objContactAudit);
        } else {
            util.setError(404, `ContactAudit with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



contactsAuditCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objContactAudit = await contactAuditService.findOneById(id, req.query);
        if (!objContactAudit) {
            util.setError(404, `Cannot find contactAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found contactAudit', objContactAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

contactsAuditCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objContactAudit = await contactAuditService.findOneByCreatedBy(createdBy, req.query);
        if (!objContactAudit) {
            util.setError(404, `Cannot find contactAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found contactAudit', objContactAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

contactsAuditCtrl.findOneByFieldName = async (req, res) => {
    try {
        const { fieldName } = req.params;
        const objContactAudit = await contactAuditService.findOneByFieldName(fieldName, req.query);
        if (!objContactAudit) {
            util.setError(404, `Cannot find contactAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found contactAudit', objContactAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

contactsAuditCtrl.findOneByDataType = async (req, res) => {
    try {
        const { dataType } = req.params;
        const objContactAudit = await contactAuditService.findOneByDataType(dataType, req.query);
        if (!objContactAudit) {
            util.setError(404, `Cannot find contactAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found contactAudit', objContactAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

contactsAuditCtrl.findOneByBeforeValueString = async (req, res) => {
    try {
        const { beforeValueString } = req.params;
        const objContactAudit = await contactAuditService.findOneByBeforeValueString(beforeValueString, req.query);
        if (!objContactAudit) {
            util.setError(404, `Cannot find contactAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found contactAudit', objContactAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

contactsAuditCtrl.findOneByAfterValueString = async (req, res) => {
    try {
        const { afterValueString } = req.params;
        const objContactAudit = await contactAuditService.findOneByAfterValueString(afterValueString, req.query);
        if (!objContactAudit) {
            util.setError(404, `Cannot find contactAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found contactAudit', objContactAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

contactsAuditCtrl.findOneByBeforeValueText = async (req, res) => {
    try {
        const { beforeValueText } = req.params;
        const objContactAudit = await contactAuditService.findOneByBeforeValueText(beforeValueText, req.query);
        if (!objContactAudit) {
            util.setError(404, `Cannot find contactAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found contactAudit', objContactAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

contactsAuditCtrl.findOneByAfterValueText = async (req, res) => {
    try {
        const { afterValueText } = req.params;
        const objContactAudit = await contactAuditService.findOneByAfterValueText(afterValueText, req.query);
        if (!objContactAudit) {
            util.setError(404, `Cannot find contactAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found contactAudit', objContactAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

contactsAuditCtrl.findOneByDateCreated = async (req, res) => {
    try {
        const { dateCreated } = req.params;
        const objContactAudit = await contactAuditService.findOneByDateCreated(dateCreated, req.query);
        if (!objContactAudit) {
            util.setError(404, `Cannot find contactAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found contactAudit', objContactAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

contactsAuditCtrl.findOneByParentId = async (req, res) => {
    try {
        const { parentId } = req.params;
        const objContactAudit = await contactAuditService.findOneByParentId(parentId, req.query);
        if (!objContactAudit) {
            util.setError(404, `Cannot find contactAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found contactAudit', objContactAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



contactsAuditCtrl.updateContactAuditById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objContactAudit = await contactAuditService.updateContactAuditById(id, req.body);
            if (!objContactAudit) {
                util.setError(404, `Cannot find contactAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ContactAudit updated', objContactAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

contactsAuditCtrl.updateContactAuditByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objContactAudit = await contactAuditService.updateContactAuditByCreatedBy(createdBy, req.body);
            if (!objContactAudit) {
                util.setError(404, `Cannot find contactAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ContactAudit updated', objContactAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

contactsAuditCtrl.updateContactAuditByFieldName = async (req, res) => {
     const { fieldName } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objContactAudit = await contactAuditService.updateContactAuditByFieldName(fieldName, req.body);
            if (!objContactAudit) {
                util.setError(404, `Cannot find contactAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ContactAudit updated', objContactAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

contactsAuditCtrl.updateContactAuditByDataType = async (req, res) => {
     const { dataType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objContactAudit = await contactAuditService.updateContactAuditByDataType(dataType, req.body);
            if (!objContactAudit) {
                util.setError(404, `Cannot find contactAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ContactAudit updated', objContactAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

contactsAuditCtrl.updateContactAuditByBeforeValueString = async (req, res) => {
     const { beforeValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objContactAudit = await contactAuditService.updateContactAuditByBeforeValueString(beforeValueString, req.body);
            if (!objContactAudit) {
                util.setError(404, `Cannot find contactAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ContactAudit updated', objContactAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

contactsAuditCtrl.updateContactAuditByAfterValueString = async (req, res) => {
     const { afterValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objContactAudit = await contactAuditService.updateContactAuditByAfterValueString(afterValueString, req.body);
            if (!objContactAudit) {
                util.setError(404, `Cannot find contactAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ContactAudit updated', objContactAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

contactsAuditCtrl.updateContactAuditByBeforeValueText = async (req, res) => {
     const { beforeValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objContactAudit = await contactAuditService.updateContactAuditByBeforeValueText(beforeValueText, req.body);
            if (!objContactAudit) {
                util.setError(404, `Cannot find contactAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ContactAudit updated', objContactAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

contactsAuditCtrl.updateContactAuditByAfterValueText = async (req, res) => {
     const { afterValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objContactAudit = await contactAuditService.updateContactAuditByAfterValueText(afterValueText, req.body);
            if (!objContactAudit) {
                util.setError(404, `Cannot find contactAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ContactAudit updated', objContactAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

contactsAuditCtrl.updateContactAuditByDateCreated = async (req, res) => {
     const { dateCreated } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objContactAudit = await contactAuditService.updateContactAuditByDateCreated(dateCreated, req.body);
            if (!objContactAudit) {
                util.setError(404, `Cannot find contactAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ContactAudit updated', objContactAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

contactsAuditCtrl.updateContactAuditByParentId = async (req, res) => {
     const { parentId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objContactAudit = await contactAuditService.updateContactAuditByParentId(parentId, req.body);
            if (!objContactAudit) {
                util.setError(404, `Cannot find contactAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ContactAudit updated', objContactAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = contactsAuditCtrl;
//</es-section>
