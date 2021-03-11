/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:05 GMT-0400 (Bolivia Time)
 * Time: 14:57:5
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:05 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:5
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const models = require('../../express');
const jjwgAddresCacheAuditService = require('../services/jjwg_address_cache_audit.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const jjwgAddressCacheAuditCtrl = {};
jjwgAddressCacheAuditCtrl.service = jjwgAddresCacheAuditService;


jjwgAddressCacheAuditCtrl.getAllJjwgAddressCacheAudit = async (req, res) => {
    try {
        const { length } = req.body;
        const { start } = req.body;
        const [column, dir] = util.getOrderByColumnDirection(models.sequelize.jjwgAddressCacheAudit.rawAttributes,req.body);
        req.query.limit = length ? length : req.query.limit;
        req.query.offset = start ? start : req.query.offset;
        req.query.order = column && dir ? [[column,dir]] : req.query.order;

        const objJjwgAddressCacheAudit = await jjwgAddresCacheAuditService.getAllJjwgAddressCacheAudit(req.query);
        if (objJjwgAddressCacheAudit && objJjwgAddressCacheAudit.rows && objJjwgAddressCacheAudit.count) {
            util.setSuccess(200, 'JjwgAddressCacheAudit retrieved', objJjwgAddressCacheAudit.rows, objJjwgAddressCacheAudit.count, req.query.limit, req.query.offset);
        } else {
            util.setSuccess(200, 'No jjwgAddresCacheAudit found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgAddressCacheAuditCtrl.getAJjwgAddresCacheAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objJjwgAddresCacheAudit = await jjwgAddresCacheAuditService.getAJjwgAddresCacheAudit(id, req.query);
        if (!objJjwgAddresCacheAudit) {
            util.setError(404, `Cannot find jjwgAddresCacheAudit with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found jjwgAddresCacheAudit', objJjwgAddresCacheAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgAddressCacheAuditCtrl.addJjwgAddresCacheAudit = async (req, res) => {
    try {
        const objJjwgAddresCacheAudit = await jjwgAddresCacheAuditService.addJjwgAddresCacheAudit(req.body);
        util.setSuccess(201, 'JjwgAddresCacheAudit Added!', objJjwgAddresCacheAudit);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgAddressCacheAuditCtrl.updateJjwgAddresCacheAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objJjwgAddresCacheAudit = await jjwgAddresCacheAuditService.updateJjwgAddresCacheAudit(id, req.body);
        if (!objJjwgAddresCacheAudit) {
            util.setError(404, `Cannot find jjwgAddresCacheAudit with the id: ${id}`);
        } else {
            util.setSuccess(200, 'JjwgAddresCacheAudit updated', objJjwgAddresCacheAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

jjwgAddressCacheAuditCtrl.deleteJjwgAddresCacheAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objJjwgAddresCacheAudit = await jjwgAddresCacheAuditService.deleteJjwgAddresCacheAudit(id);
        if (objJjwgAddresCacheAudit) {
            util.setSuccess(200, 'JjwgAddresCacheAudit deleted', objJjwgAddresCacheAudit);
        } else {
            util.setError(404, `JjwgAddresCacheAudit with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



jjwgAddressCacheAuditCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objJjwgAddresCacheAudit = await jjwgAddresCacheAuditService.findOneById(id, req.query);
        if (!objJjwgAddresCacheAudit) {
            util.setError(404, `Cannot find jjwgAddresCacheAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgAddresCacheAudit', objJjwgAddresCacheAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgAddressCacheAuditCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objJjwgAddresCacheAudit = await jjwgAddresCacheAuditService.findOneByCreatedBy(createdBy, req.query);
        if (!objJjwgAddresCacheAudit) {
            util.setError(404, `Cannot find jjwgAddresCacheAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgAddresCacheAudit', objJjwgAddresCacheAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgAddressCacheAuditCtrl.findOneByFieldName = async (req, res) => {
    try {
        const { fieldName } = req.params;
        const objJjwgAddresCacheAudit = await jjwgAddresCacheAuditService.findOneByFieldName(fieldName, req.query);
        if (!objJjwgAddresCacheAudit) {
            util.setError(404, `Cannot find jjwgAddresCacheAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgAddresCacheAudit', objJjwgAddresCacheAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgAddressCacheAuditCtrl.findOneByDataType = async (req, res) => {
    try {
        const { dataType } = req.params;
        const objJjwgAddresCacheAudit = await jjwgAddresCacheAuditService.findOneByDataType(dataType, req.query);
        if (!objJjwgAddresCacheAudit) {
            util.setError(404, `Cannot find jjwgAddresCacheAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgAddresCacheAudit', objJjwgAddresCacheAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgAddressCacheAuditCtrl.findOneByBeforeValueString = async (req, res) => {
    try {
        const { beforeValueString } = req.params;
        const objJjwgAddresCacheAudit = await jjwgAddresCacheAuditService.findOneByBeforeValueString(beforeValueString, req.query);
        if (!objJjwgAddresCacheAudit) {
            util.setError(404, `Cannot find jjwgAddresCacheAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgAddresCacheAudit', objJjwgAddresCacheAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgAddressCacheAuditCtrl.findOneByAfterValueString = async (req, res) => {
    try {
        const { afterValueString } = req.params;
        const objJjwgAddresCacheAudit = await jjwgAddresCacheAuditService.findOneByAfterValueString(afterValueString, req.query);
        if (!objJjwgAddresCacheAudit) {
            util.setError(404, `Cannot find jjwgAddresCacheAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgAddresCacheAudit', objJjwgAddresCacheAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgAddressCacheAuditCtrl.findOneByBeforeValueText = async (req, res) => {
    try {
        const { beforeValueText } = req.params;
        const objJjwgAddresCacheAudit = await jjwgAddresCacheAuditService.findOneByBeforeValueText(beforeValueText, req.query);
        if (!objJjwgAddresCacheAudit) {
            util.setError(404, `Cannot find jjwgAddresCacheAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgAddresCacheAudit', objJjwgAddresCacheAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgAddressCacheAuditCtrl.findOneByAfterValueText = async (req, res) => {
    try {
        const { afterValueText } = req.params;
        const objJjwgAddresCacheAudit = await jjwgAddresCacheAuditService.findOneByAfterValueText(afterValueText, req.query);
        if (!objJjwgAddresCacheAudit) {
            util.setError(404, `Cannot find jjwgAddresCacheAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgAddresCacheAudit', objJjwgAddresCacheAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgAddressCacheAuditCtrl.findOneByDateCreated = async (req, res) => {
    try {
        const { dateCreated } = req.params;
        const objJjwgAddresCacheAudit = await jjwgAddresCacheAuditService.findOneByDateCreated(dateCreated, req.query);
        if (!objJjwgAddresCacheAudit) {
            util.setError(404, `Cannot find jjwgAddresCacheAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgAddresCacheAudit', objJjwgAddresCacheAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgAddressCacheAuditCtrl.findOneByParentId = async (req, res) => {
    try {
        const { parentId } = req.params;
        const objJjwgAddresCacheAudit = await jjwgAddresCacheAuditService.findOneByParentId(parentId, req.query);
        if (!objJjwgAddresCacheAudit) {
            util.setError(404, `Cannot find jjwgAddresCacheAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgAddresCacheAudit', objJjwgAddresCacheAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



jjwgAddressCacheAuditCtrl.updateJjwgAddresCacheAuditById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgAddresCacheAudit = await jjwgAddresCacheAuditService.updateJjwgAddresCacheAuditById(id, req.body);
            if (!objJjwgAddresCacheAudit) {
                util.setError(404, `Cannot find jjwgAddresCacheAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgAddresCacheAudit updated', objJjwgAddresCacheAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgAddressCacheAuditCtrl.updateJjwgAddresCacheAuditByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgAddresCacheAudit = await jjwgAddresCacheAuditService.updateJjwgAddresCacheAuditByCreatedBy(createdBy, req.body);
            if (!objJjwgAddresCacheAudit) {
                util.setError(404, `Cannot find jjwgAddresCacheAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgAddresCacheAudit updated', objJjwgAddresCacheAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgAddressCacheAuditCtrl.updateJjwgAddresCacheAuditByFieldName = async (req, res) => {
     const { fieldName } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgAddresCacheAudit = await jjwgAddresCacheAuditService.updateJjwgAddresCacheAuditByFieldName(fieldName, req.body);
            if (!objJjwgAddresCacheAudit) {
                util.setError(404, `Cannot find jjwgAddresCacheAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgAddresCacheAudit updated', objJjwgAddresCacheAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgAddressCacheAuditCtrl.updateJjwgAddresCacheAuditByDataType = async (req, res) => {
     const { dataType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgAddresCacheAudit = await jjwgAddresCacheAuditService.updateJjwgAddresCacheAuditByDataType(dataType, req.body);
            if (!objJjwgAddresCacheAudit) {
                util.setError(404, `Cannot find jjwgAddresCacheAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgAddresCacheAudit updated', objJjwgAddresCacheAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgAddressCacheAuditCtrl.updateJjwgAddresCacheAuditByBeforeValueString = async (req, res) => {
     const { beforeValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgAddresCacheAudit = await jjwgAddresCacheAuditService.updateJjwgAddresCacheAuditByBeforeValueString(beforeValueString, req.body);
            if (!objJjwgAddresCacheAudit) {
                util.setError(404, `Cannot find jjwgAddresCacheAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgAddresCacheAudit updated', objJjwgAddresCacheAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgAddressCacheAuditCtrl.updateJjwgAddresCacheAuditByAfterValueString = async (req, res) => {
     const { afterValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgAddresCacheAudit = await jjwgAddresCacheAuditService.updateJjwgAddresCacheAuditByAfterValueString(afterValueString, req.body);
            if (!objJjwgAddresCacheAudit) {
                util.setError(404, `Cannot find jjwgAddresCacheAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgAddresCacheAudit updated', objJjwgAddresCacheAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgAddressCacheAuditCtrl.updateJjwgAddresCacheAuditByBeforeValueText = async (req, res) => {
     const { beforeValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgAddresCacheAudit = await jjwgAddresCacheAuditService.updateJjwgAddresCacheAuditByBeforeValueText(beforeValueText, req.body);
            if (!objJjwgAddresCacheAudit) {
                util.setError(404, `Cannot find jjwgAddresCacheAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgAddresCacheAudit updated', objJjwgAddresCacheAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgAddressCacheAuditCtrl.updateJjwgAddresCacheAuditByAfterValueText = async (req, res) => {
     const { afterValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgAddresCacheAudit = await jjwgAddresCacheAuditService.updateJjwgAddresCacheAuditByAfterValueText(afterValueText, req.body);
            if (!objJjwgAddresCacheAudit) {
                util.setError(404, `Cannot find jjwgAddresCacheAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgAddresCacheAudit updated', objJjwgAddresCacheAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgAddressCacheAuditCtrl.updateJjwgAddresCacheAuditByDateCreated = async (req, res) => {
     const { dateCreated } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgAddresCacheAudit = await jjwgAddresCacheAuditService.updateJjwgAddresCacheAuditByDateCreated(dateCreated, req.body);
            if (!objJjwgAddresCacheAudit) {
                util.setError(404, `Cannot find jjwgAddresCacheAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgAddresCacheAudit updated', objJjwgAddresCacheAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgAddressCacheAuditCtrl.updateJjwgAddresCacheAuditByParentId = async (req, res) => {
     const { parentId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgAddresCacheAudit = await jjwgAddresCacheAuditService.updateJjwgAddresCacheAuditByParentId(parentId, req.body);
            if (!objJjwgAddresCacheAudit) {
                util.setError(404, `Cannot find jjwgAddresCacheAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgAddresCacheAudit updated', objJjwgAddresCacheAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = jjwgAddressCacheAuditCtrl;
//</es-section>
