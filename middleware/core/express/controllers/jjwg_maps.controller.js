/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:06 GMT-0400 (Bolivia Time)
 * Time: 14:57:6
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:06 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:6
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const models = require('../../express');
const jjwgMapService = require('../services/jjwg_maps.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const jjwgMapsCtrl = {};
jjwgMapsCtrl.service = jjwgMapService;


jjwgMapsCtrl.getAllJjwgMaps = async (req, res) => {
    try {
        const { length } = req.body;
        const { start } = req.body;
        const [column, dir] = util.getOrderByColumnDirection(models.sequelize.jjwgMaps.rawAttributes,req.body);
        req.query.limit = length ? length : req.query.limit;
        req.query.offset = start ? start : req.query.offset;
        req.query.order = column && dir ? [[column,dir]] : req.query.order;

        const objJjwgMaps = await jjwgMapService.getAllJjwgMaps(req.query);
        if (objJjwgMaps && objJjwgMaps.rows && objJjwgMaps.count) {
            util.setSuccess(200, 'JjwgMaps retrieved', objJjwgMaps.rows, objJjwgMaps.count, req.query.limit, req.query.offset);
        } else {
            util.setSuccess(200, 'No jjwgMap found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgMapsCtrl.getAJjwgMap = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objJjwgMap = await jjwgMapService.getAJjwgMap(id, req.query);
        if (!objJjwgMap) {
            util.setError(404, `Cannot find jjwgMap with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found jjwgMap', objJjwgMap);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgMapsCtrl.addJjwgMap = async (req, res) => {
    try {
        const objJjwgMap = await jjwgMapService.addJjwgMap(req.body);
        util.setSuccess(201, 'JjwgMap Added!', objJjwgMap);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgMapsCtrl.updateJjwgMap = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objJjwgMap = await jjwgMapService.updateJjwgMap(id, req.body);
        if (!objJjwgMap) {
            util.setError(404, `Cannot find jjwgMap with the id: ${id}`);
        } else {
            util.setSuccess(200, 'JjwgMap updated', objJjwgMap);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

jjwgMapsCtrl.deleteJjwgMap = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objJjwgMap = await jjwgMapService.deleteJjwgMap(id);
        if (objJjwgMap) {
            util.setSuccess(200, 'JjwgMap deleted', objJjwgMap);
        } else {
            util.setError(404, `JjwgMap with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



jjwgMapsCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objJjwgMap = await jjwgMapService.findOneById(id, req.query);
        if (!objJjwgMap) {
            util.setError(404, `Cannot find jjwgMap with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgMap', objJjwgMap);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgMapsCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objJjwgMap = await jjwgMapService.findOneByDeleted(deleted, req.query);
        if (!objJjwgMap) {
            util.setError(404, `Cannot find jjwgMap with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgMap', objJjwgMap);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgMapsCtrl.findOneByDistance = async (req, res) => {
    try {
        const { distance } = req.params;
        const objJjwgMap = await jjwgMapService.findOneByDistance(distance, req.query);
        if (!objJjwgMap) {
            util.setError(404, `Cannot find jjwgMap with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgMap', objJjwgMap);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgMapsCtrl.findOneByName = async (req, res) => {
    try {
        const { name } = req.params;
        const objJjwgMap = await jjwgMapService.findOneByName(name, req.query);
        if (!objJjwgMap) {
            util.setError(404, `Cannot find jjwgMap with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgMap', objJjwgMap);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgMapsCtrl.findOneByUnitType = async (req, res) => {
    try {
        const { unitType } = req.params;
        const objJjwgMap = await jjwgMapService.findOneByUnitType(unitType, req.query);
        if (!objJjwgMap) {
            util.setError(404, `Cannot find jjwgMap with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgMap', objJjwgMap);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgMapsCtrl.findOneByModuleType = async (req, res) => {
    try {
        const { moduleType } = req.params;
        const objJjwgMap = await jjwgMapService.findOneByModuleType(moduleType, req.query);
        if (!objJjwgMap) {
            util.setError(404, `Cannot find jjwgMap with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgMap', objJjwgMap);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgMapsCtrl.findOneByParentType = async (req, res) => {
    try {
        const { parentType } = req.params;
        const objJjwgMap = await jjwgMapService.findOneByParentType(parentType, req.query);
        if (!objJjwgMap) {
            util.setError(404, `Cannot find jjwgMap with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgMap', objJjwgMap);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgMapsCtrl.findOneByDescription = async (req, res) => {
    try {
        const { description } = req.params;
        const objJjwgMap = await jjwgMapService.findOneByDescription(description, req.query);
        if (!objJjwgMap) {
            util.setError(404, `Cannot find jjwgMap with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgMap', objJjwgMap);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgMapsCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objJjwgMap = await jjwgMapService.findOneByDateEntered(dateEntered, req.query);
        if (!objJjwgMap) {
            util.setError(404, `Cannot find jjwgMap with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgMap', objJjwgMap);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgMapsCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objJjwgMap = await jjwgMapService.findOneByDateModified(dateModified, req.query);
        if (!objJjwgMap) {
            util.setError(404, `Cannot find jjwgMap with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgMap', objJjwgMap);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgMapsCtrl.findOneByModifiedUserId = async (req, res) => {
    try {
        const { modifiedUserId } = req.params;
        const objJjwgMap = await jjwgMapService.findOneByModifiedUserId(modifiedUserId, req.query);
        if (!objJjwgMap) {
            util.setError(404, `Cannot find jjwgMap with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgMap', objJjwgMap);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgMapsCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objJjwgMap = await jjwgMapService.findOneByCreatedBy(createdBy, req.query);
        if (!objJjwgMap) {
            util.setError(404, `Cannot find jjwgMap with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgMap', objJjwgMap);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgMapsCtrl.findOneByAssignedUserId = async (req, res) => {
    try {
        const { assignedUserId } = req.params;
        const objJjwgMap = await jjwgMapService.findOneByAssignedUserId(assignedUserId, req.query);
        if (!objJjwgMap) {
            util.setError(404, `Cannot find jjwgMap with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgMap', objJjwgMap);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgMapsCtrl.findOneByParentId = async (req, res) => {
    try {
        const { parentId } = req.params;
        const objJjwgMap = await jjwgMapService.findOneByParentId(parentId, req.query);
        if (!objJjwgMap) {
            util.setError(404, `Cannot find jjwgMap with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgMap', objJjwgMap);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



jjwgMapsCtrl.updateJjwgMapById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgMap = await jjwgMapService.updateJjwgMapById(id, req.body);
            if (!objJjwgMap) {
                util.setError(404, `Cannot find jjwgMap with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgMap updated', objJjwgMap);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgMapsCtrl.updateJjwgMapByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgMap = await jjwgMapService.updateJjwgMapByDeleted(deleted, req.body);
            if (!objJjwgMap) {
                util.setError(404, `Cannot find jjwgMap with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgMap updated', objJjwgMap);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgMapsCtrl.updateJjwgMapByDistance = async (req, res) => {
     const { distance } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgMap = await jjwgMapService.updateJjwgMapByDistance(distance, req.body);
            if (!objJjwgMap) {
                util.setError(404, `Cannot find jjwgMap with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgMap updated', objJjwgMap);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgMapsCtrl.updateJjwgMapByName = async (req, res) => {
     const { name } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgMap = await jjwgMapService.updateJjwgMapByName(name, req.body);
            if (!objJjwgMap) {
                util.setError(404, `Cannot find jjwgMap with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgMap updated', objJjwgMap);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgMapsCtrl.updateJjwgMapByUnitType = async (req, res) => {
     const { unitType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgMap = await jjwgMapService.updateJjwgMapByUnitType(unitType, req.body);
            if (!objJjwgMap) {
                util.setError(404, `Cannot find jjwgMap with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgMap updated', objJjwgMap);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgMapsCtrl.updateJjwgMapByModuleType = async (req, res) => {
     const { moduleType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgMap = await jjwgMapService.updateJjwgMapByModuleType(moduleType, req.body);
            if (!objJjwgMap) {
                util.setError(404, `Cannot find jjwgMap with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgMap updated', objJjwgMap);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgMapsCtrl.updateJjwgMapByParentType = async (req, res) => {
     const { parentType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgMap = await jjwgMapService.updateJjwgMapByParentType(parentType, req.body);
            if (!objJjwgMap) {
                util.setError(404, `Cannot find jjwgMap with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgMap updated', objJjwgMap);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgMapsCtrl.updateJjwgMapByDescription = async (req, res) => {
     const { description } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgMap = await jjwgMapService.updateJjwgMapByDescription(description, req.body);
            if (!objJjwgMap) {
                util.setError(404, `Cannot find jjwgMap with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgMap updated', objJjwgMap);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgMapsCtrl.updateJjwgMapByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgMap = await jjwgMapService.updateJjwgMapByDateEntered(dateEntered, req.body);
            if (!objJjwgMap) {
                util.setError(404, `Cannot find jjwgMap with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgMap updated', objJjwgMap);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgMapsCtrl.updateJjwgMapByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgMap = await jjwgMapService.updateJjwgMapByDateModified(dateModified, req.body);
            if (!objJjwgMap) {
                util.setError(404, `Cannot find jjwgMap with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgMap updated', objJjwgMap);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgMapsCtrl.updateJjwgMapByModifiedUserId = async (req, res) => {
     const { modifiedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgMap = await jjwgMapService.updateJjwgMapByModifiedUserId(modifiedUserId, req.body);
            if (!objJjwgMap) {
                util.setError(404, `Cannot find jjwgMap with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgMap updated', objJjwgMap);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgMapsCtrl.updateJjwgMapByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgMap = await jjwgMapService.updateJjwgMapByCreatedBy(createdBy, req.body);
            if (!objJjwgMap) {
                util.setError(404, `Cannot find jjwgMap with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgMap updated', objJjwgMap);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgMapsCtrl.updateJjwgMapByAssignedUserId = async (req, res) => {
     const { assignedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgMap = await jjwgMapService.updateJjwgMapByAssignedUserId(assignedUserId, req.body);
            if (!objJjwgMap) {
                util.setError(404, `Cannot find jjwgMap with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgMap updated', objJjwgMap);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgMapsCtrl.updateJjwgMapByParentId = async (req, res) => {
     const { parentId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgMap = await jjwgMapService.updateJjwgMapByParentId(parentId, req.body);
            if (!objJjwgMap) {
                util.setError(404, `Cannot find jjwgMap with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgMap updated', objJjwgMap);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = jjwgMapsCtrl;
//</es-section>
