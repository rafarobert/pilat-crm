/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:23:40 GMT-0400 (Bolivia Time)
 * Time: 0:23:40
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:23:40 GMT-0400 (Bolivia Time)
 * Last time updated: 0:23:40
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const reminderService = require('../services/reminders.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const remindersCtrl = {};
remindersCtrl.service = reminderService;


remindersCtrl.getAllReminders = async (req, res) => {
    try {
        const objReminders = await reminderService.getAllReminders(req.query);
        if (objReminders.length > 0) {
            util.setSuccess(200, 'Reminders retrieved', objReminders);
        } else {
            util.setSuccess(200, 'No reminder found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

remindersCtrl.getAReminder = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objReminder = await reminderService.getAReminder(id, req.query);
        if (!objReminder) {
            util.setError(404, `Cannot find reminder with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found reminder', objReminder);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

remindersCtrl.addReminder = async (req, res) => {
    try {
        const objReminder = await reminderService.addReminder(req.body);
        util.setSuccess(201, 'Reminder Added!', objReminder);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

remindersCtrl.updateReminder = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objReminder = await reminderService.updateReminder(id, req.body);
        if (!objReminder) {
            util.setError(404, `Cannot find reminder with the id: ${id}`);
        } else {
            util.setSuccess(200, 'Reminder updated', objReminder);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

remindersCtrl.deleteReminder = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objReminder = await reminderService.deleteReminder(id);
        if (objReminder) {
            util.setSuccess(200, 'Reminder deleted', objReminder);
        } else {
            util.setError(404, `Reminder with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



remindersCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objReminder = await reminderService.findOneById(id, req.query);
        if (!objReminder) {
            util.setError(404, `Cannot find reminder with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found reminder', objReminder);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

remindersCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objReminder = await reminderService.findOneByDeleted(deleted, req.query);
        if (!objReminder) {
            util.setError(404, `Cannot find reminder with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found reminder', objReminder);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

remindersCtrl.findOneByPopup = async (req, res) => {
    try {
        const { popup } = req.params;
        const objReminder = await reminderService.findOneByPopup(popup, req.query);
        if (!objReminder) {
            util.setError(404, `Cannot find reminder with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found reminder', objReminder);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

remindersCtrl.findOneByEmail = async (req, res) => {
    try {
        const { email } = req.params;
        const objReminder = await reminderService.findOneByEmail(email, req.query);
        if (!objReminder) {
            util.setError(404, `Cannot find reminder with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found reminder', objReminder);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

remindersCtrl.findOneByEmailSent = async (req, res) => {
    try {
        const { emailSent } = req.params;
        const objReminder = await reminderService.findOneByEmailSent(emailSent, req.query);
        if (!objReminder) {
            util.setError(404, `Cannot find reminder with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found reminder', objReminder);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

remindersCtrl.findOneByPopupViewed = async (req, res) => {
    try {
        const { popupViewed } = req.params;
        const objReminder = await reminderService.findOneByPopupViewed(popupViewed, req.query);
        if (!objReminder) {
            util.setError(404, `Cannot find reminder with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found reminder', objReminder);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

remindersCtrl.findOneByDateWillexecute = async (req, res) => {
    try {
        const { dateWillexecute } = req.params;
        const objReminder = await reminderService.findOneByDateWillexecute(dateWillexecute, req.query);
        if (!objReminder) {
            util.setError(404, `Cannot find reminder with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found reminder', objReminder);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

remindersCtrl.findOneByName = async (req, res) => {
    try {
        const { name } = req.params;
        const objReminder = await reminderService.findOneByName(name, req.query);
        if (!objReminder) {
            util.setError(404, `Cannot find reminder with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found reminder', objReminder);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

remindersCtrl.findOneByTimerPopup = async (req, res) => {
    try {
        const { timerPopup } = req.params;
        const objReminder = await reminderService.findOneByTimerPopup(timerPopup, req.query);
        if (!objReminder) {
            util.setError(404, `Cannot find reminder with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found reminder', objReminder);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

remindersCtrl.findOneByTimerEmail = async (req, res) => {
    try {
        const { timerEmail } = req.params;
        const objReminder = await reminderService.findOneByTimerEmail(timerEmail, req.query);
        if (!objReminder) {
            util.setError(404, `Cannot find reminder with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found reminder', objReminder);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

remindersCtrl.findOneByRelatedEventModule = async (req, res) => {
    try {
        const { relatedEventModule } = req.params;
        const objReminder = await reminderService.findOneByRelatedEventModule(relatedEventModule, req.query);
        if (!objReminder) {
            util.setError(404, `Cannot find reminder with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found reminder', objReminder);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

remindersCtrl.findOneByDescription = async (req, res) => {
    try {
        const { description } = req.params;
        const objReminder = await reminderService.findOneByDescription(description, req.query);
        if (!objReminder) {
            util.setError(404, `Cannot find reminder with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found reminder', objReminder);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

remindersCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objReminder = await reminderService.findOneByDateEntered(dateEntered, req.query);
        if (!objReminder) {
            util.setError(404, `Cannot find reminder with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found reminder', objReminder);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

remindersCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objReminder = await reminderService.findOneByDateModified(dateModified, req.query);
        if (!objReminder) {
            util.setError(404, `Cannot find reminder with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found reminder', objReminder);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

remindersCtrl.findOneByModifiedUserId = async (req, res) => {
    try {
        const { modifiedUserId } = req.params;
        const objReminder = await reminderService.findOneByModifiedUserId(modifiedUserId, req.query);
        if (!objReminder) {
            util.setError(404, `Cannot find reminder with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found reminder', objReminder);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

remindersCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objReminder = await reminderService.findOneByCreatedBy(createdBy, req.query);
        if (!objReminder) {
            util.setError(404, `Cannot find reminder with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found reminder', objReminder);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

remindersCtrl.findOneByAssignedUserId = async (req, res) => {
    try {
        const { assignedUserId } = req.params;
        const objReminder = await reminderService.findOneByAssignedUserId(assignedUserId, req.query);
        if (!objReminder) {
            util.setError(404, `Cannot find reminder with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found reminder', objReminder);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

remindersCtrl.findOneByRelatedEventModuleId = async (req, res) => {
    try {
        const { relatedEventModuleId } = req.params;
        const objReminder = await reminderService.findOneByRelatedEventModuleId(relatedEventModuleId, req.query);
        if (!objReminder) {
            util.setError(404, `Cannot find reminder with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found reminder', objReminder);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



remindersCtrl.updateReminderById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objReminder = await reminderService.updateReminderById(id, req.body);
            if (!objReminder) {
                util.setError(404, `Cannot find reminder with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Reminder updated', objReminder);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

remindersCtrl.updateReminderByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objReminder = await reminderService.updateReminderByDeleted(deleted, req.body);
            if (!objReminder) {
                util.setError(404, `Cannot find reminder with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Reminder updated', objReminder);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

remindersCtrl.updateReminderByPopup = async (req, res) => {
     const { popup } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objReminder = await reminderService.updateReminderByPopup(popup, req.body);
            if (!objReminder) {
                util.setError(404, `Cannot find reminder with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Reminder updated', objReminder);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

remindersCtrl.updateReminderByEmail = async (req, res) => {
     const { email } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objReminder = await reminderService.updateReminderByEmail(email, req.body);
            if (!objReminder) {
                util.setError(404, `Cannot find reminder with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Reminder updated', objReminder);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

remindersCtrl.updateReminderByEmailSent = async (req, res) => {
     const { emailSent } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objReminder = await reminderService.updateReminderByEmailSent(emailSent, req.body);
            if (!objReminder) {
                util.setError(404, `Cannot find reminder with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Reminder updated', objReminder);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

remindersCtrl.updateReminderByPopupViewed = async (req, res) => {
     const { popupViewed } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objReminder = await reminderService.updateReminderByPopupViewed(popupViewed, req.body);
            if (!objReminder) {
                util.setError(404, `Cannot find reminder with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Reminder updated', objReminder);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

remindersCtrl.updateReminderByDateWillexecute = async (req, res) => {
     const { dateWillexecute } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objReminder = await reminderService.updateReminderByDateWillexecute(dateWillexecute, req.body);
            if (!objReminder) {
                util.setError(404, `Cannot find reminder with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Reminder updated', objReminder);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

remindersCtrl.updateReminderByName = async (req, res) => {
     const { name } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objReminder = await reminderService.updateReminderByName(name, req.body);
            if (!objReminder) {
                util.setError(404, `Cannot find reminder with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Reminder updated', objReminder);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

remindersCtrl.updateReminderByTimerPopup = async (req, res) => {
     const { timerPopup } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objReminder = await reminderService.updateReminderByTimerPopup(timerPopup, req.body);
            if (!objReminder) {
                util.setError(404, `Cannot find reminder with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Reminder updated', objReminder);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

remindersCtrl.updateReminderByTimerEmail = async (req, res) => {
     const { timerEmail } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objReminder = await reminderService.updateReminderByTimerEmail(timerEmail, req.body);
            if (!objReminder) {
                util.setError(404, `Cannot find reminder with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Reminder updated', objReminder);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

remindersCtrl.updateReminderByRelatedEventModule = async (req, res) => {
     const { relatedEventModule } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objReminder = await reminderService.updateReminderByRelatedEventModule(relatedEventModule, req.body);
            if (!objReminder) {
                util.setError(404, `Cannot find reminder with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Reminder updated', objReminder);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

remindersCtrl.updateReminderByDescription = async (req, res) => {
     const { description } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objReminder = await reminderService.updateReminderByDescription(description, req.body);
            if (!objReminder) {
                util.setError(404, `Cannot find reminder with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Reminder updated', objReminder);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

remindersCtrl.updateReminderByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objReminder = await reminderService.updateReminderByDateEntered(dateEntered, req.body);
            if (!objReminder) {
                util.setError(404, `Cannot find reminder with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Reminder updated', objReminder);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

remindersCtrl.updateReminderByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objReminder = await reminderService.updateReminderByDateModified(dateModified, req.body);
            if (!objReminder) {
                util.setError(404, `Cannot find reminder with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Reminder updated', objReminder);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

remindersCtrl.updateReminderByModifiedUserId = async (req, res) => {
     const { modifiedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objReminder = await reminderService.updateReminderByModifiedUserId(modifiedUserId, req.body);
            if (!objReminder) {
                util.setError(404, `Cannot find reminder with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Reminder updated', objReminder);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

remindersCtrl.updateReminderByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objReminder = await reminderService.updateReminderByCreatedBy(createdBy, req.body);
            if (!objReminder) {
                util.setError(404, `Cannot find reminder with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Reminder updated', objReminder);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

remindersCtrl.updateReminderByAssignedUserId = async (req, res) => {
     const { assignedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objReminder = await reminderService.updateReminderByAssignedUserId(assignedUserId, req.body);
            if (!objReminder) {
                util.setError(404, `Cannot find reminder with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Reminder updated', objReminder);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

remindersCtrl.updateReminderByRelatedEventModuleId = async (req, res) => {
     const { relatedEventModuleId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objReminder = await reminderService.updateReminderByRelatedEventModuleId(relatedEventModuleId, req.body);
            if (!objReminder) {
                util.setError(404, `Cannot find reminder with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Reminder updated', objReminder);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = remindersCtrl;
//</es-section>
