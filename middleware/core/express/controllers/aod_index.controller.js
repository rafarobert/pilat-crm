/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:35:37 GMT-0400 (Bolivia Time)
 * Time: 18:35:37
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:35:37 GMT-0400 (Bolivia Time)
 * Last time updated: 18:35:37
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const aodIndexService = require('../services/aod_index.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const aodIndexCtrl = {};
aodIndexCtrl.service = aodIndexService;


aodIndexCtrl.getAllAodIndex = async (req, res) => {
    try {
        const objAodIndex = await aodIndexService.getAllAodIndex(req.query);
        if (objAodIndex.length > 0) {
            util.setSuccess(200, 'AodIndex retrieved', objAodIndex);
        } else {
            util.setSuccess(200, 'No aodIndex found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aodIndexCtrl.getAAodIndex = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAodIndex = await aodIndexService.getAAodIndex(id, req.query);
        if (!objAodIndex) {
            util.setError(404, `Cannot find aodIndex with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found aodIndex', objAodIndex);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aodIndexCtrl.addAodIndex = async (req, res) => {
    try {
        const objAodIndex = await aodIndexService.addAodIndex(req.body);
        util.setSuccess(201, 'AodIndex Added!', objAodIndex);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aodIndexCtrl.updateAodIndex = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAodIndex = await aodIndexService.updateAodIndex(id, req.body);
        if (!objAodIndex) {
            util.setError(404, `Cannot find aodIndex with the id: ${id}`);
        } else {
            util.setSuccess(200, 'AodIndex updated', objAodIndex);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

aodIndexCtrl.deleteAodIndex = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objAodIndex = await aodIndexService.deleteAodIndex(id);
        if (objAodIndex) {
            util.setSuccess(200, 'AodIndex deleted', objAodIndex);
        } else {
            util.setError(404, `AodIndex with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



aodIndexCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objAodIndex = await aodIndexService.findOneById(id, req.query);
        if (!objAodIndex) {
            util.setError(404, `Cannot find aodIndex with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aodIndex', objAodIndex);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aodIndexCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objAodIndex = await aodIndexService.findOneByDeleted(deleted, req.query);
        if (!objAodIndex) {
            util.setError(404, `Cannot find aodIndex with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aodIndex', objAodIndex);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aodIndexCtrl.findOneByName = async (req, res) => {
    try {
        const { name } = req.params;
        const objAodIndex = await aodIndexService.findOneByName(name, req.query);
        if (!objAodIndex) {
            util.setError(404, `Cannot find aodIndex with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aodIndex', objAodIndex);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aodIndexCtrl.findOneByLocation = async (req, res) => {
    try {
        const { location } = req.params;
        const objAodIndex = await aodIndexService.findOneByLocation(location, req.query);
        if (!objAodIndex) {
            util.setError(404, `Cannot find aodIndex with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aodIndex', objAodIndex);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aodIndexCtrl.findOneByDescription = async (req, res) => {
    try {
        const { description } = req.params;
        const objAodIndex = await aodIndexService.findOneByDescription(description, req.query);
        if (!objAodIndex) {
            util.setError(404, `Cannot find aodIndex with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aodIndex', objAodIndex);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aodIndexCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objAodIndex = await aodIndexService.findOneByDateEntered(dateEntered, req.query);
        if (!objAodIndex) {
            util.setError(404, `Cannot find aodIndex with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aodIndex', objAodIndex);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aodIndexCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objAodIndex = await aodIndexService.findOneByDateModified(dateModified, req.query);
        if (!objAodIndex) {
            util.setError(404, `Cannot find aodIndex with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aodIndex', objAodIndex);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aodIndexCtrl.findOneByLastOptimised = async (req, res) => {
    try {
        const { lastOptimised } = req.params;
        const objAodIndex = await aodIndexService.findOneByLastOptimised(lastOptimised, req.query);
        if (!objAodIndex) {
            util.setError(404, `Cannot find aodIndex with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aodIndex', objAodIndex);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aodIndexCtrl.findOneByModifiedUserId = async (req, res) => {
    try {
        const { modifiedUserId } = req.params;
        const objAodIndex = await aodIndexService.findOneByModifiedUserId(modifiedUserId, req.query);
        if (!objAodIndex) {
            util.setError(404, `Cannot find aodIndex with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aodIndex', objAodIndex);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aodIndexCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objAodIndex = await aodIndexService.findOneByCreatedBy(createdBy, req.query);
        if (!objAodIndex) {
            util.setError(404, `Cannot find aodIndex with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aodIndex', objAodIndex);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aodIndexCtrl.findOneByAssignedUserId = async (req, res) => {
    try {
        const { assignedUserId } = req.params;
        const objAodIndex = await aodIndexService.findOneByAssignedUserId(assignedUserId, req.query);
        if (!objAodIndex) {
            util.setError(404, `Cannot find aodIndex with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aodIndex', objAodIndex);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



aodIndexCtrl.updateAodIndexById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAodIndex = await aodIndexService.updateAodIndexById(id, req.body);
            if (!objAodIndex) {
                util.setError(404, `Cannot find aodIndex with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AodIndex updated', objAodIndex);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aodIndexCtrl.updateAodIndexByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAodIndex = await aodIndexService.updateAodIndexByDeleted(deleted, req.body);
            if (!objAodIndex) {
                util.setError(404, `Cannot find aodIndex with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AodIndex updated', objAodIndex);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aodIndexCtrl.updateAodIndexByName = async (req, res) => {
     const { name } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAodIndex = await aodIndexService.updateAodIndexByName(name, req.body);
            if (!objAodIndex) {
                util.setError(404, `Cannot find aodIndex with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AodIndex updated', objAodIndex);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aodIndexCtrl.updateAodIndexByLocation = async (req, res) => {
     const { location } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAodIndex = await aodIndexService.updateAodIndexByLocation(location, req.body);
            if (!objAodIndex) {
                util.setError(404, `Cannot find aodIndex with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AodIndex updated', objAodIndex);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aodIndexCtrl.updateAodIndexByDescription = async (req, res) => {
     const { description } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAodIndex = await aodIndexService.updateAodIndexByDescription(description, req.body);
            if (!objAodIndex) {
                util.setError(404, `Cannot find aodIndex with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AodIndex updated', objAodIndex);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aodIndexCtrl.updateAodIndexByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAodIndex = await aodIndexService.updateAodIndexByDateEntered(dateEntered, req.body);
            if (!objAodIndex) {
                util.setError(404, `Cannot find aodIndex with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AodIndex updated', objAodIndex);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aodIndexCtrl.updateAodIndexByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAodIndex = await aodIndexService.updateAodIndexByDateModified(dateModified, req.body);
            if (!objAodIndex) {
                util.setError(404, `Cannot find aodIndex with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AodIndex updated', objAodIndex);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aodIndexCtrl.updateAodIndexByLastOptimised = async (req, res) => {
     const { lastOptimised } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAodIndex = await aodIndexService.updateAodIndexByLastOptimised(lastOptimised, req.body);
            if (!objAodIndex) {
                util.setError(404, `Cannot find aodIndex with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AodIndex updated', objAodIndex);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aodIndexCtrl.updateAodIndexByModifiedUserId = async (req, res) => {
     const { modifiedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAodIndex = await aodIndexService.updateAodIndexByModifiedUserId(modifiedUserId, req.body);
            if (!objAodIndex) {
                util.setError(404, `Cannot find aodIndex with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AodIndex updated', objAodIndex);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aodIndexCtrl.updateAodIndexByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAodIndex = await aodIndexService.updateAodIndexByCreatedBy(createdBy, req.body);
            if (!objAodIndex) {
                util.setError(404, `Cannot find aodIndex with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AodIndex updated', objAodIndex);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aodIndexCtrl.updateAodIndexByAssignedUserId = async (req, res) => {
     const { assignedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAodIndex = await aodIndexService.updateAodIndexByAssignedUserId(assignedUserId, req.body);
            if (!objAodIndex) {
                util.setError(404, `Cannot find aodIndex with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AodIndex updated', objAodIndex);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = aodIndexCtrl;
//</es-section>
