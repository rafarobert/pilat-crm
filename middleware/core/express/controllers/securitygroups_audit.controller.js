/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:37:00 GMT-0400 (Bolivia Time)
 * Time: 15:37:0
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:37:00 GMT-0400 (Bolivia Time)
 * Last time updated: 15:37:0
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const securitygroupAuditService = require('../services/securitygroups_audit.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const securitygroupsAuditCtrl = {};
securitygroupsAuditCtrl.service = securitygroupAuditService;


securitygroupsAuditCtrl.getAllSecuritygroupsAudit = async (req, res) => {
    try {
        const objSecuritygroupsAudit = await securitygroupAuditService.getAllSecuritygroupsAudit(req.query);
        if (objSecuritygroupsAudit.length > 0) {
            util.setSuccess(200, 'SecuritygroupsAudit retrieved', objSecuritygroupsAudit);
        } else {
            util.setSuccess(200, 'No securitygroupAudit found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

securitygroupsAuditCtrl.getASecuritygroupAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objSecuritygroupAudit = await securitygroupAuditService.getASecuritygroupAudit(id, req.query);
        if (!objSecuritygroupAudit) {
            util.setError(404, `Cannot find securitygroupAudit with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found securitygroupAudit', objSecuritygroupAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

securitygroupsAuditCtrl.addSecuritygroupAudit = async (req, res) => {
    try {
        const objSecuritygroupAudit = await securitygroupAuditService.addSecuritygroupAudit(req.body);
        util.setSuccess(201, 'SecuritygroupAudit Added!', objSecuritygroupAudit);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

securitygroupsAuditCtrl.updateSecuritygroupAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objSecuritygroupAudit = await securitygroupAuditService.updateSecuritygroupAudit(id, req.body);
        if (!objSecuritygroupAudit) {
            util.setError(404, `Cannot find securitygroupAudit with the id: ${id}`);
        } else {
            util.setSuccess(200, 'SecuritygroupAudit updated', objSecuritygroupAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

securitygroupsAuditCtrl.deleteSecuritygroupAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objSecuritygroupAudit = await securitygroupAuditService.deleteSecuritygroupAudit(id);
        if (objSecuritygroupAudit) {
            util.setSuccess(200, 'SecuritygroupAudit deleted', objSecuritygroupAudit);
        } else {
            util.setError(404, `SecuritygroupAudit with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



securitygroupsAuditCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objSecuritygroupAudit = await securitygroupAuditService.findOneById(id, req.query);
        if (!objSecuritygroupAudit) {
            util.setError(404, `Cannot find securitygroupAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found securitygroupAudit', objSecuritygroupAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

securitygroupsAuditCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objSecuritygroupAudit = await securitygroupAuditService.findOneByCreatedBy(createdBy, req.query);
        if (!objSecuritygroupAudit) {
            util.setError(404, `Cannot find securitygroupAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found securitygroupAudit', objSecuritygroupAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

securitygroupsAuditCtrl.findOneByFieldName = async (req, res) => {
    try {
        const { fieldName } = req.params;
        const objSecuritygroupAudit = await securitygroupAuditService.findOneByFieldName(fieldName, req.query);
        if (!objSecuritygroupAudit) {
            util.setError(404, `Cannot find securitygroupAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found securitygroupAudit', objSecuritygroupAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

securitygroupsAuditCtrl.findOneByDataType = async (req, res) => {
    try {
        const { dataType } = req.params;
        const objSecuritygroupAudit = await securitygroupAuditService.findOneByDataType(dataType, req.query);
        if (!objSecuritygroupAudit) {
            util.setError(404, `Cannot find securitygroupAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found securitygroupAudit', objSecuritygroupAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

securitygroupsAuditCtrl.findOneByBeforeValueString = async (req, res) => {
    try {
        const { beforeValueString } = req.params;
        const objSecuritygroupAudit = await securitygroupAuditService.findOneByBeforeValueString(beforeValueString, req.query);
        if (!objSecuritygroupAudit) {
            util.setError(404, `Cannot find securitygroupAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found securitygroupAudit', objSecuritygroupAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

securitygroupsAuditCtrl.findOneByAfterValueString = async (req, res) => {
    try {
        const { afterValueString } = req.params;
        const objSecuritygroupAudit = await securitygroupAuditService.findOneByAfterValueString(afterValueString, req.query);
        if (!objSecuritygroupAudit) {
            util.setError(404, `Cannot find securitygroupAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found securitygroupAudit', objSecuritygroupAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

securitygroupsAuditCtrl.findOneByBeforeValueText = async (req, res) => {
    try {
        const { beforeValueText } = req.params;
        const objSecuritygroupAudit = await securitygroupAuditService.findOneByBeforeValueText(beforeValueText, req.query);
        if (!objSecuritygroupAudit) {
            util.setError(404, `Cannot find securitygroupAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found securitygroupAudit', objSecuritygroupAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

securitygroupsAuditCtrl.findOneByAfterValueText = async (req, res) => {
    try {
        const { afterValueText } = req.params;
        const objSecuritygroupAudit = await securitygroupAuditService.findOneByAfterValueText(afterValueText, req.query);
        if (!objSecuritygroupAudit) {
            util.setError(404, `Cannot find securitygroupAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found securitygroupAudit', objSecuritygroupAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

securitygroupsAuditCtrl.findOneByDateCreated = async (req, res) => {
    try {
        const { dateCreated } = req.params;
        const objSecuritygroupAudit = await securitygroupAuditService.findOneByDateCreated(dateCreated, req.query);
        if (!objSecuritygroupAudit) {
            util.setError(404, `Cannot find securitygroupAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found securitygroupAudit', objSecuritygroupAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

securitygroupsAuditCtrl.findOneByParentId = async (req, res) => {
    try {
        const { parentId } = req.params;
        const objSecuritygroupAudit = await securitygroupAuditService.findOneByParentId(parentId, req.query);
        if (!objSecuritygroupAudit) {
            util.setError(404, `Cannot find securitygroupAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found securitygroupAudit', objSecuritygroupAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



securitygroupsAuditCtrl.updateSecuritygroupAuditById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSecuritygroupAudit = await securitygroupAuditService.updateSecuritygroupAuditById(id, req.body);
            if (!objSecuritygroupAudit) {
                util.setError(404, `Cannot find securitygroupAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SecuritygroupAudit updated', objSecuritygroupAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

securitygroupsAuditCtrl.updateSecuritygroupAuditByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSecuritygroupAudit = await securitygroupAuditService.updateSecuritygroupAuditByCreatedBy(createdBy, req.body);
            if (!objSecuritygroupAudit) {
                util.setError(404, `Cannot find securitygroupAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SecuritygroupAudit updated', objSecuritygroupAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

securitygroupsAuditCtrl.updateSecuritygroupAuditByFieldName = async (req, res) => {
     const { fieldName } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSecuritygroupAudit = await securitygroupAuditService.updateSecuritygroupAuditByFieldName(fieldName, req.body);
            if (!objSecuritygroupAudit) {
                util.setError(404, `Cannot find securitygroupAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SecuritygroupAudit updated', objSecuritygroupAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

securitygroupsAuditCtrl.updateSecuritygroupAuditByDataType = async (req, res) => {
     const { dataType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSecuritygroupAudit = await securitygroupAuditService.updateSecuritygroupAuditByDataType(dataType, req.body);
            if (!objSecuritygroupAudit) {
                util.setError(404, `Cannot find securitygroupAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SecuritygroupAudit updated', objSecuritygroupAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

securitygroupsAuditCtrl.updateSecuritygroupAuditByBeforeValueString = async (req, res) => {
     const { beforeValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSecuritygroupAudit = await securitygroupAuditService.updateSecuritygroupAuditByBeforeValueString(beforeValueString, req.body);
            if (!objSecuritygroupAudit) {
                util.setError(404, `Cannot find securitygroupAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SecuritygroupAudit updated', objSecuritygroupAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

securitygroupsAuditCtrl.updateSecuritygroupAuditByAfterValueString = async (req, res) => {
     const { afterValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSecuritygroupAudit = await securitygroupAuditService.updateSecuritygroupAuditByAfterValueString(afterValueString, req.body);
            if (!objSecuritygroupAudit) {
                util.setError(404, `Cannot find securitygroupAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SecuritygroupAudit updated', objSecuritygroupAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

securitygroupsAuditCtrl.updateSecuritygroupAuditByBeforeValueText = async (req, res) => {
     const { beforeValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSecuritygroupAudit = await securitygroupAuditService.updateSecuritygroupAuditByBeforeValueText(beforeValueText, req.body);
            if (!objSecuritygroupAudit) {
                util.setError(404, `Cannot find securitygroupAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SecuritygroupAudit updated', objSecuritygroupAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

securitygroupsAuditCtrl.updateSecuritygroupAuditByAfterValueText = async (req, res) => {
     const { afterValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSecuritygroupAudit = await securitygroupAuditService.updateSecuritygroupAuditByAfterValueText(afterValueText, req.body);
            if (!objSecuritygroupAudit) {
                util.setError(404, `Cannot find securitygroupAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SecuritygroupAudit updated', objSecuritygroupAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

securitygroupsAuditCtrl.updateSecuritygroupAuditByDateCreated = async (req, res) => {
     const { dateCreated } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSecuritygroupAudit = await securitygroupAuditService.updateSecuritygroupAuditByDateCreated(dateCreated, req.body);
            if (!objSecuritygroupAudit) {
                util.setError(404, `Cannot find securitygroupAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SecuritygroupAudit updated', objSecuritygroupAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

securitygroupsAuditCtrl.updateSecuritygroupAuditByParentId = async (req, res) => {
     const { parentId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSecuritygroupAudit = await securitygroupAuditService.updateSecuritygroupAuditByParentId(parentId, req.body);
            if (!objSecuritygroupAudit) {
                util.setError(404, `Cannot find securitygroupAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SecuritygroupAudit updated', objSecuritygroupAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = securitygroupsAuditCtrl;
//</es-section>
