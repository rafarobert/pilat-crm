/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:22:32 GMT-0400 (Bolivia Time)
 * Time: 0:22:32
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:22:32 GMT-0400 (Bolivia Time)
 * Last time updated: 0:22:32
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const callLeadService = require('../services/calls_leads.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const callsLeadsCtrl = {};
callsLeadsCtrl.service = callLeadService;


callsLeadsCtrl.getAllCallsLeads = async (req, res) => {
    try {
        const objCallsLeads = await callLeadService.getAllCallsLeads(req.query);
        if (objCallsLeads.length > 0) {
            util.setSuccess(200, 'CallsLeads retrieved', objCallsLeads);
        } else {
            util.setSuccess(200, 'No callLead found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsLeadsCtrl.getACallLead = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objCallLead = await callLeadService.getACallLead(id, req.query);
        if (!objCallLead) {
            util.setError(404, `Cannot find callLead with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found callLead', objCallLead);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsLeadsCtrl.addCallLead = async (req, res) => {
    try {
        const objCallLead = await callLeadService.addCallLead(req.body);
        util.setSuccess(201, 'CallLead Added!', objCallLead);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsLeadsCtrl.updateCallLead = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objCallLead = await callLeadService.updateCallLead(id, req.body);
        if (!objCallLead) {
            util.setError(404, `Cannot find callLead with the id: ${id}`);
        } else {
            util.setSuccess(200, 'CallLead updated', objCallLead);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

callsLeadsCtrl.deleteCallLead = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please provide a String value');
            return util.send(res);
        }
        const objCallLead = await callLeadService.deleteCallLead(id);
        if (objCallLead) {
            util.setSuccess(200, 'CallLead deleted', objCallLead);
        } else {
            util.setError(404, `CallLead with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



callsLeadsCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objCallLead = await callLeadService.findOneById(id, req.query);
        if (!objCallLead) {
            util.setError(404, `Cannot find callLead with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found callLead', objCallLead);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsLeadsCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objCallLead = await callLeadService.findOneByDeleted(deleted, req.query);
        if (!objCallLead) {
            util.setError(404, `Cannot find callLead with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found callLead', objCallLead);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsLeadsCtrl.findOneByCallId = async (req, res) => {
    try {
        const { callId } = req.params;
        const objCallLead = await callLeadService.findOneByCallId(callId, req.query);
        if (!objCallLead) {
            util.setError(404, `Cannot find callLead with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found callLead', objCallLead);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsLeadsCtrl.findOneByLeadId = async (req, res) => {
    try {
        const { leadId } = req.params;
        const objCallLead = await callLeadService.findOneByLeadId(leadId, req.query);
        if (!objCallLead) {
            util.setError(404, `Cannot find callLead with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found callLead', objCallLead);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsLeadsCtrl.findOneByRequired = async (req, res) => {
    try {
        const { required } = req.params;
        const objCallLead = await callLeadService.findOneByRequired(required, req.query);
        if (!objCallLead) {
            util.setError(404, `Cannot find callLead with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found callLead', objCallLead);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsLeadsCtrl.findOneByAcceptStatus = async (req, res) => {
    try {
        const { acceptStatus } = req.params;
        const objCallLead = await callLeadService.findOneByAcceptStatus(acceptStatus, req.query);
        if (!objCallLead) {
            util.setError(404, `Cannot find callLead with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found callLead', objCallLead);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

callsLeadsCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objCallLead = await callLeadService.findOneByDateModified(dateModified, req.query);
        if (!objCallLead) {
            util.setError(404, `Cannot find callLead with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found callLead', objCallLead);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



callsLeadsCtrl.updateCallLeadById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objCallLead = await callLeadService.updateCallLeadById(id, req.body);
            if (!objCallLead) {
                util.setError(404, `Cannot find callLead with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CallLead updated', objCallLead);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

callsLeadsCtrl.updateCallLeadByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objCallLead = await callLeadService.updateCallLeadByDeleted(deleted, req.body);
            if (!objCallLead) {
                util.setError(404, `Cannot find callLead with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CallLead updated', objCallLead);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

callsLeadsCtrl.updateCallLeadByCallId = async (req, res) => {
     const { callId } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objCallLead = await callLeadService.updateCallLeadByCallId(callId, req.body);
            if (!objCallLead) {
                util.setError(404, `Cannot find callLead with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CallLead updated', objCallLead);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

callsLeadsCtrl.updateCallLeadByLeadId = async (req, res) => {
     const { leadId } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objCallLead = await callLeadService.updateCallLeadByLeadId(leadId, req.body);
            if (!objCallLead) {
                util.setError(404, `Cannot find callLead with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CallLead updated', objCallLead);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

callsLeadsCtrl.updateCallLeadByRequired = async (req, res) => {
     const { required } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objCallLead = await callLeadService.updateCallLeadByRequired(required, req.body);
            if (!objCallLead) {
                util.setError(404, `Cannot find callLead with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CallLead updated', objCallLead);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

callsLeadsCtrl.updateCallLeadByAcceptStatus = async (req, res) => {
     const { acceptStatus } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objCallLead = await callLeadService.updateCallLeadByAcceptStatus(acceptStatus, req.body);
            if (!objCallLead) {
                util.setError(404, `Cannot find callLead with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CallLead updated', objCallLead);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

callsLeadsCtrl.updateCallLeadByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objCallLead = await callLeadService.updateCallLeadByDateModified(dateModified, req.body);
            if (!objCallLead) {
                util.setError(404, `Cannot find callLead with the id: ${id}`);
            } else {
                util.setSuccess(200, 'CallLead updated', objCallLead);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = callsLeadsCtrl;
//</es-section>
