/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:36:33 GMT-0400 (Bolivia Time)
 * Time: 15:36:33
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:36:33 GMT-0400 (Bolivia Time)
 * Last time updated: 15:36:33
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const meetingLeadService = require('../services/meetings_leads.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const meetingsLeadsCtrl = {};
meetingsLeadsCtrl.service = meetingLeadService;


meetingsLeadsCtrl.getAllMeetingsLeads = async (req, res) => {
    try {
        const objMeetingsLeads = await meetingLeadService.getAllMeetingsLeads(req.query);
        if (objMeetingsLeads.length > 0) {
            util.setSuccess(200, 'MeetingsLeads retrieved', objMeetingsLeads);
        } else {
            util.setSuccess(200, 'No meetingLead found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

meetingsLeadsCtrl.getAMeetingLead = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objMeetingLead = await meetingLeadService.getAMeetingLead(id, req.query);
        if (!objMeetingLead) {
            util.setError(404, `Cannot find meetingLead with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found meetingLead', objMeetingLead);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

meetingsLeadsCtrl.addMeetingLead = async (req, res) => {
    try {
        const objMeetingLead = await meetingLeadService.addMeetingLead(req.body);
        util.setSuccess(201, 'MeetingLead Added!', objMeetingLead);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

meetingsLeadsCtrl.updateMeetingLead = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objMeetingLead = await meetingLeadService.updateMeetingLead(id, req.body);
        if (!objMeetingLead) {
            util.setError(404, `Cannot find meetingLead with the id: ${id}`);
        } else {
            util.setSuccess(200, 'MeetingLead updated', objMeetingLead);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

meetingsLeadsCtrl.deleteMeetingLead = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please provide a String value');
            return util.send(res);
        }
        const objMeetingLead = await meetingLeadService.deleteMeetingLead(id);
        if (objMeetingLead) {
            util.setSuccess(200, 'MeetingLead deleted', objMeetingLead);
        } else {
            util.setError(404, `MeetingLead with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



meetingsLeadsCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objMeetingLead = await meetingLeadService.findOneById(id, req.query);
        if (!objMeetingLead) {
            util.setError(404, `Cannot find meetingLead with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found meetingLead', objMeetingLead);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

meetingsLeadsCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objMeetingLead = await meetingLeadService.findOneByDeleted(deleted, req.query);
        if (!objMeetingLead) {
            util.setError(404, `Cannot find meetingLead with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found meetingLead', objMeetingLead);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

meetingsLeadsCtrl.findOneByMeetingId = async (req, res) => {
    try {
        const { meetingId } = req.params;
        const objMeetingLead = await meetingLeadService.findOneByMeetingId(meetingId, req.query);
        if (!objMeetingLead) {
            util.setError(404, `Cannot find meetingLead with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found meetingLead', objMeetingLead);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

meetingsLeadsCtrl.findOneByLeadId = async (req, res) => {
    try {
        const { leadId } = req.params;
        const objMeetingLead = await meetingLeadService.findOneByLeadId(leadId, req.query);
        if (!objMeetingLead) {
            util.setError(404, `Cannot find meetingLead with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found meetingLead', objMeetingLead);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

meetingsLeadsCtrl.findOneByRequired = async (req, res) => {
    try {
        const { required } = req.params;
        const objMeetingLead = await meetingLeadService.findOneByRequired(required, req.query);
        if (!objMeetingLead) {
            util.setError(404, `Cannot find meetingLead with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found meetingLead', objMeetingLead);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

meetingsLeadsCtrl.findOneByAcceptStatus = async (req, res) => {
    try {
        const { acceptStatus } = req.params;
        const objMeetingLead = await meetingLeadService.findOneByAcceptStatus(acceptStatus, req.query);
        if (!objMeetingLead) {
            util.setError(404, `Cannot find meetingLead with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found meetingLead', objMeetingLead);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

meetingsLeadsCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objMeetingLead = await meetingLeadService.findOneByDateModified(dateModified, req.query);
        if (!objMeetingLead) {
            util.setError(404, `Cannot find meetingLead with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found meetingLead', objMeetingLead);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



meetingsLeadsCtrl.updateMeetingLeadById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objMeetingLead = await meetingLeadService.updateMeetingLeadById(id, req.body);
            if (!objMeetingLead) {
                util.setError(404, `Cannot find meetingLead with the id: ${id}`);
            } else {
                util.setSuccess(200, 'MeetingLead updated', objMeetingLead);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

meetingsLeadsCtrl.updateMeetingLeadByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objMeetingLead = await meetingLeadService.updateMeetingLeadByDeleted(deleted, req.body);
            if (!objMeetingLead) {
                util.setError(404, `Cannot find meetingLead with the id: ${id}`);
            } else {
                util.setSuccess(200, 'MeetingLead updated', objMeetingLead);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

meetingsLeadsCtrl.updateMeetingLeadByMeetingId = async (req, res) => {
     const { meetingId } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objMeetingLead = await meetingLeadService.updateMeetingLeadByMeetingId(meetingId, req.body);
            if (!objMeetingLead) {
                util.setError(404, `Cannot find meetingLead with the id: ${id}`);
            } else {
                util.setSuccess(200, 'MeetingLead updated', objMeetingLead);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

meetingsLeadsCtrl.updateMeetingLeadByLeadId = async (req, res) => {
     const { leadId } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objMeetingLead = await meetingLeadService.updateMeetingLeadByLeadId(leadId, req.body);
            if (!objMeetingLead) {
                util.setError(404, `Cannot find meetingLead with the id: ${id}`);
            } else {
                util.setSuccess(200, 'MeetingLead updated', objMeetingLead);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

meetingsLeadsCtrl.updateMeetingLeadByRequired = async (req, res) => {
     const { required } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objMeetingLead = await meetingLeadService.updateMeetingLeadByRequired(required, req.body);
            if (!objMeetingLead) {
                util.setError(404, `Cannot find meetingLead with the id: ${id}`);
            } else {
                util.setSuccess(200, 'MeetingLead updated', objMeetingLead);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

meetingsLeadsCtrl.updateMeetingLeadByAcceptStatus = async (req, res) => {
     const { acceptStatus } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objMeetingLead = await meetingLeadService.updateMeetingLeadByAcceptStatus(acceptStatus, req.body);
            if (!objMeetingLead) {
                util.setError(404, `Cannot find meetingLead with the id: ${id}`);
            } else {
                util.setSuccess(200, 'MeetingLead updated', objMeetingLead);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

meetingsLeadsCtrl.updateMeetingLeadByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objMeetingLead = await meetingLeadService.updateMeetingLeadByDateModified(dateModified, req.body);
            if (!objMeetingLead) {
                util.setError(404, `Cannot find meetingLead with the id: ${id}`);
            } else {
                util.setSuccess(200, 'MeetingLead updated', objMeetingLead);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = meetingsLeadsCtrl;
//</es-section>
