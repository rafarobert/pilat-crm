/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:18 GMT-0400 (Bolivia Time)
 * Time: 14:56:18
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:18 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:18
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const models = require('../../express');
const aoProductCategoryAuditService = require('../services/aos_product_categories_audit.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const aosProductCategoriesAuditCtrl = {};
aosProductCategoriesAuditCtrl.service = aoProductCategoryAuditService;


aosProductCategoriesAuditCtrl.getAllAosProductCategoriesAudit = async (req, res) => {
    try {
        const { length } = req.body;
        const { start } = req.body;
        const [column, dir] = util.getOrderByColumnDirection(models.sequelize.aosProductCategoriesAudit.rawAttributes,req.body);
        req.query.limit = length ? length : req.query.limit;
        req.query.offset = start ? start : req.query.offset;
        req.query.order = column && dir ? [[column,dir]] : req.query.order;

        const objAosProductCategoriesAudit = await aoProductCategoryAuditService.getAllAosProductCategoriesAudit(req.query);
        if (objAosProductCategoriesAudit && objAosProductCategoriesAudit.rows && objAosProductCategoriesAudit.count) {
            util.setSuccess(200, 'AosProductCategoriesAudit retrieved', objAosProductCategoriesAudit.rows, objAosProductCategoriesAudit.count, req.query.limit, req.query.offset);
        } else {
            util.setSuccess(200, 'No aoProductCategoryAudit found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductCategoriesAuditCtrl.getAAoProductCategoryAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAoProductCategoryAudit = await aoProductCategoryAuditService.getAAoProductCategoryAudit(id, req.query);
        if (!objAoProductCategoryAudit) {
            util.setError(404, `Cannot find aoProductCategoryAudit with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found aoProductCategoryAudit', objAoProductCategoryAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductCategoriesAuditCtrl.addAoProductCategoryAudit = async (req, res) => {
    try {
        const objAoProductCategoryAudit = await aoProductCategoryAuditService.addAoProductCategoryAudit(req.body);
        util.setSuccess(201, 'AoProductCategoryAudit Added!', objAoProductCategoryAudit);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductCategoriesAuditCtrl.updateAoProductCategoryAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAoProductCategoryAudit = await aoProductCategoryAuditService.updateAoProductCategoryAudit(id, req.body);
        if (!objAoProductCategoryAudit) {
            util.setError(404, `Cannot find aoProductCategoryAudit with the id: ${id}`);
        } else {
            util.setSuccess(200, 'AoProductCategoryAudit updated', objAoProductCategoryAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

aosProductCategoriesAuditCtrl.deleteAoProductCategoryAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objAoProductCategoryAudit = await aoProductCategoryAuditService.deleteAoProductCategoryAudit(id);
        if (objAoProductCategoryAudit) {
            util.setSuccess(200, 'AoProductCategoryAudit deleted', objAoProductCategoryAudit);
        } else {
            util.setError(404, `AoProductCategoryAudit with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



aosProductCategoriesAuditCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objAoProductCategoryAudit = await aoProductCategoryAuditService.findOneById(id, req.query);
        if (!objAoProductCategoryAudit) {
            util.setError(404, `Cannot find aoProductCategoryAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProductCategoryAudit', objAoProductCategoryAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductCategoriesAuditCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objAoProductCategoryAudit = await aoProductCategoryAuditService.findOneByCreatedBy(createdBy, req.query);
        if (!objAoProductCategoryAudit) {
            util.setError(404, `Cannot find aoProductCategoryAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProductCategoryAudit', objAoProductCategoryAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductCategoriesAuditCtrl.findOneByFieldName = async (req, res) => {
    try {
        const { fieldName } = req.params;
        const objAoProductCategoryAudit = await aoProductCategoryAuditService.findOneByFieldName(fieldName, req.query);
        if (!objAoProductCategoryAudit) {
            util.setError(404, `Cannot find aoProductCategoryAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProductCategoryAudit', objAoProductCategoryAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductCategoriesAuditCtrl.findOneByDataType = async (req, res) => {
    try {
        const { dataType } = req.params;
        const objAoProductCategoryAudit = await aoProductCategoryAuditService.findOneByDataType(dataType, req.query);
        if (!objAoProductCategoryAudit) {
            util.setError(404, `Cannot find aoProductCategoryAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProductCategoryAudit', objAoProductCategoryAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductCategoriesAuditCtrl.findOneByBeforeValueString = async (req, res) => {
    try {
        const { beforeValueString } = req.params;
        const objAoProductCategoryAudit = await aoProductCategoryAuditService.findOneByBeforeValueString(beforeValueString, req.query);
        if (!objAoProductCategoryAudit) {
            util.setError(404, `Cannot find aoProductCategoryAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProductCategoryAudit', objAoProductCategoryAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductCategoriesAuditCtrl.findOneByAfterValueString = async (req, res) => {
    try {
        const { afterValueString } = req.params;
        const objAoProductCategoryAudit = await aoProductCategoryAuditService.findOneByAfterValueString(afterValueString, req.query);
        if (!objAoProductCategoryAudit) {
            util.setError(404, `Cannot find aoProductCategoryAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProductCategoryAudit', objAoProductCategoryAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductCategoriesAuditCtrl.findOneByBeforeValueText = async (req, res) => {
    try {
        const { beforeValueText } = req.params;
        const objAoProductCategoryAudit = await aoProductCategoryAuditService.findOneByBeforeValueText(beforeValueText, req.query);
        if (!objAoProductCategoryAudit) {
            util.setError(404, `Cannot find aoProductCategoryAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProductCategoryAudit', objAoProductCategoryAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductCategoriesAuditCtrl.findOneByAfterValueText = async (req, res) => {
    try {
        const { afterValueText } = req.params;
        const objAoProductCategoryAudit = await aoProductCategoryAuditService.findOneByAfterValueText(afterValueText, req.query);
        if (!objAoProductCategoryAudit) {
            util.setError(404, `Cannot find aoProductCategoryAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProductCategoryAudit', objAoProductCategoryAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductCategoriesAuditCtrl.findOneByDateCreated = async (req, res) => {
    try {
        const { dateCreated } = req.params;
        const objAoProductCategoryAudit = await aoProductCategoryAuditService.findOneByDateCreated(dateCreated, req.query);
        if (!objAoProductCategoryAudit) {
            util.setError(404, `Cannot find aoProductCategoryAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProductCategoryAudit', objAoProductCategoryAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosProductCategoriesAuditCtrl.findOneByParentId = async (req, res) => {
    try {
        const { parentId } = req.params;
        const objAoProductCategoryAudit = await aoProductCategoryAuditService.findOneByParentId(parentId, req.query);
        if (!objAoProductCategoryAudit) {
            util.setError(404, `Cannot find aoProductCategoryAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoProductCategoryAudit', objAoProductCategoryAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



aosProductCategoriesAuditCtrl.updateAoProductCategoryAuditById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProductCategoryAudit = await aoProductCategoryAuditService.updateAoProductCategoryAuditById(id, req.body);
            if (!objAoProductCategoryAudit) {
                util.setError(404, `Cannot find aoProductCategoryAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProductCategoryAudit updated', objAoProductCategoryAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductCategoriesAuditCtrl.updateAoProductCategoryAuditByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProductCategoryAudit = await aoProductCategoryAuditService.updateAoProductCategoryAuditByCreatedBy(createdBy, req.body);
            if (!objAoProductCategoryAudit) {
                util.setError(404, `Cannot find aoProductCategoryAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProductCategoryAudit updated', objAoProductCategoryAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductCategoriesAuditCtrl.updateAoProductCategoryAuditByFieldName = async (req, res) => {
     const { fieldName } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProductCategoryAudit = await aoProductCategoryAuditService.updateAoProductCategoryAuditByFieldName(fieldName, req.body);
            if (!objAoProductCategoryAudit) {
                util.setError(404, `Cannot find aoProductCategoryAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProductCategoryAudit updated', objAoProductCategoryAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductCategoriesAuditCtrl.updateAoProductCategoryAuditByDataType = async (req, res) => {
     const { dataType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProductCategoryAudit = await aoProductCategoryAuditService.updateAoProductCategoryAuditByDataType(dataType, req.body);
            if (!objAoProductCategoryAudit) {
                util.setError(404, `Cannot find aoProductCategoryAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProductCategoryAudit updated', objAoProductCategoryAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductCategoriesAuditCtrl.updateAoProductCategoryAuditByBeforeValueString = async (req, res) => {
     const { beforeValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProductCategoryAudit = await aoProductCategoryAuditService.updateAoProductCategoryAuditByBeforeValueString(beforeValueString, req.body);
            if (!objAoProductCategoryAudit) {
                util.setError(404, `Cannot find aoProductCategoryAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProductCategoryAudit updated', objAoProductCategoryAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductCategoriesAuditCtrl.updateAoProductCategoryAuditByAfterValueString = async (req, res) => {
     const { afterValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProductCategoryAudit = await aoProductCategoryAuditService.updateAoProductCategoryAuditByAfterValueString(afterValueString, req.body);
            if (!objAoProductCategoryAudit) {
                util.setError(404, `Cannot find aoProductCategoryAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProductCategoryAudit updated', objAoProductCategoryAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductCategoriesAuditCtrl.updateAoProductCategoryAuditByBeforeValueText = async (req, res) => {
     const { beforeValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProductCategoryAudit = await aoProductCategoryAuditService.updateAoProductCategoryAuditByBeforeValueText(beforeValueText, req.body);
            if (!objAoProductCategoryAudit) {
                util.setError(404, `Cannot find aoProductCategoryAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProductCategoryAudit updated', objAoProductCategoryAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductCategoriesAuditCtrl.updateAoProductCategoryAuditByAfterValueText = async (req, res) => {
     const { afterValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProductCategoryAudit = await aoProductCategoryAuditService.updateAoProductCategoryAuditByAfterValueText(afterValueText, req.body);
            if (!objAoProductCategoryAudit) {
                util.setError(404, `Cannot find aoProductCategoryAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProductCategoryAudit updated', objAoProductCategoryAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductCategoriesAuditCtrl.updateAoProductCategoryAuditByDateCreated = async (req, res) => {
     const { dateCreated } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProductCategoryAudit = await aoProductCategoryAuditService.updateAoProductCategoryAuditByDateCreated(dateCreated, req.body);
            if (!objAoProductCategoryAudit) {
                util.setError(404, `Cannot find aoProductCategoryAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProductCategoryAudit updated', objAoProductCategoryAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosProductCategoriesAuditCtrl.updateAoProductCategoryAuditByParentId = async (req, res) => {
     const { parentId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoProductCategoryAudit = await aoProductCategoryAuditService.updateAoProductCategoryAuditByParentId(parentId, req.body);
            if (!objAoProductCategoryAudit) {
                util.setError(404, `Cannot find aoProductCategoryAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoProductCategoryAudit updated', objAoProductCategoryAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = aosProductCategoriesAuditCtrl;
//</es-section>
