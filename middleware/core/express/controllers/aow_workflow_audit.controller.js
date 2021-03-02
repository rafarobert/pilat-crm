/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:29 GMT-0400 (Bolivia Time)
 * Time: 14:0:29
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:29 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:29
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const aowWorkflowAuditService = require('../services/aow_workflow_audit.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const aowWorkflowAuditCtrl = {};
aowWorkflowAuditCtrl.service = aowWorkflowAuditService;


aowWorkflowAuditCtrl.getAllAowWorkflowAudit = async (req, res) => {
    try {
        const objAowWorkflowAudit = await aowWorkflowAuditService.getAllAowWorkflowAudit(req.query);
        if (objAowWorkflowAudit.length > 0) {
            util.setSuccess(200, 'AowWorkflowAudit retrieved', objAowWorkflowAudit);
        } else {
            util.setSuccess(200, 'No aowWorkflowAudit found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aowWorkflowAuditCtrl.getAAowWorkflowAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAowWorkflowAudit = await aowWorkflowAuditService.getAAowWorkflowAudit(id, req.query);
        if (!objAowWorkflowAudit) {
            util.setError(404, `Cannot find aowWorkflowAudit with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found aowWorkflowAudit', objAowWorkflowAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aowWorkflowAuditCtrl.addAowWorkflowAudit = async (req, res) => {
    try {
        const objAowWorkflowAudit = await aowWorkflowAuditService.addAowWorkflowAudit(req.body);
        util.setSuccess(201, 'AowWorkflowAudit Added!', objAowWorkflowAudit);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aowWorkflowAuditCtrl.updateAowWorkflowAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAowWorkflowAudit = await aowWorkflowAuditService.updateAowWorkflowAudit(id, req.body);
        if (!objAowWorkflowAudit) {
            util.setError(404, `Cannot find aowWorkflowAudit with the id: ${id}`);
        } else {
            util.setSuccess(200, 'AowWorkflowAudit updated', objAowWorkflowAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

aowWorkflowAuditCtrl.deleteAowWorkflowAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objAowWorkflowAudit = await aowWorkflowAuditService.deleteAowWorkflowAudit(id);
        if (objAowWorkflowAudit) {
            util.setSuccess(200, 'AowWorkflowAudit deleted', objAowWorkflowAudit);
        } else {
            util.setError(404, `AowWorkflowAudit with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



aowWorkflowAuditCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objAowWorkflowAudit = await aowWorkflowAuditService.findOneById(id, req.query);
        if (!objAowWorkflowAudit) {
            util.setError(404, `Cannot find aowWorkflowAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aowWorkflowAudit', objAowWorkflowAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aowWorkflowAuditCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objAowWorkflowAudit = await aowWorkflowAuditService.findOneByCreatedBy(createdBy, req.query);
        if (!objAowWorkflowAudit) {
            util.setError(404, `Cannot find aowWorkflowAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aowWorkflowAudit', objAowWorkflowAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aowWorkflowAuditCtrl.findOneByFieldName = async (req, res) => {
    try {
        const { fieldName } = req.params;
        const objAowWorkflowAudit = await aowWorkflowAuditService.findOneByFieldName(fieldName, req.query);
        if (!objAowWorkflowAudit) {
            util.setError(404, `Cannot find aowWorkflowAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aowWorkflowAudit', objAowWorkflowAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aowWorkflowAuditCtrl.findOneByDataType = async (req, res) => {
    try {
        const { dataType } = req.params;
        const objAowWorkflowAudit = await aowWorkflowAuditService.findOneByDataType(dataType, req.query);
        if (!objAowWorkflowAudit) {
            util.setError(404, `Cannot find aowWorkflowAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aowWorkflowAudit', objAowWorkflowAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aowWorkflowAuditCtrl.findOneByBeforeValueString = async (req, res) => {
    try {
        const { beforeValueString } = req.params;
        const objAowWorkflowAudit = await aowWorkflowAuditService.findOneByBeforeValueString(beforeValueString, req.query);
        if (!objAowWorkflowAudit) {
            util.setError(404, `Cannot find aowWorkflowAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aowWorkflowAudit', objAowWorkflowAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aowWorkflowAuditCtrl.findOneByAfterValueString = async (req, res) => {
    try {
        const { afterValueString } = req.params;
        const objAowWorkflowAudit = await aowWorkflowAuditService.findOneByAfterValueString(afterValueString, req.query);
        if (!objAowWorkflowAudit) {
            util.setError(404, `Cannot find aowWorkflowAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aowWorkflowAudit', objAowWorkflowAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aowWorkflowAuditCtrl.findOneByBeforeValueText = async (req, res) => {
    try {
        const { beforeValueText } = req.params;
        const objAowWorkflowAudit = await aowWorkflowAuditService.findOneByBeforeValueText(beforeValueText, req.query);
        if (!objAowWorkflowAudit) {
            util.setError(404, `Cannot find aowWorkflowAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aowWorkflowAudit', objAowWorkflowAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aowWorkflowAuditCtrl.findOneByAfterValueText = async (req, res) => {
    try {
        const { afterValueText } = req.params;
        const objAowWorkflowAudit = await aowWorkflowAuditService.findOneByAfterValueText(afterValueText, req.query);
        if (!objAowWorkflowAudit) {
            util.setError(404, `Cannot find aowWorkflowAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aowWorkflowAudit', objAowWorkflowAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aowWorkflowAuditCtrl.findOneByDateCreated = async (req, res) => {
    try {
        const { dateCreated } = req.params;
        const objAowWorkflowAudit = await aowWorkflowAuditService.findOneByDateCreated(dateCreated, req.query);
        if (!objAowWorkflowAudit) {
            util.setError(404, `Cannot find aowWorkflowAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aowWorkflowAudit', objAowWorkflowAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aowWorkflowAuditCtrl.findOneByParentId = async (req, res) => {
    try {
        const { parentId } = req.params;
        const objAowWorkflowAudit = await aowWorkflowAuditService.findOneByParentId(parentId, req.query);
        if (!objAowWorkflowAudit) {
            util.setError(404, `Cannot find aowWorkflowAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aowWorkflowAudit', objAowWorkflowAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



aowWorkflowAuditCtrl.updateAowWorkflowAuditById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAowWorkflowAudit = await aowWorkflowAuditService.updateAowWorkflowAuditById(id, req.body);
            if (!objAowWorkflowAudit) {
                util.setError(404, `Cannot find aowWorkflowAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AowWorkflowAudit updated', objAowWorkflowAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aowWorkflowAuditCtrl.updateAowWorkflowAuditByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAowWorkflowAudit = await aowWorkflowAuditService.updateAowWorkflowAuditByCreatedBy(createdBy, req.body);
            if (!objAowWorkflowAudit) {
                util.setError(404, `Cannot find aowWorkflowAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AowWorkflowAudit updated', objAowWorkflowAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aowWorkflowAuditCtrl.updateAowWorkflowAuditByFieldName = async (req, res) => {
     const { fieldName } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAowWorkflowAudit = await aowWorkflowAuditService.updateAowWorkflowAuditByFieldName(fieldName, req.body);
            if (!objAowWorkflowAudit) {
                util.setError(404, `Cannot find aowWorkflowAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AowWorkflowAudit updated', objAowWorkflowAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aowWorkflowAuditCtrl.updateAowWorkflowAuditByDataType = async (req, res) => {
     const { dataType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAowWorkflowAudit = await aowWorkflowAuditService.updateAowWorkflowAuditByDataType(dataType, req.body);
            if (!objAowWorkflowAudit) {
                util.setError(404, `Cannot find aowWorkflowAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AowWorkflowAudit updated', objAowWorkflowAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aowWorkflowAuditCtrl.updateAowWorkflowAuditByBeforeValueString = async (req, res) => {
     const { beforeValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAowWorkflowAudit = await aowWorkflowAuditService.updateAowWorkflowAuditByBeforeValueString(beforeValueString, req.body);
            if (!objAowWorkflowAudit) {
                util.setError(404, `Cannot find aowWorkflowAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AowWorkflowAudit updated', objAowWorkflowAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aowWorkflowAuditCtrl.updateAowWorkflowAuditByAfterValueString = async (req, res) => {
     const { afterValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAowWorkflowAudit = await aowWorkflowAuditService.updateAowWorkflowAuditByAfterValueString(afterValueString, req.body);
            if (!objAowWorkflowAudit) {
                util.setError(404, `Cannot find aowWorkflowAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AowWorkflowAudit updated', objAowWorkflowAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aowWorkflowAuditCtrl.updateAowWorkflowAuditByBeforeValueText = async (req, res) => {
     const { beforeValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAowWorkflowAudit = await aowWorkflowAuditService.updateAowWorkflowAuditByBeforeValueText(beforeValueText, req.body);
            if (!objAowWorkflowAudit) {
                util.setError(404, `Cannot find aowWorkflowAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AowWorkflowAudit updated', objAowWorkflowAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aowWorkflowAuditCtrl.updateAowWorkflowAuditByAfterValueText = async (req, res) => {
     const { afterValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAowWorkflowAudit = await aowWorkflowAuditService.updateAowWorkflowAuditByAfterValueText(afterValueText, req.body);
            if (!objAowWorkflowAudit) {
                util.setError(404, `Cannot find aowWorkflowAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AowWorkflowAudit updated', objAowWorkflowAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aowWorkflowAuditCtrl.updateAowWorkflowAuditByDateCreated = async (req, res) => {
     const { dateCreated } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAowWorkflowAudit = await aowWorkflowAuditService.updateAowWorkflowAuditByDateCreated(dateCreated, req.body);
            if (!objAowWorkflowAudit) {
                util.setError(404, `Cannot find aowWorkflowAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AowWorkflowAudit updated', objAowWorkflowAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aowWorkflowAuditCtrl.updateAowWorkflowAuditByParentId = async (req, res) => {
     const { parentId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAowWorkflowAudit = await aowWorkflowAuditService.updateAowWorkflowAuditByParentId(parentId, req.body);
            if (!objAowWorkflowAudit) {
                util.setError(404, `Cannot find aowWorkflowAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AowWorkflowAudit updated', objAowWorkflowAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = aowWorkflowAuditCtrl;
//</es-section>
