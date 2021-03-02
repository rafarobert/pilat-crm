/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:13 GMT-0400 (Bolivia Time)
 * Time: 14:0:13
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:13 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:13
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const aorScheduledReportService = require('../services/aor_scheduled_reports.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const aorScheduledReportsCtrl = {};
aorScheduledReportsCtrl.service = aorScheduledReportService;


aorScheduledReportsCtrl.getAllAorScheduledReports = async (req, res) => {
    try {
        const objAorScheduledReports = await aorScheduledReportService.getAllAorScheduledReports(req.query);
        if (objAorScheduledReports.length > 0) {
            util.setSuccess(200, 'AorScheduledReports retrieved', objAorScheduledReports);
        } else {
            util.setSuccess(200, 'No aorScheduledReport found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aorScheduledReportsCtrl.getAAorScheduledReport = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAorScheduledReport = await aorScheduledReportService.getAAorScheduledReport(id, req.query);
        if (!objAorScheduledReport) {
            util.setError(404, `Cannot find aorScheduledReport with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found aorScheduledReport', objAorScheduledReport);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aorScheduledReportsCtrl.addAorScheduledReport = async (req, res) => {
    try {
        const objAorScheduledReport = await aorScheduledReportService.addAorScheduledReport(req.body);
        util.setSuccess(201, 'AorScheduledReport Added!', objAorScheduledReport);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aorScheduledReportsCtrl.updateAorScheduledReport = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAorScheduledReport = await aorScheduledReportService.updateAorScheduledReport(id, req.body);
        if (!objAorScheduledReport) {
            util.setError(404, `Cannot find aorScheduledReport with the id: ${id}`);
        } else {
            util.setSuccess(200, 'AorScheduledReport updated', objAorScheduledReport);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

aorScheduledReportsCtrl.deleteAorScheduledReport = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objAorScheduledReport = await aorScheduledReportService.deleteAorScheduledReport(id);
        if (objAorScheduledReport) {
            util.setSuccess(200, 'AorScheduledReport deleted', objAorScheduledReport);
        } else {
            util.setError(404, `AorScheduledReport with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



aorScheduledReportsCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objAorScheduledReport = await aorScheduledReportService.findOneById(id, req.query);
        if (!objAorScheduledReport) {
            util.setError(404, `Cannot find aorScheduledReport with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aorScheduledReport', objAorScheduledReport);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aorScheduledReportsCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objAorScheduledReport = await aorScheduledReportService.findOneByDeleted(deleted, req.query);
        if (!objAorScheduledReport) {
            util.setError(404, `Cannot find aorScheduledReport with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aorScheduledReport', objAorScheduledReport);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aorScheduledReportsCtrl.findOneByName = async (req, res) => {
    try {
        const { name } = req.params;
        const objAorScheduledReport = await aorScheduledReportService.findOneByName(name, req.query);
        if (!objAorScheduledReport) {
            util.setError(404, `Cannot find aorScheduledReport with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aorScheduledReport', objAorScheduledReport);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aorScheduledReportsCtrl.findOneBySchedule = async (req, res) => {
    try {
        const { schedule } = req.params;
        const objAorScheduledReport = await aorScheduledReportService.findOneBySchedule(schedule, req.query);
        if (!objAorScheduledReport) {
            util.setError(404, `Cannot find aorScheduledReport with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aorScheduledReport', objAorScheduledReport);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aorScheduledReportsCtrl.findOneByStatus = async (req, res) => {
    try {
        const { status } = req.params;
        const objAorScheduledReport = await aorScheduledReportService.findOneByStatus(status, req.query);
        if (!objAorScheduledReport) {
            util.setError(404, `Cannot find aorScheduledReport with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aorScheduledReport', objAorScheduledReport);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aorScheduledReportsCtrl.findOneByDescription = async (req, res) => {
    try {
        const { description } = req.params;
        const objAorScheduledReport = await aorScheduledReportService.findOneByDescription(description, req.query);
        if (!objAorScheduledReport) {
            util.setError(404, `Cannot find aorScheduledReport with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aorScheduledReport', objAorScheduledReport);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aorScheduledReportsCtrl.findOneByEmailRecipients = async (req, res) => {
    try {
        const { emailRecipients } = req.params;
        const objAorScheduledReport = await aorScheduledReportService.findOneByEmailRecipients(emailRecipients, req.query);
        if (!objAorScheduledReport) {
            util.setError(404, `Cannot find aorScheduledReport with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aorScheduledReport', objAorScheduledReport);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aorScheduledReportsCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objAorScheduledReport = await aorScheduledReportService.findOneByDateEntered(dateEntered, req.query);
        if (!objAorScheduledReport) {
            util.setError(404, `Cannot find aorScheduledReport with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aorScheduledReport', objAorScheduledReport);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aorScheduledReportsCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objAorScheduledReport = await aorScheduledReportService.findOneByDateModified(dateModified, req.query);
        if (!objAorScheduledReport) {
            util.setError(404, `Cannot find aorScheduledReport with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aorScheduledReport', objAorScheduledReport);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aorScheduledReportsCtrl.findOneByLastRun = async (req, res) => {
    try {
        const { lastRun } = req.params;
        const objAorScheduledReport = await aorScheduledReportService.findOneByLastRun(lastRun, req.query);
        if (!objAorScheduledReport) {
            util.setError(404, `Cannot find aorScheduledReport with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aorScheduledReport', objAorScheduledReport);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aorScheduledReportsCtrl.findOneByModifiedUserId = async (req, res) => {
    try {
        const { modifiedUserId } = req.params;
        const objAorScheduledReport = await aorScheduledReportService.findOneByModifiedUserId(modifiedUserId, req.query);
        if (!objAorScheduledReport) {
            util.setError(404, `Cannot find aorScheduledReport with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aorScheduledReport', objAorScheduledReport);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aorScheduledReportsCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objAorScheduledReport = await aorScheduledReportService.findOneByCreatedBy(createdBy, req.query);
        if (!objAorScheduledReport) {
            util.setError(404, `Cannot find aorScheduledReport with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aorScheduledReport', objAorScheduledReport);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aorScheduledReportsCtrl.findOneByAorReportId = async (req, res) => {
    try {
        const { aorReportId } = req.params;
        const objAorScheduledReport = await aorScheduledReportService.findOneByAorReportId(aorReportId, req.query);
        if (!objAorScheduledReport) {
            util.setError(404, `Cannot find aorScheduledReport with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aorScheduledReport', objAorScheduledReport);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



aorScheduledReportsCtrl.updateAorScheduledReportById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAorScheduledReport = await aorScheduledReportService.updateAorScheduledReportById(id, req.body);
            if (!objAorScheduledReport) {
                util.setError(404, `Cannot find aorScheduledReport with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AorScheduledReport updated', objAorScheduledReport);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aorScheduledReportsCtrl.updateAorScheduledReportByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAorScheduledReport = await aorScheduledReportService.updateAorScheduledReportByDeleted(deleted, req.body);
            if (!objAorScheduledReport) {
                util.setError(404, `Cannot find aorScheduledReport with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AorScheduledReport updated', objAorScheduledReport);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aorScheduledReportsCtrl.updateAorScheduledReportByName = async (req, res) => {
     const { name } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAorScheduledReport = await aorScheduledReportService.updateAorScheduledReportByName(name, req.body);
            if (!objAorScheduledReport) {
                util.setError(404, `Cannot find aorScheduledReport with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AorScheduledReport updated', objAorScheduledReport);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aorScheduledReportsCtrl.updateAorScheduledReportBySchedule = async (req, res) => {
     const { schedule } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAorScheduledReport = await aorScheduledReportService.updateAorScheduledReportBySchedule(schedule, req.body);
            if (!objAorScheduledReport) {
                util.setError(404, `Cannot find aorScheduledReport with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AorScheduledReport updated', objAorScheduledReport);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aorScheduledReportsCtrl.updateAorScheduledReportByStatus = async (req, res) => {
     const { status } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAorScheduledReport = await aorScheduledReportService.updateAorScheduledReportByStatus(status, req.body);
            if (!objAorScheduledReport) {
                util.setError(404, `Cannot find aorScheduledReport with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AorScheduledReport updated', objAorScheduledReport);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aorScheduledReportsCtrl.updateAorScheduledReportByDescription = async (req, res) => {
     const { description } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAorScheduledReport = await aorScheduledReportService.updateAorScheduledReportByDescription(description, req.body);
            if (!objAorScheduledReport) {
                util.setError(404, `Cannot find aorScheduledReport with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AorScheduledReport updated', objAorScheduledReport);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aorScheduledReportsCtrl.updateAorScheduledReportByEmailRecipients = async (req, res) => {
     const { emailRecipients } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAorScheduledReport = await aorScheduledReportService.updateAorScheduledReportByEmailRecipients(emailRecipients, req.body);
            if (!objAorScheduledReport) {
                util.setError(404, `Cannot find aorScheduledReport with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AorScheduledReport updated', objAorScheduledReport);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aorScheduledReportsCtrl.updateAorScheduledReportByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAorScheduledReport = await aorScheduledReportService.updateAorScheduledReportByDateEntered(dateEntered, req.body);
            if (!objAorScheduledReport) {
                util.setError(404, `Cannot find aorScheduledReport with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AorScheduledReport updated', objAorScheduledReport);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aorScheduledReportsCtrl.updateAorScheduledReportByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAorScheduledReport = await aorScheduledReportService.updateAorScheduledReportByDateModified(dateModified, req.body);
            if (!objAorScheduledReport) {
                util.setError(404, `Cannot find aorScheduledReport with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AorScheduledReport updated', objAorScheduledReport);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aorScheduledReportsCtrl.updateAorScheduledReportByLastRun = async (req, res) => {
     const { lastRun } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAorScheduledReport = await aorScheduledReportService.updateAorScheduledReportByLastRun(lastRun, req.body);
            if (!objAorScheduledReport) {
                util.setError(404, `Cannot find aorScheduledReport with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AorScheduledReport updated', objAorScheduledReport);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aorScheduledReportsCtrl.updateAorScheduledReportByModifiedUserId = async (req, res) => {
     const { modifiedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAorScheduledReport = await aorScheduledReportService.updateAorScheduledReportByModifiedUserId(modifiedUserId, req.body);
            if (!objAorScheduledReport) {
                util.setError(404, `Cannot find aorScheduledReport with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AorScheduledReport updated', objAorScheduledReport);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aorScheduledReportsCtrl.updateAorScheduledReportByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAorScheduledReport = await aorScheduledReportService.updateAorScheduledReportByCreatedBy(createdBy, req.body);
            if (!objAorScheduledReport) {
                util.setError(404, `Cannot find aorScheduledReport with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AorScheduledReport updated', objAorScheduledReport);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aorScheduledReportsCtrl.updateAorScheduledReportByAorReportId = async (req, res) => {
     const { aorReportId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAorScheduledReport = await aorScheduledReportService.updateAorScheduledReportByAorReportId(aorReportId, req.body);
            if (!objAorScheduledReport) {
                util.setError(404, `Cannot find aorScheduledReport with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AorScheduledReport updated', objAorScheduledReport);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = aorScheduledReportsCtrl;
//</es-section>
