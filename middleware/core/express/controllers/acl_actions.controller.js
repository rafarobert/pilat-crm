/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:00 GMT-0400 (Bolivia Time)
 * Time: 14:0:0
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:00 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:0
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const aclActionService = require('../services/acl_actions.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const aclActionsCtrl = {};
aclActionsCtrl.service = aclActionService;


aclActionsCtrl.getAllAclActions = async (req, res) => {
    try {
        const objAclActions = await aclActionService.getAllAclActions(req.query);
        if (objAclActions.length > 0) {
            util.setSuccess(200, 'AclActions retrieved', objAclActions);
        } else {
            util.setSuccess(200, 'No aclAction found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aclActionsCtrl.getAAclAction = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAclAction = await aclActionService.getAAclAction(id, req.query);
        if (!objAclAction) {
            util.setError(404, `Cannot find aclAction with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found aclAction', objAclAction);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aclActionsCtrl.addAclAction = async (req, res) => {
    try {
        const objAclAction = await aclActionService.addAclAction(req.body);
        util.setSuccess(201, 'AclAction Added!', objAclAction);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aclActionsCtrl.updateAclAction = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAclAction = await aclActionService.updateAclAction(id, req.body);
        if (!objAclAction) {
            util.setError(404, `Cannot find aclAction with the id: ${id}`);
        } else {
            util.setSuccess(200, 'AclAction updated', objAclAction);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

aclActionsCtrl.deleteAclAction = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objAclAction = await aclActionService.deleteAclAction(id);
        if (objAclAction) {
            util.setSuccess(200, 'AclAction deleted', objAclAction);
        } else {
            util.setError(404, `AclAction with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



aclActionsCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objAclAction = await aclActionService.findOneById(id, req.query);
        if (!objAclAction) {
            util.setError(404, `Cannot find aclAction with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aclAction', objAclAction);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aclActionsCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objAclAction = await aclActionService.findOneByDeleted(deleted, req.query);
        if (!objAclAction) {
            util.setError(404, `Cannot find aclAction with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aclAction', objAclAction);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aclActionsCtrl.findOneByAclaccess = async (req, res) => {
    try {
        const { aclaccess } = req.params;
        const objAclAction = await aclActionService.findOneByAclaccess(aclaccess, req.query);
        if (!objAclAction) {
            util.setError(404, `Cannot find aclAction with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aclAction', objAclAction);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aclActionsCtrl.findOneByName = async (req, res) => {
    try {
        const { name } = req.params;
        const objAclAction = await aclActionService.findOneByName(name, req.query);
        if (!objAclAction) {
            util.setError(404, `Cannot find aclAction with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aclAction', objAclAction);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aclActionsCtrl.findOneByCategory = async (req, res) => {
    try {
        const { category } = req.params;
        const objAclAction = await aclActionService.findOneByCategory(category, req.query);
        if (!objAclAction) {
            util.setError(404, `Cannot find aclAction with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aclAction', objAclAction);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aclActionsCtrl.findOneByAcltype = async (req, res) => {
    try {
        const { acltype } = req.params;
        const objAclAction = await aclActionService.findOneByAcltype(acltype, req.query);
        if (!objAclAction) {
            util.setError(404, `Cannot find aclAction with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aclAction', objAclAction);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aclActionsCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objAclAction = await aclActionService.findOneByDateEntered(dateEntered, req.query);
        if (!objAclAction) {
            util.setError(404, `Cannot find aclAction with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aclAction', objAclAction);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aclActionsCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objAclAction = await aclActionService.findOneByDateModified(dateModified, req.query);
        if (!objAclAction) {
            util.setError(404, `Cannot find aclAction with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aclAction', objAclAction);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aclActionsCtrl.findOneByModifiedUserId = async (req, res) => {
    try {
        const { modifiedUserId } = req.params;
        const objAclAction = await aclActionService.findOneByModifiedUserId(modifiedUserId, req.query);
        if (!objAclAction) {
            util.setError(404, `Cannot find aclAction with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aclAction', objAclAction);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aclActionsCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objAclAction = await aclActionService.findOneByCreatedBy(createdBy, req.query);
        if (!objAclAction) {
            util.setError(404, `Cannot find aclAction with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aclAction', objAclAction);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



aclActionsCtrl.updateAclActionById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAclAction = await aclActionService.updateAclActionById(id, req.body);
            if (!objAclAction) {
                util.setError(404, `Cannot find aclAction with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AclAction updated', objAclAction);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aclActionsCtrl.updateAclActionByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAclAction = await aclActionService.updateAclActionByDeleted(deleted, req.body);
            if (!objAclAction) {
                util.setError(404, `Cannot find aclAction with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AclAction updated', objAclAction);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aclActionsCtrl.updateAclActionByAclaccess = async (req, res) => {
     const { aclaccess } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAclAction = await aclActionService.updateAclActionByAclaccess(aclaccess, req.body);
            if (!objAclAction) {
                util.setError(404, `Cannot find aclAction with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AclAction updated', objAclAction);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aclActionsCtrl.updateAclActionByName = async (req, res) => {
     const { name } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAclAction = await aclActionService.updateAclActionByName(name, req.body);
            if (!objAclAction) {
                util.setError(404, `Cannot find aclAction with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AclAction updated', objAclAction);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aclActionsCtrl.updateAclActionByCategory = async (req, res) => {
     const { category } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAclAction = await aclActionService.updateAclActionByCategory(category, req.body);
            if (!objAclAction) {
                util.setError(404, `Cannot find aclAction with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AclAction updated', objAclAction);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aclActionsCtrl.updateAclActionByAcltype = async (req, res) => {
     const { acltype } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAclAction = await aclActionService.updateAclActionByAcltype(acltype, req.body);
            if (!objAclAction) {
                util.setError(404, `Cannot find aclAction with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AclAction updated', objAclAction);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aclActionsCtrl.updateAclActionByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAclAction = await aclActionService.updateAclActionByDateEntered(dateEntered, req.body);
            if (!objAclAction) {
                util.setError(404, `Cannot find aclAction with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AclAction updated', objAclAction);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aclActionsCtrl.updateAclActionByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAclAction = await aclActionService.updateAclActionByDateModified(dateModified, req.body);
            if (!objAclAction) {
                util.setError(404, `Cannot find aclAction with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AclAction updated', objAclAction);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aclActionsCtrl.updateAclActionByModifiedUserId = async (req, res) => {
     const { modifiedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAclAction = await aclActionService.updateAclActionByModifiedUserId(modifiedUserId, req.body);
            if (!objAclAction) {
                util.setError(404, `Cannot find aclAction with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AclAction updated', objAclAction);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aclActionsCtrl.updateAclActionByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAclAction = await aclActionService.updateAclActionByCreatedBy(createdBy, req.body);
            if (!objAclAction) {
                util.setError(404, `Cannot find aclAction with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AclAction updated', objAclAction);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = aclActionsCtrl;
//</es-section>
