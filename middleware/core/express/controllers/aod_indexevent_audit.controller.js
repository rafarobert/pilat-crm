/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:41:55 GMT-0400 (Bolivia Time)
 * Time: 4:41:55
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:41:55 GMT-0400 (Bolivia Time)
 * Last time updated: 4:41:55
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const aodIndexeventAuditService = require('../services/aod_indexevent_audit.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const aodIndexeventAuditCtrl = {};
aodIndexeventAuditCtrl.service = aodIndexeventAuditService;


aodIndexeventAuditCtrl.getAllAodIndexeventAudit = async (req, res) => {
    try {
        const objAodIndexeventAudit = await aodIndexeventAuditService.getAllAodIndexeventAudit(req.query);
        if (objAodIndexeventAudit.length > 0) {
            util.setSuccess(200, 'AodIndexeventAudit retrieved', objAodIndexeventAudit);
        } else {
            util.setSuccess(200, 'No aodIndexeventAudit found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aodIndexeventAuditCtrl.getAAodIndexeventAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAodIndexeventAudit = await aodIndexeventAuditService.getAAodIndexeventAudit(id, req.query);
        if (!objAodIndexeventAudit) {
            util.setError(404, `Cannot find aodIndexeventAudit with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found aodIndexeventAudit', objAodIndexeventAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aodIndexeventAuditCtrl.addAodIndexeventAudit = async (req, res) => {
    try {
        const objAodIndexeventAudit = await aodIndexeventAuditService.addAodIndexeventAudit(req.body);
        util.setSuccess(201, 'AodIndexeventAudit Added!', objAodIndexeventAudit);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aodIndexeventAuditCtrl.updateAodIndexeventAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAodIndexeventAudit = await aodIndexeventAuditService.updateAodIndexeventAudit(id, req.body);
        if (!objAodIndexeventAudit) {
            util.setError(404, `Cannot find aodIndexeventAudit with the id: ${id}`);
        } else {
            util.setSuccess(200, 'AodIndexeventAudit updated', objAodIndexeventAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

aodIndexeventAuditCtrl.deleteAodIndexeventAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objAodIndexeventAudit = await aodIndexeventAuditService.deleteAodIndexeventAudit(id);
        if (objAodIndexeventAudit) {
            util.setSuccess(200, 'AodIndexeventAudit deleted', objAodIndexeventAudit);
        } else {
            util.setError(404, `AodIndexeventAudit with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



aodIndexeventAuditCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objAodIndexeventAudit = await aodIndexeventAuditService.findOneById(id, req.query);
        if (!objAodIndexeventAudit) {
            util.setError(404, `Cannot find aodIndexeventAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aodIndexeventAudit', objAodIndexeventAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aodIndexeventAuditCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objAodIndexeventAudit = await aodIndexeventAuditService.findOneByCreatedBy(createdBy, req.query);
        if (!objAodIndexeventAudit) {
            util.setError(404, `Cannot find aodIndexeventAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aodIndexeventAudit', objAodIndexeventAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aodIndexeventAuditCtrl.findOneByFieldName = async (req, res) => {
    try {
        const { fieldName } = req.params;
        const objAodIndexeventAudit = await aodIndexeventAuditService.findOneByFieldName(fieldName, req.query);
        if (!objAodIndexeventAudit) {
            util.setError(404, `Cannot find aodIndexeventAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aodIndexeventAudit', objAodIndexeventAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aodIndexeventAuditCtrl.findOneByDataType = async (req, res) => {
    try {
        const { dataType } = req.params;
        const objAodIndexeventAudit = await aodIndexeventAuditService.findOneByDataType(dataType, req.query);
        if (!objAodIndexeventAudit) {
            util.setError(404, `Cannot find aodIndexeventAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aodIndexeventAudit', objAodIndexeventAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aodIndexeventAuditCtrl.findOneByBeforeValueString = async (req, res) => {
    try {
        const { beforeValueString } = req.params;
        const objAodIndexeventAudit = await aodIndexeventAuditService.findOneByBeforeValueString(beforeValueString, req.query);
        if (!objAodIndexeventAudit) {
            util.setError(404, `Cannot find aodIndexeventAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aodIndexeventAudit', objAodIndexeventAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aodIndexeventAuditCtrl.findOneByAfterValueString = async (req, res) => {
    try {
        const { afterValueString } = req.params;
        const objAodIndexeventAudit = await aodIndexeventAuditService.findOneByAfterValueString(afterValueString, req.query);
        if (!objAodIndexeventAudit) {
            util.setError(404, `Cannot find aodIndexeventAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aodIndexeventAudit', objAodIndexeventAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aodIndexeventAuditCtrl.findOneByBeforeValueText = async (req, res) => {
    try {
        const { beforeValueText } = req.params;
        const objAodIndexeventAudit = await aodIndexeventAuditService.findOneByBeforeValueText(beforeValueText, req.query);
        if (!objAodIndexeventAudit) {
            util.setError(404, `Cannot find aodIndexeventAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aodIndexeventAudit', objAodIndexeventAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aodIndexeventAuditCtrl.findOneByAfterValueText = async (req, res) => {
    try {
        const { afterValueText } = req.params;
        const objAodIndexeventAudit = await aodIndexeventAuditService.findOneByAfterValueText(afterValueText, req.query);
        if (!objAodIndexeventAudit) {
            util.setError(404, `Cannot find aodIndexeventAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aodIndexeventAudit', objAodIndexeventAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aodIndexeventAuditCtrl.findOneByDateCreated = async (req, res) => {
    try {
        const { dateCreated } = req.params;
        const objAodIndexeventAudit = await aodIndexeventAuditService.findOneByDateCreated(dateCreated, req.query);
        if (!objAodIndexeventAudit) {
            util.setError(404, `Cannot find aodIndexeventAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aodIndexeventAudit', objAodIndexeventAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aodIndexeventAuditCtrl.findOneByParentId = async (req, res) => {
    try {
        const { parentId } = req.params;
        const objAodIndexeventAudit = await aodIndexeventAuditService.findOneByParentId(parentId, req.query);
        if (!objAodIndexeventAudit) {
            util.setError(404, `Cannot find aodIndexeventAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aodIndexeventAudit', objAodIndexeventAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



aodIndexeventAuditCtrl.updateAodIndexeventAuditById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAodIndexeventAudit = await aodIndexeventAuditService.updateAodIndexeventAuditById(id, req.body);
            if (!objAodIndexeventAudit) {
                util.setError(404, `Cannot find aodIndexeventAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AodIndexeventAudit updated', objAodIndexeventAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aodIndexeventAuditCtrl.updateAodIndexeventAuditByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAodIndexeventAudit = await aodIndexeventAuditService.updateAodIndexeventAuditByCreatedBy(createdBy, req.body);
            if (!objAodIndexeventAudit) {
                util.setError(404, `Cannot find aodIndexeventAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AodIndexeventAudit updated', objAodIndexeventAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aodIndexeventAuditCtrl.updateAodIndexeventAuditByFieldName = async (req, res) => {
     const { fieldName } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAodIndexeventAudit = await aodIndexeventAuditService.updateAodIndexeventAuditByFieldName(fieldName, req.body);
            if (!objAodIndexeventAudit) {
                util.setError(404, `Cannot find aodIndexeventAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AodIndexeventAudit updated', objAodIndexeventAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aodIndexeventAuditCtrl.updateAodIndexeventAuditByDataType = async (req, res) => {
     const { dataType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAodIndexeventAudit = await aodIndexeventAuditService.updateAodIndexeventAuditByDataType(dataType, req.body);
            if (!objAodIndexeventAudit) {
                util.setError(404, `Cannot find aodIndexeventAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AodIndexeventAudit updated', objAodIndexeventAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aodIndexeventAuditCtrl.updateAodIndexeventAuditByBeforeValueString = async (req, res) => {
     const { beforeValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAodIndexeventAudit = await aodIndexeventAuditService.updateAodIndexeventAuditByBeforeValueString(beforeValueString, req.body);
            if (!objAodIndexeventAudit) {
                util.setError(404, `Cannot find aodIndexeventAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AodIndexeventAudit updated', objAodIndexeventAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aodIndexeventAuditCtrl.updateAodIndexeventAuditByAfterValueString = async (req, res) => {
     const { afterValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAodIndexeventAudit = await aodIndexeventAuditService.updateAodIndexeventAuditByAfterValueString(afterValueString, req.body);
            if (!objAodIndexeventAudit) {
                util.setError(404, `Cannot find aodIndexeventAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AodIndexeventAudit updated', objAodIndexeventAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aodIndexeventAuditCtrl.updateAodIndexeventAuditByBeforeValueText = async (req, res) => {
     const { beforeValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAodIndexeventAudit = await aodIndexeventAuditService.updateAodIndexeventAuditByBeforeValueText(beforeValueText, req.body);
            if (!objAodIndexeventAudit) {
                util.setError(404, `Cannot find aodIndexeventAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AodIndexeventAudit updated', objAodIndexeventAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aodIndexeventAuditCtrl.updateAodIndexeventAuditByAfterValueText = async (req, res) => {
     const { afterValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAodIndexeventAudit = await aodIndexeventAuditService.updateAodIndexeventAuditByAfterValueText(afterValueText, req.body);
            if (!objAodIndexeventAudit) {
                util.setError(404, `Cannot find aodIndexeventAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AodIndexeventAudit updated', objAodIndexeventAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aodIndexeventAuditCtrl.updateAodIndexeventAuditByDateCreated = async (req, res) => {
     const { dateCreated } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAodIndexeventAudit = await aodIndexeventAuditService.updateAodIndexeventAuditByDateCreated(dateCreated, req.body);
            if (!objAodIndexeventAudit) {
                util.setError(404, `Cannot find aodIndexeventAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AodIndexeventAudit updated', objAodIndexeventAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aodIndexeventAuditCtrl.updateAodIndexeventAuditByParentId = async (req, res) => {
     const { parentId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAodIndexeventAudit = await aodIndexeventAuditService.updateAodIndexeventAuditByParentId(parentId, req.body);
            if (!objAodIndexeventAudit) {
                util.setError(404, `Cannot find aodIndexeventAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AodIndexeventAudit updated', objAodIndexeventAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = aodIndexeventAuditCtrl;
//</es-section>
