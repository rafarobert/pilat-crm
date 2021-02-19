/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:37:40 GMT-0400 (Bolivia Time)
 * Time: 18:37:40
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:37:40 GMT-0400 (Bolivia Time)
 * Last time updated: 18:37:40
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const jjwgMarkerAuditService = require('../services/jjwg_markers_audit.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const jjwgMarkersAuditCtrl = {};
jjwgMarkersAuditCtrl.service = jjwgMarkerAuditService;


jjwgMarkersAuditCtrl.getAllJjwgMarkersAudit = async (req, res) => {
    try {
        const objJjwgMarkersAudit = await jjwgMarkerAuditService.getAllJjwgMarkersAudit(req.query);
        if (objJjwgMarkersAudit.length > 0) {
            util.setSuccess(200, 'JjwgMarkersAudit retrieved', objJjwgMarkersAudit);
        } else {
            util.setSuccess(200, 'No jjwgMarkerAudit found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgMarkersAuditCtrl.getAJjwgMarkerAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objJjwgMarkerAudit = await jjwgMarkerAuditService.getAJjwgMarkerAudit(id, req.query);
        if (!objJjwgMarkerAudit) {
            util.setError(404, `Cannot find jjwgMarkerAudit with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found jjwgMarkerAudit', objJjwgMarkerAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgMarkersAuditCtrl.addJjwgMarkerAudit = async (req, res) => {
    try {
        const objJjwgMarkerAudit = await jjwgMarkerAuditService.addJjwgMarkerAudit(req.body);
        util.setSuccess(201, 'JjwgMarkerAudit Added!', objJjwgMarkerAudit);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgMarkersAuditCtrl.updateJjwgMarkerAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objJjwgMarkerAudit = await jjwgMarkerAuditService.updateJjwgMarkerAudit(id, req.body);
        if (!objJjwgMarkerAudit) {
            util.setError(404, `Cannot find jjwgMarkerAudit with the id: ${id}`);
        } else {
            util.setSuccess(200, 'JjwgMarkerAudit updated', objJjwgMarkerAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

jjwgMarkersAuditCtrl.deleteJjwgMarkerAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objJjwgMarkerAudit = await jjwgMarkerAuditService.deleteJjwgMarkerAudit(id);
        if (objJjwgMarkerAudit) {
            util.setSuccess(200, 'JjwgMarkerAudit deleted', objJjwgMarkerAudit);
        } else {
            util.setError(404, `JjwgMarkerAudit with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



jjwgMarkersAuditCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objJjwgMarkerAudit = await jjwgMarkerAuditService.findOneById(id, req.query);
        if (!objJjwgMarkerAudit) {
            util.setError(404, `Cannot find jjwgMarkerAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgMarkerAudit', objJjwgMarkerAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgMarkersAuditCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objJjwgMarkerAudit = await jjwgMarkerAuditService.findOneByCreatedBy(createdBy, req.query);
        if (!objJjwgMarkerAudit) {
            util.setError(404, `Cannot find jjwgMarkerAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgMarkerAudit', objJjwgMarkerAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgMarkersAuditCtrl.findOneByFieldName = async (req, res) => {
    try {
        const { fieldName } = req.params;
        const objJjwgMarkerAudit = await jjwgMarkerAuditService.findOneByFieldName(fieldName, req.query);
        if (!objJjwgMarkerAudit) {
            util.setError(404, `Cannot find jjwgMarkerAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgMarkerAudit', objJjwgMarkerAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgMarkersAuditCtrl.findOneByDataType = async (req, res) => {
    try {
        const { dataType } = req.params;
        const objJjwgMarkerAudit = await jjwgMarkerAuditService.findOneByDataType(dataType, req.query);
        if (!objJjwgMarkerAudit) {
            util.setError(404, `Cannot find jjwgMarkerAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgMarkerAudit', objJjwgMarkerAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgMarkersAuditCtrl.findOneByBeforeValueString = async (req, res) => {
    try {
        const { beforeValueString } = req.params;
        const objJjwgMarkerAudit = await jjwgMarkerAuditService.findOneByBeforeValueString(beforeValueString, req.query);
        if (!objJjwgMarkerAudit) {
            util.setError(404, `Cannot find jjwgMarkerAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgMarkerAudit', objJjwgMarkerAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgMarkersAuditCtrl.findOneByAfterValueString = async (req, res) => {
    try {
        const { afterValueString } = req.params;
        const objJjwgMarkerAudit = await jjwgMarkerAuditService.findOneByAfterValueString(afterValueString, req.query);
        if (!objJjwgMarkerAudit) {
            util.setError(404, `Cannot find jjwgMarkerAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgMarkerAudit', objJjwgMarkerAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgMarkersAuditCtrl.findOneByBeforeValueText = async (req, res) => {
    try {
        const { beforeValueText } = req.params;
        const objJjwgMarkerAudit = await jjwgMarkerAuditService.findOneByBeforeValueText(beforeValueText, req.query);
        if (!objJjwgMarkerAudit) {
            util.setError(404, `Cannot find jjwgMarkerAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgMarkerAudit', objJjwgMarkerAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgMarkersAuditCtrl.findOneByAfterValueText = async (req, res) => {
    try {
        const { afterValueText } = req.params;
        const objJjwgMarkerAudit = await jjwgMarkerAuditService.findOneByAfterValueText(afterValueText, req.query);
        if (!objJjwgMarkerAudit) {
            util.setError(404, `Cannot find jjwgMarkerAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgMarkerAudit', objJjwgMarkerAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgMarkersAuditCtrl.findOneByDateCreated = async (req, res) => {
    try {
        const { dateCreated } = req.params;
        const objJjwgMarkerAudit = await jjwgMarkerAuditService.findOneByDateCreated(dateCreated, req.query);
        if (!objJjwgMarkerAudit) {
            util.setError(404, `Cannot find jjwgMarkerAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgMarkerAudit', objJjwgMarkerAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgMarkersAuditCtrl.findOneByParentId = async (req, res) => {
    try {
        const { parentId } = req.params;
        const objJjwgMarkerAudit = await jjwgMarkerAuditService.findOneByParentId(parentId, req.query);
        if (!objJjwgMarkerAudit) {
            util.setError(404, `Cannot find jjwgMarkerAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgMarkerAudit', objJjwgMarkerAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



jjwgMarkersAuditCtrl.updateJjwgMarkerAuditById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgMarkerAudit = await jjwgMarkerAuditService.updateJjwgMarkerAuditById(id, req.body);
            if (!objJjwgMarkerAudit) {
                util.setError(404, `Cannot find jjwgMarkerAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgMarkerAudit updated', objJjwgMarkerAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgMarkersAuditCtrl.updateJjwgMarkerAuditByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgMarkerAudit = await jjwgMarkerAuditService.updateJjwgMarkerAuditByCreatedBy(createdBy, req.body);
            if (!objJjwgMarkerAudit) {
                util.setError(404, `Cannot find jjwgMarkerAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgMarkerAudit updated', objJjwgMarkerAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgMarkersAuditCtrl.updateJjwgMarkerAuditByFieldName = async (req, res) => {
     const { fieldName } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgMarkerAudit = await jjwgMarkerAuditService.updateJjwgMarkerAuditByFieldName(fieldName, req.body);
            if (!objJjwgMarkerAudit) {
                util.setError(404, `Cannot find jjwgMarkerAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgMarkerAudit updated', objJjwgMarkerAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgMarkersAuditCtrl.updateJjwgMarkerAuditByDataType = async (req, res) => {
     const { dataType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgMarkerAudit = await jjwgMarkerAuditService.updateJjwgMarkerAuditByDataType(dataType, req.body);
            if (!objJjwgMarkerAudit) {
                util.setError(404, `Cannot find jjwgMarkerAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgMarkerAudit updated', objJjwgMarkerAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgMarkersAuditCtrl.updateJjwgMarkerAuditByBeforeValueString = async (req, res) => {
     const { beforeValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgMarkerAudit = await jjwgMarkerAuditService.updateJjwgMarkerAuditByBeforeValueString(beforeValueString, req.body);
            if (!objJjwgMarkerAudit) {
                util.setError(404, `Cannot find jjwgMarkerAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgMarkerAudit updated', objJjwgMarkerAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgMarkersAuditCtrl.updateJjwgMarkerAuditByAfterValueString = async (req, res) => {
     const { afterValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgMarkerAudit = await jjwgMarkerAuditService.updateJjwgMarkerAuditByAfterValueString(afterValueString, req.body);
            if (!objJjwgMarkerAudit) {
                util.setError(404, `Cannot find jjwgMarkerAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgMarkerAudit updated', objJjwgMarkerAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgMarkersAuditCtrl.updateJjwgMarkerAuditByBeforeValueText = async (req, res) => {
     const { beforeValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgMarkerAudit = await jjwgMarkerAuditService.updateJjwgMarkerAuditByBeforeValueText(beforeValueText, req.body);
            if (!objJjwgMarkerAudit) {
                util.setError(404, `Cannot find jjwgMarkerAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgMarkerAudit updated', objJjwgMarkerAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgMarkersAuditCtrl.updateJjwgMarkerAuditByAfterValueText = async (req, res) => {
     const { afterValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgMarkerAudit = await jjwgMarkerAuditService.updateJjwgMarkerAuditByAfterValueText(afterValueText, req.body);
            if (!objJjwgMarkerAudit) {
                util.setError(404, `Cannot find jjwgMarkerAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgMarkerAudit updated', objJjwgMarkerAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgMarkersAuditCtrl.updateJjwgMarkerAuditByDateCreated = async (req, res) => {
     const { dateCreated } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgMarkerAudit = await jjwgMarkerAuditService.updateJjwgMarkerAuditByDateCreated(dateCreated, req.body);
            if (!objJjwgMarkerAudit) {
                util.setError(404, `Cannot find jjwgMarkerAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgMarkerAudit updated', objJjwgMarkerAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgMarkersAuditCtrl.updateJjwgMarkerAuditByParentId = async (req, res) => {
     const { parentId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgMarkerAudit = await jjwgMarkerAuditService.updateJjwgMarkerAuditByParentId(parentId, req.body);
            if (!objJjwgMarkerAudit) {
                util.setError(404, `Cannot find jjwgMarkerAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgMarkerAudit updated', objJjwgMarkerAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = jjwgMarkersAuditCtrl;
//</es-section>
