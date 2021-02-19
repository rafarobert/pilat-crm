/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:37:36 GMT-0400 (Bolivia Time)
 * Time: 18:37:36
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:37:36 GMT-0400 (Bolivia Time)
 * Last time updated: 18:37:36
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const jjwgAreaAuditService = require('../services/jjwg_areas_audit.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const jjwgAreasAuditCtrl = {};
jjwgAreasAuditCtrl.service = jjwgAreaAuditService;


jjwgAreasAuditCtrl.getAllJjwgAreasAudit = async (req, res) => {
    try {
        const objJjwgAreasAudit = await jjwgAreaAuditService.getAllJjwgAreasAudit(req.query);
        if (objJjwgAreasAudit.length > 0) {
            util.setSuccess(200, 'JjwgAreasAudit retrieved', objJjwgAreasAudit);
        } else {
            util.setSuccess(200, 'No jjwgAreaAudit found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgAreasAuditCtrl.getAJjwgAreaAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objJjwgAreaAudit = await jjwgAreaAuditService.getAJjwgAreaAudit(id, req.query);
        if (!objJjwgAreaAudit) {
            util.setError(404, `Cannot find jjwgAreaAudit with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found jjwgAreaAudit', objJjwgAreaAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgAreasAuditCtrl.addJjwgAreaAudit = async (req, res) => {
    try {
        const objJjwgAreaAudit = await jjwgAreaAuditService.addJjwgAreaAudit(req.body);
        util.setSuccess(201, 'JjwgAreaAudit Added!', objJjwgAreaAudit);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgAreasAuditCtrl.updateJjwgAreaAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objJjwgAreaAudit = await jjwgAreaAuditService.updateJjwgAreaAudit(id, req.body);
        if (!objJjwgAreaAudit) {
            util.setError(404, `Cannot find jjwgAreaAudit with the id: ${id}`);
        } else {
            util.setSuccess(200, 'JjwgAreaAudit updated', objJjwgAreaAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

jjwgAreasAuditCtrl.deleteJjwgAreaAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objJjwgAreaAudit = await jjwgAreaAuditService.deleteJjwgAreaAudit(id);
        if (objJjwgAreaAudit) {
            util.setSuccess(200, 'JjwgAreaAudit deleted', objJjwgAreaAudit);
        } else {
            util.setError(404, `JjwgAreaAudit with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



jjwgAreasAuditCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objJjwgAreaAudit = await jjwgAreaAuditService.findOneById(id, req.query);
        if (!objJjwgAreaAudit) {
            util.setError(404, `Cannot find jjwgAreaAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgAreaAudit', objJjwgAreaAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgAreasAuditCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objJjwgAreaAudit = await jjwgAreaAuditService.findOneByCreatedBy(createdBy, req.query);
        if (!objJjwgAreaAudit) {
            util.setError(404, `Cannot find jjwgAreaAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgAreaAudit', objJjwgAreaAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgAreasAuditCtrl.findOneByFieldName = async (req, res) => {
    try {
        const { fieldName } = req.params;
        const objJjwgAreaAudit = await jjwgAreaAuditService.findOneByFieldName(fieldName, req.query);
        if (!objJjwgAreaAudit) {
            util.setError(404, `Cannot find jjwgAreaAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgAreaAudit', objJjwgAreaAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgAreasAuditCtrl.findOneByDataType = async (req, res) => {
    try {
        const { dataType } = req.params;
        const objJjwgAreaAudit = await jjwgAreaAuditService.findOneByDataType(dataType, req.query);
        if (!objJjwgAreaAudit) {
            util.setError(404, `Cannot find jjwgAreaAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgAreaAudit', objJjwgAreaAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgAreasAuditCtrl.findOneByBeforeValueString = async (req, res) => {
    try {
        const { beforeValueString } = req.params;
        const objJjwgAreaAudit = await jjwgAreaAuditService.findOneByBeforeValueString(beforeValueString, req.query);
        if (!objJjwgAreaAudit) {
            util.setError(404, `Cannot find jjwgAreaAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgAreaAudit', objJjwgAreaAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgAreasAuditCtrl.findOneByAfterValueString = async (req, res) => {
    try {
        const { afterValueString } = req.params;
        const objJjwgAreaAudit = await jjwgAreaAuditService.findOneByAfterValueString(afterValueString, req.query);
        if (!objJjwgAreaAudit) {
            util.setError(404, `Cannot find jjwgAreaAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgAreaAudit', objJjwgAreaAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgAreasAuditCtrl.findOneByBeforeValueText = async (req, res) => {
    try {
        const { beforeValueText } = req.params;
        const objJjwgAreaAudit = await jjwgAreaAuditService.findOneByBeforeValueText(beforeValueText, req.query);
        if (!objJjwgAreaAudit) {
            util.setError(404, `Cannot find jjwgAreaAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgAreaAudit', objJjwgAreaAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgAreasAuditCtrl.findOneByAfterValueText = async (req, res) => {
    try {
        const { afterValueText } = req.params;
        const objJjwgAreaAudit = await jjwgAreaAuditService.findOneByAfterValueText(afterValueText, req.query);
        if (!objJjwgAreaAudit) {
            util.setError(404, `Cannot find jjwgAreaAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgAreaAudit', objJjwgAreaAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgAreasAuditCtrl.findOneByDateCreated = async (req, res) => {
    try {
        const { dateCreated } = req.params;
        const objJjwgAreaAudit = await jjwgAreaAuditService.findOneByDateCreated(dateCreated, req.query);
        if (!objJjwgAreaAudit) {
            util.setError(404, `Cannot find jjwgAreaAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgAreaAudit', objJjwgAreaAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgAreasAuditCtrl.findOneByParentId = async (req, res) => {
    try {
        const { parentId } = req.params;
        const objJjwgAreaAudit = await jjwgAreaAuditService.findOneByParentId(parentId, req.query);
        if (!objJjwgAreaAudit) {
            util.setError(404, `Cannot find jjwgAreaAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgAreaAudit', objJjwgAreaAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



jjwgAreasAuditCtrl.updateJjwgAreaAuditById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgAreaAudit = await jjwgAreaAuditService.updateJjwgAreaAuditById(id, req.body);
            if (!objJjwgAreaAudit) {
                util.setError(404, `Cannot find jjwgAreaAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgAreaAudit updated', objJjwgAreaAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgAreasAuditCtrl.updateJjwgAreaAuditByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgAreaAudit = await jjwgAreaAuditService.updateJjwgAreaAuditByCreatedBy(createdBy, req.body);
            if (!objJjwgAreaAudit) {
                util.setError(404, `Cannot find jjwgAreaAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgAreaAudit updated', objJjwgAreaAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgAreasAuditCtrl.updateJjwgAreaAuditByFieldName = async (req, res) => {
     const { fieldName } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgAreaAudit = await jjwgAreaAuditService.updateJjwgAreaAuditByFieldName(fieldName, req.body);
            if (!objJjwgAreaAudit) {
                util.setError(404, `Cannot find jjwgAreaAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgAreaAudit updated', objJjwgAreaAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgAreasAuditCtrl.updateJjwgAreaAuditByDataType = async (req, res) => {
     const { dataType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgAreaAudit = await jjwgAreaAuditService.updateJjwgAreaAuditByDataType(dataType, req.body);
            if (!objJjwgAreaAudit) {
                util.setError(404, `Cannot find jjwgAreaAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgAreaAudit updated', objJjwgAreaAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgAreasAuditCtrl.updateJjwgAreaAuditByBeforeValueString = async (req, res) => {
     const { beforeValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgAreaAudit = await jjwgAreaAuditService.updateJjwgAreaAuditByBeforeValueString(beforeValueString, req.body);
            if (!objJjwgAreaAudit) {
                util.setError(404, `Cannot find jjwgAreaAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgAreaAudit updated', objJjwgAreaAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgAreasAuditCtrl.updateJjwgAreaAuditByAfterValueString = async (req, res) => {
     const { afterValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgAreaAudit = await jjwgAreaAuditService.updateJjwgAreaAuditByAfterValueString(afterValueString, req.body);
            if (!objJjwgAreaAudit) {
                util.setError(404, `Cannot find jjwgAreaAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgAreaAudit updated', objJjwgAreaAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgAreasAuditCtrl.updateJjwgAreaAuditByBeforeValueText = async (req, res) => {
     const { beforeValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgAreaAudit = await jjwgAreaAuditService.updateJjwgAreaAuditByBeforeValueText(beforeValueText, req.body);
            if (!objJjwgAreaAudit) {
                util.setError(404, `Cannot find jjwgAreaAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgAreaAudit updated', objJjwgAreaAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgAreasAuditCtrl.updateJjwgAreaAuditByAfterValueText = async (req, res) => {
     const { afterValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgAreaAudit = await jjwgAreaAuditService.updateJjwgAreaAuditByAfterValueText(afterValueText, req.body);
            if (!objJjwgAreaAudit) {
                util.setError(404, `Cannot find jjwgAreaAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgAreaAudit updated', objJjwgAreaAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgAreasAuditCtrl.updateJjwgAreaAuditByDateCreated = async (req, res) => {
     const { dateCreated } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgAreaAudit = await jjwgAreaAuditService.updateJjwgAreaAuditByDateCreated(dateCreated, req.body);
            if (!objJjwgAreaAudit) {
                util.setError(404, `Cannot find jjwgAreaAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgAreaAudit updated', objJjwgAreaAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgAreasAuditCtrl.updateJjwgAreaAuditByParentId = async (req, res) => {
     const { parentId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgAreaAudit = await jjwgAreaAuditService.updateJjwgAreaAuditByParentId(parentId, req.body);
            if (!objJjwgAreaAudit) {
                util.setError(404, `Cannot find jjwgAreaAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgAreaAudit updated', objJjwgAreaAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = jjwgAreasAuditCtrl;
//</es-section>
