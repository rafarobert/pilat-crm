/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:35:11 GMT-0400 (Bolivia Time)
 * Time: 15:35:11
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:35:11 GMT-0400 (Bolivia Time)
 * Last time updated: 15:35:11
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const aopCaseEventService = require('../services/aop_case_events.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const aopCaseEventsCtrl = {};
aopCaseEventsCtrl.service = aopCaseEventService;


aopCaseEventsCtrl.getAllAopCaseEvents = async (req, res) => {
    try {
        const objAopCaseEvents = await aopCaseEventService.getAllAopCaseEvents(req.query);
        if (objAopCaseEvents.length > 0) {
            util.setSuccess(200, 'AopCaseEvents retrieved', objAopCaseEvents);
        } else {
            util.setSuccess(200, 'No aopCaseEvent found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aopCaseEventsCtrl.getAAopCaseEvent = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAopCaseEvent = await aopCaseEventService.getAAopCaseEvent(id, req.query);
        if (!objAopCaseEvent) {
            util.setError(404, `Cannot find aopCaseEvent with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found aopCaseEvent', objAopCaseEvent);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aopCaseEventsCtrl.addAopCaseEvent = async (req, res) => {
    try {
        const objAopCaseEvent = await aopCaseEventService.addAopCaseEvent(req.body);
        util.setSuccess(201, 'AopCaseEvent Added!', objAopCaseEvent);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aopCaseEventsCtrl.updateAopCaseEvent = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAopCaseEvent = await aopCaseEventService.updateAopCaseEvent(id, req.body);
        if (!objAopCaseEvent) {
            util.setError(404, `Cannot find aopCaseEvent with the id: ${id}`);
        } else {
            util.setSuccess(200, 'AopCaseEvent updated', objAopCaseEvent);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

aopCaseEventsCtrl.deleteAopCaseEvent = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objAopCaseEvent = await aopCaseEventService.deleteAopCaseEvent(id);
        if (objAopCaseEvent) {
            util.setSuccess(200, 'AopCaseEvent deleted', objAopCaseEvent);
        } else {
            util.setError(404, `AopCaseEvent with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



aopCaseEventsCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objAopCaseEvent = await aopCaseEventService.findOneById(id, req.query);
        if (!objAopCaseEvent) {
            util.setError(404, `Cannot find aopCaseEvent with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aopCaseEvent', objAopCaseEvent);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aopCaseEventsCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objAopCaseEvent = await aopCaseEventService.findOneByDeleted(deleted, req.query);
        if (!objAopCaseEvent) {
            util.setError(404, `Cannot find aopCaseEvent with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aopCaseEvent', objAopCaseEvent);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aopCaseEventsCtrl.findOneByName = async (req, res) => {
    try {
        const { name } = req.params;
        const objAopCaseEvent = await aopCaseEventService.findOneByName(name, req.query);
        if (!objAopCaseEvent) {
            util.setError(404, `Cannot find aopCaseEvent with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aopCaseEvent', objAopCaseEvent);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aopCaseEventsCtrl.findOneByDescription = async (req, res) => {
    try {
        const { description } = req.params;
        const objAopCaseEvent = await aopCaseEventService.findOneByDescription(description, req.query);
        if (!objAopCaseEvent) {
            util.setError(404, `Cannot find aopCaseEvent with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aopCaseEvent', objAopCaseEvent);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aopCaseEventsCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objAopCaseEvent = await aopCaseEventService.findOneByDateEntered(dateEntered, req.query);
        if (!objAopCaseEvent) {
            util.setError(404, `Cannot find aopCaseEvent with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aopCaseEvent', objAopCaseEvent);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aopCaseEventsCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objAopCaseEvent = await aopCaseEventService.findOneByDateModified(dateModified, req.query);
        if (!objAopCaseEvent) {
            util.setError(404, `Cannot find aopCaseEvent with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aopCaseEvent', objAopCaseEvent);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aopCaseEventsCtrl.findOneByModifiedUserId = async (req, res) => {
    try {
        const { modifiedUserId } = req.params;
        const objAopCaseEvent = await aopCaseEventService.findOneByModifiedUserId(modifiedUserId, req.query);
        if (!objAopCaseEvent) {
            util.setError(404, `Cannot find aopCaseEvent with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aopCaseEvent', objAopCaseEvent);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aopCaseEventsCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objAopCaseEvent = await aopCaseEventService.findOneByCreatedBy(createdBy, req.query);
        if (!objAopCaseEvent) {
            util.setError(404, `Cannot find aopCaseEvent with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aopCaseEvent', objAopCaseEvent);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aopCaseEventsCtrl.findOneByAssignedUserId = async (req, res) => {
    try {
        const { assignedUserId } = req.params;
        const objAopCaseEvent = await aopCaseEventService.findOneByAssignedUserId(assignedUserId, req.query);
        if (!objAopCaseEvent) {
            util.setError(404, `Cannot find aopCaseEvent with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aopCaseEvent', objAopCaseEvent);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aopCaseEventsCtrl.findOneByCaseId = async (req, res) => {
    try {
        const { caseId } = req.params;
        const objAopCaseEvent = await aopCaseEventService.findOneByCaseId(caseId, req.query);
        if (!objAopCaseEvent) {
            util.setError(404, `Cannot find aopCaseEvent with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aopCaseEvent', objAopCaseEvent);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



aopCaseEventsCtrl.updateAopCaseEventById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAopCaseEvent = await aopCaseEventService.updateAopCaseEventById(id, req.body);
            if (!objAopCaseEvent) {
                util.setError(404, `Cannot find aopCaseEvent with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AopCaseEvent updated', objAopCaseEvent);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aopCaseEventsCtrl.updateAopCaseEventByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAopCaseEvent = await aopCaseEventService.updateAopCaseEventByDeleted(deleted, req.body);
            if (!objAopCaseEvent) {
                util.setError(404, `Cannot find aopCaseEvent with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AopCaseEvent updated', objAopCaseEvent);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aopCaseEventsCtrl.updateAopCaseEventByName = async (req, res) => {
     const { name } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAopCaseEvent = await aopCaseEventService.updateAopCaseEventByName(name, req.body);
            if (!objAopCaseEvent) {
                util.setError(404, `Cannot find aopCaseEvent with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AopCaseEvent updated', objAopCaseEvent);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aopCaseEventsCtrl.updateAopCaseEventByDescription = async (req, res) => {
     const { description } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAopCaseEvent = await aopCaseEventService.updateAopCaseEventByDescription(description, req.body);
            if (!objAopCaseEvent) {
                util.setError(404, `Cannot find aopCaseEvent with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AopCaseEvent updated', objAopCaseEvent);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aopCaseEventsCtrl.updateAopCaseEventByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAopCaseEvent = await aopCaseEventService.updateAopCaseEventByDateEntered(dateEntered, req.body);
            if (!objAopCaseEvent) {
                util.setError(404, `Cannot find aopCaseEvent with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AopCaseEvent updated', objAopCaseEvent);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aopCaseEventsCtrl.updateAopCaseEventByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAopCaseEvent = await aopCaseEventService.updateAopCaseEventByDateModified(dateModified, req.body);
            if (!objAopCaseEvent) {
                util.setError(404, `Cannot find aopCaseEvent with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AopCaseEvent updated', objAopCaseEvent);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aopCaseEventsCtrl.updateAopCaseEventByModifiedUserId = async (req, res) => {
     const { modifiedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAopCaseEvent = await aopCaseEventService.updateAopCaseEventByModifiedUserId(modifiedUserId, req.body);
            if (!objAopCaseEvent) {
                util.setError(404, `Cannot find aopCaseEvent with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AopCaseEvent updated', objAopCaseEvent);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aopCaseEventsCtrl.updateAopCaseEventByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAopCaseEvent = await aopCaseEventService.updateAopCaseEventByCreatedBy(createdBy, req.body);
            if (!objAopCaseEvent) {
                util.setError(404, `Cannot find aopCaseEvent with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AopCaseEvent updated', objAopCaseEvent);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aopCaseEventsCtrl.updateAopCaseEventByAssignedUserId = async (req, res) => {
     const { assignedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAopCaseEvent = await aopCaseEventService.updateAopCaseEventByAssignedUserId(assignedUserId, req.body);
            if (!objAopCaseEvent) {
                util.setError(404, `Cannot find aopCaseEvent with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AopCaseEvent updated', objAopCaseEvent);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aopCaseEventsCtrl.updateAopCaseEventByCaseId = async (req, res) => {
     const { caseId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAopCaseEvent = await aopCaseEventService.updateAopCaseEventByCaseId(caseId, req.body);
            if (!objAopCaseEvent) {
                util.setError(404, `Cannot find aopCaseEvent with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AopCaseEvent updated', objAopCaseEvent);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = aopCaseEventsCtrl;
//</es-section>
