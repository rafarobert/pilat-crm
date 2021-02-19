/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:44:10 GMT-0400 (Bolivia Time)
 * Time: 4:44:10
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:44:10 GMT-0400 (Bolivia Time)
 * Last time updated: 4:44:10
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const spotService = require('../services/spots.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const spotsCtrl = {};
spotsCtrl.service = spotService;


spotsCtrl.getAllSpots = async (req, res) => {
    try {
        const objSpots = await spotService.getAllSpots(req.query);
        if (objSpots.length > 0) {
            util.setSuccess(200, 'Spots retrieved', objSpots);
        } else {
            util.setSuccess(200, 'No spot found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

spotsCtrl.getASpot = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objSpot = await spotService.getASpot(id, req.query);
        if (!objSpot) {
            util.setError(404, `Cannot find spot with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found spot', objSpot);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

spotsCtrl.addSpot = async (req, res) => {
    try {
        const objSpot = await spotService.addSpot(req.body);
        util.setSuccess(201, 'Spot Added!', objSpot);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

spotsCtrl.updateSpot = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objSpot = await spotService.updateSpot(id, req.body);
        if (!objSpot) {
            util.setError(404, `Cannot find spot with the id: ${id}`);
        } else {
            util.setSuccess(200, 'Spot updated', objSpot);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

spotsCtrl.deleteSpot = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objSpot = await spotService.deleteSpot(id);
        if (objSpot) {
            util.setSuccess(200, 'Spot deleted', objSpot);
        } else {
            util.setError(404, `Spot with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



spotsCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objSpot = await spotService.findOneById(id, req.query);
        if (!objSpot) {
            util.setError(404, `Cannot find spot with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found spot', objSpot);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

spotsCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objSpot = await spotService.findOneByDeleted(deleted, req.query);
        if (!objSpot) {
            util.setError(404, `Cannot find spot with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found spot', objSpot);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

spotsCtrl.findOneByName = async (req, res) => {
    try {
        const { name } = req.params;
        const objSpot = await spotService.findOneByName(name, req.query);
        if (!objSpot) {
            util.setError(404, `Cannot find spot with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found spot', objSpot);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

spotsCtrl.findOneByType = async (req, res) => {
    try {
        const { type } = req.params;
        const objSpot = await spotService.findOneByType(type, req.query);
        if (!objSpot) {
            util.setError(404, `Cannot find spot with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found spot', objSpot);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

spotsCtrl.findOneByDescription = async (req, res) => {
    try {
        const { description } = req.params;
        const objSpot = await spotService.findOneByDescription(description, req.query);
        if (!objSpot) {
            util.setError(404, `Cannot find spot with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found spot', objSpot);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

spotsCtrl.findOneByConfig = async (req, res) => {
    try {
        const { config } = req.params;
        const objSpot = await spotService.findOneByConfig(config, req.query);
        if (!objSpot) {
            util.setError(404, `Cannot find spot with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found spot', objSpot);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

spotsCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objSpot = await spotService.findOneByDateEntered(dateEntered, req.query);
        if (!objSpot) {
            util.setError(404, `Cannot find spot with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found spot', objSpot);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

spotsCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objSpot = await spotService.findOneByDateModified(dateModified, req.query);
        if (!objSpot) {
            util.setError(404, `Cannot find spot with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found spot', objSpot);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

spotsCtrl.findOneByModifiedUserId = async (req, res) => {
    try {
        const { modifiedUserId } = req.params;
        const objSpot = await spotService.findOneByModifiedUserId(modifiedUserId, req.query);
        if (!objSpot) {
            util.setError(404, `Cannot find spot with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found spot', objSpot);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

spotsCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objSpot = await spotService.findOneByCreatedBy(createdBy, req.query);
        if (!objSpot) {
            util.setError(404, `Cannot find spot with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found spot', objSpot);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

spotsCtrl.findOneByAssignedUserId = async (req, res) => {
    try {
        const { assignedUserId } = req.params;
        const objSpot = await spotService.findOneByAssignedUserId(assignedUserId, req.query);
        if (!objSpot) {
            util.setError(404, `Cannot find spot with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found spot', objSpot);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



spotsCtrl.updateSpotById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSpot = await spotService.updateSpotById(id, req.body);
            if (!objSpot) {
                util.setError(404, `Cannot find spot with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Spot updated', objSpot);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

spotsCtrl.updateSpotByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSpot = await spotService.updateSpotByDeleted(deleted, req.body);
            if (!objSpot) {
                util.setError(404, `Cannot find spot with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Spot updated', objSpot);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

spotsCtrl.updateSpotByName = async (req, res) => {
     const { name } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSpot = await spotService.updateSpotByName(name, req.body);
            if (!objSpot) {
                util.setError(404, `Cannot find spot with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Spot updated', objSpot);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

spotsCtrl.updateSpotByType = async (req, res) => {
     const { type } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSpot = await spotService.updateSpotByType(type, req.body);
            if (!objSpot) {
                util.setError(404, `Cannot find spot with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Spot updated', objSpot);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

spotsCtrl.updateSpotByDescription = async (req, res) => {
     const { description } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSpot = await spotService.updateSpotByDescription(description, req.body);
            if (!objSpot) {
                util.setError(404, `Cannot find spot with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Spot updated', objSpot);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

spotsCtrl.updateSpotByConfig = async (req, res) => {
     const { config } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSpot = await spotService.updateSpotByConfig(config, req.body);
            if (!objSpot) {
                util.setError(404, `Cannot find spot with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Spot updated', objSpot);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

spotsCtrl.updateSpotByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSpot = await spotService.updateSpotByDateEntered(dateEntered, req.body);
            if (!objSpot) {
                util.setError(404, `Cannot find spot with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Spot updated', objSpot);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

spotsCtrl.updateSpotByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSpot = await spotService.updateSpotByDateModified(dateModified, req.body);
            if (!objSpot) {
                util.setError(404, `Cannot find spot with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Spot updated', objSpot);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

spotsCtrl.updateSpotByModifiedUserId = async (req, res) => {
     const { modifiedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSpot = await spotService.updateSpotByModifiedUserId(modifiedUserId, req.body);
            if (!objSpot) {
                util.setError(404, `Cannot find spot with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Spot updated', objSpot);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

spotsCtrl.updateSpotByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSpot = await spotService.updateSpotByCreatedBy(createdBy, req.body);
            if (!objSpot) {
                util.setError(404, `Cannot find spot with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Spot updated', objSpot);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

spotsCtrl.updateSpotByAssignedUserId = async (req, res) => {
     const { assignedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSpot = await spotService.updateSpotByAssignedUserId(assignedUserId, req.body);
            if (!objSpot) {
                util.setError(404, `Cannot find spot with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Spot updated', objSpot);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = spotsCtrl;
//</es-section>
