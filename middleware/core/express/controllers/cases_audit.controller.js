/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:42:42 GMT-0400 (Bolivia Time)
 * Time: 4:42:42
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:42:42 GMT-0400 (Bolivia Time)
 * Last time updated: 4:42:42
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const caseAuditService = require('../services/cases_audit.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const casesAuditCtrl = {};
casesAuditCtrl.service = caseAuditService;


casesAuditCtrl.getAllCasesAudit = async (req, res) => {
    try {
        const objCasesAudit = await caseAuditService.getAllCasesAudit(req.query);
        if (objCasesAudit.length > 0) {
            util.setSuccess(200, 'CasesAudit retrieved', objCasesAudit);
        } else {
            util.setSuccess(200, 'No caseAudit found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

casesAuditCtrl.getACaseAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objCaseAudit = await caseAuditService.getACaseAudit(id, req.query);
        if (!objCaseAudit) {
            util.setError(404, `Cannot find caseAudit with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found caseAudit', objCaseAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

casesAuditCtrl.addCaseAudit = async (req, res) => {
    try {
        const objCaseAudit = await caseAuditService.addCaseAudit(req.body);
        util.setSuccess(201, 'CaseAudit Added!', objCaseAudit);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

casesAuditCtrl.updateCaseAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objCaseAudit = await caseAuditService.updateCaseAudit(id, req.body);
        if (!objCaseAudit) {
            util.setError(404, `Cannot find caseAudit with the id: ${id}`);
        } else {
            util.setSuccess(200, 'CaseAudit updated', objCaseAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

casesAuditCtrl.deleteCaseAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objCaseAudit = await caseAuditService.deleteCaseAudit(id);
        if (objCaseAudit) {
            util.setSuccess(200, 'CaseAudit deleted', objCaseAudit);
        } else {
            util.setError(404, `CaseAudit with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



casesAuditCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objCaseAudit = await caseAuditService.findOneById(id, req.query);
        if (!objCaseAudit) {
            util.setError(404, `Cannot find caseAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found caseAudit', objCaseAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

casesAuditCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objCaseAudit = await caseAuditService.findOneByCreatedBy(createdBy, req.query);
        if (!objCaseAudit) {
            util.setError(404, `Cannot find caseAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found caseAudit', objCaseAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

casesAuditCtrl.findOneByFieldName = async (req, res) => {
    try {
        const { fieldName } = req.params;
        const objCaseAudit = await caseAuditService.findOneByFieldName(fieldName, req.query);
        if (!objCaseAudit) {
            util.setError(404, `Cannot find caseAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found caseAudit', objCaseAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

casesAuditCtrl.findOneByDataType = async (req, res) => {
    try {
        const { dataType } = req.params;
        const objCaseAudit = await caseAuditService.findOneByDataType(dataType, req.query);
        if (!objCaseAudit) {
            util.setError(404, `Cannot find caseAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found caseAudit', objCaseAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

casesAuditCtrl.findOneByBeforeValueString = async (req, res) => {
    try {
        const { beforeValueString } = req.params;
        const objCaseAudit = await caseAuditService.findOneByBeforeValueString(beforeValueString, req.query);
        if (!objCaseAudit) {
            util.setError(404, `Cannot find caseAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found caseAudit', objCaseAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

casesAuditCtrl.findOneByAfterValueString = async (req, res) => {
    try {
        const { afterValueString } = req.params;
        const objCaseAudit = await caseAuditService.findOneByAfterValueString(afterValueString, req.query);
        if (!objCaseAudit) {
            util.setError(404, `Cannot find caseAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found caseAudit', objCaseAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

casesAuditCtrl.findOneByBeforeValueText = async (req, res) => {
    try {
        const { beforeValueText } = req.params;
        const objCaseAudit = await caseAuditService.findOneByBeforeValueText(beforeValueText, req.query);
        if (!objCaseAudit) {
            util.setError(404, `Cannot find caseAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found caseAudit', objCaseAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

casesAuditCtrl.findOneByAfterValueText = async (req, res) => {
    try {
        const { afterValueText } = req.params;
        const objCaseAudit = await caseAuditService.findOneByAfterValueText(afterValueText, req.query);
        if (!objCaseAudit) {
            util.setError(404, `Cannot find caseAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found caseAudit', objCaseAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

casesAuditCtrl.findOneByDateCreated = async (req, res) => {
    try {
        const { dateCreated } = req.params;
        const objCaseAudit = await caseAuditService.findOneByDateCreated(dateCreated, req.query);
        if (!objCaseAudit) {
            util.setError(404, `Cannot find caseAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found caseAudit', objCaseAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

casesAuditCtrl.findOneByParentId = async (req, res) => {
    try {
        const { parentId } = req.params;
        const objCaseAudit = await caseAuditService.findOneByParentId(parentId, req.query);
        if (!objCaseAudit) {
            util.setError(404, `Cannot find caseAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found caseAudit', objCaseAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



casesAuditCtrl.updateCaseAuditById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCaseAudit = await caseAuditService.updateCaseAuditById(id, req.body);
            if (!objCaseAudit) {
                util.setError(404, `Cannot find caseAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CaseAudit updated', objCaseAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

casesAuditCtrl.updateCaseAuditByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCaseAudit = await caseAuditService.updateCaseAuditByCreatedBy(createdBy, req.body);
            if (!objCaseAudit) {
                util.setError(404, `Cannot find caseAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CaseAudit updated', objCaseAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

casesAuditCtrl.updateCaseAuditByFieldName = async (req, res) => {
     const { fieldName } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCaseAudit = await caseAuditService.updateCaseAuditByFieldName(fieldName, req.body);
            if (!objCaseAudit) {
                util.setError(404, `Cannot find caseAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CaseAudit updated', objCaseAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

casesAuditCtrl.updateCaseAuditByDataType = async (req, res) => {
     const { dataType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCaseAudit = await caseAuditService.updateCaseAuditByDataType(dataType, req.body);
            if (!objCaseAudit) {
                util.setError(404, `Cannot find caseAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CaseAudit updated', objCaseAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

casesAuditCtrl.updateCaseAuditByBeforeValueString = async (req, res) => {
     const { beforeValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCaseAudit = await caseAuditService.updateCaseAuditByBeforeValueString(beforeValueString, req.body);
            if (!objCaseAudit) {
                util.setError(404, `Cannot find caseAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CaseAudit updated', objCaseAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

casesAuditCtrl.updateCaseAuditByAfterValueString = async (req, res) => {
     const { afterValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCaseAudit = await caseAuditService.updateCaseAuditByAfterValueString(afterValueString, req.body);
            if (!objCaseAudit) {
                util.setError(404, `Cannot find caseAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CaseAudit updated', objCaseAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

casesAuditCtrl.updateCaseAuditByBeforeValueText = async (req, res) => {
     const { beforeValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCaseAudit = await caseAuditService.updateCaseAuditByBeforeValueText(beforeValueText, req.body);
            if (!objCaseAudit) {
                util.setError(404, `Cannot find caseAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CaseAudit updated', objCaseAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

casesAuditCtrl.updateCaseAuditByAfterValueText = async (req, res) => {
     const { afterValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCaseAudit = await caseAuditService.updateCaseAuditByAfterValueText(afterValueText, req.body);
            if (!objCaseAudit) {
                util.setError(404, `Cannot find caseAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CaseAudit updated', objCaseAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

casesAuditCtrl.updateCaseAuditByDateCreated = async (req, res) => {
     const { dateCreated } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCaseAudit = await caseAuditService.updateCaseAuditByDateCreated(dateCreated, req.body);
            if (!objCaseAudit) {
                util.setError(404, `Cannot find caseAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CaseAudit updated', objCaseAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

casesAuditCtrl.updateCaseAuditByParentId = async (req, res) => {
     const { parentId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCaseAudit = await caseAuditService.updateCaseAuditByParentId(parentId, req.body);
            if (!objCaseAudit) {
                util.setError(404, `Cannot find caseAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CaseAudit updated', objCaseAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = casesAuditCtrl;
//</es-section>
