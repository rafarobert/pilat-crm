/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:36:24 GMT-0400 (Bolivia Time)
 * Time: 15:36:24
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:36:24 GMT-0400 (Bolivia Time)
 * Last time updated: 15:36:24
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const jjwgMarkerService = require('../services/jjwg_markers.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const jjwgMarkersCtrl = {};
jjwgMarkersCtrl.service = jjwgMarkerService;


jjwgMarkersCtrl.getAllJjwgMarkers = async (req, res) => {
    try {
        const objJjwgMarkers = await jjwgMarkerService.getAllJjwgMarkers(req.query);
        if (objJjwgMarkers.length > 0) {
            util.setSuccess(200, 'JjwgMarkers retrieved', objJjwgMarkers);
        } else {
            util.setSuccess(200, 'No jjwgMarker found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgMarkersCtrl.getAJjwgMarker = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objJjwgMarker = await jjwgMarkerService.getAJjwgMarker(id, req.query);
        if (!objJjwgMarker) {
            util.setError(404, `Cannot find jjwgMarker with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found jjwgMarker', objJjwgMarker);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgMarkersCtrl.addJjwgMarker = async (req, res) => {
    try {
        const objJjwgMarker = await jjwgMarkerService.addJjwgMarker(req.body);
        util.setSuccess(201, 'JjwgMarker Added!', objJjwgMarker);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgMarkersCtrl.updateJjwgMarker = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objJjwgMarker = await jjwgMarkerService.updateJjwgMarker(id, req.body);
        if (!objJjwgMarker) {
            util.setError(404, `Cannot find jjwgMarker with the id: ${id}`);
        } else {
            util.setSuccess(200, 'JjwgMarker updated', objJjwgMarker);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

jjwgMarkersCtrl.deleteJjwgMarker = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objJjwgMarker = await jjwgMarkerService.deleteJjwgMarker(id);
        if (objJjwgMarker) {
            util.setSuccess(200, 'JjwgMarker deleted', objJjwgMarker);
        } else {
            util.setError(404, `JjwgMarker with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



jjwgMarkersCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objJjwgMarker = await jjwgMarkerService.findOneById(id, req.query);
        if (!objJjwgMarker) {
            util.setError(404, `Cannot find jjwgMarker with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgMarker', objJjwgMarker);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgMarkersCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objJjwgMarker = await jjwgMarkerService.findOneByDeleted(deleted, req.query);
        if (!objJjwgMarker) {
            util.setError(404, `Cannot find jjwgMarker with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgMarker', objJjwgMarker);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgMarkersCtrl.findOneByJjwgMapsLat = async (req, res) => {
    try {
        const { jjwgMapsLat } = req.params;
        const objJjwgMarker = await jjwgMarkerService.findOneByJjwgMapsLat(jjwgMapsLat, req.query);
        if (!objJjwgMarker) {
            util.setError(404, `Cannot find jjwgMarker with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgMarker', objJjwgMarker);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgMarkersCtrl.findOneByJjwgMapsLng = async (req, res) => {
    try {
        const { jjwgMapsLng } = req.params;
        const objJjwgMarker = await jjwgMarkerService.findOneByJjwgMapsLng(jjwgMapsLng, req.query);
        if (!objJjwgMarker) {
            util.setError(404, `Cannot find jjwgMarker with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgMarker', objJjwgMarker);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgMarkersCtrl.findOneByName = async (req, res) => {
    try {
        const { name } = req.params;
        const objJjwgMarker = await jjwgMarkerService.findOneByName(name, req.query);
        if (!objJjwgMarker) {
            util.setError(404, `Cannot find jjwgMarker with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgMarker', objJjwgMarker);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgMarkersCtrl.findOneByCity = async (req, res) => {
    try {
        const { city } = req.params;
        const objJjwgMarker = await jjwgMarkerService.findOneByCity(city, req.query);
        if (!objJjwgMarker) {
            util.setError(404, `Cannot find jjwgMarker with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgMarker', objJjwgMarker);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgMarkersCtrl.findOneByState = async (req, res) => {
    try {
        const { state } = req.params;
        const objJjwgMarker = await jjwgMarkerService.findOneByState(state, req.query);
        if (!objJjwgMarker) {
            util.setError(404, `Cannot find jjwgMarker with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgMarker', objJjwgMarker);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgMarkersCtrl.findOneByCountry = async (req, res) => {
    try {
        const { country } = req.params;
        const objJjwgMarker = await jjwgMarkerService.findOneByCountry(country, req.query);
        if (!objJjwgMarker) {
            util.setError(404, `Cannot find jjwgMarker with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgMarker', objJjwgMarker);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgMarkersCtrl.findOneByMarkerImage = async (req, res) => {
    try {
        const { markerImage } = req.params;
        const objJjwgMarker = await jjwgMarkerService.findOneByMarkerImage(markerImage, req.query);
        if (!objJjwgMarker) {
            util.setError(404, `Cannot find jjwgMarker with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgMarker', objJjwgMarker);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgMarkersCtrl.findOneByDescription = async (req, res) => {
    try {
        const { description } = req.params;
        const objJjwgMarker = await jjwgMarkerService.findOneByDescription(description, req.query);
        if (!objJjwgMarker) {
            util.setError(404, `Cannot find jjwgMarker with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgMarker', objJjwgMarker);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgMarkersCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objJjwgMarker = await jjwgMarkerService.findOneByDateEntered(dateEntered, req.query);
        if (!objJjwgMarker) {
            util.setError(404, `Cannot find jjwgMarker with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgMarker', objJjwgMarker);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgMarkersCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objJjwgMarker = await jjwgMarkerService.findOneByDateModified(dateModified, req.query);
        if (!objJjwgMarker) {
            util.setError(404, `Cannot find jjwgMarker with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgMarker', objJjwgMarker);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgMarkersCtrl.findOneByModifiedUserId = async (req, res) => {
    try {
        const { modifiedUserId } = req.params;
        const objJjwgMarker = await jjwgMarkerService.findOneByModifiedUserId(modifiedUserId, req.query);
        if (!objJjwgMarker) {
            util.setError(404, `Cannot find jjwgMarker with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgMarker', objJjwgMarker);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgMarkersCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objJjwgMarker = await jjwgMarkerService.findOneByCreatedBy(createdBy, req.query);
        if (!objJjwgMarker) {
            util.setError(404, `Cannot find jjwgMarker with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgMarker', objJjwgMarker);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgMarkersCtrl.findOneByAssignedUserId = async (req, res) => {
    try {
        const { assignedUserId } = req.params;
        const objJjwgMarker = await jjwgMarkerService.findOneByAssignedUserId(assignedUserId, req.query);
        if (!objJjwgMarker) {
            util.setError(404, `Cannot find jjwgMarker with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgMarker', objJjwgMarker);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



jjwgMarkersCtrl.updateJjwgMarkerById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgMarker = await jjwgMarkerService.updateJjwgMarkerById(id, req.body);
            if (!objJjwgMarker) {
                util.setError(404, `Cannot find jjwgMarker with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgMarker updated', objJjwgMarker);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgMarkersCtrl.updateJjwgMarkerByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgMarker = await jjwgMarkerService.updateJjwgMarkerByDeleted(deleted, req.body);
            if (!objJjwgMarker) {
                util.setError(404, `Cannot find jjwgMarker with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgMarker updated', objJjwgMarker);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgMarkersCtrl.updateJjwgMarkerByJjwgMapsLat = async (req, res) => {
     const { jjwgMapsLat } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgMarker = await jjwgMarkerService.updateJjwgMarkerByJjwgMapsLat(jjwgMapsLat, req.body);
            if (!objJjwgMarker) {
                util.setError(404, `Cannot find jjwgMarker with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgMarker updated', objJjwgMarker);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgMarkersCtrl.updateJjwgMarkerByJjwgMapsLng = async (req, res) => {
     const { jjwgMapsLng } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgMarker = await jjwgMarkerService.updateJjwgMarkerByJjwgMapsLng(jjwgMapsLng, req.body);
            if (!objJjwgMarker) {
                util.setError(404, `Cannot find jjwgMarker with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgMarker updated', objJjwgMarker);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgMarkersCtrl.updateJjwgMarkerByName = async (req, res) => {
     const { name } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgMarker = await jjwgMarkerService.updateJjwgMarkerByName(name, req.body);
            if (!objJjwgMarker) {
                util.setError(404, `Cannot find jjwgMarker with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgMarker updated', objJjwgMarker);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgMarkersCtrl.updateJjwgMarkerByCity = async (req, res) => {
     const { city } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgMarker = await jjwgMarkerService.updateJjwgMarkerByCity(city, req.body);
            if (!objJjwgMarker) {
                util.setError(404, `Cannot find jjwgMarker with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgMarker updated', objJjwgMarker);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgMarkersCtrl.updateJjwgMarkerByState = async (req, res) => {
     const { state } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgMarker = await jjwgMarkerService.updateJjwgMarkerByState(state, req.body);
            if (!objJjwgMarker) {
                util.setError(404, `Cannot find jjwgMarker with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgMarker updated', objJjwgMarker);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgMarkersCtrl.updateJjwgMarkerByCountry = async (req, res) => {
     const { country } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgMarker = await jjwgMarkerService.updateJjwgMarkerByCountry(country, req.body);
            if (!objJjwgMarker) {
                util.setError(404, `Cannot find jjwgMarker with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgMarker updated', objJjwgMarker);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgMarkersCtrl.updateJjwgMarkerByMarkerImage = async (req, res) => {
     const { markerImage } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgMarker = await jjwgMarkerService.updateJjwgMarkerByMarkerImage(markerImage, req.body);
            if (!objJjwgMarker) {
                util.setError(404, `Cannot find jjwgMarker with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgMarker updated', objJjwgMarker);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgMarkersCtrl.updateJjwgMarkerByDescription = async (req, res) => {
     const { description } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgMarker = await jjwgMarkerService.updateJjwgMarkerByDescription(description, req.body);
            if (!objJjwgMarker) {
                util.setError(404, `Cannot find jjwgMarker with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgMarker updated', objJjwgMarker);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgMarkersCtrl.updateJjwgMarkerByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgMarker = await jjwgMarkerService.updateJjwgMarkerByDateEntered(dateEntered, req.body);
            if (!objJjwgMarker) {
                util.setError(404, `Cannot find jjwgMarker with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgMarker updated', objJjwgMarker);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgMarkersCtrl.updateJjwgMarkerByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgMarker = await jjwgMarkerService.updateJjwgMarkerByDateModified(dateModified, req.body);
            if (!objJjwgMarker) {
                util.setError(404, `Cannot find jjwgMarker with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgMarker updated', objJjwgMarker);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgMarkersCtrl.updateJjwgMarkerByModifiedUserId = async (req, res) => {
     const { modifiedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgMarker = await jjwgMarkerService.updateJjwgMarkerByModifiedUserId(modifiedUserId, req.body);
            if (!objJjwgMarker) {
                util.setError(404, `Cannot find jjwgMarker with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgMarker updated', objJjwgMarker);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgMarkersCtrl.updateJjwgMarkerByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgMarker = await jjwgMarkerService.updateJjwgMarkerByCreatedBy(createdBy, req.body);
            if (!objJjwgMarker) {
                util.setError(404, `Cannot find jjwgMarker with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgMarker updated', objJjwgMarker);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgMarkersCtrl.updateJjwgMarkerByAssignedUserId = async (req, res) => {
     const { assignedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgMarker = await jjwgMarkerService.updateJjwgMarkerByAssignedUserId(assignedUserId, req.body);
            if (!objJjwgMarker) {
                util.setError(404, `Cannot find jjwgMarker with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgMarker updated', objJjwgMarker);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = jjwgMarkersCtrl;
//</es-section>
