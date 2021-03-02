/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:01:36 GMT-0400 (Bolivia Time)
 * Time: 14:1:36
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:01:36 GMT-0400 (Bolivia Time)
 * Last time updated: 14:1:36
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const surveyAuditService = require('../services/surveys_audit.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const surveysAuditCtrl = {};
surveysAuditCtrl.service = surveyAuditService;


surveysAuditCtrl.getAllSurveysAudit = async (req, res) => {
    try {
        const objSurveysAudit = await surveyAuditService.getAllSurveysAudit(req.query);
        if (objSurveysAudit.length > 0) {
            util.setSuccess(200, 'SurveysAudit retrieved', objSurveysAudit);
        } else {
            util.setSuccess(200, 'No surveyAudit found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveysAuditCtrl.getASurveyAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objSurveyAudit = await surveyAuditService.getASurveyAudit(id, req.query);
        if (!objSurveyAudit) {
            util.setError(404, `Cannot find surveyAudit with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found surveyAudit', objSurveyAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveysAuditCtrl.addSurveyAudit = async (req, res) => {
    try {
        const objSurveyAudit = await surveyAuditService.addSurveyAudit(req.body);
        util.setSuccess(201, 'SurveyAudit Added!', objSurveyAudit);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveysAuditCtrl.updateSurveyAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objSurveyAudit = await surveyAuditService.updateSurveyAudit(id, req.body);
        if (!objSurveyAudit) {
            util.setError(404, `Cannot find surveyAudit with the id: ${id}`);
        } else {
            util.setSuccess(200, 'SurveyAudit updated', objSurveyAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

surveysAuditCtrl.deleteSurveyAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objSurveyAudit = await surveyAuditService.deleteSurveyAudit(id);
        if (objSurveyAudit) {
            util.setSuccess(200, 'SurveyAudit deleted', objSurveyAudit);
        } else {
            util.setError(404, `SurveyAudit with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



surveysAuditCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objSurveyAudit = await surveyAuditService.findOneById(id, req.query);
        if (!objSurveyAudit) {
            util.setError(404, `Cannot find surveyAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyAudit', objSurveyAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveysAuditCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objSurveyAudit = await surveyAuditService.findOneByCreatedBy(createdBy, req.query);
        if (!objSurveyAudit) {
            util.setError(404, `Cannot find surveyAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyAudit', objSurveyAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveysAuditCtrl.findOneByFieldName = async (req, res) => {
    try {
        const { fieldName } = req.params;
        const objSurveyAudit = await surveyAuditService.findOneByFieldName(fieldName, req.query);
        if (!objSurveyAudit) {
            util.setError(404, `Cannot find surveyAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyAudit', objSurveyAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveysAuditCtrl.findOneByDataType = async (req, res) => {
    try {
        const { dataType } = req.params;
        const objSurveyAudit = await surveyAuditService.findOneByDataType(dataType, req.query);
        if (!objSurveyAudit) {
            util.setError(404, `Cannot find surveyAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyAudit', objSurveyAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveysAuditCtrl.findOneByBeforeValueString = async (req, res) => {
    try {
        const { beforeValueString } = req.params;
        const objSurveyAudit = await surveyAuditService.findOneByBeforeValueString(beforeValueString, req.query);
        if (!objSurveyAudit) {
            util.setError(404, `Cannot find surveyAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyAudit', objSurveyAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveysAuditCtrl.findOneByAfterValueString = async (req, res) => {
    try {
        const { afterValueString } = req.params;
        const objSurveyAudit = await surveyAuditService.findOneByAfterValueString(afterValueString, req.query);
        if (!objSurveyAudit) {
            util.setError(404, `Cannot find surveyAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyAudit', objSurveyAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveysAuditCtrl.findOneByBeforeValueText = async (req, res) => {
    try {
        const { beforeValueText } = req.params;
        const objSurveyAudit = await surveyAuditService.findOneByBeforeValueText(beforeValueText, req.query);
        if (!objSurveyAudit) {
            util.setError(404, `Cannot find surveyAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyAudit', objSurveyAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveysAuditCtrl.findOneByAfterValueText = async (req, res) => {
    try {
        const { afterValueText } = req.params;
        const objSurveyAudit = await surveyAuditService.findOneByAfterValueText(afterValueText, req.query);
        if (!objSurveyAudit) {
            util.setError(404, `Cannot find surveyAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyAudit', objSurveyAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveysAuditCtrl.findOneByDateCreated = async (req, res) => {
    try {
        const { dateCreated } = req.params;
        const objSurveyAudit = await surveyAuditService.findOneByDateCreated(dateCreated, req.query);
        if (!objSurveyAudit) {
            util.setError(404, `Cannot find surveyAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyAudit', objSurveyAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveysAuditCtrl.findOneByParentId = async (req, res) => {
    try {
        const { parentId } = req.params;
        const objSurveyAudit = await surveyAuditService.findOneByParentId(parentId, req.query);
        if (!objSurveyAudit) {
            util.setError(404, `Cannot find surveyAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyAudit', objSurveyAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



surveysAuditCtrl.updateSurveyAuditById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyAudit = await surveyAuditService.updateSurveyAuditById(id, req.body);
            if (!objSurveyAudit) {
                util.setError(404, `Cannot find surveyAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SurveyAudit updated', objSurveyAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveysAuditCtrl.updateSurveyAuditByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyAudit = await surveyAuditService.updateSurveyAuditByCreatedBy(createdBy, req.body);
            if (!objSurveyAudit) {
                util.setError(404, `Cannot find surveyAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SurveyAudit updated', objSurveyAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveysAuditCtrl.updateSurveyAuditByFieldName = async (req, res) => {
     const { fieldName } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyAudit = await surveyAuditService.updateSurveyAuditByFieldName(fieldName, req.body);
            if (!objSurveyAudit) {
                util.setError(404, `Cannot find surveyAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SurveyAudit updated', objSurveyAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveysAuditCtrl.updateSurveyAuditByDataType = async (req, res) => {
     const { dataType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyAudit = await surveyAuditService.updateSurveyAuditByDataType(dataType, req.body);
            if (!objSurveyAudit) {
                util.setError(404, `Cannot find surveyAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SurveyAudit updated', objSurveyAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveysAuditCtrl.updateSurveyAuditByBeforeValueString = async (req, res) => {
     const { beforeValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyAudit = await surveyAuditService.updateSurveyAuditByBeforeValueString(beforeValueString, req.body);
            if (!objSurveyAudit) {
                util.setError(404, `Cannot find surveyAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SurveyAudit updated', objSurveyAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveysAuditCtrl.updateSurveyAuditByAfterValueString = async (req, res) => {
     const { afterValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyAudit = await surveyAuditService.updateSurveyAuditByAfterValueString(afterValueString, req.body);
            if (!objSurveyAudit) {
                util.setError(404, `Cannot find surveyAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SurveyAudit updated', objSurveyAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveysAuditCtrl.updateSurveyAuditByBeforeValueText = async (req, res) => {
     const { beforeValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyAudit = await surveyAuditService.updateSurveyAuditByBeforeValueText(beforeValueText, req.body);
            if (!objSurveyAudit) {
                util.setError(404, `Cannot find surveyAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SurveyAudit updated', objSurveyAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveysAuditCtrl.updateSurveyAuditByAfterValueText = async (req, res) => {
     const { afterValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyAudit = await surveyAuditService.updateSurveyAuditByAfterValueText(afterValueText, req.body);
            if (!objSurveyAudit) {
                util.setError(404, `Cannot find surveyAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SurveyAudit updated', objSurveyAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveysAuditCtrl.updateSurveyAuditByDateCreated = async (req, res) => {
     const { dateCreated } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyAudit = await surveyAuditService.updateSurveyAuditByDateCreated(dateCreated, req.body);
            if (!objSurveyAudit) {
                util.setError(404, `Cannot find surveyAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SurveyAudit updated', objSurveyAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveysAuditCtrl.updateSurveyAuditByParentId = async (req, res) => {
     const { parentId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyAudit = await surveyAuditService.updateSurveyAuditByParentId(parentId, req.body);
            if (!objSurveyAudit) {
                util.setError(404, `Cannot find surveyAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SurveyAudit updated', objSurveyAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = surveysAuditCtrl;
//</es-section>
