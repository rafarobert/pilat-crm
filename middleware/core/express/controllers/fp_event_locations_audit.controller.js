/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:36:14 GMT-0400 (Bolivia Time)
 * Time: 15:36:14
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:36:14 GMT-0400 (Bolivia Time)
 * Last time updated: 15:36:14
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const fpEventLocationAuditService = require('../services/fp_event_locations_audit.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const fpEventLocationsAuditCtrl = {};
fpEventLocationsAuditCtrl.service = fpEventLocationAuditService;


fpEventLocationsAuditCtrl.getAllFpEventLocationsAudit = async (req, res) => {
    try {
        const objFpEventLocationsAudit = await fpEventLocationAuditService.getAllFpEventLocationsAudit(req.query);
        if (objFpEventLocationsAudit.length > 0) {
            util.setSuccess(200, 'FpEventLocationsAudit retrieved', objFpEventLocationsAudit);
        } else {
            util.setSuccess(200, 'No fpEventLocationAudit found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventLocationsAuditCtrl.getAFpEventLocationAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objFpEventLocationAudit = await fpEventLocationAuditService.getAFpEventLocationAudit(id, req.query);
        if (!objFpEventLocationAudit) {
            util.setError(404, `Cannot find fpEventLocationAudit with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found fpEventLocationAudit', objFpEventLocationAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventLocationsAuditCtrl.addFpEventLocationAudit = async (req, res) => {
    try {
        const objFpEventLocationAudit = await fpEventLocationAuditService.addFpEventLocationAudit(req.body);
        util.setSuccess(201, 'FpEventLocationAudit Added!', objFpEventLocationAudit);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventLocationsAuditCtrl.updateFpEventLocationAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objFpEventLocationAudit = await fpEventLocationAuditService.updateFpEventLocationAudit(id, req.body);
        if (!objFpEventLocationAudit) {
            util.setError(404, `Cannot find fpEventLocationAudit with the id: ${id}`);
        } else {
            util.setSuccess(200, 'FpEventLocationAudit updated', objFpEventLocationAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

fpEventLocationsAuditCtrl.deleteFpEventLocationAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objFpEventLocationAudit = await fpEventLocationAuditService.deleteFpEventLocationAudit(id);
        if (objFpEventLocationAudit) {
            util.setSuccess(200, 'FpEventLocationAudit deleted', objFpEventLocationAudit);
        } else {
            util.setError(404, `FpEventLocationAudit with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



fpEventLocationsAuditCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objFpEventLocationAudit = await fpEventLocationAuditService.findOneById(id, req.query);
        if (!objFpEventLocationAudit) {
            util.setError(404, `Cannot find fpEventLocationAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEventLocationAudit', objFpEventLocationAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventLocationsAuditCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objFpEventLocationAudit = await fpEventLocationAuditService.findOneByCreatedBy(createdBy, req.query);
        if (!objFpEventLocationAudit) {
            util.setError(404, `Cannot find fpEventLocationAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEventLocationAudit', objFpEventLocationAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventLocationsAuditCtrl.findOneByFieldName = async (req, res) => {
    try {
        const { fieldName } = req.params;
        const objFpEventLocationAudit = await fpEventLocationAuditService.findOneByFieldName(fieldName, req.query);
        if (!objFpEventLocationAudit) {
            util.setError(404, `Cannot find fpEventLocationAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEventLocationAudit', objFpEventLocationAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventLocationsAuditCtrl.findOneByDataType = async (req, res) => {
    try {
        const { dataType } = req.params;
        const objFpEventLocationAudit = await fpEventLocationAuditService.findOneByDataType(dataType, req.query);
        if (!objFpEventLocationAudit) {
            util.setError(404, `Cannot find fpEventLocationAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEventLocationAudit', objFpEventLocationAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventLocationsAuditCtrl.findOneByBeforeValueString = async (req, res) => {
    try {
        const { beforeValueString } = req.params;
        const objFpEventLocationAudit = await fpEventLocationAuditService.findOneByBeforeValueString(beforeValueString, req.query);
        if (!objFpEventLocationAudit) {
            util.setError(404, `Cannot find fpEventLocationAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEventLocationAudit', objFpEventLocationAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventLocationsAuditCtrl.findOneByAfterValueString = async (req, res) => {
    try {
        const { afterValueString } = req.params;
        const objFpEventLocationAudit = await fpEventLocationAuditService.findOneByAfterValueString(afterValueString, req.query);
        if (!objFpEventLocationAudit) {
            util.setError(404, `Cannot find fpEventLocationAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEventLocationAudit', objFpEventLocationAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventLocationsAuditCtrl.findOneByBeforeValueText = async (req, res) => {
    try {
        const { beforeValueText } = req.params;
        const objFpEventLocationAudit = await fpEventLocationAuditService.findOneByBeforeValueText(beforeValueText, req.query);
        if (!objFpEventLocationAudit) {
            util.setError(404, `Cannot find fpEventLocationAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEventLocationAudit', objFpEventLocationAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventLocationsAuditCtrl.findOneByAfterValueText = async (req, res) => {
    try {
        const { afterValueText } = req.params;
        const objFpEventLocationAudit = await fpEventLocationAuditService.findOneByAfterValueText(afterValueText, req.query);
        if (!objFpEventLocationAudit) {
            util.setError(404, `Cannot find fpEventLocationAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEventLocationAudit', objFpEventLocationAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventLocationsAuditCtrl.findOneByDateCreated = async (req, res) => {
    try {
        const { dateCreated } = req.params;
        const objFpEventLocationAudit = await fpEventLocationAuditService.findOneByDateCreated(dateCreated, req.query);
        if (!objFpEventLocationAudit) {
            util.setError(404, `Cannot find fpEventLocationAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEventLocationAudit', objFpEventLocationAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventLocationsAuditCtrl.findOneByParentId = async (req, res) => {
    try {
        const { parentId } = req.params;
        const objFpEventLocationAudit = await fpEventLocationAuditService.findOneByParentId(parentId, req.query);
        if (!objFpEventLocationAudit) {
            util.setError(404, `Cannot find fpEventLocationAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEventLocationAudit', objFpEventLocationAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



fpEventLocationsAuditCtrl.updateFpEventLocationAuditById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objFpEventLocationAudit = await fpEventLocationAuditService.updateFpEventLocationAuditById(id, req.body);
            if (!objFpEventLocationAudit) {
                util.setError(404, `Cannot find fpEventLocationAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEventLocationAudit updated', objFpEventLocationAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fpEventLocationsAuditCtrl.updateFpEventLocationAuditByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objFpEventLocationAudit = await fpEventLocationAuditService.updateFpEventLocationAuditByCreatedBy(createdBy, req.body);
            if (!objFpEventLocationAudit) {
                util.setError(404, `Cannot find fpEventLocationAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEventLocationAudit updated', objFpEventLocationAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fpEventLocationsAuditCtrl.updateFpEventLocationAuditByFieldName = async (req, res) => {
     const { fieldName } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objFpEventLocationAudit = await fpEventLocationAuditService.updateFpEventLocationAuditByFieldName(fieldName, req.body);
            if (!objFpEventLocationAudit) {
                util.setError(404, `Cannot find fpEventLocationAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEventLocationAudit updated', objFpEventLocationAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fpEventLocationsAuditCtrl.updateFpEventLocationAuditByDataType = async (req, res) => {
     const { dataType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objFpEventLocationAudit = await fpEventLocationAuditService.updateFpEventLocationAuditByDataType(dataType, req.body);
            if (!objFpEventLocationAudit) {
                util.setError(404, `Cannot find fpEventLocationAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEventLocationAudit updated', objFpEventLocationAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fpEventLocationsAuditCtrl.updateFpEventLocationAuditByBeforeValueString = async (req, res) => {
     const { beforeValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objFpEventLocationAudit = await fpEventLocationAuditService.updateFpEventLocationAuditByBeforeValueString(beforeValueString, req.body);
            if (!objFpEventLocationAudit) {
                util.setError(404, `Cannot find fpEventLocationAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEventLocationAudit updated', objFpEventLocationAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fpEventLocationsAuditCtrl.updateFpEventLocationAuditByAfterValueString = async (req, res) => {
     const { afterValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objFpEventLocationAudit = await fpEventLocationAuditService.updateFpEventLocationAuditByAfterValueString(afterValueString, req.body);
            if (!objFpEventLocationAudit) {
                util.setError(404, `Cannot find fpEventLocationAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEventLocationAudit updated', objFpEventLocationAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fpEventLocationsAuditCtrl.updateFpEventLocationAuditByBeforeValueText = async (req, res) => {
     const { beforeValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objFpEventLocationAudit = await fpEventLocationAuditService.updateFpEventLocationAuditByBeforeValueText(beforeValueText, req.body);
            if (!objFpEventLocationAudit) {
                util.setError(404, `Cannot find fpEventLocationAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEventLocationAudit updated', objFpEventLocationAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fpEventLocationsAuditCtrl.updateFpEventLocationAuditByAfterValueText = async (req, res) => {
     const { afterValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objFpEventLocationAudit = await fpEventLocationAuditService.updateFpEventLocationAuditByAfterValueText(afterValueText, req.body);
            if (!objFpEventLocationAudit) {
                util.setError(404, `Cannot find fpEventLocationAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEventLocationAudit updated', objFpEventLocationAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fpEventLocationsAuditCtrl.updateFpEventLocationAuditByDateCreated = async (req, res) => {
     const { dateCreated } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objFpEventLocationAudit = await fpEventLocationAuditService.updateFpEventLocationAuditByDateCreated(dateCreated, req.body);
            if (!objFpEventLocationAudit) {
                util.setError(404, `Cannot find fpEventLocationAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEventLocationAudit updated', objFpEventLocationAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fpEventLocationsAuditCtrl.updateFpEventLocationAuditByParentId = async (req, res) => {
     const { parentId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objFpEventLocationAudit = await fpEventLocationAuditService.updateFpEventLocationAuditByParentId(parentId, req.body);
            if (!objFpEventLocationAudit) {
                util.setError(404, `Cannot find fpEventLocationAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEventLocationAudit updated', objFpEventLocationAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = fpEventLocationsAuditCtrl;
//</es-section>
