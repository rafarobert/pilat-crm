/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:37:38 GMT-0400 (Bolivia Time)
 * Time: 18:37:38
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:37:38 GMT-0400 (Bolivia Time)
 * Last time updated: 18:37:38
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const jjwgMapJjwgMarkerCService = require('../services/jjwg_maps_jjwg_markers_c.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const jjwgMapsJjwgMarkersCCtrl = {};
jjwgMapsJjwgMarkersCCtrl.service = jjwgMapJjwgMarkerCService;


jjwgMapsJjwgMarkersCCtrl.getAllJjwgMapsJjwgMarkersC = async (req, res) => {
    try {
        const objJjwgMapsJjwgMarkersC = await jjwgMapJjwgMarkerCService.getAllJjwgMapsJjwgMarkersC(req.query);
        if (objJjwgMapsJjwgMarkersC.length > 0) {
            util.setSuccess(200, 'JjwgMapsJjwgMarkersC retrieved', objJjwgMapsJjwgMarkersC);
        } else {
            util.setSuccess(200, 'No jjwgMapJjwgMarkerC found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgMapsJjwgMarkersCCtrl.getAJjwgMapJjwgMarkerC = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objJjwgMapJjwgMarkerC = await jjwgMapJjwgMarkerCService.getAJjwgMapJjwgMarkerC(id, req.query);
        if (!objJjwgMapJjwgMarkerC) {
            util.setError(404, `Cannot find jjwgMapJjwgMarkerC with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found jjwgMapJjwgMarkerC', objJjwgMapJjwgMarkerC);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgMapsJjwgMarkersCCtrl.addJjwgMapJjwgMarkerC = async (req, res) => {
    try {
        const objJjwgMapJjwgMarkerC = await jjwgMapJjwgMarkerCService.addJjwgMapJjwgMarkerC(req.body);
        util.setSuccess(201, 'JjwgMapJjwgMarkerC Added!', objJjwgMapJjwgMarkerC);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgMapsJjwgMarkersCCtrl.updateJjwgMapJjwgMarkerC = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objJjwgMapJjwgMarkerC = await jjwgMapJjwgMarkerCService.updateJjwgMapJjwgMarkerC(id, req.body);
        if (!objJjwgMapJjwgMarkerC) {
            util.setError(404, `Cannot find jjwgMapJjwgMarkerC with the id: ${id}`);
        } else {
            util.setSuccess(200, 'JjwgMapJjwgMarkerC updated', objJjwgMapJjwgMarkerC);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

jjwgMapsJjwgMarkersCCtrl.deleteJjwgMapJjwgMarkerC = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please provide a String value');
            return util.send(res);
        }
        const objJjwgMapJjwgMarkerC = await jjwgMapJjwgMarkerCService.deleteJjwgMapJjwgMarkerC(id);
        if (objJjwgMapJjwgMarkerC) {
            util.setSuccess(200, 'JjwgMapJjwgMarkerC deleted', objJjwgMapJjwgMarkerC);
        } else {
            util.setError(404, `JjwgMapJjwgMarkerC with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



jjwgMapsJjwgMarkersCCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objJjwgMapJjwgMarkerC = await jjwgMapJjwgMarkerCService.findOneById(id, req.query);
        if (!objJjwgMapJjwgMarkerC) {
            util.setError(404, `Cannot find jjwgMapJjwgMarkerC with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgMapJjwgMarkerC', objJjwgMapJjwgMarkerC);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgMapsJjwgMarkersCCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objJjwgMapJjwgMarkerC = await jjwgMapJjwgMarkerCService.findOneByDeleted(deleted, req.query);
        if (!objJjwgMapJjwgMarkerC) {
            util.setError(404, `Cannot find jjwgMapJjwgMarkerC with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgMapJjwgMarkerC', objJjwgMapJjwgMarkerC);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgMapsJjwgMarkersCCtrl.findOneByJjwgMapsB229wgMapsIda = async (req, res) => {
    try {
        const { jjwgMapsB229wgMapsIda } = req.params;
        const objJjwgMapJjwgMarkerC = await jjwgMapJjwgMarkerCService.findOneByJjwgMapsB229wgMapsIda(jjwgMapsB229wgMapsIda, req.query);
        if (!objJjwgMapJjwgMarkerC) {
            util.setError(404, `Cannot find jjwgMapJjwgMarkerC with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgMapJjwgMarkerC', objJjwgMapJjwgMarkerC);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgMapsJjwgMarkersCCtrl.findOneByJjwgMaps2e31markersIdb = async (req, res) => {
    try {
        const { jjwgMaps2e31markersIdb } = req.params;
        const objJjwgMapJjwgMarkerC = await jjwgMapJjwgMarkerCService.findOneByJjwgMaps2e31markersIdb(jjwgMaps2e31markersIdb, req.query);
        if (!objJjwgMapJjwgMarkerC) {
            util.setError(404, `Cannot find jjwgMapJjwgMarkerC with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgMapJjwgMarkerC', objJjwgMapJjwgMarkerC);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgMapsJjwgMarkersCCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objJjwgMapJjwgMarkerC = await jjwgMapJjwgMarkerCService.findOneByDateModified(dateModified, req.query);
        if (!objJjwgMapJjwgMarkerC) {
            util.setError(404, `Cannot find jjwgMapJjwgMarkerC with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgMapJjwgMarkerC', objJjwgMapJjwgMarkerC);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



jjwgMapsJjwgMarkersCCtrl.updateJjwgMapJjwgMarkerCById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objJjwgMapJjwgMarkerC = await jjwgMapJjwgMarkerCService.updateJjwgMapJjwgMarkerCById(id, req.body);
            if (!objJjwgMapJjwgMarkerC) {
                util.setError(404, `Cannot find jjwgMapJjwgMarkerC with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgMapJjwgMarkerC updated', objJjwgMapJjwgMarkerC);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgMapsJjwgMarkersCCtrl.updateJjwgMapJjwgMarkerCByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objJjwgMapJjwgMarkerC = await jjwgMapJjwgMarkerCService.updateJjwgMapJjwgMarkerCByDeleted(deleted, req.body);
            if (!objJjwgMapJjwgMarkerC) {
                util.setError(404, `Cannot find jjwgMapJjwgMarkerC with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgMapJjwgMarkerC updated', objJjwgMapJjwgMarkerC);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgMapsJjwgMarkersCCtrl.updateJjwgMapJjwgMarkerCByJjwgMapsB229wgMapsIda = async (req, res) => {
     const { jjwgMapsB229wgMapsIda } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objJjwgMapJjwgMarkerC = await jjwgMapJjwgMarkerCService.updateJjwgMapJjwgMarkerCByJjwgMapsB229wgMapsIda(jjwgMapsB229wgMapsIda, req.body);
            if (!objJjwgMapJjwgMarkerC) {
                util.setError(404, `Cannot find jjwgMapJjwgMarkerC with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgMapJjwgMarkerC updated', objJjwgMapJjwgMarkerC);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgMapsJjwgMarkersCCtrl.updateJjwgMapJjwgMarkerCByJjwgMaps2e31markersIdb = async (req, res) => {
     const { jjwgMaps2e31markersIdb } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objJjwgMapJjwgMarkerC = await jjwgMapJjwgMarkerCService.updateJjwgMapJjwgMarkerCByJjwgMaps2e31markersIdb(jjwgMaps2e31markersIdb, req.body);
            if (!objJjwgMapJjwgMarkerC) {
                util.setError(404, `Cannot find jjwgMapJjwgMarkerC with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgMapJjwgMarkerC updated', objJjwgMapJjwgMarkerC);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgMapsJjwgMarkersCCtrl.updateJjwgMapJjwgMarkerCByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objJjwgMapJjwgMarkerC = await jjwgMapJjwgMarkerCService.updateJjwgMapJjwgMarkerCByDateModified(dateModified, req.body);
            if (!objJjwgMapJjwgMarkerC) {
                util.setError(404, `Cannot find jjwgMapJjwgMarkerC with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgMapJjwgMarkerC updated', objJjwgMapJjwgMarkerC);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = jjwgMapsJjwgMarkersCCtrl;
//</es-section>
