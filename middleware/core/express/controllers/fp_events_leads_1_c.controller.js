/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:36:12 GMT-0400 (Bolivia Time)
 * Time: 15:36:12
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:36:12 GMT-0400 (Bolivia Time)
 * Last time updated: 15:36:12
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const fpEventLead1CService = require('../services/fp_events_leads_1_c.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const fpEventsLeads1CCtrl = {};
fpEventsLeads1CCtrl.service = fpEventLead1CService;


fpEventsLeads1CCtrl.getAllFpEventsLeads1C = async (req, res) => {
    try {
        const objFpEventsLeads1C = await fpEventLead1CService.getAllFpEventsLeads1C(req.query);
        if (objFpEventsLeads1C.length > 0) {
            util.setSuccess(200, 'FpEventsLeads1C retrieved', objFpEventsLeads1C);
        } else {
            util.setSuccess(200, 'No fpEventLead1C found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventsLeads1CCtrl.getAFpEventLead1C = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objFpEventLead1C = await fpEventLead1CService.getAFpEventLead1C(id, req.query);
        if (!objFpEventLead1C) {
            util.setError(404, `Cannot find fpEventLead1C with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found fpEventLead1C', objFpEventLead1C);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventsLeads1CCtrl.addFpEventLead1C = async (req, res) => {
    try {
        const objFpEventLead1C = await fpEventLead1CService.addFpEventLead1C(req.body);
        util.setSuccess(201, 'FpEventLead1C Added!', objFpEventLead1C);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventsLeads1CCtrl.updateFpEventLead1C = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objFpEventLead1C = await fpEventLead1CService.updateFpEventLead1C(id, req.body);
        if (!objFpEventLead1C) {
            util.setError(404, `Cannot find fpEventLead1C with the id: ${id}`);
        } else {
            util.setSuccess(200, 'FpEventLead1C updated', objFpEventLead1C);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

fpEventsLeads1CCtrl.deleteFpEventLead1C = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please provide a String value');
            return util.send(res);
        }
        const objFpEventLead1C = await fpEventLead1CService.deleteFpEventLead1C(id);
        if (objFpEventLead1C) {
            util.setSuccess(200, 'FpEventLead1C deleted', objFpEventLead1C);
        } else {
            util.setError(404, `FpEventLead1C with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



fpEventsLeads1CCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objFpEventLead1C = await fpEventLead1CService.findOneById(id, req.query);
        if (!objFpEventLead1C) {
            util.setError(404, `Cannot find fpEventLead1C with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEventLead1C', objFpEventLead1C);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventsLeads1CCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objFpEventLead1C = await fpEventLead1CService.findOneByDeleted(deleted, req.query);
        if (!objFpEventLead1C) {
            util.setError(404, `Cannot find fpEventLead1C with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEventLead1C', objFpEventLead1C);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventsLeads1CCtrl.findOneByEmailResponded = async (req, res) => {
    try {
        const { emailResponded } = req.params;
        const objFpEventLead1C = await fpEventLead1CService.findOneByEmailResponded(emailResponded, req.query);
        if (!objFpEventLead1C) {
            util.setError(404, `Cannot find fpEventLead1C with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEventLead1C', objFpEventLead1C);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventsLeads1CCtrl.findOneByFpEventsLeads1fpEventsIda = async (req, res) => {
    try {
        const { fpEventsLeads1fpEventsIda } = req.params;
        const objFpEventLead1C = await fpEventLead1CService.findOneByFpEventsLeads1fpEventsIda(fpEventsLeads1fpEventsIda, req.query);
        if (!objFpEventLead1C) {
            util.setError(404, `Cannot find fpEventLead1C with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEventLead1C', objFpEventLead1C);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventsLeads1CCtrl.findOneByFpEventsLeads1leadsIdb = async (req, res) => {
    try {
        const { fpEventsLeads1leadsIdb } = req.params;
        const objFpEventLead1C = await fpEventLead1CService.findOneByFpEventsLeads1leadsIdb(fpEventsLeads1leadsIdb, req.query);
        if (!objFpEventLead1C) {
            util.setError(404, `Cannot find fpEventLead1C with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEventLead1C', objFpEventLead1C);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventsLeads1CCtrl.findOneByInviteStatus = async (req, res) => {
    try {
        const { inviteStatus } = req.params;
        const objFpEventLead1C = await fpEventLead1CService.findOneByInviteStatus(inviteStatus, req.query);
        if (!objFpEventLead1C) {
            util.setError(404, `Cannot find fpEventLead1C with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEventLead1C', objFpEventLead1C);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventsLeads1CCtrl.findOneByAcceptStatus = async (req, res) => {
    try {
        const { acceptStatus } = req.params;
        const objFpEventLead1C = await fpEventLead1CService.findOneByAcceptStatus(acceptStatus, req.query);
        if (!objFpEventLead1C) {
            util.setError(404, `Cannot find fpEventLead1C with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEventLead1C', objFpEventLead1C);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventsLeads1CCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objFpEventLead1C = await fpEventLead1CService.findOneByDateModified(dateModified, req.query);
        if (!objFpEventLead1C) {
            util.setError(404, `Cannot find fpEventLead1C with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEventLead1C', objFpEventLead1C);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



fpEventsLeads1CCtrl.updateFpEventLead1CById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objFpEventLead1C = await fpEventLead1CService.updateFpEventLead1CById(id, req.body);
            if (!objFpEventLead1C) {
                util.setError(404, `Cannot find fpEventLead1C with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEventLead1C updated', objFpEventLead1C);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fpEventsLeads1CCtrl.updateFpEventLead1CByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objFpEventLead1C = await fpEventLead1CService.updateFpEventLead1CByDeleted(deleted, req.body);
            if (!objFpEventLead1C) {
                util.setError(404, `Cannot find fpEventLead1C with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEventLead1C updated', objFpEventLead1C);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fpEventsLeads1CCtrl.updateFpEventLead1CByEmailResponded = async (req, res) => {
     const { emailResponded } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objFpEventLead1C = await fpEventLead1CService.updateFpEventLead1CByEmailResponded(emailResponded, req.body);
            if (!objFpEventLead1C) {
                util.setError(404, `Cannot find fpEventLead1C with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEventLead1C updated', objFpEventLead1C);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fpEventsLeads1CCtrl.updateFpEventLead1CByFpEventsLeads1fpEventsIda = async (req, res) => {
     const { fpEventsLeads1fpEventsIda } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objFpEventLead1C = await fpEventLead1CService.updateFpEventLead1CByFpEventsLeads1fpEventsIda(fpEventsLeads1fpEventsIda, req.body);
            if (!objFpEventLead1C) {
                util.setError(404, `Cannot find fpEventLead1C with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEventLead1C updated', objFpEventLead1C);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fpEventsLeads1CCtrl.updateFpEventLead1CByFpEventsLeads1leadsIdb = async (req, res) => {
     const { fpEventsLeads1leadsIdb } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objFpEventLead1C = await fpEventLead1CService.updateFpEventLead1CByFpEventsLeads1leadsIdb(fpEventsLeads1leadsIdb, req.body);
            if (!objFpEventLead1C) {
                util.setError(404, `Cannot find fpEventLead1C with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEventLead1C updated', objFpEventLead1C);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fpEventsLeads1CCtrl.updateFpEventLead1CByInviteStatus = async (req, res) => {
     const { inviteStatus } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objFpEventLead1C = await fpEventLead1CService.updateFpEventLead1CByInviteStatus(inviteStatus, req.body);
            if (!objFpEventLead1C) {
                util.setError(404, `Cannot find fpEventLead1C with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEventLead1C updated', objFpEventLead1C);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fpEventsLeads1CCtrl.updateFpEventLead1CByAcceptStatus = async (req, res) => {
     const { acceptStatus } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objFpEventLead1C = await fpEventLead1CService.updateFpEventLead1CByAcceptStatus(acceptStatus, req.body);
            if (!objFpEventLead1C) {
                util.setError(404, `Cannot find fpEventLead1C with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEventLead1C updated', objFpEventLead1C);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fpEventsLeads1CCtrl.updateFpEventLead1CByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objFpEventLead1C = await fpEventLead1CService.updateFpEventLead1CByDateModified(dateModified, req.body);
            if (!objFpEventLead1C) {
                util.setError(404, `Cannot find fpEventLead1C with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEventLead1C updated', objFpEventLead1C);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = fpEventsLeads1CCtrl;
//</es-section>
