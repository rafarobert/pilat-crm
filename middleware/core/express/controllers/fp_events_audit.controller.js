/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:37:19 GMT-0400 (Bolivia Time)
 * Time: 18:37:19
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:37:19 GMT-0400 (Bolivia Time)
 * Last time updated: 18:37:19
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const fpEventAuditService = require('../services/fp_events_audit.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const fpEventsAuditCtrl = {};
fpEventsAuditCtrl.service = fpEventAuditService;


fpEventsAuditCtrl.getAllFpEventsAudit = async (req, res) => {
    try {
        const objFpEventsAudit = await fpEventAuditService.getAllFpEventsAudit(req.query);
        if (objFpEventsAudit.length > 0) {
            util.setSuccess(200, 'FpEventsAudit retrieved', objFpEventsAudit);
        } else {
            util.setSuccess(200, 'No fpEventAudit found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventsAuditCtrl.getAFpEventAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objFpEventAudit = await fpEventAuditService.getAFpEventAudit(id, req.query);
        if (!objFpEventAudit) {
            util.setError(404, `Cannot find fpEventAudit with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found fpEventAudit', objFpEventAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventsAuditCtrl.addFpEventAudit = async (req, res) => {
    try {
        const objFpEventAudit = await fpEventAuditService.addFpEventAudit(req.body);
        util.setSuccess(201, 'FpEventAudit Added!', objFpEventAudit);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventsAuditCtrl.updateFpEventAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objFpEventAudit = await fpEventAuditService.updateFpEventAudit(id, req.body);
        if (!objFpEventAudit) {
            util.setError(404, `Cannot find fpEventAudit with the id: ${id}`);
        } else {
            util.setSuccess(200, 'FpEventAudit updated', objFpEventAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

fpEventsAuditCtrl.deleteFpEventAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objFpEventAudit = await fpEventAuditService.deleteFpEventAudit(id);
        if (objFpEventAudit) {
            util.setSuccess(200, 'FpEventAudit deleted', objFpEventAudit);
        } else {
            util.setError(404, `FpEventAudit with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



fpEventsAuditCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objFpEventAudit = await fpEventAuditService.findOneById(id, req.query);
        if (!objFpEventAudit) {
            util.setError(404, `Cannot find fpEventAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEventAudit', objFpEventAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventsAuditCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objFpEventAudit = await fpEventAuditService.findOneByCreatedBy(createdBy, req.query);
        if (!objFpEventAudit) {
            util.setError(404, `Cannot find fpEventAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEventAudit', objFpEventAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventsAuditCtrl.findOneByFieldName = async (req, res) => {
    try {
        const { fieldName } = req.params;
        const objFpEventAudit = await fpEventAuditService.findOneByFieldName(fieldName, req.query);
        if (!objFpEventAudit) {
            util.setError(404, `Cannot find fpEventAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEventAudit', objFpEventAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventsAuditCtrl.findOneByDataType = async (req, res) => {
    try {
        const { dataType } = req.params;
        const objFpEventAudit = await fpEventAuditService.findOneByDataType(dataType, req.query);
        if (!objFpEventAudit) {
            util.setError(404, `Cannot find fpEventAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEventAudit', objFpEventAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventsAuditCtrl.findOneByBeforeValueString = async (req, res) => {
    try {
        const { beforeValueString } = req.params;
        const objFpEventAudit = await fpEventAuditService.findOneByBeforeValueString(beforeValueString, req.query);
        if (!objFpEventAudit) {
            util.setError(404, `Cannot find fpEventAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEventAudit', objFpEventAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventsAuditCtrl.findOneByAfterValueString = async (req, res) => {
    try {
        const { afterValueString } = req.params;
        const objFpEventAudit = await fpEventAuditService.findOneByAfterValueString(afterValueString, req.query);
        if (!objFpEventAudit) {
            util.setError(404, `Cannot find fpEventAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEventAudit', objFpEventAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventsAuditCtrl.findOneByBeforeValueText = async (req, res) => {
    try {
        const { beforeValueText } = req.params;
        const objFpEventAudit = await fpEventAuditService.findOneByBeforeValueText(beforeValueText, req.query);
        if (!objFpEventAudit) {
            util.setError(404, `Cannot find fpEventAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEventAudit', objFpEventAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventsAuditCtrl.findOneByAfterValueText = async (req, res) => {
    try {
        const { afterValueText } = req.params;
        const objFpEventAudit = await fpEventAuditService.findOneByAfterValueText(afterValueText, req.query);
        if (!objFpEventAudit) {
            util.setError(404, `Cannot find fpEventAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEventAudit', objFpEventAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventsAuditCtrl.findOneByDateCreated = async (req, res) => {
    try {
        const { dateCreated } = req.params;
        const objFpEventAudit = await fpEventAuditService.findOneByDateCreated(dateCreated, req.query);
        if (!objFpEventAudit) {
            util.setError(404, `Cannot find fpEventAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEventAudit', objFpEventAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventsAuditCtrl.findOneByParentId = async (req, res) => {
    try {
        const { parentId } = req.params;
        const objFpEventAudit = await fpEventAuditService.findOneByParentId(parentId, req.query);
        if (!objFpEventAudit) {
            util.setError(404, `Cannot find fpEventAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEventAudit', objFpEventAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



fpEventsAuditCtrl.updateFpEventAuditById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objFpEventAudit = await fpEventAuditService.updateFpEventAuditById(id, req.body);
            if (!objFpEventAudit) {
                util.setError(404, `Cannot find fpEventAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEventAudit updated', objFpEventAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fpEventsAuditCtrl.updateFpEventAuditByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objFpEventAudit = await fpEventAuditService.updateFpEventAuditByCreatedBy(createdBy, req.body);
            if (!objFpEventAudit) {
                util.setError(404, `Cannot find fpEventAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEventAudit updated', objFpEventAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fpEventsAuditCtrl.updateFpEventAuditByFieldName = async (req, res) => {
     const { fieldName } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objFpEventAudit = await fpEventAuditService.updateFpEventAuditByFieldName(fieldName, req.body);
            if (!objFpEventAudit) {
                util.setError(404, `Cannot find fpEventAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEventAudit updated', objFpEventAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fpEventsAuditCtrl.updateFpEventAuditByDataType = async (req, res) => {
     const { dataType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objFpEventAudit = await fpEventAuditService.updateFpEventAuditByDataType(dataType, req.body);
            if (!objFpEventAudit) {
                util.setError(404, `Cannot find fpEventAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEventAudit updated', objFpEventAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fpEventsAuditCtrl.updateFpEventAuditByBeforeValueString = async (req, res) => {
     const { beforeValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objFpEventAudit = await fpEventAuditService.updateFpEventAuditByBeforeValueString(beforeValueString, req.body);
            if (!objFpEventAudit) {
                util.setError(404, `Cannot find fpEventAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEventAudit updated', objFpEventAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fpEventsAuditCtrl.updateFpEventAuditByAfterValueString = async (req, res) => {
     const { afterValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objFpEventAudit = await fpEventAuditService.updateFpEventAuditByAfterValueString(afterValueString, req.body);
            if (!objFpEventAudit) {
                util.setError(404, `Cannot find fpEventAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEventAudit updated', objFpEventAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fpEventsAuditCtrl.updateFpEventAuditByBeforeValueText = async (req, res) => {
     const { beforeValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objFpEventAudit = await fpEventAuditService.updateFpEventAuditByBeforeValueText(beforeValueText, req.body);
            if (!objFpEventAudit) {
                util.setError(404, `Cannot find fpEventAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEventAudit updated', objFpEventAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fpEventsAuditCtrl.updateFpEventAuditByAfterValueText = async (req, res) => {
     const { afterValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objFpEventAudit = await fpEventAuditService.updateFpEventAuditByAfterValueText(afterValueText, req.body);
            if (!objFpEventAudit) {
                util.setError(404, `Cannot find fpEventAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEventAudit updated', objFpEventAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fpEventsAuditCtrl.updateFpEventAuditByDateCreated = async (req, res) => {
     const { dateCreated } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objFpEventAudit = await fpEventAuditService.updateFpEventAuditByDateCreated(dateCreated, req.body);
            if (!objFpEventAudit) {
                util.setError(404, `Cannot find fpEventAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEventAudit updated', objFpEventAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fpEventsAuditCtrl.updateFpEventAuditByParentId = async (req, res) => {
     const { parentId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objFpEventAudit = await fpEventAuditService.updateFpEventAuditByParentId(parentId, req.body);
            if (!objFpEventAudit) {
                util.setError(404, `Cannot find fpEventAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEventAudit updated', objFpEventAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = fpEventsAuditCtrl;
//</es-section>
