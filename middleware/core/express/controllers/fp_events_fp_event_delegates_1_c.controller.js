/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:53 GMT-0400 (Bolivia Time)
 * Time: 14:0:53
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:53 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:53
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const fpEventFpEventDelegate1CService = require('../services/fp_events_fp_event_delegates_1_c.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const fpEventsFpEventDelegates1CCtrl = {};
fpEventsFpEventDelegates1CCtrl.service = fpEventFpEventDelegate1CService;


fpEventsFpEventDelegates1CCtrl.getAllFpEventsFpEventDelegates1C = async (req, res) => {
    try {
        const objFpEventsFpEventDelegates1C = await fpEventFpEventDelegate1CService.getAllFpEventsFpEventDelegates1C(req.query);
        if (objFpEventsFpEventDelegates1C.length > 0) {
            util.setSuccess(200, 'FpEventsFpEventDelegates1C retrieved', objFpEventsFpEventDelegates1C);
        } else {
            util.setSuccess(200, 'No fpEventFpEventDelegate1C found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventsFpEventDelegates1CCtrl.getAFpEventFpEventDelegate1C = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objFpEventFpEventDelegate1C = await fpEventFpEventDelegate1CService.getAFpEventFpEventDelegate1C(id, req.query);
        if (!objFpEventFpEventDelegate1C) {
            util.setError(404, `Cannot find fpEventFpEventDelegate1C with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found fpEventFpEventDelegate1C', objFpEventFpEventDelegate1C);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventsFpEventDelegates1CCtrl.addFpEventFpEventDelegate1C = async (req, res) => {
    try {
        const objFpEventFpEventDelegate1C = await fpEventFpEventDelegate1CService.addFpEventFpEventDelegate1C(req.body);
        util.setSuccess(201, 'FpEventFpEventDelegate1C Added!', objFpEventFpEventDelegate1C);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventsFpEventDelegates1CCtrl.updateFpEventFpEventDelegate1C = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objFpEventFpEventDelegate1C = await fpEventFpEventDelegate1CService.updateFpEventFpEventDelegate1C(id, req.body);
        if (!objFpEventFpEventDelegate1C) {
            util.setError(404, `Cannot find fpEventFpEventDelegate1C with the id: ${id}`);
        } else {
            util.setSuccess(200, 'FpEventFpEventDelegate1C updated', objFpEventFpEventDelegate1C);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

fpEventsFpEventDelegates1CCtrl.deleteFpEventFpEventDelegate1C = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please provide a String value');
            return util.send(res);
        }
        const objFpEventFpEventDelegate1C = await fpEventFpEventDelegate1CService.deleteFpEventFpEventDelegate1C(id);
        if (objFpEventFpEventDelegate1C) {
            util.setSuccess(200, 'FpEventFpEventDelegate1C deleted', objFpEventFpEventDelegate1C);
        } else {
            util.setError(404, `FpEventFpEventDelegate1C with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



fpEventsFpEventDelegates1CCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objFpEventFpEventDelegate1C = await fpEventFpEventDelegate1CService.findOneById(id, req.query);
        if (!objFpEventFpEventDelegate1C) {
            util.setError(404, `Cannot find fpEventFpEventDelegate1C with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEventFpEventDelegate1C', objFpEventFpEventDelegate1C);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventsFpEventDelegates1CCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objFpEventFpEventDelegate1C = await fpEventFpEventDelegate1CService.findOneByDeleted(deleted, req.query);
        if (!objFpEventFpEventDelegate1C) {
            util.setError(404, `Cannot find fpEventFpEventDelegate1C with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEventFpEventDelegate1C', objFpEventFpEventDelegate1C);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventsFpEventDelegates1CCtrl.findOneByFpEventsFpEventDelegates1fpEventsIda = async (req, res) => {
    try {
        const { fpEventsFpEventDelegates1fpEventsIda } = req.params;
        const objFpEventFpEventDelegate1C = await fpEventFpEventDelegate1CService.findOneByFpEventsFpEventDelegates1fpEventsIda(fpEventsFpEventDelegates1fpEventsIda, req.query);
        if (!objFpEventFpEventDelegate1C) {
            util.setError(404, `Cannot find fpEventFpEventDelegate1C with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEventFpEventDelegate1C', objFpEventFpEventDelegate1C);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventsFpEventDelegates1CCtrl.findOneByFpEventsFpEventDelegates1fpEventDelegatesIdb = async (req, res) => {
    try {
        const { fpEventsFpEventDelegates1fpEventDelegatesIdb } = req.params;
        const objFpEventFpEventDelegate1C = await fpEventFpEventDelegate1CService.findOneByFpEventsFpEventDelegates1fpEventDelegatesIdb(fpEventsFpEventDelegates1fpEventDelegatesIdb, req.query);
        if (!objFpEventFpEventDelegate1C) {
            util.setError(404, `Cannot find fpEventFpEventDelegate1C with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEventFpEventDelegate1C', objFpEventFpEventDelegate1C);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventsFpEventDelegates1CCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objFpEventFpEventDelegate1C = await fpEventFpEventDelegate1CService.findOneByDateModified(dateModified, req.query);
        if (!objFpEventFpEventDelegate1C) {
            util.setError(404, `Cannot find fpEventFpEventDelegate1C with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEventFpEventDelegate1C', objFpEventFpEventDelegate1C);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



fpEventsFpEventDelegates1CCtrl.updateFpEventFpEventDelegate1CById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objFpEventFpEventDelegate1C = await fpEventFpEventDelegate1CService.updateFpEventFpEventDelegate1CById(id, req.body);
            if (!objFpEventFpEventDelegate1C) {
                util.setError(404, `Cannot find fpEventFpEventDelegate1C with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEventFpEventDelegate1C updated', objFpEventFpEventDelegate1C);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fpEventsFpEventDelegates1CCtrl.updateFpEventFpEventDelegate1CByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objFpEventFpEventDelegate1C = await fpEventFpEventDelegate1CService.updateFpEventFpEventDelegate1CByDeleted(deleted, req.body);
            if (!objFpEventFpEventDelegate1C) {
                util.setError(404, `Cannot find fpEventFpEventDelegate1C with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEventFpEventDelegate1C updated', objFpEventFpEventDelegate1C);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fpEventsFpEventDelegates1CCtrl.updateFpEventFpEventDelegate1CByFpEventsFpEventDelegates1fpEventsIda = async (req, res) => {
     const { fpEventsFpEventDelegates1fpEventsIda } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objFpEventFpEventDelegate1C = await fpEventFpEventDelegate1CService.updateFpEventFpEventDelegate1CByFpEventsFpEventDelegates1fpEventsIda(fpEventsFpEventDelegates1fpEventsIda, req.body);
            if (!objFpEventFpEventDelegate1C) {
                util.setError(404, `Cannot find fpEventFpEventDelegate1C with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEventFpEventDelegate1C updated', objFpEventFpEventDelegate1C);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fpEventsFpEventDelegates1CCtrl.updateFpEventFpEventDelegate1CByFpEventsFpEventDelegates1fpEventDelegatesIdb = async (req, res) => {
     const { fpEventsFpEventDelegates1fpEventDelegatesIdb } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objFpEventFpEventDelegate1C = await fpEventFpEventDelegate1CService.updateFpEventFpEventDelegate1CByFpEventsFpEventDelegates1fpEventDelegatesIdb(fpEventsFpEventDelegates1fpEventDelegatesIdb, req.body);
            if (!objFpEventFpEventDelegate1C) {
                util.setError(404, `Cannot find fpEventFpEventDelegate1C with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEventFpEventDelegate1C updated', objFpEventFpEventDelegate1C);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fpEventsFpEventDelegates1CCtrl.updateFpEventFpEventDelegate1CByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objFpEventFpEventDelegate1C = await fpEventFpEventDelegate1CService.updateFpEventFpEventDelegate1CByDateModified(dateModified, req.body);
            if (!objFpEventFpEventDelegate1C) {
                util.setError(404, `Cannot find fpEventFpEventDelegate1C with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEventFpEventDelegate1C updated', objFpEventFpEventDelegate1C);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = fpEventsFpEventDelegates1CCtrl;
//</es-section>
