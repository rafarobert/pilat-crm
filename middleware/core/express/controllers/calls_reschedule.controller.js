/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:32 GMT-0400 (Bolivia Time)
 * Time: 14:0:32
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:32 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:32
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const callRescheduleService = require('../services/calls_reschedule.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const callsRescheduleCtrl = {};
callsRescheduleCtrl.service = callRescheduleService;


callsRescheduleCtrl.getAllCallsReschedule = async (req, res) => {
    try {
        const objCallsReschedule = await callRescheduleService.getAllCallsReschedule(req.query);
        if (objCallsReschedule.length > 0) {
            util.setSuccess(200, 'CallsReschedule retrieved', objCallsReschedule);
        } else {
            util.setSuccess(200, 'No callReschedule found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsRescheduleCtrl.getACallReschedule = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objCallReschedule = await callRescheduleService.getACallReschedule(id, req.query);
        if (!objCallReschedule) {
            util.setError(404, `Cannot find callReschedule with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found callReschedule', objCallReschedule);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsRescheduleCtrl.addCallReschedule = async (req, res) => {
    try {
        const objCallReschedule = await callRescheduleService.addCallReschedule(req.body);
        util.setSuccess(201, 'CallReschedule Added!', objCallReschedule);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsRescheduleCtrl.updateCallReschedule = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objCallReschedule = await callRescheduleService.updateCallReschedule(id, req.body);
        if (!objCallReschedule) {
            util.setError(404, `Cannot find callReschedule with the id: ${id}`);
        } else {
            util.setSuccess(200, 'CallReschedule updated', objCallReschedule);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

callsRescheduleCtrl.deleteCallReschedule = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objCallReschedule = await callRescheduleService.deleteCallReschedule(id);
        if (objCallReschedule) {
            util.setSuccess(200, 'CallReschedule deleted', objCallReschedule);
        } else {
            util.setError(404, `CallReschedule with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



callsRescheduleCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objCallReschedule = await callRescheduleService.findOneById(id, req.query);
        if (!objCallReschedule) {
            util.setError(404, `Cannot find callReschedule with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found callReschedule', objCallReschedule);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsRescheduleCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objCallReschedule = await callRescheduleService.findOneByDeleted(deleted, req.query);
        if (!objCallReschedule) {
            util.setError(404, `Cannot find callReschedule with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found callReschedule', objCallReschedule);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsRescheduleCtrl.findOneByName = async (req, res) => {
    try {
        const { name } = req.params;
        const objCallReschedule = await callRescheduleService.findOneByName(name, req.query);
        if (!objCallReschedule) {
            util.setError(404, `Cannot find callReschedule with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found callReschedule', objCallReschedule);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsRescheduleCtrl.findOneByReason = async (req, res) => {
    try {
        const { reason } = req.params;
        const objCallReschedule = await callRescheduleService.findOneByReason(reason, req.query);
        if (!objCallReschedule) {
            util.setError(404, `Cannot find callReschedule with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found callReschedule', objCallReschedule);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsRescheduleCtrl.findOneByDescription = async (req, res) => {
    try {
        const { description } = req.params;
        const objCallReschedule = await callRescheduleService.findOneByDescription(description, req.query);
        if (!objCallReschedule) {
            util.setError(404, `Cannot find callReschedule with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found callReschedule', objCallReschedule);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsRescheduleCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objCallReschedule = await callRescheduleService.findOneByDateEntered(dateEntered, req.query);
        if (!objCallReschedule) {
            util.setError(404, `Cannot find callReschedule with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found callReschedule', objCallReschedule);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsRescheduleCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objCallReschedule = await callRescheduleService.findOneByDateModified(dateModified, req.query);
        if (!objCallReschedule) {
            util.setError(404, `Cannot find callReschedule with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found callReschedule', objCallReschedule);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsRescheduleCtrl.findOneByModifiedUserId = async (req, res) => {
    try {
        const { modifiedUserId } = req.params;
        const objCallReschedule = await callRescheduleService.findOneByModifiedUserId(modifiedUserId, req.query);
        if (!objCallReschedule) {
            util.setError(404, `Cannot find callReschedule with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found callReschedule', objCallReschedule);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsRescheduleCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objCallReschedule = await callRescheduleService.findOneByCreatedBy(createdBy, req.query);
        if (!objCallReschedule) {
            util.setError(404, `Cannot find callReschedule with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found callReschedule', objCallReschedule);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsRescheduleCtrl.findOneByAssignedUserId = async (req, res) => {
    try {
        const { assignedUserId } = req.params;
        const objCallReschedule = await callRescheduleService.findOneByAssignedUserId(assignedUserId, req.query);
        if (!objCallReschedule) {
            util.setError(404, `Cannot find callReschedule with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found callReschedule', objCallReschedule);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsRescheduleCtrl.findOneByCallId = async (req, res) => {
    try {
        const { callId } = req.params;
        const objCallReschedule = await callRescheduleService.findOneByCallId(callId, req.query);
        if (!objCallReschedule) {
            util.setError(404, `Cannot find callReschedule with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found callReschedule', objCallReschedule);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



callsRescheduleCtrl.updateCallRescheduleById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCallReschedule = await callRescheduleService.updateCallRescheduleById(id, req.body);
            if (!objCallReschedule) {
                util.setError(404, `Cannot find callReschedule with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CallReschedule updated', objCallReschedule);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

callsRescheduleCtrl.updateCallRescheduleByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCallReschedule = await callRescheduleService.updateCallRescheduleByDeleted(deleted, req.body);
            if (!objCallReschedule) {
                util.setError(404, `Cannot find callReschedule with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CallReschedule updated', objCallReschedule);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

callsRescheduleCtrl.updateCallRescheduleByName = async (req, res) => {
     const { name } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCallReschedule = await callRescheduleService.updateCallRescheduleByName(name, req.body);
            if (!objCallReschedule) {
                util.setError(404, `Cannot find callReschedule with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CallReschedule updated', objCallReschedule);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

callsRescheduleCtrl.updateCallRescheduleByReason = async (req, res) => {
     const { reason } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCallReschedule = await callRescheduleService.updateCallRescheduleByReason(reason, req.body);
            if (!objCallReschedule) {
                util.setError(404, `Cannot find callReschedule with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CallReschedule updated', objCallReschedule);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

callsRescheduleCtrl.updateCallRescheduleByDescription = async (req, res) => {
     const { description } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCallReschedule = await callRescheduleService.updateCallRescheduleByDescription(description, req.body);
            if (!objCallReschedule) {
                util.setError(404, `Cannot find callReschedule with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CallReschedule updated', objCallReschedule);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

callsRescheduleCtrl.updateCallRescheduleByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCallReschedule = await callRescheduleService.updateCallRescheduleByDateEntered(dateEntered, req.body);
            if (!objCallReschedule) {
                util.setError(404, `Cannot find callReschedule with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CallReschedule updated', objCallReschedule);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

callsRescheduleCtrl.updateCallRescheduleByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCallReschedule = await callRescheduleService.updateCallRescheduleByDateModified(dateModified, req.body);
            if (!objCallReschedule) {
                util.setError(404, `Cannot find callReschedule with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CallReschedule updated', objCallReschedule);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

callsRescheduleCtrl.updateCallRescheduleByModifiedUserId = async (req, res) => {
     const { modifiedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCallReschedule = await callRescheduleService.updateCallRescheduleByModifiedUserId(modifiedUserId, req.body);
            if (!objCallReschedule) {
                util.setError(404, `Cannot find callReschedule with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CallReschedule updated', objCallReschedule);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

callsRescheduleCtrl.updateCallRescheduleByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCallReschedule = await callRescheduleService.updateCallRescheduleByCreatedBy(createdBy, req.body);
            if (!objCallReschedule) {
                util.setError(404, `Cannot find callReschedule with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CallReschedule updated', objCallReschedule);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

callsRescheduleCtrl.updateCallRescheduleByAssignedUserId = async (req, res) => {
     const { assignedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCallReschedule = await callRescheduleService.updateCallRescheduleByAssignedUserId(assignedUserId, req.body);
            if (!objCallReschedule) {
                util.setError(404, `Cannot find callReschedule with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CallReschedule updated', objCallReschedule);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

callsRescheduleCtrl.updateCallRescheduleByCallId = async (req, res) => {
     const { callId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCallReschedule = await callRescheduleService.updateCallRescheduleByCallId(callId, req.body);
            if (!objCallReschedule) {
                util.setError(404, `Cannot find callReschedule with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CallReschedule updated', objCallReschedule);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = callsRescheduleCtrl;
//</es-section>
