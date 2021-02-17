/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:42:15 GMT-0400 (Bolivia Time)
 * Time: 4:42:15
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:42:15 GMT-0400 (Bolivia Time)
 * Last time updated: 4:42:15
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const aoPdfTemplateAuditService = require('../services/aos_pdf_templates_audit.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const aosPdfTemplatesAuditCtrl = {};
aosPdfTemplatesAuditCtrl.service = aoPdfTemplateAuditService;


aosPdfTemplatesAuditCtrl.getAllAosPdfTemplatesAudit = async (req, res) => {
    try {
        const objAosPdfTemplatesAudit = await aoPdfTemplateAuditService.getAllAosPdfTemplatesAudit(req.query);
        if (objAosPdfTemplatesAudit.length > 0) {
            util.setSuccess(200, 'AosPdfTemplatesAudit retrieved', objAosPdfTemplatesAudit);
        } else {
            util.setSuccess(200, 'No aoPdfTemplateAudit found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosPdfTemplatesAuditCtrl.getAAoPdfTemplateAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAoPdfTemplateAudit = await aoPdfTemplateAuditService.getAAoPdfTemplateAudit(id, req.query);
        if (!objAoPdfTemplateAudit) {
            util.setError(404, `Cannot find aoPdfTemplateAudit with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found aoPdfTemplateAudit', objAoPdfTemplateAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosPdfTemplatesAuditCtrl.addAoPdfTemplateAudit = async (req, res) => {
    try {
        const objAoPdfTemplateAudit = await aoPdfTemplateAuditService.addAoPdfTemplateAudit(req.body);
        util.setSuccess(201, 'AoPdfTemplateAudit Added!', objAoPdfTemplateAudit);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosPdfTemplatesAuditCtrl.updateAoPdfTemplateAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAoPdfTemplateAudit = await aoPdfTemplateAuditService.updateAoPdfTemplateAudit(id, req.body);
        if (!objAoPdfTemplateAudit) {
            util.setError(404, `Cannot find aoPdfTemplateAudit with the id: ${id}`);
        } else {
            util.setSuccess(200, 'AoPdfTemplateAudit updated', objAoPdfTemplateAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

aosPdfTemplatesAuditCtrl.deleteAoPdfTemplateAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objAoPdfTemplateAudit = await aoPdfTemplateAuditService.deleteAoPdfTemplateAudit(id);
        if (objAoPdfTemplateAudit) {
            util.setSuccess(200, 'AoPdfTemplateAudit deleted', objAoPdfTemplateAudit);
        } else {
            util.setError(404, `AoPdfTemplateAudit with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



aosPdfTemplatesAuditCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objAoPdfTemplateAudit = await aoPdfTemplateAuditService.findOneById(id, req.query);
        if (!objAoPdfTemplateAudit) {
            util.setError(404, `Cannot find aoPdfTemplateAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoPdfTemplateAudit', objAoPdfTemplateAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosPdfTemplatesAuditCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objAoPdfTemplateAudit = await aoPdfTemplateAuditService.findOneByCreatedBy(createdBy, req.query);
        if (!objAoPdfTemplateAudit) {
            util.setError(404, `Cannot find aoPdfTemplateAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoPdfTemplateAudit', objAoPdfTemplateAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosPdfTemplatesAuditCtrl.findOneByFieldName = async (req, res) => {
    try {
        const { fieldName } = req.params;
        const objAoPdfTemplateAudit = await aoPdfTemplateAuditService.findOneByFieldName(fieldName, req.query);
        if (!objAoPdfTemplateAudit) {
            util.setError(404, `Cannot find aoPdfTemplateAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoPdfTemplateAudit', objAoPdfTemplateAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosPdfTemplatesAuditCtrl.findOneByDataType = async (req, res) => {
    try {
        const { dataType } = req.params;
        const objAoPdfTemplateAudit = await aoPdfTemplateAuditService.findOneByDataType(dataType, req.query);
        if (!objAoPdfTemplateAudit) {
            util.setError(404, `Cannot find aoPdfTemplateAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoPdfTemplateAudit', objAoPdfTemplateAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosPdfTemplatesAuditCtrl.findOneByBeforeValueString = async (req, res) => {
    try {
        const { beforeValueString } = req.params;
        const objAoPdfTemplateAudit = await aoPdfTemplateAuditService.findOneByBeforeValueString(beforeValueString, req.query);
        if (!objAoPdfTemplateAudit) {
            util.setError(404, `Cannot find aoPdfTemplateAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoPdfTemplateAudit', objAoPdfTemplateAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosPdfTemplatesAuditCtrl.findOneByAfterValueString = async (req, res) => {
    try {
        const { afterValueString } = req.params;
        const objAoPdfTemplateAudit = await aoPdfTemplateAuditService.findOneByAfterValueString(afterValueString, req.query);
        if (!objAoPdfTemplateAudit) {
            util.setError(404, `Cannot find aoPdfTemplateAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoPdfTemplateAudit', objAoPdfTemplateAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosPdfTemplatesAuditCtrl.findOneByBeforeValueText = async (req, res) => {
    try {
        const { beforeValueText } = req.params;
        const objAoPdfTemplateAudit = await aoPdfTemplateAuditService.findOneByBeforeValueText(beforeValueText, req.query);
        if (!objAoPdfTemplateAudit) {
            util.setError(404, `Cannot find aoPdfTemplateAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoPdfTemplateAudit', objAoPdfTemplateAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosPdfTemplatesAuditCtrl.findOneByAfterValueText = async (req, res) => {
    try {
        const { afterValueText } = req.params;
        const objAoPdfTemplateAudit = await aoPdfTemplateAuditService.findOneByAfterValueText(afterValueText, req.query);
        if (!objAoPdfTemplateAudit) {
            util.setError(404, `Cannot find aoPdfTemplateAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoPdfTemplateAudit', objAoPdfTemplateAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosPdfTemplatesAuditCtrl.findOneByDateCreated = async (req, res) => {
    try {
        const { dateCreated } = req.params;
        const objAoPdfTemplateAudit = await aoPdfTemplateAuditService.findOneByDateCreated(dateCreated, req.query);
        if (!objAoPdfTemplateAudit) {
            util.setError(404, `Cannot find aoPdfTemplateAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoPdfTemplateAudit', objAoPdfTemplateAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosPdfTemplatesAuditCtrl.findOneByParentId = async (req, res) => {
    try {
        const { parentId } = req.params;
        const objAoPdfTemplateAudit = await aoPdfTemplateAuditService.findOneByParentId(parentId, req.query);
        if (!objAoPdfTemplateAudit) {
            util.setError(404, `Cannot find aoPdfTemplateAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoPdfTemplateAudit', objAoPdfTemplateAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



aosPdfTemplatesAuditCtrl.updateAoPdfTemplateAuditById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoPdfTemplateAudit = await aoPdfTemplateAuditService.updateAoPdfTemplateAuditById(id, req.body);
            if (!objAoPdfTemplateAudit) {
                util.setError(404, `Cannot find aoPdfTemplateAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoPdfTemplateAudit updated', objAoPdfTemplateAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosPdfTemplatesAuditCtrl.updateAoPdfTemplateAuditByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoPdfTemplateAudit = await aoPdfTemplateAuditService.updateAoPdfTemplateAuditByCreatedBy(createdBy, req.body);
            if (!objAoPdfTemplateAudit) {
                util.setError(404, `Cannot find aoPdfTemplateAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoPdfTemplateAudit updated', objAoPdfTemplateAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosPdfTemplatesAuditCtrl.updateAoPdfTemplateAuditByFieldName = async (req, res) => {
     const { fieldName } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoPdfTemplateAudit = await aoPdfTemplateAuditService.updateAoPdfTemplateAuditByFieldName(fieldName, req.body);
            if (!objAoPdfTemplateAudit) {
                util.setError(404, `Cannot find aoPdfTemplateAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoPdfTemplateAudit updated', objAoPdfTemplateAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosPdfTemplatesAuditCtrl.updateAoPdfTemplateAuditByDataType = async (req, res) => {
     const { dataType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoPdfTemplateAudit = await aoPdfTemplateAuditService.updateAoPdfTemplateAuditByDataType(dataType, req.body);
            if (!objAoPdfTemplateAudit) {
                util.setError(404, `Cannot find aoPdfTemplateAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoPdfTemplateAudit updated', objAoPdfTemplateAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosPdfTemplatesAuditCtrl.updateAoPdfTemplateAuditByBeforeValueString = async (req, res) => {
     const { beforeValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoPdfTemplateAudit = await aoPdfTemplateAuditService.updateAoPdfTemplateAuditByBeforeValueString(beforeValueString, req.body);
            if (!objAoPdfTemplateAudit) {
                util.setError(404, `Cannot find aoPdfTemplateAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoPdfTemplateAudit updated', objAoPdfTemplateAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosPdfTemplatesAuditCtrl.updateAoPdfTemplateAuditByAfterValueString = async (req, res) => {
     const { afterValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoPdfTemplateAudit = await aoPdfTemplateAuditService.updateAoPdfTemplateAuditByAfterValueString(afterValueString, req.body);
            if (!objAoPdfTemplateAudit) {
                util.setError(404, `Cannot find aoPdfTemplateAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoPdfTemplateAudit updated', objAoPdfTemplateAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosPdfTemplatesAuditCtrl.updateAoPdfTemplateAuditByBeforeValueText = async (req, res) => {
     const { beforeValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoPdfTemplateAudit = await aoPdfTemplateAuditService.updateAoPdfTemplateAuditByBeforeValueText(beforeValueText, req.body);
            if (!objAoPdfTemplateAudit) {
                util.setError(404, `Cannot find aoPdfTemplateAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoPdfTemplateAudit updated', objAoPdfTemplateAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosPdfTemplatesAuditCtrl.updateAoPdfTemplateAuditByAfterValueText = async (req, res) => {
     const { afterValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoPdfTemplateAudit = await aoPdfTemplateAuditService.updateAoPdfTemplateAuditByAfterValueText(afterValueText, req.body);
            if (!objAoPdfTemplateAudit) {
                util.setError(404, `Cannot find aoPdfTemplateAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoPdfTemplateAudit updated', objAoPdfTemplateAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosPdfTemplatesAuditCtrl.updateAoPdfTemplateAuditByDateCreated = async (req, res) => {
     const { dateCreated } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoPdfTemplateAudit = await aoPdfTemplateAuditService.updateAoPdfTemplateAuditByDateCreated(dateCreated, req.body);
            if (!objAoPdfTemplateAudit) {
                util.setError(404, `Cannot find aoPdfTemplateAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoPdfTemplateAudit updated', objAoPdfTemplateAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosPdfTemplatesAuditCtrl.updateAoPdfTemplateAuditByParentId = async (req, res) => {
     const { parentId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoPdfTemplateAudit = await aoPdfTemplateAuditService.updateAoPdfTemplateAuditByParentId(parentId, req.body);
            if (!objAoPdfTemplateAudit) {
                util.setError(404, `Cannot find aoPdfTemplateAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AoPdfTemplateAudit updated', objAoPdfTemplateAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = aosPdfTemplatesAuditCtrl;
//</es-section>
