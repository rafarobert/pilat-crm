/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:41:46 GMT-0400 (Bolivia Time)
 * Time: 4:41:46
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:41:46 GMT-0400 (Bolivia Time)
 * Last time updated: 4:41:46
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const aclRoleUserService = require('../services/acl_roles_users.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const aclRolesUsersCtrl = {};
aclRolesUsersCtrl.service = aclRoleUserService;


aclRolesUsersCtrl.getAllAclRolesUsers = async (req, res) => {
    try {
        const objAclRolesUsers = await aclRoleUserService.getAllAclRolesUsers(req.query);
        if (objAclRolesUsers.length > 0) {
            util.setSuccess(200, 'AclRolesUsers retrieved', objAclRolesUsers);
        } else {
            util.setSuccess(200, 'No aclRoleUser found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aclRolesUsersCtrl.getAAclRoleUser = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objAclRoleUser = await aclRoleUserService.getAAclRoleUser(id, req.query);
        if (!objAclRoleUser) {
            util.setError(404, `Cannot find aclRoleUser with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found aclRoleUser', objAclRoleUser);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aclRolesUsersCtrl.addAclRoleUser = async (req, res) => {
    try {
        const objAclRoleUser = await aclRoleUserService.addAclRoleUser(req.body);
        util.setSuccess(201, 'AclRoleUser Added!', objAclRoleUser);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aclRolesUsersCtrl.updateAclRoleUser = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objAclRoleUser = await aclRoleUserService.updateAclRoleUser(id, req.body);
        if (!objAclRoleUser) {
            util.setError(404, `Cannot find aclRoleUser with the id: ${id}`);
        } else {
            util.setSuccess(200, 'AclRoleUser updated', objAclRoleUser);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

aclRolesUsersCtrl.deleteAclRoleUser = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please provide a String value');
            return util.send(res);
        }
        const objAclRoleUser = await aclRoleUserService.deleteAclRoleUser(id);
        if (objAclRoleUser) {
            util.setSuccess(200, 'AclRoleUser deleted', objAclRoleUser);
        } else {
            util.setError(404, `AclRoleUser with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



aclRolesUsersCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objAclRoleUser = await aclRoleUserService.findOneById(id, req.query);
        if (!objAclRoleUser) {
            util.setError(404, `Cannot find aclRoleUser with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aclRoleUser', objAclRoleUser);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aclRolesUsersCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objAclRoleUser = await aclRoleUserService.findOneByDeleted(deleted, req.query);
        if (!objAclRoleUser) {
            util.setError(404, `Cannot find aclRoleUser with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aclRoleUser', objAclRoleUser);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aclRolesUsersCtrl.findOneByRoleId = async (req, res) => {
    try {
        const { roleId } = req.params;
        const objAclRoleUser = await aclRoleUserService.findOneByRoleId(roleId, req.query);
        if (!objAclRoleUser) {
            util.setError(404, `Cannot find aclRoleUser with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aclRoleUser', objAclRoleUser);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aclRolesUsersCtrl.findOneByUserId = async (req, res) => {
    try {
        const { userId } = req.params;
        const objAclRoleUser = await aclRoleUserService.findOneByUserId(userId, req.query);
        if (!objAclRoleUser) {
            util.setError(404, `Cannot find aclRoleUser with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aclRoleUser', objAclRoleUser);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aclRolesUsersCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objAclRoleUser = await aclRoleUserService.findOneByDateModified(dateModified, req.query);
        if (!objAclRoleUser) {
            util.setError(404, `Cannot find aclRoleUser with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aclRoleUser', objAclRoleUser);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



aclRolesUsersCtrl.updateAclRoleUserById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objAclRoleUser = await aclRoleUserService.updateAclRoleUserById(id, req.body);
            if (!objAclRoleUser) {
                util.setError(404, `Cannot find aclRoleUser with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AclRoleUser updated', objAclRoleUser);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aclRolesUsersCtrl.updateAclRoleUserByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objAclRoleUser = await aclRoleUserService.updateAclRoleUserByDeleted(deleted, req.body);
            if (!objAclRoleUser) {
                util.setError(404, `Cannot find aclRoleUser with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AclRoleUser updated', objAclRoleUser);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aclRolesUsersCtrl.updateAclRoleUserByRoleId = async (req, res) => {
     const { roleId } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objAclRoleUser = await aclRoleUserService.updateAclRoleUserByRoleId(roleId, req.body);
            if (!objAclRoleUser) {
                util.setError(404, `Cannot find aclRoleUser with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AclRoleUser updated', objAclRoleUser);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aclRolesUsersCtrl.updateAclRoleUserByUserId = async (req, res) => {
     const { userId } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objAclRoleUser = await aclRoleUserService.updateAclRoleUserByUserId(userId, req.body);
            if (!objAclRoleUser) {
                util.setError(404, `Cannot find aclRoleUser with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AclRoleUser updated', objAclRoleUser);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aclRolesUsersCtrl.updateAclRoleUserByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objAclRoleUser = await aclRoleUserService.updateAclRoleUserByDateModified(dateModified, req.body);
            if (!objAclRoleUser) {
                util.setError(404, `Cannot find aclRoleUser with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AclRoleUser updated', objAclRoleUser);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = aclRolesUsersCtrl;
//</es-section>
