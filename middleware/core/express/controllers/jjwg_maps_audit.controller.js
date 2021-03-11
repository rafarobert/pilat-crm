/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:07 GMT-0400 (Bolivia Time)
 * Time: 14:57:7
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:07 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:7
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const models = require('../../express');
const jjwgMapAuditService = require('../services/jjwg_maps_audit.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const jjwgMapsAuditCtrl = {};
jjwgMapsAuditCtrl.service = jjwgMapAuditService;


jjwgMapsAuditCtrl.getAllJjwgMapsAudit = async (req, res) => {
    try {
        const { length } = req.body;
        const { start } = req.body;
        const [column, dir] = util.getOrderByColumnDirection(models.sequelize.jjwgMapsAudit.rawAttributes,req.body);
        req.query.limit = length ? length : req.query.limit;
        req.query.offset = start ? start : req.query.offset;
        req.query.order = column && dir ? [[column,dir]] : req.query.order;

        const objJjwgMapsAudit = await jjwgMapAuditService.getAllJjwgMapsAudit(req.query);
        if (objJjwgMapsAudit && objJjwgMapsAudit.rows && objJjwgMapsAudit.count) {
            util.setSuccess(200, 'JjwgMapsAudit retrieved', objJjwgMapsAudit.rows, objJjwgMapsAudit.count, req.query.limit, req.query.offset);
        } else {
            util.setSuccess(200, 'No jjwgMapAudit found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgMapsAuditCtrl.getAJjwgMapAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objJjwgMapAudit = await jjwgMapAuditService.getAJjwgMapAudit(id, req.query);
        if (!objJjwgMapAudit) {
            util.setError(404, `Cannot find jjwgMapAudit with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found jjwgMapAudit', objJjwgMapAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgMapsAuditCtrl.addJjwgMapAudit = async (req, res) => {
    try {
        const objJjwgMapAudit = await jjwgMapAuditService.addJjwgMapAudit(req.body);
        util.setSuccess(201, 'JjwgMapAudit Added!', objJjwgMapAudit);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgMapsAuditCtrl.updateJjwgMapAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objJjwgMapAudit = await jjwgMapAuditService.updateJjwgMapAudit(id, req.body);
        if (!objJjwgMapAudit) {
            util.setError(404, `Cannot find jjwgMapAudit with the id: ${id}`);
        } else {
            util.setSuccess(200, 'JjwgMapAudit updated', objJjwgMapAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

jjwgMapsAuditCtrl.deleteJjwgMapAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objJjwgMapAudit = await jjwgMapAuditService.deleteJjwgMapAudit(id);
        if (objJjwgMapAudit) {
            util.setSuccess(200, 'JjwgMapAudit deleted', objJjwgMapAudit);
        } else {
            util.setError(404, `JjwgMapAudit with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



jjwgMapsAuditCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objJjwgMapAudit = await jjwgMapAuditService.findOneById(id, req.query);
        if (!objJjwgMapAudit) {
            util.setError(404, `Cannot find jjwgMapAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgMapAudit', objJjwgMapAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgMapsAuditCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objJjwgMapAudit = await jjwgMapAuditService.findOneByCreatedBy(createdBy, req.query);
        if (!objJjwgMapAudit) {
            util.setError(404, `Cannot find jjwgMapAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgMapAudit', objJjwgMapAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgMapsAuditCtrl.findOneByFieldName = async (req, res) => {
    try {
        const { fieldName } = req.params;
        const objJjwgMapAudit = await jjwgMapAuditService.findOneByFieldName(fieldName, req.query);
        if (!objJjwgMapAudit) {
            util.setError(404, `Cannot find jjwgMapAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgMapAudit', objJjwgMapAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgMapsAuditCtrl.findOneByDataType = async (req, res) => {
    try {
        const { dataType } = req.params;
        const objJjwgMapAudit = await jjwgMapAuditService.findOneByDataType(dataType, req.query);
        if (!objJjwgMapAudit) {
            util.setError(404, `Cannot find jjwgMapAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgMapAudit', objJjwgMapAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgMapsAuditCtrl.findOneByBeforeValueString = async (req, res) => {
    try {
        const { beforeValueString } = req.params;
        const objJjwgMapAudit = await jjwgMapAuditService.findOneByBeforeValueString(beforeValueString, req.query);
        if (!objJjwgMapAudit) {
            util.setError(404, `Cannot find jjwgMapAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgMapAudit', objJjwgMapAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgMapsAuditCtrl.findOneByAfterValueString = async (req, res) => {
    try {
        const { afterValueString } = req.params;
        const objJjwgMapAudit = await jjwgMapAuditService.findOneByAfterValueString(afterValueString, req.query);
        if (!objJjwgMapAudit) {
            util.setError(404, `Cannot find jjwgMapAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgMapAudit', objJjwgMapAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgMapsAuditCtrl.findOneByBeforeValueText = async (req, res) => {
    try {
        const { beforeValueText } = req.params;
        const objJjwgMapAudit = await jjwgMapAuditService.findOneByBeforeValueText(beforeValueText, req.query);
        if (!objJjwgMapAudit) {
            util.setError(404, `Cannot find jjwgMapAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgMapAudit', objJjwgMapAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgMapsAuditCtrl.findOneByAfterValueText = async (req, res) => {
    try {
        const { afterValueText } = req.params;
        const objJjwgMapAudit = await jjwgMapAuditService.findOneByAfterValueText(afterValueText, req.query);
        if (!objJjwgMapAudit) {
            util.setError(404, `Cannot find jjwgMapAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgMapAudit', objJjwgMapAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgMapsAuditCtrl.findOneByDateCreated = async (req, res) => {
    try {
        const { dateCreated } = req.params;
        const objJjwgMapAudit = await jjwgMapAuditService.findOneByDateCreated(dateCreated, req.query);
        if (!objJjwgMapAudit) {
            util.setError(404, `Cannot find jjwgMapAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgMapAudit', objJjwgMapAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgMapsAuditCtrl.findOneByParentId = async (req, res) => {
    try {
        const { parentId } = req.params;
        const objJjwgMapAudit = await jjwgMapAuditService.findOneByParentId(parentId, req.query);
        if (!objJjwgMapAudit) {
            util.setError(404, `Cannot find jjwgMapAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgMapAudit', objJjwgMapAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



jjwgMapsAuditCtrl.updateJjwgMapAuditById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgMapAudit = await jjwgMapAuditService.updateJjwgMapAuditById(id, req.body);
            if (!objJjwgMapAudit) {
                util.setError(404, `Cannot find jjwgMapAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgMapAudit updated', objJjwgMapAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgMapsAuditCtrl.updateJjwgMapAuditByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgMapAudit = await jjwgMapAuditService.updateJjwgMapAuditByCreatedBy(createdBy, req.body);
            if (!objJjwgMapAudit) {
                util.setError(404, `Cannot find jjwgMapAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgMapAudit updated', objJjwgMapAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgMapsAuditCtrl.updateJjwgMapAuditByFieldName = async (req, res) => {
     const { fieldName } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgMapAudit = await jjwgMapAuditService.updateJjwgMapAuditByFieldName(fieldName, req.body);
            if (!objJjwgMapAudit) {
                util.setError(404, `Cannot find jjwgMapAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgMapAudit updated', objJjwgMapAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgMapsAuditCtrl.updateJjwgMapAuditByDataType = async (req, res) => {
     const { dataType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgMapAudit = await jjwgMapAuditService.updateJjwgMapAuditByDataType(dataType, req.body);
            if (!objJjwgMapAudit) {
                util.setError(404, `Cannot find jjwgMapAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgMapAudit updated', objJjwgMapAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgMapsAuditCtrl.updateJjwgMapAuditByBeforeValueString = async (req, res) => {
     const { beforeValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgMapAudit = await jjwgMapAuditService.updateJjwgMapAuditByBeforeValueString(beforeValueString, req.body);
            if (!objJjwgMapAudit) {
                util.setError(404, `Cannot find jjwgMapAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgMapAudit updated', objJjwgMapAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgMapsAuditCtrl.updateJjwgMapAuditByAfterValueString = async (req, res) => {
     const { afterValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgMapAudit = await jjwgMapAuditService.updateJjwgMapAuditByAfterValueString(afterValueString, req.body);
            if (!objJjwgMapAudit) {
                util.setError(404, `Cannot find jjwgMapAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgMapAudit updated', objJjwgMapAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgMapsAuditCtrl.updateJjwgMapAuditByBeforeValueText = async (req, res) => {
     const { beforeValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgMapAudit = await jjwgMapAuditService.updateJjwgMapAuditByBeforeValueText(beforeValueText, req.body);
            if (!objJjwgMapAudit) {
                util.setError(404, `Cannot find jjwgMapAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgMapAudit updated', objJjwgMapAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgMapsAuditCtrl.updateJjwgMapAuditByAfterValueText = async (req, res) => {
     const { afterValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgMapAudit = await jjwgMapAuditService.updateJjwgMapAuditByAfterValueText(afterValueText, req.body);
            if (!objJjwgMapAudit) {
                util.setError(404, `Cannot find jjwgMapAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgMapAudit updated', objJjwgMapAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgMapsAuditCtrl.updateJjwgMapAuditByDateCreated = async (req, res) => {
     const { dateCreated } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgMapAudit = await jjwgMapAuditService.updateJjwgMapAuditByDateCreated(dateCreated, req.body);
            if (!objJjwgMapAudit) {
                util.setError(404, `Cannot find jjwgMapAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgMapAudit updated', objJjwgMapAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgMapsAuditCtrl.updateJjwgMapAuditByParentId = async (req, res) => {
     const { parentId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgMapAudit = await jjwgMapAuditService.updateJjwgMapAuditByParentId(parentId, req.body);
            if (!objJjwgMapAudit) {
                util.setError(404, `Cannot find jjwgMapAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgMapAudit updated', objJjwgMapAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = jjwgMapsAuditCtrl;
//</es-section>
