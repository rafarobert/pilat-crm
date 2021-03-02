/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:01 GMT-0400 (Bolivia Time)
 * Time: 14:0:1
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:01 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:1
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const aclRoleActionService = require('../services/acl_roles_actions.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const aclRolesActionsCtrl = {};
aclRolesActionsCtrl.service = aclRoleActionService;


aclRolesActionsCtrl.getAllAclRolesActions = async (req, res) => {
    try {
        const objAclRolesActions = await aclRoleActionService.getAllAclRolesActions(req.query);
        if (objAclRolesActions.length > 0) {
            util.setSuccess(200, 'AclRolesActions retrieved', objAclRolesActions);
        } else {
            util.setSuccess(200, 'No aclRoleAction found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aclRolesActionsCtrl.getAAclRoleAction = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objAclRoleAction = await aclRoleActionService.getAAclRoleAction(id, req.query);
        if (!objAclRoleAction) {
            util.setError(404, `Cannot find aclRoleAction with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found aclRoleAction', objAclRoleAction);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aclRolesActionsCtrl.addAclRoleAction = async (req, res) => {
    try {
        const objAclRoleAction = await aclRoleActionService.addAclRoleAction(req.body);
        util.setSuccess(201, 'AclRoleAction Added!', objAclRoleAction);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aclRolesActionsCtrl.updateAclRoleAction = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objAclRoleAction = await aclRoleActionService.updateAclRoleAction(id, req.body);
        if (!objAclRoleAction) {
            util.setError(404, `Cannot find aclRoleAction with the id: ${id}`);
        } else {
            util.setSuccess(200, 'AclRoleAction updated', objAclRoleAction);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

aclRolesActionsCtrl.deleteAclRoleAction = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please provide a String value');
            return util.send(res);
        }
        const objAclRoleAction = await aclRoleActionService.deleteAclRoleAction(id);
        if (objAclRoleAction) {
            util.setSuccess(200, 'AclRoleAction deleted', objAclRoleAction);
        } else {
            util.setError(404, `AclRoleAction with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



aclRolesActionsCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objAclRoleAction = await aclRoleActionService.findOneById(id, req.query);
        if (!objAclRoleAction) {
            util.setError(404, `Cannot find aclRoleAction with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aclRoleAction', objAclRoleAction);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aclRolesActionsCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objAclRoleAction = await aclRoleActionService.findOneByDeleted(deleted, req.query);
        if (!objAclRoleAction) {
            util.setError(404, `Cannot find aclRoleAction with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aclRoleAction', objAclRoleAction);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aclRolesActionsCtrl.findOneByAccessOverride = async (req, res) => {
    try {
        const { accessOverride } = req.params;
        const objAclRoleAction = await aclRoleActionService.findOneByAccessOverride(accessOverride, req.query);
        if (!objAclRoleAction) {
            util.setError(404, `Cannot find aclRoleAction with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aclRoleAction', objAclRoleAction);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aclRolesActionsCtrl.findOneByRoleId = async (req, res) => {
    try {
        const { roleId } = req.params;
        const objAclRoleAction = await aclRoleActionService.findOneByRoleId(roleId, req.query);
        if (!objAclRoleAction) {
            util.setError(404, `Cannot find aclRoleAction with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aclRoleAction', objAclRoleAction);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aclRolesActionsCtrl.findOneByActionId = async (req, res) => {
    try {
        const { actionId } = req.params;
        const objAclRoleAction = await aclRoleActionService.findOneByActionId(actionId, req.query);
        if (!objAclRoleAction) {
            util.setError(404, `Cannot find aclRoleAction with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aclRoleAction', objAclRoleAction);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aclRolesActionsCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objAclRoleAction = await aclRoleActionService.findOneByDateModified(dateModified, req.query);
        if (!objAclRoleAction) {
            util.setError(404, `Cannot find aclRoleAction with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aclRoleAction', objAclRoleAction);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



aclRolesActionsCtrl.updateAclRoleActionById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objAclRoleAction = await aclRoleActionService.updateAclRoleActionById(id, req.body);
            if (!objAclRoleAction) {
                util.setError(404, `Cannot find aclRoleAction with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AclRoleAction updated', objAclRoleAction);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aclRolesActionsCtrl.updateAclRoleActionByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objAclRoleAction = await aclRoleActionService.updateAclRoleActionByDeleted(deleted, req.body);
            if (!objAclRoleAction) {
                util.setError(404, `Cannot find aclRoleAction with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AclRoleAction updated', objAclRoleAction);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aclRolesActionsCtrl.updateAclRoleActionByAccessOverride = async (req, res) => {
     const { accessOverride } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objAclRoleAction = await aclRoleActionService.updateAclRoleActionByAccessOverride(accessOverride, req.body);
            if (!objAclRoleAction) {
                util.setError(404, `Cannot find aclRoleAction with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AclRoleAction updated', objAclRoleAction);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aclRolesActionsCtrl.updateAclRoleActionByRoleId = async (req, res) => {
     const { roleId } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objAclRoleAction = await aclRoleActionService.updateAclRoleActionByRoleId(roleId, req.body);
            if (!objAclRoleAction) {
                util.setError(404, `Cannot find aclRoleAction with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AclRoleAction updated', objAclRoleAction);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aclRolesActionsCtrl.updateAclRoleActionByActionId = async (req, res) => {
     const { actionId } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objAclRoleAction = await aclRoleActionService.updateAclRoleActionByActionId(actionId, req.body);
            if (!objAclRoleAction) {
                util.setError(404, `Cannot find aclRoleAction with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AclRoleAction updated', objAclRoleAction);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aclRolesActionsCtrl.updateAclRoleActionByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objAclRoleAction = await aclRoleActionService.updateAclRoleActionByDateModified(dateModified, req.body);
            if (!objAclRoleAction) {
                util.setError(404, `Cannot find aclRoleAction with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AclRoleAction updated', objAclRoleAction);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = aclRolesActionsCtrl;
//</es-section>
