/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:37:06 GMT-0400 (Bolivia Time)
 * Time: 15:37:6
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:37:06 GMT-0400 (Bolivia Time)
 * Last time updated: 15:37:6
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const surveyquestionService = require('../services/surveyquestions.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const surveyquestionsCtrl = {};
surveyquestionsCtrl.service = surveyquestionService;


surveyquestionsCtrl.getAllSurveyquestions = async (req, res) => {
    try {
        const objSurveyquestions = await surveyquestionService.getAllSurveyquestions(req.query);
        if (objSurveyquestions.length > 0) {
            util.setSuccess(200, 'Surveyquestions retrieved', objSurveyquestions);
        } else {
            util.setSuccess(200, 'No surveyquestion found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionsCtrl.getASurveyquestion = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objSurveyquestion = await surveyquestionService.getASurveyquestion(id, req.query);
        if (!objSurveyquestion) {
            util.setError(404, `Cannot find surveyquestion with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found surveyquestion', objSurveyquestion);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionsCtrl.addSurveyquestion = async (req, res) => {
    try {
        const objSurveyquestion = await surveyquestionService.addSurveyquestion(req.body);
        util.setSuccess(201, 'Surveyquestion Added!', objSurveyquestion);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionsCtrl.updateSurveyquestion = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objSurveyquestion = await surveyquestionService.updateSurveyquestion(id, req.body);
        if (!objSurveyquestion) {
            util.setError(404, `Cannot find surveyquestion with the id: ${id}`);
        } else {
            util.setSuccess(200, 'Surveyquestion updated', objSurveyquestion);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

surveyquestionsCtrl.deleteSurveyquestion = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objSurveyquestion = await surveyquestionService.deleteSurveyquestion(id);
        if (objSurveyquestion) {
            util.setSuccess(200, 'Surveyquestion deleted', objSurveyquestion);
        } else {
            util.setError(404, `Surveyquestion with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



surveyquestionsCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objSurveyquestion = await surveyquestionService.findOneById(id, req.query);
        if (!objSurveyquestion) {
            util.setError(404, `Cannot find surveyquestion with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyquestion', objSurveyquestion);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionsCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objSurveyquestion = await surveyquestionService.findOneByDeleted(deleted, req.query);
        if (!objSurveyquestion) {
            util.setError(404, `Cannot find surveyquestion with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyquestion', objSurveyquestion);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionsCtrl.findOneByHappinessQuestion = async (req, res) => {
    try {
        const { happinessQuestion } = req.params;
        const objSurveyquestion = await surveyquestionService.findOneByHappinessQuestion(happinessQuestion, req.query);
        if (!objSurveyquestion) {
            util.setError(404, `Cannot find surveyquestion with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyquestion', objSurveyquestion);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionsCtrl.findOneBySortOrder = async (req, res) => {
    try {
        const { sortOrder } = req.params;
        const objSurveyquestion = await surveyquestionService.findOneBySortOrder(sortOrder, req.query);
        if (!objSurveyquestion) {
            util.setError(404, `Cannot find surveyquestion with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyquestion', objSurveyquestion);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionsCtrl.findOneByName = async (req, res) => {
    try {
        const { name } = req.params;
        const objSurveyquestion = await surveyquestionService.findOneByName(name, req.query);
        if (!objSurveyquestion) {
            util.setError(404, `Cannot find surveyquestion with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyquestion', objSurveyquestion);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionsCtrl.findOneByType = async (req, res) => {
    try {
        const { type } = req.params;
        const objSurveyquestion = await surveyquestionService.findOneByType(type, req.query);
        if (!objSurveyquestion) {
            util.setError(404, `Cannot find surveyquestion with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyquestion', objSurveyquestion);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionsCtrl.findOneByDescription = async (req, res) => {
    try {
        const { description } = req.params;
        const objSurveyquestion = await surveyquestionService.findOneByDescription(description, req.query);
        if (!objSurveyquestion) {
            util.setError(404, `Cannot find surveyquestion with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyquestion', objSurveyquestion);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionsCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objSurveyquestion = await surveyquestionService.findOneByDateEntered(dateEntered, req.query);
        if (!objSurveyquestion) {
            util.setError(404, `Cannot find surveyquestion with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyquestion', objSurveyquestion);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionsCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objSurveyquestion = await surveyquestionService.findOneByDateModified(dateModified, req.query);
        if (!objSurveyquestion) {
            util.setError(404, `Cannot find surveyquestion with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyquestion', objSurveyquestion);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionsCtrl.findOneByModifiedUserId = async (req, res) => {
    try {
        const { modifiedUserId } = req.params;
        const objSurveyquestion = await surveyquestionService.findOneByModifiedUserId(modifiedUserId, req.query);
        if (!objSurveyquestion) {
            util.setError(404, `Cannot find surveyquestion with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyquestion', objSurveyquestion);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionsCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objSurveyquestion = await surveyquestionService.findOneByCreatedBy(createdBy, req.query);
        if (!objSurveyquestion) {
            util.setError(404, `Cannot find surveyquestion with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyquestion', objSurveyquestion);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionsCtrl.findOneByAssignedUserId = async (req, res) => {
    try {
        const { assignedUserId } = req.params;
        const objSurveyquestion = await surveyquestionService.findOneByAssignedUserId(assignedUserId, req.query);
        if (!objSurveyquestion) {
            util.setError(404, `Cannot find surveyquestion with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyquestion', objSurveyquestion);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionsCtrl.findOneBySurveyId = async (req, res) => {
    try {
        const { surveyId } = req.params;
        const objSurveyquestion = await surveyquestionService.findOneBySurveyId(surveyId, req.query);
        if (!objSurveyquestion) {
            util.setError(404, `Cannot find surveyquestion with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyquestion', objSurveyquestion);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



surveyquestionsCtrl.updateSurveyquestionById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyquestion = await surveyquestionService.updateSurveyquestionById(id, req.body);
            if (!objSurveyquestion) {
                util.setError(404, `Cannot find surveyquestion with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Surveyquestion updated', objSurveyquestion);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyquestionsCtrl.updateSurveyquestionByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyquestion = await surveyquestionService.updateSurveyquestionByDeleted(deleted, req.body);
            if (!objSurveyquestion) {
                util.setError(404, `Cannot find surveyquestion with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Surveyquestion updated', objSurveyquestion);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyquestionsCtrl.updateSurveyquestionByHappinessQuestion = async (req, res) => {
     const { happinessQuestion } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyquestion = await surveyquestionService.updateSurveyquestionByHappinessQuestion(happinessQuestion, req.body);
            if (!objSurveyquestion) {
                util.setError(404, `Cannot find surveyquestion with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Surveyquestion updated', objSurveyquestion);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyquestionsCtrl.updateSurveyquestionBySortOrder = async (req, res) => {
     const { sortOrder } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyquestion = await surveyquestionService.updateSurveyquestionBySortOrder(sortOrder, req.body);
            if (!objSurveyquestion) {
                util.setError(404, `Cannot find surveyquestion with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Surveyquestion updated', objSurveyquestion);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyquestionsCtrl.updateSurveyquestionByName = async (req, res) => {
     const { name } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyquestion = await surveyquestionService.updateSurveyquestionByName(name, req.body);
            if (!objSurveyquestion) {
                util.setError(404, `Cannot find surveyquestion with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Surveyquestion updated', objSurveyquestion);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyquestionsCtrl.updateSurveyquestionByType = async (req, res) => {
     const { type } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyquestion = await surveyquestionService.updateSurveyquestionByType(type, req.body);
            if (!objSurveyquestion) {
                util.setError(404, `Cannot find surveyquestion with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Surveyquestion updated', objSurveyquestion);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyquestionsCtrl.updateSurveyquestionByDescription = async (req, res) => {
     const { description } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyquestion = await surveyquestionService.updateSurveyquestionByDescription(description, req.body);
            if (!objSurveyquestion) {
                util.setError(404, `Cannot find surveyquestion with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Surveyquestion updated', objSurveyquestion);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyquestionsCtrl.updateSurveyquestionByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyquestion = await surveyquestionService.updateSurveyquestionByDateEntered(dateEntered, req.body);
            if (!objSurveyquestion) {
                util.setError(404, `Cannot find surveyquestion with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Surveyquestion updated', objSurveyquestion);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyquestionsCtrl.updateSurveyquestionByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyquestion = await surveyquestionService.updateSurveyquestionByDateModified(dateModified, req.body);
            if (!objSurveyquestion) {
                util.setError(404, `Cannot find surveyquestion with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Surveyquestion updated', objSurveyquestion);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyquestionsCtrl.updateSurveyquestionByModifiedUserId = async (req, res) => {
     const { modifiedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyquestion = await surveyquestionService.updateSurveyquestionByModifiedUserId(modifiedUserId, req.body);
            if (!objSurveyquestion) {
                util.setError(404, `Cannot find surveyquestion with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Surveyquestion updated', objSurveyquestion);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyquestionsCtrl.updateSurveyquestionByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyquestion = await surveyquestionService.updateSurveyquestionByCreatedBy(createdBy, req.body);
            if (!objSurveyquestion) {
                util.setError(404, `Cannot find surveyquestion with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Surveyquestion updated', objSurveyquestion);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyquestionsCtrl.updateSurveyquestionByAssignedUserId = async (req, res) => {
     const { assignedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyquestion = await surveyquestionService.updateSurveyquestionByAssignedUserId(assignedUserId, req.body);
            if (!objSurveyquestion) {
                util.setError(404, `Cannot find surveyquestion with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Surveyquestion updated', objSurveyquestion);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyquestionsCtrl.updateSurveyquestionBySurveyId = async (req, res) => {
     const { surveyId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyquestion = await surveyquestionService.updateSurveyquestionBySurveyId(surveyId, req.body);
            if (!objSurveyquestion) {
                util.setError(404, `Cannot find surveyquestion with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Surveyquestion updated', objSurveyquestion);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = surveyquestionsCtrl;
//</es-section>
