/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:35:40 GMT-0400 (Bolivia Time)
 * Time: 15:35:40
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:35:40 GMT-0400 (Bolivia Time)
 * Last time updated: 15:35:40
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const callService = require('../services/calls.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const callsCtrl = {};
callsCtrl.service = callService;


callsCtrl.getAllCalls = async (req, res) => {
    try {
        const objCalls = await callService.getAllCalls(req.query);
        if (objCalls.length > 0) {
            util.setSuccess(200, 'Calls retrieved', objCalls);
        } else {
            util.setSuccess(200, 'No call found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsCtrl.getACall = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objCall = await callService.getACall(id, req.query);
        if (!objCall) {
            util.setError(404, `Cannot find call with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found call', objCall);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsCtrl.addCall = async (req, res) => {
    try {
        const objCall = await callService.addCall(req.body);
        util.setSuccess(201, 'Call Added!', objCall);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsCtrl.updateCall = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objCall = await callService.updateCall(id, req.body);
        if (!objCall) {
            util.setError(404, `Cannot find call with the id: ${id}`);
        } else {
            util.setSuccess(200, 'Call updated', objCall);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

callsCtrl.deleteCall = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objCall = await callService.deleteCall(id);
        if (objCall) {
            util.setSuccess(200, 'Call deleted', objCall);
        } else {
            util.setError(404, `Call with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



callsCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objCall = await callService.findOneById(id, req.query);
        if (!objCall) {
            util.setError(404, `Cannot find call with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found call', objCall);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objCall = await callService.findOneByDeleted(deleted, req.query);
        if (!objCall) {
            util.setError(404, `Cannot find call with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found call', objCall);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsCtrl.findOneByEmailReminderSent = async (req, res) => {
    try {
        const { emailReminderSent } = req.params;
        const objCall = await callService.findOneByEmailReminderSent(emailReminderSent, req.query);
        if (!objCall) {
            util.setError(404, `Cannot find call with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found call', objCall);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsCtrl.findOneByDurationHours = async (req, res) => {
    try {
        const { durationHours } = req.params;
        const objCall = await callService.findOneByDurationHours(durationHours, req.query);
        if (!objCall) {
            util.setError(404, `Cannot find call with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found call', objCall);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsCtrl.findOneByDurationMinutes = async (req, res) => {
    try {
        const { durationMinutes } = req.params;
        const objCall = await callService.findOneByDurationMinutes(durationMinutes, req.query);
        if (!objCall) {
            util.setError(404, `Cannot find call with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found call', objCall);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsCtrl.findOneByReminderTime = async (req, res) => {
    try {
        const { reminderTime } = req.params;
        const objCall = await callService.findOneByReminderTime(reminderTime, req.query);
        if (!objCall) {
            util.setError(404, `Cannot find call with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found call', objCall);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsCtrl.findOneByEmailReminderTime = async (req, res) => {
    try {
        const { emailReminderTime } = req.params;
        const objCall = await callService.findOneByEmailReminderTime(emailReminderTime, req.query);
        if (!objCall) {
            util.setError(404, `Cannot find call with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found call', objCall);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsCtrl.findOneByRepeatInterval = async (req, res) => {
    try {
        const { repeatInterval } = req.params;
        const objCall = await callService.findOneByRepeatInterval(repeatInterval, req.query);
        if (!objCall) {
            util.setError(404, `Cannot find call with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found call', objCall);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsCtrl.findOneByRepeatCount = async (req, res) => {
    try {
        const { repeatCount } = req.params;
        const objCall = await callService.findOneByRepeatCount(repeatCount, req.query);
        if (!objCall) {
            util.setError(404, `Cannot find call with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found call', objCall);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsCtrl.findOneByName = async (req, res) => {
    try {
        const { name } = req.params;
        const objCall = await callService.findOneByName(name, req.query);
        if (!objCall) {
            util.setError(404, `Cannot find call with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found call', objCall);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsCtrl.findOneByParentType = async (req, res) => {
    try {
        const { parentType } = req.params;
        const objCall = await callService.findOneByParentType(parentType, req.query);
        if (!objCall) {
            util.setError(404, `Cannot find call with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found call', objCall);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsCtrl.findOneByStatus = async (req, res) => {
    try {
        const { status } = req.params;
        const objCall = await callService.findOneByStatus(status, req.query);
        if (!objCall) {
            util.setError(404, `Cannot find call with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found call', objCall);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsCtrl.findOneByDirection = async (req, res) => {
    try {
        const { direction } = req.params;
        const objCall = await callService.findOneByDirection(direction, req.query);
        if (!objCall) {
            util.setError(404, `Cannot find call with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found call', objCall);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsCtrl.findOneByOutlookId = async (req, res) => {
    try {
        const { outlookId } = req.params;
        const objCall = await callService.findOneByOutlookId(outlookId, req.query);
        if (!objCall) {
            util.setError(404, `Cannot find call with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found call', objCall);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsCtrl.findOneByRepeatType = async (req, res) => {
    try {
        const { repeatType } = req.params;
        const objCall = await callService.findOneByRepeatType(repeatType, req.query);
        if (!objCall) {
            util.setError(404, `Cannot find call with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found call', objCall);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsCtrl.findOneByRepeatDow = async (req, res) => {
    try {
        const { repeatDow } = req.params;
        const objCall = await callService.findOneByRepeatDow(repeatDow, req.query);
        if (!objCall) {
            util.setError(404, `Cannot find call with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found call', objCall);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsCtrl.findOneByRecurringSource = async (req, res) => {
    try {
        const { recurringSource } = req.params;
        const objCall = await callService.findOneByRecurringSource(recurringSource, req.query);
        if (!objCall) {
            util.setError(404, `Cannot find call with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found call', objCall);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsCtrl.findOneByDescription = async (req, res) => {
    try {
        const { description } = req.params;
        const objCall = await callService.findOneByDescription(description, req.query);
        if (!objCall) {
            util.setError(404, `Cannot find call with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found call', objCall);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objCall = await callService.findOneByDateEntered(dateEntered, req.query);
        if (!objCall) {
            util.setError(404, `Cannot find call with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found call', objCall);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objCall = await callService.findOneByDateModified(dateModified, req.query);
        if (!objCall) {
            util.setError(404, `Cannot find call with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found call', objCall);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsCtrl.findOneByDateStart = async (req, res) => {
    try {
        const { dateStart } = req.params;
        const objCall = await callService.findOneByDateStart(dateStart, req.query);
        if (!objCall) {
            util.setError(404, `Cannot find call with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found call', objCall);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsCtrl.findOneByDateEnd = async (req, res) => {
    try {
        const { dateEnd } = req.params;
        const objCall = await callService.findOneByDateEnd(dateEnd, req.query);
        if (!objCall) {
            util.setError(404, `Cannot find call with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found call', objCall);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsCtrl.findOneByRepeatUntil = async (req, res) => {
    try {
        const { repeatUntil } = req.params;
        const objCall = await callService.findOneByRepeatUntil(repeatUntil, req.query);
        if (!objCall) {
            util.setError(404, `Cannot find call with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found call', objCall);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsCtrl.findOneByModifiedUserId = async (req, res) => {
    try {
        const { modifiedUserId } = req.params;
        const objCall = await callService.findOneByModifiedUserId(modifiedUserId, req.query);
        if (!objCall) {
            util.setError(404, `Cannot find call with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found call', objCall);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objCall = await callService.findOneByCreatedBy(createdBy, req.query);
        if (!objCall) {
            util.setError(404, `Cannot find call with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found call', objCall);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsCtrl.findOneByAssignedUserId = async (req, res) => {
    try {
        const { assignedUserId } = req.params;
        const objCall = await callService.findOneByAssignedUserId(assignedUserId, req.query);
        if (!objCall) {
            util.setError(404, `Cannot find call with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found call', objCall);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsCtrl.findOneByParentId = async (req, res) => {
    try {
        const { parentId } = req.params;
        const objCall = await callService.findOneByParentId(parentId, req.query);
        if (!objCall) {
            util.setError(404, `Cannot find call with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found call', objCall);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsCtrl.findOneByRepeatParentId = async (req, res) => {
    try {
        const { repeatParentId } = req.params;
        const objCall = await callService.findOneByRepeatParentId(repeatParentId, req.query);
        if (!objCall) {
            util.setError(404, `Cannot find call with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found call', objCall);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



callsCtrl.updateCallById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCall = await callService.updateCallById(id, req.body);
            if (!objCall) {
                util.setError(404, `Cannot find call with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Call updated', objCall);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

callsCtrl.updateCallByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCall = await callService.updateCallByDeleted(deleted, req.body);
            if (!objCall) {
                util.setError(404, `Cannot find call with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Call updated', objCall);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

callsCtrl.updateCallByEmailReminderSent = async (req, res) => {
     const { emailReminderSent } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCall = await callService.updateCallByEmailReminderSent(emailReminderSent, req.body);
            if (!objCall) {
                util.setError(404, `Cannot find call with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Call updated', objCall);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

callsCtrl.updateCallByDurationHours = async (req, res) => {
     const { durationHours } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCall = await callService.updateCallByDurationHours(durationHours, req.body);
            if (!objCall) {
                util.setError(404, `Cannot find call with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Call updated', objCall);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

callsCtrl.updateCallByDurationMinutes = async (req, res) => {
     const { durationMinutes } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCall = await callService.updateCallByDurationMinutes(durationMinutes, req.body);
            if (!objCall) {
                util.setError(404, `Cannot find call with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Call updated', objCall);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

callsCtrl.updateCallByReminderTime = async (req, res) => {
     const { reminderTime } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCall = await callService.updateCallByReminderTime(reminderTime, req.body);
            if (!objCall) {
                util.setError(404, `Cannot find call with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Call updated', objCall);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

callsCtrl.updateCallByEmailReminderTime = async (req, res) => {
     const { emailReminderTime } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCall = await callService.updateCallByEmailReminderTime(emailReminderTime, req.body);
            if (!objCall) {
                util.setError(404, `Cannot find call with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Call updated', objCall);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

callsCtrl.updateCallByRepeatInterval = async (req, res) => {
     const { repeatInterval } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCall = await callService.updateCallByRepeatInterval(repeatInterval, req.body);
            if (!objCall) {
                util.setError(404, `Cannot find call with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Call updated', objCall);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

callsCtrl.updateCallByRepeatCount = async (req, res) => {
     const { repeatCount } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCall = await callService.updateCallByRepeatCount(repeatCount, req.body);
            if (!objCall) {
                util.setError(404, `Cannot find call with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Call updated', objCall);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

callsCtrl.updateCallByName = async (req, res) => {
     const { name } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCall = await callService.updateCallByName(name, req.body);
            if (!objCall) {
                util.setError(404, `Cannot find call with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Call updated', objCall);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

callsCtrl.updateCallByParentType = async (req, res) => {
     const { parentType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCall = await callService.updateCallByParentType(parentType, req.body);
            if (!objCall) {
                util.setError(404, `Cannot find call with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Call updated', objCall);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

callsCtrl.updateCallByStatus = async (req, res) => {
     const { status } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCall = await callService.updateCallByStatus(status, req.body);
            if (!objCall) {
                util.setError(404, `Cannot find call with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Call updated', objCall);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

callsCtrl.updateCallByDirection = async (req, res) => {
     const { direction } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCall = await callService.updateCallByDirection(direction, req.body);
            if (!objCall) {
                util.setError(404, `Cannot find call with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Call updated', objCall);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

callsCtrl.updateCallByOutlookId = async (req, res) => {
     const { outlookId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCall = await callService.updateCallByOutlookId(outlookId, req.body);
            if (!objCall) {
                util.setError(404, `Cannot find call with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Call updated', objCall);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

callsCtrl.updateCallByRepeatType = async (req, res) => {
     const { repeatType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCall = await callService.updateCallByRepeatType(repeatType, req.body);
            if (!objCall) {
                util.setError(404, `Cannot find call with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Call updated', objCall);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

callsCtrl.updateCallByRepeatDow = async (req, res) => {
     const { repeatDow } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCall = await callService.updateCallByRepeatDow(repeatDow, req.body);
            if (!objCall) {
                util.setError(404, `Cannot find call with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Call updated', objCall);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

callsCtrl.updateCallByRecurringSource = async (req, res) => {
     const { recurringSource } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCall = await callService.updateCallByRecurringSource(recurringSource, req.body);
            if (!objCall) {
                util.setError(404, `Cannot find call with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Call updated', objCall);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

callsCtrl.updateCallByDescription = async (req, res) => {
     const { description } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCall = await callService.updateCallByDescription(description, req.body);
            if (!objCall) {
                util.setError(404, `Cannot find call with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Call updated', objCall);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

callsCtrl.updateCallByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCall = await callService.updateCallByDateEntered(dateEntered, req.body);
            if (!objCall) {
                util.setError(404, `Cannot find call with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Call updated', objCall);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

callsCtrl.updateCallByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCall = await callService.updateCallByDateModified(dateModified, req.body);
            if (!objCall) {
                util.setError(404, `Cannot find call with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Call updated', objCall);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

callsCtrl.updateCallByDateStart = async (req, res) => {
     const { dateStart } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCall = await callService.updateCallByDateStart(dateStart, req.body);
            if (!objCall) {
                util.setError(404, `Cannot find call with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Call updated', objCall);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

callsCtrl.updateCallByDateEnd = async (req, res) => {
     const { dateEnd } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCall = await callService.updateCallByDateEnd(dateEnd, req.body);
            if (!objCall) {
                util.setError(404, `Cannot find call with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Call updated', objCall);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

callsCtrl.updateCallByRepeatUntil = async (req, res) => {
     const { repeatUntil } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCall = await callService.updateCallByRepeatUntil(repeatUntil, req.body);
            if (!objCall) {
                util.setError(404, `Cannot find call with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Call updated', objCall);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

callsCtrl.updateCallByModifiedUserId = async (req, res) => {
     const { modifiedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCall = await callService.updateCallByModifiedUserId(modifiedUserId, req.body);
            if (!objCall) {
                util.setError(404, `Cannot find call with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Call updated', objCall);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

callsCtrl.updateCallByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCall = await callService.updateCallByCreatedBy(createdBy, req.body);
            if (!objCall) {
                util.setError(404, `Cannot find call with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Call updated', objCall);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

callsCtrl.updateCallByAssignedUserId = async (req, res) => {
     const { assignedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCall = await callService.updateCallByAssignedUserId(assignedUserId, req.body);
            if (!objCall) {
                util.setError(404, `Cannot find call with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Call updated', objCall);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

callsCtrl.updateCallByParentId = async (req, res) => {
     const { parentId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCall = await callService.updateCallByParentId(parentId, req.body);
            if (!objCall) {
                util.setError(404, `Cannot find call with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Call updated', objCall);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

callsCtrl.updateCallByRepeatParentId = async (req, res) => {
     const { repeatParentId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objCall = await callService.updateCallByRepeatParentId(repeatParentId, req.body);
            if (!objCall) {
                util.setError(404, `Cannot find call with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Call updated', objCall);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = callsCtrl;
//</es-section>
