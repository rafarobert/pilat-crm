/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:22:02 GMT-0400 (Bolivia Time)
 * Time: 0:22:2
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:22:02 GMT-0400 (Bolivia Time)
 * Last time updated: 0:22:2
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const aokKnowledgebaseAuditService = require('../services/aok_knowledgebase_audit.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const aokKnowledgebaseAuditCtrl = {};
aokKnowledgebaseAuditCtrl.service = aokKnowledgebaseAuditService;


aokKnowledgebaseAuditCtrl.getAllAokKnowledgebaseAudit = async (req, res) => {
    try {
        const objAokKnowledgebaseAudit = await aokKnowledgebaseAuditService.getAllAokKnowledgebaseAudit(req.query);
        if (objAokKnowledgebaseAudit.length > 0) {
            util.setSuccess(200, 'AokKnowledgebaseAudit retrieved', objAokKnowledgebaseAudit);
        } else {
            util.setSuccess(200, 'No aokKnowledgebaseAudit found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aokKnowledgebaseAuditCtrl.getAAokKnowledgebaseAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAokKnowledgebaseAudit = await aokKnowledgebaseAuditService.getAAokKnowledgebaseAudit(id, req.query);
        if (!objAokKnowledgebaseAudit) {
            util.setError(404, `Cannot find aokKnowledgebaseAudit with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found aokKnowledgebaseAudit', objAokKnowledgebaseAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aokKnowledgebaseAuditCtrl.addAokKnowledgebaseAudit = async (req, res) => {
    try {
        const objAokKnowledgebaseAudit = await aokKnowledgebaseAuditService.addAokKnowledgebaseAudit(req.body);
        util.setSuccess(201, 'AokKnowledgebaseAudit Added!', objAokKnowledgebaseAudit);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aokKnowledgebaseAuditCtrl.updateAokKnowledgebaseAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAokKnowledgebaseAudit = await aokKnowledgebaseAuditService.updateAokKnowledgebaseAudit(id, req.body);
        if (!objAokKnowledgebaseAudit) {
            util.setError(404, `Cannot find aokKnowledgebaseAudit with the id: ${id}`);
        } else {
            util.setSuccess(200, 'AokKnowledgebaseAudit updated', objAokKnowledgebaseAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

aokKnowledgebaseAuditCtrl.deleteAokKnowledgebaseAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objAokKnowledgebaseAudit = await aokKnowledgebaseAuditService.deleteAokKnowledgebaseAudit(id);
        if (objAokKnowledgebaseAudit) {
            util.setSuccess(200, 'AokKnowledgebaseAudit deleted', objAokKnowledgebaseAudit);
        } else {
            util.setError(404, `AokKnowledgebaseAudit with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



aokKnowledgebaseAuditCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objAokKnowledgebaseAudit = await aokKnowledgebaseAuditService.findOneById(id, req.query);
        if (!objAokKnowledgebaseAudit) {
            util.setError(404, `Cannot find aokKnowledgebaseAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aokKnowledgebaseAudit', objAokKnowledgebaseAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aokKnowledgebaseAuditCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objAokKnowledgebaseAudit = await aokKnowledgebaseAuditService.findOneByCreatedBy(createdBy, req.query);
        if (!objAokKnowledgebaseAudit) {
            util.setError(404, `Cannot find aokKnowledgebaseAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aokKnowledgebaseAudit', objAokKnowledgebaseAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aokKnowledgebaseAuditCtrl.findOneByFieldName = async (req, res) => {
    try {
        const { fieldName } = req.params;
        const objAokKnowledgebaseAudit = await aokKnowledgebaseAuditService.findOneByFieldName(fieldName, req.query);
        if (!objAokKnowledgebaseAudit) {
            util.setError(404, `Cannot find aokKnowledgebaseAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aokKnowledgebaseAudit', objAokKnowledgebaseAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aokKnowledgebaseAuditCtrl.findOneByDataType = async (req, res) => {
    try {
        const { dataType } = req.params;
        const objAokKnowledgebaseAudit = await aokKnowledgebaseAuditService.findOneByDataType(dataType, req.query);
        if (!objAokKnowledgebaseAudit) {
            util.setError(404, `Cannot find aokKnowledgebaseAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aokKnowledgebaseAudit', objAokKnowledgebaseAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aokKnowledgebaseAuditCtrl.findOneByBeforeValueString = async (req, res) => {
    try {
        const { beforeValueString } = req.params;
        const objAokKnowledgebaseAudit = await aokKnowledgebaseAuditService.findOneByBeforeValueString(beforeValueString, req.query);
        if (!objAokKnowledgebaseAudit) {
            util.setError(404, `Cannot find aokKnowledgebaseAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aokKnowledgebaseAudit', objAokKnowledgebaseAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aokKnowledgebaseAuditCtrl.findOneByAfterValueString = async (req, res) => {
    try {
        const { afterValueString } = req.params;
        const objAokKnowledgebaseAudit = await aokKnowledgebaseAuditService.findOneByAfterValueString(afterValueString, req.query);
        if (!objAokKnowledgebaseAudit) {
            util.setError(404, `Cannot find aokKnowledgebaseAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aokKnowledgebaseAudit', objAokKnowledgebaseAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aokKnowledgebaseAuditCtrl.findOneByBeforeValueText = async (req, res) => {
    try {
        const { beforeValueText } = req.params;
        const objAokKnowledgebaseAudit = await aokKnowledgebaseAuditService.findOneByBeforeValueText(beforeValueText, req.query);
        if (!objAokKnowledgebaseAudit) {
            util.setError(404, `Cannot find aokKnowledgebaseAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aokKnowledgebaseAudit', objAokKnowledgebaseAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aokKnowledgebaseAuditCtrl.findOneByAfterValueText = async (req, res) => {
    try {
        const { afterValueText } = req.params;
        const objAokKnowledgebaseAudit = await aokKnowledgebaseAuditService.findOneByAfterValueText(afterValueText, req.query);
        if (!objAokKnowledgebaseAudit) {
            util.setError(404, `Cannot find aokKnowledgebaseAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aokKnowledgebaseAudit', objAokKnowledgebaseAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aokKnowledgebaseAuditCtrl.findOneByDateCreated = async (req, res) => {
    try {
        const { dateCreated } = req.params;
        const objAokKnowledgebaseAudit = await aokKnowledgebaseAuditService.findOneByDateCreated(dateCreated, req.query);
        if (!objAokKnowledgebaseAudit) {
            util.setError(404, `Cannot find aokKnowledgebaseAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aokKnowledgebaseAudit', objAokKnowledgebaseAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aokKnowledgebaseAuditCtrl.findOneByParentId = async (req, res) => {
    try {
        const { parentId } = req.params;
        const objAokKnowledgebaseAudit = await aokKnowledgebaseAuditService.findOneByParentId(parentId, req.query);
        if (!objAokKnowledgebaseAudit) {
            util.setError(404, `Cannot find aokKnowledgebaseAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aokKnowledgebaseAudit', objAokKnowledgebaseAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



aokKnowledgebaseAuditCtrl.updateAokKnowledgebaseAuditById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAokKnowledgebaseAudit = await aokKnowledgebaseAuditService.updateAokKnowledgebaseAuditById(id, req.body);
            if (!objAokKnowledgebaseAudit) {
                util.setError(404, `Cannot find aokKnowledgebaseAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AokKnowledgebaseAudit updated', objAokKnowledgebaseAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aokKnowledgebaseAuditCtrl.updateAokKnowledgebaseAuditByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAokKnowledgebaseAudit = await aokKnowledgebaseAuditService.updateAokKnowledgebaseAuditByCreatedBy(createdBy, req.body);
            if (!objAokKnowledgebaseAudit) {
                util.setError(404, `Cannot find aokKnowledgebaseAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AokKnowledgebaseAudit updated', objAokKnowledgebaseAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aokKnowledgebaseAuditCtrl.updateAokKnowledgebaseAuditByFieldName = async (req, res) => {
     const { fieldName } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAokKnowledgebaseAudit = await aokKnowledgebaseAuditService.updateAokKnowledgebaseAuditByFieldName(fieldName, req.body);
            if (!objAokKnowledgebaseAudit) {
                util.setError(404, `Cannot find aokKnowledgebaseAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AokKnowledgebaseAudit updated', objAokKnowledgebaseAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aokKnowledgebaseAuditCtrl.updateAokKnowledgebaseAuditByDataType = async (req, res) => {
     const { dataType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAokKnowledgebaseAudit = await aokKnowledgebaseAuditService.updateAokKnowledgebaseAuditByDataType(dataType, req.body);
            if (!objAokKnowledgebaseAudit) {
                util.setError(404, `Cannot find aokKnowledgebaseAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AokKnowledgebaseAudit updated', objAokKnowledgebaseAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aokKnowledgebaseAuditCtrl.updateAokKnowledgebaseAuditByBeforeValueString = async (req, res) => {
     const { beforeValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAokKnowledgebaseAudit = await aokKnowledgebaseAuditService.updateAokKnowledgebaseAuditByBeforeValueString(beforeValueString, req.body);
            if (!objAokKnowledgebaseAudit) {
                util.setError(404, `Cannot find aokKnowledgebaseAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AokKnowledgebaseAudit updated', objAokKnowledgebaseAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aokKnowledgebaseAuditCtrl.updateAokKnowledgebaseAuditByAfterValueString = async (req, res) => {
     const { afterValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAokKnowledgebaseAudit = await aokKnowledgebaseAuditService.updateAokKnowledgebaseAuditByAfterValueString(afterValueString, req.body);
            if (!objAokKnowledgebaseAudit) {
                util.setError(404, `Cannot find aokKnowledgebaseAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AokKnowledgebaseAudit updated', objAokKnowledgebaseAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aokKnowledgebaseAuditCtrl.updateAokKnowledgebaseAuditByBeforeValueText = async (req, res) => {
     const { beforeValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAokKnowledgebaseAudit = await aokKnowledgebaseAuditService.updateAokKnowledgebaseAuditByBeforeValueText(beforeValueText, req.body);
            if (!objAokKnowledgebaseAudit) {
                util.setError(404, `Cannot find aokKnowledgebaseAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AokKnowledgebaseAudit updated', objAokKnowledgebaseAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aokKnowledgebaseAuditCtrl.updateAokKnowledgebaseAuditByAfterValueText = async (req, res) => {
     const { afterValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAokKnowledgebaseAudit = await aokKnowledgebaseAuditService.updateAokKnowledgebaseAuditByAfterValueText(afterValueText, req.body);
            if (!objAokKnowledgebaseAudit) {
                util.setError(404, `Cannot find aokKnowledgebaseAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AokKnowledgebaseAudit updated', objAokKnowledgebaseAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aokKnowledgebaseAuditCtrl.updateAokKnowledgebaseAuditByDateCreated = async (req, res) => {
     const { dateCreated } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAokKnowledgebaseAudit = await aokKnowledgebaseAuditService.updateAokKnowledgebaseAuditByDateCreated(dateCreated, req.body);
            if (!objAokKnowledgebaseAudit) {
                util.setError(404, `Cannot find aokKnowledgebaseAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AokKnowledgebaseAudit updated', objAokKnowledgebaseAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aokKnowledgebaseAuditCtrl.updateAokKnowledgebaseAuditByParentId = async (req, res) => {
     const { parentId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAokKnowledgebaseAudit = await aokKnowledgebaseAuditService.updateAokKnowledgebaseAuditByParentId(parentId, req.body);
            if (!objAokKnowledgebaseAudit) {
                util.setError(404, `Cannot find aokKnowledgebaseAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AokKnowledgebaseAudit updated', objAokKnowledgebaseAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = aokKnowledgebaseAuditCtrl;
//</es-section>
