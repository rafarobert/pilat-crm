/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:00 GMT-0400 (Bolivia Time)
 * Time: 14:56:0
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:00 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:0
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const models = require('../../express');
const aokKnowledgeBaseCategoryAuditService = require('../services/aok_knowledge_base_categories_audit.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const aokKnowledgeBaseCategoriesAuditCtrl = {};
aokKnowledgeBaseCategoriesAuditCtrl.service = aokKnowledgeBaseCategoryAuditService;


aokKnowledgeBaseCategoriesAuditCtrl.getAllAokKnowledgeBaseCategoriesAudit = async (req, res) => {
    try {
        const { length } = req.body;
        const { start } = req.body;
        const [column, dir] = util.getOrderByColumnDirection(models.sequelize.aokKnowledgeBaseCategoriesAudit.rawAttributes,req.body);
        req.query.limit = length ? length : req.query.limit;
        req.query.offset = start ? start : req.query.offset;
        req.query.order = column && dir ? [[column,dir]] : req.query.order;

        const objAokKnowledgeBaseCategoriesAudit = await aokKnowledgeBaseCategoryAuditService.getAllAokKnowledgeBaseCategoriesAudit(req.query);
        if (objAokKnowledgeBaseCategoriesAudit && objAokKnowledgeBaseCategoriesAudit.rows && objAokKnowledgeBaseCategoriesAudit.count) {
            util.setSuccess(200, 'AokKnowledgeBaseCategoriesAudit retrieved', objAokKnowledgeBaseCategoriesAudit.rows, objAokKnowledgeBaseCategoriesAudit.count, req.query.limit, req.query.offset);
        } else {
            util.setSuccess(200, 'No aokKnowledgeBaseCategoryAudit found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aokKnowledgeBaseCategoriesAuditCtrl.getAAokKnowledgeBaseCategoryAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAokKnowledgeBaseCategoryAudit = await aokKnowledgeBaseCategoryAuditService.getAAokKnowledgeBaseCategoryAudit(id, req.query);
        if (!objAokKnowledgeBaseCategoryAudit) {
            util.setError(404, `Cannot find aokKnowledgeBaseCategoryAudit with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found aokKnowledgeBaseCategoryAudit', objAokKnowledgeBaseCategoryAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aokKnowledgeBaseCategoriesAuditCtrl.addAokKnowledgeBaseCategoryAudit = async (req, res) => {
    try {
        const objAokKnowledgeBaseCategoryAudit = await aokKnowledgeBaseCategoryAuditService.addAokKnowledgeBaseCategoryAudit(req.body);
        util.setSuccess(201, 'AokKnowledgeBaseCategoryAudit Added!', objAokKnowledgeBaseCategoryAudit);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aokKnowledgeBaseCategoriesAuditCtrl.updateAokKnowledgeBaseCategoryAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAokKnowledgeBaseCategoryAudit = await aokKnowledgeBaseCategoryAuditService.updateAokKnowledgeBaseCategoryAudit(id, req.body);
        if (!objAokKnowledgeBaseCategoryAudit) {
            util.setError(404, `Cannot find aokKnowledgeBaseCategoryAudit with the id: ${id}`);
        } else {
            util.setSuccess(200, 'AokKnowledgeBaseCategoryAudit updated', objAokKnowledgeBaseCategoryAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

aokKnowledgeBaseCategoriesAuditCtrl.deleteAokKnowledgeBaseCategoryAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objAokKnowledgeBaseCategoryAudit = await aokKnowledgeBaseCategoryAuditService.deleteAokKnowledgeBaseCategoryAudit(id);
        if (objAokKnowledgeBaseCategoryAudit) {
            util.setSuccess(200, 'AokKnowledgeBaseCategoryAudit deleted', objAokKnowledgeBaseCategoryAudit);
        } else {
            util.setError(404, `AokKnowledgeBaseCategoryAudit with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



aokKnowledgeBaseCategoriesAuditCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objAokKnowledgeBaseCategoryAudit = await aokKnowledgeBaseCategoryAuditService.findOneById(id, req.query);
        if (!objAokKnowledgeBaseCategoryAudit) {
            util.setError(404, `Cannot find aokKnowledgeBaseCategoryAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aokKnowledgeBaseCategoryAudit', objAokKnowledgeBaseCategoryAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aokKnowledgeBaseCategoriesAuditCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objAokKnowledgeBaseCategoryAudit = await aokKnowledgeBaseCategoryAuditService.findOneByCreatedBy(createdBy, req.query);
        if (!objAokKnowledgeBaseCategoryAudit) {
            util.setError(404, `Cannot find aokKnowledgeBaseCategoryAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aokKnowledgeBaseCategoryAudit', objAokKnowledgeBaseCategoryAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aokKnowledgeBaseCategoriesAuditCtrl.findOneByFieldName = async (req, res) => {
    try {
        const { fieldName } = req.params;
        const objAokKnowledgeBaseCategoryAudit = await aokKnowledgeBaseCategoryAuditService.findOneByFieldName(fieldName, req.query);
        if (!objAokKnowledgeBaseCategoryAudit) {
            util.setError(404, `Cannot find aokKnowledgeBaseCategoryAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aokKnowledgeBaseCategoryAudit', objAokKnowledgeBaseCategoryAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aokKnowledgeBaseCategoriesAuditCtrl.findOneByDataType = async (req, res) => {
    try {
        const { dataType } = req.params;
        const objAokKnowledgeBaseCategoryAudit = await aokKnowledgeBaseCategoryAuditService.findOneByDataType(dataType, req.query);
        if (!objAokKnowledgeBaseCategoryAudit) {
            util.setError(404, `Cannot find aokKnowledgeBaseCategoryAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aokKnowledgeBaseCategoryAudit', objAokKnowledgeBaseCategoryAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aokKnowledgeBaseCategoriesAuditCtrl.findOneByBeforeValueString = async (req, res) => {
    try {
        const { beforeValueString } = req.params;
        const objAokKnowledgeBaseCategoryAudit = await aokKnowledgeBaseCategoryAuditService.findOneByBeforeValueString(beforeValueString, req.query);
        if (!objAokKnowledgeBaseCategoryAudit) {
            util.setError(404, `Cannot find aokKnowledgeBaseCategoryAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aokKnowledgeBaseCategoryAudit', objAokKnowledgeBaseCategoryAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aokKnowledgeBaseCategoriesAuditCtrl.findOneByAfterValueString = async (req, res) => {
    try {
        const { afterValueString } = req.params;
        const objAokKnowledgeBaseCategoryAudit = await aokKnowledgeBaseCategoryAuditService.findOneByAfterValueString(afterValueString, req.query);
        if (!objAokKnowledgeBaseCategoryAudit) {
            util.setError(404, `Cannot find aokKnowledgeBaseCategoryAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aokKnowledgeBaseCategoryAudit', objAokKnowledgeBaseCategoryAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aokKnowledgeBaseCategoriesAuditCtrl.findOneByBeforeValueText = async (req, res) => {
    try {
        const { beforeValueText } = req.params;
        const objAokKnowledgeBaseCategoryAudit = await aokKnowledgeBaseCategoryAuditService.findOneByBeforeValueText(beforeValueText, req.query);
        if (!objAokKnowledgeBaseCategoryAudit) {
            util.setError(404, `Cannot find aokKnowledgeBaseCategoryAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aokKnowledgeBaseCategoryAudit', objAokKnowledgeBaseCategoryAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aokKnowledgeBaseCategoriesAuditCtrl.findOneByAfterValueText = async (req, res) => {
    try {
        const { afterValueText } = req.params;
        const objAokKnowledgeBaseCategoryAudit = await aokKnowledgeBaseCategoryAuditService.findOneByAfterValueText(afterValueText, req.query);
        if (!objAokKnowledgeBaseCategoryAudit) {
            util.setError(404, `Cannot find aokKnowledgeBaseCategoryAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aokKnowledgeBaseCategoryAudit', objAokKnowledgeBaseCategoryAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aokKnowledgeBaseCategoriesAuditCtrl.findOneByDateCreated = async (req, res) => {
    try {
        const { dateCreated } = req.params;
        const objAokKnowledgeBaseCategoryAudit = await aokKnowledgeBaseCategoryAuditService.findOneByDateCreated(dateCreated, req.query);
        if (!objAokKnowledgeBaseCategoryAudit) {
            util.setError(404, `Cannot find aokKnowledgeBaseCategoryAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aokKnowledgeBaseCategoryAudit', objAokKnowledgeBaseCategoryAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aokKnowledgeBaseCategoriesAuditCtrl.findOneByParentId = async (req, res) => {
    try {
        const { parentId } = req.params;
        const objAokKnowledgeBaseCategoryAudit = await aokKnowledgeBaseCategoryAuditService.findOneByParentId(parentId, req.query);
        if (!objAokKnowledgeBaseCategoryAudit) {
            util.setError(404, `Cannot find aokKnowledgeBaseCategoryAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aokKnowledgeBaseCategoryAudit', objAokKnowledgeBaseCategoryAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



aokKnowledgeBaseCategoriesAuditCtrl.updateAokKnowledgeBaseCategoryAuditById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAokKnowledgeBaseCategoryAudit = await aokKnowledgeBaseCategoryAuditService.updateAokKnowledgeBaseCategoryAuditById(id, req.body);
            if (!objAokKnowledgeBaseCategoryAudit) {
                util.setError(404, `Cannot find aokKnowledgeBaseCategoryAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AokKnowledgeBaseCategoryAudit updated', objAokKnowledgeBaseCategoryAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aokKnowledgeBaseCategoriesAuditCtrl.updateAokKnowledgeBaseCategoryAuditByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAokKnowledgeBaseCategoryAudit = await aokKnowledgeBaseCategoryAuditService.updateAokKnowledgeBaseCategoryAuditByCreatedBy(createdBy, req.body);
            if (!objAokKnowledgeBaseCategoryAudit) {
                util.setError(404, `Cannot find aokKnowledgeBaseCategoryAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AokKnowledgeBaseCategoryAudit updated', objAokKnowledgeBaseCategoryAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aokKnowledgeBaseCategoriesAuditCtrl.updateAokKnowledgeBaseCategoryAuditByFieldName = async (req, res) => {
     const { fieldName } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAokKnowledgeBaseCategoryAudit = await aokKnowledgeBaseCategoryAuditService.updateAokKnowledgeBaseCategoryAuditByFieldName(fieldName, req.body);
            if (!objAokKnowledgeBaseCategoryAudit) {
                util.setError(404, `Cannot find aokKnowledgeBaseCategoryAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AokKnowledgeBaseCategoryAudit updated', objAokKnowledgeBaseCategoryAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aokKnowledgeBaseCategoriesAuditCtrl.updateAokKnowledgeBaseCategoryAuditByDataType = async (req, res) => {
     const { dataType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAokKnowledgeBaseCategoryAudit = await aokKnowledgeBaseCategoryAuditService.updateAokKnowledgeBaseCategoryAuditByDataType(dataType, req.body);
            if (!objAokKnowledgeBaseCategoryAudit) {
                util.setError(404, `Cannot find aokKnowledgeBaseCategoryAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AokKnowledgeBaseCategoryAudit updated', objAokKnowledgeBaseCategoryAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aokKnowledgeBaseCategoriesAuditCtrl.updateAokKnowledgeBaseCategoryAuditByBeforeValueString = async (req, res) => {
     const { beforeValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAokKnowledgeBaseCategoryAudit = await aokKnowledgeBaseCategoryAuditService.updateAokKnowledgeBaseCategoryAuditByBeforeValueString(beforeValueString, req.body);
            if (!objAokKnowledgeBaseCategoryAudit) {
                util.setError(404, `Cannot find aokKnowledgeBaseCategoryAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AokKnowledgeBaseCategoryAudit updated', objAokKnowledgeBaseCategoryAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aokKnowledgeBaseCategoriesAuditCtrl.updateAokKnowledgeBaseCategoryAuditByAfterValueString = async (req, res) => {
     const { afterValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAokKnowledgeBaseCategoryAudit = await aokKnowledgeBaseCategoryAuditService.updateAokKnowledgeBaseCategoryAuditByAfterValueString(afterValueString, req.body);
            if (!objAokKnowledgeBaseCategoryAudit) {
                util.setError(404, `Cannot find aokKnowledgeBaseCategoryAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AokKnowledgeBaseCategoryAudit updated', objAokKnowledgeBaseCategoryAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aokKnowledgeBaseCategoriesAuditCtrl.updateAokKnowledgeBaseCategoryAuditByBeforeValueText = async (req, res) => {
     const { beforeValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAokKnowledgeBaseCategoryAudit = await aokKnowledgeBaseCategoryAuditService.updateAokKnowledgeBaseCategoryAuditByBeforeValueText(beforeValueText, req.body);
            if (!objAokKnowledgeBaseCategoryAudit) {
                util.setError(404, `Cannot find aokKnowledgeBaseCategoryAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AokKnowledgeBaseCategoryAudit updated', objAokKnowledgeBaseCategoryAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aokKnowledgeBaseCategoriesAuditCtrl.updateAokKnowledgeBaseCategoryAuditByAfterValueText = async (req, res) => {
     const { afterValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAokKnowledgeBaseCategoryAudit = await aokKnowledgeBaseCategoryAuditService.updateAokKnowledgeBaseCategoryAuditByAfterValueText(afterValueText, req.body);
            if (!objAokKnowledgeBaseCategoryAudit) {
                util.setError(404, `Cannot find aokKnowledgeBaseCategoryAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AokKnowledgeBaseCategoryAudit updated', objAokKnowledgeBaseCategoryAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aokKnowledgeBaseCategoriesAuditCtrl.updateAokKnowledgeBaseCategoryAuditByDateCreated = async (req, res) => {
     const { dateCreated } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAokKnowledgeBaseCategoryAudit = await aokKnowledgeBaseCategoryAuditService.updateAokKnowledgeBaseCategoryAuditByDateCreated(dateCreated, req.body);
            if (!objAokKnowledgeBaseCategoryAudit) {
                util.setError(404, `Cannot find aokKnowledgeBaseCategoryAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AokKnowledgeBaseCategoryAudit updated', objAokKnowledgeBaseCategoryAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aokKnowledgeBaseCategoriesAuditCtrl.updateAokKnowledgeBaseCategoryAuditByParentId = async (req, res) => {
     const { parentId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAokKnowledgeBaseCategoryAudit = await aokKnowledgeBaseCategoryAuditService.updateAokKnowledgeBaseCategoryAuditByParentId(parentId, req.body);
            if (!objAokKnowledgeBaseCategoryAudit) {
                util.setError(404, `Cannot find aokKnowledgeBaseCategoryAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AokKnowledgeBaseCategoryAudit updated', objAokKnowledgeBaseCategoryAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = aokKnowledgeBaseCategoriesAuditCtrl;
//</es-section>
