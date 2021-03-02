/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:02 GMT-0400 (Bolivia Time)
 * Time: 14:0:2
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:02 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:2
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const amProjecttemplateAuditService = require('../services/am_projecttemplates_audit.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const amProjecttemplatesAuditCtrl = {};
amProjecttemplatesAuditCtrl.service = amProjecttemplateAuditService;


amProjecttemplatesAuditCtrl.getAllAmProjecttemplatesAudit = async (req, res) => {
    try {
        const objAmProjecttemplatesAudit = await amProjecttemplateAuditService.getAllAmProjecttemplatesAudit(req.query);
        if (objAmProjecttemplatesAudit.length > 0) {
            util.setSuccess(200, 'AmProjecttemplatesAudit retrieved', objAmProjecttemplatesAudit);
        } else {
            util.setSuccess(200, 'No amProjecttemplateAudit found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amProjecttemplatesAuditCtrl.getAAmProjecttemplateAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAmProjecttemplateAudit = await amProjecttemplateAuditService.getAAmProjecttemplateAudit(id, req.query);
        if (!objAmProjecttemplateAudit) {
            util.setError(404, `Cannot find amProjecttemplateAudit with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found amProjecttemplateAudit', objAmProjecttemplateAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amProjecttemplatesAuditCtrl.addAmProjecttemplateAudit = async (req, res) => {
    try {
        const objAmProjecttemplateAudit = await amProjecttemplateAuditService.addAmProjecttemplateAudit(req.body);
        util.setSuccess(201, 'AmProjecttemplateAudit Added!', objAmProjecttemplateAudit);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amProjecttemplatesAuditCtrl.updateAmProjecttemplateAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAmProjecttemplateAudit = await amProjecttemplateAuditService.updateAmProjecttemplateAudit(id, req.body);
        if (!objAmProjecttemplateAudit) {
            util.setError(404, `Cannot find amProjecttemplateAudit with the id: ${id}`);
        } else {
            util.setSuccess(200, 'AmProjecttemplateAudit updated', objAmProjecttemplateAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

amProjecttemplatesAuditCtrl.deleteAmProjecttemplateAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objAmProjecttemplateAudit = await amProjecttemplateAuditService.deleteAmProjecttemplateAudit(id);
        if (objAmProjecttemplateAudit) {
            util.setSuccess(200, 'AmProjecttemplateAudit deleted', objAmProjecttemplateAudit);
        } else {
            util.setError(404, `AmProjecttemplateAudit with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



amProjecttemplatesAuditCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objAmProjecttemplateAudit = await amProjecttemplateAuditService.findOneById(id, req.query);
        if (!objAmProjecttemplateAudit) {
            util.setError(404, `Cannot find amProjecttemplateAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found amProjecttemplateAudit', objAmProjecttemplateAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amProjecttemplatesAuditCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objAmProjecttemplateAudit = await amProjecttemplateAuditService.findOneByCreatedBy(createdBy, req.query);
        if (!objAmProjecttemplateAudit) {
            util.setError(404, `Cannot find amProjecttemplateAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found amProjecttemplateAudit', objAmProjecttemplateAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amProjecttemplatesAuditCtrl.findOneByFieldName = async (req, res) => {
    try {
        const { fieldName } = req.params;
        const objAmProjecttemplateAudit = await amProjecttemplateAuditService.findOneByFieldName(fieldName, req.query);
        if (!objAmProjecttemplateAudit) {
            util.setError(404, `Cannot find amProjecttemplateAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found amProjecttemplateAudit', objAmProjecttemplateAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amProjecttemplatesAuditCtrl.findOneByDataType = async (req, res) => {
    try {
        const { dataType } = req.params;
        const objAmProjecttemplateAudit = await amProjecttemplateAuditService.findOneByDataType(dataType, req.query);
        if (!objAmProjecttemplateAudit) {
            util.setError(404, `Cannot find amProjecttemplateAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found amProjecttemplateAudit', objAmProjecttemplateAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amProjecttemplatesAuditCtrl.findOneByBeforeValueString = async (req, res) => {
    try {
        const { beforeValueString } = req.params;
        const objAmProjecttemplateAudit = await amProjecttemplateAuditService.findOneByBeforeValueString(beforeValueString, req.query);
        if (!objAmProjecttemplateAudit) {
            util.setError(404, `Cannot find amProjecttemplateAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found amProjecttemplateAudit', objAmProjecttemplateAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amProjecttemplatesAuditCtrl.findOneByAfterValueString = async (req, res) => {
    try {
        const { afterValueString } = req.params;
        const objAmProjecttemplateAudit = await amProjecttemplateAuditService.findOneByAfterValueString(afterValueString, req.query);
        if (!objAmProjecttemplateAudit) {
            util.setError(404, `Cannot find amProjecttemplateAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found amProjecttemplateAudit', objAmProjecttemplateAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amProjecttemplatesAuditCtrl.findOneByBeforeValueText = async (req, res) => {
    try {
        const { beforeValueText } = req.params;
        const objAmProjecttemplateAudit = await amProjecttemplateAuditService.findOneByBeforeValueText(beforeValueText, req.query);
        if (!objAmProjecttemplateAudit) {
            util.setError(404, `Cannot find amProjecttemplateAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found amProjecttemplateAudit', objAmProjecttemplateAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amProjecttemplatesAuditCtrl.findOneByAfterValueText = async (req, res) => {
    try {
        const { afterValueText } = req.params;
        const objAmProjecttemplateAudit = await amProjecttemplateAuditService.findOneByAfterValueText(afterValueText, req.query);
        if (!objAmProjecttemplateAudit) {
            util.setError(404, `Cannot find amProjecttemplateAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found amProjecttemplateAudit', objAmProjecttemplateAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amProjecttemplatesAuditCtrl.findOneByDateCreated = async (req, res) => {
    try {
        const { dateCreated } = req.params;
        const objAmProjecttemplateAudit = await amProjecttemplateAuditService.findOneByDateCreated(dateCreated, req.query);
        if (!objAmProjecttemplateAudit) {
            util.setError(404, `Cannot find amProjecttemplateAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found amProjecttemplateAudit', objAmProjecttemplateAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

amProjecttemplatesAuditCtrl.findOneByParentId = async (req, res) => {
    try {
        const { parentId } = req.params;
        const objAmProjecttemplateAudit = await amProjecttemplateAuditService.findOneByParentId(parentId, req.query);
        if (!objAmProjecttemplateAudit) {
            util.setError(404, `Cannot find amProjecttemplateAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found amProjecttemplateAudit', objAmProjecttemplateAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



amProjecttemplatesAuditCtrl.updateAmProjecttemplateAuditById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAmProjecttemplateAudit = await amProjecttemplateAuditService.updateAmProjecttemplateAuditById(id, req.body);
            if (!objAmProjecttemplateAudit) {
                util.setError(404, `Cannot find amProjecttemplateAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AmProjecttemplateAudit updated', objAmProjecttemplateAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

amProjecttemplatesAuditCtrl.updateAmProjecttemplateAuditByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAmProjecttemplateAudit = await amProjecttemplateAuditService.updateAmProjecttemplateAuditByCreatedBy(createdBy, req.body);
            if (!objAmProjecttemplateAudit) {
                util.setError(404, `Cannot find amProjecttemplateAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AmProjecttemplateAudit updated', objAmProjecttemplateAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

amProjecttemplatesAuditCtrl.updateAmProjecttemplateAuditByFieldName = async (req, res) => {
     const { fieldName } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAmProjecttemplateAudit = await amProjecttemplateAuditService.updateAmProjecttemplateAuditByFieldName(fieldName, req.body);
            if (!objAmProjecttemplateAudit) {
                util.setError(404, `Cannot find amProjecttemplateAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AmProjecttemplateAudit updated', objAmProjecttemplateAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

amProjecttemplatesAuditCtrl.updateAmProjecttemplateAuditByDataType = async (req, res) => {
     const { dataType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAmProjecttemplateAudit = await amProjecttemplateAuditService.updateAmProjecttemplateAuditByDataType(dataType, req.body);
            if (!objAmProjecttemplateAudit) {
                util.setError(404, `Cannot find amProjecttemplateAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AmProjecttemplateAudit updated', objAmProjecttemplateAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

amProjecttemplatesAuditCtrl.updateAmProjecttemplateAuditByBeforeValueString = async (req, res) => {
     const { beforeValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAmProjecttemplateAudit = await amProjecttemplateAuditService.updateAmProjecttemplateAuditByBeforeValueString(beforeValueString, req.body);
            if (!objAmProjecttemplateAudit) {
                util.setError(404, `Cannot find amProjecttemplateAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AmProjecttemplateAudit updated', objAmProjecttemplateAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

amProjecttemplatesAuditCtrl.updateAmProjecttemplateAuditByAfterValueString = async (req, res) => {
     const { afterValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAmProjecttemplateAudit = await amProjecttemplateAuditService.updateAmProjecttemplateAuditByAfterValueString(afterValueString, req.body);
            if (!objAmProjecttemplateAudit) {
                util.setError(404, `Cannot find amProjecttemplateAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AmProjecttemplateAudit updated', objAmProjecttemplateAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

amProjecttemplatesAuditCtrl.updateAmProjecttemplateAuditByBeforeValueText = async (req, res) => {
     const { beforeValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAmProjecttemplateAudit = await amProjecttemplateAuditService.updateAmProjecttemplateAuditByBeforeValueText(beforeValueText, req.body);
            if (!objAmProjecttemplateAudit) {
                util.setError(404, `Cannot find amProjecttemplateAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AmProjecttemplateAudit updated', objAmProjecttemplateAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

amProjecttemplatesAuditCtrl.updateAmProjecttemplateAuditByAfterValueText = async (req, res) => {
     const { afterValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAmProjecttemplateAudit = await amProjecttemplateAuditService.updateAmProjecttemplateAuditByAfterValueText(afterValueText, req.body);
            if (!objAmProjecttemplateAudit) {
                util.setError(404, `Cannot find amProjecttemplateAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AmProjecttemplateAudit updated', objAmProjecttemplateAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

amProjecttemplatesAuditCtrl.updateAmProjecttemplateAuditByDateCreated = async (req, res) => {
     const { dateCreated } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAmProjecttemplateAudit = await amProjecttemplateAuditService.updateAmProjecttemplateAuditByDateCreated(dateCreated, req.body);
            if (!objAmProjecttemplateAudit) {
                util.setError(404, `Cannot find amProjecttemplateAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AmProjecttemplateAudit updated', objAmProjecttemplateAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

amProjecttemplatesAuditCtrl.updateAmProjecttemplateAuditByParentId = async (req, res) => {
     const { parentId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAmProjecttemplateAudit = await amProjecttemplateAuditService.updateAmProjecttemplateAuditByParentId(parentId, req.body);
            if (!objAmProjecttemplateAudit) {
                util.setError(404, `Cannot find amProjecttemplateAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AmProjecttemplateAudit updated', objAmProjecttemplateAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = amProjecttemplatesAuditCtrl;
//</es-section>
