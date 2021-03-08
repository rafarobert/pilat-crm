/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:36:56 GMT-0400 (Bolivia Time)
 * Time: 15:36:56
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:36:56 GMT-0400 (Bolivia Time)
 * Last time updated: 15:36:56
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const reminderInviteeService = require('../services/reminders_invitees.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const remindersInviteesCtrl = {};
remindersInviteesCtrl.service = reminderInviteeService;


remindersInviteesCtrl.getAllRemindersInvitees = async (req, res) => {
    try {
        const objRemindersInvitees = await reminderInviteeService.getAllRemindersInvitees(req.query);
        if (objRemindersInvitees.length > 0) {
            util.setSuccess(200, 'RemindersInvitees retrieved', objRemindersInvitees);
        } else {
            util.setSuccess(200, 'No reminderInvitee found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

remindersInviteesCtrl.getAReminderInvitee = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objReminderInvitee = await reminderInviteeService.getAReminderInvitee(id, req.query);
        if (!objReminderInvitee) {
            util.setError(404, `Cannot find reminderInvitee with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found reminderInvitee', objReminderInvitee);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

remindersInviteesCtrl.addReminderInvitee = async (req, res) => {
    try {
        const objReminderInvitee = await reminderInviteeService.addReminderInvitee(req.body);
        util.setSuccess(201, 'ReminderInvitee Added!', objReminderInvitee);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

remindersInviteesCtrl.updateReminderInvitee = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objReminderInvitee = await reminderInviteeService.updateReminderInvitee(id, req.body);
        if (!objReminderInvitee) {
            util.setError(404, `Cannot find reminderInvitee with the id: ${id}`);
        } else {
            util.setSuccess(200, 'ReminderInvitee updated', objReminderInvitee);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

remindersInviteesCtrl.deleteReminderInvitee = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objReminderInvitee = await reminderInviteeService.deleteReminderInvitee(id);
        if (objReminderInvitee) {
            util.setSuccess(200, 'ReminderInvitee deleted', objReminderInvitee);
        } else {
            util.setError(404, `ReminderInvitee with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



remindersInviteesCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objReminderInvitee = await reminderInviteeService.findOneById(id, req.query);
        if (!objReminderInvitee) {
            util.setError(404, `Cannot find reminderInvitee with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found reminderInvitee', objReminderInvitee);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

remindersInviteesCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objReminderInvitee = await reminderInviteeService.findOneByDeleted(deleted, req.query);
        if (!objReminderInvitee) {
            util.setError(404, `Cannot find reminderInvitee with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found reminderInvitee', objReminderInvitee);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

remindersInviteesCtrl.findOneByName = async (req, res) => {
    try {
        const { name } = req.params;
        const objReminderInvitee = await reminderInviteeService.findOneByName(name, req.query);
        if (!objReminderInvitee) {
            util.setError(404, `Cannot find reminderInvitee with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found reminderInvitee', objReminderInvitee);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

remindersInviteesCtrl.findOneByRelatedInviteeModule = async (req, res) => {
    try {
        const { relatedInviteeModule } = req.params;
        const objReminderInvitee = await reminderInviteeService.findOneByRelatedInviteeModule(relatedInviteeModule, req.query);
        if (!objReminderInvitee) {
            util.setError(404, `Cannot find reminderInvitee with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found reminderInvitee', objReminderInvitee);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

remindersInviteesCtrl.findOneByDescription = async (req, res) => {
    try {
        const { description } = req.params;
        const objReminderInvitee = await reminderInviteeService.findOneByDescription(description, req.query);
        if (!objReminderInvitee) {
            util.setError(404, `Cannot find reminderInvitee with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found reminderInvitee', objReminderInvitee);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

remindersInviteesCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objReminderInvitee = await reminderInviteeService.findOneByDateEntered(dateEntered, req.query);
        if (!objReminderInvitee) {
            util.setError(404, `Cannot find reminderInvitee with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found reminderInvitee', objReminderInvitee);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

remindersInviteesCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objReminderInvitee = await reminderInviteeService.findOneByDateModified(dateModified, req.query);
        if (!objReminderInvitee) {
            util.setError(404, `Cannot find reminderInvitee with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found reminderInvitee', objReminderInvitee);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

remindersInviteesCtrl.findOneByModifiedUserId = async (req, res) => {
    try {
        const { modifiedUserId } = req.params;
        const objReminderInvitee = await reminderInviteeService.findOneByModifiedUserId(modifiedUserId, req.query);
        if (!objReminderInvitee) {
            util.setError(404, `Cannot find reminderInvitee with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found reminderInvitee', objReminderInvitee);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

remindersInviteesCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objReminderInvitee = await reminderInviteeService.findOneByCreatedBy(createdBy, req.query);
        if (!objReminderInvitee) {
            util.setError(404, `Cannot find reminderInvitee with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found reminderInvitee', objReminderInvitee);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

remindersInviteesCtrl.findOneByAssignedUserId = async (req, res) => {
    try {
        const { assignedUserId } = req.params;
        const objReminderInvitee = await reminderInviteeService.findOneByAssignedUserId(assignedUserId, req.query);
        if (!objReminderInvitee) {
            util.setError(404, `Cannot find reminderInvitee with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found reminderInvitee', objReminderInvitee);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

remindersInviteesCtrl.findOneByReminderId = async (req, res) => {
    try {
        const { reminderId } = req.params;
        const objReminderInvitee = await reminderInviteeService.findOneByReminderId(reminderId, req.query);
        if (!objReminderInvitee) {
            util.setError(404, `Cannot find reminderInvitee with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found reminderInvitee', objReminderInvitee);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

remindersInviteesCtrl.findOneByRelatedInviteeModuleId = async (req, res) => {
    try {
        const { relatedInviteeModuleId } = req.params;
        const objReminderInvitee = await reminderInviteeService.findOneByRelatedInviteeModuleId(relatedInviteeModuleId, req.query);
        if (!objReminderInvitee) {
            util.setError(404, `Cannot find reminderInvitee with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found reminderInvitee', objReminderInvitee);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



remindersInviteesCtrl.updateReminderInviteeById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objReminderInvitee = await reminderInviteeService.updateReminderInviteeById(id, req.body);
            if (!objReminderInvitee) {
                util.setError(404, `Cannot find reminderInvitee with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ReminderInvitee updated', objReminderInvitee);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

remindersInviteesCtrl.updateReminderInviteeByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objReminderInvitee = await reminderInviteeService.updateReminderInviteeByDeleted(deleted, req.body);
            if (!objReminderInvitee) {
                util.setError(404, `Cannot find reminderInvitee with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ReminderInvitee updated', objReminderInvitee);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

remindersInviteesCtrl.updateReminderInviteeByName = async (req, res) => {
     const { name } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objReminderInvitee = await reminderInviteeService.updateReminderInviteeByName(name, req.body);
            if (!objReminderInvitee) {
                util.setError(404, `Cannot find reminderInvitee with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ReminderInvitee updated', objReminderInvitee);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

remindersInviteesCtrl.updateReminderInviteeByRelatedInviteeModule = async (req, res) => {
     const { relatedInviteeModule } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objReminderInvitee = await reminderInviteeService.updateReminderInviteeByRelatedInviteeModule(relatedInviteeModule, req.body);
            if (!objReminderInvitee) {
                util.setError(404, `Cannot find reminderInvitee with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ReminderInvitee updated', objReminderInvitee);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

remindersInviteesCtrl.updateReminderInviteeByDescription = async (req, res) => {
     const { description } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objReminderInvitee = await reminderInviteeService.updateReminderInviteeByDescription(description, req.body);
            if (!objReminderInvitee) {
                util.setError(404, `Cannot find reminderInvitee with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ReminderInvitee updated', objReminderInvitee);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

remindersInviteesCtrl.updateReminderInviteeByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objReminderInvitee = await reminderInviteeService.updateReminderInviteeByDateEntered(dateEntered, req.body);
            if (!objReminderInvitee) {
                util.setError(404, `Cannot find reminderInvitee with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ReminderInvitee updated', objReminderInvitee);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

remindersInviteesCtrl.updateReminderInviteeByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objReminderInvitee = await reminderInviteeService.updateReminderInviteeByDateModified(dateModified, req.body);
            if (!objReminderInvitee) {
                util.setError(404, `Cannot find reminderInvitee with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ReminderInvitee updated', objReminderInvitee);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

remindersInviteesCtrl.updateReminderInviteeByModifiedUserId = async (req, res) => {
     const { modifiedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objReminderInvitee = await reminderInviteeService.updateReminderInviteeByModifiedUserId(modifiedUserId, req.body);
            if (!objReminderInvitee) {
                util.setError(404, `Cannot find reminderInvitee with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ReminderInvitee updated', objReminderInvitee);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

remindersInviteesCtrl.updateReminderInviteeByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objReminderInvitee = await reminderInviteeService.updateReminderInviteeByCreatedBy(createdBy, req.body);
            if (!objReminderInvitee) {
                util.setError(404, `Cannot find reminderInvitee with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ReminderInvitee updated', objReminderInvitee);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

remindersInviteesCtrl.updateReminderInviteeByAssignedUserId = async (req, res) => {
     const { assignedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objReminderInvitee = await reminderInviteeService.updateReminderInviteeByAssignedUserId(assignedUserId, req.body);
            if (!objReminderInvitee) {
                util.setError(404, `Cannot find reminderInvitee with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ReminderInvitee updated', objReminderInvitee);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

remindersInviteesCtrl.updateReminderInviteeByReminderId = async (req, res) => {
     const { reminderId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objReminderInvitee = await reminderInviteeService.updateReminderInviteeByReminderId(reminderId, req.body);
            if (!objReminderInvitee) {
                util.setError(404, `Cannot find reminderInvitee with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ReminderInvitee updated', objReminderInvitee);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

remindersInviteesCtrl.updateReminderInviteeByRelatedInviteeModuleId = async (req, res) => {
     const { relatedInviteeModuleId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objReminderInvitee = await reminderInviteeService.updateReminderInviteeByRelatedInviteeModuleId(relatedInviteeModuleId, req.body);
            if (!objReminderInvitee) {
                util.setError(404, `Cannot find reminderInvitee with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ReminderInvitee updated', objReminderInvitee);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = remindersInviteesCtrl;
//</es-section>
