/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:38:45 GMT-0400 (Bolivia Time)
 * Time: 18:38:45
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:38:45 GMT-0400 (Bolivia Time)
 * Last time updated: 18:38:45
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const surveyquestionoptionService = require('../services/surveyquestionoptions.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const surveyquestionoptionsCtrl = {};
surveyquestionoptionsCtrl.service = surveyquestionoptionService;


surveyquestionoptionsCtrl.getAllSurveyquestionoptions = async (req, res) => {
    try {
        const objSurveyquestionoptions = await surveyquestionoptionService.getAllSurveyquestionoptions(req.query);
        if (objSurveyquestionoptions.length > 0) {
            util.setSuccess(200, 'Surveyquestionoptions retrieved', objSurveyquestionoptions);
        } else {
            util.setSuccess(200, 'No surveyquestionoption found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionoptionsCtrl.getASurveyquestionoption = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objSurveyquestionoption = await surveyquestionoptionService.getASurveyquestionoption(id, req.query);
        if (!objSurveyquestionoption) {
            util.setError(404, `Cannot find surveyquestionoption with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found surveyquestionoption', objSurveyquestionoption);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionoptionsCtrl.addSurveyquestionoption = async (req, res) => {
    try {
        const objSurveyquestionoption = await surveyquestionoptionService.addSurveyquestionoption(req.body);
        util.setSuccess(201, 'Surveyquestionoption Added!', objSurveyquestionoption);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionoptionsCtrl.updateSurveyquestionoption = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objSurveyquestionoption = await surveyquestionoptionService.updateSurveyquestionoption(id, req.body);
        if (!objSurveyquestionoption) {
            util.setError(404, `Cannot find surveyquestionoption with the id: ${id}`);
        } else {
            util.setSuccess(200, 'Surveyquestionoption updated', objSurveyquestionoption);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

surveyquestionoptionsCtrl.deleteSurveyquestionoption = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objSurveyquestionoption = await surveyquestionoptionService.deleteSurveyquestionoption(id);
        if (objSurveyquestionoption) {
            util.setSuccess(200, 'Surveyquestionoption deleted', objSurveyquestionoption);
        } else {
            util.setError(404, `Surveyquestionoption with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



surveyquestionoptionsCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objSurveyquestionoption = await surveyquestionoptionService.findOneById(id, req.query);
        if (!objSurveyquestionoption) {
            util.setError(404, `Cannot find surveyquestionoption with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyquestionoption', objSurveyquestionoption);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionoptionsCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objSurveyquestionoption = await surveyquestionoptionService.findOneByDeleted(deleted, req.query);
        if (!objSurveyquestionoption) {
            util.setError(404, `Cannot find surveyquestionoption with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyquestionoption', objSurveyquestionoption);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionoptionsCtrl.findOneBySortOrder = async (req, res) => {
    try {
        const { sortOrder } = req.params;
        const objSurveyquestionoption = await surveyquestionoptionService.findOneBySortOrder(sortOrder, req.query);
        if (!objSurveyquestionoption) {
            util.setError(404, `Cannot find surveyquestionoption with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyquestionoption', objSurveyquestionoption);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionoptionsCtrl.findOneByName = async (req, res) => {
    try {
        const { name } = req.params;
        const objSurveyquestionoption = await surveyquestionoptionService.findOneByName(name, req.query);
        if (!objSurveyquestionoption) {
            util.setError(404, `Cannot find surveyquestionoption with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyquestionoption', objSurveyquestionoption);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionoptionsCtrl.findOneByDescription = async (req, res) => {
    try {
        const { description } = req.params;
        const objSurveyquestionoption = await surveyquestionoptionService.findOneByDescription(description, req.query);
        if (!objSurveyquestionoption) {
            util.setError(404, `Cannot find surveyquestionoption with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyquestionoption', objSurveyquestionoption);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionoptionsCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objSurveyquestionoption = await surveyquestionoptionService.findOneByDateEntered(dateEntered, req.query);
        if (!objSurveyquestionoption) {
            util.setError(404, `Cannot find surveyquestionoption with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyquestionoption', objSurveyquestionoption);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionoptionsCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objSurveyquestionoption = await surveyquestionoptionService.findOneByDateModified(dateModified, req.query);
        if (!objSurveyquestionoption) {
            util.setError(404, `Cannot find surveyquestionoption with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyquestionoption', objSurveyquestionoption);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionoptionsCtrl.findOneByModifiedUserId = async (req, res) => {
    try {
        const { modifiedUserId } = req.params;
        const objSurveyquestionoption = await surveyquestionoptionService.findOneByModifiedUserId(modifiedUserId, req.query);
        if (!objSurveyquestionoption) {
            util.setError(404, `Cannot find surveyquestionoption with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyquestionoption', objSurveyquestionoption);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionoptionsCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objSurveyquestionoption = await surveyquestionoptionService.findOneByCreatedBy(createdBy, req.query);
        if (!objSurveyquestionoption) {
            util.setError(404, `Cannot find surveyquestionoption with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyquestionoption', objSurveyquestionoption);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionoptionsCtrl.findOneByAssignedUserId = async (req, res) => {
    try {
        const { assignedUserId } = req.params;
        const objSurveyquestionoption = await surveyquestionoptionService.findOneByAssignedUserId(assignedUserId, req.query);
        if (!objSurveyquestionoption) {
            util.setError(404, `Cannot find surveyquestionoption with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyquestionoption', objSurveyquestionoption);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionoptionsCtrl.findOneBySurveyQuestionId = async (req, res) => {
    try {
        const { surveyQuestionId } = req.params;
        const objSurveyquestionoption = await surveyquestionoptionService.findOneBySurveyQuestionId(surveyQuestionId, req.query);
        if (!objSurveyquestionoption) {
            util.setError(404, `Cannot find surveyquestionoption with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyquestionoption', objSurveyquestionoption);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



surveyquestionoptionsCtrl.updateSurveyquestionoptionById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyquestionoption = await surveyquestionoptionService.updateSurveyquestionoptionById(id, req.body);
            if (!objSurveyquestionoption) {
                util.setError(404, `Cannot find surveyquestionoption with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Surveyquestionoption updated', objSurveyquestionoption);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyquestionoptionsCtrl.updateSurveyquestionoptionByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyquestionoption = await surveyquestionoptionService.updateSurveyquestionoptionByDeleted(deleted, req.body);
            if (!objSurveyquestionoption) {
                util.setError(404, `Cannot find surveyquestionoption with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Surveyquestionoption updated', objSurveyquestionoption);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyquestionoptionsCtrl.updateSurveyquestionoptionBySortOrder = async (req, res) => {
     const { sortOrder } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyquestionoption = await surveyquestionoptionService.updateSurveyquestionoptionBySortOrder(sortOrder, req.body);
            if (!objSurveyquestionoption) {
                util.setError(404, `Cannot find surveyquestionoption with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Surveyquestionoption updated', objSurveyquestionoption);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyquestionoptionsCtrl.updateSurveyquestionoptionByName = async (req, res) => {
     const { name } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyquestionoption = await surveyquestionoptionService.updateSurveyquestionoptionByName(name, req.body);
            if (!objSurveyquestionoption) {
                util.setError(404, `Cannot find surveyquestionoption with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Surveyquestionoption updated', objSurveyquestionoption);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyquestionoptionsCtrl.updateSurveyquestionoptionByDescription = async (req, res) => {
     const { description } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyquestionoption = await surveyquestionoptionService.updateSurveyquestionoptionByDescription(description, req.body);
            if (!objSurveyquestionoption) {
                util.setError(404, `Cannot find surveyquestionoption with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Surveyquestionoption updated', objSurveyquestionoption);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyquestionoptionsCtrl.updateSurveyquestionoptionByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyquestionoption = await surveyquestionoptionService.updateSurveyquestionoptionByDateEntered(dateEntered, req.body);
            if (!objSurveyquestionoption) {
                util.setError(404, `Cannot find surveyquestionoption with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Surveyquestionoption updated', objSurveyquestionoption);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyquestionoptionsCtrl.updateSurveyquestionoptionByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyquestionoption = await surveyquestionoptionService.updateSurveyquestionoptionByDateModified(dateModified, req.body);
            if (!objSurveyquestionoption) {
                util.setError(404, `Cannot find surveyquestionoption with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Surveyquestionoption updated', objSurveyquestionoption);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyquestionoptionsCtrl.updateSurveyquestionoptionByModifiedUserId = async (req, res) => {
     const { modifiedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyquestionoption = await surveyquestionoptionService.updateSurveyquestionoptionByModifiedUserId(modifiedUserId, req.body);
            if (!objSurveyquestionoption) {
                util.setError(404, `Cannot find surveyquestionoption with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Surveyquestionoption updated', objSurveyquestionoption);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyquestionoptionsCtrl.updateSurveyquestionoptionByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyquestionoption = await surveyquestionoptionService.updateSurveyquestionoptionByCreatedBy(createdBy, req.body);
            if (!objSurveyquestionoption) {
                util.setError(404, `Cannot find surveyquestionoption with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Surveyquestionoption updated', objSurveyquestionoption);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyquestionoptionsCtrl.updateSurveyquestionoptionByAssignedUserId = async (req, res) => {
     const { assignedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyquestionoption = await surveyquestionoptionService.updateSurveyquestionoptionByAssignedUserId(assignedUserId, req.body);
            if (!objSurveyquestionoption) {
                util.setError(404, `Cannot find surveyquestionoption with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Surveyquestionoption updated', objSurveyquestionoption);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyquestionoptionsCtrl.updateSurveyquestionoptionBySurveyQuestionId = async (req, res) => {
     const { surveyQuestionId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyquestionoption = await surveyquestionoptionService.updateSurveyquestionoptionBySurveyQuestionId(surveyQuestionId, req.body);
            if (!objSurveyquestionoption) {
                util.setError(404, `Cannot find surveyquestionoption with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Surveyquestionoption updated', objSurveyquestionoption);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = surveyquestionoptionsCtrl;
//</es-section>
