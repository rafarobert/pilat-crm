/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:01:15 GMT-0400 (Bolivia Time)
 * Time: 14:1:15
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:01:15 GMT-0400 (Bolivia Time)
 * Last time updated: 14:1:15
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const outboundEmailAuditService = require('../services/outbound_email_audit.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const outboundEmailAuditCtrl = {};
outboundEmailAuditCtrl.service = outboundEmailAuditService;


outboundEmailAuditCtrl.getAllOutboundEmailAudit = async (req, res) => {
    try {
        const objOutboundEmailAudit = await outboundEmailAuditService.getAllOutboundEmailAudit(req.query);
        if (objOutboundEmailAudit.length > 0) {
            util.setSuccess(200, 'OutboundEmailAudit retrieved', objOutboundEmailAudit);
        } else {
            util.setSuccess(200, 'No outboundEmailAudit found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

outboundEmailAuditCtrl.getAOutboundEmailAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objOutboundEmailAudit = await outboundEmailAuditService.getAOutboundEmailAudit(id, req.query);
        if (!objOutboundEmailAudit) {
            util.setError(404, `Cannot find outboundEmailAudit with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found outboundEmailAudit', objOutboundEmailAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

outboundEmailAuditCtrl.addOutboundEmailAudit = async (req, res) => {
    try {
        const objOutboundEmailAudit = await outboundEmailAuditService.addOutboundEmailAudit(req.body);
        util.setSuccess(201, 'OutboundEmailAudit Added!', objOutboundEmailAudit);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

outboundEmailAuditCtrl.updateOutboundEmailAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objOutboundEmailAudit = await outboundEmailAuditService.updateOutboundEmailAudit(id, req.body);
        if (!objOutboundEmailAudit) {
            util.setError(404, `Cannot find outboundEmailAudit with the id: ${id}`);
        } else {
            util.setSuccess(200, 'OutboundEmailAudit updated', objOutboundEmailAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

outboundEmailAuditCtrl.deleteOutboundEmailAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objOutboundEmailAudit = await outboundEmailAuditService.deleteOutboundEmailAudit(id);
        if (objOutboundEmailAudit) {
            util.setSuccess(200, 'OutboundEmailAudit deleted', objOutboundEmailAudit);
        } else {
            util.setError(404, `OutboundEmailAudit with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



outboundEmailAuditCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objOutboundEmailAudit = await outboundEmailAuditService.findOneById(id, req.query);
        if (!objOutboundEmailAudit) {
            util.setError(404, `Cannot find outboundEmailAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found outboundEmailAudit', objOutboundEmailAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

outboundEmailAuditCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objOutboundEmailAudit = await outboundEmailAuditService.findOneByCreatedBy(createdBy, req.query);
        if (!objOutboundEmailAudit) {
            util.setError(404, `Cannot find outboundEmailAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found outboundEmailAudit', objOutboundEmailAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

outboundEmailAuditCtrl.findOneByFieldName = async (req, res) => {
    try {
        const { fieldName } = req.params;
        const objOutboundEmailAudit = await outboundEmailAuditService.findOneByFieldName(fieldName, req.query);
        if (!objOutboundEmailAudit) {
            util.setError(404, `Cannot find outboundEmailAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found outboundEmailAudit', objOutboundEmailAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

outboundEmailAuditCtrl.findOneByDataType = async (req, res) => {
    try {
        const { dataType } = req.params;
        const objOutboundEmailAudit = await outboundEmailAuditService.findOneByDataType(dataType, req.query);
        if (!objOutboundEmailAudit) {
            util.setError(404, `Cannot find outboundEmailAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found outboundEmailAudit', objOutboundEmailAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

outboundEmailAuditCtrl.findOneByBeforeValueString = async (req, res) => {
    try {
        const { beforeValueString } = req.params;
        const objOutboundEmailAudit = await outboundEmailAuditService.findOneByBeforeValueString(beforeValueString, req.query);
        if (!objOutboundEmailAudit) {
            util.setError(404, `Cannot find outboundEmailAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found outboundEmailAudit', objOutboundEmailAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

outboundEmailAuditCtrl.findOneByAfterValueString = async (req, res) => {
    try {
        const { afterValueString } = req.params;
        const objOutboundEmailAudit = await outboundEmailAuditService.findOneByAfterValueString(afterValueString, req.query);
        if (!objOutboundEmailAudit) {
            util.setError(404, `Cannot find outboundEmailAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found outboundEmailAudit', objOutboundEmailAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

outboundEmailAuditCtrl.findOneByBeforeValueText = async (req, res) => {
    try {
        const { beforeValueText } = req.params;
        const objOutboundEmailAudit = await outboundEmailAuditService.findOneByBeforeValueText(beforeValueText, req.query);
        if (!objOutboundEmailAudit) {
            util.setError(404, `Cannot find outboundEmailAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found outboundEmailAudit', objOutboundEmailAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

outboundEmailAuditCtrl.findOneByAfterValueText = async (req, res) => {
    try {
        const { afterValueText } = req.params;
        const objOutboundEmailAudit = await outboundEmailAuditService.findOneByAfterValueText(afterValueText, req.query);
        if (!objOutboundEmailAudit) {
            util.setError(404, `Cannot find outboundEmailAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found outboundEmailAudit', objOutboundEmailAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

outboundEmailAuditCtrl.findOneByDateCreated = async (req, res) => {
    try {
        const { dateCreated } = req.params;
        const objOutboundEmailAudit = await outboundEmailAuditService.findOneByDateCreated(dateCreated, req.query);
        if (!objOutboundEmailAudit) {
            util.setError(404, `Cannot find outboundEmailAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found outboundEmailAudit', objOutboundEmailAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

outboundEmailAuditCtrl.findOneByParentId = async (req, res) => {
    try {
        const { parentId } = req.params;
        const objOutboundEmailAudit = await outboundEmailAuditService.findOneByParentId(parentId, req.query);
        if (!objOutboundEmailAudit) {
            util.setError(404, `Cannot find outboundEmailAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found outboundEmailAudit', objOutboundEmailAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



outboundEmailAuditCtrl.updateOutboundEmailAuditById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOutboundEmailAudit = await outboundEmailAuditService.updateOutboundEmailAuditById(id, req.body);
            if (!objOutboundEmailAudit) {
                util.setError(404, `Cannot find outboundEmailAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'OutboundEmailAudit updated', objOutboundEmailAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

outboundEmailAuditCtrl.updateOutboundEmailAuditByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOutboundEmailAudit = await outboundEmailAuditService.updateOutboundEmailAuditByCreatedBy(createdBy, req.body);
            if (!objOutboundEmailAudit) {
                util.setError(404, `Cannot find outboundEmailAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'OutboundEmailAudit updated', objOutboundEmailAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

outboundEmailAuditCtrl.updateOutboundEmailAuditByFieldName = async (req, res) => {
     const { fieldName } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOutboundEmailAudit = await outboundEmailAuditService.updateOutboundEmailAuditByFieldName(fieldName, req.body);
            if (!objOutboundEmailAudit) {
                util.setError(404, `Cannot find outboundEmailAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'OutboundEmailAudit updated', objOutboundEmailAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

outboundEmailAuditCtrl.updateOutboundEmailAuditByDataType = async (req, res) => {
     const { dataType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOutboundEmailAudit = await outboundEmailAuditService.updateOutboundEmailAuditByDataType(dataType, req.body);
            if (!objOutboundEmailAudit) {
                util.setError(404, `Cannot find outboundEmailAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'OutboundEmailAudit updated', objOutboundEmailAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

outboundEmailAuditCtrl.updateOutboundEmailAuditByBeforeValueString = async (req, res) => {
     const { beforeValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOutboundEmailAudit = await outboundEmailAuditService.updateOutboundEmailAuditByBeforeValueString(beforeValueString, req.body);
            if (!objOutboundEmailAudit) {
                util.setError(404, `Cannot find outboundEmailAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'OutboundEmailAudit updated', objOutboundEmailAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

outboundEmailAuditCtrl.updateOutboundEmailAuditByAfterValueString = async (req, res) => {
     const { afterValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOutboundEmailAudit = await outboundEmailAuditService.updateOutboundEmailAuditByAfterValueString(afterValueString, req.body);
            if (!objOutboundEmailAudit) {
                util.setError(404, `Cannot find outboundEmailAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'OutboundEmailAudit updated', objOutboundEmailAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

outboundEmailAuditCtrl.updateOutboundEmailAuditByBeforeValueText = async (req, res) => {
     const { beforeValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOutboundEmailAudit = await outboundEmailAuditService.updateOutboundEmailAuditByBeforeValueText(beforeValueText, req.body);
            if (!objOutboundEmailAudit) {
                util.setError(404, `Cannot find outboundEmailAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'OutboundEmailAudit updated', objOutboundEmailAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

outboundEmailAuditCtrl.updateOutboundEmailAuditByAfterValueText = async (req, res) => {
     const { afterValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOutboundEmailAudit = await outboundEmailAuditService.updateOutboundEmailAuditByAfterValueText(afterValueText, req.body);
            if (!objOutboundEmailAudit) {
                util.setError(404, `Cannot find outboundEmailAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'OutboundEmailAudit updated', objOutboundEmailAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

outboundEmailAuditCtrl.updateOutboundEmailAuditByDateCreated = async (req, res) => {
     const { dateCreated } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOutboundEmailAudit = await outboundEmailAuditService.updateOutboundEmailAuditByDateCreated(dateCreated, req.body);
            if (!objOutboundEmailAudit) {
                util.setError(404, `Cannot find outboundEmailAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'OutboundEmailAudit updated', objOutboundEmailAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

outboundEmailAuditCtrl.updateOutboundEmailAuditByParentId = async (req, res) => {
     const { parentId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOutboundEmailAudit = await outboundEmailAuditService.updateOutboundEmailAuditByParentId(parentId, req.body);
            if (!objOutboundEmailAudit) {
                util.setError(404, `Cannot find outboundEmailAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'OutboundEmailAudit updated', objOutboundEmailAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = outboundEmailAuditCtrl;
//</es-section>
