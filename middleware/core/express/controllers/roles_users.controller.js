/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:01:27 GMT-0400 (Bolivia Time)
 * Time: 14:1:27
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:01:27 GMT-0400 (Bolivia Time)
 * Last time updated: 14:1:27
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const roleUserService = require('../services/roles_users.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const rolesUsersCtrl = {};
rolesUsersCtrl.service = roleUserService;


rolesUsersCtrl.getAllRolesUsers = async (req, res) => {
    try {
        const objRolesUsers = await roleUserService.getAllRolesUsers(req.query);
        if (objRolesUsers.length > 0) {
            util.setSuccess(200, 'RolesUsers retrieved', objRolesUsers);
        } else {
            util.setSuccess(200, 'No roleUser found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

rolesUsersCtrl.getARoleUser = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objRoleUser = await roleUserService.getARoleUser(id, req.query);
        if (!objRoleUser) {
            util.setError(404, `Cannot find roleUser with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found roleUser', objRoleUser);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

rolesUsersCtrl.addRoleUser = async (req, res) => {
    try {
        const objRoleUser = await roleUserService.addRoleUser(req.body);
        util.setSuccess(201, 'RoleUser Added!', objRoleUser);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

rolesUsersCtrl.updateRoleUser = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objRoleUser = await roleUserService.updateRoleUser(id, req.body);
        if (!objRoleUser) {
            util.setError(404, `Cannot find roleUser with the id: ${id}`);
        } else {
            util.setSuccess(200, 'RoleUser updated', objRoleUser);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

rolesUsersCtrl.deleteRoleUser = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please provide a String value');
            return util.send(res);
        }
        const objRoleUser = await roleUserService.deleteRoleUser(id);
        if (objRoleUser) {
            util.setSuccess(200, 'RoleUser deleted', objRoleUser);
        } else {
            util.setError(404, `RoleUser with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



rolesUsersCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objRoleUser = await roleUserService.findOneById(id, req.query);
        if (!objRoleUser) {
            util.setError(404, `Cannot find roleUser with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found roleUser', objRoleUser);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

rolesUsersCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objRoleUser = await roleUserService.findOneByDeleted(deleted, req.query);
        if (!objRoleUser) {
            util.setError(404, `Cannot find roleUser with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found roleUser', objRoleUser);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

rolesUsersCtrl.findOneByRoleId = async (req, res) => {
    try {
        const { roleId } = req.params;
        const objRoleUser = await roleUserService.findOneByRoleId(roleId, req.query);
        if (!objRoleUser) {
            util.setError(404, `Cannot find roleUser with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found roleUser', objRoleUser);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

rolesUsersCtrl.findOneByUserId = async (req, res) => {
    try {
        const { userId } = req.params;
        const objRoleUser = await roleUserService.findOneByUserId(userId, req.query);
        if (!objRoleUser) {
            util.setError(404, `Cannot find roleUser with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found roleUser', objRoleUser);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

rolesUsersCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objRoleUser = await roleUserService.findOneByDateModified(dateModified, req.query);
        if (!objRoleUser) {
            util.setError(404, `Cannot find roleUser with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found roleUser', objRoleUser);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



rolesUsersCtrl.updateRoleUserById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objRoleUser = await roleUserService.updateRoleUserById(id, req.body);
            if (!objRoleUser) {
                util.setError(404, `Cannot find roleUser with the id: ${id}`);
            } else {
                util.setSuccess(200, 'RoleUser updated', objRoleUser);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

rolesUsersCtrl.updateRoleUserByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objRoleUser = await roleUserService.updateRoleUserByDeleted(deleted, req.body);
            if (!objRoleUser) {
                util.setError(404, `Cannot find roleUser with the id: ${id}`);
            } else {
                util.setSuccess(200, 'RoleUser updated', objRoleUser);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

rolesUsersCtrl.updateRoleUserByRoleId = async (req, res) => {
     const { roleId } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objRoleUser = await roleUserService.updateRoleUserByRoleId(roleId, req.body);
            if (!objRoleUser) {
                util.setError(404, `Cannot find roleUser with the id: ${id}`);
            } else {
                util.setSuccess(200, 'RoleUser updated', objRoleUser);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

rolesUsersCtrl.updateRoleUserByUserId = async (req, res) => {
     const { userId } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objRoleUser = await roleUserService.updateRoleUserByUserId(userId, req.body);
            if (!objRoleUser) {
                util.setError(404, `Cannot find roleUser with the id: ${id}`);
            } else {
                util.setSuccess(200, 'RoleUser updated', objRoleUser);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

rolesUsersCtrl.updateRoleUserByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objRoleUser = await roleUserService.updateRoleUserByDateModified(dateModified, req.body);
            if (!objRoleUser) {
                util.setError(404, `Cannot find roleUser with the id: ${id}`);
            } else {
                util.setSuccess(200, 'RoleUser updated', objRoleUser);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = rolesUsersCtrl;
//</es-section>
