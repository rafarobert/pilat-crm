/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:22:05 GMT-0400 (Bolivia Time)
 * Time: 0:22:5
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:22:05 GMT-0400 (Bolivia Time)
 * Last time updated: 0:22:5
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const aopCaseUpdateService = require('../services/aop_case_updates.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const aopCaseUpdatesCtrl = {};
aopCaseUpdatesCtrl.service = aopCaseUpdateService;


aopCaseUpdatesCtrl.getAllAopCaseUpdates = async (req, res) => {
    try {
        const objAopCaseUpdates = await aopCaseUpdateService.getAllAopCaseUpdates(req.query);
        if (objAopCaseUpdates.length > 0) {
            util.setSuccess(200, 'AopCaseUpdates retrieved', objAopCaseUpdates);
        } else {
            util.setSuccess(200, 'No aopCaseUpdate found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aopCaseUpdatesCtrl.getAAopCaseUpdate = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAopCaseUpdate = await aopCaseUpdateService.getAAopCaseUpdate(id, req.query);
        if (!objAopCaseUpdate) {
            util.setError(404, `Cannot find aopCaseUpdate with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found aopCaseUpdate', objAopCaseUpdate);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aopCaseUpdatesCtrl.addAopCaseUpdate = async (req, res) => {
    try {
        const objAopCaseUpdate = await aopCaseUpdateService.addAopCaseUpdate(req.body);
        util.setSuccess(201, 'AopCaseUpdate Added!', objAopCaseUpdate);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aopCaseUpdatesCtrl.updateAopCaseUpdate = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAopCaseUpdate = await aopCaseUpdateService.updateAopCaseUpdate(id, req.body);
        if (!objAopCaseUpdate) {
            util.setError(404, `Cannot find aopCaseUpdate with the id: ${id}`);
        } else {
            util.setSuccess(200, 'AopCaseUpdate updated', objAopCaseUpdate);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

aopCaseUpdatesCtrl.deleteAopCaseUpdate = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objAopCaseUpdate = await aopCaseUpdateService.deleteAopCaseUpdate(id);
        if (objAopCaseUpdate) {
            util.setSuccess(200, 'AopCaseUpdate deleted', objAopCaseUpdate);
        } else {
            util.setError(404, `AopCaseUpdate with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



aopCaseUpdatesCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objAopCaseUpdate = await aopCaseUpdateService.findOneById(id, req.query);
        if (!objAopCaseUpdate) {
            util.setError(404, `Cannot find aopCaseUpdate with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aopCaseUpdate', objAopCaseUpdate);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aopCaseUpdatesCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objAopCaseUpdate = await aopCaseUpdateService.findOneByDeleted(deleted, req.query);
        if (!objAopCaseUpdate) {
            util.setError(404, `Cannot find aopCaseUpdate with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aopCaseUpdate', objAopCaseUpdate);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aopCaseUpdatesCtrl.findOneByInternal = async (req, res) => {
    try {
        const { internal } = req.params;
        const objAopCaseUpdate = await aopCaseUpdateService.findOneByInternal(internal, req.query);
        if (!objAopCaseUpdate) {
            util.setError(404, `Cannot find aopCaseUpdate with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aopCaseUpdate', objAopCaseUpdate);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aopCaseUpdatesCtrl.findOneByName = async (req, res) => {
    try {
        const { name } = req.params;
        const objAopCaseUpdate = await aopCaseUpdateService.findOneByName(name, req.query);
        if (!objAopCaseUpdate) {
            util.setError(404, `Cannot find aopCaseUpdate with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aopCaseUpdate', objAopCaseUpdate);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aopCaseUpdatesCtrl.findOneByDescription = async (req, res) => {
    try {
        const { description } = req.params;
        const objAopCaseUpdate = await aopCaseUpdateService.findOneByDescription(description, req.query);
        if (!objAopCaseUpdate) {
            util.setError(404, `Cannot find aopCaseUpdate with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aopCaseUpdate', objAopCaseUpdate);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aopCaseUpdatesCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objAopCaseUpdate = await aopCaseUpdateService.findOneByDateEntered(dateEntered, req.query);
        if (!objAopCaseUpdate) {
            util.setError(404, `Cannot find aopCaseUpdate with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aopCaseUpdate', objAopCaseUpdate);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aopCaseUpdatesCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objAopCaseUpdate = await aopCaseUpdateService.findOneByDateModified(dateModified, req.query);
        if (!objAopCaseUpdate) {
            util.setError(404, `Cannot find aopCaseUpdate with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aopCaseUpdate', objAopCaseUpdate);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aopCaseUpdatesCtrl.findOneByModifiedUserId = async (req, res) => {
    try {
        const { modifiedUserId } = req.params;
        const objAopCaseUpdate = await aopCaseUpdateService.findOneByModifiedUserId(modifiedUserId, req.query);
        if (!objAopCaseUpdate) {
            util.setError(404, `Cannot find aopCaseUpdate with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aopCaseUpdate', objAopCaseUpdate);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aopCaseUpdatesCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objAopCaseUpdate = await aopCaseUpdateService.findOneByCreatedBy(createdBy, req.query);
        if (!objAopCaseUpdate) {
            util.setError(404, `Cannot find aopCaseUpdate with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aopCaseUpdate', objAopCaseUpdate);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aopCaseUpdatesCtrl.findOneByAssignedUserId = async (req, res) => {
    try {
        const { assignedUserId } = req.params;
        const objAopCaseUpdate = await aopCaseUpdateService.findOneByAssignedUserId(assignedUserId, req.query);
        if (!objAopCaseUpdate) {
            util.setError(404, `Cannot find aopCaseUpdate with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aopCaseUpdate', objAopCaseUpdate);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aopCaseUpdatesCtrl.findOneByCaseId = async (req, res) => {
    try {
        const { caseId } = req.params;
        const objAopCaseUpdate = await aopCaseUpdateService.findOneByCaseId(caseId, req.query);
        if (!objAopCaseUpdate) {
            util.setError(404, `Cannot find aopCaseUpdate with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aopCaseUpdate', objAopCaseUpdate);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aopCaseUpdatesCtrl.findOneByContactId = async (req, res) => {
    try {
        const { contactId } = req.params;
        const objAopCaseUpdate = await aopCaseUpdateService.findOneByContactId(contactId, req.query);
        if (!objAopCaseUpdate) {
            util.setError(404, `Cannot find aopCaseUpdate with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aopCaseUpdate', objAopCaseUpdate);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



aopCaseUpdatesCtrl.updateAopCaseUpdateById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAopCaseUpdate = await aopCaseUpdateService.updateAopCaseUpdateById(id, req.body);
            if (!objAopCaseUpdate) {
                util.setError(404, `Cannot find aopCaseUpdate with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AopCaseUpdate updated', objAopCaseUpdate);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aopCaseUpdatesCtrl.updateAopCaseUpdateByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAopCaseUpdate = await aopCaseUpdateService.updateAopCaseUpdateByDeleted(deleted, req.body);
            if (!objAopCaseUpdate) {
                util.setError(404, `Cannot find aopCaseUpdate with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AopCaseUpdate updated', objAopCaseUpdate);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aopCaseUpdatesCtrl.updateAopCaseUpdateByInternal = async (req, res) => {
     const { internal } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAopCaseUpdate = await aopCaseUpdateService.updateAopCaseUpdateByInternal(internal, req.body);
            if (!objAopCaseUpdate) {
                util.setError(404, `Cannot find aopCaseUpdate with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AopCaseUpdate updated', objAopCaseUpdate);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aopCaseUpdatesCtrl.updateAopCaseUpdateByName = async (req, res) => {
     const { name } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAopCaseUpdate = await aopCaseUpdateService.updateAopCaseUpdateByName(name, req.body);
            if (!objAopCaseUpdate) {
                util.setError(404, `Cannot find aopCaseUpdate with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AopCaseUpdate updated', objAopCaseUpdate);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aopCaseUpdatesCtrl.updateAopCaseUpdateByDescription = async (req, res) => {
     const { description } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAopCaseUpdate = await aopCaseUpdateService.updateAopCaseUpdateByDescription(description, req.body);
            if (!objAopCaseUpdate) {
                util.setError(404, `Cannot find aopCaseUpdate with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AopCaseUpdate updated', objAopCaseUpdate);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aopCaseUpdatesCtrl.updateAopCaseUpdateByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAopCaseUpdate = await aopCaseUpdateService.updateAopCaseUpdateByDateEntered(dateEntered, req.body);
            if (!objAopCaseUpdate) {
                util.setError(404, `Cannot find aopCaseUpdate with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AopCaseUpdate updated', objAopCaseUpdate);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aopCaseUpdatesCtrl.updateAopCaseUpdateByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAopCaseUpdate = await aopCaseUpdateService.updateAopCaseUpdateByDateModified(dateModified, req.body);
            if (!objAopCaseUpdate) {
                util.setError(404, `Cannot find aopCaseUpdate with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AopCaseUpdate updated', objAopCaseUpdate);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aopCaseUpdatesCtrl.updateAopCaseUpdateByModifiedUserId = async (req, res) => {
     const { modifiedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAopCaseUpdate = await aopCaseUpdateService.updateAopCaseUpdateByModifiedUserId(modifiedUserId, req.body);
            if (!objAopCaseUpdate) {
                util.setError(404, `Cannot find aopCaseUpdate with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AopCaseUpdate updated', objAopCaseUpdate);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aopCaseUpdatesCtrl.updateAopCaseUpdateByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAopCaseUpdate = await aopCaseUpdateService.updateAopCaseUpdateByCreatedBy(createdBy, req.body);
            if (!objAopCaseUpdate) {
                util.setError(404, `Cannot find aopCaseUpdate with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AopCaseUpdate updated', objAopCaseUpdate);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aopCaseUpdatesCtrl.updateAopCaseUpdateByAssignedUserId = async (req, res) => {
     const { assignedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAopCaseUpdate = await aopCaseUpdateService.updateAopCaseUpdateByAssignedUserId(assignedUserId, req.body);
            if (!objAopCaseUpdate) {
                util.setError(404, `Cannot find aopCaseUpdate with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AopCaseUpdate updated', objAopCaseUpdate);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aopCaseUpdatesCtrl.updateAopCaseUpdateByCaseId = async (req, res) => {
     const { caseId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAopCaseUpdate = await aopCaseUpdateService.updateAopCaseUpdateByCaseId(caseId, req.body);
            if (!objAopCaseUpdate) {
                util.setError(404, `Cannot find aopCaseUpdate with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AopCaseUpdate updated', objAopCaseUpdate);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aopCaseUpdatesCtrl.updateAopCaseUpdateByContactId = async (req, res) => {
     const { contactId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAopCaseUpdate = await aopCaseUpdateService.updateAopCaseUpdateByContactId(contactId, req.body);
            if (!objAopCaseUpdate) {
                util.setError(404, `Cannot find aopCaseUpdate with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AopCaseUpdate updated', objAopCaseUpdate);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = aopCaseUpdatesCtrl;
//</es-section>
