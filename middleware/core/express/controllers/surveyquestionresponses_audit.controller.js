/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:37:05 GMT-0400 (Bolivia Time)
 * Time: 15:37:5
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:37:05 GMT-0400 (Bolivia Time)
 * Last time updated: 15:37:5
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const surveyquestionresponseAuditService = require('../services/surveyquestionresponses_audit.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const surveyquestionresponsesAuditCtrl = {};
surveyquestionresponsesAuditCtrl.service = surveyquestionresponseAuditService;


surveyquestionresponsesAuditCtrl.getAllSurveyquestionresponsesAudit = async (req, res) => {
    try {
        const objSurveyquestionresponsesAudit = await surveyquestionresponseAuditService.getAllSurveyquestionresponsesAudit(req.query);
        if (objSurveyquestionresponsesAudit.length > 0) {
            util.setSuccess(200, 'SurveyquestionresponsesAudit retrieved', objSurveyquestionresponsesAudit);
        } else {
            util.setSuccess(200, 'No surveyquestionresponseAudit found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionresponsesAuditCtrl.getASurveyquestionresponseAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objSurveyquestionresponseAudit = await surveyquestionresponseAuditService.getASurveyquestionresponseAudit(id, req.query);
        if (!objSurveyquestionresponseAudit) {
            util.setError(404, `Cannot find surveyquestionresponseAudit with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found surveyquestionresponseAudit', objSurveyquestionresponseAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionresponsesAuditCtrl.addSurveyquestionresponseAudit = async (req, res) => {
    try {
        const objSurveyquestionresponseAudit = await surveyquestionresponseAuditService.addSurveyquestionresponseAudit(req.body);
        util.setSuccess(201, 'SurveyquestionresponseAudit Added!', objSurveyquestionresponseAudit);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionresponsesAuditCtrl.updateSurveyquestionresponseAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objSurveyquestionresponseAudit = await surveyquestionresponseAuditService.updateSurveyquestionresponseAudit(id, req.body);
        if (!objSurveyquestionresponseAudit) {
            util.setError(404, `Cannot find surveyquestionresponseAudit with the id: ${id}`);
        } else {
            util.setSuccess(200, 'SurveyquestionresponseAudit updated', objSurveyquestionresponseAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

surveyquestionresponsesAuditCtrl.deleteSurveyquestionresponseAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objSurveyquestionresponseAudit = await surveyquestionresponseAuditService.deleteSurveyquestionresponseAudit(id);
        if (objSurveyquestionresponseAudit) {
            util.setSuccess(200, 'SurveyquestionresponseAudit deleted', objSurveyquestionresponseAudit);
        } else {
            util.setError(404, `SurveyquestionresponseAudit with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



surveyquestionresponsesAuditCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objSurveyquestionresponseAudit = await surveyquestionresponseAuditService.findOneById(id, req.query);
        if (!objSurveyquestionresponseAudit) {
            util.setError(404, `Cannot find surveyquestionresponseAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyquestionresponseAudit', objSurveyquestionresponseAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionresponsesAuditCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objSurveyquestionresponseAudit = await surveyquestionresponseAuditService.findOneByCreatedBy(createdBy, req.query);
        if (!objSurveyquestionresponseAudit) {
            util.setError(404, `Cannot find surveyquestionresponseAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyquestionresponseAudit', objSurveyquestionresponseAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionresponsesAuditCtrl.findOneByFieldName = async (req, res) => {
    try {
        const { fieldName } = req.params;
        const objSurveyquestionresponseAudit = await surveyquestionresponseAuditService.findOneByFieldName(fieldName, req.query);
        if (!objSurveyquestionresponseAudit) {
            util.setError(404, `Cannot find surveyquestionresponseAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyquestionresponseAudit', objSurveyquestionresponseAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionresponsesAuditCtrl.findOneByDataType = async (req, res) => {
    try {
        const { dataType } = req.params;
        const objSurveyquestionresponseAudit = await surveyquestionresponseAuditService.findOneByDataType(dataType, req.query);
        if (!objSurveyquestionresponseAudit) {
            util.setError(404, `Cannot find surveyquestionresponseAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyquestionresponseAudit', objSurveyquestionresponseAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionresponsesAuditCtrl.findOneByBeforeValueString = async (req, res) => {
    try {
        const { beforeValueString } = req.params;
        const objSurveyquestionresponseAudit = await surveyquestionresponseAuditService.findOneByBeforeValueString(beforeValueString, req.query);
        if (!objSurveyquestionresponseAudit) {
            util.setError(404, `Cannot find surveyquestionresponseAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyquestionresponseAudit', objSurveyquestionresponseAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionresponsesAuditCtrl.findOneByAfterValueString = async (req, res) => {
    try {
        const { afterValueString } = req.params;
        const objSurveyquestionresponseAudit = await surveyquestionresponseAuditService.findOneByAfterValueString(afterValueString, req.query);
        if (!objSurveyquestionresponseAudit) {
            util.setError(404, `Cannot find surveyquestionresponseAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyquestionresponseAudit', objSurveyquestionresponseAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionresponsesAuditCtrl.findOneByBeforeValueText = async (req, res) => {
    try {
        const { beforeValueText } = req.params;
        const objSurveyquestionresponseAudit = await surveyquestionresponseAuditService.findOneByBeforeValueText(beforeValueText, req.query);
        if (!objSurveyquestionresponseAudit) {
            util.setError(404, `Cannot find surveyquestionresponseAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyquestionresponseAudit', objSurveyquestionresponseAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionresponsesAuditCtrl.findOneByAfterValueText = async (req, res) => {
    try {
        const { afterValueText } = req.params;
        const objSurveyquestionresponseAudit = await surveyquestionresponseAuditService.findOneByAfterValueText(afterValueText, req.query);
        if (!objSurveyquestionresponseAudit) {
            util.setError(404, `Cannot find surveyquestionresponseAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyquestionresponseAudit', objSurveyquestionresponseAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionresponsesAuditCtrl.findOneByDateCreated = async (req, res) => {
    try {
        const { dateCreated } = req.params;
        const objSurveyquestionresponseAudit = await surveyquestionresponseAuditService.findOneByDateCreated(dateCreated, req.query);
        if (!objSurveyquestionresponseAudit) {
            util.setError(404, `Cannot find surveyquestionresponseAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyquestionresponseAudit', objSurveyquestionresponseAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionresponsesAuditCtrl.findOneByParentId = async (req, res) => {
    try {
        const { parentId } = req.params;
        const objSurveyquestionresponseAudit = await surveyquestionresponseAuditService.findOneByParentId(parentId, req.query);
        if (!objSurveyquestionresponseAudit) {
            util.setError(404, `Cannot find surveyquestionresponseAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyquestionresponseAudit', objSurveyquestionresponseAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



surveyquestionresponsesAuditCtrl.updateSurveyquestionresponseAuditById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyquestionresponseAudit = await surveyquestionresponseAuditService.updateSurveyquestionresponseAuditById(id, req.body);
            if (!objSurveyquestionresponseAudit) {
                util.setError(404, `Cannot find surveyquestionresponseAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SurveyquestionresponseAudit updated', objSurveyquestionresponseAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyquestionresponsesAuditCtrl.updateSurveyquestionresponseAuditByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyquestionresponseAudit = await surveyquestionresponseAuditService.updateSurveyquestionresponseAuditByCreatedBy(createdBy, req.body);
            if (!objSurveyquestionresponseAudit) {
                util.setError(404, `Cannot find surveyquestionresponseAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SurveyquestionresponseAudit updated', objSurveyquestionresponseAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyquestionresponsesAuditCtrl.updateSurveyquestionresponseAuditByFieldName = async (req, res) => {
     const { fieldName } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyquestionresponseAudit = await surveyquestionresponseAuditService.updateSurveyquestionresponseAuditByFieldName(fieldName, req.body);
            if (!objSurveyquestionresponseAudit) {
                util.setError(404, `Cannot find surveyquestionresponseAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SurveyquestionresponseAudit updated', objSurveyquestionresponseAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyquestionresponsesAuditCtrl.updateSurveyquestionresponseAuditByDataType = async (req, res) => {
     const { dataType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyquestionresponseAudit = await surveyquestionresponseAuditService.updateSurveyquestionresponseAuditByDataType(dataType, req.body);
            if (!objSurveyquestionresponseAudit) {
                util.setError(404, `Cannot find surveyquestionresponseAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SurveyquestionresponseAudit updated', objSurveyquestionresponseAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyquestionresponsesAuditCtrl.updateSurveyquestionresponseAuditByBeforeValueString = async (req, res) => {
     const { beforeValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyquestionresponseAudit = await surveyquestionresponseAuditService.updateSurveyquestionresponseAuditByBeforeValueString(beforeValueString, req.body);
            if (!objSurveyquestionresponseAudit) {
                util.setError(404, `Cannot find surveyquestionresponseAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SurveyquestionresponseAudit updated', objSurveyquestionresponseAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyquestionresponsesAuditCtrl.updateSurveyquestionresponseAuditByAfterValueString = async (req, res) => {
     const { afterValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyquestionresponseAudit = await surveyquestionresponseAuditService.updateSurveyquestionresponseAuditByAfterValueString(afterValueString, req.body);
            if (!objSurveyquestionresponseAudit) {
                util.setError(404, `Cannot find surveyquestionresponseAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SurveyquestionresponseAudit updated', objSurveyquestionresponseAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyquestionresponsesAuditCtrl.updateSurveyquestionresponseAuditByBeforeValueText = async (req, res) => {
     const { beforeValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyquestionresponseAudit = await surveyquestionresponseAuditService.updateSurveyquestionresponseAuditByBeforeValueText(beforeValueText, req.body);
            if (!objSurveyquestionresponseAudit) {
                util.setError(404, `Cannot find surveyquestionresponseAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SurveyquestionresponseAudit updated', objSurveyquestionresponseAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyquestionresponsesAuditCtrl.updateSurveyquestionresponseAuditByAfterValueText = async (req, res) => {
     const { afterValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyquestionresponseAudit = await surveyquestionresponseAuditService.updateSurveyquestionresponseAuditByAfterValueText(afterValueText, req.body);
            if (!objSurveyquestionresponseAudit) {
                util.setError(404, `Cannot find surveyquestionresponseAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SurveyquestionresponseAudit updated', objSurveyquestionresponseAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyquestionresponsesAuditCtrl.updateSurveyquestionresponseAuditByDateCreated = async (req, res) => {
     const { dateCreated } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyquestionresponseAudit = await surveyquestionresponseAuditService.updateSurveyquestionresponseAuditByDateCreated(dateCreated, req.body);
            if (!objSurveyquestionresponseAudit) {
                util.setError(404, `Cannot find surveyquestionresponseAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SurveyquestionresponseAudit updated', objSurveyquestionresponseAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyquestionresponsesAuditCtrl.updateSurveyquestionresponseAuditByParentId = async (req, res) => {
     const { parentId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyquestionresponseAudit = await surveyquestionresponseAuditService.updateSurveyquestionresponseAuditByParentId(parentId, req.body);
            if (!objSurveyquestionresponseAudit) {
                util.setError(404, `Cannot find surveyquestionresponseAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SurveyquestionresponseAudit updated', objSurveyquestionresponseAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = surveyquestionresponsesAuditCtrl;
//</es-section>
