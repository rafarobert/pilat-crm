/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:44:20 GMT-0400 (Bolivia Time)
 * Time: 4:44:20
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:44:20 GMT-0400 (Bolivia Time)
 * Last time updated: 4:44:20
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const trackerService = require('../services/tracker.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const trackerCtrl = {};
trackerCtrl.service = trackerService;


trackerCtrl.getAllTracker = async (req, res) => {
    try {
        const objTracker = await trackerService.getAllTracker(req.query);
        if (objTracker.length > 0) {
            util.setSuccess(200, 'Tracker retrieved', objTracker);
        } else {
            util.setSuccess(200, 'No tracker found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

trackerCtrl.getATracker = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isInteger(id)) {
            util.setError(400, 'Please input a valid Integer value');
            return util.send(res);
        }
        const objTracker = await trackerService.getATracker(id, req.query);
        if (!objTracker) {
            util.setError(404, `Cannot find tracker with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found tracker', objTracker);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

trackerCtrl.addTracker = async (req, res) => {
    try {
        const objTracker = await trackerService.addTracker(req.body);
        util.setSuccess(201, 'Tracker Added!', objTracker);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

trackerCtrl.updateTracker = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isInteger(id)) {
            util.setError(400, 'Please input a valid Integer value');
            return util.send(res);
        }
        const objTracker = await trackerService.updateTracker(id, req.body);
        if (!objTracker) {
            util.setError(404, `Cannot find tracker with the id: ${id}`);
        } else {
            util.setSuccess(200, 'Tracker updated', objTracker);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

trackerCtrl.deleteTracker = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isInteger(id)) {
            util.setError(400, 'Please provide a Integer value');
            return util.send(res);
        }
        const objTracker = await trackerService.deleteTracker(id);
        if (objTracker) {
            util.setSuccess(200, 'Tracker deleted', objTracker);
        } else {
            util.setError(404, `Tracker with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



trackerCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objTracker = await trackerService.findOneById(id, req.query);
        if (!objTracker) {
            util.setError(404, `Cannot find tracker with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found tracker', objTracker);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

trackerCtrl.findOneByVisible = async (req, res) => {
    try {
        const { visible } = req.params;
        const objTracker = await trackerService.findOneByVisible(visible, req.query);
        if (!objTracker) {
            util.setError(404, `Cannot find tracker with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found tracker', objTracker);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

trackerCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objTracker = await trackerService.findOneByDeleted(deleted, req.query);
        if (!objTracker) {
            util.setError(404, `Cannot find tracker with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found tracker', objTracker);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

trackerCtrl.findOneByUserId = async (req, res) => {
    try {
        const { userId } = req.params;
        const objTracker = await trackerService.findOneByUserId(userId, req.query);
        if (!objTracker) {
            util.setError(404, `Cannot find tracker with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found tracker', objTracker);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

trackerCtrl.findOneByModuleName = async (req, res) => {
    try {
        const { moduleName } = req.params;
        const objTracker = await trackerService.findOneByModuleName(moduleName, req.query);
        if (!objTracker) {
            util.setError(404, `Cannot find tracker with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found tracker', objTracker);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

trackerCtrl.findOneByItemId = async (req, res) => {
    try {
        const { itemId } = req.params;
        const objTracker = await trackerService.findOneByItemId(itemId, req.query);
        if (!objTracker) {
            util.setError(404, `Cannot find tracker with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found tracker', objTracker);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

trackerCtrl.findOneByItemSummary = async (req, res) => {
    try {
        const { itemSummary } = req.params;
        const objTracker = await trackerService.findOneByItemSummary(itemSummary, req.query);
        if (!objTracker) {
            util.setError(404, `Cannot find tracker with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found tracker', objTracker);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

trackerCtrl.findOneByAction = async (req, res) => {
    try {
        const { action } = req.params;
        const objTracker = await trackerService.findOneByAction(action, req.query);
        if (!objTracker) {
            util.setError(404, `Cannot find tracker with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found tracker', objTracker);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

trackerCtrl.findOneBySessionId = async (req, res) => {
    try {
        const { sessionId } = req.params;
        const objTracker = await trackerService.findOneBySessionId(sessionId, req.query);
        if (!objTracker) {
            util.setError(404, `Cannot find tracker with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found tracker', objTracker);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

trackerCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objTracker = await trackerService.findOneByDateModified(dateModified, req.query);
        if (!objTracker) {
            util.setError(404, `Cannot find tracker with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found tracker', objTracker);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

trackerCtrl.findOneByMonitorId = async (req, res) => {
    try {
        const { monitorId } = req.params;
        const objTracker = await trackerService.findOneByMonitorId(monitorId, req.query);
        if (!objTracker) {
            util.setError(404, `Cannot find tracker with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found tracker', objTracker);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



trackerCtrl.updateTrackerById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isInteger(id)) {
                util.setError(400, 'Please input a valid Integer value');
                return util.send(res);
            }
            const objTracker = await trackerService.updateTrackerById(id, req.body);
            if (!objTracker) {
                util.setError(404, `Cannot find tracker with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Tracker updated', objTracker);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

trackerCtrl.updateTrackerByVisible = async (req, res) => {
     const { visible } = req.params;
        try {
            if (!util.isInteger(id)) {
                util.setError(400, 'Please input a valid Integer value');
                return util.send(res);
            }
            const objTracker = await trackerService.updateTrackerByVisible(visible, req.body);
            if (!objTracker) {
                util.setError(404, `Cannot find tracker with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Tracker updated', objTracker);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

trackerCtrl.updateTrackerByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isInteger(id)) {
                util.setError(400, 'Please input a valid Integer value');
                return util.send(res);
            }
            const objTracker = await trackerService.updateTrackerByDeleted(deleted, req.body);
            if (!objTracker) {
                util.setError(404, `Cannot find tracker with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Tracker updated', objTracker);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

trackerCtrl.updateTrackerByUserId = async (req, res) => {
     const { userId } = req.params;
        try {
            if (!util.isInteger(id)) {
                util.setError(400, 'Please input a valid Integer value');
                return util.send(res);
            }
            const objTracker = await trackerService.updateTrackerByUserId(userId, req.body);
            if (!objTracker) {
                util.setError(404, `Cannot find tracker with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Tracker updated', objTracker);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

trackerCtrl.updateTrackerByModuleName = async (req, res) => {
     const { moduleName } = req.params;
        try {
            if (!util.isInteger(id)) {
                util.setError(400, 'Please input a valid Integer value');
                return util.send(res);
            }
            const objTracker = await trackerService.updateTrackerByModuleName(moduleName, req.body);
            if (!objTracker) {
                util.setError(404, `Cannot find tracker with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Tracker updated', objTracker);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

trackerCtrl.updateTrackerByItemId = async (req, res) => {
     const { itemId } = req.params;
        try {
            if (!util.isInteger(id)) {
                util.setError(400, 'Please input a valid Integer value');
                return util.send(res);
            }
            const objTracker = await trackerService.updateTrackerByItemId(itemId, req.body);
            if (!objTracker) {
                util.setError(404, `Cannot find tracker with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Tracker updated', objTracker);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

trackerCtrl.updateTrackerByItemSummary = async (req, res) => {
     const { itemSummary } = req.params;
        try {
            if (!util.isInteger(id)) {
                util.setError(400, 'Please input a valid Integer value');
                return util.send(res);
            }
            const objTracker = await trackerService.updateTrackerByItemSummary(itemSummary, req.body);
            if (!objTracker) {
                util.setError(404, `Cannot find tracker with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Tracker updated', objTracker);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

trackerCtrl.updateTrackerByAction = async (req, res) => {
     const { action } = req.params;
        try {
            if (!util.isInteger(id)) {
                util.setError(400, 'Please input a valid Integer value');
                return util.send(res);
            }
            const objTracker = await trackerService.updateTrackerByAction(action, req.body);
            if (!objTracker) {
                util.setError(404, `Cannot find tracker with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Tracker updated', objTracker);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

trackerCtrl.updateTrackerBySessionId = async (req, res) => {
     const { sessionId } = req.params;
        try {
            if (!util.isInteger(id)) {
                util.setError(400, 'Please input a valid Integer value');
                return util.send(res);
            }
            const objTracker = await trackerService.updateTrackerBySessionId(sessionId, req.body);
            if (!objTracker) {
                util.setError(404, `Cannot find tracker with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Tracker updated', objTracker);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

trackerCtrl.updateTrackerByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isInteger(id)) {
                util.setError(400, 'Please input a valid Integer value');
                return util.send(res);
            }
            const objTracker = await trackerService.updateTrackerByDateModified(dateModified, req.body);
            if (!objTracker) {
                util.setError(404, `Cannot find tracker with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Tracker updated', objTracker);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

trackerCtrl.updateTrackerByMonitorId = async (req, res) => {
     const { monitorId } = req.params;
        try {
            if (!util.isInteger(id)) {
                util.setError(400, 'Please input a valid Integer value');
                return util.send(res);
            }
            const objTracker = await trackerService.updateTrackerByMonitorId(monitorId, req.body);
            if (!objTracker) {
                util.setError(404, `Cannot find tracker with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Tracker updated', objTracker);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = trackerCtrl;
//</es-section>
