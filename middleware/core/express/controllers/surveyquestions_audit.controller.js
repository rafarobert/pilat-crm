/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:47 GMT-0400 (Bolivia Time)
 * Time: 14:57:47
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:47 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:47
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const models = require('../../express');
const surveyquestionAuditService = require('../services/surveyquestions_audit.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const surveyquestionsAuditCtrl = {};
surveyquestionsAuditCtrl.service = surveyquestionAuditService;


surveyquestionsAuditCtrl.getAllSurveyquestionsAudit = async (req, res) => {
    try {
        const { length } = req.body;
        const { start } = req.body;
        const [column, dir] = util.getOrderByColumnDirection(models.sequelize.surveyquestionsAudit.rawAttributes,req.body);
        req.query.limit = length ? length : req.query.limit;
        req.query.offset = start ? start : req.query.offset;
        req.query.order = column && dir ? [[column,dir]] : req.query.order;

        const objSurveyquestionsAudit = await surveyquestionAuditService.getAllSurveyquestionsAudit(req.query);
        if (objSurveyquestionsAudit && objSurveyquestionsAudit.rows && objSurveyquestionsAudit.count) {
            util.setSuccess(200, 'SurveyquestionsAudit retrieved', objSurveyquestionsAudit.rows, objSurveyquestionsAudit.count, req.query.limit, req.query.offset);
        } else {
            util.setSuccess(200, 'No surveyquestionAudit found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionsAuditCtrl.getASurveyquestionAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objSurveyquestionAudit = await surveyquestionAuditService.getASurveyquestionAudit(id, req.query);
        if (!objSurveyquestionAudit) {
            util.setError(404, `Cannot find surveyquestionAudit with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found surveyquestionAudit', objSurveyquestionAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionsAuditCtrl.addSurveyquestionAudit = async (req, res) => {
    try {
        const objSurveyquestionAudit = await surveyquestionAuditService.addSurveyquestionAudit(req.body);
        util.setSuccess(201, 'SurveyquestionAudit Added!', objSurveyquestionAudit);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionsAuditCtrl.updateSurveyquestionAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objSurveyquestionAudit = await surveyquestionAuditService.updateSurveyquestionAudit(id, req.body);
        if (!objSurveyquestionAudit) {
            util.setError(404, `Cannot find surveyquestionAudit with the id: ${id}`);
        } else {
            util.setSuccess(200, 'SurveyquestionAudit updated', objSurveyquestionAudit);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

surveyquestionsAuditCtrl.deleteSurveyquestionAudit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objSurveyquestionAudit = await surveyquestionAuditService.deleteSurveyquestionAudit(id);
        if (objSurveyquestionAudit) {
            util.setSuccess(200, 'SurveyquestionAudit deleted', objSurveyquestionAudit);
        } else {
            util.setError(404, `SurveyquestionAudit with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



surveyquestionsAuditCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objSurveyquestionAudit = await surveyquestionAuditService.findOneById(id, req.query);
        if (!objSurveyquestionAudit) {
            util.setError(404, `Cannot find surveyquestionAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyquestionAudit', objSurveyquestionAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionsAuditCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objSurveyquestionAudit = await surveyquestionAuditService.findOneByCreatedBy(createdBy, req.query);
        if (!objSurveyquestionAudit) {
            util.setError(404, `Cannot find surveyquestionAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyquestionAudit', objSurveyquestionAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionsAuditCtrl.findOneByFieldName = async (req, res) => {
    try {
        const { fieldName } = req.params;
        const objSurveyquestionAudit = await surveyquestionAuditService.findOneByFieldName(fieldName, req.query);
        if (!objSurveyquestionAudit) {
            util.setError(404, `Cannot find surveyquestionAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyquestionAudit', objSurveyquestionAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionsAuditCtrl.findOneByDataType = async (req, res) => {
    try {
        const { dataType } = req.params;
        const objSurveyquestionAudit = await surveyquestionAuditService.findOneByDataType(dataType, req.query);
        if (!objSurveyquestionAudit) {
            util.setError(404, `Cannot find surveyquestionAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyquestionAudit', objSurveyquestionAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionsAuditCtrl.findOneByBeforeValueString = async (req, res) => {
    try {
        const { beforeValueString } = req.params;
        const objSurveyquestionAudit = await surveyquestionAuditService.findOneByBeforeValueString(beforeValueString, req.query);
        if (!objSurveyquestionAudit) {
            util.setError(404, `Cannot find surveyquestionAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyquestionAudit', objSurveyquestionAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionsAuditCtrl.findOneByAfterValueString = async (req, res) => {
    try {
        const { afterValueString } = req.params;
        const objSurveyquestionAudit = await surveyquestionAuditService.findOneByAfterValueString(afterValueString, req.query);
        if (!objSurveyquestionAudit) {
            util.setError(404, `Cannot find surveyquestionAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyquestionAudit', objSurveyquestionAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionsAuditCtrl.findOneByBeforeValueText = async (req, res) => {
    try {
        const { beforeValueText } = req.params;
        const objSurveyquestionAudit = await surveyquestionAuditService.findOneByBeforeValueText(beforeValueText, req.query);
        if (!objSurveyquestionAudit) {
            util.setError(404, `Cannot find surveyquestionAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyquestionAudit', objSurveyquestionAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionsAuditCtrl.findOneByAfterValueText = async (req, res) => {
    try {
        const { afterValueText } = req.params;
        const objSurveyquestionAudit = await surveyquestionAuditService.findOneByAfterValueText(afterValueText, req.query);
        if (!objSurveyquestionAudit) {
            util.setError(404, `Cannot find surveyquestionAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyquestionAudit', objSurveyquestionAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionsAuditCtrl.findOneByDateCreated = async (req, res) => {
    try {
        const { dateCreated } = req.params;
        const objSurveyquestionAudit = await surveyquestionAuditService.findOneByDateCreated(dateCreated, req.query);
        if (!objSurveyquestionAudit) {
            util.setError(404, `Cannot find surveyquestionAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyquestionAudit', objSurveyquestionAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionsAuditCtrl.findOneByParentId = async (req, res) => {
    try {
        const { parentId } = req.params;
        const objSurveyquestionAudit = await surveyquestionAuditService.findOneByParentId(parentId, req.query);
        if (!objSurveyquestionAudit) {
            util.setError(404, `Cannot find surveyquestionAudit with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyquestionAudit', objSurveyquestionAudit);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



surveyquestionsAuditCtrl.updateSurveyquestionAuditById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyquestionAudit = await surveyquestionAuditService.updateSurveyquestionAuditById(id, req.body);
            if (!objSurveyquestionAudit) {
                util.setError(404, `Cannot find surveyquestionAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SurveyquestionAudit updated', objSurveyquestionAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyquestionsAuditCtrl.updateSurveyquestionAuditByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyquestionAudit = await surveyquestionAuditService.updateSurveyquestionAuditByCreatedBy(createdBy, req.body);
            if (!objSurveyquestionAudit) {
                util.setError(404, `Cannot find surveyquestionAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SurveyquestionAudit updated', objSurveyquestionAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyquestionsAuditCtrl.updateSurveyquestionAuditByFieldName = async (req, res) => {
     const { fieldName } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyquestionAudit = await surveyquestionAuditService.updateSurveyquestionAuditByFieldName(fieldName, req.body);
            if (!objSurveyquestionAudit) {
                util.setError(404, `Cannot find surveyquestionAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SurveyquestionAudit updated', objSurveyquestionAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyquestionsAuditCtrl.updateSurveyquestionAuditByDataType = async (req, res) => {
     const { dataType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyquestionAudit = await surveyquestionAuditService.updateSurveyquestionAuditByDataType(dataType, req.body);
            if (!objSurveyquestionAudit) {
                util.setError(404, `Cannot find surveyquestionAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SurveyquestionAudit updated', objSurveyquestionAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyquestionsAuditCtrl.updateSurveyquestionAuditByBeforeValueString = async (req, res) => {
     const { beforeValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyquestionAudit = await surveyquestionAuditService.updateSurveyquestionAuditByBeforeValueString(beforeValueString, req.body);
            if (!objSurveyquestionAudit) {
                util.setError(404, `Cannot find surveyquestionAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SurveyquestionAudit updated', objSurveyquestionAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyquestionsAuditCtrl.updateSurveyquestionAuditByAfterValueString = async (req, res) => {
     const { afterValueString } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyquestionAudit = await surveyquestionAuditService.updateSurveyquestionAuditByAfterValueString(afterValueString, req.body);
            if (!objSurveyquestionAudit) {
                util.setError(404, `Cannot find surveyquestionAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SurveyquestionAudit updated', objSurveyquestionAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyquestionsAuditCtrl.updateSurveyquestionAuditByBeforeValueText = async (req, res) => {
     const { beforeValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyquestionAudit = await surveyquestionAuditService.updateSurveyquestionAuditByBeforeValueText(beforeValueText, req.body);
            if (!objSurveyquestionAudit) {
                util.setError(404, `Cannot find surveyquestionAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SurveyquestionAudit updated', objSurveyquestionAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyquestionsAuditCtrl.updateSurveyquestionAuditByAfterValueText = async (req, res) => {
     const { afterValueText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyquestionAudit = await surveyquestionAuditService.updateSurveyquestionAuditByAfterValueText(afterValueText, req.body);
            if (!objSurveyquestionAudit) {
                util.setError(404, `Cannot find surveyquestionAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SurveyquestionAudit updated', objSurveyquestionAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyquestionsAuditCtrl.updateSurveyquestionAuditByDateCreated = async (req, res) => {
     const { dateCreated } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyquestionAudit = await surveyquestionAuditService.updateSurveyquestionAuditByDateCreated(dateCreated, req.body);
            if (!objSurveyquestionAudit) {
                util.setError(404, `Cannot find surveyquestionAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SurveyquestionAudit updated', objSurveyquestionAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyquestionsAuditCtrl.updateSurveyquestionAuditByParentId = async (req, res) => {
     const { parentId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyquestionAudit = await surveyquestionAuditService.updateSurveyquestionAuditByParentId(parentId, req.body);
            if (!objSurveyquestionAudit) {
                util.setError(404, `Cannot find surveyquestionAudit with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SurveyquestionAudit updated', objSurveyquestionAudit);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = surveyquestionsAuditCtrl;
//</es-section>
