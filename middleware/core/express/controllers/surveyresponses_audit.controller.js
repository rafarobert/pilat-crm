/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:37:07 GMT-0400 (Bolivia Time)
 * Time: 15:37:7
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:37:07 GMT-0400 (Bolivia Time)
 * Last time updated: 15:37:7
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const surveyresponseAuditService = require('../services/surveyresponses_audit.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const surveyresponsesAuditCtrl = {};
surveyresponsesAuditCtrl.service = surveyresponseAuditService;


surveyresponsesAuditCtrl.getAllSurveyresponsesAudit = async (req, res) => {
    try {
        const objSurveyresponsesAudit = await surveyresponseAuditService.getAllSurveyresponsesAudit(req.query);
        if (objSurveyresponsesAudit.length > 0) {
            util.setSuccess(200, 'SurveyresponsesAudit retrieved', objSurveyresponsesAudit);
        } else {
            util.setSuccess(200, 'No surveyresponseAudit found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyresponsesAuditCtrl.getASurveyresponseAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objSurveyresponseAudit = await surveyresponseAuditService.getASurveyresponseAudit(id, req.query);
        if (!objSurveyresponseAudit) {
            util.setError(404, `Cannot find surveyresponseAudit with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found surveyresponseAudit', objSurveyresponseAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyresponsesAuditCtrl.addSurveyresponseAudit = async (req, res) => {
    try {
        const objSurveyresponseAudit = await surveyresponseAuditService.addSurveyresponseAudit(req.body);
        util.setSuccess(201, 'SurveyresponseAudit Added!', objSurveyresponseAudit);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyresponsesAuditCtrl.updateSurveyresponseAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objSurveyresponseAudit = await surveyresponseAuditService.updateSurveyresponseAudit(id, req.body);
        if (!objSurveyresponseAudit) {
            util.setError(404, `Cannot find surveyresponseAudit with the id: ${id}`);
        } else {
            util.setSuccess(200, 'SurveyresponseAudit updated', objSurveyresponseAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

surveyresponsesAuditCtrl.deleteSurveyresponseAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objSurveyresponseAudit = await surveyresponseAuditService.deleteSurveyresponseAudit(id);
        if (objSurveyresponseAudit) {
            util.setSuccess(200, 'SurveyresponseAudit deleted', objSurveyresponseAudit);
        } else {
            util.setError(404, `SurveyresponseAudit with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



surveyresponsesAuditCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objSurveyresponseAudit = await surveyresponseAuditService.findOneById(id, req.query);
        if (!objSurveyresponseAudit) {
            util.setError(404, `Cannot find surveyresponseAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyresponseAudit', objSurveyresponseAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyresponsesAuditCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objSurveyresponseAudit = await surveyresponseAuditService.findOneByCreatedBy(createdBy, req.query);
        if (!objSurveyresponseAudit) {
            util.setError(404, `Cannot find surveyresponseAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyresponseAudit', objSurveyresponseAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyresponsesAuditCtrl.findOneByFieldName = async (req, res) => {
    try {
        const { fieldName } = req.params;
        const objSurveyresponseAudit = await surveyresponseAuditService.findOneByFieldName(fieldName, req.query);
        if (!objSurveyresponseAudit) {
            util.setError(404, `Cannot find surveyresponseAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyresponseAudit', objSurveyresponseAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyresponsesAuditCtrl.findOneByDataType = async (req, res) => {
    try {
        const { dataType } = req.params;
        const objSurveyresponseAudit = await surveyresponseAuditService.findOneByDataType(dataType, req.query);
        if (!objSurveyresponseAudit) {
            util.setError(404, `Cannot find surveyresponseAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyresponseAudit', objSurveyresponseAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyresponsesAuditCtrl.findOneByBeforeValueString = async (req, res) => {
    try {
        const { beforeValueString } = req.params;
        const objSurveyresponseAudit = await surveyresponseAuditService.findOneByBeforeValueString(beforeValueString, req.query);
        if (!objSurveyresponseAudit) {
            util.setError(404, `Cannot find surveyresponseAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyresponseAudit', objSurveyresponseAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyresponsesAuditCtrl.findOneByAfterValueString = async (req, res) => {
    try {
        const { afterValueString } = req.params;
        const objSurveyresponseAudit = await surveyresponseAuditService.findOneByAfterValueString(afterValueString, req.query);
        if (!objSurveyresponseAudit) {
            util.setError(404, `Cannot find surveyresponseAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyresponseAudit', objSurveyresponseAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyresponsesAuditCtrl.findOneByBeforeValueText = async (req, res) => {
    try {
        const { beforeValueText } = req.params;
        const objSurveyresponseAudit = await surveyresponseAuditService.findOneByBeforeValueText(beforeValueText, req.query);
        if (!objSurveyresponseAudit) {
            util.setError(404, `Cannot find surveyresponseAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyresponseAudit', objSurveyresponseAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyresponsesAuditCtrl.findOneByAfterValueText = async (req, res) => {
    try {
        const { afterValueText } = req.params;
        const objSurveyresponseAudit = await surveyresponseAuditService.findOneByAfterValueText(afterValueText, req.query);
        if (!objSurveyresponseAudit) {
            util.setError(404, `Cannot find surveyresponseAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyresponseAudit', objSurveyresponseAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyresponsesAuditCtrl.findOneByDateCreated = async (req, res) => {
    try {
        const { dateCreated } = req.params;
        const objSurveyresponseAudit = await surveyresponseAuditService.findOneByDateCreated(dateCreated, req.query);
        if (!objSurveyresponseAudit) {
            util.setError(404, `Cannot find surveyresponseAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyresponseAudit', objSurveyresponseAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyresponsesAuditCtrl.findOneByParentId = async (req, res) => {
    try {
        const { parentId } = req.params;
        const objSurveyresponseAudit = await surveyresponseAuditService.findOneByParentId(parentId, req.query);
        if (!objSurveyresponseAudit) {
            util.setError(404, `Cannot find surveyresponseAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyresponseAudit', objSurveyresponseAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



surveyresponsesAuditCtrl.updateSurveyresponseAuditById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyresponseAudit = await surveyresponseAuditService.updateSurveyresponseAuditById(id, req.body);
            if (!objSurveyresponseAudit) {
                util.setError(404, `Cannot find surveyresponseAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SurveyresponseAudit updated', objSurveyresponseAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyresponsesAuditCtrl.updateSurveyresponseAuditByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyresponseAudit = await surveyresponseAuditService.updateSurveyresponseAuditByCreatedBy(createdBy, req.body);
            if (!objSurveyresponseAudit) {
                util.setError(404, `Cannot find surveyresponseAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SurveyresponseAudit updated', objSurveyresponseAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyresponsesAuditCtrl.updateSurveyresponseAuditByFieldName = async (req, res) => {
     const { fieldName } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyresponseAudit = await surveyresponseAuditService.updateSurveyresponseAuditByFieldName(fieldName, req.body);
            if (!objSurveyresponseAudit) {
                util.setError(404, `Cannot find surveyresponseAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SurveyresponseAudit updated', objSurveyresponseAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyresponsesAuditCtrl.updateSurveyresponseAuditByDataType = async (req, res) => {
     const { dataType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyresponseAudit = await surveyresponseAuditService.updateSurveyresponseAuditByDataType(dataType, req.body);
            if (!objSurveyresponseAudit) {
                util.setError(404, `Cannot find surveyresponseAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SurveyresponseAudit updated', objSurveyresponseAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyresponsesAuditCtrl.updateSurveyresponseAuditByBeforeValueString = async (req, res) => {
     const { beforeValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyresponseAudit = await surveyresponseAuditService.updateSurveyresponseAuditByBeforeValueString(beforeValueString, req.body);
            if (!objSurveyresponseAudit) {
                util.setError(404, `Cannot find surveyresponseAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SurveyresponseAudit updated', objSurveyresponseAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyresponsesAuditCtrl.updateSurveyresponseAuditByAfterValueString = async (req, res) => {
     const { afterValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyresponseAudit = await surveyresponseAuditService.updateSurveyresponseAuditByAfterValueString(afterValueString, req.body);
            if (!objSurveyresponseAudit) {
                util.setError(404, `Cannot find surveyresponseAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SurveyresponseAudit updated', objSurveyresponseAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyresponsesAuditCtrl.updateSurveyresponseAuditByBeforeValueText = async (req, res) => {
     const { beforeValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyresponseAudit = await surveyresponseAuditService.updateSurveyresponseAuditByBeforeValueText(beforeValueText, req.body);
            if (!objSurveyresponseAudit) {
                util.setError(404, `Cannot find surveyresponseAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SurveyresponseAudit updated', objSurveyresponseAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyresponsesAuditCtrl.updateSurveyresponseAuditByAfterValueText = async (req, res) => {
     const { afterValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyresponseAudit = await surveyresponseAuditService.updateSurveyresponseAuditByAfterValueText(afterValueText, req.body);
            if (!objSurveyresponseAudit) {
                util.setError(404, `Cannot find surveyresponseAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SurveyresponseAudit updated', objSurveyresponseAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyresponsesAuditCtrl.updateSurveyresponseAuditByDateCreated = async (req, res) => {
     const { dateCreated } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyresponseAudit = await surveyresponseAuditService.updateSurveyresponseAuditByDateCreated(dateCreated, req.body);
            if (!objSurveyresponseAudit) {
                util.setError(404, `Cannot find surveyresponseAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SurveyresponseAudit updated', objSurveyresponseAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyresponsesAuditCtrl.updateSurveyresponseAuditByParentId = async (req, res) => {
     const { parentId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyresponseAudit = await surveyresponseAuditService.updateSurveyresponseAuditByParentId(parentId, req.body);
            if (!objSurveyresponseAudit) {
                util.setError(404, `Cannot find surveyresponseAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SurveyresponseAudit updated', objSurveyresponseAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = surveyresponsesAuditCtrl;
//</es-section>
