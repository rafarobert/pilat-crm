/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:12 GMT-0400 (Bolivia Time)
 * Time: 14:57:12
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:12 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:12
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const models = require('../../express');
const leadAuditService = require('../services/leads_audit.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const leadsAuditCtrl = {};
leadsAuditCtrl.service = leadAuditService;


leadsAuditCtrl.getAllLeadsAudit = async (req, res) => {
    try {
        const { length } = req.body;
        const { start } = req.body;
        const [column, dir] = util.getOrderByColumnDirection(models.sequelize.leadsAudit.rawAttributes,req.body);
        req.query.limit = length ? length : req.query.limit;
        req.query.offset = start ? start : req.query.offset;
        req.query.order = column && dir ? [[column,dir]] : req.query.order;

        const objLeadsAudit = await leadAuditService.getAllLeadsAudit(req.query);
        if (objLeadsAudit && objLeadsAudit.rows && objLeadsAudit.count) {
            util.setSuccess(200, 'LeadsAudit retrieved', objLeadsAudit.rows, objLeadsAudit.count, req.query.limit, req.query.offset);
        } else {
            util.setSuccess(200, 'No leadAudit found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsAuditCtrl.getALeadAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objLeadAudit = await leadAuditService.getALeadAudit(id, req.query);
        if (!objLeadAudit) {
            util.setError(404, `Cannot find leadAudit with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found leadAudit', objLeadAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsAuditCtrl.addLeadAudit = async (req, res) => {
    try {
        const objLeadAudit = await leadAuditService.addLeadAudit(req.body);
        util.setSuccess(201, 'LeadAudit Added!', objLeadAudit);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsAuditCtrl.updateLeadAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objLeadAudit = await leadAuditService.updateLeadAudit(id, req.body);
        if (!objLeadAudit) {
            util.setError(404, `Cannot find leadAudit with the id: ${id}`);
        } else {
            util.setSuccess(200, 'LeadAudit updated', objLeadAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

leadsAuditCtrl.deleteLeadAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objLeadAudit = await leadAuditService.deleteLeadAudit(id);
        if (objLeadAudit) {
            util.setSuccess(200, 'LeadAudit deleted', objLeadAudit);
        } else {
            util.setError(404, `LeadAudit with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



leadsAuditCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objLeadAudit = await leadAuditService.findOneById(id, req.query);
        if (!objLeadAudit) {
            util.setError(404, `Cannot find leadAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found leadAudit', objLeadAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsAuditCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objLeadAudit = await leadAuditService.findOneByCreatedBy(createdBy, req.query);
        if (!objLeadAudit) {
            util.setError(404, `Cannot find leadAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found leadAudit', objLeadAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsAuditCtrl.findOneByFieldName = async (req, res) => {
    try {
        const { fieldName } = req.params;
        const objLeadAudit = await leadAuditService.findOneByFieldName(fieldName, req.query);
        if (!objLeadAudit) {
            util.setError(404, `Cannot find leadAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found leadAudit', objLeadAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsAuditCtrl.findOneByDataType = async (req, res) => {
    try {
        const { dataType } = req.params;
        const objLeadAudit = await leadAuditService.findOneByDataType(dataType, req.query);
        if (!objLeadAudit) {
            util.setError(404, `Cannot find leadAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found leadAudit', objLeadAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsAuditCtrl.findOneByBeforeValueString = async (req, res) => {
    try {
        const { beforeValueString } = req.params;
        const objLeadAudit = await leadAuditService.findOneByBeforeValueString(beforeValueString, req.query);
        if (!objLeadAudit) {
            util.setError(404, `Cannot find leadAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found leadAudit', objLeadAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsAuditCtrl.findOneByAfterValueString = async (req, res) => {
    try {
        const { afterValueString } = req.params;
        const objLeadAudit = await leadAuditService.findOneByAfterValueString(afterValueString, req.query);
        if (!objLeadAudit) {
            util.setError(404, `Cannot find leadAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found leadAudit', objLeadAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsAuditCtrl.findOneByBeforeValueText = async (req, res) => {
    try {
        const { beforeValueText } = req.params;
        const objLeadAudit = await leadAuditService.findOneByBeforeValueText(beforeValueText, req.query);
        if (!objLeadAudit) {
            util.setError(404, `Cannot find leadAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found leadAudit', objLeadAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsAuditCtrl.findOneByAfterValueText = async (req, res) => {
    try {
        const { afterValueText } = req.params;
        const objLeadAudit = await leadAuditService.findOneByAfterValueText(afterValueText, req.query);
        if (!objLeadAudit) {
            util.setError(404, `Cannot find leadAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found leadAudit', objLeadAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsAuditCtrl.findOneByDateCreated = async (req, res) => {
    try {
        const { dateCreated } = req.params;
        const objLeadAudit = await leadAuditService.findOneByDateCreated(dateCreated, req.query);
        if (!objLeadAudit) {
            util.setError(404, `Cannot find leadAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found leadAudit', objLeadAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsAuditCtrl.findOneByParentId = async (req, res) => {
    try {
        const { parentId } = req.params;
        const objLeadAudit = await leadAuditService.findOneByParentId(parentId, req.query);
        if (!objLeadAudit) {
            util.setError(404, `Cannot find leadAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found leadAudit', objLeadAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



leadsAuditCtrl.updateLeadAuditById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLeadAudit = await leadAuditService.updateLeadAuditById(id, req.body);
            if (!objLeadAudit) {
                util.setError(404, `Cannot find leadAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'LeadAudit updated', objLeadAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsAuditCtrl.updateLeadAuditByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLeadAudit = await leadAuditService.updateLeadAuditByCreatedBy(createdBy, req.body);
            if (!objLeadAudit) {
                util.setError(404, `Cannot find leadAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'LeadAudit updated', objLeadAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsAuditCtrl.updateLeadAuditByFieldName = async (req, res) => {
     const { fieldName } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLeadAudit = await leadAuditService.updateLeadAuditByFieldName(fieldName, req.body);
            if (!objLeadAudit) {
                util.setError(404, `Cannot find leadAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'LeadAudit updated', objLeadAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsAuditCtrl.updateLeadAuditByDataType = async (req, res) => {
     const { dataType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLeadAudit = await leadAuditService.updateLeadAuditByDataType(dataType, req.body);
            if (!objLeadAudit) {
                util.setError(404, `Cannot find leadAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'LeadAudit updated', objLeadAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsAuditCtrl.updateLeadAuditByBeforeValueString = async (req, res) => {
     const { beforeValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLeadAudit = await leadAuditService.updateLeadAuditByBeforeValueString(beforeValueString, req.body);
            if (!objLeadAudit) {
                util.setError(404, `Cannot find leadAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'LeadAudit updated', objLeadAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsAuditCtrl.updateLeadAuditByAfterValueString = async (req, res) => {
     const { afterValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLeadAudit = await leadAuditService.updateLeadAuditByAfterValueString(afterValueString, req.body);
            if (!objLeadAudit) {
                util.setError(404, `Cannot find leadAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'LeadAudit updated', objLeadAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsAuditCtrl.updateLeadAuditByBeforeValueText = async (req, res) => {
     const { beforeValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLeadAudit = await leadAuditService.updateLeadAuditByBeforeValueText(beforeValueText, req.body);
            if (!objLeadAudit) {
                util.setError(404, `Cannot find leadAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'LeadAudit updated', objLeadAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsAuditCtrl.updateLeadAuditByAfterValueText = async (req, res) => {
     const { afterValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLeadAudit = await leadAuditService.updateLeadAuditByAfterValueText(afterValueText, req.body);
            if (!objLeadAudit) {
                util.setError(404, `Cannot find leadAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'LeadAudit updated', objLeadAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsAuditCtrl.updateLeadAuditByDateCreated = async (req, res) => {
     const { dateCreated } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLeadAudit = await leadAuditService.updateLeadAuditByDateCreated(dateCreated, req.body);
            if (!objLeadAudit) {
                util.setError(404, `Cannot find leadAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'LeadAudit updated', objLeadAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsAuditCtrl.updateLeadAuditByParentId = async (req, res) => {
     const { parentId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLeadAudit = await leadAuditService.updateLeadAuditByParentId(parentId, req.body);
            if (!objLeadAudit) {
                util.setError(404, `Cannot find leadAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'LeadAudit updated', objLeadAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = leadsAuditCtrl;
//</es-section>
