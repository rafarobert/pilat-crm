/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:01:32 GMT-0400 (Bolivia Time)
 * Time: 14:1:32
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:01:32 GMT-0400 (Bolivia Time)
 * Last time updated: 14:1:32
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const surveyquestionoptionAuditService = require('../services/surveyquestionoptions_audit.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const surveyquestionoptionsAuditCtrl = {};
surveyquestionoptionsAuditCtrl.service = surveyquestionoptionAuditService;


surveyquestionoptionsAuditCtrl.getAllSurveyquestionoptionsAudit = async (req, res) => {
    try {
        const objSurveyquestionoptionsAudit = await surveyquestionoptionAuditService.getAllSurveyquestionoptionsAudit(req.query);
        if (objSurveyquestionoptionsAudit.length > 0) {
            util.setSuccess(200, 'SurveyquestionoptionsAudit retrieved', objSurveyquestionoptionsAudit);
        } else {
            util.setSuccess(200, 'No surveyquestionoptionAudit found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionoptionsAuditCtrl.getASurveyquestionoptionAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objSurveyquestionoptionAudit = await surveyquestionoptionAuditService.getASurveyquestionoptionAudit(id, req.query);
        if (!objSurveyquestionoptionAudit) {
            util.setError(404, `Cannot find surveyquestionoptionAudit with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found surveyquestionoptionAudit', objSurveyquestionoptionAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionoptionsAuditCtrl.addSurveyquestionoptionAudit = async (req, res) => {
    try {
        const objSurveyquestionoptionAudit = await surveyquestionoptionAuditService.addSurveyquestionoptionAudit(req.body);
        util.setSuccess(201, 'SurveyquestionoptionAudit Added!', objSurveyquestionoptionAudit);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionoptionsAuditCtrl.updateSurveyquestionoptionAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objSurveyquestionoptionAudit = await surveyquestionoptionAuditService.updateSurveyquestionoptionAudit(id, req.body);
        if (!objSurveyquestionoptionAudit) {
            util.setError(404, `Cannot find surveyquestionoptionAudit with the id: ${id}`);
        } else {
            util.setSuccess(200, 'SurveyquestionoptionAudit updated', objSurveyquestionoptionAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

surveyquestionoptionsAuditCtrl.deleteSurveyquestionoptionAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objSurveyquestionoptionAudit = await surveyquestionoptionAuditService.deleteSurveyquestionoptionAudit(id);
        if (objSurveyquestionoptionAudit) {
            util.setSuccess(200, 'SurveyquestionoptionAudit deleted', objSurveyquestionoptionAudit);
        } else {
            util.setError(404, `SurveyquestionoptionAudit with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



surveyquestionoptionsAuditCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objSurveyquestionoptionAudit = await surveyquestionoptionAuditService.findOneById(id, req.query);
        if (!objSurveyquestionoptionAudit) {
            util.setError(404, `Cannot find surveyquestionoptionAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyquestionoptionAudit', objSurveyquestionoptionAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionoptionsAuditCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objSurveyquestionoptionAudit = await surveyquestionoptionAuditService.findOneByCreatedBy(createdBy, req.query);
        if (!objSurveyquestionoptionAudit) {
            util.setError(404, `Cannot find surveyquestionoptionAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyquestionoptionAudit', objSurveyquestionoptionAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionoptionsAuditCtrl.findOneByFieldName = async (req, res) => {
    try {
        const { fieldName } = req.params;
        const objSurveyquestionoptionAudit = await surveyquestionoptionAuditService.findOneByFieldName(fieldName, req.query);
        if (!objSurveyquestionoptionAudit) {
            util.setError(404, `Cannot find surveyquestionoptionAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyquestionoptionAudit', objSurveyquestionoptionAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionoptionsAuditCtrl.findOneByDataType = async (req, res) => {
    try {
        const { dataType } = req.params;
        const objSurveyquestionoptionAudit = await surveyquestionoptionAuditService.findOneByDataType(dataType, req.query);
        if (!objSurveyquestionoptionAudit) {
            util.setError(404, `Cannot find surveyquestionoptionAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyquestionoptionAudit', objSurveyquestionoptionAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionoptionsAuditCtrl.findOneByBeforeValueString = async (req, res) => {
    try {
        const { beforeValueString } = req.params;
        const objSurveyquestionoptionAudit = await surveyquestionoptionAuditService.findOneByBeforeValueString(beforeValueString, req.query);
        if (!objSurveyquestionoptionAudit) {
            util.setError(404, `Cannot find surveyquestionoptionAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyquestionoptionAudit', objSurveyquestionoptionAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionoptionsAuditCtrl.findOneByAfterValueString = async (req, res) => {
    try {
        const { afterValueString } = req.params;
        const objSurveyquestionoptionAudit = await surveyquestionoptionAuditService.findOneByAfterValueString(afterValueString, req.query);
        if (!objSurveyquestionoptionAudit) {
            util.setError(404, `Cannot find surveyquestionoptionAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyquestionoptionAudit', objSurveyquestionoptionAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionoptionsAuditCtrl.findOneByBeforeValueText = async (req, res) => {
    try {
        const { beforeValueText } = req.params;
        const objSurveyquestionoptionAudit = await surveyquestionoptionAuditService.findOneByBeforeValueText(beforeValueText, req.query);
        if (!objSurveyquestionoptionAudit) {
            util.setError(404, `Cannot find surveyquestionoptionAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyquestionoptionAudit', objSurveyquestionoptionAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionoptionsAuditCtrl.findOneByAfterValueText = async (req, res) => {
    try {
        const { afterValueText } = req.params;
        const objSurveyquestionoptionAudit = await surveyquestionoptionAuditService.findOneByAfterValueText(afterValueText, req.query);
        if (!objSurveyquestionoptionAudit) {
            util.setError(404, `Cannot find surveyquestionoptionAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyquestionoptionAudit', objSurveyquestionoptionAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionoptionsAuditCtrl.findOneByDateCreated = async (req, res) => {
    try {
        const { dateCreated } = req.params;
        const objSurveyquestionoptionAudit = await surveyquestionoptionAuditService.findOneByDateCreated(dateCreated, req.query);
        if (!objSurveyquestionoptionAudit) {
            util.setError(404, `Cannot find surveyquestionoptionAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyquestionoptionAudit', objSurveyquestionoptionAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionoptionsAuditCtrl.findOneByParentId = async (req, res) => {
    try {
        const { parentId } = req.params;
        const objSurveyquestionoptionAudit = await surveyquestionoptionAuditService.findOneByParentId(parentId, req.query);
        if (!objSurveyquestionoptionAudit) {
            util.setError(404, `Cannot find surveyquestionoptionAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyquestionoptionAudit', objSurveyquestionoptionAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



surveyquestionoptionsAuditCtrl.updateSurveyquestionoptionAuditById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyquestionoptionAudit = await surveyquestionoptionAuditService.updateSurveyquestionoptionAuditById(id, req.body);
            if (!objSurveyquestionoptionAudit) {
                util.setError(404, `Cannot find surveyquestionoptionAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SurveyquestionoptionAudit updated', objSurveyquestionoptionAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyquestionoptionsAuditCtrl.updateSurveyquestionoptionAuditByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyquestionoptionAudit = await surveyquestionoptionAuditService.updateSurveyquestionoptionAuditByCreatedBy(createdBy, req.body);
            if (!objSurveyquestionoptionAudit) {
                util.setError(404, `Cannot find surveyquestionoptionAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SurveyquestionoptionAudit updated', objSurveyquestionoptionAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyquestionoptionsAuditCtrl.updateSurveyquestionoptionAuditByFieldName = async (req, res) => {
     const { fieldName } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyquestionoptionAudit = await surveyquestionoptionAuditService.updateSurveyquestionoptionAuditByFieldName(fieldName, req.body);
            if (!objSurveyquestionoptionAudit) {
                util.setError(404, `Cannot find surveyquestionoptionAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SurveyquestionoptionAudit updated', objSurveyquestionoptionAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyquestionoptionsAuditCtrl.updateSurveyquestionoptionAuditByDataType = async (req, res) => {
     const { dataType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyquestionoptionAudit = await surveyquestionoptionAuditService.updateSurveyquestionoptionAuditByDataType(dataType, req.body);
            if (!objSurveyquestionoptionAudit) {
                util.setError(404, `Cannot find surveyquestionoptionAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SurveyquestionoptionAudit updated', objSurveyquestionoptionAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyquestionoptionsAuditCtrl.updateSurveyquestionoptionAuditByBeforeValueString = async (req, res) => {
     const { beforeValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyquestionoptionAudit = await surveyquestionoptionAuditService.updateSurveyquestionoptionAuditByBeforeValueString(beforeValueString, req.body);
            if (!objSurveyquestionoptionAudit) {
                util.setError(404, `Cannot find surveyquestionoptionAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SurveyquestionoptionAudit updated', objSurveyquestionoptionAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyquestionoptionsAuditCtrl.updateSurveyquestionoptionAuditByAfterValueString = async (req, res) => {
     const { afterValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyquestionoptionAudit = await surveyquestionoptionAuditService.updateSurveyquestionoptionAuditByAfterValueString(afterValueString, req.body);
            if (!objSurveyquestionoptionAudit) {
                util.setError(404, `Cannot find surveyquestionoptionAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SurveyquestionoptionAudit updated', objSurveyquestionoptionAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyquestionoptionsAuditCtrl.updateSurveyquestionoptionAuditByBeforeValueText = async (req, res) => {
     const { beforeValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyquestionoptionAudit = await surveyquestionoptionAuditService.updateSurveyquestionoptionAuditByBeforeValueText(beforeValueText, req.body);
            if (!objSurveyquestionoptionAudit) {
                util.setError(404, `Cannot find surveyquestionoptionAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SurveyquestionoptionAudit updated', objSurveyquestionoptionAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyquestionoptionsAuditCtrl.updateSurveyquestionoptionAuditByAfterValueText = async (req, res) => {
     const { afterValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyquestionoptionAudit = await surveyquestionoptionAuditService.updateSurveyquestionoptionAuditByAfterValueText(afterValueText, req.body);
            if (!objSurveyquestionoptionAudit) {
                util.setError(404, `Cannot find surveyquestionoptionAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SurveyquestionoptionAudit updated', objSurveyquestionoptionAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyquestionoptionsAuditCtrl.updateSurveyquestionoptionAuditByDateCreated = async (req, res) => {
     const { dateCreated } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyquestionoptionAudit = await surveyquestionoptionAuditService.updateSurveyquestionoptionAuditByDateCreated(dateCreated, req.body);
            if (!objSurveyquestionoptionAudit) {
                util.setError(404, `Cannot find surveyquestionoptionAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SurveyquestionoptionAudit updated', objSurveyquestionoptionAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyquestionoptionsAuditCtrl.updateSurveyquestionoptionAuditByParentId = async (req, res) => {
     const { parentId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyquestionoptionAudit = await surveyquestionoptionAuditService.updateSurveyquestionoptionAuditByParentId(parentId, req.body);
            if (!objSurveyquestionoptionAudit) {
                util.setError(404, `Cannot find surveyquestionoptionAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SurveyquestionoptionAudit updated', objSurveyquestionoptionAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = surveyquestionoptionsAuditCtrl;
//</es-section>
