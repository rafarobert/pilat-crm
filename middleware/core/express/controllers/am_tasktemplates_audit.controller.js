/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:04 GMT-0400 (Bolivia Time)
 * Time: 14:0:4
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:04 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:4
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const amTasktemplateAuditService = require('../services/am_tasktemplates_audit.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const amTasktemplatesAuditCtrl = {};
amTasktemplatesAuditCtrl.service = amTasktemplateAuditService;


amTasktemplatesAuditCtrl.getAllAmTasktemplatesAudit = async (req, res) => {
    try {
        const objAmTasktemplatesAudit = await amTasktemplateAuditService.getAllAmTasktemplatesAudit(req.query);
        if (objAmTasktemplatesAudit.length > 0) {
            util.setSuccess(200, 'AmTasktemplatesAudit retrieved', objAmTasktemplatesAudit);
        } else {
            util.setSuccess(200, 'No amTasktemplateAudit found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amTasktemplatesAuditCtrl.getAAmTasktemplateAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAmTasktemplateAudit = await amTasktemplateAuditService.getAAmTasktemplateAudit(id, req.query);
        if (!objAmTasktemplateAudit) {
            util.setError(404, `Cannot find amTasktemplateAudit with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found amTasktemplateAudit', objAmTasktemplateAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amTasktemplatesAuditCtrl.addAmTasktemplateAudit = async (req, res) => {
    try {
        const objAmTasktemplateAudit = await amTasktemplateAuditService.addAmTasktemplateAudit(req.body);
        util.setSuccess(201, 'AmTasktemplateAudit Added!', objAmTasktemplateAudit);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amTasktemplatesAuditCtrl.updateAmTasktemplateAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAmTasktemplateAudit = await amTasktemplateAuditService.updateAmTasktemplateAudit(id, req.body);
        if (!objAmTasktemplateAudit) {
            util.setError(404, `Cannot find amTasktemplateAudit with the id: ${id}`);
        } else {
            util.setSuccess(200, 'AmTasktemplateAudit updated', objAmTasktemplateAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

amTasktemplatesAuditCtrl.deleteAmTasktemplateAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objAmTasktemplateAudit = await amTasktemplateAuditService.deleteAmTasktemplateAudit(id);
        if (objAmTasktemplateAudit) {
            util.setSuccess(200, 'AmTasktemplateAudit deleted', objAmTasktemplateAudit);
        } else {
            util.setError(404, `AmTasktemplateAudit with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



amTasktemplatesAuditCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objAmTasktemplateAudit = await amTasktemplateAuditService.findOneById(id, req.query);
        if (!objAmTasktemplateAudit) {
            util.setError(404, `Cannot find amTasktemplateAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found amTasktemplateAudit', objAmTasktemplateAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amTasktemplatesAuditCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objAmTasktemplateAudit = await amTasktemplateAuditService.findOneByCreatedBy(createdBy, req.query);
        if (!objAmTasktemplateAudit) {
            util.setError(404, `Cannot find amTasktemplateAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found amTasktemplateAudit', objAmTasktemplateAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amTasktemplatesAuditCtrl.findOneByFieldName = async (req, res) => {
    try {
        const { fieldName } = req.params;
        const objAmTasktemplateAudit = await amTasktemplateAuditService.findOneByFieldName(fieldName, req.query);
        if (!objAmTasktemplateAudit) {
            util.setError(404, `Cannot find amTasktemplateAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found amTasktemplateAudit', objAmTasktemplateAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amTasktemplatesAuditCtrl.findOneByDataType = async (req, res) => {
    try {
        const { dataType } = req.params;
        const objAmTasktemplateAudit = await amTasktemplateAuditService.findOneByDataType(dataType, req.query);
        if (!objAmTasktemplateAudit) {
            util.setError(404, `Cannot find amTasktemplateAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found amTasktemplateAudit', objAmTasktemplateAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amTasktemplatesAuditCtrl.findOneByBeforeValueString = async (req, res) => {
    try {
        const { beforeValueString } = req.params;
        const objAmTasktemplateAudit = await amTasktemplateAuditService.findOneByBeforeValueString(beforeValueString, req.query);
        if (!objAmTasktemplateAudit) {
            util.setError(404, `Cannot find amTasktemplateAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found amTasktemplateAudit', objAmTasktemplateAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amTasktemplatesAuditCtrl.findOneByAfterValueString = async (req, res) => {
    try {
        const { afterValueString } = req.params;
        const objAmTasktemplateAudit = await amTasktemplateAuditService.findOneByAfterValueString(afterValueString, req.query);
        if (!objAmTasktemplateAudit) {
            util.setError(404, `Cannot find amTasktemplateAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found amTasktemplateAudit', objAmTasktemplateAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amTasktemplatesAuditCtrl.findOneByBeforeValueText = async (req, res) => {
    try {
        const { beforeValueText } = req.params;
        const objAmTasktemplateAudit = await amTasktemplateAuditService.findOneByBeforeValueText(beforeValueText, req.query);
        if (!objAmTasktemplateAudit) {
            util.setError(404, `Cannot find amTasktemplateAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found amTasktemplateAudit', objAmTasktemplateAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amTasktemplatesAuditCtrl.findOneByAfterValueText = async (req, res) => {
    try {
        const { afterValueText } = req.params;
        const objAmTasktemplateAudit = await amTasktemplateAuditService.findOneByAfterValueText(afterValueText, req.query);
        if (!objAmTasktemplateAudit) {
            util.setError(404, `Cannot find amTasktemplateAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found amTasktemplateAudit', objAmTasktemplateAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amTasktemplatesAuditCtrl.findOneByDateCreated = async (req, res) => {
    try {
        const { dateCreated } = req.params;
        const objAmTasktemplateAudit = await amTasktemplateAuditService.findOneByDateCreated(dateCreated, req.query);
        if (!objAmTasktemplateAudit) {
            util.setError(404, `Cannot find amTasktemplateAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found amTasktemplateAudit', objAmTasktemplateAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amTasktemplatesAuditCtrl.findOneByParentId = async (req, res) => {
    try {
        const { parentId } = req.params;
        const objAmTasktemplateAudit = await amTasktemplateAuditService.findOneByParentId(parentId, req.query);
        if (!objAmTasktemplateAudit) {
            util.setError(404, `Cannot find amTasktemplateAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found amTasktemplateAudit', objAmTasktemplateAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



amTasktemplatesAuditCtrl.updateAmTasktemplateAuditById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAmTasktemplateAudit = await amTasktemplateAuditService.updateAmTasktemplateAuditById(id, req.body);
            if (!objAmTasktemplateAudit) {
                util.setError(404, `Cannot find amTasktemplateAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AmTasktemplateAudit updated', objAmTasktemplateAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

amTasktemplatesAuditCtrl.updateAmTasktemplateAuditByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAmTasktemplateAudit = await amTasktemplateAuditService.updateAmTasktemplateAuditByCreatedBy(createdBy, req.body);
            if (!objAmTasktemplateAudit) {
                util.setError(404, `Cannot find amTasktemplateAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AmTasktemplateAudit updated', objAmTasktemplateAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

amTasktemplatesAuditCtrl.updateAmTasktemplateAuditByFieldName = async (req, res) => {
     const { fieldName } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAmTasktemplateAudit = await amTasktemplateAuditService.updateAmTasktemplateAuditByFieldName(fieldName, req.body);
            if (!objAmTasktemplateAudit) {
                util.setError(404, `Cannot find amTasktemplateAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AmTasktemplateAudit updated', objAmTasktemplateAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

amTasktemplatesAuditCtrl.updateAmTasktemplateAuditByDataType = async (req, res) => {
     const { dataType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAmTasktemplateAudit = await amTasktemplateAuditService.updateAmTasktemplateAuditByDataType(dataType, req.body);
            if (!objAmTasktemplateAudit) {
                util.setError(404, `Cannot find amTasktemplateAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AmTasktemplateAudit updated', objAmTasktemplateAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

amTasktemplatesAuditCtrl.updateAmTasktemplateAuditByBeforeValueString = async (req, res) => {
     const { beforeValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAmTasktemplateAudit = await amTasktemplateAuditService.updateAmTasktemplateAuditByBeforeValueString(beforeValueString, req.body);
            if (!objAmTasktemplateAudit) {
                util.setError(404, `Cannot find amTasktemplateAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AmTasktemplateAudit updated', objAmTasktemplateAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

amTasktemplatesAuditCtrl.updateAmTasktemplateAuditByAfterValueString = async (req, res) => {
     const { afterValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAmTasktemplateAudit = await amTasktemplateAuditService.updateAmTasktemplateAuditByAfterValueString(afterValueString, req.body);
            if (!objAmTasktemplateAudit) {
                util.setError(404, `Cannot find amTasktemplateAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AmTasktemplateAudit updated', objAmTasktemplateAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

amTasktemplatesAuditCtrl.updateAmTasktemplateAuditByBeforeValueText = async (req, res) => {
     const { beforeValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAmTasktemplateAudit = await amTasktemplateAuditService.updateAmTasktemplateAuditByBeforeValueText(beforeValueText, req.body);
            if (!objAmTasktemplateAudit) {
                util.setError(404, `Cannot find amTasktemplateAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AmTasktemplateAudit updated', objAmTasktemplateAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

amTasktemplatesAuditCtrl.updateAmTasktemplateAuditByAfterValueText = async (req, res) => {
     const { afterValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAmTasktemplateAudit = await amTasktemplateAuditService.updateAmTasktemplateAuditByAfterValueText(afterValueText, req.body);
            if (!objAmTasktemplateAudit) {
                util.setError(404, `Cannot find amTasktemplateAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AmTasktemplateAudit updated', objAmTasktemplateAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

amTasktemplatesAuditCtrl.updateAmTasktemplateAuditByDateCreated = async (req, res) => {
     const { dateCreated } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAmTasktemplateAudit = await amTasktemplateAuditService.updateAmTasktemplateAuditByDateCreated(dateCreated, req.body);
            if (!objAmTasktemplateAudit) {
                util.setError(404, `Cannot find amTasktemplateAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AmTasktemplateAudit updated', objAmTasktemplateAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

amTasktemplatesAuditCtrl.updateAmTasktemplateAuditByParentId = async (req, res) => {
     const { parentId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAmTasktemplateAudit = await amTasktemplateAuditService.updateAmTasktemplateAuditByParentId(parentId, req.body);
            if (!objAmTasktemplateAudit) {
                util.setError(404, `Cannot find amTasktemplateAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AmTasktemplateAudit updated', objAmTasktemplateAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = amTasktemplatesAuditCtrl;
//</es-section>
