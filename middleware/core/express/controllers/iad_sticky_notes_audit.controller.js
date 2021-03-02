/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:57 GMT-0400 (Bolivia Time)
 * Time: 14:0:57
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:57 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:57
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const iadStickyNoteAuditService = require('../services/iad_sticky_notes_audit.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const iadStickyNotesAuditCtrl = {};
iadStickyNotesAuditCtrl.service = iadStickyNoteAuditService;


iadStickyNotesAuditCtrl.getAllIadStickyNotesAudit = async (req, res) => {
    try {
        const objIadStickyNotesAudit = await iadStickyNoteAuditService.getAllIadStickyNotesAudit(req.query);
        if (objIadStickyNotesAudit.length > 0) {
            util.setSuccess(200, 'IadStickyNotesAudit retrieved', objIadStickyNotesAudit);
        } else {
            util.setSuccess(200, 'No iadStickyNoteAudit found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

iadStickyNotesAuditCtrl.getAIadStickyNoteAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objIadStickyNoteAudit = await iadStickyNoteAuditService.getAIadStickyNoteAudit(id, req.query);
        if (!objIadStickyNoteAudit) {
            util.setError(404, `Cannot find iadStickyNoteAudit with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found iadStickyNoteAudit', objIadStickyNoteAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

iadStickyNotesAuditCtrl.addIadStickyNoteAudit = async (req, res) => {
    try {
        const objIadStickyNoteAudit = await iadStickyNoteAuditService.addIadStickyNoteAudit(req.body);
        util.setSuccess(201, 'IadStickyNoteAudit Added!', objIadStickyNoteAudit);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

iadStickyNotesAuditCtrl.updateIadStickyNoteAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objIadStickyNoteAudit = await iadStickyNoteAuditService.updateIadStickyNoteAudit(id, req.body);
        if (!objIadStickyNoteAudit) {
            util.setError(404, `Cannot find iadStickyNoteAudit with the id: ${id}`);
        } else {
            util.setSuccess(200, 'IadStickyNoteAudit updated', objIadStickyNoteAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

iadStickyNotesAuditCtrl.deleteIadStickyNoteAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objIadStickyNoteAudit = await iadStickyNoteAuditService.deleteIadStickyNoteAudit(id);
        if (objIadStickyNoteAudit) {
            util.setSuccess(200, 'IadStickyNoteAudit deleted', objIadStickyNoteAudit);
        } else {
            util.setError(404, `IadStickyNoteAudit with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



iadStickyNotesAuditCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objIadStickyNoteAudit = await iadStickyNoteAuditService.findOneById(id, req.query);
        if (!objIadStickyNoteAudit) {
            util.setError(404, `Cannot find iadStickyNoteAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found iadStickyNoteAudit', objIadStickyNoteAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

iadStickyNotesAuditCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objIadStickyNoteAudit = await iadStickyNoteAuditService.findOneByCreatedBy(createdBy, req.query);
        if (!objIadStickyNoteAudit) {
            util.setError(404, `Cannot find iadStickyNoteAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found iadStickyNoteAudit', objIadStickyNoteAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

iadStickyNotesAuditCtrl.findOneByFieldName = async (req, res) => {
    try {
        const { fieldName } = req.params;
        const objIadStickyNoteAudit = await iadStickyNoteAuditService.findOneByFieldName(fieldName, req.query);
        if (!objIadStickyNoteAudit) {
            util.setError(404, `Cannot find iadStickyNoteAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found iadStickyNoteAudit', objIadStickyNoteAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

iadStickyNotesAuditCtrl.findOneByDataType = async (req, res) => {
    try {
        const { dataType } = req.params;
        const objIadStickyNoteAudit = await iadStickyNoteAuditService.findOneByDataType(dataType, req.query);
        if (!objIadStickyNoteAudit) {
            util.setError(404, `Cannot find iadStickyNoteAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found iadStickyNoteAudit', objIadStickyNoteAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

iadStickyNotesAuditCtrl.findOneByBeforeValueString = async (req, res) => {
    try {
        const { beforeValueString } = req.params;
        const objIadStickyNoteAudit = await iadStickyNoteAuditService.findOneByBeforeValueString(beforeValueString, req.query);
        if (!objIadStickyNoteAudit) {
            util.setError(404, `Cannot find iadStickyNoteAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found iadStickyNoteAudit', objIadStickyNoteAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

iadStickyNotesAuditCtrl.findOneByAfterValueString = async (req, res) => {
    try {
        const { afterValueString } = req.params;
        const objIadStickyNoteAudit = await iadStickyNoteAuditService.findOneByAfterValueString(afterValueString, req.query);
        if (!objIadStickyNoteAudit) {
            util.setError(404, `Cannot find iadStickyNoteAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found iadStickyNoteAudit', objIadStickyNoteAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

iadStickyNotesAuditCtrl.findOneByBeforeValueText = async (req, res) => {
    try {
        const { beforeValueText } = req.params;
        const objIadStickyNoteAudit = await iadStickyNoteAuditService.findOneByBeforeValueText(beforeValueText, req.query);
        if (!objIadStickyNoteAudit) {
            util.setError(404, `Cannot find iadStickyNoteAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found iadStickyNoteAudit', objIadStickyNoteAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

iadStickyNotesAuditCtrl.findOneByAfterValueText = async (req, res) => {
    try {
        const { afterValueText } = req.params;
        const objIadStickyNoteAudit = await iadStickyNoteAuditService.findOneByAfterValueText(afterValueText, req.query);
        if (!objIadStickyNoteAudit) {
            util.setError(404, `Cannot find iadStickyNoteAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found iadStickyNoteAudit', objIadStickyNoteAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

iadStickyNotesAuditCtrl.findOneByDateCreated = async (req, res) => {
    try {
        const { dateCreated } = req.params;
        const objIadStickyNoteAudit = await iadStickyNoteAuditService.findOneByDateCreated(dateCreated, req.query);
        if (!objIadStickyNoteAudit) {
            util.setError(404, `Cannot find iadStickyNoteAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found iadStickyNoteAudit', objIadStickyNoteAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

iadStickyNotesAuditCtrl.findOneByParentId = async (req, res) => {
    try {
        const { parentId } = req.params;
        const objIadStickyNoteAudit = await iadStickyNoteAuditService.findOneByParentId(parentId, req.query);
        if (!objIadStickyNoteAudit) {
            util.setError(404, `Cannot find iadStickyNoteAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found iadStickyNoteAudit', objIadStickyNoteAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



iadStickyNotesAuditCtrl.updateIadStickyNoteAuditById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objIadStickyNoteAudit = await iadStickyNoteAuditService.updateIadStickyNoteAuditById(id, req.body);
            if (!objIadStickyNoteAudit) {
                util.setError(404, `Cannot find iadStickyNoteAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'IadStickyNoteAudit updated', objIadStickyNoteAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

iadStickyNotesAuditCtrl.updateIadStickyNoteAuditByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objIadStickyNoteAudit = await iadStickyNoteAuditService.updateIadStickyNoteAuditByCreatedBy(createdBy, req.body);
            if (!objIadStickyNoteAudit) {
                util.setError(404, `Cannot find iadStickyNoteAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'IadStickyNoteAudit updated', objIadStickyNoteAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

iadStickyNotesAuditCtrl.updateIadStickyNoteAuditByFieldName = async (req, res) => {
     const { fieldName } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objIadStickyNoteAudit = await iadStickyNoteAuditService.updateIadStickyNoteAuditByFieldName(fieldName, req.body);
            if (!objIadStickyNoteAudit) {
                util.setError(404, `Cannot find iadStickyNoteAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'IadStickyNoteAudit updated', objIadStickyNoteAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

iadStickyNotesAuditCtrl.updateIadStickyNoteAuditByDataType = async (req, res) => {
     const { dataType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objIadStickyNoteAudit = await iadStickyNoteAuditService.updateIadStickyNoteAuditByDataType(dataType, req.body);
            if (!objIadStickyNoteAudit) {
                util.setError(404, `Cannot find iadStickyNoteAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'IadStickyNoteAudit updated', objIadStickyNoteAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

iadStickyNotesAuditCtrl.updateIadStickyNoteAuditByBeforeValueString = async (req, res) => {
     const { beforeValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objIadStickyNoteAudit = await iadStickyNoteAuditService.updateIadStickyNoteAuditByBeforeValueString(beforeValueString, req.body);
            if (!objIadStickyNoteAudit) {
                util.setError(404, `Cannot find iadStickyNoteAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'IadStickyNoteAudit updated', objIadStickyNoteAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

iadStickyNotesAuditCtrl.updateIadStickyNoteAuditByAfterValueString = async (req, res) => {
     const { afterValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objIadStickyNoteAudit = await iadStickyNoteAuditService.updateIadStickyNoteAuditByAfterValueString(afterValueString, req.body);
            if (!objIadStickyNoteAudit) {
                util.setError(404, `Cannot find iadStickyNoteAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'IadStickyNoteAudit updated', objIadStickyNoteAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

iadStickyNotesAuditCtrl.updateIadStickyNoteAuditByBeforeValueText = async (req, res) => {
     const { beforeValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objIadStickyNoteAudit = await iadStickyNoteAuditService.updateIadStickyNoteAuditByBeforeValueText(beforeValueText, req.body);
            if (!objIadStickyNoteAudit) {
                util.setError(404, `Cannot find iadStickyNoteAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'IadStickyNoteAudit updated', objIadStickyNoteAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

iadStickyNotesAuditCtrl.updateIadStickyNoteAuditByAfterValueText = async (req, res) => {
     const { afterValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objIadStickyNoteAudit = await iadStickyNoteAuditService.updateIadStickyNoteAuditByAfterValueText(afterValueText, req.body);
            if (!objIadStickyNoteAudit) {
                util.setError(404, `Cannot find iadStickyNoteAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'IadStickyNoteAudit updated', objIadStickyNoteAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

iadStickyNotesAuditCtrl.updateIadStickyNoteAuditByDateCreated = async (req, res) => {
     const { dateCreated } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objIadStickyNoteAudit = await iadStickyNoteAuditService.updateIadStickyNoteAuditByDateCreated(dateCreated, req.body);
            if (!objIadStickyNoteAudit) {
                util.setError(404, `Cannot find iadStickyNoteAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'IadStickyNoteAudit updated', objIadStickyNoteAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

iadStickyNotesAuditCtrl.updateIadStickyNoteAuditByParentId = async (req, res) => {
     const { parentId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objIadStickyNoteAudit = await iadStickyNoteAuditService.updateIadStickyNoteAuditByParentId(parentId, req.body);
            if (!objIadStickyNoteAudit) {
                util.setError(404, `Cannot find iadStickyNoteAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'IadStickyNoteAudit updated', objIadStickyNoteAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = iadStickyNotesAuditCtrl;
//</es-section>
