/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:43:11 GMT-0400 (Bolivia Time)
 * Time: 4:43:11
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:43:11 GMT-0400 (Bolivia Time)
 * Last time updated: 4:43:11
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const fpEventFpEventLocation1CService = require('../services/fp_events_fp_event_locations_1_c.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const fpEventsFpEventLocations1CCtrl = {};
fpEventsFpEventLocations1CCtrl.service = fpEventFpEventLocation1CService;


fpEventsFpEventLocations1CCtrl.getAllFpEventsFpEventLocations1C = async (req, res) => {
    try {
        const objFpEventsFpEventLocations1C = await fpEventFpEventLocation1CService.getAllFpEventsFpEventLocations1C(req.query);
        if (objFpEventsFpEventLocations1C.length > 0) {
            util.setSuccess(200, 'FpEventsFpEventLocations1C retrieved', objFpEventsFpEventLocations1C);
        } else {
            util.setSuccess(200, 'No fpEventFpEventLocation1C found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventsFpEventLocations1CCtrl.getAFpEventFpEventLocation1C = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objFpEventFpEventLocation1C = await fpEventFpEventLocation1CService.getAFpEventFpEventLocation1C(id, req.query);
        if (!objFpEventFpEventLocation1C) {
            util.setError(404, `Cannot find fpEventFpEventLocation1C with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found fpEventFpEventLocation1C', objFpEventFpEventLocation1C);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventsFpEventLocations1CCtrl.addFpEventFpEventLocation1C = async (req, res) => {
    try {
        const objFpEventFpEventLocation1C = await fpEventFpEventLocation1CService.addFpEventFpEventLocation1C(req.body);
        util.setSuccess(201, 'FpEventFpEventLocation1C Added!', objFpEventFpEventLocation1C);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventsFpEventLocations1CCtrl.updateFpEventFpEventLocation1C = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objFpEventFpEventLocation1C = await fpEventFpEventLocation1CService.updateFpEventFpEventLocation1C(id, req.body);
        if (!objFpEventFpEventLocation1C) {
            util.setError(404, `Cannot find fpEventFpEventLocation1C with the id: ${id}`);
        } else {
            util.setSuccess(200, 'FpEventFpEventLocation1C updated', objFpEventFpEventLocation1C);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

fpEventsFpEventLocations1CCtrl.deleteFpEventFpEventLocation1C = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please provide a String value');
            return util.send(res);
        }
        const objFpEventFpEventLocation1C = await fpEventFpEventLocation1CService.deleteFpEventFpEventLocation1C(id);
        if (objFpEventFpEventLocation1C) {
            util.setSuccess(200, 'FpEventFpEventLocation1C deleted', objFpEventFpEventLocation1C);
        } else {
            util.setError(404, `FpEventFpEventLocation1C with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



fpEventsFpEventLocations1CCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objFpEventFpEventLocation1C = await fpEventFpEventLocation1CService.findOneById(id, req.query);
        if (!objFpEventFpEventLocation1C) {
            util.setError(404, `Cannot find fpEventFpEventLocation1C with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEventFpEventLocation1C', objFpEventFpEventLocation1C);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventsFpEventLocations1CCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objFpEventFpEventLocation1C = await fpEventFpEventLocation1CService.findOneByDeleted(deleted, req.query);
        if (!objFpEventFpEventLocation1C) {
            util.setError(404, `Cannot find fpEventFpEventLocation1C with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEventFpEventLocation1C', objFpEventFpEventLocation1C);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventsFpEventLocations1CCtrl.findOneByFpEventsFpEventLocations1fpEventsIda = async (req, res) => {
    try {
        const { fpEventsFpEventLocations1fpEventsIda } = req.params;
        const objFpEventFpEventLocation1C = await fpEventFpEventLocation1CService.findOneByFpEventsFpEventLocations1fpEventsIda(fpEventsFpEventLocations1fpEventsIda, req.query);
        if (!objFpEventFpEventLocation1C) {
            util.setError(404, `Cannot find fpEventFpEventLocation1C with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEventFpEventLocation1C', objFpEventFpEventLocation1C);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventsFpEventLocations1CCtrl.findOneByFpEventsFpEventLocations1fpEventLocationsIdb = async (req, res) => {
    try {
        const { fpEventsFpEventLocations1fpEventLocationsIdb } = req.params;
        const objFpEventFpEventLocation1C = await fpEventFpEventLocation1CService.findOneByFpEventsFpEventLocations1fpEventLocationsIdb(fpEventsFpEventLocations1fpEventLocationsIdb, req.query);
        if (!objFpEventFpEventLocation1C) {
            util.setError(404, `Cannot find fpEventFpEventLocation1C with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEventFpEventLocation1C', objFpEventFpEventLocation1C);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventsFpEventLocations1CCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objFpEventFpEventLocation1C = await fpEventFpEventLocation1CService.findOneByDateModified(dateModified, req.query);
        if (!objFpEventFpEventLocation1C) {
            util.setError(404, `Cannot find fpEventFpEventLocation1C with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEventFpEventLocation1C', objFpEventFpEventLocation1C);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



fpEventsFpEventLocations1CCtrl.updateFpEventFpEventLocation1CById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objFpEventFpEventLocation1C = await fpEventFpEventLocation1CService.updateFpEventFpEventLocation1CById(id, req.body);
            if (!objFpEventFpEventLocation1C) {
                util.setError(404, `Cannot find fpEventFpEventLocation1C with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEventFpEventLocation1C updated', objFpEventFpEventLocation1C);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fpEventsFpEventLocations1CCtrl.updateFpEventFpEventLocation1CByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objFpEventFpEventLocation1C = await fpEventFpEventLocation1CService.updateFpEventFpEventLocation1CByDeleted(deleted, req.body);
            if (!objFpEventFpEventLocation1C) {
                util.setError(404, `Cannot find fpEventFpEventLocation1C with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEventFpEventLocation1C updated', objFpEventFpEventLocation1C);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fpEventsFpEventLocations1CCtrl.updateFpEventFpEventLocation1CByFpEventsFpEventLocations1fpEventsIda = async (req, res) => {
     const { fpEventsFpEventLocations1fpEventsIda } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objFpEventFpEventLocation1C = await fpEventFpEventLocation1CService.updateFpEventFpEventLocation1CByFpEventsFpEventLocations1fpEventsIda(fpEventsFpEventLocations1fpEventsIda, req.body);
            if (!objFpEventFpEventLocation1C) {
                util.setError(404, `Cannot find fpEventFpEventLocation1C with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEventFpEventLocation1C updated', objFpEventFpEventLocation1C);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fpEventsFpEventLocations1CCtrl.updateFpEventFpEventLocation1CByFpEventsFpEventLocations1fpEventLocationsIdb = async (req, res) => {
     const { fpEventsFpEventLocations1fpEventLocationsIdb } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objFpEventFpEventLocation1C = await fpEventFpEventLocation1CService.updateFpEventFpEventLocation1CByFpEventsFpEventLocations1fpEventLocationsIdb(fpEventsFpEventLocations1fpEventLocationsIdb, req.body);
            if (!objFpEventFpEventLocation1C) {
                util.setError(404, `Cannot find fpEventFpEventLocation1C with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEventFpEventLocation1C updated', objFpEventFpEventLocation1C);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fpEventsFpEventLocations1CCtrl.updateFpEventFpEventLocation1CByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objFpEventFpEventLocation1C = await fpEventFpEventLocation1CService.updateFpEventFpEventLocation1CByDateModified(dateModified, req.body);
            if (!objFpEventFpEventLocation1C) {
                util.setError(404, `Cannot find fpEventFpEventLocation1C with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEventFpEventLocation1C updated', objFpEventFpEventLocation1C);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = fpEventsFpEventLocations1CCtrl;
//</es-section>
