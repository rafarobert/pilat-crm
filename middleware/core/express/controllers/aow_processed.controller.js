/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:22:27 GMT-0400 (Bolivia Time)
 * Time: 0:22:27
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:22:27 GMT-0400 (Bolivia Time)
 * Last time updated: 0:22:27
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const aowProcessedService = require('../services/aow_processed.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const aowProcessedCtrl = {};
aowProcessedCtrl.service = aowProcessedService;


aowProcessedCtrl.getAllAowProcessed = async (req, res) => {
    try {
        const objAowProcessed = await aowProcessedService.getAllAowProcessed(req.query);
        if (objAowProcessed.length > 0) {
            util.setSuccess(200, 'AowProcessed retrieved', objAowProcessed);
        } else {
            util.setSuccess(200, 'No aowProcessed found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aowProcessedCtrl.getAAowProcessed = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAowProcessed = await aowProcessedService.getAAowProcessed(id, req.query);
        if (!objAowProcessed) {
            util.setError(404, `Cannot find aowProcessed with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found aowProcessed', objAowProcessed);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aowProcessedCtrl.addAowProcessed = async (req, res) => {
    try {
        const objAowProcessed = await aowProcessedService.addAowProcessed(req.body);
        util.setSuccess(201, 'AowProcessed Added!', objAowProcessed);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aowProcessedCtrl.updateAowProcessed = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAowProcessed = await aowProcessedService.updateAowProcessed(id, req.body);
        if (!objAowProcessed) {
            util.setError(404, `Cannot find aowProcessed with the id: ${id}`);
        } else {
            util.setSuccess(200, 'AowProcessed updated', objAowProcessed);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

aowProcessedCtrl.deleteAowProcessed = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objAowProcessed = await aowProcessedService.deleteAowProcessed(id);
        if (objAowProcessed) {
            util.setSuccess(200, 'AowProcessed deleted', objAowProcessed);
        } else {
            util.setError(404, `AowProcessed with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



aowProcessedCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objAowProcessed = await aowProcessedService.findOneById(id, req.query);
        if (!objAowProcessed) {
            util.setError(404, `Cannot find aowProcessed with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aowProcessed', objAowProcessed);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aowProcessedCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objAowProcessed = await aowProcessedService.findOneByDeleted(deleted, req.query);
        if (!objAowProcessed) {
            util.setError(404, `Cannot find aowProcessed with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aowProcessed', objAowProcessed);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aowProcessedCtrl.findOneByName = async (req, res) => {
    try {
        const { name } = req.params;
        const objAowProcessed = await aowProcessedService.findOneByName(name, req.query);
        if (!objAowProcessed) {
            util.setError(404, `Cannot find aowProcessed with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aowProcessed', objAowProcessed);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aowProcessedCtrl.findOneByParentType = async (req, res) => {
    try {
        const { parentType } = req.params;
        const objAowProcessed = await aowProcessedService.findOneByParentType(parentType, req.query);
        if (!objAowProcessed) {
            util.setError(404, `Cannot find aowProcessed with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aowProcessed', objAowProcessed);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aowProcessedCtrl.findOneByStatus = async (req, res) => {
    try {
        const { status } = req.params;
        const objAowProcessed = await aowProcessedService.findOneByStatus(status, req.query);
        if (!objAowProcessed) {
            util.setError(404, `Cannot find aowProcessed with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aowProcessed', objAowProcessed);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aowProcessedCtrl.findOneByDescription = async (req, res) => {
    try {
        const { description } = req.params;
        const objAowProcessed = await aowProcessedService.findOneByDescription(description, req.query);
        if (!objAowProcessed) {
            util.setError(404, `Cannot find aowProcessed with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aowProcessed', objAowProcessed);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aowProcessedCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objAowProcessed = await aowProcessedService.findOneByDateEntered(dateEntered, req.query);
        if (!objAowProcessed) {
            util.setError(404, `Cannot find aowProcessed with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aowProcessed', objAowProcessed);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aowProcessedCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objAowProcessed = await aowProcessedService.findOneByDateModified(dateModified, req.query);
        if (!objAowProcessed) {
            util.setError(404, `Cannot find aowProcessed with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aowProcessed', objAowProcessed);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aowProcessedCtrl.findOneByModifiedUserId = async (req, res) => {
    try {
        const { modifiedUserId } = req.params;
        const objAowProcessed = await aowProcessedService.findOneByModifiedUserId(modifiedUserId, req.query);
        if (!objAowProcessed) {
            util.setError(404, `Cannot find aowProcessed with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aowProcessed', objAowProcessed);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aowProcessedCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objAowProcessed = await aowProcessedService.findOneByCreatedBy(createdBy, req.query);
        if (!objAowProcessed) {
            util.setError(404, `Cannot find aowProcessed with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aowProcessed', objAowProcessed);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aowProcessedCtrl.findOneByAowWorkflowId = async (req, res) => {
    try {
        const { aowWorkflowId } = req.params;
        const objAowProcessed = await aowProcessedService.findOneByAowWorkflowId(aowWorkflowId, req.query);
        if (!objAowProcessed) {
            util.setError(404, `Cannot find aowProcessed with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aowProcessed', objAowProcessed);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aowProcessedCtrl.findOneByParentId = async (req, res) => {
    try {
        const { parentId } = req.params;
        const objAowProcessed = await aowProcessedService.findOneByParentId(parentId, req.query);
        if (!objAowProcessed) {
            util.setError(404, `Cannot find aowProcessed with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aowProcessed', objAowProcessed);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



aowProcessedCtrl.updateAowProcessedById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAowProcessed = await aowProcessedService.updateAowProcessedById(id, req.body);
            if (!objAowProcessed) {
                util.setError(404, `Cannot find aowProcessed with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AowProcessed updated', objAowProcessed);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aowProcessedCtrl.updateAowProcessedByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAowProcessed = await aowProcessedService.updateAowProcessedByDeleted(deleted, req.body);
            if (!objAowProcessed) {
                util.setError(404, `Cannot find aowProcessed with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AowProcessed updated', objAowProcessed);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aowProcessedCtrl.updateAowProcessedByName = async (req, res) => {
     const { name } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAowProcessed = await aowProcessedService.updateAowProcessedByName(name, req.body);
            if (!objAowProcessed) {
                util.setError(404, `Cannot find aowProcessed with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AowProcessed updated', objAowProcessed);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aowProcessedCtrl.updateAowProcessedByParentType = async (req, res) => {
     const { parentType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAowProcessed = await aowProcessedService.updateAowProcessedByParentType(parentType, req.body);
            if (!objAowProcessed) {
                util.setError(404, `Cannot find aowProcessed with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AowProcessed updated', objAowProcessed);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aowProcessedCtrl.updateAowProcessedByStatus = async (req, res) => {
     const { status } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAowProcessed = await aowProcessedService.updateAowProcessedByStatus(status, req.body);
            if (!objAowProcessed) {
                util.setError(404, `Cannot find aowProcessed with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AowProcessed updated', objAowProcessed);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aowProcessedCtrl.updateAowProcessedByDescription = async (req, res) => {
     const { description } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAowProcessed = await aowProcessedService.updateAowProcessedByDescription(description, req.body);
            if (!objAowProcessed) {
                util.setError(404, `Cannot find aowProcessed with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AowProcessed updated', objAowProcessed);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aowProcessedCtrl.updateAowProcessedByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAowProcessed = await aowProcessedService.updateAowProcessedByDateEntered(dateEntered, req.body);
            if (!objAowProcessed) {
                util.setError(404, `Cannot find aowProcessed with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AowProcessed updated', objAowProcessed);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aowProcessedCtrl.updateAowProcessedByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAowProcessed = await aowProcessedService.updateAowProcessedByDateModified(dateModified, req.body);
            if (!objAowProcessed) {
                util.setError(404, `Cannot find aowProcessed with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AowProcessed updated', objAowProcessed);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aowProcessedCtrl.updateAowProcessedByModifiedUserId = async (req, res) => {
     const { modifiedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAowProcessed = await aowProcessedService.updateAowProcessedByModifiedUserId(modifiedUserId, req.body);
            if (!objAowProcessed) {
                util.setError(404, `Cannot find aowProcessed with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AowProcessed updated', objAowProcessed);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aowProcessedCtrl.updateAowProcessedByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAowProcessed = await aowProcessedService.updateAowProcessedByCreatedBy(createdBy, req.body);
            if (!objAowProcessed) {
                util.setError(404, `Cannot find aowProcessed with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AowProcessed updated', objAowProcessed);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aowProcessedCtrl.updateAowProcessedByAowWorkflowId = async (req, res) => {
     const { aowWorkflowId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAowProcessed = await aowProcessedService.updateAowProcessedByAowWorkflowId(aowWorkflowId, req.body);
            if (!objAowProcessed) {
                util.setError(404, `Cannot find aowProcessed with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AowProcessed updated', objAowProcessed);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aowProcessedCtrl.updateAowProcessedByParentId = async (req, res) => {
     const { parentId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAowProcessed = await aowProcessedService.updateAowProcessedByParentId(parentId, req.body);
            if (!objAowProcessed) {
                util.setError(404, `Cannot find aowProcessed with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AowProcessed updated', objAowProcessed);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = aowProcessedCtrl;
//</es-section>
