/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:35:13 GMT-0400 (Bolivia Time)
 * Time: 15:35:13
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:35:13 GMT-0400 (Bolivia Time)
 * Last time updated: 15:35:13
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const aopCaseUpdateAuditService = require('../services/aop_case_updates_audit.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const aopCaseUpdatesAuditCtrl = {};
aopCaseUpdatesAuditCtrl.service = aopCaseUpdateAuditService;


aopCaseUpdatesAuditCtrl.getAllAopCaseUpdatesAudit = async (req, res) => {
    try {
        const objAopCaseUpdatesAudit = await aopCaseUpdateAuditService.getAllAopCaseUpdatesAudit(req.query);
        if (objAopCaseUpdatesAudit.length > 0) {
            util.setSuccess(200, 'AopCaseUpdatesAudit retrieved', objAopCaseUpdatesAudit);
        } else {
            util.setSuccess(200, 'No aopCaseUpdateAudit found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aopCaseUpdatesAuditCtrl.getAAopCaseUpdateAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAopCaseUpdateAudit = await aopCaseUpdateAuditService.getAAopCaseUpdateAudit(id, req.query);
        if (!objAopCaseUpdateAudit) {
            util.setError(404, `Cannot find aopCaseUpdateAudit with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found aopCaseUpdateAudit', objAopCaseUpdateAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aopCaseUpdatesAuditCtrl.addAopCaseUpdateAudit = async (req, res) => {
    try {
        const objAopCaseUpdateAudit = await aopCaseUpdateAuditService.addAopCaseUpdateAudit(req.body);
        util.setSuccess(201, 'AopCaseUpdateAudit Added!', objAopCaseUpdateAudit);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aopCaseUpdatesAuditCtrl.updateAopCaseUpdateAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAopCaseUpdateAudit = await aopCaseUpdateAuditService.updateAopCaseUpdateAudit(id, req.body);
        if (!objAopCaseUpdateAudit) {
            util.setError(404, `Cannot find aopCaseUpdateAudit with the id: ${id}`);
        } else {
            util.setSuccess(200, 'AopCaseUpdateAudit updated', objAopCaseUpdateAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

aopCaseUpdatesAuditCtrl.deleteAopCaseUpdateAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objAopCaseUpdateAudit = await aopCaseUpdateAuditService.deleteAopCaseUpdateAudit(id);
        if (objAopCaseUpdateAudit) {
            util.setSuccess(200, 'AopCaseUpdateAudit deleted', objAopCaseUpdateAudit);
        } else {
            util.setError(404, `AopCaseUpdateAudit with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



aopCaseUpdatesAuditCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objAopCaseUpdateAudit = await aopCaseUpdateAuditService.findOneById(id, req.query);
        if (!objAopCaseUpdateAudit) {
            util.setError(404, `Cannot find aopCaseUpdateAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aopCaseUpdateAudit', objAopCaseUpdateAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aopCaseUpdatesAuditCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objAopCaseUpdateAudit = await aopCaseUpdateAuditService.findOneByCreatedBy(createdBy, req.query);
        if (!objAopCaseUpdateAudit) {
            util.setError(404, `Cannot find aopCaseUpdateAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aopCaseUpdateAudit', objAopCaseUpdateAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aopCaseUpdatesAuditCtrl.findOneByFieldName = async (req, res) => {
    try {
        const { fieldName } = req.params;
        const objAopCaseUpdateAudit = await aopCaseUpdateAuditService.findOneByFieldName(fieldName, req.query);
        if (!objAopCaseUpdateAudit) {
            util.setError(404, `Cannot find aopCaseUpdateAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aopCaseUpdateAudit', objAopCaseUpdateAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aopCaseUpdatesAuditCtrl.findOneByDataType = async (req, res) => {
    try {
        const { dataType } = req.params;
        const objAopCaseUpdateAudit = await aopCaseUpdateAuditService.findOneByDataType(dataType, req.query);
        if (!objAopCaseUpdateAudit) {
            util.setError(404, `Cannot find aopCaseUpdateAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aopCaseUpdateAudit', objAopCaseUpdateAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aopCaseUpdatesAuditCtrl.findOneByBeforeValueString = async (req, res) => {
    try {
        const { beforeValueString } = req.params;
        const objAopCaseUpdateAudit = await aopCaseUpdateAuditService.findOneByBeforeValueString(beforeValueString, req.query);
        if (!objAopCaseUpdateAudit) {
            util.setError(404, `Cannot find aopCaseUpdateAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aopCaseUpdateAudit', objAopCaseUpdateAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aopCaseUpdatesAuditCtrl.findOneByAfterValueString = async (req, res) => {
    try {
        const { afterValueString } = req.params;
        const objAopCaseUpdateAudit = await aopCaseUpdateAuditService.findOneByAfterValueString(afterValueString, req.query);
        if (!objAopCaseUpdateAudit) {
            util.setError(404, `Cannot find aopCaseUpdateAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aopCaseUpdateAudit', objAopCaseUpdateAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aopCaseUpdatesAuditCtrl.findOneByBeforeValueText = async (req, res) => {
    try {
        const { beforeValueText } = req.params;
        const objAopCaseUpdateAudit = await aopCaseUpdateAuditService.findOneByBeforeValueText(beforeValueText, req.query);
        if (!objAopCaseUpdateAudit) {
            util.setError(404, `Cannot find aopCaseUpdateAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aopCaseUpdateAudit', objAopCaseUpdateAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aopCaseUpdatesAuditCtrl.findOneByAfterValueText = async (req, res) => {
    try {
        const { afterValueText } = req.params;
        const objAopCaseUpdateAudit = await aopCaseUpdateAuditService.findOneByAfterValueText(afterValueText, req.query);
        if (!objAopCaseUpdateAudit) {
            util.setError(404, `Cannot find aopCaseUpdateAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aopCaseUpdateAudit', objAopCaseUpdateAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aopCaseUpdatesAuditCtrl.findOneByDateCreated = async (req, res) => {
    try {
        const { dateCreated } = req.params;
        const objAopCaseUpdateAudit = await aopCaseUpdateAuditService.findOneByDateCreated(dateCreated, req.query);
        if (!objAopCaseUpdateAudit) {
            util.setError(404, `Cannot find aopCaseUpdateAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aopCaseUpdateAudit', objAopCaseUpdateAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aopCaseUpdatesAuditCtrl.findOneByParentId = async (req, res) => {
    try {
        const { parentId } = req.params;
        const objAopCaseUpdateAudit = await aopCaseUpdateAuditService.findOneByParentId(parentId, req.query);
        if (!objAopCaseUpdateAudit) {
            util.setError(404, `Cannot find aopCaseUpdateAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aopCaseUpdateAudit', objAopCaseUpdateAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



aopCaseUpdatesAuditCtrl.updateAopCaseUpdateAuditById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAopCaseUpdateAudit = await aopCaseUpdateAuditService.updateAopCaseUpdateAuditById(id, req.body);
            if (!objAopCaseUpdateAudit) {
                util.setError(404, `Cannot find aopCaseUpdateAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AopCaseUpdateAudit updated', objAopCaseUpdateAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aopCaseUpdatesAuditCtrl.updateAopCaseUpdateAuditByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAopCaseUpdateAudit = await aopCaseUpdateAuditService.updateAopCaseUpdateAuditByCreatedBy(createdBy, req.body);
            if (!objAopCaseUpdateAudit) {
                util.setError(404, `Cannot find aopCaseUpdateAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AopCaseUpdateAudit updated', objAopCaseUpdateAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aopCaseUpdatesAuditCtrl.updateAopCaseUpdateAuditByFieldName = async (req, res) => {
     const { fieldName } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAopCaseUpdateAudit = await aopCaseUpdateAuditService.updateAopCaseUpdateAuditByFieldName(fieldName, req.body);
            if (!objAopCaseUpdateAudit) {
                util.setError(404, `Cannot find aopCaseUpdateAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AopCaseUpdateAudit updated', objAopCaseUpdateAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aopCaseUpdatesAuditCtrl.updateAopCaseUpdateAuditByDataType = async (req, res) => {
     const { dataType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAopCaseUpdateAudit = await aopCaseUpdateAuditService.updateAopCaseUpdateAuditByDataType(dataType, req.body);
            if (!objAopCaseUpdateAudit) {
                util.setError(404, `Cannot find aopCaseUpdateAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AopCaseUpdateAudit updated', objAopCaseUpdateAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aopCaseUpdatesAuditCtrl.updateAopCaseUpdateAuditByBeforeValueString = async (req, res) => {
     const { beforeValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAopCaseUpdateAudit = await aopCaseUpdateAuditService.updateAopCaseUpdateAuditByBeforeValueString(beforeValueString, req.body);
            if (!objAopCaseUpdateAudit) {
                util.setError(404, `Cannot find aopCaseUpdateAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AopCaseUpdateAudit updated', objAopCaseUpdateAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aopCaseUpdatesAuditCtrl.updateAopCaseUpdateAuditByAfterValueString = async (req, res) => {
     const { afterValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAopCaseUpdateAudit = await aopCaseUpdateAuditService.updateAopCaseUpdateAuditByAfterValueString(afterValueString, req.body);
            if (!objAopCaseUpdateAudit) {
                util.setError(404, `Cannot find aopCaseUpdateAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AopCaseUpdateAudit updated', objAopCaseUpdateAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aopCaseUpdatesAuditCtrl.updateAopCaseUpdateAuditByBeforeValueText = async (req, res) => {
     const { beforeValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAopCaseUpdateAudit = await aopCaseUpdateAuditService.updateAopCaseUpdateAuditByBeforeValueText(beforeValueText, req.body);
            if (!objAopCaseUpdateAudit) {
                util.setError(404, `Cannot find aopCaseUpdateAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AopCaseUpdateAudit updated', objAopCaseUpdateAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aopCaseUpdatesAuditCtrl.updateAopCaseUpdateAuditByAfterValueText = async (req, res) => {
     const { afterValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAopCaseUpdateAudit = await aopCaseUpdateAuditService.updateAopCaseUpdateAuditByAfterValueText(afterValueText, req.body);
            if (!objAopCaseUpdateAudit) {
                util.setError(404, `Cannot find aopCaseUpdateAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AopCaseUpdateAudit updated', objAopCaseUpdateAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aopCaseUpdatesAuditCtrl.updateAopCaseUpdateAuditByDateCreated = async (req, res) => {
     const { dateCreated } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAopCaseUpdateAudit = await aopCaseUpdateAuditService.updateAopCaseUpdateAuditByDateCreated(dateCreated, req.body);
            if (!objAopCaseUpdateAudit) {
                util.setError(404, `Cannot find aopCaseUpdateAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AopCaseUpdateAudit updated', objAopCaseUpdateAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aopCaseUpdatesAuditCtrl.updateAopCaseUpdateAuditByParentId = async (req, res) => {
     const { parentId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAopCaseUpdateAudit = await aopCaseUpdateAuditService.updateAopCaseUpdateAuditByParentId(parentId, req.body);
            if (!objAopCaseUpdateAudit) {
                util.setError(404, `Cannot find aopCaseUpdateAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AopCaseUpdateAudit updated', objAopCaseUpdateAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = aopCaseUpdatesAuditCtrl;
//</es-section>
