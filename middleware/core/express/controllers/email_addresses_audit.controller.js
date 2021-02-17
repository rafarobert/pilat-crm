/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:42:59 GMT-0400 (Bolivia Time)
 * Time: 4:42:59
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:42:59 GMT-0400 (Bolivia Time)
 * Last time updated: 4:42:59
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const emailAddresseAuditService = require('../services/email_addresses_audit.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const emailAddressesAuditCtrl = {};
emailAddressesAuditCtrl.service = emailAddresseAuditService;


emailAddressesAuditCtrl.getAllEmailAddressesAudit = async (req, res) => {
    try {
        const objEmailAddressesAudit = await emailAddresseAuditService.getAllEmailAddressesAudit(req.query);
        if (objEmailAddressesAudit.length > 0) {
            util.setSuccess(200, 'EmailAddressesAudit retrieved', objEmailAddressesAudit);
        } else {
            util.setSuccess(200, 'No emailAddresseAudit found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailAddressesAuditCtrl.getAEmailAddresseAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objEmailAddresseAudit = await emailAddresseAuditService.getAEmailAddresseAudit(id, req.query);
        if (!objEmailAddresseAudit) {
            util.setError(404, `Cannot find emailAddresseAudit with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found emailAddresseAudit', objEmailAddresseAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailAddressesAuditCtrl.addEmailAddresseAudit = async (req, res) => {
    try {
        const objEmailAddresseAudit = await emailAddresseAuditService.addEmailAddresseAudit(req.body);
        util.setSuccess(201, 'EmailAddresseAudit Added!', objEmailAddresseAudit);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailAddressesAuditCtrl.updateEmailAddresseAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objEmailAddresseAudit = await emailAddresseAuditService.updateEmailAddresseAudit(id, req.body);
        if (!objEmailAddresseAudit) {
            util.setError(404, `Cannot find emailAddresseAudit with the id: ${id}`);
        } else {
            util.setSuccess(200, 'EmailAddresseAudit updated', objEmailAddresseAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

emailAddressesAuditCtrl.deleteEmailAddresseAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objEmailAddresseAudit = await emailAddresseAuditService.deleteEmailAddresseAudit(id);
        if (objEmailAddresseAudit) {
            util.setSuccess(200, 'EmailAddresseAudit deleted', objEmailAddresseAudit);
        } else {
            util.setError(404, `EmailAddresseAudit with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



emailAddressesAuditCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objEmailAddresseAudit = await emailAddresseAuditService.findOneById(id, req.query);
        if (!objEmailAddresseAudit) {
            util.setError(404, `Cannot find emailAddresseAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailAddresseAudit', objEmailAddresseAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailAddressesAuditCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objEmailAddresseAudit = await emailAddresseAuditService.findOneByCreatedBy(createdBy, req.query);
        if (!objEmailAddresseAudit) {
            util.setError(404, `Cannot find emailAddresseAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailAddresseAudit', objEmailAddresseAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailAddressesAuditCtrl.findOneByFieldName = async (req, res) => {
    try {
        const { fieldName } = req.params;
        const objEmailAddresseAudit = await emailAddresseAuditService.findOneByFieldName(fieldName, req.query);
        if (!objEmailAddresseAudit) {
            util.setError(404, `Cannot find emailAddresseAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailAddresseAudit', objEmailAddresseAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailAddressesAuditCtrl.findOneByDataType = async (req, res) => {
    try {
        const { dataType } = req.params;
        const objEmailAddresseAudit = await emailAddresseAuditService.findOneByDataType(dataType, req.query);
        if (!objEmailAddresseAudit) {
            util.setError(404, `Cannot find emailAddresseAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailAddresseAudit', objEmailAddresseAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailAddressesAuditCtrl.findOneByBeforeValueString = async (req, res) => {
    try {
        const { beforeValueString } = req.params;
        const objEmailAddresseAudit = await emailAddresseAuditService.findOneByBeforeValueString(beforeValueString, req.query);
        if (!objEmailAddresseAudit) {
            util.setError(404, `Cannot find emailAddresseAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailAddresseAudit', objEmailAddresseAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailAddressesAuditCtrl.findOneByAfterValueString = async (req, res) => {
    try {
        const { afterValueString } = req.params;
        const objEmailAddresseAudit = await emailAddresseAuditService.findOneByAfterValueString(afterValueString, req.query);
        if (!objEmailAddresseAudit) {
            util.setError(404, `Cannot find emailAddresseAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailAddresseAudit', objEmailAddresseAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailAddressesAuditCtrl.findOneByBeforeValueText = async (req, res) => {
    try {
        const { beforeValueText } = req.params;
        const objEmailAddresseAudit = await emailAddresseAuditService.findOneByBeforeValueText(beforeValueText, req.query);
        if (!objEmailAddresseAudit) {
            util.setError(404, `Cannot find emailAddresseAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailAddresseAudit', objEmailAddresseAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailAddressesAuditCtrl.findOneByAfterValueText = async (req, res) => {
    try {
        const { afterValueText } = req.params;
        const objEmailAddresseAudit = await emailAddresseAuditService.findOneByAfterValueText(afterValueText, req.query);
        if (!objEmailAddresseAudit) {
            util.setError(404, `Cannot find emailAddresseAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailAddresseAudit', objEmailAddresseAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailAddressesAuditCtrl.findOneByDateCreated = async (req, res) => {
    try {
        const { dateCreated } = req.params;
        const objEmailAddresseAudit = await emailAddresseAuditService.findOneByDateCreated(dateCreated, req.query);
        if (!objEmailAddresseAudit) {
            util.setError(404, `Cannot find emailAddresseAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailAddresseAudit', objEmailAddresseAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

emailAddressesAuditCtrl.findOneByParentId = async (req, res) => {
    try {
        const { parentId } = req.params;
        const objEmailAddresseAudit = await emailAddresseAuditService.findOneByParentId(parentId, req.query);
        if (!objEmailAddresseAudit) {
            util.setError(404, `Cannot find emailAddresseAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found emailAddresseAudit', objEmailAddresseAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



emailAddressesAuditCtrl.updateEmailAddresseAuditById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailAddresseAudit = await emailAddresseAuditService.updateEmailAddresseAuditById(id, req.body);
            if (!objEmailAddresseAudit) {
                util.setError(404, `Cannot find emailAddresseAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'EmailAddresseAudit updated', objEmailAddresseAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailAddressesAuditCtrl.updateEmailAddresseAuditByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailAddresseAudit = await emailAddresseAuditService.updateEmailAddresseAuditByCreatedBy(createdBy, req.body);
            if (!objEmailAddresseAudit) {
                util.setError(404, `Cannot find emailAddresseAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'EmailAddresseAudit updated', objEmailAddresseAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailAddressesAuditCtrl.updateEmailAddresseAuditByFieldName = async (req, res) => {
     const { fieldName } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailAddresseAudit = await emailAddresseAuditService.updateEmailAddresseAuditByFieldName(fieldName, req.body);
            if (!objEmailAddresseAudit) {
                util.setError(404, `Cannot find emailAddresseAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'EmailAddresseAudit updated', objEmailAddresseAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailAddressesAuditCtrl.updateEmailAddresseAuditByDataType = async (req, res) => {
     const { dataType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailAddresseAudit = await emailAddresseAuditService.updateEmailAddresseAuditByDataType(dataType, req.body);
            if (!objEmailAddresseAudit) {
                util.setError(404, `Cannot find emailAddresseAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'EmailAddresseAudit updated', objEmailAddresseAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailAddressesAuditCtrl.updateEmailAddresseAuditByBeforeValueString = async (req, res) => {
     const { beforeValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailAddresseAudit = await emailAddresseAuditService.updateEmailAddresseAuditByBeforeValueString(beforeValueString, req.body);
            if (!objEmailAddresseAudit) {
                util.setError(404, `Cannot find emailAddresseAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'EmailAddresseAudit updated', objEmailAddresseAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailAddressesAuditCtrl.updateEmailAddresseAuditByAfterValueString = async (req, res) => {
     const { afterValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailAddresseAudit = await emailAddresseAuditService.updateEmailAddresseAuditByAfterValueString(afterValueString, req.body);
            if (!objEmailAddresseAudit) {
                util.setError(404, `Cannot find emailAddresseAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'EmailAddresseAudit updated', objEmailAddresseAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailAddressesAuditCtrl.updateEmailAddresseAuditByBeforeValueText = async (req, res) => {
     const { beforeValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailAddresseAudit = await emailAddresseAuditService.updateEmailAddresseAuditByBeforeValueText(beforeValueText, req.body);
            if (!objEmailAddresseAudit) {
                util.setError(404, `Cannot find emailAddresseAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'EmailAddresseAudit updated', objEmailAddresseAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailAddressesAuditCtrl.updateEmailAddresseAuditByAfterValueText = async (req, res) => {
     const { afterValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailAddresseAudit = await emailAddresseAuditService.updateEmailAddresseAuditByAfterValueText(afterValueText, req.body);
            if (!objEmailAddresseAudit) {
                util.setError(404, `Cannot find emailAddresseAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'EmailAddresseAudit updated', objEmailAddresseAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailAddressesAuditCtrl.updateEmailAddresseAuditByDateCreated = async (req, res) => {
     const { dateCreated } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailAddresseAudit = await emailAddresseAuditService.updateEmailAddresseAuditByDateCreated(dateCreated, req.body);
            if (!objEmailAddresseAudit) {
                util.setError(404, `Cannot find emailAddresseAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'EmailAddresseAudit updated', objEmailAddresseAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

emailAddressesAuditCtrl.updateEmailAddresseAuditByParentId = async (req, res) => {
     const { parentId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objEmailAddresseAudit = await emailAddresseAuditService.updateEmailAddresseAuditByParentId(parentId, req.body);
            if (!objEmailAddresseAudit) {
                util.setError(404, `Cannot find emailAddresseAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'EmailAddresseAudit updated', objEmailAddresseAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = emailAddressesAuditCtrl;
//</es-section>
