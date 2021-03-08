/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:36:11 GMT-0400 (Bolivia Time)
 * Time: 15:36:11
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:36:11 GMT-0400 (Bolivia Time)
 * Last time updated: 15:36:11
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const fpEventContactCService = require('../services/fp_events_contacts_c.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const fpEventsContactsCCtrl = {};
fpEventsContactsCCtrl.service = fpEventContactCService;


fpEventsContactsCCtrl.getAllFpEventsContactsC = async (req, res) => {
    try {
        const objFpEventsContactsC = await fpEventContactCService.getAllFpEventsContactsC(req.query);
        if (objFpEventsContactsC.length > 0) {
            util.setSuccess(200, 'FpEventsContactsC retrieved', objFpEventsContactsC);
        } else {
            util.setSuccess(200, 'No fpEventContactC found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventsContactsCCtrl.getAFpEventContactC = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objFpEventContactC = await fpEventContactCService.getAFpEventContactC(id, req.query);
        if (!objFpEventContactC) {
            util.setError(404, `Cannot find fpEventContactC with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found fpEventContactC', objFpEventContactC);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventsContactsCCtrl.addFpEventContactC = async (req, res) => {
    try {
        const objFpEventContactC = await fpEventContactCService.addFpEventContactC(req.body);
        util.setSuccess(201, 'FpEventContactC Added!', objFpEventContactC);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventsContactsCCtrl.updateFpEventContactC = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objFpEventContactC = await fpEventContactCService.updateFpEventContactC(id, req.body);
        if (!objFpEventContactC) {
            util.setError(404, `Cannot find fpEventContactC with the id: ${id}`);
        } else {
            util.setSuccess(200, 'FpEventContactC updated', objFpEventContactC);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

fpEventsContactsCCtrl.deleteFpEventContactC = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please provide a String value');
            return util.send(res);
        }
        const objFpEventContactC = await fpEventContactCService.deleteFpEventContactC(id);
        if (objFpEventContactC) {
            util.setSuccess(200, 'FpEventContactC deleted', objFpEventContactC);
        } else {
            util.setError(404, `FpEventContactC with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



fpEventsContactsCCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objFpEventContactC = await fpEventContactCService.findOneById(id, req.query);
        if (!objFpEventContactC) {
            util.setError(404, `Cannot find fpEventContactC with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEventContactC', objFpEventContactC);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventsContactsCCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objFpEventContactC = await fpEventContactCService.findOneByDeleted(deleted, req.query);
        if (!objFpEventContactC) {
            util.setError(404, `Cannot find fpEventContactC with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEventContactC', objFpEventContactC);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventsContactsCCtrl.findOneByEmailResponded = async (req, res) => {
    try {
        const { emailResponded } = req.params;
        const objFpEventContactC = await fpEventContactCService.findOneByEmailResponded(emailResponded, req.query);
        if (!objFpEventContactC) {
            util.setError(404, `Cannot find fpEventContactC with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEventContactC', objFpEventContactC);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventsContactsCCtrl.findOneByFpEventsContactsfpEventsIda = async (req, res) => {
    try {
        const { fpEventsContactsfpEventsIda } = req.params;
        const objFpEventContactC = await fpEventContactCService.findOneByFpEventsContactsfpEventsIda(fpEventsContactsfpEventsIda, req.query);
        if (!objFpEventContactC) {
            util.setError(404, `Cannot find fpEventContactC with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEventContactC', objFpEventContactC);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventsContactsCCtrl.findOneByFpEventsContactscontactsIdb = async (req, res) => {
    try {
        const { fpEventsContactscontactsIdb } = req.params;
        const objFpEventContactC = await fpEventContactCService.findOneByFpEventsContactscontactsIdb(fpEventsContactscontactsIdb, req.query);
        if (!objFpEventContactC) {
            util.setError(404, `Cannot find fpEventContactC with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEventContactC', objFpEventContactC);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventsContactsCCtrl.findOneByInviteStatus = async (req, res) => {
    try {
        const { inviteStatus } = req.params;
        const objFpEventContactC = await fpEventContactCService.findOneByInviteStatus(inviteStatus, req.query);
        if (!objFpEventContactC) {
            util.setError(404, `Cannot find fpEventContactC with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEventContactC', objFpEventContactC);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventsContactsCCtrl.findOneByAcceptStatus = async (req, res) => {
    try {
        const { acceptStatus } = req.params;
        const objFpEventContactC = await fpEventContactCService.findOneByAcceptStatus(acceptStatus, req.query);
        if (!objFpEventContactC) {
            util.setError(404, `Cannot find fpEventContactC with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEventContactC', objFpEventContactC);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventsContactsCCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objFpEventContactC = await fpEventContactCService.findOneByDateModified(dateModified, req.query);
        if (!objFpEventContactC) {
            util.setError(404, `Cannot find fpEventContactC with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEventContactC', objFpEventContactC);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



fpEventsContactsCCtrl.updateFpEventContactCById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objFpEventContactC = await fpEventContactCService.updateFpEventContactCById(id, req.body);
            if (!objFpEventContactC) {
                util.setError(404, `Cannot find fpEventContactC with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEventContactC updated', objFpEventContactC);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fpEventsContactsCCtrl.updateFpEventContactCByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objFpEventContactC = await fpEventContactCService.updateFpEventContactCByDeleted(deleted, req.body);
            if (!objFpEventContactC) {
                util.setError(404, `Cannot find fpEventContactC with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEventContactC updated', objFpEventContactC);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fpEventsContactsCCtrl.updateFpEventContactCByEmailResponded = async (req, res) => {
     const { emailResponded } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objFpEventContactC = await fpEventContactCService.updateFpEventContactCByEmailResponded(emailResponded, req.body);
            if (!objFpEventContactC) {
                util.setError(404, `Cannot find fpEventContactC with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEventContactC updated', objFpEventContactC);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fpEventsContactsCCtrl.updateFpEventContactCByFpEventsContactsfpEventsIda = async (req, res) => {
     const { fpEventsContactsfpEventsIda } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objFpEventContactC = await fpEventContactCService.updateFpEventContactCByFpEventsContactsfpEventsIda(fpEventsContactsfpEventsIda, req.body);
            if (!objFpEventContactC) {
                util.setError(404, `Cannot find fpEventContactC with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEventContactC updated', objFpEventContactC);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fpEventsContactsCCtrl.updateFpEventContactCByFpEventsContactscontactsIdb = async (req, res) => {
     const { fpEventsContactscontactsIdb } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objFpEventContactC = await fpEventContactCService.updateFpEventContactCByFpEventsContactscontactsIdb(fpEventsContactscontactsIdb, req.body);
            if (!objFpEventContactC) {
                util.setError(404, `Cannot find fpEventContactC with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEventContactC updated', objFpEventContactC);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fpEventsContactsCCtrl.updateFpEventContactCByInviteStatus = async (req, res) => {
     const { inviteStatus } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objFpEventContactC = await fpEventContactCService.updateFpEventContactCByInviteStatus(inviteStatus, req.body);
            if (!objFpEventContactC) {
                util.setError(404, `Cannot find fpEventContactC with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEventContactC updated', objFpEventContactC);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fpEventsContactsCCtrl.updateFpEventContactCByAcceptStatus = async (req, res) => {
     const { acceptStatus } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objFpEventContactC = await fpEventContactCService.updateFpEventContactCByAcceptStatus(acceptStatus, req.body);
            if (!objFpEventContactC) {
                util.setError(404, `Cannot find fpEventContactC with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEventContactC updated', objFpEventContactC);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fpEventsContactsCCtrl.updateFpEventContactCByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objFpEventContactC = await fpEventContactCService.updateFpEventContactCByDateModified(dateModified, req.body);
            if (!objFpEventContactC) {
                util.setError(404, `Cannot find fpEventContactC with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEventContactC updated', objFpEventContactC);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = fpEventsContactsCCtrl;
//</es-section>
