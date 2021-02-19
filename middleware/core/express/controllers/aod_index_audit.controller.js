/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:35:39 GMT-0400 (Bolivia Time)
 * Time: 18:35:39
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:35:39 GMT-0400 (Bolivia Time)
 * Last time updated: 18:35:39
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const aodIndexAuditService = require('../services/aod_index_audit.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const aodIndexAuditCtrl = {};
aodIndexAuditCtrl.service = aodIndexAuditService;


aodIndexAuditCtrl.getAllAodIndexAudit = async (req, res) => {
    try {
        const objAodIndexAudit = await aodIndexAuditService.getAllAodIndexAudit(req.query);
        if (objAodIndexAudit.length > 0) {
            util.setSuccess(200, 'AodIndexAudit retrieved', objAodIndexAudit);
        } else {
            util.setSuccess(200, 'No aodIndexAudit found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aodIndexAuditCtrl.getAAodIndexAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAodIndexAudit = await aodIndexAuditService.getAAodIndexAudit(id, req.query);
        if (!objAodIndexAudit) {
            util.setError(404, `Cannot find aodIndexAudit with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found aodIndexAudit', objAodIndexAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aodIndexAuditCtrl.addAodIndexAudit = async (req, res) => {
    try {
        const objAodIndexAudit = await aodIndexAuditService.addAodIndexAudit(req.body);
        util.setSuccess(201, 'AodIndexAudit Added!', objAodIndexAudit);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aodIndexAuditCtrl.updateAodIndexAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAodIndexAudit = await aodIndexAuditService.updateAodIndexAudit(id, req.body);
        if (!objAodIndexAudit) {
            util.setError(404, `Cannot find aodIndexAudit with the id: ${id}`);
        } else {
            util.setSuccess(200, 'AodIndexAudit updated', objAodIndexAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

aodIndexAuditCtrl.deleteAodIndexAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objAodIndexAudit = await aodIndexAuditService.deleteAodIndexAudit(id);
        if (objAodIndexAudit) {
            util.setSuccess(200, 'AodIndexAudit deleted', objAodIndexAudit);
        } else {
            util.setError(404, `AodIndexAudit with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



aodIndexAuditCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objAodIndexAudit = await aodIndexAuditService.findOneById(id, req.query);
        if (!objAodIndexAudit) {
            util.setError(404, `Cannot find aodIndexAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aodIndexAudit', objAodIndexAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aodIndexAuditCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objAodIndexAudit = await aodIndexAuditService.findOneByCreatedBy(createdBy, req.query);
        if (!objAodIndexAudit) {
            util.setError(404, `Cannot find aodIndexAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aodIndexAudit', objAodIndexAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aodIndexAuditCtrl.findOneByFieldName = async (req, res) => {
    try {
        const { fieldName } = req.params;
        const objAodIndexAudit = await aodIndexAuditService.findOneByFieldName(fieldName, req.query);
        if (!objAodIndexAudit) {
            util.setError(404, `Cannot find aodIndexAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aodIndexAudit', objAodIndexAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aodIndexAuditCtrl.findOneByDataType = async (req, res) => {
    try {
        const { dataType } = req.params;
        const objAodIndexAudit = await aodIndexAuditService.findOneByDataType(dataType, req.query);
        if (!objAodIndexAudit) {
            util.setError(404, `Cannot find aodIndexAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aodIndexAudit', objAodIndexAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aodIndexAuditCtrl.findOneByBeforeValueString = async (req, res) => {
    try {
        const { beforeValueString } = req.params;
        const objAodIndexAudit = await aodIndexAuditService.findOneByBeforeValueString(beforeValueString, req.query);
        if (!objAodIndexAudit) {
            util.setError(404, `Cannot find aodIndexAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aodIndexAudit', objAodIndexAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aodIndexAuditCtrl.findOneByAfterValueString = async (req, res) => {
    try {
        const { afterValueString } = req.params;
        const objAodIndexAudit = await aodIndexAuditService.findOneByAfterValueString(afterValueString, req.query);
        if (!objAodIndexAudit) {
            util.setError(404, `Cannot find aodIndexAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aodIndexAudit', objAodIndexAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aodIndexAuditCtrl.findOneByBeforeValueText = async (req, res) => {
    try {
        const { beforeValueText } = req.params;
        const objAodIndexAudit = await aodIndexAuditService.findOneByBeforeValueText(beforeValueText, req.query);
        if (!objAodIndexAudit) {
            util.setError(404, `Cannot find aodIndexAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aodIndexAudit', objAodIndexAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aodIndexAuditCtrl.findOneByAfterValueText = async (req, res) => {
    try {
        const { afterValueText } = req.params;
        const objAodIndexAudit = await aodIndexAuditService.findOneByAfterValueText(afterValueText, req.query);
        if (!objAodIndexAudit) {
            util.setError(404, `Cannot find aodIndexAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aodIndexAudit', objAodIndexAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aodIndexAuditCtrl.findOneByDateCreated = async (req, res) => {
    try {
        const { dateCreated } = req.params;
        const objAodIndexAudit = await aodIndexAuditService.findOneByDateCreated(dateCreated, req.query);
        if (!objAodIndexAudit) {
            util.setError(404, `Cannot find aodIndexAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aodIndexAudit', objAodIndexAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aodIndexAuditCtrl.findOneByParentId = async (req, res) => {
    try {
        const { parentId } = req.params;
        const objAodIndexAudit = await aodIndexAuditService.findOneByParentId(parentId, req.query);
        if (!objAodIndexAudit) {
            util.setError(404, `Cannot find aodIndexAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aodIndexAudit', objAodIndexAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



aodIndexAuditCtrl.updateAodIndexAuditById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAodIndexAudit = await aodIndexAuditService.updateAodIndexAuditById(id, req.body);
            if (!objAodIndexAudit) {
                util.setError(404, `Cannot find aodIndexAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AodIndexAudit updated', objAodIndexAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aodIndexAuditCtrl.updateAodIndexAuditByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAodIndexAudit = await aodIndexAuditService.updateAodIndexAuditByCreatedBy(createdBy, req.body);
            if (!objAodIndexAudit) {
                util.setError(404, `Cannot find aodIndexAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AodIndexAudit updated', objAodIndexAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aodIndexAuditCtrl.updateAodIndexAuditByFieldName = async (req, res) => {
     const { fieldName } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAodIndexAudit = await aodIndexAuditService.updateAodIndexAuditByFieldName(fieldName, req.body);
            if (!objAodIndexAudit) {
                util.setError(404, `Cannot find aodIndexAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AodIndexAudit updated', objAodIndexAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aodIndexAuditCtrl.updateAodIndexAuditByDataType = async (req, res) => {
     const { dataType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAodIndexAudit = await aodIndexAuditService.updateAodIndexAuditByDataType(dataType, req.body);
            if (!objAodIndexAudit) {
                util.setError(404, `Cannot find aodIndexAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AodIndexAudit updated', objAodIndexAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aodIndexAuditCtrl.updateAodIndexAuditByBeforeValueString = async (req, res) => {
     const { beforeValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAodIndexAudit = await aodIndexAuditService.updateAodIndexAuditByBeforeValueString(beforeValueString, req.body);
            if (!objAodIndexAudit) {
                util.setError(404, `Cannot find aodIndexAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AodIndexAudit updated', objAodIndexAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aodIndexAuditCtrl.updateAodIndexAuditByAfterValueString = async (req, res) => {
     const { afterValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAodIndexAudit = await aodIndexAuditService.updateAodIndexAuditByAfterValueString(afterValueString, req.body);
            if (!objAodIndexAudit) {
                util.setError(404, `Cannot find aodIndexAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AodIndexAudit updated', objAodIndexAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aodIndexAuditCtrl.updateAodIndexAuditByBeforeValueText = async (req, res) => {
     const { beforeValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAodIndexAudit = await aodIndexAuditService.updateAodIndexAuditByBeforeValueText(beforeValueText, req.body);
            if (!objAodIndexAudit) {
                util.setError(404, `Cannot find aodIndexAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AodIndexAudit updated', objAodIndexAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aodIndexAuditCtrl.updateAodIndexAuditByAfterValueText = async (req, res) => {
     const { afterValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAodIndexAudit = await aodIndexAuditService.updateAodIndexAuditByAfterValueText(afterValueText, req.body);
            if (!objAodIndexAudit) {
                util.setError(404, `Cannot find aodIndexAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AodIndexAudit updated', objAodIndexAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aodIndexAuditCtrl.updateAodIndexAuditByDateCreated = async (req, res) => {
     const { dateCreated } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAodIndexAudit = await aodIndexAuditService.updateAodIndexAuditByDateCreated(dateCreated, req.body);
            if (!objAodIndexAudit) {
                util.setError(404, `Cannot find aodIndexAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AodIndexAudit updated', objAodIndexAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aodIndexAuditCtrl.updateAodIndexAuditByParentId = async (req, res) => {
     const { parentId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAodIndexAudit = await aodIndexAuditService.updateAodIndexAuditByParentId(parentId, req.body);
            if (!objAodIndexAudit) {
                util.setError(404, `Cannot find aodIndexAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AodIndexAudit updated', objAodIndexAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = aodIndexAuditCtrl;
//</es-section>
