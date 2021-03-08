/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:36:15 GMT-0400 (Bolivia Time)
 * Time: 15:36:15
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:36:15 GMT-0400 (Bolivia Time)
 * Last time updated: 15:36:15
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const fpEventLocationFpEvent1CService = require('../services/fp_event_locations_fp_events_1_c.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const fpEventLocationsFpEvents1CCtrl = {};
fpEventLocationsFpEvents1CCtrl.service = fpEventLocationFpEvent1CService;


fpEventLocationsFpEvents1CCtrl.getAllFpEventLocationsFpEvents1C = async (req, res) => {
    try {
        const objFpEventLocationsFpEvents1C = await fpEventLocationFpEvent1CService.getAllFpEventLocationsFpEvents1C(req.query);
        if (objFpEventLocationsFpEvents1C.length > 0) {
            util.setSuccess(200, 'FpEventLocationsFpEvents1C retrieved', objFpEventLocationsFpEvents1C);
        } else {
            util.setSuccess(200, 'No fpEventLocationFpEvent1C found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventLocationsFpEvents1CCtrl.getAFpEventLocationFpEvent1C = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objFpEventLocationFpEvent1C = await fpEventLocationFpEvent1CService.getAFpEventLocationFpEvent1C(id, req.query);
        if (!objFpEventLocationFpEvent1C) {
            util.setError(404, `Cannot find fpEventLocationFpEvent1C with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found fpEventLocationFpEvent1C', objFpEventLocationFpEvent1C);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventLocationsFpEvents1CCtrl.addFpEventLocationFpEvent1C = async (req, res) => {
    try {
        const objFpEventLocationFpEvent1C = await fpEventLocationFpEvent1CService.addFpEventLocationFpEvent1C(req.body);
        util.setSuccess(201, 'FpEventLocationFpEvent1C Added!', objFpEventLocationFpEvent1C);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventLocationsFpEvents1CCtrl.updateFpEventLocationFpEvent1C = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objFpEventLocationFpEvent1C = await fpEventLocationFpEvent1CService.updateFpEventLocationFpEvent1C(id, req.body);
        if (!objFpEventLocationFpEvent1C) {
            util.setError(404, `Cannot find fpEventLocationFpEvent1C with the id: ${id}`);
        } else {
            util.setSuccess(200, 'FpEventLocationFpEvent1C updated', objFpEventLocationFpEvent1C);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

fpEventLocationsFpEvents1CCtrl.deleteFpEventLocationFpEvent1C = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please provide a String value');
            return util.send(res);
        }
        const objFpEventLocationFpEvent1C = await fpEventLocationFpEvent1CService.deleteFpEventLocationFpEvent1C(id);
        if (objFpEventLocationFpEvent1C) {
            util.setSuccess(200, 'FpEventLocationFpEvent1C deleted', objFpEventLocationFpEvent1C);
        } else {
            util.setError(404, `FpEventLocationFpEvent1C with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



fpEventLocationsFpEvents1CCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objFpEventLocationFpEvent1C = await fpEventLocationFpEvent1CService.findOneById(id, req.query);
        if (!objFpEventLocationFpEvent1C) {
            util.setError(404, `Cannot find fpEventLocationFpEvent1C with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEventLocationFpEvent1C', objFpEventLocationFpEvent1C);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventLocationsFpEvents1CCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objFpEventLocationFpEvent1C = await fpEventLocationFpEvent1CService.findOneByDeleted(deleted, req.query);
        if (!objFpEventLocationFpEvent1C) {
            util.setError(404, `Cannot find fpEventLocationFpEvent1C with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEventLocationFpEvent1C', objFpEventLocationFpEvent1C);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventLocationsFpEvents1CCtrl.findOneByFpEventLocationsFpEvents1fpEventLocationsIda = async (req, res) => {
    try {
        const { fpEventLocationsFpEvents1fpEventLocationsIda } = req.params;
        const objFpEventLocationFpEvent1C = await fpEventLocationFpEvent1CService.findOneByFpEventLocationsFpEvents1fpEventLocationsIda(fpEventLocationsFpEvents1fpEventLocationsIda, req.query);
        if (!objFpEventLocationFpEvent1C) {
            util.setError(404, `Cannot find fpEventLocationFpEvent1C with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEventLocationFpEvent1C', objFpEventLocationFpEvent1C);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventLocationsFpEvents1CCtrl.findOneByFpEventLocationsFpEvents1fpEventsIdb = async (req, res) => {
    try {
        const { fpEventLocationsFpEvents1fpEventsIdb } = req.params;
        const objFpEventLocationFpEvent1C = await fpEventLocationFpEvent1CService.findOneByFpEventLocationsFpEvents1fpEventsIdb(fpEventLocationsFpEvents1fpEventsIdb, req.query);
        if (!objFpEventLocationFpEvent1C) {
            util.setError(404, `Cannot find fpEventLocationFpEvent1C with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEventLocationFpEvent1C', objFpEventLocationFpEvent1C);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventLocationsFpEvents1CCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objFpEventLocationFpEvent1C = await fpEventLocationFpEvent1CService.findOneByDateModified(dateModified, req.query);
        if (!objFpEventLocationFpEvent1C) {
            util.setError(404, `Cannot find fpEventLocationFpEvent1C with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEventLocationFpEvent1C', objFpEventLocationFpEvent1C);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



fpEventLocationsFpEvents1CCtrl.updateFpEventLocationFpEvent1CById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objFpEventLocationFpEvent1C = await fpEventLocationFpEvent1CService.updateFpEventLocationFpEvent1CById(id, req.body);
            if (!objFpEventLocationFpEvent1C) {
                util.setError(404, `Cannot find fpEventLocationFpEvent1C with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEventLocationFpEvent1C updated', objFpEventLocationFpEvent1C);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fpEventLocationsFpEvents1CCtrl.updateFpEventLocationFpEvent1CByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objFpEventLocationFpEvent1C = await fpEventLocationFpEvent1CService.updateFpEventLocationFpEvent1CByDeleted(deleted, req.body);
            if (!objFpEventLocationFpEvent1C) {
                util.setError(404, `Cannot find fpEventLocationFpEvent1C with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEventLocationFpEvent1C updated', objFpEventLocationFpEvent1C);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fpEventLocationsFpEvents1CCtrl.updateFpEventLocationFpEvent1CByFpEventLocationsFpEvents1fpEventLocationsIda = async (req, res) => {
     const { fpEventLocationsFpEvents1fpEventLocationsIda } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objFpEventLocationFpEvent1C = await fpEventLocationFpEvent1CService.updateFpEventLocationFpEvent1CByFpEventLocationsFpEvents1fpEventLocationsIda(fpEventLocationsFpEvents1fpEventLocationsIda, req.body);
            if (!objFpEventLocationFpEvent1C) {
                util.setError(404, `Cannot find fpEventLocationFpEvent1C with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEventLocationFpEvent1C updated', objFpEventLocationFpEvent1C);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fpEventLocationsFpEvents1CCtrl.updateFpEventLocationFpEvent1CByFpEventLocationsFpEvents1fpEventsIdb = async (req, res) => {
     const { fpEventLocationsFpEvents1fpEventsIdb } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objFpEventLocationFpEvent1C = await fpEventLocationFpEvent1CService.updateFpEventLocationFpEvent1CByFpEventLocationsFpEvents1fpEventsIdb(fpEventLocationsFpEvents1fpEventsIdb, req.body);
            if (!objFpEventLocationFpEvent1C) {
                util.setError(404, `Cannot find fpEventLocationFpEvent1C with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEventLocationFpEvent1C updated', objFpEventLocationFpEvent1C);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fpEventLocationsFpEvents1CCtrl.updateFpEventLocationFpEvent1CByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objFpEventLocationFpEvent1C = await fpEventLocationFpEvent1CService.updateFpEventLocationFpEvent1CByDateModified(dateModified, req.body);
            if (!objFpEventLocationFpEvent1C) {
                util.setError(404, `Cannot find fpEventLocationFpEvent1C with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEventLocationFpEvent1C updated', objFpEventLocationFpEvent1C);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = fpEventLocationsFpEvents1CCtrl;
//</es-section>
