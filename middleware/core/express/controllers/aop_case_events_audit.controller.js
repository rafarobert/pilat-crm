/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:09 GMT-0400 (Bolivia Time)
 * Time: 14:0:9
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:09 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:9
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const aopCaseEventAuditService = require('../services/aop_case_events_audit.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const aopCaseEventsAuditCtrl = {};
aopCaseEventsAuditCtrl.service = aopCaseEventAuditService;


aopCaseEventsAuditCtrl.getAllAopCaseEventsAudit = async (req, res) => {
    try {
        const objAopCaseEventsAudit = await aopCaseEventAuditService.getAllAopCaseEventsAudit(req.query);
        if (objAopCaseEventsAudit.length > 0) {
            util.setSuccess(200, 'AopCaseEventsAudit retrieved', objAopCaseEventsAudit);
        } else {
            util.setSuccess(200, 'No aopCaseEventAudit found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aopCaseEventsAuditCtrl.getAAopCaseEventAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAopCaseEventAudit = await aopCaseEventAuditService.getAAopCaseEventAudit(id, req.query);
        if (!objAopCaseEventAudit) {
            util.setError(404, `Cannot find aopCaseEventAudit with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found aopCaseEventAudit', objAopCaseEventAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aopCaseEventsAuditCtrl.addAopCaseEventAudit = async (req, res) => {
    try {
        const objAopCaseEventAudit = await aopCaseEventAuditService.addAopCaseEventAudit(req.body);
        util.setSuccess(201, 'AopCaseEventAudit Added!', objAopCaseEventAudit);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aopCaseEventsAuditCtrl.updateAopCaseEventAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAopCaseEventAudit = await aopCaseEventAuditService.updateAopCaseEventAudit(id, req.body);
        if (!objAopCaseEventAudit) {
            util.setError(404, `Cannot find aopCaseEventAudit with the id: ${id}`);
        } else {
            util.setSuccess(200, 'AopCaseEventAudit updated', objAopCaseEventAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

aopCaseEventsAuditCtrl.deleteAopCaseEventAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objAopCaseEventAudit = await aopCaseEventAuditService.deleteAopCaseEventAudit(id);
        if (objAopCaseEventAudit) {
            util.setSuccess(200, 'AopCaseEventAudit deleted', objAopCaseEventAudit);
        } else {
            util.setError(404, `AopCaseEventAudit with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



aopCaseEventsAuditCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objAopCaseEventAudit = await aopCaseEventAuditService.findOneById(id, req.query);
        if (!objAopCaseEventAudit) {
            util.setError(404, `Cannot find aopCaseEventAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aopCaseEventAudit', objAopCaseEventAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aopCaseEventsAuditCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objAopCaseEventAudit = await aopCaseEventAuditService.findOneByCreatedBy(createdBy, req.query);
        if (!objAopCaseEventAudit) {
            util.setError(404, `Cannot find aopCaseEventAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aopCaseEventAudit', objAopCaseEventAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aopCaseEventsAuditCtrl.findOneByFieldName = async (req, res) => {
    try {
        const { fieldName } = req.params;
        const objAopCaseEventAudit = await aopCaseEventAuditService.findOneByFieldName(fieldName, req.query);
        if (!objAopCaseEventAudit) {
            util.setError(404, `Cannot find aopCaseEventAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aopCaseEventAudit', objAopCaseEventAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aopCaseEventsAuditCtrl.findOneByDataType = async (req, res) => {
    try {
        const { dataType } = req.params;
        const objAopCaseEventAudit = await aopCaseEventAuditService.findOneByDataType(dataType, req.query);
        if (!objAopCaseEventAudit) {
            util.setError(404, `Cannot find aopCaseEventAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aopCaseEventAudit', objAopCaseEventAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aopCaseEventsAuditCtrl.findOneByBeforeValueString = async (req, res) => {
    try {
        const { beforeValueString } = req.params;
        const objAopCaseEventAudit = await aopCaseEventAuditService.findOneByBeforeValueString(beforeValueString, req.query);
        if (!objAopCaseEventAudit) {
            util.setError(404, `Cannot find aopCaseEventAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aopCaseEventAudit', objAopCaseEventAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aopCaseEventsAuditCtrl.findOneByAfterValueString = async (req, res) => {
    try {
        const { afterValueString } = req.params;
        const objAopCaseEventAudit = await aopCaseEventAuditService.findOneByAfterValueString(afterValueString, req.query);
        if (!objAopCaseEventAudit) {
            util.setError(404, `Cannot find aopCaseEventAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aopCaseEventAudit', objAopCaseEventAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aopCaseEventsAuditCtrl.findOneByBeforeValueText = async (req, res) => {
    try {
        const { beforeValueText } = req.params;
        const objAopCaseEventAudit = await aopCaseEventAuditService.findOneByBeforeValueText(beforeValueText, req.query);
        if (!objAopCaseEventAudit) {
            util.setError(404, `Cannot find aopCaseEventAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aopCaseEventAudit', objAopCaseEventAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aopCaseEventsAuditCtrl.findOneByAfterValueText = async (req, res) => {
    try {
        const { afterValueText } = req.params;
        const objAopCaseEventAudit = await aopCaseEventAuditService.findOneByAfterValueText(afterValueText, req.query);
        if (!objAopCaseEventAudit) {
            util.setError(404, `Cannot find aopCaseEventAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aopCaseEventAudit', objAopCaseEventAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aopCaseEventsAuditCtrl.findOneByDateCreated = async (req, res) => {
    try {
        const { dateCreated } = req.params;
        const objAopCaseEventAudit = await aopCaseEventAuditService.findOneByDateCreated(dateCreated, req.query);
        if (!objAopCaseEventAudit) {
            util.setError(404, `Cannot find aopCaseEventAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aopCaseEventAudit', objAopCaseEventAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aopCaseEventsAuditCtrl.findOneByParentId = async (req, res) => {
    try {
        const { parentId } = req.params;
        const objAopCaseEventAudit = await aopCaseEventAuditService.findOneByParentId(parentId, req.query);
        if (!objAopCaseEventAudit) {
            util.setError(404, `Cannot find aopCaseEventAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aopCaseEventAudit', objAopCaseEventAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



aopCaseEventsAuditCtrl.updateAopCaseEventAuditById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAopCaseEventAudit = await aopCaseEventAuditService.updateAopCaseEventAuditById(id, req.body);
            if (!objAopCaseEventAudit) {
                util.setError(404, `Cannot find aopCaseEventAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AopCaseEventAudit updated', objAopCaseEventAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aopCaseEventsAuditCtrl.updateAopCaseEventAuditByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAopCaseEventAudit = await aopCaseEventAuditService.updateAopCaseEventAuditByCreatedBy(createdBy, req.body);
            if (!objAopCaseEventAudit) {
                util.setError(404, `Cannot find aopCaseEventAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AopCaseEventAudit updated', objAopCaseEventAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aopCaseEventsAuditCtrl.updateAopCaseEventAuditByFieldName = async (req, res) => {
     const { fieldName } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAopCaseEventAudit = await aopCaseEventAuditService.updateAopCaseEventAuditByFieldName(fieldName, req.body);
            if (!objAopCaseEventAudit) {
                util.setError(404, `Cannot find aopCaseEventAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AopCaseEventAudit updated', objAopCaseEventAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aopCaseEventsAuditCtrl.updateAopCaseEventAuditByDataType = async (req, res) => {
     const { dataType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAopCaseEventAudit = await aopCaseEventAuditService.updateAopCaseEventAuditByDataType(dataType, req.body);
            if (!objAopCaseEventAudit) {
                util.setError(404, `Cannot find aopCaseEventAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AopCaseEventAudit updated', objAopCaseEventAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aopCaseEventsAuditCtrl.updateAopCaseEventAuditByBeforeValueString = async (req, res) => {
     const { beforeValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAopCaseEventAudit = await aopCaseEventAuditService.updateAopCaseEventAuditByBeforeValueString(beforeValueString, req.body);
            if (!objAopCaseEventAudit) {
                util.setError(404, `Cannot find aopCaseEventAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AopCaseEventAudit updated', objAopCaseEventAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aopCaseEventsAuditCtrl.updateAopCaseEventAuditByAfterValueString = async (req, res) => {
     const { afterValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAopCaseEventAudit = await aopCaseEventAuditService.updateAopCaseEventAuditByAfterValueString(afterValueString, req.body);
            if (!objAopCaseEventAudit) {
                util.setError(404, `Cannot find aopCaseEventAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AopCaseEventAudit updated', objAopCaseEventAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aopCaseEventsAuditCtrl.updateAopCaseEventAuditByBeforeValueText = async (req, res) => {
     const { beforeValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAopCaseEventAudit = await aopCaseEventAuditService.updateAopCaseEventAuditByBeforeValueText(beforeValueText, req.body);
            if (!objAopCaseEventAudit) {
                util.setError(404, `Cannot find aopCaseEventAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AopCaseEventAudit updated', objAopCaseEventAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aopCaseEventsAuditCtrl.updateAopCaseEventAuditByAfterValueText = async (req, res) => {
     const { afterValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAopCaseEventAudit = await aopCaseEventAuditService.updateAopCaseEventAuditByAfterValueText(afterValueText, req.body);
            if (!objAopCaseEventAudit) {
                util.setError(404, `Cannot find aopCaseEventAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AopCaseEventAudit updated', objAopCaseEventAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aopCaseEventsAuditCtrl.updateAopCaseEventAuditByDateCreated = async (req, res) => {
     const { dateCreated } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAopCaseEventAudit = await aopCaseEventAuditService.updateAopCaseEventAuditByDateCreated(dateCreated, req.body);
            if (!objAopCaseEventAudit) {
                util.setError(404, `Cannot find aopCaseEventAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AopCaseEventAudit updated', objAopCaseEventAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aopCaseEventsAuditCtrl.updateAopCaseEventAuditByParentId = async (req, res) => {
     const { parentId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAopCaseEventAudit = await aopCaseEventAuditService.updateAopCaseEventAuditByParentId(parentId, req.body);
            if (!objAopCaseEventAudit) {
                util.setError(404, `Cannot find aopCaseEventAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AopCaseEventAudit updated', objAopCaseEventAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = aopCaseEventsAuditCtrl;
//</es-section>
