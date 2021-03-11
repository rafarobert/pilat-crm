/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:51 GMT-0400 (Bolivia Time)
 * Time: 14:56:51
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:51 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:51
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const models = require('../../express');
const erpClienteAuditService = require('../services/erp_cliente_audit.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const erpClienteAuditCtrl = {};
erpClienteAuditCtrl.service = erpClienteAuditService;


erpClienteAuditCtrl.getAllErpClienteAudit = async (req, res) => {
    try {
        const { length } = req.body;
        const { start } = req.body;
        const [column, dir] = util.getOrderByColumnDirection(models.sequelize.erpClienteAudit.rawAttributes,req.body);
        req.query.limit = length ? length : req.query.limit;
        req.query.offset = start ? start : req.query.offset;
        req.query.order = column && dir ? [[column,dir]] : req.query.order;

        const objErpClienteAudit = await erpClienteAuditService.getAllErpClienteAudit(req.query);
        if (objErpClienteAudit && objErpClienteAudit.rows && objErpClienteAudit.count) {
            util.setSuccess(200, 'ErpClienteAudit retrieved', objErpClienteAudit.rows, objErpClienteAudit.count, req.query.limit, req.query.offset);
        } else {
            util.setSuccess(200, 'No erpClienteAudit found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

erpClienteAuditCtrl.getAErpClienteAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objErpClienteAudit = await erpClienteAuditService.getAErpClienteAudit(id, req.query);
        if (!objErpClienteAudit) {
            util.setError(404, `Cannot find erpClienteAudit with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found erpClienteAudit', objErpClienteAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

erpClienteAuditCtrl.addErpClienteAudit = async (req, res) => {
    try {
        const objErpClienteAudit = await erpClienteAuditService.addErpClienteAudit(req.body);
        util.setSuccess(201, 'ErpClienteAudit Added!', objErpClienteAudit);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

erpClienteAuditCtrl.updateErpClienteAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objErpClienteAudit = await erpClienteAuditService.updateErpClienteAudit(id, req.body);
        if (!objErpClienteAudit) {
            util.setError(404, `Cannot find erpClienteAudit with the id: ${id}`);
        } else {
            util.setSuccess(200, 'ErpClienteAudit updated', objErpClienteAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

erpClienteAuditCtrl.deleteErpClienteAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objErpClienteAudit = await erpClienteAuditService.deleteErpClienteAudit(id);
        if (objErpClienteAudit) {
            util.setSuccess(200, 'ErpClienteAudit deleted', objErpClienteAudit);
        } else {
            util.setError(404, `ErpClienteAudit with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



erpClienteAuditCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objErpClienteAudit = await erpClienteAuditService.findOneById(id, req.query);
        if (!objErpClienteAudit) {
            util.setError(404, `Cannot find erpClienteAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found erpClienteAudit', objErpClienteAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

erpClienteAuditCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objErpClienteAudit = await erpClienteAuditService.findOneByCreatedBy(createdBy, req.query);
        if (!objErpClienteAudit) {
            util.setError(404, `Cannot find erpClienteAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found erpClienteAudit', objErpClienteAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

erpClienteAuditCtrl.findOneByFieldName = async (req, res) => {
    try {
        const { fieldName } = req.params;
        const objErpClienteAudit = await erpClienteAuditService.findOneByFieldName(fieldName, req.query);
        if (!objErpClienteAudit) {
            util.setError(404, `Cannot find erpClienteAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found erpClienteAudit', objErpClienteAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

erpClienteAuditCtrl.findOneByDataType = async (req, res) => {
    try {
        const { dataType } = req.params;
        const objErpClienteAudit = await erpClienteAuditService.findOneByDataType(dataType, req.query);
        if (!objErpClienteAudit) {
            util.setError(404, `Cannot find erpClienteAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found erpClienteAudit', objErpClienteAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

erpClienteAuditCtrl.findOneByBeforeValueString = async (req, res) => {
    try {
        const { beforeValueString } = req.params;
        const objErpClienteAudit = await erpClienteAuditService.findOneByBeforeValueString(beforeValueString, req.query);
        if (!objErpClienteAudit) {
            util.setError(404, `Cannot find erpClienteAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found erpClienteAudit', objErpClienteAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

erpClienteAuditCtrl.findOneByAfterValueString = async (req, res) => {
    try {
        const { afterValueString } = req.params;
        const objErpClienteAudit = await erpClienteAuditService.findOneByAfterValueString(afterValueString, req.query);
        if (!objErpClienteAudit) {
            util.setError(404, `Cannot find erpClienteAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found erpClienteAudit', objErpClienteAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

erpClienteAuditCtrl.findOneByBeforeValueText = async (req, res) => {
    try {
        const { beforeValueText } = req.params;
        const objErpClienteAudit = await erpClienteAuditService.findOneByBeforeValueText(beforeValueText, req.query);
        if (!objErpClienteAudit) {
            util.setError(404, `Cannot find erpClienteAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found erpClienteAudit', objErpClienteAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

erpClienteAuditCtrl.findOneByAfterValueText = async (req, res) => {
    try {
        const { afterValueText } = req.params;
        const objErpClienteAudit = await erpClienteAuditService.findOneByAfterValueText(afterValueText, req.query);
        if (!objErpClienteAudit) {
            util.setError(404, `Cannot find erpClienteAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found erpClienteAudit', objErpClienteAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

erpClienteAuditCtrl.findOneByDateCreated = async (req, res) => {
    try {
        const { dateCreated } = req.params;
        const objErpClienteAudit = await erpClienteAuditService.findOneByDateCreated(dateCreated, req.query);
        if (!objErpClienteAudit) {
            util.setError(404, `Cannot find erpClienteAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found erpClienteAudit', objErpClienteAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

erpClienteAuditCtrl.findOneByParentId = async (req, res) => {
    try {
        const { parentId } = req.params;
        const objErpClienteAudit = await erpClienteAuditService.findOneByParentId(parentId, req.query);
        if (!objErpClienteAudit) {
            util.setError(404, `Cannot find erpClienteAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found erpClienteAudit', objErpClienteAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



erpClienteAuditCtrl.updateErpClienteAuditById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objErpClienteAudit = await erpClienteAuditService.updateErpClienteAuditById(id, req.body);
            if (!objErpClienteAudit) {
                util.setError(404, `Cannot find erpClienteAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ErpClienteAudit updated', objErpClienteAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

erpClienteAuditCtrl.updateErpClienteAuditByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objErpClienteAudit = await erpClienteAuditService.updateErpClienteAuditByCreatedBy(createdBy, req.body);
            if (!objErpClienteAudit) {
                util.setError(404, `Cannot find erpClienteAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ErpClienteAudit updated', objErpClienteAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

erpClienteAuditCtrl.updateErpClienteAuditByFieldName = async (req, res) => {
     const { fieldName } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objErpClienteAudit = await erpClienteAuditService.updateErpClienteAuditByFieldName(fieldName, req.body);
            if (!objErpClienteAudit) {
                util.setError(404, `Cannot find erpClienteAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ErpClienteAudit updated', objErpClienteAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

erpClienteAuditCtrl.updateErpClienteAuditByDataType = async (req, res) => {
     const { dataType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objErpClienteAudit = await erpClienteAuditService.updateErpClienteAuditByDataType(dataType, req.body);
            if (!objErpClienteAudit) {
                util.setError(404, `Cannot find erpClienteAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ErpClienteAudit updated', objErpClienteAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

erpClienteAuditCtrl.updateErpClienteAuditByBeforeValueString = async (req, res) => {
     const { beforeValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objErpClienteAudit = await erpClienteAuditService.updateErpClienteAuditByBeforeValueString(beforeValueString, req.body);
            if (!objErpClienteAudit) {
                util.setError(404, `Cannot find erpClienteAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ErpClienteAudit updated', objErpClienteAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

erpClienteAuditCtrl.updateErpClienteAuditByAfterValueString = async (req, res) => {
     const { afterValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objErpClienteAudit = await erpClienteAuditService.updateErpClienteAuditByAfterValueString(afterValueString, req.body);
            if (!objErpClienteAudit) {
                util.setError(404, `Cannot find erpClienteAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ErpClienteAudit updated', objErpClienteAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

erpClienteAuditCtrl.updateErpClienteAuditByBeforeValueText = async (req, res) => {
     const { beforeValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objErpClienteAudit = await erpClienteAuditService.updateErpClienteAuditByBeforeValueText(beforeValueText, req.body);
            if (!objErpClienteAudit) {
                util.setError(404, `Cannot find erpClienteAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ErpClienteAudit updated', objErpClienteAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

erpClienteAuditCtrl.updateErpClienteAuditByAfterValueText = async (req, res) => {
     const { afterValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objErpClienteAudit = await erpClienteAuditService.updateErpClienteAuditByAfterValueText(afterValueText, req.body);
            if (!objErpClienteAudit) {
                util.setError(404, `Cannot find erpClienteAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ErpClienteAudit updated', objErpClienteAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

erpClienteAuditCtrl.updateErpClienteAuditByDateCreated = async (req, res) => {
     const { dateCreated } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objErpClienteAudit = await erpClienteAuditService.updateErpClienteAuditByDateCreated(dateCreated, req.body);
            if (!objErpClienteAudit) {
                util.setError(404, `Cannot find erpClienteAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ErpClienteAudit updated', objErpClienteAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

erpClienteAuditCtrl.updateErpClienteAuditByParentId = async (req, res) => {
     const { parentId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objErpClienteAudit = await erpClienteAuditService.updateErpClienteAuditByParentId(parentId, req.body);
            if (!objErpClienteAudit) {
                util.setError(404, `Cannot find erpClienteAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ErpClienteAudit updated', objErpClienteAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = erpClienteAuditCtrl;
//</es-section>
