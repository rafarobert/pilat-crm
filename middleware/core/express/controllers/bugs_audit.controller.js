/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:27 GMT-0400 (Bolivia Time)
 * Time: 14:56:27
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:27 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:27
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const models = require('../../express');
const bugAuditService = require('../services/bugs_audit.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const bugsAuditCtrl = {};
bugsAuditCtrl.service = bugAuditService;


bugsAuditCtrl.getAllBugsAudit = async (req, res) => {
    try {
        const { length } = req.body;
        const { start } = req.body;
        const [column, dir] = util.getOrderByColumnDirection(models.sequelize.bugsAudit.rawAttributes,req.body);
        req.query.limit = length ? length : req.query.limit;
        req.query.offset = start ? start : req.query.offset;
        req.query.order = column && dir ? [[column,dir]] : req.query.order;

        const objBugsAudit = await bugAuditService.getAllBugsAudit(req.query);
        if (objBugsAudit && objBugsAudit.rows && objBugsAudit.count) {
            util.setSuccess(200, 'BugsAudit retrieved', objBugsAudit.rows, objBugsAudit.count, req.query.limit, req.query.offset);
        } else {
            util.setSuccess(200, 'No bugAudit found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

bugsAuditCtrl.getABugAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objBugAudit = await bugAuditService.getABugAudit(id, req.query);
        if (!objBugAudit) {
            util.setError(404, `Cannot find bugAudit with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found bugAudit', objBugAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

bugsAuditCtrl.addBugAudit = async (req, res) => {
    try {
        const objBugAudit = await bugAuditService.addBugAudit(req.body);
        util.setSuccess(201, 'BugAudit Added!', objBugAudit);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

bugsAuditCtrl.updateBugAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objBugAudit = await bugAuditService.updateBugAudit(id, req.body);
        if (!objBugAudit) {
            util.setError(404, `Cannot find bugAudit with the id: ${id}`);
        } else {
            util.setSuccess(200, 'BugAudit updated', objBugAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

bugsAuditCtrl.deleteBugAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objBugAudit = await bugAuditService.deleteBugAudit(id);
        if (objBugAudit) {
            util.setSuccess(200, 'BugAudit deleted', objBugAudit);
        } else {
            util.setError(404, `BugAudit with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



bugsAuditCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objBugAudit = await bugAuditService.findOneById(id, req.query);
        if (!objBugAudit) {
            util.setError(404, `Cannot find bugAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found bugAudit', objBugAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

bugsAuditCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objBugAudit = await bugAuditService.findOneByCreatedBy(createdBy, req.query);
        if (!objBugAudit) {
            util.setError(404, `Cannot find bugAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found bugAudit', objBugAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

bugsAuditCtrl.findOneByFieldName = async (req, res) => {
    try {
        const { fieldName } = req.params;
        const objBugAudit = await bugAuditService.findOneByFieldName(fieldName, req.query);
        if (!objBugAudit) {
            util.setError(404, `Cannot find bugAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found bugAudit', objBugAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

bugsAuditCtrl.findOneByDataType = async (req, res) => {
    try {
        const { dataType } = req.params;
        const objBugAudit = await bugAuditService.findOneByDataType(dataType, req.query);
        if (!objBugAudit) {
            util.setError(404, `Cannot find bugAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found bugAudit', objBugAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

bugsAuditCtrl.findOneByBeforeValueString = async (req, res) => {
    try {
        const { beforeValueString } = req.params;
        const objBugAudit = await bugAuditService.findOneByBeforeValueString(beforeValueString, req.query);
        if (!objBugAudit) {
            util.setError(404, `Cannot find bugAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found bugAudit', objBugAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

bugsAuditCtrl.findOneByAfterValueString = async (req, res) => {
    try {
        const { afterValueString } = req.params;
        const objBugAudit = await bugAuditService.findOneByAfterValueString(afterValueString, req.query);
        if (!objBugAudit) {
            util.setError(404, `Cannot find bugAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found bugAudit', objBugAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

bugsAuditCtrl.findOneByBeforeValueText = async (req, res) => {
    try {
        const { beforeValueText } = req.params;
        const objBugAudit = await bugAuditService.findOneByBeforeValueText(beforeValueText, req.query);
        if (!objBugAudit) {
            util.setError(404, `Cannot find bugAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found bugAudit', objBugAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

bugsAuditCtrl.findOneByAfterValueText = async (req, res) => {
    try {
        const { afterValueText } = req.params;
        const objBugAudit = await bugAuditService.findOneByAfterValueText(afterValueText, req.query);
        if (!objBugAudit) {
            util.setError(404, `Cannot find bugAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found bugAudit', objBugAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

bugsAuditCtrl.findOneByDateCreated = async (req, res) => {
    try {
        const { dateCreated } = req.params;
        const objBugAudit = await bugAuditService.findOneByDateCreated(dateCreated, req.query);
        if (!objBugAudit) {
            util.setError(404, `Cannot find bugAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found bugAudit', objBugAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

bugsAuditCtrl.findOneByParentId = async (req, res) => {
    try {
        const { parentId } = req.params;
        const objBugAudit = await bugAuditService.findOneByParentId(parentId, req.query);
        if (!objBugAudit) {
            util.setError(404, `Cannot find bugAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found bugAudit', objBugAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



bugsAuditCtrl.updateBugAuditById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objBugAudit = await bugAuditService.updateBugAuditById(id, req.body);
            if (!objBugAudit) {
                util.setError(404, `Cannot find bugAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'BugAudit updated', objBugAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

bugsAuditCtrl.updateBugAuditByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objBugAudit = await bugAuditService.updateBugAuditByCreatedBy(createdBy, req.body);
            if (!objBugAudit) {
                util.setError(404, `Cannot find bugAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'BugAudit updated', objBugAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

bugsAuditCtrl.updateBugAuditByFieldName = async (req, res) => {
     const { fieldName } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objBugAudit = await bugAuditService.updateBugAuditByFieldName(fieldName, req.body);
            if (!objBugAudit) {
                util.setError(404, `Cannot find bugAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'BugAudit updated', objBugAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

bugsAuditCtrl.updateBugAuditByDataType = async (req, res) => {
     const { dataType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objBugAudit = await bugAuditService.updateBugAuditByDataType(dataType, req.body);
            if (!objBugAudit) {
                util.setError(404, `Cannot find bugAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'BugAudit updated', objBugAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

bugsAuditCtrl.updateBugAuditByBeforeValueString = async (req, res) => {
     const { beforeValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objBugAudit = await bugAuditService.updateBugAuditByBeforeValueString(beforeValueString, req.body);
            if (!objBugAudit) {
                util.setError(404, `Cannot find bugAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'BugAudit updated', objBugAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

bugsAuditCtrl.updateBugAuditByAfterValueString = async (req, res) => {
     const { afterValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objBugAudit = await bugAuditService.updateBugAuditByAfterValueString(afterValueString, req.body);
            if (!objBugAudit) {
                util.setError(404, `Cannot find bugAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'BugAudit updated', objBugAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

bugsAuditCtrl.updateBugAuditByBeforeValueText = async (req, res) => {
     const { beforeValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objBugAudit = await bugAuditService.updateBugAuditByBeforeValueText(beforeValueText, req.body);
            if (!objBugAudit) {
                util.setError(404, `Cannot find bugAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'BugAudit updated', objBugAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

bugsAuditCtrl.updateBugAuditByAfterValueText = async (req, res) => {
     const { afterValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objBugAudit = await bugAuditService.updateBugAuditByAfterValueText(afterValueText, req.body);
            if (!objBugAudit) {
                util.setError(404, `Cannot find bugAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'BugAudit updated', objBugAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

bugsAuditCtrl.updateBugAuditByDateCreated = async (req, res) => {
     const { dateCreated } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objBugAudit = await bugAuditService.updateBugAuditByDateCreated(dateCreated, req.body);
            if (!objBugAudit) {
                util.setError(404, `Cannot find bugAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'BugAudit updated', objBugAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

bugsAuditCtrl.updateBugAuditByParentId = async (req, res) => {
     const { parentId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objBugAudit = await bugAuditService.updateBugAuditByParentId(parentId, req.body);
            if (!objBugAudit) {
                util.setError(404, `Cannot find bugAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'BugAudit updated', objBugAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = bugsAuditCtrl;
//</es-section>
