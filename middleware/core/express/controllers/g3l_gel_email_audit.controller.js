/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:23:02 GMT-0400 (Bolivia Time)
 * Time: 0:23:2
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:23:02 GMT-0400 (Bolivia Time)
 * Last time updated: 0:23:2
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const g3lGelEmailAuditService = require('../services/g3l_gel_email_audit.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const g3lGelEmailAuditCtrl = {};
g3lGelEmailAuditCtrl.service = g3lGelEmailAuditService;


g3lGelEmailAuditCtrl.getAllG3lGelEmailAudit = async (req, res) => {
    try {
        const objG3lGelEmailAudit = await g3lGelEmailAuditService.getAllG3lGelEmailAudit(req.query);
        if (objG3lGelEmailAudit.length > 0) {
            util.setSuccess(200, 'G3lGelEmailAudit retrieved', objG3lGelEmailAudit);
        } else {
            util.setSuccess(200, 'No g3lGelEmailAudit found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

g3lGelEmailAuditCtrl.getAG3lGelEmailAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objG3lGelEmailAudit = await g3lGelEmailAuditService.getAG3lGelEmailAudit(id, req.query);
        if (!objG3lGelEmailAudit) {
            util.setError(404, `Cannot find g3lGelEmailAudit with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found g3lGelEmailAudit', objG3lGelEmailAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

g3lGelEmailAuditCtrl.addG3lGelEmailAudit = async (req, res) => {
    try {
        const objG3lGelEmailAudit = await g3lGelEmailAuditService.addG3lGelEmailAudit(req.body);
        util.setSuccess(201, 'G3lGelEmailAudit Added!', objG3lGelEmailAudit);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

g3lGelEmailAuditCtrl.updateG3lGelEmailAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objG3lGelEmailAudit = await g3lGelEmailAuditService.updateG3lGelEmailAudit(id, req.body);
        if (!objG3lGelEmailAudit) {
            util.setError(404, `Cannot find g3lGelEmailAudit with the id: ${id}`);
        } else {
            util.setSuccess(200, 'G3lGelEmailAudit updated', objG3lGelEmailAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

g3lGelEmailAuditCtrl.deleteG3lGelEmailAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objG3lGelEmailAudit = await g3lGelEmailAuditService.deleteG3lGelEmailAudit(id);
        if (objG3lGelEmailAudit) {
            util.setSuccess(200, 'G3lGelEmailAudit deleted', objG3lGelEmailAudit);
        } else {
            util.setError(404, `G3lGelEmailAudit with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



g3lGelEmailAuditCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objG3lGelEmailAudit = await g3lGelEmailAuditService.findOneById(id, req.query);
        if (!objG3lGelEmailAudit) {
            util.setError(404, `Cannot find g3lGelEmailAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found g3lGelEmailAudit', objG3lGelEmailAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

g3lGelEmailAuditCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objG3lGelEmailAudit = await g3lGelEmailAuditService.findOneByCreatedBy(createdBy, req.query);
        if (!objG3lGelEmailAudit) {
            util.setError(404, `Cannot find g3lGelEmailAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found g3lGelEmailAudit', objG3lGelEmailAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

g3lGelEmailAuditCtrl.findOneByFieldName = async (req, res) => {
    try {
        const { fieldName } = req.params;
        const objG3lGelEmailAudit = await g3lGelEmailAuditService.findOneByFieldName(fieldName, req.query);
        if (!objG3lGelEmailAudit) {
            util.setError(404, `Cannot find g3lGelEmailAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found g3lGelEmailAudit', objG3lGelEmailAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

g3lGelEmailAuditCtrl.findOneByDataType = async (req, res) => {
    try {
        const { dataType } = req.params;
        const objG3lGelEmailAudit = await g3lGelEmailAuditService.findOneByDataType(dataType, req.query);
        if (!objG3lGelEmailAudit) {
            util.setError(404, `Cannot find g3lGelEmailAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found g3lGelEmailAudit', objG3lGelEmailAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

g3lGelEmailAuditCtrl.findOneByBeforeValueString = async (req, res) => {
    try {
        const { beforeValueString } = req.params;
        const objG3lGelEmailAudit = await g3lGelEmailAuditService.findOneByBeforeValueString(beforeValueString, req.query);
        if (!objG3lGelEmailAudit) {
            util.setError(404, `Cannot find g3lGelEmailAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found g3lGelEmailAudit', objG3lGelEmailAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

g3lGelEmailAuditCtrl.findOneByAfterValueString = async (req, res) => {
    try {
        const { afterValueString } = req.params;
        const objG3lGelEmailAudit = await g3lGelEmailAuditService.findOneByAfterValueString(afterValueString, req.query);
        if (!objG3lGelEmailAudit) {
            util.setError(404, `Cannot find g3lGelEmailAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found g3lGelEmailAudit', objG3lGelEmailAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

g3lGelEmailAuditCtrl.findOneByBeforeValueText = async (req, res) => {
    try {
        const { beforeValueText } = req.params;
        const objG3lGelEmailAudit = await g3lGelEmailAuditService.findOneByBeforeValueText(beforeValueText, req.query);
        if (!objG3lGelEmailAudit) {
            util.setError(404, `Cannot find g3lGelEmailAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found g3lGelEmailAudit', objG3lGelEmailAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

g3lGelEmailAuditCtrl.findOneByAfterValueText = async (req, res) => {
    try {
        const { afterValueText } = req.params;
        const objG3lGelEmailAudit = await g3lGelEmailAuditService.findOneByAfterValueText(afterValueText, req.query);
        if (!objG3lGelEmailAudit) {
            util.setError(404, `Cannot find g3lGelEmailAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found g3lGelEmailAudit', objG3lGelEmailAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

g3lGelEmailAuditCtrl.findOneByDateCreated = async (req, res) => {
    try {
        const { dateCreated } = req.params;
        const objG3lGelEmailAudit = await g3lGelEmailAuditService.findOneByDateCreated(dateCreated, req.query);
        if (!objG3lGelEmailAudit) {
            util.setError(404, `Cannot find g3lGelEmailAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found g3lGelEmailAudit', objG3lGelEmailAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

g3lGelEmailAuditCtrl.findOneByParentId = async (req, res) => {
    try {
        const { parentId } = req.params;
        const objG3lGelEmailAudit = await g3lGelEmailAuditService.findOneByParentId(parentId, req.query);
        if (!objG3lGelEmailAudit) {
            util.setError(404, `Cannot find g3lGelEmailAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found g3lGelEmailAudit', objG3lGelEmailAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



g3lGelEmailAuditCtrl.updateG3lGelEmailAuditById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objG3lGelEmailAudit = await g3lGelEmailAuditService.updateG3lGelEmailAuditById(id, req.body);
            if (!objG3lGelEmailAudit) {
                util.setError(404, `Cannot find g3lGelEmailAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'G3lGelEmailAudit updated', objG3lGelEmailAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

g3lGelEmailAuditCtrl.updateG3lGelEmailAuditByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objG3lGelEmailAudit = await g3lGelEmailAuditService.updateG3lGelEmailAuditByCreatedBy(createdBy, req.body);
            if (!objG3lGelEmailAudit) {
                util.setError(404, `Cannot find g3lGelEmailAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'G3lGelEmailAudit updated', objG3lGelEmailAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

g3lGelEmailAuditCtrl.updateG3lGelEmailAuditByFieldName = async (req, res) => {
     const { fieldName } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objG3lGelEmailAudit = await g3lGelEmailAuditService.updateG3lGelEmailAuditByFieldName(fieldName, req.body);
            if (!objG3lGelEmailAudit) {
                util.setError(404, `Cannot find g3lGelEmailAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'G3lGelEmailAudit updated', objG3lGelEmailAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

g3lGelEmailAuditCtrl.updateG3lGelEmailAuditByDataType = async (req, res) => {
     const { dataType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objG3lGelEmailAudit = await g3lGelEmailAuditService.updateG3lGelEmailAuditByDataType(dataType, req.body);
            if (!objG3lGelEmailAudit) {
                util.setError(404, `Cannot find g3lGelEmailAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'G3lGelEmailAudit updated', objG3lGelEmailAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

g3lGelEmailAuditCtrl.updateG3lGelEmailAuditByBeforeValueString = async (req, res) => {
     const { beforeValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objG3lGelEmailAudit = await g3lGelEmailAuditService.updateG3lGelEmailAuditByBeforeValueString(beforeValueString, req.body);
            if (!objG3lGelEmailAudit) {
                util.setError(404, `Cannot find g3lGelEmailAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'G3lGelEmailAudit updated', objG3lGelEmailAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

g3lGelEmailAuditCtrl.updateG3lGelEmailAuditByAfterValueString = async (req, res) => {
     const { afterValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objG3lGelEmailAudit = await g3lGelEmailAuditService.updateG3lGelEmailAuditByAfterValueString(afterValueString, req.body);
            if (!objG3lGelEmailAudit) {
                util.setError(404, `Cannot find g3lGelEmailAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'G3lGelEmailAudit updated', objG3lGelEmailAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

g3lGelEmailAuditCtrl.updateG3lGelEmailAuditByBeforeValueText = async (req, res) => {
     const { beforeValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objG3lGelEmailAudit = await g3lGelEmailAuditService.updateG3lGelEmailAuditByBeforeValueText(beforeValueText, req.body);
            if (!objG3lGelEmailAudit) {
                util.setError(404, `Cannot find g3lGelEmailAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'G3lGelEmailAudit updated', objG3lGelEmailAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

g3lGelEmailAuditCtrl.updateG3lGelEmailAuditByAfterValueText = async (req, res) => {
     const { afterValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objG3lGelEmailAudit = await g3lGelEmailAuditService.updateG3lGelEmailAuditByAfterValueText(afterValueText, req.body);
            if (!objG3lGelEmailAudit) {
                util.setError(404, `Cannot find g3lGelEmailAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'G3lGelEmailAudit updated', objG3lGelEmailAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

g3lGelEmailAuditCtrl.updateG3lGelEmailAuditByDateCreated = async (req, res) => {
     const { dateCreated } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objG3lGelEmailAudit = await g3lGelEmailAuditService.updateG3lGelEmailAuditByDateCreated(dateCreated, req.body);
            if (!objG3lGelEmailAudit) {
                util.setError(404, `Cannot find g3lGelEmailAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'G3lGelEmailAudit updated', objG3lGelEmailAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

g3lGelEmailAuditCtrl.updateG3lGelEmailAuditByParentId = async (req, res) => {
     const { parentId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objG3lGelEmailAudit = await g3lGelEmailAuditService.updateG3lGelEmailAuditByParentId(parentId, req.body);
            if (!objG3lGelEmailAudit) {
                util.setError(404, `Cannot find g3lGelEmailAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'G3lGelEmailAudit updated', objG3lGelEmailAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = g3lGelEmailAuditCtrl;
//</es-section>
