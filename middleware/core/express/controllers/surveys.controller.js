/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:37:08 GMT-0400 (Bolivia Time)
 * Time: 15:37:8
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:37:08 GMT-0400 (Bolivia Time)
 * Last time updated: 15:37:8
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const surveyService = require('../services/surveys.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const surveysCtrl = {};
surveysCtrl.service = surveyService;


surveysCtrl.getAllSurveys = async (req, res) => {
    try {
        const objSurveys = await surveyService.getAllSurveys(req.query);
        if (objSurveys.length > 0) {
            util.setSuccess(200, 'Surveys retrieved', objSurveys);
        } else {
            util.setSuccess(200, 'No survey found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveysCtrl.getASurvey = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objSurvey = await surveyService.getASurvey(id, req.query);
        if (!objSurvey) {
            util.setError(404, `Cannot find survey with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found survey', objSurvey);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveysCtrl.addSurvey = async (req, res) => {
    try {
        const objSurvey = await surveyService.addSurvey(req.body);
        util.setSuccess(201, 'Survey Added!', objSurvey);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveysCtrl.updateSurvey = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objSurvey = await surveyService.updateSurvey(id, req.body);
        if (!objSurvey) {
            util.setError(404, `Cannot find survey with the id: ${id}`);
        } else {
            util.setSuccess(200, 'Survey updated', objSurvey);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

surveysCtrl.deleteSurvey = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objSurvey = await surveyService.deleteSurvey(id);
        if (objSurvey) {
            util.setSuccess(200, 'Survey deleted', objSurvey);
        } else {
            util.setError(404, `Survey with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



surveysCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objSurvey = await surveyService.findOneById(id, req.query);
        if (!objSurvey) {
            util.setError(404, `Cannot find survey with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found survey', objSurvey);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveysCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objSurvey = await surveyService.findOneByDeleted(deleted, req.query);
        if (!objSurvey) {
            util.setError(404, `Cannot find survey with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found survey', objSurvey);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveysCtrl.findOneByName = async (req, res) => {
    try {
        const { name } = req.params;
        const objSurvey = await surveyService.findOneByName(name, req.query);
        if (!objSurvey) {
            util.setError(404, `Cannot find survey with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found survey', objSurvey);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveysCtrl.findOneByStatus = async (req, res) => {
    try {
        const { status } = req.params;
        const objSurvey = await surveyService.findOneByStatus(status, req.query);
        if (!objSurvey) {
            util.setError(404, `Cannot find survey with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found survey', objSurvey);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveysCtrl.findOneBySubmitText = async (req, res) => {
    try {
        const { submitText } = req.params;
        const objSurvey = await surveyService.findOneBySubmitText(submitText, req.query);
        if (!objSurvey) {
            util.setError(404, `Cannot find survey with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found survey', objSurvey);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveysCtrl.findOneBySatisfiedText = async (req, res) => {
    try {
        const { satisfiedText } = req.params;
        const objSurvey = await surveyService.findOneBySatisfiedText(satisfiedText, req.query);
        if (!objSurvey) {
            util.setError(404, `Cannot find survey with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found survey', objSurvey);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveysCtrl.findOneByNeitherText = async (req, res) => {
    try {
        const { neitherText } = req.params;
        const objSurvey = await surveyService.findOneByNeitherText(neitherText, req.query);
        if (!objSurvey) {
            util.setError(404, `Cannot find survey with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found survey', objSurvey);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveysCtrl.findOneByDissatisfiedText = async (req, res) => {
    try {
        const { dissatisfiedText } = req.params;
        const objSurvey = await surveyService.findOneByDissatisfiedText(dissatisfiedText, req.query);
        if (!objSurvey) {
            util.setError(404, `Cannot find survey with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found survey', objSurvey);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveysCtrl.findOneByDescription = async (req, res) => {
    try {
        const { description } = req.params;
        const objSurvey = await surveyService.findOneByDescription(description, req.query);
        if (!objSurvey) {
            util.setError(404, `Cannot find survey with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found survey', objSurvey);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveysCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objSurvey = await surveyService.findOneByDateEntered(dateEntered, req.query);
        if (!objSurvey) {
            util.setError(404, `Cannot find survey with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found survey', objSurvey);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveysCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objSurvey = await surveyService.findOneByDateModified(dateModified, req.query);
        if (!objSurvey) {
            util.setError(404, `Cannot find survey with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found survey', objSurvey);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveysCtrl.findOneByModifiedUserId = async (req, res) => {
    try {
        const { modifiedUserId } = req.params;
        const objSurvey = await surveyService.findOneByModifiedUserId(modifiedUserId, req.query);
        if (!objSurvey) {
            util.setError(404, `Cannot find survey with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found survey', objSurvey);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveysCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objSurvey = await surveyService.findOneByCreatedBy(createdBy, req.query);
        if (!objSurvey) {
            util.setError(404, `Cannot find survey with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found survey', objSurvey);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveysCtrl.findOneByAssignedUserId = async (req, res) => {
    try {
        const { assignedUserId } = req.params;
        const objSurvey = await surveyService.findOneByAssignedUserId(assignedUserId, req.query);
        if (!objSurvey) {
            util.setError(404, `Cannot find survey with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found survey', objSurvey);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



surveysCtrl.updateSurveyById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurvey = await surveyService.updateSurveyById(id, req.body);
            if (!objSurvey) {
                util.setError(404, `Cannot find survey with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Survey updated', objSurvey);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveysCtrl.updateSurveyByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurvey = await surveyService.updateSurveyByDeleted(deleted, req.body);
            if (!objSurvey) {
                util.setError(404, `Cannot find survey with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Survey updated', objSurvey);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveysCtrl.updateSurveyByName = async (req, res) => {
     const { name } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurvey = await surveyService.updateSurveyByName(name, req.body);
            if (!objSurvey) {
                util.setError(404, `Cannot find survey with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Survey updated', objSurvey);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveysCtrl.updateSurveyByStatus = async (req, res) => {
     const { status } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurvey = await surveyService.updateSurveyByStatus(status, req.body);
            if (!objSurvey) {
                util.setError(404, `Cannot find survey with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Survey updated', objSurvey);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveysCtrl.updateSurveyBySubmitText = async (req, res) => {
     const { submitText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurvey = await surveyService.updateSurveyBySubmitText(submitText, req.body);
            if (!objSurvey) {
                util.setError(404, `Cannot find survey with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Survey updated', objSurvey);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveysCtrl.updateSurveyBySatisfiedText = async (req, res) => {
     const { satisfiedText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurvey = await surveyService.updateSurveyBySatisfiedText(satisfiedText, req.body);
            if (!objSurvey) {
                util.setError(404, `Cannot find survey with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Survey updated', objSurvey);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveysCtrl.updateSurveyByNeitherText = async (req, res) => {
     const { neitherText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurvey = await surveyService.updateSurveyByNeitherText(neitherText, req.body);
            if (!objSurvey) {
                util.setError(404, `Cannot find survey with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Survey updated', objSurvey);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveysCtrl.updateSurveyByDissatisfiedText = async (req, res) => {
     const { dissatisfiedText } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurvey = await surveyService.updateSurveyByDissatisfiedText(dissatisfiedText, req.body);
            if (!objSurvey) {
                util.setError(404, `Cannot find survey with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Survey updated', objSurvey);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveysCtrl.updateSurveyByDescription = async (req, res) => {
     const { description } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurvey = await surveyService.updateSurveyByDescription(description, req.body);
            if (!objSurvey) {
                util.setError(404, `Cannot find survey with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Survey updated', objSurvey);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveysCtrl.updateSurveyByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurvey = await surveyService.updateSurveyByDateEntered(dateEntered, req.body);
            if (!objSurvey) {
                util.setError(404, `Cannot find survey with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Survey updated', objSurvey);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveysCtrl.updateSurveyByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurvey = await surveyService.updateSurveyByDateModified(dateModified, req.body);
            if (!objSurvey) {
                util.setError(404, `Cannot find survey with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Survey updated', objSurvey);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveysCtrl.updateSurveyByModifiedUserId = async (req, res) => {
     const { modifiedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurvey = await surveyService.updateSurveyByModifiedUserId(modifiedUserId, req.body);
            if (!objSurvey) {
                util.setError(404, `Cannot find survey with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Survey updated', objSurvey);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveysCtrl.updateSurveyByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurvey = await surveyService.updateSurveyByCreatedBy(createdBy, req.body);
            if (!objSurvey) {
                util.setError(404, `Cannot find survey with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Survey updated', objSurvey);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveysCtrl.updateSurveyByAssignedUserId = async (req, res) => {
     const { assignedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurvey = await surveyService.updateSurveyByAssignedUserId(assignedUserId, req.body);
            if (!objSurvey) {
                util.setError(404, `Cannot find survey with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Survey updated', objSurvey);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = surveysCtrl;
//</es-section>
