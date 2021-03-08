/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:36:17 GMT-0400 (Bolivia Time)
 * Time: 15:36:17
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:36:17 GMT-0400 (Bolivia Time)
 * Last time updated: 15:36:17
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const g3lGelWhatsappAuditService = require('../services/g3l_gel_whatsapp_audit.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const g3lGelWhatsappAuditCtrl = {};
g3lGelWhatsappAuditCtrl.service = g3lGelWhatsappAuditService;


g3lGelWhatsappAuditCtrl.getAllG3lGelWhatsappAudit = async (req, res) => {
    try {
        const objG3lGelWhatsappAudit = await g3lGelWhatsappAuditService.getAllG3lGelWhatsappAudit(req.query);
        if (objG3lGelWhatsappAudit.length > 0) {
            util.setSuccess(200, 'G3lGelWhatsappAudit retrieved', objG3lGelWhatsappAudit);
        } else {
            util.setSuccess(200, 'No g3lGelWhatsappAudit found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

g3lGelWhatsappAuditCtrl.getAG3lGelWhatsappAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objG3lGelWhatsappAudit = await g3lGelWhatsappAuditService.getAG3lGelWhatsappAudit(id, req.query);
        if (!objG3lGelWhatsappAudit) {
            util.setError(404, `Cannot find g3lGelWhatsappAudit with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found g3lGelWhatsappAudit', objG3lGelWhatsappAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

g3lGelWhatsappAuditCtrl.addG3lGelWhatsappAudit = async (req, res) => {
    try {
        const objG3lGelWhatsappAudit = await g3lGelWhatsappAuditService.addG3lGelWhatsappAudit(req.body);
        util.setSuccess(201, 'G3lGelWhatsappAudit Added!', objG3lGelWhatsappAudit);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

g3lGelWhatsappAuditCtrl.updateG3lGelWhatsappAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objG3lGelWhatsappAudit = await g3lGelWhatsappAuditService.updateG3lGelWhatsappAudit(id, req.body);
        if (!objG3lGelWhatsappAudit) {
            util.setError(404, `Cannot find g3lGelWhatsappAudit with the id: ${id}`);
        } else {
            util.setSuccess(200, 'G3lGelWhatsappAudit updated', objG3lGelWhatsappAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

g3lGelWhatsappAuditCtrl.deleteG3lGelWhatsappAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objG3lGelWhatsappAudit = await g3lGelWhatsappAuditService.deleteG3lGelWhatsappAudit(id);
        if (objG3lGelWhatsappAudit) {
            util.setSuccess(200, 'G3lGelWhatsappAudit deleted', objG3lGelWhatsappAudit);
        } else {
            util.setError(404, `G3lGelWhatsappAudit with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



g3lGelWhatsappAuditCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objG3lGelWhatsappAudit = await g3lGelWhatsappAuditService.findOneById(id, req.query);
        if (!objG3lGelWhatsappAudit) {
            util.setError(404, `Cannot find g3lGelWhatsappAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found g3lGelWhatsappAudit', objG3lGelWhatsappAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

g3lGelWhatsappAuditCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objG3lGelWhatsappAudit = await g3lGelWhatsappAuditService.findOneByCreatedBy(createdBy, req.query);
        if (!objG3lGelWhatsappAudit) {
            util.setError(404, `Cannot find g3lGelWhatsappAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found g3lGelWhatsappAudit', objG3lGelWhatsappAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

g3lGelWhatsappAuditCtrl.findOneByFieldName = async (req, res) => {
    try {
        const { fieldName } = req.params;
        const objG3lGelWhatsappAudit = await g3lGelWhatsappAuditService.findOneByFieldName(fieldName, req.query);
        if (!objG3lGelWhatsappAudit) {
            util.setError(404, `Cannot find g3lGelWhatsappAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found g3lGelWhatsappAudit', objG3lGelWhatsappAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

g3lGelWhatsappAuditCtrl.findOneByDataType = async (req, res) => {
    try {
        const { dataType } = req.params;
        const objG3lGelWhatsappAudit = await g3lGelWhatsappAuditService.findOneByDataType(dataType, req.query);
        if (!objG3lGelWhatsappAudit) {
            util.setError(404, `Cannot find g3lGelWhatsappAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found g3lGelWhatsappAudit', objG3lGelWhatsappAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

g3lGelWhatsappAuditCtrl.findOneByBeforeValueString = async (req, res) => {
    try {
        const { beforeValueString } = req.params;
        const objG3lGelWhatsappAudit = await g3lGelWhatsappAuditService.findOneByBeforeValueString(beforeValueString, req.query);
        if (!objG3lGelWhatsappAudit) {
            util.setError(404, `Cannot find g3lGelWhatsappAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found g3lGelWhatsappAudit', objG3lGelWhatsappAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

g3lGelWhatsappAuditCtrl.findOneByAfterValueString = async (req, res) => {
    try {
        const { afterValueString } = req.params;
        const objG3lGelWhatsappAudit = await g3lGelWhatsappAuditService.findOneByAfterValueString(afterValueString, req.query);
        if (!objG3lGelWhatsappAudit) {
            util.setError(404, `Cannot find g3lGelWhatsappAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found g3lGelWhatsappAudit', objG3lGelWhatsappAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

g3lGelWhatsappAuditCtrl.findOneByBeforeValueText = async (req, res) => {
    try {
        const { beforeValueText } = req.params;
        const objG3lGelWhatsappAudit = await g3lGelWhatsappAuditService.findOneByBeforeValueText(beforeValueText, req.query);
        if (!objG3lGelWhatsappAudit) {
            util.setError(404, `Cannot find g3lGelWhatsappAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found g3lGelWhatsappAudit', objG3lGelWhatsappAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

g3lGelWhatsappAuditCtrl.findOneByAfterValueText = async (req, res) => {
    try {
        const { afterValueText } = req.params;
        const objG3lGelWhatsappAudit = await g3lGelWhatsappAuditService.findOneByAfterValueText(afterValueText, req.query);
        if (!objG3lGelWhatsappAudit) {
            util.setError(404, `Cannot find g3lGelWhatsappAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found g3lGelWhatsappAudit', objG3lGelWhatsappAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

g3lGelWhatsappAuditCtrl.findOneByDateCreated = async (req, res) => {
    try {
        const { dateCreated } = req.params;
        const objG3lGelWhatsappAudit = await g3lGelWhatsappAuditService.findOneByDateCreated(dateCreated, req.query);
        if (!objG3lGelWhatsappAudit) {
            util.setError(404, `Cannot find g3lGelWhatsappAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found g3lGelWhatsappAudit', objG3lGelWhatsappAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

g3lGelWhatsappAuditCtrl.findOneByParentId = async (req, res) => {
    try {
        const { parentId } = req.params;
        const objG3lGelWhatsappAudit = await g3lGelWhatsappAuditService.findOneByParentId(parentId, req.query);
        if (!objG3lGelWhatsappAudit) {
            util.setError(404, `Cannot find g3lGelWhatsappAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found g3lGelWhatsappAudit', objG3lGelWhatsappAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



g3lGelWhatsappAuditCtrl.updateG3lGelWhatsappAuditById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objG3lGelWhatsappAudit = await g3lGelWhatsappAuditService.updateG3lGelWhatsappAuditById(id, req.body);
            if (!objG3lGelWhatsappAudit) {
                util.setError(404, `Cannot find g3lGelWhatsappAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'G3lGelWhatsappAudit updated', objG3lGelWhatsappAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

g3lGelWhatsappAuditCtrl.updateG3lGelWhatsappAuditByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objG3lGelWhatsappAudit = await g3lGelWhatsappAuditService.updateG3lGelWhatsappAuditByCreatedBy(createdBy, req.body);
            if (!objG3lGelWhatsappAudit) {
                util.setError(404, `Cannot find g3lGelWhatsappAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'G3lGelWhatsappAudit updated', objG3lGelWhatsappAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

g3lGelWhatsappAuditCtrl.updateG3lGelWhatsappAuditByFieldName = async (req, res) => {
     const { fieldName } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objG3lGelWhatsappAudit = await g3lGelWhatsappAuditService.updateG3lGelWhatsappAuditByFieldName(fieldName, req.body);
            if (!objG3lGelWhatsappAudit) {
                util.setError(404, `Cannot find g3lGelWhatsappAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'G3lGelWhatsappAudit updated', objG3lGelWhatsappAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

g3lGelWhatsappAuditCtrl.updateG3lGelWhatsappAuditByDataType = async (req, res) => {
     const { dataType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objG3lGelWhatsappAudit = await g3lGelWhatsappAuditService.updateG3lGelWhatsappAuditByDataType(dataType, req.body);
            if (!objG3lGelWhatsappAudit) {
                util.setError(404, `Cannot find g3lGelWhatsappAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'G3lGelWhatsappAudit updated', objG3lGelWhatsappAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

g3lGelWhatsappAuditCtrl.updateG3lGelWhatsappAuditByBeforeValueString = async (req, res) => {
     const { beforeValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objG3lGelWhatsappAudit = await g3lGelWhatsappAuditService.updateG3lGelWhatsappAuditByBeforeValueString(beforeValueString, req.body);
            if (!objG3lGelWhatsappAudit) {
                util.setError(404, `Cannot find g3lGelWhatsappAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'G3lGelWhatsappAudit updated', objG3lGelWhatsappAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

g3lGelWhatsappAuditCtrl.updateG3lGelWhatsappAuditByAfterValueString = async (req, res) => {
     const { afterValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objG3lGelWhatsappAudit = await g3lGelWhatsappAuditService.updateG3lGelWhatsappAuditByAfterValueString(afterValueString, req.body);
            if (!objG3lGelWhatsappAudit) {
                util.setError(404, `Cannot find g3lGelWhatsappAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'G3lGelWhatsappAudit updated', objG3lGelWhatsappAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

g3lGelWhatsappAuditCtrl.updateG3lGelWhatsappAuditByBeforeValueText = async (req, res) => {
     const { beforeValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objG3lGelWhatsappAudit = await g3lGelWhatsappAuditService.updateG3lGelWhatsappAuditByBeforeValueText(beforeValueText, req.body);
            if (!objG3lGelWhatsappAudit) {
                util.setError(404, `Cannot find g3lGelWhatsappAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'G3lGelWhatsappAudit updated', objG3lGelWhatsappAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

g3lGelWhatsappAuditCtrl.updateG3lGelWhatsappAuditByAfterValueText = async (req, res) => {
     const { afterValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objG3lGelWhatsappAudit = await g3lGelWhatsappAuditService.updateG3lGelWhatsappAuditByAfterValueText(afterValueText, req.body);
            if (!objG3lGelWhatsappAudit) {
                util.setError(404, `Cannot find g3lGelWhatsappAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'G3lGelWhatsappAudit updated', objG3lGelWhatsappAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

g3lGelWhatsappAuditCtrl.updateG3lGelWhatsappAuditByDateCreated = async (req, res) => {
     const { dateCreated } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objG3lGelWhatsappAudit = await g3lGelWhatsappAuditService.updateG3lGelWhatsappAuditByDateCreated(dateCreated, req.body);
            if (!objG3lGelWhatsappAudit) {
                util.setError(404, `Cannot find g3lGelWhatsappAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'G3lGelWhatsappAudit updated', objG3lGelWhatsappAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

g3lGelWhatsappAuditCtrl.updateG3lGelWhatsappAuditByParentId = async (req, res) => {
     const { parentId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objG3lGelWhatsappAudit = await g3lGelWhatsappAuditService.updateG3lGelWhatsappAuditByParentId(parentId, req.body);
            if (!objG3lGelWhatsappAudit) {
                util.setError(404, `Cannot find g3lGelWhatsappAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'G3lGelWhatsappAudit updated', objG3lGelWhatsappAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = g3lGelWhatsappAuditCtrl;
//</es-section>
