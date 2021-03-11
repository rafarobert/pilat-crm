/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:46 GMT-0400 (Bolivia Time)
 * Time: 14:57:46
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:46 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:46
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const models = require('../../express');
const surveyquestionoptionSurveyquestionresponseService = require('../services/surveyquestionoptions_surveyquestionresponses.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const surveyquestionoptionsSurveyquestionresponsesCtrl = {};
surveyquestionoptionsSurveyquestionresponsesCtrl.service = surveyquestionoptionSurveyquestionresponseService;


surveyquestionoptionsSurveyquestionresponsesCtrl.getAllSurveyquestionoptionsSurveyquestionresponses = async (req, res) => {
    try {
        const { length } = req.body;
        const { start } = req.body;
        const [column, dir] = util.getOrderByColumnDirection(models.sequelize.surveyquestionoptionsSurveyquestionresponses.rawAttributes,req.body);
        req.query.limit = length ? length : req.query.limit;
        req.query.offset = start ? start : req.query.offset;
        req.query.order = column && dir ? [[column,dir]] : req.query.order;

        const objSurveyquestionoptionsSurveyquestionresponses = await surveyquestionoptionSurveyquestionresponseService.getAllSurveyquestionoptionsSurveyquestionresponses(req.query);
        if (objSurveyquestionoptionsSurveyquestionresponses && objSurveyquestionoptionsSurveyquestionresponses.rows && objSurveyquestionoptionsSurveyquestionresponses.count) {
            util.setSuccess(200, 'SurveyquestionoptionsSurveyquestionresponses retrieved', objSurveyquestionoptionsSurveyquestionresponses.rows, objSurveyquestionoptionsSurveyquestionresponses.count, req.query.limit, req.query.offset);
        } else {
            util.setSuccess(200, 'No surveyquestionoptionSurveyquestionresponse found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionoptionsSurveyquestionresponsesCtrl.getASurveyquestionoptionSurveyquestionresponse = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objSurveyquestionoptionSurveyquestionresponse = await surveyquestionoptionSurveyquestionresponseService.getASurveyquestionoptionSurveyquestionresponse(id, req.query);
        if (!objSurveyquestionoptionSurveyquestionresponse) {
            util.setError(404, `Cannot find surveyquestionoptionSurveyquestionresponse with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found surveyquestionoptionSurveyquestionresponse', objSurveyquestionoptionSurveyquestionresponse);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionoptionsSurveyquestionresponsesCtrl.addSurveyquestionoptionSurveyquestionresponse = async (req, res) => {
    try {
        const objSurveyquestionoptionSurveyquestionresponse = await surveyquestionoptionSurveyquestionresponseService.addSurveyquestionoptionSurveyquestionresponse(req.body);
        util.setSuccess(201, 'SurveyquestionoptionSurveyquestionresponse Added!', objSurveyquestionoptionSurveyquestionresponse);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionoptionsSurveyquestionresponsesCtrl.updateSurveyquestionoptionSurveyquestionresponse = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objSurveyquestionoptionSurveyquestionresponse = await surveyquestionoptionSurveyquestionresponseService.updateSurveyquestionoptionSurveyquestionresponse(id, req.body);
        if (!objSurveyquestionoptionSurveyquestionresponse) {
            util.setError(404, `Cannot find surveyquestionoptionSurveyquestionresponse with the id: ${id}`);
        } else {
            util.setSuccess(200, 'SurveyquestionoptionSurveyquestionresponse updated', objSurveyquestionoptionSurveyquestionresponse);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

surveyquestionoptionsSurveyquestionresponsesCtrl.deleteSurveyquestionoptionSurveyquestionresponse = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please provide a String value');
            return util.send(res);
        }
        const objSurveyquestionoptionSurveyquestionresponse = await surveyquestionoptionSurveyquestionresponseService.deleteSurveyquestionoptionSurveyquestionresponse(id);
        if (objSurveyquestionoptionSurveyquestionresponse) {
            util.setSuccess(200, 'SurveyquestionoptionSurveyquestionresponse deleted', objSurveyquestionoptionSurveyquestionresponse);
        } else {
            util.setError(404, `SurveyquestionoptionSurveyquestionresponse with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



surveyquestionoptionsSurveyquestionresponsesCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objSurveyquestionoptionSurveyquestionresponse = await surveyquestionoptionSurveyquestionresponseService.findOneById(id, req.query);
        if (!objSurveyquestionoptionSurveyquestionresponse) {
            util.setError(404, `Cannot find surveyquestionoptionSurveyquestionresponse with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyquestionoptionSurveyquestionresponse', objSurveyquestionoptionSurveyquestionresponse);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionoptionsSurveyquestionresponsesCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objSurveyquestionoptionSurveyquestionresponse = await surveyquestionoptionSurveyquestionresponseService.findOneByDeleted(deleted, req.query);
        if (!objSurveyquestionoptionSurveyquestionresponse) {
            util.setError(404, `Cannot find surveyquestionoptionSurveyquestionresponse with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyquestionoptionSurveyquestionresponse', objSurveyquestionoptionSurveyquestionresponse);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionoptionsSurveyquestionresponsesCtrl.findOneBySurveyq72c7optionsIda = async (req, res) => {
    try {
        const { surveyq72c7optionsIda } = req.params;
        const objSurveyquestionoptionSurveyquestionresponse = await surveyquestionoptionSurveyquestionresponseService.findOneBySurveyq72c7optionsIda(surveyq72c7optionsIda, req.query);
        if (!objSurveyquestionoptionSurveyquestionresponse) {
            util.setError(404, `Cannot find surveyquestionoptionSurveyquestionresponse with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyquestionoptionSurveyquestionresponse', objSurveyquestionoptionSurveyquestionresponse);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionoptionsSurveyquestionresponsesCtrl.findOneBySurveyq10d4sponsesIdb = async (req, res) => {
    try {
        const { surveyq10d4sponsesIdb } = req.params;
        const objSurveyquestionoptionSurveyquestionresponse = await surveyquestionoptionSurveyquestionresponseService.findOneBySurveyq10d4sponsesIdb(surveyq10d4sponsesIdb, req.query);
        if (!objSurveyquestionoptionSurveyquestionresponse) {
            util.setError(404, `Cannot find surveyquestionoptionSurveyquestionresponse with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyquestionoptionSurveyquestionresponse', objSurveyquestionoptionSurveyquestionresponse);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

surveyquestionoptionsSurveyquestionresponsesCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objSurveyquestionoptionSurveyquestionresponse = await surveyquestionoptionSurveyquestionresponseService.findOneByDateModified(dateModified, req.query);
        if (!objSurveyquestionoptionSurveyquestionresponse) {
            util.setError(404, `Cannot find surveyquestionoptionSurveyquestionresponse with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found surveyquestionoptionSurveyquestionresponse', objSurveyquestionoptionSurveyquestionresponse);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



surveyquestionoptionsSurveyquestionresponsesCtrl.updateSurveyquestionoptionSurveyquestionresponseById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objSurveyquestionoptionSurveyquestionresponse = await surveyquestionoptionSurveyquestionresponseService.updateSurveyquestionoptionSurveyquestionresponseById(id, req.body);
            if (!objSurveyquestionoptionSurveyquestionresponse) {
                util.setError(404, `Cannot find surveyquestionoptionSurveyquestionresponse with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SurveyquestionoptionSurveyquestionresponse updated', objSurveyquestionoptionSurveyquestionresponse);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyquestionoptionsSurveyquestionresponsesCtrl.updateSurveyquestionoptionSurveyquestionresponseByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objSurveyquestionoptionSurveyquestionresponse = await surveyquestionoptionSurveyquestionresponseService.updateSurveyquestionoptionSurveyquestionresponseByDeleted(deleted, req.body);
            if (!objSurveyquestionoptionSurveyquestionresponse) {
                util.setError(404, `Cannot find surveyquestionoptionSurveyquestionresponse with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SurveyquestionoptionSurveyquestionresponse updated', objSurveyquestionoptionSurveyquestionresponse);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyquestionoptionsSurveyquestionresponsesCtrl.updateSurveyquestionoptionSurveyquestionresponseBySurveyq72c7optionsIda = async (req, res) => {
     const { surveyq72c7optionsIda } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objSurveyquestionoptionSurveyquestionresponse = await surveyquestionoptionSurveyquestionresponseService.updateSurveyquestionoptionSurveyquestionresponseBySurveyq72c7optionsIda(surveyq72c7optionsIda, req.body);
            if (!objSurveyquestionoptionSurveyquestionresponse) {
                util.setError(404, `Cannot find surveyquestionoptionSurveyquestionresponse with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SurveyquestionoptionSurveyquestionresponse updated', objSurveyquestionoptionSurveyquestionresponse);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyquestionoptionsSurveyquestionresponsesCtrl.updateSurveyquestionoptionSurveyquestionresponseBySurveyq10d4sponsesIdb = async (req, res) => {
     const { surveyq10d4sponsesIdb } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objSurveyquestionoptionSurveyquestionresponse = await surveyquestionoptionSurveyquestionresponseService.updateSurveyquestionoptionSurveyquestionresponseBySurveyq10d4sponsesIdb(surveyq10d4sponsesIdb, req.body);
            if (!objSurveyquestionoptionSurveyquestionresponse) {
                util.setError(404, `Cannot find surveyquestionoptionSurveyquestionresponse with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SurveyquestionoptionSurveyquestionresponse updated', objSurveyquestionoptionSurveyquestionresponse);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

surveyquestionoptionsSurveyquestionresponsesCtrl.updateSurveyquestionoptionSurveyquestionresponseByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objSurveyquestionoptionSurveyquestionresponse = await surveyquestionoptionSurveyquestionresponseService.updateSurveyquestionoptionSurveyquestionresponseByDateModified(dateModified, req.body);
            if (!objSurveyquestionoptionSurveyquestionresponse) {
                util.setError(404, `Cannot find surveyquestionoptionSurveyquestionresponse with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SurveyquestionoptionSurveyquestionresponse updated', objSurveyquestionoptionSurveyquestionresponse);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = surveyquestionoptionsSurveyquestionresponsesCtrl;
//</es-section>
