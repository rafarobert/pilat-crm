/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:35:53 GMT-0400 (Bolivia Time)
 * Time: 18:35:53
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:35:53 GMT-0400 (Bolivia Time)
 * Last time updated: 18:35:53
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const aorReportService = require('../services/aor_reports.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const aorReportsCtrl = {};
aorReportsCtrl.service = aorReportService;


aorReportsCtrl.getAllAorReports = async (req, res) => {
    try {
        const objAorReports = await aorReportService.getAllAorReports(req.query);
        if (objAorReports.length > 0) {
            util.setSuccess(200, 'AorReports retrieved', objAorReports);
        } else {
            util.setSuccess(200, 'No aorReport found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aorReportsCtrl.getAAorReport = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAorReport = await aorReportService.getAAorReport(id, req.query);
        if (!objAorReport) {
            util.setError(404, `Cannot find aorReport with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found aorReport', objAorReport);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aorReportsCtrl.addAorReport = async (req, res) => {
    try {
        const objAorReport = await aorReportService.addAorReport(req.body);
        util.setSuccess(201, 'AorReport Added!', objAorReport);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aorReportsCtrl.updateAorReport = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAorReport = await aorReportService.updateAorReport(id, req.body);
        if (!objAorReport) {
            util.setError(404, `Cannot find aorReport with the id: ${id}`);
        } else {
            util.setSuccess(200, 'AorReport updated', objAorReport);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

aorReportsCtrl.deleteAorReport = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objAorReport = await aorReportService.deleteAorReport(id);
        if (objAorReport) {
            util.setSuccess(200, 'AorReport deleted', objAorReport);
        } else {
            util.setError(404, `AorReport with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



aorReportsCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objAorReport = await aorReportService.findOneById(id, req.query);
        if (!objAorReport) {
            util.setError(404, `Cannot find aorReport with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aorReport', objAorReport);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aorReportsCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objAorReport = await aorReportService.findOneByDeleted(deleted, req.query);
        if (!objAorReport) {
            util.setError(404, `Cannot find aorReport with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aorReport', objAorReport);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aorReportsCtrl.findOneByGraphsPerRow = async (req, res) => {
    try {
        const { graphsPerRow } = req.params;
        const objAorReport = await aorReportService.findOneByGraphsPerRow(graphsPerRow, req.query);
        if (!objAorReport) {
            util.setError(404, `Cannot find aorReport with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aorReport', objAorReport);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aorReportsCtrl.findOneByName = async (req, res) => {
    try {
        const { name } = req.params;
        const objAorReport = await aorReportService.findOneByName(name, req.query);
        if (!objAorReport) {
            util.setError(404, `Cannot find aorReport with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aorReport', objAorReport);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aorReportsCtrl.findOneByReportModule = async (req, res) => {
    try {
        const { reportModule } = req.params;
        const objAorReport = await aorReportService.findOneByReportModule(reportModule, req.query);
        if (!objAorReport) {
            util.setError(404, `Cannot find aorReport with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aorReport', objAorReport);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aorReportsCtrl.findOneByDescription = async (req, res) => {
    try {
        const { description } = req.params;
        const objAorReport = await aorReportService.findOneByDescription(description, req.query);
        if (!objAorReport) {
            util.setError(404, `Cannot find aorReport with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aorReport', objAorReport);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aorReportsCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objAorReport = await aorReportService.findOneByDateEntered(dateEntered, req.query);
        if (!objAorReport) {
            util.setError(404, `Cannot find aorReport with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aorReport', objAorReport);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aorReportsCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objAorReport = await aorReportService.findOneByDateModified(dateModified, req.query);
        if (!objAorReport) {
            util.setError(404, `Cannot find aorReport with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aorReport', objAorReport);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aorReportsCtrl.findOneByModifiedUserId = async (req, res) => {
    try {
        const { modifiedUserId } = req.params;
        const objAorReport = await aorReportService.findOneByModifiedUserId(modifiedUserId, req.query);
        if (!objAorReport) {
            util.setError(404, `Cannot find aorReport with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aorReport', objAorReport);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aorReportsCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objAorReport = await aorReportService.findOneByCreatedBy(createdBy, req.query);
        if (!objAorReport) {
            util.setError(404, `Cannot find aorReport with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aorReport', objAorReport);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aorReportsCtrl.findOneByAssignedUserId = async (req, res) => {
    try {
        const { assignedUserId } = req.params;
        const objAorReport = await aorReportService.findOneByAssignedUserId(assignedUserId, req.query);
        if (!objAorReport) {
            util.setError(404, `Cannot find aorReport with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aorReport', objAorReport);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



aorReportsCtrl.updateAorReportById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAorReport = await aorReportService.updateAorReportById(id, req.body);
            if (!objAorReport) {
                util.setError(404, `Cannot find aorReport with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AorReport updated', objAorReport);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aorReportsCtrl.updateAorReportByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAorReport = await aorReportService.updateAorReportByDeleted(deleted, req.body);
            if (!objAorReport) {
                util.setError(404, `Cannot find aorReport with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AorReport updated', objAorReport);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aorReportsCtrl.updateAorReportByGraphsPerRow = async (req, res) => {
     const { graphsPerRow } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAorReport = await aorReportService.updateAorReportByGraphsPerRow(graphsPerRow, req.body);
            if (!objAorReport) {
                util.setError(404, `Cannot find aorReport with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AorReport updated', objAorReport);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aorReportsCtrl.updateAorReportByName = async (req, res) => {
     const { name } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAorReport = await aorReportService.updateAorReportByName(name, req.body);
            if (!objAorReport) {
                util.setError(404, `Cannot find aorReport with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AorReport updated', objAorReport);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aorReportsCtrl.updateAorReportByReportModule = async (req, res) => {
     const { reportModule } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAorReport = await aorReportService.updateAorReportByReportModule(reportModule, req.body);
            if (!objAorReport) {
                util.setError(404, `Cannot find aorReport with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AorReport updated', objAorReport);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aorReportsCtrl.updateAorReportByDescription = async (req, res) => {
     const { description } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAorReport = await aorReportService.updateAorReportByDescription(description, req.body);
            if (!objAorReport) {
                util.setError(404, `Cannot find aorReport with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AorReport updated', objAorReport);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aorReportsCtrl.updateAorReportByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAorReport = await aorReportService.updateAorReportByDateEntered(dateEntered, req.body);
            if (!objAorReport) {
                util.setError(404, `Cannot find aorReport with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AorReport updated', objAorReport);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aorReportsCtrl.updateAorReportByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAorReport = await aorReportService.updateAorReportByDateModified(dateModified, req.body);
            if (!objAorReport) {
                util.setError(404, `Cannot find aorReport with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AorReport updated', objAorReport);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aorReportsCtrl.updateAorReportByModifiedUserId = async (req, res) => {
     const { modifiedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAorReport = await aorReportService.updateAorReportByModifiedUserId(modifiedUserId, req.body);
            if (!objAorReport) {
                util.setError(404, `Cannot find aorReport with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AorReport updated', objAorReport);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aorReportsCtrl.updateAorReportByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAorReport = await aorReportService.updateAorReportByCreatedBy(createdBy, req.body);
            if (!objAorReport) {
                util.setError(404, `Cannot find aorReport with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AorReport updated', objAorReport);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aorReportsCtrl.updateAorReportByAssignedUserId = async (req, res) => {
     const { assignedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAorReport = await aorReportService.updateAorReportByAssignedUserId(assignedUserId, req.body);
            if (!objAorReport) {
                util.setError(404, `Cannot find aorReport with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AorReport updated', objAorReport);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = aorReportsCtrl;
//</es-section>
