/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:42:36 GMT-0400 (Bolivia Time)
 * Time: 4:42:36
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:42:36 GMT-0400 (Bolivia Time)
 * Last time updated: 4:42:36
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const callRescheduleAuditService = require('../services/calls_reschedule_audit.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const callsRescheduleAuditCtrl = {};
callsRescheduleAuditCtrl.service = callRescheduleAuditService;


callsRescheduleAuditCtrl.getAllCallsRescheduleAudit = async (req, res) => {
    try {
        const objCallsRescheduleAudit = await callRescheduleAuditService.getAllCallsRescheduleAudit(req.query);
        if (objCallsRescheduleAudit.length > 0) {
            util.setSuccess(200, 'CallsRescheduleAudit retrieved', objCallsRescheduleAudit);
        } else {
            util.setSuccess(200, 'No callRescheduleAudit found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsRescheduleAuditCtrl.getACallRescheduleAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objCallRescheduleAudit = await callRescheduleAuditService.getACallRescheduleAudit(id, req.query);
        if (!objCallRescheduleAudit) {
            util.setError(404, `Cannot find callRescheduleAudit with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found callRescheduleAudit', objCallRescheduleAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsRescheduleAuditCtrl.addCallRescheduleAudit = async (req, res) => {
    try {
        const objCallRescheduleAudit = await callRescheduleAuditService.addCallRescheduleAudit(req.body);
        util.setSuccess(201, 'CallRescheduleAudit Added!', objCallRescheduleAudit);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsRescheduleAuditCtrl.updateCallRescheduleAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objCallRescheduleAudit = await callRescheduleAuditService.updateCallRescheduleAudit(id, req.body);
        if (!objCallRescheduleAudit) {
            util.setError(404, `Cannot find callRescheduleAudit with the id: ${id}`);
        } else {
            util.setSuccess(200, 'CallRescheduleAudit updated', objCallRescheduleAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

callsRescheduleAuditCtrl.deleteCallRescheduleAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objCallRescheduleAudit = await callRescheduleAuditService.deleteCallRescheduleAudit(id);
        if (objCallRescheduleAudit) {
            util.setSuccess(200, 'CallRescheduleAudit deleted', objCallRescheduleAudit);
        } else {
            util.setError(404, `CallRescheduleAudit with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



callsRescheduleAuditCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objCallRescheduleAudit = await callRescheduleAuditService.findOneById(id, req.query);
        if (!objCallRescheduleAudit) {
            util.setError(404, `Cannot find callRescheduleAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found callRescheduleAudit', objCallRescheduleAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsRescheduleAuditCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objCallRescheduleAudit = await callRescheduleAuditService.findOneByCreatedBy(createdBy, req.query);
        if (!objCallRescheduleAudit) {
            util.setError(404, `Cannot find callRescheduleAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found callRescheduleAudit', objCallRescheduleAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsRescheduleAuditCtrl.findOneByFieldName = async (req, res) => {
    try {
        const { fieldName } = req.params;
        const objCallRescheduleAudit = await callRescheduleAuditService.findOneByFieldName(fieldName, req.query);
        if (!objCallRescheduleAudit) {
            util.setError(404, `Cannot find callRescheduleAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found callRescheduleAudit', objCallRescheduleAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsRescheduleAuditCtrl.findOneByDataType = async (req, res) => {
    try {
        const { dataType } = req.params;
        const objCallRescheduleAudit = await callRescheduleAuditService.findOneByDataType(dataType, req.query);
        if (!objCallRescheduleAudit) {
            util.setError(404, `Cannot find callRescheduleAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found callRescheduleAudit', objCallRescheduleAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsRescheduleAuditCtrl.findOneByBeforeValueString = async (req, res) => {
    try {
        const { beforeValueString } = req.params;
        const objCallRescheduleAudit = await callRescheduleAuditService.findOneByBeforeValueString(beforeValueString, req.query);
        if (!objCallRescheduleAudit) {
            util.setError(404, `Cannot find callRescheduleAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found callRescheduleAudit', objCallRescheduleAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsRescheduleAuditCtrl.findOneByAfterValueString = async (req, res) => {
    try {
        const { afterValueString } = req.params;
        const objCallRescheduleAudit = await callRescheduleAuditService.findOneByAfterValueString(afterValueString, req.query);
        if (!objCallRescheduleAudit) {
            util.setError(404, `Cannot find callRescheduleAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found callRescheduleAudit', objCallRescheduleAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsRescheduleAuditCtrl.findOneByBeforeValueText = async (req, res) => {
    try {
        const { beforeValueText } = req.params;
        const objCallRescheduleAudit = await callRescheduleAuditService.findOneByBeforeValueText(beforeValueText, req.query);
        if (!objCallRescheduleAudit) {
            util.setError(404, `Cannot find callRescheduleAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found callRescheduleAudit', objCallRescheduleAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsRescheduleAuditCtrl.findOneByAfterValueText = async (req, res) => {
    try {
        const { afterValueText } = req.params;
        const objCallRescheduleAudit = await callRescheduleAuditService.findOneByAfterValueText(afterValueText, req.query);
        if (!objCallRescheduleAudit) {
            util.setError(404, `Cannot find callRescheduleAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found callRescheduleAudit', objCallRescheduleAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsRescheduleAuditCtrl.findOneByDateCreated = async (req, res) => {
    try {
        const { dateCreated } = req.params;
        const objCallRescheduleAudit = await callRescheduleAuditService.findOneByDateCreated(dateCreated, req.query);
        if (!objCallRescheduleAudit) {
            util.setError(404, `Cannot find callRescheduleAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found callRescheduleAudit', objCallRescheduleAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsRescheduleAuditCtrl.findOneByParentId = async (req, res) => {
    try {
        const { parentId } = req.params;
        const objCallRescheduleAudit = await callRescheduleAuditService.findOneByParentId(parentId, req.query);
        if (!objCallRescheduleAudit) {
            util.setError(404, `Cannot find callRescheduleAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found callRescheduleAudit', objCallRescheduleAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



callsRescheduleAuditCtrl.updateCallRescheduleAuditById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCallRescheduleAudit = await callRescheduleAuditService.updateCallRescheduleAuditById(id, req.body);
            if (!objCallRescheduleAudit) {
                util.setError(404, `Cannot find callRescheduleAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CallRescheduleAudit updated', objCallRescheduleAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

callsRescheduleAuditCtrl.updateCallRescheduleAuditByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCallRescheduleAudit = await callRescheduleAuditService.updateCallRescheduleAuditByCreatedBy(createdBy, req.body);
            if (!objCallRescheduleAudit) {
                util.setError(404, `Cannot find callRescheduleAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CallRescheduleAudit updated', objCallRescheduleAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

callsRescheduleAuditCtrl.updateCallRescheduleAuditByFieldName = async (req, res) => {
     const { fieldName } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCallRescheduleAudit = await callRescheduleAuditService.updateCallRescheduleAuditByFieldName(fieldName, req.body);
            if (!objCallRescheduleAudit) {
                util.setError(404, `Cannot find callRescheduleAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CallRescheduleAudit updated', objCallRescheduleAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

callsRescheduleAuditCtrl.updateCallRescheduleAuditByDataType = async (req, res) => {
     const { dataType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCallRescheduleAudit = await callRescheduleAuditService.updateCallRescheduleAuditByDataType(dataType, req.body);
            if (!objCallRescheduleAudit) {
                util.setError(404, `Cannot find callRescheduleAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CallRescheduleAudit updated', objCallRescheduleAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

callsRescheduleAuditCtrl.updateCallRescheduleAuditByBeforeValueString = async (req, res) => {
     const { beforeValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCallRescheduleAudit = await callRescheduleAuditService.updateCallRescheduleAuditByBeforeValueString(beforeValueString, req.body);
            if (!objCallRescheduleAudit) {
                util.setError(404, `Cannot find callRescheduleAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CallRescheduleAudit updated', objCallRescheduleAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

callsRescheduleAuditCtrl.updateCallRescheduleAuditByAfterValueString = async (req, res) => {
     const { afterValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCallRescheduleAudit = await callRescheduleAuditService.updateCallRescheduleAuditByAfterValueString(afterValueString, req.body);
            if (!objCallRescheduleAudit) {
                util.setError(404, `Cannot find callRescheduleAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CallRescheduleAudit updated', objCallRescheduleAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

callsRescheduleAuditCtrl.updateCallRescheduleAuditByBeforeValueText = async (req, res) => {
     const { beforeValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCallRescheduleAudit = await callRescheduleAuditService.updateCallRescheduleAuditByBeforeValueText(beforeValueText, req.body);
            if (!objCallRescheduleAudit) {
                util.setError(404, `Cannot find callRescheduleAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CallRescheduleAudit updated', objCallRescheduleAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

callsRescheduleAuditCtrl.updateCallRescheduleAuditByAfterValueText = async (req, res) => {
     const { afterValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCallRescheduleAudit = await callRescheduleAuditService.updateCallRescheduleAuditByAfterValueText(afterValueText, req.body);
            if (!objCallRescheduleAudit) {
                util.setError(404, `Cannot find callRescheduleAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CallRescheduleAudit updated', objCallRescheduleAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

callsRescheduleAuditCtrl.updateCallRescheduleAuditByDateCreated = async (req, res) => {
     const { dateCreated } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCallRescheduleAudit = await callRescheduleAuditService.updateCallRescheduleAuditByDateCreated(dateCreated, req.body);
            if (!objCallRescheduleAudit) {
                util.setError(404, `Cannot find callRescheduleAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CallRescheduleAudit updated', objCallRescheduleAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

callsRescheduleAuditCtrl.updateCallRescheduleAuditByParentId = async (req, res) => {
     const { parentId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCallRescheduleAudit = await callRescheduleAuditService.updateCallRescheduleAuditByParentId(parentId, req.body);
            if (!objCallRescheduleAudit) {
                util.setError(404, `Cannot find callRescheduleAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CallRescheduleAudit updated', objCallRescheduleAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = callsRescheduleAuditCtrl;
//</es-section>
