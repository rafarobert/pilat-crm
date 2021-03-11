/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:05 GMT-0400 (Bolivia Time)
 * Time: 14:57:5
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:05 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:5
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const models = require('../../express');
const jjwgAreaService = require('../services/jjwg_areas.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const jjwgAreasCtrl = {};
jjwgAreasCtrl.service = jjwgAreaService;


jjwgAreasCtrl.getAllJjwgAreas = async (req, res) => {
    try {
        const { length } = req.body;
        const { start } = req.body;
        const [column, dir] = util.getOrderByColumnDirection(models.sequelize.jjwgAreas.rawAttributes,req.body);
        req.query.limit = length ? length : req.query.limit;
        req.query.offset = start ? start : req.query.offset;
        req.query.order = column && dir ? [[column,dir]] : req.query.order;

        const objJjwgAreas = await jjwgAreaService.getAllJjwgAreas(req.query);
        if (objJjwgAreas && objJjwgAreas.rows && objJjwgAreas.count) {
            util.setSuccess(200, 'JjwgAreas retrieved', objJjwgAreas.rows, objJjwgAreas.count, req.query.limit, req.query.offset);
        } else {
            util.setSuccess(200, 'No jjwgArea found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgAreasCtrl.getAJjwgArea = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objJjwgArea = await jjwgAreaService.getAJjwgArea(id, req.query);
        if (!objJjwgArea) {
            util.setError(404, `Cannot find jjwgArea with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found jjwgArea', objJjwgArea);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgAreasCtrl.addJjwgArea = async (req, res) => {
    try {
        const objJjwgArea = await jjwgAreaService.addJjwgArea(req.body);
        util.setSuccess(201, 'JjwgArea Added!', objJjwgArea);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgAreasCtrl.updateJjwgArea = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objJjwgArea = await jjwgAreaService.updateJjwgArea(id, req.body);
        if (!objJjwgArea) {
            util.setError(404, `Cannot find jjwgArea with the id: ${id}`);
        } else {
            util.setSuccess(200, 'JjwgArea updated', objJjwgArea);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

jjwgAreasCtrl.deleteJjwgArea = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objJjwgArea = await jjwgAreaService.deleteJjwgArea(id);
        if (objJjwgArea) {
            util.setSuccess(200, 'JjwgArea deleted', objJjwgArea);
        } else {
            util.setError(404, `JjwgArea with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



jjwgAreasCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objJjwgArea = await jjwgAreaService.findOneById(id, req.query);
        if (!objJjwgArea) {
            util.setError(404, `Cannot find jjwgArea with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgArea', objJjwgArea);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgAreasCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objJjwgArea = await jjwgAreaService.findOneByDeleted(deleted, req.query);
        if (!objJjwgArea) {
            util.setError(404, `Cannot find jjwgArea with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgArea', objJjwgArea);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgAreasCtrl.findOneByName = async (req, res) => {
    try {
        const { name } = req.params;
        const objJjwgArea = await jjwgAreaService.findOneByName(name, req.query);
        if (!objJjwgArea) {
            util.setError(404, `Cannot find jjwgArea with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgArea', objJjwgArea);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgAreasCtrl.findOneByCity = async (req, res) => {
    try {
        const { city } = req.params;
        const objJjwgArea = await jjwgAreaService.findOneByCity(city, req.query);
        if (!objJjwgArea) {
            util.setError(404, `Cannot find jjwgArea with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgArea', objJjwgArea);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgAreasCtrl.findOneByState = async (req, res) => {
    try {
        const { state } = req.params;
        const objJjwgArea = await jjwgAreaService.findOneByState(state, req.query);
        if (!objJjwgArea) {
            util.setError(404, `Cannot find jjwgArea with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgArea', objJjwgArea);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgAreasCtrl.findOneByCountry = async (req, res) => {
    try {
        const { country } = req.params;
        const objJjwgArea = await jjwgAreaService.findOneByCountry(country, req.query);
        if (!objJjwgArea) {
            util.setError(404, `Cannot find jjwgArea with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgArea', objJjwgArea);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgAreasCtrl.findOneByDescription = async (req, res) => {
    try {
        const { description } = req.params;
        const objJjwgArea = await jjwgAreaService.findOneByDescription(description, req.query);
        if (!objJjwgArea) {
            util.setError(404, `Cannot find jjwgArea with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgArea', objJjwgArea);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgAreasCtrl.findOneByCoordinates = async (req, res) => {
    try {
        const { coordinates } = req.params;
        const objJjwgArea = await jjwgAreaService.findOneByCoordinates(coordinates, req.query);
        if (!objJjwgArea) {
            util.setError(404, `Cannot find jjwgArea with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgArea', objJjwgArea);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgAreasCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objJjwgArea = await jjwgAreaService.findOneByDateEntered(dateEntered, req.query);
        if (!objJjwgArea) {
            util.setError(404, `Cannot find jjwgArea with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgArea', objJjwgArea);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgAreasCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objJjwgArea = await jjwgAreaService.findOneByDateModified(dateModified, req.query);
        if (!objJjwgArea) {
            util.setError(404, `Cannot find jjwgArea with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgArea', objJjwgArea);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgAreasCtrl.findOneByModifiedUserId = async (req, res) => {
    try {
        const { modifiedUserId } = req.params;
        const objJjwgArea = await jjwgAreaService.findOneByModifiedUserId(modifiedUserId, req.query);
        if (!objJjwgArea) {
            util.setError(404, `Cannot find jjwgArea with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgArea', objJjwgArea);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgAreasCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objJjwgArea = await jjwgAreaService.findOneByCreatedBy(createdBy, req.query);
        if (!objJjwgArea) {
            util.setError(404, `Cannot find jjwgArea with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgArea', objJjwgArea);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgAreasCtrl.findOneByAssignedUserId = async (req, res) => {
    try {
        const { assignedUserId } = req.params;
        const objJjwgArea = await jjwgAreaService.findOneByAssignedUserId(assignedUserId, req.query);
        if (!objJjwgArea) {
            util.setError(404, `Cannot find jjwgArea with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgArea', objJjwgArea);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



jjwgAreasCtrl.updateJjwgAreaById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgArea = await jjwgAreaService.updateJjwgAreaById(id, req.body);
            if (!objJjwgArea) {
                util.setError(404, `Cannot find jjwgArea with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgArea updated', objJjwgArea);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgAreasCtrl.updateJjwgAreaByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgArea = await jjwgAreaService.updateJjwgAreaByDeleted(deleted, req.body);
            if (!objJjwgArea) {
                util.setError(404, `Cannot find jjwgArea with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgArea updated', objJjwgArea);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgAreasCtrl.updateJjwgAreaByName = async (req, res) => {
     const { name } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgArea = await jjwgAreaService.updateJjwgAreaByName(name, req.body);
            if (!objJjwgArea) {
                util.setError(404, `Cannot find jjwgArea with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgArea updated', objJjwgArea);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgAreasCtrl.updateJjwgAreaByCity = async (req, res) => {
     const { city } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgArea = await jjwgAreaService.updateJjwgAreaByCity(city, req.body);
            if (!objJjwgArea) {
                util.setError(404, `Cannot find jjwgArea with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgArea updated', objJjwgArea);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgAreasCtrl.updateJjwgAreaByState = async (req, res) => {
     const { state } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgArea = await jjwgAreaService.updateJjwgAreaByState(state, req.body);
            if (!objJjwgArea) {
                util.setError(404, `Cannot find jjwgArea with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgArea updated', objJjwgArea);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgAreasCtrl.updateJjwgAreaByCountry = async (req, res) => {
     const { country } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgArea = await jjwgAreaService.updateJjwgAreaByCountry(country, req.body);
            if (!objJjwgArea) {
                util.setError(404, `Cannot find jjwgArea with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgArea updated', objJjwgArea);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgAreasCtrl.updateJjwgAreaByDescription = async (req, res) => {
     const { description } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgArea = await jjwgAreaService.updateJjwgAreaByDescription(description, req.body);
            if (!objJjwgArea) {
                util.setError(404, `Cannot find jjwgArea with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgArea updated', objJjwgArea);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgAreasCtrl.updateJjwgAreaByCoordinates = async (req, res) => {
     const { coordinates } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgArea = await jjwgAreaService.updateJjwgAreaByCoordinates(coordinates, req.body);
            if (!objJjwgArea) {
                util.setError(404, `Cannot find jjwgArea with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgArea updated', objJjwgArea);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgAreasCtrl.updateJjwgAreaByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgArea = await jjwgAreaService.updateJjwgAreaByDateEntered(dateEntered, req.body);
            if (!objJjwgArea) {
                util.setError(404, `Cannot find jjwgArea with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgArea updated', objJjwgArea);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgAreasCtrl.updateJjwgAreaByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgArea = await jjwgAreaService.updateJjwgAreaByDateModified(dateModified, req.body);
            if (!objJjwgArea) {
                util.setError(404, `Cannot find jjwgArea with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgArea updated', objJjwgArea);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgAreasCtrl.updateJjwgAreaByModifiedUserId = async (req, res) => {
     const { modifiedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgArea = await jjwgAreaService.updateJjwgAreaByModifiedUserId(modifiedUserId, req.body);
            if (!objJjwgArea) {
                util.setError(404, `Cannot find jjwgArea with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgArea updated', objJjwgArea);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgAreasCtrl.updateJjwgAreaByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgArea = await jjwgAreaService.updateJjwgAreaByCreatedBy(createdBy, req.body);
            if (!objJjwgArea) {
                util.setError(404, `Cannot find jjwgArea with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgArea updated', objJjwgArea);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgAreasCtrl.updateJjwgAreaByAssignedUserId = async (req, res) => {
     const { assignedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgArea = await jjwgAreaService.updateJjwgAreaByAssignedUserId(assignedUserId, req.body);
            if (!objJjwgArea) {
                util.setError(404, `Cannot find jjwgArea with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgArea updated', objJjwgArea);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = jjwgAreasCtrl;
//</es-section>
