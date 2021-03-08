/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:36:13 GMT-0400 (Bolivia Time)
 * Time: 15:36:13
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:36:13 GMT-0400 (Bolivia Time)
 * Last time updated: 15:36:13
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const fpEventProspect1CService = require('../services/fp_events_prospects_1_c.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const fpEventsProspects1CCtrl = {};
fpEventsProspects1CCtrl.service = fpEventProspect1CService;


fpEventsProspects1CCtrl.getAllFpEventsProspects1C = async (req, res) => {
    try {
        const objFpEventsProspects1C = await fpEventProspect1CService.getAllFpEventsProspects1C(req.query);
        if (objFpEventsProspects1C.length > 0) {
            util.setSuccess(200, 'FpEventsProspects1C retrieved', objFpEventsProspects1C);
        } else {
            util.setSuccess(200, 'No fpEventProspect1C found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventsProspects1CCtrl.getAFpEventProspect1C = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objFpEventProspect1C = await fpEventProspect1CService.getAFpEventProspect1C(id, req.query);
        if (!objFpEventProspect1C) {
            util.setError(404, `Cannot find fpEventProspect1C with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found fpEventProspect1C', objFpEventProspect1C);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventsProspects1CCtrl.addFpEventProspect1C = async (req, res) => {
    try {
        const objFpEventProspect1C = await fpEventProspect1CService.addFpEventProspect1C(req.body);
        util.setSuccess(201, 'FpEventProspect1C Added!', objFpEventProspect1C);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventsProspects1CCtrl.updateFpEventProspect1C = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objFpEventProspect1C = await fpEventProspect1CService.updateFpEventProspect1C(id, req.body);
        if (!objFpEventProspect1C) {
            util.setError(404, `Cannot find fpEventProspect1C with the id: ${id}`);
        } else {
            util.setSuccess(200, 'FpEventProspect1C updated', objFpEventProspect1C);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

fpEventsProspects1CCtrl.deleteFpEventProspect1C = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please provide a String value');
            return util.send(res);
        }
        const objFpEventProspect1C = await fpEventProspect1CService.deleteFpEventProspect1C(id);
        if (objFpEventProspect1C) {
            util.setSuccess(200, 'FpEventProspect1C deleted', objFpEventProspect1C);
        } else {
            util.setError(404, `FpEventProspect1C with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



fpEventsProspects1CCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objFpEventProspect1C = await fpEventProspect1CService.findOneById(id, req.query);
        if (!objFpEventProspect1C) {
            util.setError(404, `Cannot find fpEventProspect1C with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEventProspect1C', objFpEventProspect1C);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventsProspects1CCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objFpEventProspect1C = await fpEventProspect1CService.findOneByDeleted(deleted, req.query);
        if (!objFpEventProspect1C) {
            util.setError(404, `Cannot find fpEventProspect1C with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEventProspect1C', objFpEventProspect1C);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventsProspects1CCtrl.findOneByEmailResponded = async (req, res) => {
    try {
        const { emailResponded } = req.params;
        const objFpEventProspect1C = await fpEventProspect1CService.findOneByEmailResponded(emailResponded, req.query);
        if (!objFpEventProspect1C) {
            util.setError(404, `Cannot find fpEventProspect1C with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEventProspect1C', objFpEventProspect1C);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventsProspects1CCtrl.findOneByFpEventsProspects1fpEventsIda = async (req, res) => {
    try {
        const { fpEventsProspects1fpEventsIda } = req.params;
        const objFpEventProspect1C = await fpEventProspect1CService.findOneByFpEventsProspects1fpEventsIda(fpEventsProspects1fpEventsIda, req.query);
        if (!objFpEventProspect1C) {
            util.setError(404, `Cannot find fpEventProspect1C with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEventProspect1C', objFpEventProspect1C);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventsProspects1CCtrl.findOneByFpEventsProspects1prospectsIdb = async (req, res) => {
    try {
        const { fpEventsProspects1prospectsIdb } = req.params;
        const objFpEventProspect1C = await fpEventProspect1CService.findOneByFpEventsProspects1prospectsIdb(fpEventsProspects1prospectsIdb, req.query);
        if (!objFpEventProspect1C) {
            util.setError(404, `Cannot find fpEventProspect1C with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEventProspect1C', objFpEventProspect1C);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventsProspects1CCtrl.findOneByInviteStatus = async (req, res) => {
    try {
        const { inviteStatus } = req.params;
        const objFpEventProspect1C = await fpEventProspect1CService.findOneByInviteStatus(inviteStatus, req.query);
        if (!objFpEventProspect1C) {
            util.setError(404, `Cannot find fpEventProspect1C with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEventProspect1C', objFpEventProspect1C);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventsProspects1CCtrl.findOneByAcceptStatus = async (req, res) => {
    try {
        const { acceptStatus } = req.params;
        const objFpEventProspect1C = await fpEventProspect1CService.findOneByAcceptStatus(acceptStatus, req.query);
        if (!objFpEventProspect1C) {
            util.setError(404, `Cannot find fpEventProspect1C with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEventProspect1C', objFpEventProspect1C);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventsProspects1CCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objFpEventProspect1C = await fpEventProspect1CService.findOneByDateModified(dateModified, req.query);
        if (!objFpEventProspect1C) {
            util.setError(404, `Cannot find fpEventProspect1C with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEventProspect1C', objFpEventProspect1C);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



fpEventsProspects1CCtrl.updateFpEventProspect1CById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objFpEventProspect1C = await fpEventProspect1CService.updateFpEventProspect1CById(id, req.body);
            if (!objFpEventProspect1C) {
                util.setError(404, `Cannot find fpEventProspect1C with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEventProspect1C updated', objFpEventProspect1C);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fpEventsProspects1CCtrl.updateFpEventProspect1CByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objFpEventProspect1C = await fpEventProspect1CService.updateFpEventProspect1CByDeleted(deleted, req.body);
            if (!objFpEventProspect1C) {
                util.setError(404, `Cannot find fpEventProspect1C with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEventProspect1C updated', objFpEventProspect1C);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fpEventsProspects1CCtrl.updateFpEventProspect1CByEmailResponded = async (req, res) => {
     const { emailResponded } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objFpEventProspect1C = await fpEventProspect1CService.updateFpEventProspect1CByEmailResponded(emailResponded, req.body);
            if (!objFpEventProspect1C) {
                util.setError(404, `Cannot find fpEventProspect1C with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEventProspect1C updated', objFpEventProspect1C);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fpEventsProspects1CCtrl.updateFpEventProspect1CByFpEventsProspects1fpEventsIda = async (req, res) => {
     const { fpEventsProspects1fpEventsIda } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objFpEventProspect1C = await fpEventProspect1CService.updateFpEventProspect1CByFpEventsProspects1fpEventsIda(fpEventsProspects1fpEventsIda, req.body);
            if (!objFpEventProspect1C) {
                util.setError(404, `Cannot find fpEventProspect1C with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEventProspect1C updated', objFpEventProspect1C);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fpEventsProspects1CCtrl.updateFpEventProspect1CByFpEventsProspects1prospectsIdb = async (req, res) => {
     const { fpEventsProspects1prospectsIdb } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objFpEventProspect1C = await fpEventProspect1CService.updateFpEventProspect1CByFpEventsProspects1prospectsIdb(fpEventsProspects1prospectsIdb, req.body);
            if (!objFpEventProspect1C) {
                util.setError(404, `Cannot find fpEventProspect1C with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEventProspect1C updated', objFpEventProspect1C);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fpEventsProspects1CCtrl.updateFpEventProspect1CByInviteStatus = async (req, res) => {
     const { inviteStatus } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objFpEventProspect1C = await fpEventProspect1CService.updateFpEventProspect1CByInviteStatus(inviteStatus, req.body);
            if (!objFpEventProspect1C) {
                util.setError(404, `Cannot find fpEventProspect1C with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEventProspect1C updated', objFpEventProspect1C);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fpEventsProspects1CCtrl.updateFpEventProspect1CByAcceptStatus = async (req, res) => {
     const { acceptStatus } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objFpEventProspect1C = await fpEventProspect1CService.updateFpEventProspect1CByAcceptStatus(acceptStatus, req.body);
            if (!objFpEventProspect1C) {
                util.setError(404, `Cannot find fpEventProspect1C with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEventProspect1C updated', objFpEventProspect1C);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fpEventsProspects1CCtrl.updateFpEventProspect1CByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objFpEventProspect1C = await fpEventProspect1CService.updateFpEventProspect1CByDateModified(dateModified, req.body);
            if (!objFpEventProspect1C) {
                util.setError(404, `Cannot find fpEventProspect1C with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEventProspect1C updated', objFpEventProspect1C);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = fpEventsProspects1CCtrl;
//</es-section>
