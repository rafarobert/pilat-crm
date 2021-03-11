/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:06 GMT-0400 (Bolivia Time)
 * Time: 14:56:6
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:06 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:6
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const models = require('../../express');
const aorReportAuditService = require('../services/aor_reports_audit.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const aorReportsAuditCtrl = {};
aorReportsAuditCtrl.service = aorReportAuditService;


aorReportsAuditCtrl.getAllAorReportsAudit = async (req, res) => {
    try {
        const { length } = req.body;
        const { start } = req.body;
        const [column, dir] = util.getOrderByColumnDirection(models.sequelize.aorReportsAudit.rawAttributes,req.body);
        req.query.limit = length ? length : req.query.limit;
        req.query.offset = start ? start : req.query.offset;
        req.query.order = column && dir ? [[column,dir]] : req.query.order;

        const objAorReportsAudit = await aorReportAuditService.getAllAorReportsAudit(req.query);
        if (objAorReportsAudit && objAorReportsAudit.rows && objAorReportsAudit.count) {
            util.setSuccess(200, 'AorReportsAudit retrieved', objAorReportsAudit.rows, objAorReportsAudit.count, req.query.limit, req.query.offset);
        } else {
            util.setSuccess(200, 'No aorReportAudit found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aorReportsAuditCtrl.getAAorReportAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAorReportAudit = await aorReportAuditService.getAAorReportAudit(id, req.query);
        if (!objAorReportAudit) {
            util.setError(404, `Cannot find aorReportAudit with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found aorReportAudit', objAorReportAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aorReportsAuditCtrl.addAorReportAudit = async (req, res) => {
    try {
        const objAorReportAudit = await aorReportAuditService.addAorReportAudit(req.body);
        util.setSuccess(201, 'AorReportAudit Added!', objAorReportAudit);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aorReportsAuditCtrl.updateAorReportAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAorReportAudit = await aorReportAuditService.updateAorReportAudit(id, req.body);
        if (!objAorReportAudit) {
            util.setError(404, `Cannot find aorReportAudit with the id: ${id}`);
        } else {
            util.setSuccess(200, 'AorReportAudit updated', objAorReportAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

aorReportsAuditCtrl.deleteAorReportAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objAorReportAudit = await aorReportAuditService.deleteAorReportAudit(id);
        if (objAorReportAudit) {
            util.setSuccess(200, 'AorReportAudit deleted', objAorReportAudit);
        } else {
            util.setError(404, `AorReportAudit with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



aorReportsAuditCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objAorReportAudit = await aorReportAuditService.findOneById(id, req.query);
        if (!objAorReportAudit) {
            util.setError(404, `Cannot find aorReportAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aorReportAudit', objAorReportAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aorReportsAuditCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objAorReportAudit = await aorReportAuditService.findOneByCreatedBy(createdBy, req.query);
        if (!objAorReportAudit) {
            util.setError(404, `Cannot find aorReportAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aorReportAudit', objAorReportAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aorReportsAuditCtrl.findOneByFieldName = async (req, res) => {
    try {
        const { fieldName } = req.params;
        const objAorReportAudit = await aorReportAuditService.findOneByFieldName(fieldName, req.query);
        if (!objAorReportAudit) {
            util.setError(404, `Cannot find aorReportAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aorReportAudit', objAorReportAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aorReportsAuditCtrl.findOneByDataType = async (req, res) => {
    try {
        const { dataType } = req.params;
        const objAorReportAudit = await aorReportAuditService.findOneByDataType(dataType, req.query);
        if (!objAorReportAudit) {
            util.setError(404, `Cannot find aorReportAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aorReportAudit', objAorReportAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aorReportsAuditCtrl.findOneByBeforeValueString = async (req, res) => {
    try {
        const { beforeValueString } = req.params;
        const objAorReportAudit = await aorReportAuditService.findOneByBeforeValueString(beforeValueString, req.query);
        if (!objAorReportAudit) {
            util.setError(404, `Cannot find aorReportAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aorReportAudit', objAorReportAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aorReportsAuditCtrl.findOneByAfterValueString = async (req, res) => {
    try {
        const { afterValueString } = req.params;
        const objAorReportAudit = await aorReportAuditService.findOneByAfterValueString(afterValueString, req.query);
        if (!objAorReportAudit) {
            util.setError(404, `Cannot find aorReportAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aorReportAudit', objAorReportAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aorReportsAuditCtrl.findOneByBeforeValueText = async (req, res) => {
    try {
        const { beforeValueText } = req.params;
        const objAorReportAudit = await aorReportAuditService.findOneByBeforeValueText(beforeValueText, req.query);
        if (!objAorReportAudit) {
            util.setError(404, `Cannot find aorReportAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aorReportAudit', objAorReportAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aorReportsAuditCtrl.findOneByAfterValueText = async (req, res) => {
    try {
        const { afterValueText } = req.params;
        const objAorReportAudit = await aorReportAuditService.findOneByAfterValueText(afterValueText, req.query);
        if (!objAorReportAudit) {
            util.setError(404, `Cannot find aorReportAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aorReportAudit', objAorReportAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aorReportsAuditCtrl.findOneByDateCreated = async (req, res) => {
    try {
        const { dateCreated } = req.params;
        const objAorReportAudit = await aorReportAuditService.findOneByDateCreated(dateCreated, req.query);
        if (!objAorReportAudit) {
            util.setError(404, `Cannot find aorReportAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aorReportAudit', objAorReportAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aorReportsAuditCtrl.findOneByParentId = async (req, res) => {
    try {
        const { parentId } = req.params;
        const objAorReportAudit = await aorReportAuditService.findOneByParentId(parentId, req.query);
        if (!objAorReportAudit) {
            util.setError(404, `Cannot find aorReportAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aorReportAudit', objAorReportAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



aorReportsAuditCtrl.updateAorReportAuditById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAorReportAudit = await aorReportAuditService.updateAorReportAuditById(id, req.body);
            if (!objAorReportAudit) {
                util.setError(404, `Cannot find aorReportAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AorReportAudit updated', objAorReportAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aorReportsAuditCtrl.updateAorReportAuditByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAorReportAudit = await aorReportAuditService.updateAorReportAuditByCreatedBy(createdBy, req.body);
            if (!objAorReportAudit) {
                util.setError(404, `Cannot find aorReportAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AorReportAudit updated', objAorReportAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aorReportsAuditCtrl.updateAorReportAuditByFieldName = async (req, res) => {
     const { fieldName } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAorReportAudit = await aorReportAuditService.updateAorReportAuditByFieldName(fieldName, req.body);
            if (!objAorReportAudit) {
                util.setError(404, `Cannot find aorReportAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AorReportAudit updated', objAorReportAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aorReportsAuditCtrl.updateAorReportAuditByDataType = async (req, res) => {
     const { dataType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAorReportAudit = await aorReportAuditService.updateAorReportAuditByDataType(dataType, req.body);
            if (!objAorReportAudit) {
                util.setError(404, `Cannot find aorReportAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AorReportAudit updated', objAorReportAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aorReportsAuditCtrl.updateAorReportAuditByBeforeValueString = async (req, res) => {
     const { beforeValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAorReportAudit = await aorReportAuditService.updateAorReportAuditByBeforeValueString(beforeValueString, req.body);
            if (!objAorReportAudit) {
                util.setError(404, `Cannot find aorReportAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AorReportAudit updated', objAorReportAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aorReportsAuditCtrl.updateAorReportAuditByAfterValueString = async (req, res) => {
     const { afterValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAorReportAudit = await aorReportAuditService.updateAorReportAuditByAfterValueString(afterValueString, req.body);
            if (!objAorReportAudit) {
                util.setError(404, `Cannot find aorReportAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AorReportAudit updated', objAorReportAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aorReportsAuditCtrl.updateAorReportAuditByBeforeValueText = async (req, res) => {
     const { beforeValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAorReportAudit = await aorReportAuditService.updateAorReportAuditByBeforeValueText(beforeValueText, req.body);
            if (!objAorReportAudit) {
                util.setError(404, `Cannot find aorReportAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AorReportAudit updated', objAorReportAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aorReportsAuditCtrl.updateAorReportAuditByAfterValueText = async (req, res) => {
     const { afterValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAorReportAudit = await aorReportAuditService.updateAorReportAuditByAfterValueText(afterValueText, req.body);
            if (!objAorReportAudit) {
                util.setError(404, `Cannot find aorReportAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AorReportAudit updated', objAorReportAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aorReportsAuditCtrl.updateAorReportAuditByDateCreated = async (req, res) => {
     const { dateCreated } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAorReportAudit = await aorReportAuditService.updateAorReportAuditByDateCreated(dateCreated, req.body);
            if (!objAorReportAudit) {
                util.setError(404, `Cannot find aorReportAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AorReportAudit updated', objAorReportAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aorReportsAuditCtrl.updateAorReportAuditByParentId = async (req, res) => {
     const { parentId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAorReportAudit = await aorReportAuditService.updateAorReportAuditByParentId(parentId, req.body);
            if (!objAorReportAudit) {
                util.setError(404, `Cannot find aorReportAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AorReportAudit updated', objAorReportAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = aorReportsAuditCtrl;
//</es-section>
