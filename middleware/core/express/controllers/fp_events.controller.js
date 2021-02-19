/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:37:18 GMT-0400 (Bolivia Time)
 * Time: 18:37:18
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:37:18 GMT-0400 (Bolivia Time)
 * Last time updated: 18:37:18
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const fpEventService = require('../services/fp_events.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const fpEventsCtrl = {};
fpEventsCtrl.service = fpEventService;


fpEventsCtrl.getAllFpEvents = async (req, res) => {
    try {
        const objFpEvents = await fpEventService.getAllFpEvents(req.query);
        if (objFpEvents.length > 0) {
            util.setSuccess(200, 'FpEvents retrieved', objFpEvents);
        } else {
            util.setSuccess(200, 'No fpEvent found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventsCtrl.getAFpEvent = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objFpEvent = await fpEventService.getAFpEvent(id, req.query);
        if (!objFpEvent) {
            util.setError(404, `Cannot find fpEvent with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found fpEvent', objFpEvent);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventsCtrl.addFpEvent = async (req, res) => {
    try {
        const objFpEvent = await fpEventService.addFpEvent(req.body);
        util.setSuccess(201, 'FpEvent Added!', objFpEvent);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventsCtrl.updateFpEvent = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objFpEvent = await fpEventService.updateFpEvent(id, req.body);
        if (!objFpEvent) {
            util.setError(404, `Cannot find fpEvent with the id: ${id}`);
        } else {
            util.setSuccess(200, 'FpEvent updated', objFpEvent);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

fpEventsCtrl.deleteFpEvent = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objFpEvent = await fpEventService.deleteFpEvent(id);
        if (objFpEvent) {
            util.setSuccess(200, 'FpEvent deleted', objFpEvent);
        } else {
            util.setError(404, `FpEvent with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



fpEventsCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objFpEvent = await fpEventService.findOneById(id, req.query);
        if (!objFpEvent) {
            util.setError(404, `Cannot find fpEvent with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEvent', objFpEvent);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventsCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objFpEvent = await fpEventService.findOneByDeleted(deleted, req.query);
        if (!objFpEvent) {
            util.setError(404, `Cannot find fpEvent with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEvent', objFpEvent);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventsCtrl.findOneByDurationHours = async (req, res) => {
    try {
        const { durationHours } = req.params;
        const objFpEvent = await fpEventService.findOneByDurationHours(durationHours, req.query);
        if (!objFpEvent) {
            util.setError(404, `Cannot find fpEvent with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEvent', objFpEvent);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventsCtrl.findOneByDurationMinutes = async (req, res) => {
    try {
        const { durationMinutes } = req.params;
        const objFpEvent = await fpEventService.findOneByDurationMinutes(durationMinutes, req.query);
        if (!objFpEvent) {
            util.setError(404, `Cannot find fpEvent with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEvent', objFpEvent);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventsCtrl.findOneByBudget = async (req, res) => {
    try {
        const { budget } = req.params;
        const objFpEvent = await fpEventService.findOneByBudget(budget, req.query);
        if (!objFpEvent) {
            util.setError(404, `Cannot find fpEvent with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEvent', objFpEvent);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventsCtrl.findOneByName = async (req, res) => {
    try {
        const { name } = req.params;
        const objFpEvent = await fpEventService.findOneByName(name, req.query);
        if (!objFpEvent) {
            util.setError(404, `Cannot find fpEvent with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEvent', objFpEvent);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventsCtrl.findOneByInviteTemplates = async (req, res) => {
    try {
        const { inviteTemplates } = req.params;
        const objFpEvent = await fpEventService.findOneByInviteTemplates(inviteTemplates, req.query);
        if (!objFpEvent) {
            util.setError(404, `Cannot find fpEvent with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEvent', objFpEvent);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventsCtrl.findOneByAcceptRedirect = async (req, res) => {
    try {
        const { acceptRedirect } = req.params;
        const objFpEvent = await fpEventService.findOneByAcceptRedirect(acceptRedirect, req.query);
        if (!objFpEvent) {
            util.setError(404, `Cannot find fpEvent with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEvent', objFpEvent);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventsCtrl.findOneByDeclineRedirect = async (req, res) => {
    try {
        const { declineRedirect } = req.params;
        const objFpEvent = await fpEventService.findOneByDeclineRedirect(declineRedirect, req.query);
        if (!objFpEvent) {
            util.setError(404, `Cannot find fpEvent with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEvent', objFpEvent);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventsCtrl.findOneByActivityStatusType = async (req, res) => {
    try {
        const { activityStatusType } = req.params;
        const objFpEvent = await fpEventService.findOneByActivityStatusType(activityStatusType, req.query);
        if (!objFpEvent) {
            util.setError(404, `Cannot find fpEvent with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEvent', objFpEvent);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventsCtrl.findOneByDescription = async (req, res) => {
    try {
        const { description } = req.params;
        const objFpEvent = await fpEventService.findOneByDescription(description, req.query);
        if (!objFpEvent) {
            util.setError(404, `Cannot find fpEvent with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEvent', objFpEvent);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventsCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objFpEvent = await fpEventService.findOneByDateEntered(dateEntered, req.query);
        if (!objFpEvent) {
            util.setError(404, `Cannot find fpEvent with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEvent', objFpEvent);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventsCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objFpEvent = await fpEventService.findOneByDateModified(dateModified, req.query);
        if (!objFpEvent) {
            util.setError(404, `Cannot find fpEvent with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEvent', objFpEvent);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventsCtrl.findOneByDateStart = async (req, res) => {
    try {
        const { dateStart } = req.params;
        const objFpEvent = await fpEventService.findOneByDateStart(dateStart, req.query);
        if (!objFpEvent) {
            util.setError(404, `Cannot find fpEvent with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEvent', objFpEvent);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventsCtrl.findOneByDateEnd = async (req, res) => {
    try {
        const { dateEnd } = req.params;
        const objFpEvent = await fpEventService.findOneByDateEnd(dateEnd, req.query);
        if (!objFpEvent) {
            util.setError(404, `Cannot find fpEvent with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEvent', objFpEvent);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventsCtrl.findOneByModifiedUserId = async (req, res) => {
    try {
        const { modifiedUserId } = req.params;
        const objFpEvent = await fpEventService.findOneByModifiedUserId(modifiedUserId, req.query);
        if (!objFpEvent) {
            util.setError(404, `Cannot find fpEvent with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEvent', objFpEvent);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventsCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objFpEvent = await fpEventService.findOneByCreatedBy(createdBy, req.query);
        if (!objFpEvent) {
            util.setError(404, `Cannot find fpEvent with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEvent', objFpEvent);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventsCtrl.findOneByAssignedUserId = async (req, res) => {
    try {
        const { assignedUserId } = req.params;
        const objFpEvent = await fpEventService.findOneByAssignedUserId(assignedUserId, req.query);
        if (!objFpEvent) {
            util.setError(404, `Cannot find fpEvent with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEvent', objFpEvent);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventsCtrl.findOneByCurrencyId = async (req, res) => {
    try {
        const { currencyId } = req.params;
        const objFpEvent = await fpEventService.findOneByCurrencyId(currencyId, req.query);
        if (!objFpEvent) {
            util.setError(404, `Cannot find fpEvent with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEvent', objFpEvent);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



fpEventsCtrl.updateFpEventById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objFpEvent = await fpEventService.updateFpEventById(id, req.body);
            if (!objFpEvent) {
                util.setError(404, `Cannot find fpEvent with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEvent updated', objFpEvent);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fpEventsCtrl.updateFpEventByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objFpEvent = await fpEventService.updateFpEventByDeleted(deleted, req.body);
            if (!objFpEvent) {
                util.setError(404, `Cannot find fpEvent with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEvent updated', objFpEvent);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fpEventsCtrl.updateFpEventByDurationHours = async (req, res) => {
     const { durationHours } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objFpEvent = await fpEventService.updateFpEventByDurationHours(durationHours, req.body);
            if (!objFpEvent) {
                util.setError(404, `Cannot find fpEvent with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEvent updated', objFpEvent);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fpEventsCtrl.updateFpEventByDurationMinutes = async (req, res) => {
     const { durationMinutes } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objFpEvent = await fpEventService.updateFpEventByDurationMinutes(durationMinutes, req.body);
            if (!objFpEvent) {
                util.setError(404, `Cannot find fpEvent with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEvent updated', objFpEvent);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fpEventsCtrl.updateFpEventByBudget = async (req, res) => {
     const { budget } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objFpEvent = await fpEventService.updateFpEventByBudget(budget, req.body);
            if (!objFpEvent) {
                util.setError(404, `Cannot find fpEvent with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEvent updated', objFpEvent);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fpEventsCtrl.updateFpEventByName = async (req, res) => {
     const { name } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objFpEvent = await fpEventService.updateFpEventByName(name, req.body);
            if (!objFpEvent) {
                util.setError(404, `Cannot find fpEvent with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEvent updated', objFpEvent);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fpEventsCtrl.updateFpEventByInviteTemplates = async (req, res) => {
     const { inviteTemplates } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objFpEvent = await fpEventService.updateFpEventByInviteTemplates(inviteTemplates, req.body);
            if (!objFpEvent) {
                util.setError(404, `Cannot find fpEvent with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEvent updated', objFpEvent);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fpEventsCtrl.updateFpEventByAcceptRedirect = async (req, res) => {
     const { acceptRedirect } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objFpEvent = await fpEventService.updateFpEventByAcceptRedirect(acceptRedirect, req.body);
            if (!objFpEvent) {
                util.setError(404, `Cannot find fpEvent with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEvent updated', objFpEvent);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fpEventsCtrl.updateFpEventByDeclineRedirect = async (req, res) => {
     const { declineRedirect } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objFpEvent = await fpEventService.updateFpEventByDeclineRedirect(declineRedirect, req.body);
            if (!objFpEvent) {
                util.setError(404, `Cannot find fpEvent with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEvent updated', objFpEvent);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fpEventsCtrl.updateFpEventByActivityStatusType = async (req, res) => {
     const { activityStatusType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objFpEvent = await fpEventService.updateFpEventByActivityStatusType(activityStatusType, req.body);
            if (!objFpEvent) {
                util.setError(404, `Cannot find fpEvent with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEvent updated', objFpEvent);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fpEventsCtrl.updateFpEventByDescription = async (req, res) => {
     const { description } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objFpEvent = await fpEventService.updateFpEventByDescription(description, req.body);
            if (!objFpEvent) {
                util.setError(404, `Cannot find fpEvent with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEvent updated', objFpEvent);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fpEventsCtrl.updateFpEventByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objFpEvent = await fpEventService.updateFpEventByDateEntered(dateEntered, req.body);
            if (!objFpEvent) {
                util.setError(404, `Cannot find fpEvent with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEvent updated', objFpEvent);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fpEventsCtrl.updateFpEventByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objFpEvent = await fpEventService.updateFpEventByDateModified(dateModified, req.body);
            if (!objFpEvent) {
                util.setError(404, `Cannot find fpEvent with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEvent updated', objFpEvent);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fpEventsCtrl.updateFpEventByDateStart = async (req, res) => {
     const { dateStart } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objFpEvent = await fpEventService.updateFpEventByDateStart(dateStart, req.body);
            if (!objFpEvent) {
                util.setError(404, `Cannot find fpEvent with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEvent updated', objFpEvent);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fpEventsCtrl.updateFpEventByDateEnd = async (req, res) => {
     const { dateEnd } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objFpEvent = await fpEventService.updateFpEventByDateEnd(dateEnd, req.body);
            if (!objFpEvent) {
                util.setError(404, `Cannot find fpEvent with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEvent updated', objFpEvent);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fpEventsCtrl.updateFpEventByModifiedUserId = async (req, res) => {
     const { modifiedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objFpEvent = await fpEventService.updateFpEventByModifiedUserId(modifiedUserId, req.body);
            if (!objFpEvent) {
                util.setError(404, `Cannot find fpEvent with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEvent updated', objFpEvent);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fpEventsCtrl.updateFpEventByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objFpEvent = await fpEventService.updateFpEventByCreatedBy(createdBy, req.body);
            if (!objFpEvent) {
                util.setError(404, `Cannot find fpEvent with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEvent updated', objFpEvent);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fpEventsCtrl.updateFpEventByAssignedUserId = async (req, res) => {
     const { assignedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objFpEvent = await fpEventService.updateFpEventByAssignedUserId(assignedUserId, req.body);
            if (!objFpEvent) {
                util.setError(404, `Cannot find fpEvent with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEvent updated', objFpEvent);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fpEventsCtrl.updateFpEventByCurrencyId = async (req, res) => {
     const { currencyId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objFpEvent = await fpEventService.updateFpEventByCurrencyId(currencyId, req.body);
            if (!objFpEvent) {
                util.setError(404, `Cannot find fpEvent with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEvent updated', objFpEvent);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = fpEventsCtrl;
//</es-section>
