/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:23:49 GMT-0400 (Bolivia Time)
 * Time: 0:23:49
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:23:49 GMT-0400 (Bolivia Time)
 * Last time updated: 0:23:49
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const surveyquestionresponseService = require('../services/surveyquestionresponses.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const surveyquestionresponsesCtrl = {};
surveyquestionresponsesCtrl.service = surveyquestionresponseService;


surveyquestionresponsesCtrl.getAllSurveyquestionresponses = async (req, res) => {
    try {
        const objSurveyquestionresponses = await surveyquestionresponseService.getAllSurveyquestionresponses(req.query);
        if (objSurveyquestionresponses.length > 0) {
            util.setSuccess(200, 'Surveyquestionresponses retrieved', objSurveyquestionresponses);
        } else {
            util.setSuccess(200, 'No surveyquestionresponse found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionresponsesCtrl.getASurveyquestionresponse = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objSurveyquestionresponse = await surveyquestionresponseService.getASurveyquestionresponse(id, req.query);
        if (!objSurveyquestionresponse) {
            util.setError(404, `Cannot find surveyquestionresponse with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found surveyquestionresponse', objSurveyquestionresponse);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionresponsesCtrl.addSurveyquestionresponse = async (req, res) => {
    try {
        const objSurveyquestionresponse = await surveyquestionresponseService.addSurveyquestionresponse(req.body);
        util.setSuccess(201, 'Surveyquestionresponse Added!', objSurveyquestionresponse);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionresponsesCtrl.updateSurveyquestionresponse = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objSurveyquestionresponse = await surveyquestionresponseService.updateSurveyquestionresponse(id, req.body);
        if (!objSurveyquestionresponse) {
            util.setError(404, `Cannot find surveyquestionresponse with the id: ${id}`);
        } else {
            util.setSuccess(200, 'Surveyquestionresponse updated', objSurveyquestionresponse);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

surveyquestionresponsesCtrl.deleteSurveyquestionresponse = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objSurveyquestionresponse = await surveyquestionresponseService.deleteSurveyquestionresponse(id);
        if (objSurveyquestionresponse) {
            util.setSuccess(200, 'Surveyquestionresponse deleted', objSurveyquestionresponse);
        } else {
            util.setError(404, `Surveyquestionresponse with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



surveyquestionresponsesCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objSurveyquestionresponse = await surveyquestionresponseService.findOneById(id, req.query);
        if (!objSurveyquestionresponse) {
            util.setError(404, `Cannot find surveyquestionresponse with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyquestionresponse', objSurveyquestionresponse);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionresponsesCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objSurveyquestionresponse = await surveyquestionresponseService.findOneByDeleted(deleted, req.query);
        if (!objSurveyquestionresponse) {
            util.setError(404, `Cannot find surveyquestionresponse with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyquestionresponse', objSurveyquestionresponse);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionresponsesCtrl.findOneByAnswerBool = async (req, res) => {
    try {
        const { answerBool } = req.params;
        const objSurveyquestionresponse = await surveyquestionresponseService.findOneByAnswerBool(answerBool, req.query);
        if (!objSurveyquestionresponse) {
            util.setError(404, `Cannot find surveyquestionresponse with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyquestionresponse', objSurveyquestionresponse);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionresponsesCtrl.findOneByName = async (req, res) => {
    try {
        const { name } = req.params;
        const objSurveyquestionresponse = await surveyquestionresponseService.findOneByName(name, req.query);
        if (!objSurveyquestionresponse) {
            util.setError(404, `Cannot find surveyquestionresponse with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyquestionresponse', objSurveyquestionresponse);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionresponsesCtrl.findOneByDescription = async (req, res) => {
    try {
        const { description } = req.params;
        const objSurveyquestionresponse = await surveyquestionresponseService.findOneByDescription(description, req.query);
        if (!objSurveyquestionresponse) {
            util.setError(404, `Cannot find surveyquestionresponse with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyquestionresponse', objSurveyquestionresponse);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionresponsesCtrl.findOneByAnswer = async (req, res) => {
    try {
        const { answer } = req.params;
        const objSurveyquestionresponse = await surveyquestionresponseService.findOneByAnswer(answer, req.query);
        if (!objSurveyquestionresponse) {
            util.setError(404, `Cannot find surveyquestionresponse with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyquestionresponse', objSurveyquestionresponse);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionresponsesCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objSurveyquestionresponse = await surveyquestionresponseService.findOneByDateEntered(dateEntered, req.query);
        if (!objSurveyquestionresponse) {
            util.setError(404, `Cannot find surveyquestionresponse with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyquestionresponse', objSurveyquestionresponse);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionresponsesCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objSurveyquestionresponse = await surveyquestionresponseService.findOneByDateModified(dateModified, req.query);
        if (!objSurveyquestionresponse) {
            util.setError(404, `Cannot find surveyquestionresponse with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyquestionresponse', objSurveyquestionresponse);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionresponsesCtrl.findOneByAnswerDatetime = async (req, res) => {
    try {
        const { answerDatetime } = req.params;
        const objSurveyquestionresponse = await surveyquestionresponseService.findOneByAnswerDatetime(answerDatetime, req.query);
        if (!objSurveyquestionresponse) {
            util.setError(404, `Cannot find surveyquestionresponse with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyquestionresponse', objSurveyquestionresponse);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionresponsesCtrl.findOneByModifiedUserId = async (req, res) => {
    try {
        const { modifiedUserId } = req.params;
        const objSurveyquestionresponse = await surveyquestionresponseService.findOneByModifiedUserId(modifiedUserId, req.query);
        if (!objSurveyquestionresponse) {
            util.setError(404, `Cannot find surveyquestionresponse with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyquestionresponse', objSurveyquestionresponse);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionresponsesCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objSurveyquestionresponse = await surveyquestionresponseService.findOneByCreatedBy(createdBy, req.query);
        if (!objSurveyquestionresponse) {
            util.setError(404, `Cannot find surveyquestionresponse with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyquestionresponse', objSurveyquestionresponse);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionresponsesCtrl.findOneByAssignedUserId = async (req, res) => {
    try {
        const { assignedUserId } = req.params;
        const objSurveyquestionresponse = await surveyquestionresponseService.findOneByAssignedUserId(assignedUserId, req.query);
        if (!objSurveyquestionresponse) {
            util.setError(404, `Cannot find surveyquestionresponse with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyquestionresponse', objSurveyquestionresponse);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionresponsesCtrl.findOneBySurveyquestionId = async (req, res) => {
    try {
        const { surveyquestionId } = req.params;
        const objSurveyquestionresponse = await surveyquestionresponseService.findOneBySurveyquestionId(surveyquestionId, req.query);
        if (!objSurveyquestionresponse) {
            util.setError(404, `Cannot find surveyquestionresponse with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyquestionresponse', objSurveyquestionresponse);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionresponsesCtrl.findOneBySurveyresponseId = async (req, res) => {
    try {
        const { surveyresponseId } = req.params;
        const objSurveyquestionresponse = await surveyquestionresponseService.findOneBySurveyresponseId(surveyresponseId, req.query);
        if (!objSurveyquestionresponse) {
            util.setError(404, `Cannot find surveyquestionresponse with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyquestionresponse', objSurveyquestionresponse);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



surveyquestionresponsesCtrl.updateSurveyquestionresponseById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyquestionresponse = await surveyquestionresponseService.updateSurveyquestionresponseById(id, req.body);
            if (!objSurveyquestionresponse) {
                util.setError(404, `Cannot find surveyquestionresponse with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Surveyquestionresponse updated', objSurveyquestionresponse);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyquestionresponsesCtrl.updateSurveyquestionresponseByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyquestionresponse = await surveyquestionresponseService.updateSurveyquestionresponseByDeleted(deleted, req.body);
            if (!objSurveyquestionresponse) {
                util.setError(404, `Cannot find surveyquestionresponse with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Surveyquestionresponse updated', objSurveyquestionresponse);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyquestionresponsesCtrl.updateSurveyquestionresponseByAnswerBool = async (req, res) => {
     const { answerBool } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyquestionresponse = await surveyquestionresponseService.updateSurveyquestionresponseByAnswerBool(answerBool, req.body);
            if (!objSurveyquestionresponse) {
                util.setError(404, `Cannot find surveyquestionresponse with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Surveyquestionresponse updated', objSurveyquestionresponse);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyquestionresponsesCtrl.updateSurveyquestionresponseByName = async (req, res) => {
     const { name } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyquestionresponse = await surveyquestionresponseService.updateSurveyquestionresponseByName(name, req.body);
            if (!objSurveyquestionresponse) {
                util.setError(404, `Cannot find surveyquestionresponse with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Surveyquestionresponse updated', objSurveyquestionresponse);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyquestionresponsesCtrl.updateSurveyquestionresponseByDescription = async (req, res) => {
     const { description } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyquestionresponse = await surveyquestionresponseService.updateSurveyquestionresponseByDescription(description, req.body);
            if (!objSurveyquestionresponse) {
                util.setError(404, `Cannot find surveyquestionresponse with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Surveyquestionresponse updated', objSurveyquestionresponse);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyquestionresponsesCtrl.updateSurveyquestionresponseByAnswer = async (req, res) => {
     const { answer } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyquestionresponse = await surveyquestionresponseService.updateSurveyquestionresponseByAnswer(answer, req.body);
            if (!objSurveyquestionresponse) {
                util.setError(404, `Cannot find surveyquestionresponse with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Surveyquestionresponse updated', objSurveyquestionresponse);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyquestionresponsesCtrl.updateSurveyquestionresponseByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyquestionresponse = await surveyquestionresponseService.updateSurveyquestionresponseByDateEntered(dateEntered, req.body);
            if (!objSurveyquestionresponse) {
                util.setError(404, `Cannot find surveyquestionresponse with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Surveyquestionresponse updated', objSurveyquestionresponse);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyquestionresponsesCtrl.updateSurveyquestionresponseByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyquestionresponse = await surveyquestionresponseService.updateSurveyquestionresponseByDateModified(dateModified, req.body);
            if (!objSurveyquestionresponse) {
                util.setError(404, `Cannot find surveyquestionresponse with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Surveyquestionresponse updated', objSurveyquestionresponse);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyquestionresponsesCtrl.updateSurveyquestionresponseByAnswerDatetime = async (req, res) => {
     const { answerDatetime } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyquestionresponse = await surveyquestionresponseService.updateSurveyquestionresponseByAnswerDatetime(answerDatetime, req.body);
            if (!objSurveyquestionresponse) {
                util.setError(404, `Cannot find surveyquestionresponse with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Surveyquestionresponse updated', objSurveyquestionresponse);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyquestionresponsesCtrl.updateSurveyquestionresponseByModifiedUserId = async (req, res) => {
     const { modifiedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyquestionresponse = await surveyquestionresponseService.updateSurveyquestionresponseByModifiedUserId(modifiedUserId, req.body);
            if (!objSurveyquestionresponse) {
                util.setError(404, `Cannot find surveyquestionresponse with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Surveyquestionresponse updated', objSurveyquestionresponse);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyquestionresponsesCtrl.updateSurveyquestionresponseByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyquestionresponse = await surveyquestionresponseService.updateSurveyquestionresponseByCreatedBy(createdBy, req.body);
            if (!objSurveyquestionresponse) {
                util.setError(404, `Cannot find surveyquestionresponse with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Surveyquestionresponse updated', objSurveyquestionresponse);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyquestionresponsesCtrl.updateSurveyquestionresponseByAssignedUserId = async (req, res) => {
     const { assignedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyquestionresponse = await surveyquestionresponseService.updateSurveyquestionresponseByAssignedUserId(assignedUserId, req.body);
            if (!objSurveyquestionresponse) {
                util.setError(404, `Cannot find surveyquestionresponse with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Surveyquestionresponse updated', objSurveyquestionresponse);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyquestionresponsesCtrl.updateSurveyquestionresponseBySurveyquestionId = async (req, res) => {
     const { surveyquestionId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyquestionresponse = await surveyquestionresponseService.updateSurveyquestionresponseBySurveyquestionId(surveyquestionId, req.body);
            if (!objSurveyquestionresponse) {
                util.setError(404, `Cannot find surveyquestionresponse with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Surveyquestionresponse updated', objSurveyquestionresponse);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyquestionresponsesCtrl.updateSurveyquestionresponseBySurveyresponseId = async (req, res) => {
     const { surveyresponseId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyquestionresponse = await surveyquestionresponseService.updateSurveyquestionresponseBySurveyresponseId(surveyresponseId, req.body);
            if (!objSurveyquestionresponse) {
                util.setError(404, `Cannot find surveyquestionresponse with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Surveyquestionresponse updated', objSurveyquestionresponse);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = surveyquestionresponsesCtrl;
//</es-section>
