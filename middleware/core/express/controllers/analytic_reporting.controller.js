/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:05 GMT-0400 (Bolivia Time)
 * Time: 14:0:5
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:05 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:5
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const analyticReportingService = require('../services/analytic_reporting.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const analyticReportingCtrl = {};
analyticReportingCtrl.service = analyticReportingService;


analyticReportingCtrl.getAllAnalyticReporting = async (req, res) => {
    try {
        const objAnalyticReporting = await analyticReportingService.getAllAnalyticReporting(req.query);
        if (objAnalyticReporting.length > 0) {
            util.setSuccess(200, 'AnalyticReporting retrieved', objAnalyticReporting);
        } else {
            util.setSuccess(200, 'No analyticReporting found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

analyticReportingCtrl.getAAnalyticReporting = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAnalyticReporting = await analyticReportingService.getAAnalyticReporting(id, req.query);
        if (!objAnalyticReporting) {
            util.setError(404, `Cannot find analyticReporting with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found analyticReporting', objAnalyticReporting);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

analyticReportingCtrl.addAnalyticReporting = async (req, res) => {
    try {
        const objAnalyticReporting = await analyticReportingService.addAnalyticReporting(req.body);
        util.setSuccess(201, 'AnalyticReporting Added!', objAnalyticReporting);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

analyticReportingCtrl.updateAnalyticReporting = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAnalyticReporting = await analyticReportingService.updateAnalyticReporting(id, req.body);
        if (!objAnalyticReporting) {
            util.setError(404, `Cannot find analyticReporting with the id: ${id}`);
        } else {
            util.setSuccess(200, 'AnalyticReporting updated', objAnalyticReporting);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

analyticReportingCtrl.deleteAnalyticReporting = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objAnalyticReporting = await analyticReportingService.deleteAnalyticReporting(id);
        if (objAnalyticReporting) {
            util.setSuccess(200, 'AnalyticReporting deleted', objAnalyticReporting);
        } else {
            util.setError(404, `AnalyticReporting with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



analyticReportingCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objAnalyticReporting = await analyticReportingService.findOneById(id, req.query);
        if (!objAnalyticReporting) {
            util.setError(404, `Cannot find analyticReporting with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found analyticReporting', objAnalyticReporting);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

analyticReportingCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objAnalyticReporting = await analyticReportingService.findOneByDeleted(deleted, req.query);
        if (!objAnalyticReporting) {
            util.setError(404, `Cannot find analyticReporting with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found analyticReporting', objAnalyticReporting);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

analyticReportingCtrl.findOneByName = async (req, res) => {
    try {
        const { name } = req.params;
        const objAnalyticReporting = await analyticReportingService.findOneByName(name, req.query);
        if (!objAnalyticReporting) {
            util.setError(404, `Cannot find analyticReporting with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found analyticReporting', objAnalyticReporting);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

analyticReportingCtrl.findOneByDescription = async (req, res) => {
    try {
        const { description } = req.params;
        const objAnalyticReporting = await analyticReportingService.findOneByDescription(description, req.query);
        if (!objAnalyticReporting) {
            util.setError(404, `Cannot find analyticReporting with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found analyticReporting', objAnalyticReporting);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

analyticReportingCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objAnalyticReporting = await analyticReportingService.findOneByDateEntered(dateEntered, req.query);
        if (!objAnalyticReporting) {
            util.setError(404, `Cannot find analyticReporting with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found analyticReporting', objAnalyticReporting);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

analyticReportingCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objAnalyticReporting = await analyticReportingService.findOneByDateModified(dateModified, req.query);
        if (!objAnalyticReporting) {
            util.setError(404, `Cannot find analyticReporting with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found analyticReporting', objAnalyticReporting);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

analyticReportingCtrl.findOneByModifiedUserId = async (req, res) => {
    try {
        const { modifiedUserId } = req.params;
        const objAnalyticReporting = await analyticReportingService.findOneByModifiedUserId(modifiedUserId, req.query);
        if (!objAnalyticReporting) {
            util.setError(404, `Cannot find analyticReporting with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found analyticReporting', objAnalyticReporting);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

analyticReportingCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objAnalyticReporting = await analyticReportingService.findOneByCreatedBy(createdBy, req.query);
        if (!objAnalyticReporting) {
            util.setError(404, `Cannot find analyticReporting with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found analyticReporting', objAnalyticReporting);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

analyticReportingCtrl.findOneByAssignedUserId = async (req, res) => {
    try {
        const { assignedUserId } = req.params;
        const objAnalyticReporting = await analyticReportingService.findOneByAssignedUserId(assignedUserId, req.query);
        if (!objAnalyticReporting) {
            util.setError(404, `Cannot find analyticReporting with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found analyticReporting', objAnalyticReporting);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



analyticReportingCtrl.updateAnalyticReportingById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAnalyticReporting = await analyticReportingService.updateAnalyticReportingById(id, req.body);
            if (!objAnalyticReporting) {
                util.setError(404, `Cannot find analyticReporting with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AnalyticReporting updated', objAnalyticReporting);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

analyticReportingCtrl.updateAnalyticReportingByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAnalyticReporting = await analyticReportingService.updateAnalyticReportingByDeleted(deleted, req.body);
            if (!objAnalyticReporting) {
                util.setError(404, `Cannot find analyticReporting with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AnalyticReporting updated', objAnalyticReporting);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

analyticReportingCtrl.updateAnalyticReportingByName = async (req, res) => {
     const { name } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAnalyticReporting = await analyticReportingService.updateAnalyticReportingByName(name, req.body);
            if (!objAnalyticReporting) {
                util.setError(404, `Cannot find analyticReporting with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AnalyticReporting updated', objAnalyticReporting);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

analyticReportingCtrl.updateAnalyticReportingByDescription = async (req, res) => {
     const { description } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAnalyticReporting = await analyticReportingService.updateAnalyticReportingByDescription(description, req.body);
            if (!objAnalyticReporting) {
                util.setError(404, `Cannot find analyticReporting with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AnalyticReporting updated', objAnalyticReporting);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

analyticReportingCtrl.updateAnalyticReportingByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAnalyticReporting = await analyticReportingService.updateAnalyticReportingByDateEntered(dateEntered, req.body);
            if (!objAnalyticReporting) {
                util.setError(404, `Cannot find analyticReporting with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AnalyticReporting updated', objAnalyticReporting);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

analyticReportingCtrl.updateAnalyticReportingByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAnalyticReporting = await analyticReportingService.updateAnalyticReportingByDateModified(dateModified, req.body);
            if (!objAnalyticReporting) {
                util.setError(404, `Cannot find analyticReporting with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AnalyticReporting updated', objAnalyticReporting);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

analyticReportingCtrl.updateAnalyticReportingByModifiedUserId = async (req, res) => {
     const { modifiedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAnalyticReporting = await analyticReportingService.updateAnalyticReportingByModifiedUserId(modifiedUserId, req.body);
            if (!objAnalyticReporting) {
                util.setError(404, `Cannot find analyticReporting with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AnalyticReporting updated', objAnalyticReporting);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

analyticReportingCtrl.updateAnalyticReportingByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAnalyticReporting = await analyticReportingService.updateAnalyticReportingByCreatedBy(createdBy, req.body);
            if (!objAnalyticReporting) {
                util.setError(404, `Cannot find analyticReporting with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AnalyticReporting updated', objAnalyticReporting);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

analyticReportingCtrl.updateAnalyticReportingByAssignedUserId = async (req, res) => {
     const { assignedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAnalyticReporting = await analyticReportingService.updateAnalyticReportingByAssignedUserId(assignedUserId, req.body);
            if (!objAnalyticReporting) {
                util.setError(404, `Cannot find analyticReporting with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AnalyticReporting updated', objAnalyticReporting);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = analyticReportingCtrl;
//</es-section>
