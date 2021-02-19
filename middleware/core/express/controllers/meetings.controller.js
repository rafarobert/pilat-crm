/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:37:49 GMT-0400 (Bolivia Time)
 * Time: 18:37:49
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:37:49 GMT-0400 (Bolivia Time)
 * Last time updated: 18:37:49
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const meetingService = require('../services/meetings.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const meetingsCtrl = {};
meetingsCtrl.service = meetingService;


meetingsCtrl.getAllMeetings = async (req, res) => {
    try {
        const objMeetings = await meetingService.getAllMeetings(req.query);
        if (objMeetings.length > 0) {
            util.setSuccess(200, 'Meetings retrieved', objMeetings);
        } else {
            util.setSuccess(200, 'No meeting found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

meetingsCtrl.getAMeeting = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objMeeting = await meetingService.getAMeeting(id, req.query);
        if (!objMeeting) {
            util.setError(404, `Cannot find meeting with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found meeting', objMeeting);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

meetingsCtrl.addMeeting = async (req, res) => {
    try {
        const objMeeting = await meetingService.addMeeting(req.body);
        util.setSuccess(201, 'Meeting Added!', objMeeting);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

meetingsCtrl.updateMeeting = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objMeeting = await meetingService.updateMeeting(id, req.body);
        if (!objMeeting) {
            util.setError(404, `Cannot find meeting with the id: ${id}`);
        } else {
            util.setSuccess(200, 'Meeting updated', objMeeting);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

meetingsCtrl.deleteMeeting = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objMeeting = await meetingService.deleteMeeting(id);
        if (objMeeting) {
            util.setSuccess(200, 'Meeting deleted', objMeeting);
        } else {
            util.setError(404, `Meeting with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



meetingsCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objMeeting = await meetingService.findOneById(id, req.query);
        if (!objMeeting) {
            util.setError(404, `Cannot find meeting with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found meeting', objMeeting);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

meetingsCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objMeeting = await meetingService.findOneByDeleted(deleted, req.query);
        if (!objMeeting) {
            util.setError(404, `Cannot find meeting with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found meeting', objMeeting);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

meetingsCtrl.findOneByEmailReminderSent = async (req, res) => {
    try {
        const { emailReminderSent } = req.params;
        const objMeeting = await meetingService.findOneByEmailReminderSent(emailReminderSent, req.query);
        if (!objMeeting) {
            util.setError(404, `Cannot find meeting with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found meeting', objMeeting);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

meetingsCtrl.findOneByDurationHours = async (req, res) => {
    try {
        const { durationHours } = req.params;
        const objMeeting = await meetingService.findOneByDurationHours(durationHours, req.query);
        if (!objMeeting) {
            util.setError(404, `Cannot find meeting with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found meeting', objMeeting);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

meetingsCtrl.findOneByDurationMinutes = async (req, res) => {
    try {
        const { durationMinutes } = req.params;
        const objMeeting = await meetingService.findOneByDurationMinutes(durationMinutes, req.query);
        if (!objMeeting) {
            util.setError(404, `Cannot find meeting with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found meeting', objMeeting);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

meetingsCtrl.findOneByReminderTime = async (req, res) => {
    try {
        const { reminderTime } = req.params;
        const objMeeting = await meetingService.findOneByReminderTime(reminderTime, req.query);
        if (!objMeeting) {
            util.setError(404, `Cannot find meeting with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found meeting', objMeeting);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

meetingsCtrl.findOneByEmailReminderTime = async (req, res) => {
    try {
        const { emailReminderTime } = req.params;
        const objMeeting = await meetingService.findOneByEmailReminderTime(emailReminderTime, req.query);
        if (!objMeeting) {
            util.setError(404, `Cannot find meeting with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found meeting', objMeeting);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

meetingsCtrl.findOneBySequence = async (req, res) => {
    try {
        const { sequence } = req.params;
        const objMeeting = await meetingService.findOneBySequence(sequence, req.query);
        if (!objMeeting) {
            util.setError(404, `Cannot find meeting with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found meeting', objMeeting);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

meetingsCtrl.findOneByRepeatInterval = async (req, res) => {
    try {
        const { repeatInterval } = req.params;
        const objMeeting = await meetingService.findOneByRepeatInterval(repeatInterval, req.query);
        if (!objMeeting) {
            util.setError(404, `Cannot find meeting with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found meeting', objMeeting);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

meetingsCtrl.findOneByRepeatCount = async (req, res) => {
    try {
        const { repeatCount } = req.params;
        const objMeeting = await meetingService.findOneByRepeatCount(repeatCount, req.query);
        if (!objMeeting) {
            util.setError(404, `Cannot find meeting with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found meeting', objMeeting);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

meetingsCtrl.findOneByGsyncLastsync = async (req, res) => {
    try {
        const { gsyncLastsync } = req.params;
        const objMeeting = await meetingService.findOneByGsyncLastsync(gsyncLastsync, req.query);
        if (!objMeeting) {
            util.setError(404, `Cannot find meeting with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found meeting', objMeeting);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

meetingsCtrl.findOneByName = async (req, res) => {
    try {
        const { name } = req.params;
        const objMeeting = await meetingService.findOneByName(name, req.query);
        if (!objMeeting) {
            util.setError(404, `Cannot find meeting with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found meeting', objMeeting);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

meetingsCtrl.findOneByLocation = async (req, res) => {
    try {
        const { location } = req.params;
        const objMeeting = await meetingService.findOneByLocation(location, req.query);
        if (!objMeeting) {
            util.setError(404, `Cannot find meeting with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found meeting', objMeeting);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

meetingsCtrl.findOneByPassword = async (req, res) => {
    try {
        const { password } = req.params;
        const objMeeting = await meetingService.findOneByPassword(password, req.query);
        if (!objMeeting) {
            util.setError(404, `Cannot find meeting with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found meeting', objMeeting);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

meetingsCtrl.findOneByJoinUrl = async (req, res) => {
    try {
        const { joinUrl } = req.params;
        const objMeeting = await meetingService.findOneByJoinUrl(joinUrl, req.query);
        if (!objMeeting) {
            util.setError(404, `Cannot find meeting with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found meeting', objMeeting);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

meetingsCtrl.findOneByHostUrl = async (req, res) => {
    try {
        const { hostUrl } = req.params;
        const objMeeting = await meetingService.findOneByHostUrl(hostUrl, req.query);
        if (!objMeeting) {
            util.setError(404, `Cannot find meeting with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found meeting', objMeeting);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

meetingsCtrl.findOneByDisplayedUrl = async (req, res) => {
    try {
        const { displayedUrl } = req.params;
        const objMeeting = await meetingService.findOneByDisplayedUrl(displayedUrl, req.query);
        if (!objMeeting) {
            util.setError(404, `Cannot find meeting with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found meeting', objMeeting);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

meetingsCtrl.findOneByCreator = async (req, res) => {
    try {
        const { creator } = req.params;
        const objMeeting = await meetingService.findOneByCreator(creator, req.query);
        if (!objMeeting) {
            util.setError(404, `Cannot find meeting with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found meeting', objMeeting);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

meetingsCtrl.findOneByExternalId = async (req, res) => {
    try {
        const { externalId } = req.params;
        const objMeeting = await meetingService.findOneByExternalId(externalId, req.query);
        if (!objMeeting) {
            util.setError(404, `Cannot find meeting with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found meeting', objMeeting);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

meetingsCtrl.findOneByParentType = async (req, res) => {
    try {
        const { parentType } = req.params;
        const objMeeting = await meetingService.findOneByParentType(parentType, req.query);
        if (!objMeeting) {
            util.setError(404, `Cannot find meeting with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found meeting', objMeeting);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

meetingsCtrl.findOneByStatus = async (req, res) => {
    try {
        const { status } = req.params;
        const objMeeting = await meetingService.findOneByStatus(status, req.query);
        if (!objMeeting) {
            util.setError(404, `Cannot find meeting with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found meeting', objMeeting);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

meetingsCtrl.findOneByType = async (req, res) => {
    try {
        const { type } = req.params;
        const objMeeting = await meetingService.findOneByType(type, req.query);
        if (!objMeeting) {
            util.setError(404, `Cannot find meeting with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found meeting', objMeeting);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

meetingsCtrl.findOneByOutlookId = async (req, res) => {
    try {
        const { outlookId } = req.params;
        const objMeeting = await meetingService.findOneByOutlookId(outlookId, req.query);
        if (!objMeeting) {
            util.setError(404, `Cannot find meeting with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found meeting', objMeeting);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

meetingsCtrl.findOneByRepeatType = async (req, res) => {
    try {
        const { repeatType } = req.params;
        const objMeeting = await meetingService.findOneByRepeatType(repeatType, req.query);
        if (!objMeeting) {
            util.setError(404, `Cannot find meeting with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found meeting', objMeeting);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

meetingsCtrl.findOneByRepeatDow = async (req, res) => {
    try {
        const { repeatDow } = req.params;
        const objMeeting = await meetingService.findOneByRepeatDow(repeatDow, req.query);
        if (!objMeeting) {
            util.setError(404, `Cannot find meeting with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found meeting', objMeeting);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

meetingsCtrl.findOneByRecurringSource = async (req, res) => {
    try {
        const { recurringSource } = req.params;
        const objMeeting = await meetingService.findOneByRecurringSource(recurringSource, req.query);
        if (!objMeeting) {
            util.setError(404, `Cannot find meeting with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found meeting', objMeeting);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

meetingsCtrl.findOneByGsyncId = async (req, res) => {
    try {
        const { gsyncId } = req.params;
        const objMeeting = await meetingService.findOneByGsyncId(gsyncId, req.query);
        if (!objMeeting) {
            util.setError(404, `Cannot find meeting with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found meeting', objMeeting);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

meetingsCtrl.findOneByDescription = async (req, res) => {
    try {
        const { description } = req.params;
        const objMeeting = await meetingService.findOneByDescription(description, req.query);
        if (!objMeeting) {
            util.setError(404, `Cannot find meeting with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found meeting', objMeeting);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

meetingsCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objMeeting = await meetingService.findOneByDateEntered(dateEntered, req.query);
        if (!objMeeting) {
            util.setError(404, `Cannot find meeting with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found meeting', objMeeting);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

meetingsCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objMeeting = await meetingService.findOneByDateModified(dateModified, req.query);
        if (!objMeeting) {
            util.setError(404, `Cannot find meeting with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found meeting', objMeeting);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

meetingsCtrl.findOneByDateStart = async (req, res) => {
    try {
        const { dateStart } = req.params;
        const objMeeting = await meetingService.findOneByDateStart(dateStart, req.query);
        if (!objMeeting) {
            util.setError(404, `Cannot find meeting with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found meeting', objMeeting);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

meetingsCtrl.findOneByDateEnd = async (req, res) => {
    try {
        const { dateEnd } = req.params;
        const objMeeting = await meetingService.findOneByDateEnd(dateEnd, req.query);
        if (!objMeeting) {
            util.setError(404, `Cannot find meeting with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found meeting', objMeeting);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

meetingsCtrl.findOneByRepeatUntil = async (req, res) => {
    try {
        const { repeatUntil } = req.params;
        const objMeeting = await meetingService.findOneByRepeatUntil(repeatUntil, req.query);
        if (!objMeeting) {
            util.setError(404, `Cannot find meeting with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found meeting', objMeeting);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

meetingsCtrl.findOneByModifiedUserId = async (req, res) => {
    try {
        const { modifiedUserId } = req.params;
        const objMeeting = await meetingService.findOneByModifiedUserId(modifiedUserId, req.query);
        if (!objMeeting) {
            util.setError(404, `Cannot find meeting with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found meeting', objMeeting);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

meetingsCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objMeeting = await meetingService.findOneByCreatedBy(createdBy, req.query);
        if (!objMeeting) {
            util.setError(404, `Cannot find meeting with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found meeting', objMeeting);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

meetingsCtrl.findOneByAssignedUserId = async (req, res) => {
    try {
        const { assignedUserId } = req.params;
        const objMeeting = await meetingService.findOneByAssignedUserId(assignedUserId, req.query);
        if (!objMeeting) {
            util.setError(404, `Cannot find meeting with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found meeting', objMeeting);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

meetingsCtrl.findOneByParentId = async (req, res) => {
    try {
        const { parentId } = req.params;
        const objMeeting = await meetingService.findOneByParentId(parentId, req.query);
        if (!objMeeting) {
            util.setError(404, `Cannot find meeting with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found meeting', objMeeting);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

meetingsCtrl.findOneByRepeatParentId = async (req, res) => {
    try {
        const { repeatParentId } = req.params;
        const objMeeting = await meetingService.findOneByRepeatParentId(repeatParentId, req.query);
        if (!objMeeting) {
            util.setError(404, `Cannot find meeting with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found meeting', objMeeting);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



meetingsCtrl.updateMeetingById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objMeeting = await meetingService.updateMeetingById(id, req.body);
            if (!objMeeting) {
                util.setError(404, `Cannot find meeting with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Meeting updated', objMeeting);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

meetingsCtrl.updateMeetingByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objMeeting = await meetingService.updateMeetingByDeleted(deleted, req.body);
            if (!objMeeting) {
                util.setError(404, `Cannot find meeting with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Meeting updated', objMeeting);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

meetingsCtrl.updateMeetingByEmailReminderSent = async (req, res) => {
     const { emailReminderSent } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objMeeting = await meetingService.updateMeetingByEmailReminderSent(emailReminderSent, req.body);
            if (!objMeeting) {
                util.setError(404, `Cannot find meeting with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Meeting updated', objMeeting);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

meetingsCtrl.updateMeetingByDurationHours = async (req, res) => {
     const { durationHours } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objMeeting = await meetingService.updateMeetingByDurationHours(durationHours, req.body);
            if (!objMeeting) {
                util.setError(404, `Cannot find meeting with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Meeting updated', objMeeting);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

meetingsCtrl.updateMeetingByDurationMinutes = async (req, res) => {
     const { durationMinutes } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objMeeting = await meetingService.updateMeetingByDurationMinutes(durationMinutes, req.body);
            if (!objMeeting) {
                util.setError(404, `Cannot find meeting with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Meeting updated', objMeeting);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

meetingsCtrl.updateMeetingByReminderTime = async (req, res) => {
     const { reminderTime } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objMeeting = await meetingService.updateMeetingByReminderTime(reminderTime, req.body);
            if (!objMeeting) {
                util.setError(404, `Cannot find meeting with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Meeting updated', objMeeting);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

meetingsCtrl.updateMeetingByEmailReminderTime = async (req, res) => {
     const { emailReminderTime } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objMeeting = await meetingService.updateMeetingByEmailReminderTime(emailReminderTime, req.body);
            if (!objMeeting) {
                util.setError(404, `Cannot find meeting with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Meeting updated', objMeeting);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

meetingsCtrl.updateMeetingBySequence = async (req, res) => {
     const { sequence } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objMeeting = await meetingService.updateMeetingBySequence(sequence, req.body);
            if (!objMeeting) {
                util.setError(404, `Cannot find meeting with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Meeting updated', objMeeting);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

meetingsCtrl.updateMeetingByRepeatInterval = async (req, res) => {
     const { repeatInterval } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objMeeting = await meetingService.updateMeetingByRepeatInterval(repeatInterval, req.body);
            if (!objMeeting) {
                util.setError(404, `Cannot find meeting with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Meeting updated', objMeeting);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

meetingsCtrl.updateMeetingByRepeatCount = async (req, res) => {
     const { repeatCount } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objMeeting = await meetingService.updateMeetingByRepeatCount(repeatCount, req.body);
            if (!objMeeting) {
                util.setError(404, `Cannot find meeting with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Meeting updated', objMeeting);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

meetingsCtrl.updateMeetingByGsyncLastsync = async (req, res) => {
     const { gsyncLastsync } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objMeeting = await meetingService.updateMeetingByGsyncLastsync(gsyncLastsync, req.body);
            if (!objMeeting) {
                util.setError(404, `Cannot find meeting with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Meeting updated', objMeeting);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

meetingsCtrl.updateMeetingByName = async (req, res) => {
     const { name } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objMeeting = await meetingService.updateMeetingByName(name, req.body);
            if (!objMeeting) {
                util.setError(404, `Cannot find meeting with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Meeting updated', objMeeting);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

meetingsCtrl.updateMeetingByLocation = async (req, res) => {
     const { location } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objMeeting = await meetingService.updateMeetingByLocation(location, req.body);
            if (!objMeeting) {
                util.setError(404, `Cannot find meeting with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Meeting updated', objMeeting);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

meetingsCtrl.updateMeetingByPassword = async (req, res) => {
     const { password } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objMeeting = await meetingService.updateMeetingByPassword(password, req.body);
            if (!objMeeting) {
                util.setError(404, `Cannot find meeting with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Meeting updated', objMeeting);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

meetingsCtrl.updateMeetingByJoinUrl = async (req, res) => {
     const { joinUrl } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objMeeting = await meetingService.updateMeetingByJoinUrl(joinUrl, req.body);
            if (!objMeeting) {
                util.setError(404, `Cannot find meeting with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Meeting updated', objMeeting);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

meetingsCtrl.updateMeetingByHostUrl = async (req, res) => {
     const { hostUrl } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objMeeting = await meetingService.updateMeetingByHostUrl(hostUrl, req.body);
            if (!objMeeting) {
                util.setError(404, `Cannot find meeting with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Meeting updated', objMeeting);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

meetingsCtrl.updateMeetingByDisplayedUrl = async (req, res) => {
     const { displayedUrl } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objMeeting = await meetingService.updateMeetingByDisplayedUrl(displayedUrl, req.body);
            if (!objMeeting) {
                util.setError(404, `Cannot find meeting with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Meeting updated', objMeeting);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

meetingsCtrl.updateMeetingByCreator = async (req, res) => {
     const { creator } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objMeeting = await meetingService.updateMeetingByCreator(creator, req.body);
            if (!objMeeting) {
                util.setError(404, `Cannot find meeting with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Meeting updated', objMeeting);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

meetingsCtrl.updateMeetingByExternalId = async (req, res) => {
     const { externalId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objMeeting = await meetingService.updateMeetingByExternalId(externalId, req.body);
            if (!objMeeting) {
                util.setError(404, `Cannot find meeting with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Meeting updated', objMeeting);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

meetingsCtrl.updateMeetingByParentType = async (req, res) => {
     const { parentType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objMeeting = await meetingService.updateMeetingByParentType(parentType, req.body);
            if (!objMeeting) {
                util.setError(404, `Cannot find meeting with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Meeting updated', objMeeting);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

meetingsCtrl.updateMeetingByStatus = async (req, res) => {
     const { status } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objMeeting = await meetingService.updateMeetingByStatus(status, req.body);
            if (!objMeeting) {
                util.setError(404, `Cannot find meeting with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Meeting updated', objMeeting);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

meetingsCtrl.updateMeetingByType = async (req, res) => {
     const { type } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objMeeting = await meetingService.updateMeetingByType(type, req.body);
            if (!objMeeting) {
                util.setError(404, `Cannot find meeting with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Meeting updated', objMeeting);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

meetingsCtrl.updateMeetingByOutlookId = async (req, res) => {
     const { outlookId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objMeeting = await meetingService.updateMeetingByOutlookId(outlookId, req.body);
            if (!objMeeting) {
                util.setError(404, `Cannot find meeting with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Meeting updated', objMeeting);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

meetingsCtrl.updateMeetingByRepeatType = async (req, res) => {
     const { repeatType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objMeeting = await meetingService.updateMeetingByRepeatType(repeatType, req.body);
            if (!objMeeting) {
                util.setError(404, `Cannot find meeting with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Meeting updated', objMeeting);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

meetingsCtrl.updateMeetingByRepeatDow = async (req, res) => {
     const { repeatDow } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objMeeting = await meetingService.updateMeetingByRepeatDow(repeatDow, req.body);
            if (!objMeeting) {
                util.setError(404, `Cannot find meeting with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Meeting updated', objMeeting);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

meetingsCtrl.updateMeetingByRecurringSource = async (req, res) => {
     const { recurringSource } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objMeeting = await meetingService.updateMeetingByRecurringSource(recurringSource, req.body);
            if (!objMeeting) {
                util.setError(404, `Cannot find meeting with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Meeting updated', objMeeting);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

meetingsCtrl.updateMeetingByGsyncId = async (req, res) => {
     const { gsyncId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objMeeting = await meetingService.updateMeetingByGsyncId(gsyncId, req.body);
            if (!objMeeting) {
                util.setError(404, `Cannot find meeting with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Meeting updated', objMeeting);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

meetingsCtrl.updateMeetingByDescription = async (req, res) => {
     const { description } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objMeeting = await meetingService.updateMeetingByDescription(description, req.body);
            if (!objMeeting) {
                util.setError(404, `Cannot find meeting with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Meeting updated', objMeeting);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

meetingsCtrl.updateMeetingByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objMeeting = await meetingService.updateMeetingByDateEntered(dateEntered, req.body);
            if (!objMeeting) {
                util.setError(404, `Cannot find meeting with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Meeting updated', objMeeting);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

meetingsCtrl.updateMeetingByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objMeeting = await meetingService.updateMeetingByDateModified(dateModified, req.body);
            if (!objMeeting) {
                util.setError(404, `Cannot find meeting with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Meeting updated', objMeeting);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

meetingsCtrl.updateMeetingByDateStart = async (req, res) => {
     const { dateStart } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objMeeting = await meetingService.updateMeetingByDateStart(dateStart, req.body);
            if (!objMeeting) {
                util.setError(404, `Cannot find meeting with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Meeting updated', objMeeting);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

meetingsCtrl.updateMeetingByDateEnd = async (req, res) => {
     const { dateEnd } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objMeeting = await meetingService.updateMeetingByDateEnd(dateEnd, req.body);
            if (!objMeeting) {
                util.setError(404, `Cannot find meeting with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Meeting updated', objMeeting);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

meetingsCtrl.updateMeetingByRepeatUntil = async (req, res) => {
     const { repeatUntil } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objMeeting = await meetingService.updateMeetingByRepeatUntil(repeatUntil, req.body);
            if (!objMeeting) {
                util.setError(404, `Cannot find meeting with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Meeting updated', objMeeting);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

meetingsCtrl.updateMeetingByModifiedUserId = async (req, res) => {
     const { modifiedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objMeeting = await meetingService.updateMeetingByModifiedUserId(modifiedUserId, req.body);
            if (!objMeeting) {
                util.setError(404, `Cannot find meeting with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Meeting updated', objMeeting);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

meetingsCtrl.updateMeetingByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objMeeting = await meetingService.updateMeetingByCreatedBy(createdBy, req.body);
            if (!objMeeting) {
                util.setError(404, `Cannot find meeting with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Meeting updated', objMeeting);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

meetingsCtrl.updateMeetingByAssignedUserId = async (req, res) => {
     const { assignedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objMeeting = await meetingService.updateMeetingByAssignedUserId(assignedUserId, req.body);
            if (!objMeeting) {
                util.setError(404, `Cannot find meeting with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Meeting updated', objMeeting);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

meetingsCtrl.updateMeetingByParentId = async (req, res) => {
     const { parentId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objMeeting = await meetingService.updateMeetingByParentId(parentId, req.body);
            if (!objMeeting) {
                util.setError(404, `Cannot find meeting with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Meeting updated', objMeeting);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

meetingsCtrl.updateMeetingByRepeatParentId = async (req, res) => {
     const { repeatParentId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objMeeting = await meetingService.updateMeetingByRepeatParentId(repeatParentId, req.body);
            if (!objMeeting) {
                util.setError(404, `Cannot find meeting with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Meeting updated', objMeeting);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = meetingsCtrl;
//</es-section>
