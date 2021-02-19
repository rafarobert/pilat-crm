/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:35:48 GMT-0400 (Bolivia Time)
 * Time: 18:35:48
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:35:48 GMT-0400 (Bolivia Time)
 * Last time updated: 18:35:48
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const aorChartService = require('../services/aor_charts.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const aorChartsCtrl = {};
aorChartsCtrl.service = aorChartService;


aorChartsCtrl.getAllAorCharts = async (req, res) => {
    try {
        const objAorCharts = await aorChartService.getAllAorCharts(req.query);
        if (objAorCharts.length > 0) {
            util.setSuccess(200, 'AorCharts retrieved', objAorCharts);
        } else {
            util.setSuccess(200, 'No aorChart found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aorChartsCtrl.getAAorChart = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAorChart = await aorChartService.getAAorChart(id, req.query);
        if (!objAorChart) {
            util.setError(404, `Cannot find aorChart with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found aorChart', objAorChart);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aorChartsCtrl.addAorChart = async (req, res) => {
    try {
        const objAorChart = await aorChartService.addAorChart(req.body);
        util.setSuccess(201, 'AorChart Added!', objAorChart);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aorChartsCtrl.updateAorChart = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAorChart = await aorChartService.updateAorChart(id, req.body);
        if (!objAorChart) {
            util.setError(404, `Cannot find aorChart with the id: ${id}`);
        } else {
            util.setSuccess(200, 'AorChart updated', objAorChart);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

aorChartsCtrl.deleteAorChart = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objAorChart = await aorChartService.deleteAorChart(id);
        if (objAorChart) {
            util.setSuccess(200, 'AorChart deleted', objAorChart);
        } else {
            util.setError(404, `AorChart with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



aorChartsCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objAorChart = await aorChartService.findOneById(id, req.query);
        if (!objAorChart) {
            util.setError(404, `Cannot find aorChart with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aorChart', objAorChart);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aorChartsCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objAorChart = await aorChartService.findOneByDeleted(deleted, req.query);
        if (!objAorChart) {
            util.setError(404, `Cannot find aorChart with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aorChart', objAorChart);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aorChartsCtrl.findOneByXField = async (req, res) => {
    try {
        const { xField } = req.params;
        const objAorChart = await aorChartService.findOneByXField(xField, req.query);
        if (!objAorChart) {
            util.setError(404, `Cannot find aorChart with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aorChart', objAorChart);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aorChartsCtrl.findOneByYField = async (req, res) => {
    try {
        const { yField } = req.params;
        const objAorChart = await aorChartService.findOneByYField(yField, req.query);
        if (!objAorChart) {
            util.setError(404, `Cannot find aorChart with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aorChart', objAorChart);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aorChartsCtrl.findOneByName = async (req, res) => {
    try {
        const { name } = req.params;
        const objAorChart = await aorChartService.findOneByName(name, req.query);
        if (!objAorChart) {
            util.setError(404, `Cannot find aorChart with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aorChart', objAorChart);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aorChartsCtrl.findOneByType = async (req, res) => {
    try {
        const { type } = req.params;
        const objAorChart = await aorChartService.findOneByType(type, req.query);
        if (!objAorChart) {
            util.setError(404, `Cannot find aorChart with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aorChart', objAorChart);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aorChartsCtrl.findOneByDescription = async (req, res) => {
    try {
        const { description } = req.params;
        const objAorChart = await aorChartService.findOneByDescription(description, req.query);
        if (!objAorChart) {
            util.setError(404, `Cannot find aorChart with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aorChart', objAorChart);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aorChartsCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objAorChart = await aorChartService.findOneByDateEntered(dateEntered, req.query);
        if (!objAorChart) {
            util.setError(404, `Cannot find aorChart with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aorChart', objAorChart);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aorChartsCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objAorChart = await aorChartService.findOneByDateModified(dateModified, req.query);
        if (!objAorChart) {
            util.setError(404, `Cannot find aorChart with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aorChart', objAorChart);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aorChartsCtrl.findOneByModifiedUserId = async (req, res) => {
    try {
        const { modifiedUserId } = req.params;
        const objAorChart = await aorChartService.findOneByModifiedUserId(modifiedUserId, req.query);
        if (!objAorChart) {
            util.setError(404, `Cannot find aorChart with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aorChart', objAorChart);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aorChartsCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objAorChart = await aorChartService.findOneByCreatedBy(createdBy, req.query);
        if (!objAorChart) {
            util.setError(404, `Cannot find aorChart with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aorChart', objAorChart);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aorChartsCtrl.findOneByAorReportId = async (req, res) => {
    try {
        const { aorReportId } = req.params;
        const objAorChart = await aorChartService.findOneByAorReportId(aorReportId, req.query);
        if (!objAorChart) {
            util.setError(404, `Cannot find aorChart with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aorChart', objAorChart);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



aorChartsCtrl.updateAorChartById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAorChart = await aorChartService.updateAorChartById(id, req.body);
            if (!objAorChart) {
                util.setError(404, `Cannot find aorChart with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AorChart updated', objAorChart);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aorChartsCtrl.updateAorChartByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAorChart = await aorChartService.updateAorChartByDeleted(deleted, req.body);
            if (!objAorChart) {
                util.setError(404, `Cannot find aorChart with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AorChart updated', objAorChart);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aorChartsCtrl.updateAorChartByXField = async (req, res) => {
     const { xField } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAorChart = await aorChartService.updateAorChartByXField(xField, req.body);
            if (!objAorChart) {
                util.setError(404, `Cannot find aorChart with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AorChart updated', objAorChart);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aorChartsCtrl.updateAorChartByYField = async (req, res) => {
     const { yField } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAorChart = await aorChartService.updateAorChartByYField(yField, req.body);
            if (!objAorChart) {
                util.setError(404, `Cannot find aorChart with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AorChart updated', objAorChart);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aorChartsCtrl.updateAorChartByName = async (req, res) => {
     const { name } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAorChart = await aorChartService.updateAorChartByName(name, req.body);
            if (!objAorChart) {
                util.setError(404, `Cannot find aorChart with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AorChart updated', objAorChart);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aorChartsCtrl.updateAorChartByType = async (req, res) => {
     const { type } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAorChart = await aorChartService.updateAorChartByType(type, req.body);
            if (!objAorChart) {
                util.setError(404, `Cannot find aorChart with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AorChart updated', objAorChart);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aorChartsCtrl.updateAorChartByDescription = async (req, res) => {
     const { description } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAorChart = await aorChartService.updateAorChartByDescription(description, req.body);
            if (!objAorChart) {
                util.setError(404, `Cannot find aorChart with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AorChart updated', objAorChart);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aorChartsCtrl.updateAorChartByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAorChart = await aorChartService.updateAorChartByDateEntered(dateEntered, req.body);
            if (!objAorChart) {
                util.setError(404, `Cannot find aorChart with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AorChart updated', objAorChart);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aorChartsCtrl.updateAorChartByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAorChart = await aorChartService.updateAorChartByDateModified(dateModified, req.body);
            if (!objAorChart) {
                util.setError(404, `Cannot find aorChart with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AorChart updated', objAorChart);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aorChartsCtrl.updateAorChartByModifiedUserId = async (req, res) => {
     const { modifiedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAorChart = await aorChartService.updateAorChartByModifiedUserId(modifiedUserId, req.body);
            if (!objAorChart) {
                util.setError(404, `Cannot find aorChart with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AorChart updated', objAorChart);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aorChartsCtrl.updateAorChartByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAorChart = await aorChartService.updateAorChartByCreatedBy(createdBy, req.body);
            if (!objAorChart) {
                util.setError(404, `Cannot find aorChart with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AorChart updated', objAorChart);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aorChartsCtrl.updateAorChartByAorReportId = async (req, res) => {
     const { aorReportId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAorChart = await aorChartService.updateAorChartByAorReportId(aorReportId, req.body);
            if (!objAorChart) {
                util.setError(404, `Cannot find aorChart with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AorChart updated', objAorChart);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = aorChartsCtrl;
//</es-section>
