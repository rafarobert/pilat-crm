/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:13 GMT-0400 (Bolivia Time)
 * Time: 14:56:13
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:13 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:13
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const models = require('../../express');
const aoLineItemGroupAuditService = require('../services/aos_line_item_groups_audit.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const aosLineItemGroupsAuditCtrl = {};
aosLineItemGroupsAuditCtrl.service = aoLineItemGroupAuditService;


aosLineItemGroupsAuditCtrl.getAllAosLineItemGroupsAudit = async (req, res) => {
    try {
        const { length } = req.body;
        const { start } = req.body;
        const [column, dir] = util.getOrderByColumnDirection(models.sequelize.aosLineItemGroupsAudit.rawAttributes,req.body);
        req.query.limit = length ? length : req.query.limit;
        req.query.offset = start ? start : req.query.offset;
        req.query.order = column && dir ? [[column,dir]] : req.query.order;

        const objAosLineItemGroupsAudit = await aoLineItemGroupAuditService.getAllAosLineItemGroupsAudit(req.query);
        if (objAosLineItemGroupsAudit && objAosLineItemGroupsAudit.rows && objAosLineItemGroupsAudit.count) {
            util.setSuccess(200, 'AosLineItemGroupsAudit retrieved', objAosLineItemGroupsAudit.rows, objAosLineItemGroupsAudit.count, req.query.limit, req.query.offset);
        } else {
            util.setSuccess(200, 'No aoLineItemGroupAudit found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosLineItemGroupsAuditCtrl.getAAoLineItemGroupAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAoLineItemGroupAudit = await aoLineItemGroupAuditService.getAAoLineItemGroupAudit(id, req.query);
        if (!objAoLineItemGroupAudit) {
            util.setError(404, `Cannot find aoLineItemGroupAudit with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found aoLineItemGroupAudit', objAoLineItemGroupAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosLineItemGroupsAuditCtrl.addAoLineItemGroupAudit = async (req, res) => {
    try {
        const objAoLineItemGroupAudit = await aoLineItemGroupAuditService.addAoLineItemGroupAudit(req.body);
        util.setSuccess(201, 'AoLineItemGroupAudit Added!', objAoLineItemGroupAudit);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosLineItemGroupsAuditCtrl.updateAoLineItemGroupAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAoLineItemGroupAudit = await aoLineItemGroupAuditService.updateAoLineItemGroupAudit(id, req.body);
        if (!objAoLineItemGroupAudit) {
            util.setError(404, `Cannot find aoLineItemGroupAudit with the id: ${id}`);
        } else {
            util.setSuccess(200, 'AoLineItemGroupAudit updated', objAoLineItemGroupAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

aosLineItemGroupsAuditCtrl.deleteAoLineItemGroupAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objAoLineItemGroupAudit = await aoLineItemGroupAuditService.deleteAoLineItemGroupAudit(id);
        if (objAoLineItemGroupAudit) {
            util.setSuccess(200, 'AoLineItemGroupAudit deleted', objAoLineItemGroupAudit);
        } else {
            util.setError(404, `AoLineItemGroupAudit with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



aosLineItemGroupsAuditCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objAoLineItemGroupAudit = await aoLineItemGroupAuditService.findOneById(id, req.query);
        if (!objAoLineItemGroupAudit) {
            util.setError(404, `Cannot find aoLineItemGroupAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoLineItemGroupAudit', objAoLineItemGroupAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosLineItemGroupsAuditCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objAoLineItemGroupAudit = await aoLineItemGroupAuditService.findOneByCreatedBy(createdBy, req.query);
        if (!objAoLineItemGroupAudit) {
            util.setError(404, `Cannot find aoLineItemGroupAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoLineItemGroupAudit', objAoLineItemGroupAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosLineItemGroupsAuditCtrl.findOneByFieldName = async (req, res) => {
    try {
        const { fieldName } = req.params;
        const objAoLineItemGroupAudit = await aoLineItemGroupAuditService.findOneByFieldName(fieldName, req.query);
        if (!objAoLineItemGroupAudit) {
            util.setError(404, `Cannot find aoLineItemGroupAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoLineItemGroupAudit', objAoLineItemGroupAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosLineItemGroupsAuditCtrl.findOneByDataType = async (req, res) => {
    try {
        const { dataType } = req.params;
        const objAoLineItemGroupAudit = await aoLineItemGroupAuditService.findOneByDataType(dataType, req.query);
        if (!objAoLineItemGroupAudit) {
            util.setError(404, `Cannot find aoLineItemGroupAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoLineItemGroupAudit', objAoLineItemGroupAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosLineItemGroupsAuditCtrl.findOneByBeforeValueString = async (req, res) => {
    try {
        const { beforeValueString } = req.params;
        const objAoLineItemGroupAudit = await aoLineItemGroupAuditService.findOneByBeforeValueString(beforeValueString, req.query);
        if (!objAoLineItemGroupAudit) {
            util.setError(404, `Cannot find aoLineItemGroupAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoLineItemGroupAudit', objAoLineItemGroupAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosLineItemGroupsAuditCtrl.findOneByAfterValueString = async (req, res) => {
    try {
        const { afterValueString } = req.params;
        const objAoLineItemGroupAudit = await aoLineItemGroupAuditService.findOneByAfterValueString(afterValueString, req.query);
        if (!objAoLineItemGroupAudit) {
            util.setError(404, `Cannot find aoLineItemGroupAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoLineItemGroupAudit', objAoLineItemGroupAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosLineItemGroupsAuditCtrl.findOneByBeforeValueText = async (req, res) => {
    try {
        const { beforeValueText } = req.params;
        const objAoLineItemGroupAudit = await aoLineItemGroupAuditService.findOneByBeforeValueText(beforeValueText, req.query);
        if (!objAoLineItemGroupAudit) {
            util.setError(404, `Cannot find aoLineItemGroupAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoLineItemGroupAudit', objAoLineItemGroupAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosLineItemGroupsAuditCtrl.findOneByAfterValueText = async (req, res) => {
    try {
        const { afterValueText } = req.params;
        const objAoLineItemGroupAudit = await aoLineItemGroupAuditService.findOneByAfterValueText(afterValueText, req.query);
        if (!objAoLineItemGroupAudit) {
            util.setError(404, `Cannot find aoLineItemGroupAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoLineItemGroupAudit', objAoLineItemGroupAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosLineItemGroupsAuditCtrl.findOneByDateCreated = async (req, res) => {
    try {
        const { dateCreated } = req.params;
        const objAoLineItemGroupAudit = await aoLineItemGroupAuditService.findOneByDateCreated(dateCreated, req.query);
        if (!objAoLineItemGroupAudit) {
            util.setError(404, `Cannot find aoLineItemGroupAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoLineItemGroupAudit', objAoLineItemGroupAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosLineItemGroupsAuditCtrl.findOneByParentId = async (req, res) => {
    try {
        const { parentId } = req.params;
        const objAoLineItemGroupAudit = await aoLineItemGroupAuditService.findOneByParentId(parentId, req.query);
        if (!objAoLineItemGroupAudit) {
            util.setError(404, `Cannot find aoLineItemGroupAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoLineItemGroupAudit', objAoLineItemGroupAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



aosLineItemGroupsAuditCtrl.updateAoLineItemGroupAuditById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoLineItemGroupAudit = await aoLineItemGroupAuditService.updateAoLineItemGroupAuditById(id, req.body);
            if (!objAoLineItemGroupAudit) {
                util.setError(404, `Cannot find aoLineItemGroupAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoLineItemGroupAudit updated', objAoLineItemGroupAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosLineItemGroupsAuditCtrl.updateAoLineItemGroupAuditByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoLineItemGroupAudit = await aoLineItemGroupAuditService.updateAoLineItemGroupAuditByCreatedBy(createdBy, req.body);
            if (!objAoLineItemGroupAudit) {
                util.setError(404, `Cannot find aoLineItemGroupAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoLineItemGroupAudit updated', objAoLineItemGroupAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosLineItemGroupsAuditCtrl.updateAoLineItemGroupAuditByFieldName = async (req, res) => {
     const { fieldName } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoLineItemGroupAudit = await aoLineItemGroupAuditService.updateAoLineItemGroupAuditByFieldName(fieldName, req.body);
            if (!objAoLineItemGroupAudit) {
                util.setError(404, `Cannot find aoLineItemGroupAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoLineItemGroupAudit updated', objAoLineItemGroupAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosLineItemGroupsAuditCtrl.updateAoLineItemGroupAuditByDataType = async (req, res) => {
     const { dataType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoLineItemGroupAudit = await aoLineItemGroupAuditService.updateAoLineItemGroupAuditByDataType(dataType, req.body);
            if (!objAoLineItemGroupAudit) {
                util.setError(404, `Cannot find aoLineItemGroupAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoLineItemGroupAudit updated', objAoLineItemGroupAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosLineItemGroupsAuditCtrl.updateAoLineItemGroupAuditByBeforeValueString = async (req, res) => {
     const { beforeValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoLineItemGroupAudit = await aoLineItemGroupAuditService.updateAoLineItemGroupAuditByBeforeValueString(beforeValueString, req.body);
            if (!objAoLineItemGroupAudit) {
                util.setError(404, `Cannot find aoLineItemGroupAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoLineItemGroupAudit updated', objAoLineItemGroupAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosLineItemGroupsAuditCtrl.updateAoLineItemGroupAuditByAfterValueString = async (req, res) => {
     const { afterValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoLineItemGroupAudit = await aoLineItemGroupAuditService.updateAoLineItemGroupAuditByAfterValueString(afterValueString, req.body);
            if (!objAoLineItemGroupAudit) {
                util.setError(404, `Cannot find aoLineItemGroupAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoLineItemGroupAudit updated', objAoLineItemGroupAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosLineItemGroupsAuditCtrl.updateAoLineItemGroupAuditByBeforeValueText = async (req, res) => {
     const { beforeValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoLineItemGroupAudit = await aoLineItemGroupAuditService.updateAoLineItemGroupAuditByBeforeValueText(beforeValueText, req.body);
            if (!objAoLineItemGroupAudit) {
                util.setError(404, `Cannot find aoLineItemGroupAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoLineItemGroupAudit updated', objAoLineItemGroupAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosLineItemGroupsAuditCtrl.updateAoLineItemGroupAuditByAfterValueText = async (req, res) => {
     const { afterValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoLineItemGroupAudit = await aoLineItemGroupAuditService.updateAoLineItemGroupAuditByAfterValueText(afterValueText, req.body);
            if (!objAoLineItemGroupAudit) {
                util.setError(404, `Cannot find aoLineItemGroupAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoLineItemGroupAudit updated', objAoLineItemGroupAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosLineItemGroupsAuditCtrl.updateAoLineItemGroupAuditByDateCreated = async (req, res) => {
     const { dateCreated } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoLineItemGroupAudit = await aoLineItemGroupAuditService.updateAoLineItemGroupAuditByDateCreated(dateCreated, req.body);
            if (!objAoLineItemGroupAudit) {
                util.setError(404, `Cannot find aoLineItemGroupAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoLineItemGroupAudit updated', objAoLineItemGroupAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosLineItemGroupsAuditCtrl.updateAoLineItemGroupAuditByParentId = async (req, res) => {
     const { parentId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoLineItemGroupAudit = await aoLineItemGroupAuditService.updateAoLineItemGroupAuditByParentId(parentId, req.body);
            if (!objAoLineItemGroupAudit) {
                util.setError(404, `Cannot find aoLineItemGroupAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoLineItemGroupAudit updated', objAoLineItemGroupAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = aosLineItemGroupsAuditCtrl;
//</es-section>
