/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:38:51 GMT-0400 (Bolivia Time)
 * Time: 18:38:51
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:38:51 GMT-0400 (Bolivia Time)
 * Last time updated: 18:38:51
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const surveyresponseService = require('../services/surveyresponses.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const surveyresponsesCtrl = {};
surveyresponsesCtrl.service = surveyresponseService;


surveyresponsesCtrl.getAllSurveyresponses = async (req, res) => {
    try {
        const objSurveyresponses = await surveyresponseService.getAllSurveyresponses(req.query);
        if (objSurveyresponses.length > 0) {
            util.setSuccess(200, 'Surveyresponses retrieved', objSurveyresponses);
        } else {
            util.setSuccess(200, 'No surveyresponse found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyresponsesCtrl.getASurveyresponse = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objSurveyresponse = await surveyresponseService.getASurveyresponse(id, req.query);
        if (!objSurveyresponse) {
            util.setError(404, `Cannot find surveyresponse with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found surveyresponse', objSurveyresponse);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyresponsesCtrl.addSurveyresponse = async (req, res) => {
    try {
        const objSurveyresponse = await surveyresponseService.addSurveyresponse(req.body);
        util.setSuccess(201, 'Surveyresponse Added!', objSurveyresponse);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyresponsesCtrl.updateSurveyresponse = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objSurveyresponse = await surveyresponseService.updateSurveyresponse(id, req.body);
        if (!objSurveyresponse) {
            util.setError(404, `Cannot find surveyresponse with the id: ${id}`);
        } else {
            util.setSuccess(200, 'Surveyresponse updated', objSurveyresponse);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

surveyresponsesCtrl.deleteSurveyresponse = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objSurveyresponse = await surveyresponseService.deleteSurveyresponse(id);
        if (objSurveyresponse) {
            util.setSuccess(200, 'Surveyresponse deleted', objSurveyresponse);
        } else {
            util.setError(404, `Surveyresponse with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



surveyresponsesCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objSurveyresponse = await surveyresponseService.findOneById(id, req.query);
        if (!objSurveyresponse) {
            util.setError(404, `Cannot find surveyresponse with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyresponse', objSurveyresponse);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyresponsesCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objSurveyresponse = await surveyresponseService.findOneByDeleted(deleted, req.query);
        if (!objSurveyresponse) {
            util.setError(404, `Cannot find surveyresponse with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyresponse', objSurveyresponse);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyresponsesCtrl.findOneByEmailResponseSent = async (req, res) => {
    try {
        const { emailResponseSent } = req.params;
        const objSurveyresponse = await surveyresponseService.findOneByEmailResponseSent(emailResponseSent, req.query);
        if (!objSurveyresponse) {
            util.setError(404, `Cannot find surveyresponse with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyresponse', objSurveyresponse);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyresponsesCtrl.findOneByHappiness = async (req, res) => {
    try {
        const { happiness } = req.params;
        const objSurveyresponse = await surveyresponseService.findOneByHappiness(happiness, req.query);
        if (!objSurveyresponse) {
            util.setError(404, `Cannot find surveyresponse with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyresponse', objSurveyresponse);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyresponsesCtrl.findOneByName = async (req, res) => {
    try {
        const { name } = req.params;
        const objSurveyresponse = await surveyresponseService.findOneByName(name, req.query);
        if (!objSurveyresponse) {
            util.setError(404, `Cannot find surveyresponse with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyresponse', objSurveyresponse);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyresponsesCtrl.findOneByDescription = async (req, res) => {
    try {
        const { description } = req.params;
        const objSurveyresponse = await surveyresponseService.findOneByDescription(description, req.query);
        if (!objSurveyresponse) {
            util.setError(404, `Cannot find surveyresponse with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyresponse', objSurveyresponse);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyresponsesCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objSurveyresponse = await surveyresponseService.findOneByDateEntered(dateEntered, req.query);
        if (!objSurveyresponse) {
            util.setError(404, `Cannot find surveyresponse with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyresponse', objSurveyresponse);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyresponsesCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objSurveyresponse = await surveyresponseService.findOneByDateModified(dateModified, req.query);
        if (!objSurveyresponse) {
            util.setError(404, `Cannot find surveyresponse with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyresponse', objSurveyresponse);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyresponsesCtrl.findOneByModifiedUserId = async (req, res) => {
    try {
        const { modifiedUserId } = req.params;
        const objSurveyresponse = await surveyresponseService.findOneByModifiedUserId(modifiedUserId, req.query);
        if (!objSurveyresponse) {
            util.setError(404, `Cannot find surveyresponse with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyresponse', objSurveyresponse);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyresponsesCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objSurveyresponse = await surveyresponseService.findOneByCreatedBy(createdBy, req.query);
        if (!objSurveyresponse) {
            util.setError(404, `Cannot find surveyresponse with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyresponse', objSurveyresponse);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyresponsesCtrl.findOneByAssignedUserId = async (req, res) => {
    try {
        const { assignedUserId } = req.params;
        const objSurveyresponse = await surveyresponseService.findOneByAssignedUserId(assignedUserId, req.query);
        if (!objSurveyresponse) {
            util.setError(404, `Cannot find surveyresponse with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyresponse', objSurveyresponse);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyresponsesCtrl.findOneByAccountId = async (req, res) => {
    try {
        const { accountId } = req.params;
        const objSurveyresponse = await surveyresponseService.findOneByAccountId(accountId, req.query);
        if (!objSurveyresponse) {
            util.setError(404, `Cannot find surveyresponse with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyresponse', objSurveyresponse);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyresponsesCtrl.findOneByCampaignId = async (req, res) => {
    try {
        const { campaignId } = req.params;
        const objSurveyresponse = await surveyresponseService.findOneByCampaignId(campaignId, req.query);
        if (!objSurveyresponse) {
            util.setError(404, `Cannot find surveyresponse with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyresponse', objSurveyresponse);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyresponsesCtrl.findOneByContactId = async (req, res) => {
    try {
        const { contactId } = req.params;
        const objSurveyresponse = await surveyresponseService.findOneByContactId(contactId, req.query);
        if (!objSurveyresponse) {
            util.setError(404, `Cannot find surveyresponse with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyresponse', objSurveyresponse);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyresponsesCtrl.findOneBySurveyId = async (req, res) => {
    try {
        const { surveyId } = req.params;
        const objSurveyresponse = await surveyresponseService.findOneBySurveyId(surveyId, req.query);
        if (!objSurveyresponse) {
            util.setError(404, `Cannot find surveyresponse with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyresponse', objSurveyresponse);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



surveyresponsesCtrl.updateSurveyresponseById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyresponse = await surveyresponseService.updateSurveyresponseById(id, req.body);
            if (!objSurveyresponse) {
                util.setError(404, `Cannot find surveyresponse with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Surveyresponse updated', objSurveyresponse);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyresponsesCtrl.updateSurveyresponseByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyresponse = await surveyresponseService.updateSurveyresponseByDeleted(deleted, req.body);
            if (!objSurveyresponse) {
                util.setError(404, `Cannot find surveyresponse with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Surveyresponse updated', objSurveyresponse);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyresponsesCtrl.updateSurveyresponseByEmailResponseSent = async (req, res) => {
     const { emailResponseSent } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyresponse = await surveyresponseService.updateSurveyresponseByEmailResponseSent(emailResponseSent, req.body);
            if (!objSurveyresponse) {
                util.setError(404, `Cannot find surveyresponse with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Surveyresponse updated', objSurveyresponse);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyresponsesCtrl.updateSurveyresponseByHappiness = async (req, res) => {
     const { happiness } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyresponse = await surveyresponseService.updateSurveyresponseByHappiness(happiness, req.body);
            if (!objSurveyresponse) {
                util.setError(404, `Cannot find surveyresponse with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Surveyresponse updated', objSurveyresponse);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyresponsesCtrl.updateSurveyresponseByName = async (req, res) => {
     const { name } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyresponse = await surveyresponseService.updateSurveyresponseByName(name, req.body);
            if (!objSurveyresponse) {
                util.setError(404, `Cannot find surveyresponse with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Surveyresponse updated', objSurveyresponse);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyresponsesCtrl.updateSurveyresponseByDescription = async (req, res) => {
     const { description } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyresponse = await surveyresponseService.updateSurveyresponseByDescription(description, req.body);
            if (!objSurveyresponse) {
                util.setError(404, `Cannot find surveyresponse with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Surveyresponse updated', objSurveyresponse);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyresponsesCtrl.updateSurveyresponseByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyresponse = await surveyresponseService.updateSurveyresponseByDateEntered(dateEntered, req.body);
            if (!objSurveyresponse) {
                util.setError(404, `Cannot find surveyresponse with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Surveyresponse updated', objSurveyresponse);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyresponsesCtrl.updateSurveyresponseByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyresponse = await surveyresponseService.updateSurveyresponseByDateModified(dateModified, req.body);
            if (!objSurveyresponse) {
                util.setError(404, `Cannot find surveyresponse with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Surveyresponse updated', objSurveyresponse);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyresponsesCtrl.updateSurveyresponseByModifiedUserId = async (req, res) => {
     const { modifiedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyresponse = await surveyresponseService.updateSurveyresponseByModifiedUserId(modifiedUserId, req.body);
            if (!objSurveyresponse) {
                util.setError(404, `Cannot find surveyresponse with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Surveyresponse updated', objSurveyresponse);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyresponsesCtrl.updateSurveyresponseByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyresponse = await surveyresponseService.updateSurveyresponseByCreatedBy(createdBy, req.body);
            if (!objSurveyresponse) {
                util.setError(404, `Cannot find surveyresponse with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Surveyresponse updated', objSurveyresponse);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyresponsesCtrl.updateSurveyresponseByAssignedUserId = async (req, res) => {
     const { assignedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyresponse = await surveyresponseService.updateSurveyresponseByAssignedUserId(assignedUserId, req.body);
            if (!objSurveyresponse) {
                util.setError(404, `Cannot find surveyresponse with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Surveyresponse updated', objSurveyresponse);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyresponsesCtrl.updateSurveyresponseByAccountId = async (req, res) => {
     const { accountId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyresponse = await surveyresponseService.updateSurveyresponseByAccountId(accountId, req.body);
            if (!objSurveyresponse) {
                util.setError(404, `Cannot find surveyresponse with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Surveyresponse updated', objSurveyresponse);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyresponsesCtrl.updateSurveyresponseByCampaignId = async (req, res) => {
     const { campaignId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyresponse = await surveyresponseService.updateSurveyresponseByCampaignId(campaignId, req.body);
            if (!objSurveyresponse) {
                util.setError(404, `Cannot find surveyresponse with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Surveyresponse updated', objSurveyresponse);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyresponsesCtrl.updateSurveyresponseByContactId = async (req, res) => {
     const { contactId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyresponse = await surveyresponseService.updateSurveyresponseByContactId(contactId, req.body);
            if (!objSurveyresponse) {
                util.setError(404, `Cannot find surveyresponse with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Surveyresponse updated', objSurveyresponse);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyresponsesCtrl.updateSurveyresponseBySurveyId = async (req, res) => {
     const { surveyId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSurveyresponse = await surveyresponseService.updateSurveyresponseBySurveyId(surveyId, req.body);
            if (!objSurveyresponse) {
                util.setError(404, `Cannot find surveyresponse with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Surveyresponse updated', objSurveyresponse);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = surveyresponsesCtrl;
//</es-section>
