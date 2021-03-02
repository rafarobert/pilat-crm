/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:54 GMT-0400 (Bolivia Time)
 * Time: 14:0:54
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:54 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:54
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const fpEventLocationService = require('../services/fp_event_locations.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const fpEventLocationsCtrl = {};
fpEventLocationsCtrl.service = fpEventLocationService;


fpEventLocationsCtrl.getAllFpEventLocations = async (req, res) => {
    try {
        const objFpEventLocations = await fpEventLocationService.getAllFpEventLocations(req.query);
        if (objFpEventLocations.length > 0) {
            util.setSuccess(200, 'FpEventLocations retrieved', objFpEventLocations);
        } else {
            util.setSuccess(200, 'No fpEventLocation found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventLocationsCtrl.getAFpEventLocation = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objFpEventLocation = await fpEventLocationService.getAFpEventLocation(id, req.query);
        if (!objFpEventLocation) {
            util.setError(404, `Cannot find fpEventLocation with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found fpEventLocation', objFpEventLocation);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventLocationsCtrl.addFpEventLocation = async (req, res) => {
    try {
        const objFpEventLocation = await fpEventLocationService.addFpEventLocation(req.body);
        util.setSuccess(201, 'FpEventLocation Added!', objFpEventLocation);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventLocationsCtrl.updateFpEventLocation = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objFpEventLocation = await fpEventLocationService.updateFpEventLocation(id, req.body);
        if (!objFpEventLocation) {
            util.setError(404, `Cannot find fpEventLocation with the id: ${id}`);
        } else {
            util.setSuccess(200, 'FpEventLocation updated', objFpEventLocation);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

fpEventLocationsCtrl.deleteFpEventLocation = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objFpEventLocation = await fpEventLocationService.deleteFpEventLocation(id);
        if (objFpEventLocation) {
            util.setSuccess(200, 'FpEventLocation deleted', objFpEventLocation);
        } else {
            util.setError(404, `FpEventLocation with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



fpEventLocationsCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objFpEventLocation = await fpEventLocationService.findOneById(id, req.query);
        if (!objFpEventLocation) {
            util.setError(404, `Cannot find fpEventLocation with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEventLocation', objFpEventLocation);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventLocationsCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objFpEventLocation = await fpEventLocationService.findOneByDeleted(deleted, req.query);
        if (!objFpEventLocation) {
            util.setError(404, `Cannot find fpEventLocation with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEventLocation', objFpEventLocation);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventLocationsCtrl.findOneByName = async (req, res) => {
    try {
        const { name } = req.params;
        const objFpEventLocation = await fpEventLocationService.findOneByName(name, req.query);
        if (!objFpEventLocation) {
            util.setError(404, `Cannot find fpEventLocation with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEventLocation', objFpEventLocation);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventLocationsCtrl.findOneByAddress = async (req, res) => {
    try {
        const { address } = req.params;
        const objFpEventLocation = await fpEventLocationService.findOneByAddress(address, req.query);
        if (!objFpEventLocation) {
            util.setError(404, `Cannot find fpEventLocation with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEventLocation', objFpEventLocation);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventLocationsCtrl.findOneByAddressCity = async (req, res) => {
    try {
        const { addressCity } = req.params;
        const objFpEventLocation = await fpEventLocationService.findOneByAddressCity(addressCity, req.query);
        if (!objFpEventLocation) {
            util.setError(404, `Cannot find fpEventLocation with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEventLocation', objFpEventLocation);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventLocationsCtrl.findOneByAddressCountry = async (req, res) => {
    try {
        const { addressCountry } = req.params;
        const objFpEventLocation = await fpEventLocationService.findOneByAddressCountry(addressCountry, req.query);
        if (!objFpEventLocation) {
            util.setError(404, `Cannot find fpEventLocation with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEventLocation', objFpEventLocation);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventLocationsCtrl.findOneByAddressPostalcode = async (req, res) => {
    try {
        const { addressPostalcode } = req.params;
        const objFpEventLocation = await fpEventLocationService.findOneByAddressPostalcode(addressPostalcode, req.query);
        if (!objFpEventLocation) {
            util.setError(404, `Cannot find fpEventLocation with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEventLocation', objFpEventLocation);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventLocationsCtrl.findOneByAddressState = async (req, res) => {
    try {
        const { addressState } = req.params;
        const objFpEventLocation = await fpEventLocationService.findOneByAddressState(addressState, req.query);
        if (!objFpEventLocation) {
            util.setError(404, `Cannot find fpEventLocation with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEventLocation', objFpEventLocation);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventLocationsCtrl.findOneByCapacity = async (req, res) => {
    try {
        const { capacity } = req.params;
        const objFpEventLocation = await fpEventLocationService.findOneByCapacity(capacity, req.query);
        if (!objFpEventLocation) {
            util.setError(404, `Cannot find fpEventLocation with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEventLocation', objFpEventLocation);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventLocationsCtrl.findOneByDescription = async (req, res) => {
    try {
        const { description } = req.params;
        const objFpEventLocation = await fpEventLocationService.findOneByDescription(description, req.query);
        if (!objFpEventLocation) {
            util.setError(404, `Cannot find fpEventLocation with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEventLocation', objFpEventLocation);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventLocationsCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objFpEventLocation = await fpEventLocationService.findOneByDateEntered(dateEntered, req.query);
        if (!objFpEventLocation) {
            util.setError(404, `Cannot find fpEventLocation with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEventLocation', objFpEventLocation);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventLocationsCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objFpEventLocation = await fpEventLocationService.findOneByDateModified(dateModified, req.query);
        if (!objFpEventLocation) {
            util.setError(404, `Cannot find fpEventLocation with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEventLocation', objFpEventLocation);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventLocationsCtrl.findOneByModifiedUserId = async (req, res) => {
    try {
        const { modifiedUserId } = req.params;
        const objFpEventLocation = await fpEventLocationService.findOneByModifiedUserId(modifiedUserId, req.query);
        if (!objFpEventLocation) {
            util.setError(404, `Cannot find fpEventLocation with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEventLocation', objFpEventLocation);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventLocationsCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objFpEventLocation = await fpEventLocationService.findOneByCreatedBy(createdBy, req.query);
        if (!objFpEventLocation) {
            util.setError(404, `Cannot find fpEventLocation with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEventLocation', objFpEventLocation);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

fpEventLocationsCtrl.findOneByAssignedUserId = async (req, res) => {
    try {
        const { assignedUserId } = req.params;
        const objFpEventLocation = await fpEventLocationService.findOneByAssignedUserId(assignedUserId, req.query);
        if (!objFpEventLocation) {
            util.setError(404, `Cannot find fpEventLocation with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found fpEventLocation', objFpEventLocation);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



fpEventLocationsCtrl.updateFpEventLocationById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objFpEventLocation = await fpEventLocationService.updateFpEventLocationById(id, req.body);
            if (!objFpEventLocation) {
                util.setError(404, `Cannot find fpEventLocation with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEventLocation updated', objFpEventLocation);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fpEventLocationsCtrl.updateFpEventLocationByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objFpEventLocation = await fpEventLocationService.updateFpEventLocationByDeleted(deleted, req.body);
            if (!objFpEventLocation) {
                util.setError(404, `Cannot find fpEventLocation with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEventLocation updated', objFpEventLocation);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fpEventLocationsCtrl.updateFpEventLocationByName = async (req, res) => {
     const { name } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objFpEventLocation = await fpEventLocationService.updateFpEventLocationByName(name, req.body);
            if (!objFpEventLocation) {
                util.setError(404, `Cannot find fpEventLocation with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEventLocation updated', objFpEventLocation);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fpEventLocationsCtrl.updateFpEventLocationByAddress = async (req, res) => {
     const { address } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objFpEventLocation = await fpEventLocationService.updateFpEventLocationByAddress(address, req.body);
            if (!objFpEventLocation) {
                util.setError(404, `Cannot find fpEventLocation with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEventLocation updated', objFpEventLocation);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fpEventLocationsCtrl.updateFpEventLocationByAddressCity = async (req, res) => {
     const { addressCity } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objFpEventLocation = await fpEventLocationService.updateFpEventLocationByAddressCity(addressCity, req.body);
            if (!objFpEventLocation) {
                util.setError(404, `Cannot find fpEventLocation with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEventLocation updated', objFpEventLocation);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fpEventLocationsCtrl.updateFpEventLocationByAddressCountry = async (req, res) => {
     const { addressCountry } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objFpEventLocation = await fpEventLocationService.updateFpEventLocationByAddressCountry(addressCountry, req.body);
            if (!objFpEventLocation) {
                util.setError(404, `Cannot find fpEventLocation with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEventLocation updated', objFpEventLocation);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fpEventLocationsCtrl.updateFpEventLocationByAddressPostalcode = async (req, res) => {
     const { addressPostalcode } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objFpEventLocation = await fpEventLocationService.updateFpEventLocationByAddressPostalcode(addressPostalcode, req.body);
            if (!objFpEventLocation) {
                util.setError(404, `Cannot find fpEventLocation with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEventLocation updated', objFpEventLocation);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fpEventLocationsCtrl.updateFpEventLocationByAddressState = async (req, res) => {
     const { addressState } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objFpEventLocation = await fpEventLocationService.updateFpEventLocationByAddressState(addressState, req.body);
            if (!objFpEventLocation) {
                util.setError(404, `Cannot find fpEventLocation with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEventLocation updated', objFpEventLocation);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fpEventLocationsCtrl.updateFpEventLocationByCapacity = async (req, res) => {
     const { capacity } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objFpEventLocation = await fpEventLocationService.updateFpEventLocationByCapacity(capacity, req.body);
            if (!objFpEventLocation) {
                util.setError(404, `Cannot find fpEventLocation with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEventLocation updated', objFpEventLocation);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fpEventLocationsCtrl.updateFpEventLocationByDescription = async (req, res) => {
     const { description } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objFpEventLocation = await fpEventLocationService.updateFpEventLocationByDescription(description, req.body);
            if (!objFpEventLocation) {
                util.setError(404, `Cannot find fpEventLocation with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEventLocation updated', objFpEventLocation);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fpEventLocationsCtrl.updateFpEventLocationByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objFpEventLocation = await fpEventLocationService.updateFpEventLocationByDateEntered(dateEntered, req.body);
            if (!objFpEventLocation) {
                util.setError(404, `Cannot find fpEventLocation with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEventLocation updated', objFpEventLocation);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fpEventLocationsCtrl.updateFpEventLocationByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objFpEventLocation = await fpEventLocationService.updateFpEventLocationByDateModified(dateModified, req.body);
            if (!objFpEventLocation) {
                util.setError(404, `Cannot find fpEventLocation with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEventLocation updated', objFpEventLocation);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fpEventLocationsCtrl.updateFpEventLocationByModifiedUserId = async (req, res) => {
     const { modifiedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objFpEventLocation = await fpEventLocationService.updateFpEventLocationByModifiedUserId(modifiedUserId, req.body);
            if (!objFpEventLocation) {
                util.setError(404, `Cannot find fpEventLocation with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEventLocation updated', objFpEventLocation);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fpEventLocationsCtrl.updateFpEventLocationByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objFpEventLocation = await fpEventLocationService.updateFpEventLocationByCreatedBy(createdBy, req.body);
            if (!objFpEventLocation) {
                util.setError(404, `Cannot find fpEventLocation with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEventLocation updated', objFpEventLocation);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

fpEventLocationsCtrl.updateFpEventLocationByAssignedUserId = async (req, res) => {
     const { assignedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objFpEventLocation = await fpEventLocationService.updateFpEventLocationByAssignedUserId(assignedUserId, req.body);
            if (!objFpEventLocation) {
                util.setError(404, `Cannot find fpEventLocation with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FpEventLocation updated', objFpEventLocation);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = fpEventLocationsCtrl;
//</es-section>
