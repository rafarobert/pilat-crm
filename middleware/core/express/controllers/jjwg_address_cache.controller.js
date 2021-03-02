/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:59 GMT-0400 (Bolivia Time)
 * Time: 14:0:59
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:59 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:59
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const jjwgAddresCacheService = require('../services/jjwg_address_cache.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const jjwgAddressCacheCtrl = {};
jjwgAddressCacheCtrl.service = jjwgAddresCacheService;


jjwgAddressCacheCtrl.getAllJjwgAddressCache = async (req, res) => {
    try {
        const objJjwgAddressCache = await jjwgAddresCacheService.getAllJjwgAddressCache(req.query);
        if (objJjwgAddressCache.length > 0) {
            util.setSuccess(200, 'JjwgAddressCache retrieved', objJjwgAddressCache);
        } else {
            util.setSuccess(200, 'No jjwgAddresCache found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgAddressCacheCtrl.getAJjwgAddresCache = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objJjwgAddresCache = await jjwgAddresCacheService.getAJjwgAddresCache(id, req.query);
        if (!objJjwgAddresCache) {
            util.setError(404, `Cannot find jjwgAddresCache with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found jjwgAddresCache', objJjwgAddresCache);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgAddressCacheCtrl.addJjwgAddresCache = async (req, res) => {
    try {
        const objJjwgAddresCache = await jjwgAddresCacheService.addJjwgAddresCache(req.body);
        util.setSuccess(201, 'JjwgAddresCache Added!', objJjwgAddresCache);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgAddressCacheCtrl.updateJjwgAddresCache = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objJjwgAddresCache = await jjwgAddresCacheService.updateJjwgAddresCache(id, req.body);
        if (!objJjwgAddresCache) {
            util.setError(404, `Cannot find jjwgAddresCache with the id: ${id}`);
        } else {
            util.setSuccess(200, 'JjwgAddresCache updated', objJjwgAddresCache);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

jjwgAddressCacheCtrl.deleteJjwgAddresCache = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objJjwgAddresCache = await jjwgAddresCacheService.deleteJjwgAddresCache(id);
        if (objJjwgAddresCache) {
            util.setSuccess(200, 'JjwgAddresCache deleted', objJjwgAddresCache);
        } else {
            util.setError(404, `JjwgAddresCache with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



jjwgAddressCacheCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objJjwgAddresCache = await jjwgAddresCacheService.findOneById(id, req.query);
        if (!objJjwgAddresCache) {
            util.setError(404, `Cannot find jjwgAddresCache with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgAddresCache', objJjwgAddresCache);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgAddressCacheCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objJjwgAddresCache = await jjwgAddresCacheService.findOneByDeleted(deleted, req.query);
        if (!objJjwgAddresCache) {
            util.setError(404, `Cannot find jjwgAddresCache with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgAddresCache', objJjwgAddresCache);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgAddressCacheCtrl.findOneByLat = async (req, res) => {
    try {
        const { lat } = req.params;
        const objJjwgAddresCache = await jjwgAddresCacheService.findOneByLat(lat, req.query);
        if (!objJjwgAddresCache) {
            util.setError(404, `Cannot find jjwgAddresCache with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgAddresCache', objJjwgAddresCache);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgAddressCacheCtrl.findOneByLng = async (req, res) => {
    try {
        const { lng } = req.params;
        const objJjwgAddresCache = await jjwgAddresCacheService.findOneByLng(lng, req.query);
        if (!objJjwgAddresCache) {
            util.setError(404, `Cannot find jjwgAddresCache with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgAddresCache', objJjwgAddresCache);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgAddressCacheCtrl.findOneByName = async (req, res) => {
    try {
        const { name } = req.params;
        const objJjwgAddresCache = await jjwgAddresCacheService.findOneByName(name, req.query);
        if (!objJjwgAddresCache) {
            util.setError(404, `Cannot find jjwgAddresCache with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgAddresCache', objJjwgAddresCache);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgAddressCacheCtrl.findOneByDescription = async (req, res) => {
    try {
        const { description } = req.params;
        const objJjwgAddresCache = await jjwgAddresCacheService.findOneByDescription(description, req.query);
        if (!objJjwgAddresCache) {
            util.setError(404, `Cannot find jjwgAddresCache with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgAddresCache', objJjwgAddresCache);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgAddressCacheCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objJjwgAddresCache = await jjwgAddresCacheService.findOneByDateEntered(dateEntered, req.query);
        if (!objJjwgAddresCache) {
            util.setError(404, `Cannot find jjwgAddresCache with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgAddresCache', objJjwgAddresCache);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgAddressCacheCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objJjwgAddresCache = await jjwgAddresCacheService.findOneByDateModified(dateModified, req.query);
        if (!objJjwgAddresCache) {
            util.setError(404, `Cannot find jjwgAddresCache with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgAddresCache', objJjwgAddresCache);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgAddressCacheCtrl.findOneByModifiedUserId = async (req, res) => {
    try {
        const { modifiedUserId } = req.params;
        const objJjwgAddresCache = await jjwgAddresCacheService.findOneByModifiedUserId(modifiedUserId, req.query);
        if (!objJjwgAddresCache) {
            util.setError(404, `Cannot find jjwgAddresCache with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgAddresCache', objJjwgAddresCache);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgAddressCacheCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objJjwgAddresCache = await jjwgAddresCacheService.findOneByCreatedBy(createdBy, req.query);
        if (!objJjwgAddresCache) {
            util.setError(404, `Cannot find jjwgAddresCache with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgAddresCache', objJjwgAddresCache);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jjwgAddressCacheCtrl.findOneByAssignedUserId = async (req, res) => {
    try {
        const { assignedUserId } = req.params;
        const objJjwgAddresCache = await jjwgAddresCacheService.findOneByAssignedUserId(assignedUserId, req.query);
        if (!objJjwgAddresCache) {
            util.setError(404, `Cannot find jjwgAddresCache with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jjwgAddresCache', objJjwgAddresCache);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



jjwgAddressCacheCtrl.updateJjwgAddresCacheById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgAddresCache = await jjwgAddresCacheService.updateJjwgAddresCacheById(id, req.body);
            if (!objJjwgAddresCache) {
                util.setError(404, `Cannot find jjwgAddresCache with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgAddresCache updated', objJjwgAddresCache);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgAddressCacheCtrl.updateJjwgAddresCacheByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgAddresCache = await jjwgAddresCacheService.updateJjwgAddresCacheByDeleted(deleted, req.body);
            if (!objJjwgAddresCache) {
                util.setError(404, `Cannot find jjwgAddresCache with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgAddresCache updated', objJjwgAddresCache);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgAddressCacheCtrl.updateJjwgAddresCacheByLat = async (req, res) => {
     const { lat } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgAddresCache = await jjwgAddresCacheService.updateJjwgAddresCacheByLat(lat, req.body);
            if (!objJjwgAddresCache) {
                util.setError(404, `Cannot find jjwgAddresCache with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgAddresCache updated', objJjwgAddresCache);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgAddressCacheCtrl.updateJjwgAddresCacheByLng = async (req, res) => {
     const { lng } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgAddresCache = await jjwgAddresCacheService.updateJjwgAddresCacheByLng(lng, req.body);
            if (!objJjwgAddresCache) {
                util.setError(404, `Cannot find jjwgAddresCache with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgAddresCache updated', objJjwgAddresCache);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgAddressCacheCtrl.updateJjwgAddresCacheByName = async (req, res) => {
     const { name } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgAddresCache = await jjwgAddresCacheService.updateJjwgAddresCacheByName(name, req.body);
            if (!objJjwgAddresCache) {
                util.setError(404, `Cannot find jjwgAddresCache with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgAddresCache updated', objJjwgAddresCache);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgAddressCacheCtrl.updateJjwgAddresCacheByDescription = async (req, res) => {
     const { description } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgAddresCache = await jjwgAddresCacheService.updateJjwgAddresCacheByDescription(description, req.body);
            if (!objJjwgAddresCache) {
                util.setError(404, `Cannot find jjwgAddresCache with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgAddresCache updated', objJjwgAddresCache);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgAddressCacheCtrl.updateJjwgAddresCacheByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgAddresCache = await jjwgAddresCacheService.updateJjwgAddresCacheByDateEntered(dateEntered, req.body);
            if (!objJjwgAddresCache) {
                util.setError(404, `Cannot find jjwgAddresCache with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgAddresCache updated', objJjwgAddresCache);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgAddressCacheCtrl.updateJjwgAddresCacheByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgAddresCache = await jjwgAddresCacheService.updateJjwgAddresCacheByDateModified(dateModified, req.body);
            if (!objJjwgAddresCache) {
                util.setError(404, `Cannot find jjwgAddresCache with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgAddresCache updated', objJjwgAddresCache);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgAddressCacheCtrl.updateJjwgAddresCacheByModifiedUserId = async (req, res) => {
     const { modifiedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgAddresCache = await jjwgAddresCacheService.updateJjwgAddresCacheByModifiedUserId(modifiedUserId, req.body);
            if (!objJjwgAddresCache) {
                util.setError(404, `Cannot find jjwgAddresCache with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgAddresCache updated', objJjwgAddresCache);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgAddressCacheCtrl.updateJjwgAddresCacheByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgAddresCache = await jjwgAddresCacheService.updateJjwgAddresCacheByCreatedBy(createdBy, req.body);
            if (!objJjwgAddresCache) {
                util.setError(404, `Cannot find jjwgAddresCache with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgAddresCache updated', objJjwgAddresCache);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jjwgAddressCacheCtrl.updateJjwgAddresCacheByAssignedUserId = async (req, res) => {
     const { assignedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJjwgAddresCache = await jjwgAddresCacheService.updateJjwgAddresCacheByAssignedUserId(assignedUserId, req.body);
            if (!objJjwgAddresCache) {
                util.setError(404, `Cannot find jjwgAddresCache with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JjwgAddresCache updated', objJjwgAddresCache);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = jjwgAddressCacheCtrl;
//</es-section>
