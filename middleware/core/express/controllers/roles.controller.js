/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:38:35 GMT-0400 (Bolivia Time)
 * Time: 18:38:35
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:38:35 GMT-0400 (Bolivia Time)
 * Last time updated: 18:38:35
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const roleService = require('../services/roles.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const rolesCtrl = {};
rolesCtrl.service = roleService;


rolesCtrl.getAllRoles = async (req, res) => {
    try {
        const objRoles = await roleService.getAllRoles(req.query);
        if (objRoles.length > 0) {
            util.setSuccess(200, 'Roles retrieved', objRoles);
        } else {
            util.setSuccess(200, 'No role found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

rolesCtrl.getARole = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objRole = await roleService.getARole(id, req.query);
        if (!objRole) {
            util.setError(404, `Cannot find role with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found role', objRole);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

rolesCtrl.addRole = async (req, res) => {
    try {
        const objRole = await roleService.addRole(req.body);
        util.setSuccess(201, 'Role Added!', objRole);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

rolesCtrl.updateRole = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objRole = await roleService.updateRole(id, req.body);
        if (!objRole) {
            util.setError(404, `Cannot find role with the id: ${id}`);
        } else {
            util.setSuccess(200, 'Role updated', objRole);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

rolesCtrl.deleteRole = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objRole = await roleService.deleteRole(id);
        if (objRole) {
            util.setSuccess(200, 'Role deleted', objRole);
        } else {
            util.setError(404, `Role with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



rolesCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objRole = await roleService.findOneById(id, req.query);
        if (!objRole) {
            util.setError(404, `Cannot find role with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found role', objRole);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

rolesCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objRole = await roleService.findOneByDeleted(deleted, req.query);
        if (!objRole) {
            util.setError(404, `Cannot find role with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found role', objRole);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

rolesCtrl.findOneByName = async (req, res) => {
    try {
        const { name } = req.params;
        const objRole = await roleService.findOneByName(name, req.query);
        if (!objRole) {
            util.setError(404, `Cannot find role with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found role', objRole);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

rolesCtrl.findOneByDescription = async (req, res) => {
    try {
        const { description } = req.params;
        const objRole = await roleService.findOneByDescription(description, req.query);
        if (!objRole) {
            util.setError(404, `Cannot find role with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found role', objRole);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

rolesCtrl.findOneByModules = async (req, res) => {
    try {
        const { modules } = req.params;
        const objRole = await roleService.findOneByModules(modules, req.query);
        if (!objRole) {
            util.setError(404, `Cannot find role with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found role', objRole);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

rolesCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objRole = await roleService.findOneByDateEntered(dateEntered, req.query);
        if (!objRole) {
            util.setError(404, `Cannot find role with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found role', objRole);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

rolesCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objRole = await roleService.findOneByDateModified(dateModified, req.query);
        if (!objRole) {
            util.setError(404, `Cannot find role with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found role', objRole);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

rolesCtrl.findOneByModifiedUserId = async (req, res) => {
    try {
        const { modifiedUserId } = req.params;
        const objRole = await roleService.findOneByModifiedUserId(modifiedUserId, req.query);
        if (!objRole) {
            util.setError(404, `Cannot find role with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found role', objRole);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

rolesCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objRole = await roleService.findOneByCreatedBy(createdBy, req.query);
        if (!objRole) {
            util.setError(404, `Cannot find role with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found role', objRole);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



rolesCtrl.updateRoleById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objRole = await roleService.updateRoleById(id, req.body);
            if (!objRole) {
                util.setError(404, `Cannot find role with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Role updated', objRole);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

rolesCtrl.updateRoleByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objRole = await roleService.updateRoleByDeleted(deleted, req.body);
            if (!objRole) {
                util.setError(404, `Cannot find role with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Role updated', objRole);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

rolesCtrl.updateRoleByName = async (req, res) => {
     const { name } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objRole = await roleService.updateRoleByName(name, req.body);
            if (!objRole) {
                util.setError(404, `Cannot find role with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Role updated', objRole);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

rolesCtrl.updateRoleByDescription = async (req, res) => {
     const { description } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objRole = await roleService.updateRoleByDescription(description, req.body);
            if (!objRole) {
                util.setError(404, `Cannot find role with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Role updated', objRole);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

rolesCtrl.updateRoleByModules = async (req, res) => {
     const { modules } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objRole = await roleService.updateRoleByModules(modules, req.body);
            if (!objRole) {
                util.setError(404, `Cannot find role with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Role updated', objRole);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

rolesCtrl.updateRoleByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objRole = await roleService.updateRoleByDateEntered(dateEntered, req.body);
            if (!objRole) {
                util.setError(404, `Cannot find role with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Role updated', objRole);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

rolesCtrl.updateRoleByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objRole = await roleService.updateRoleByDateModified(dateModified, req.body);
            if (!objRole) {
                util.setError(404, `Cannot find role with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Role updated', objRole);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

rolesCtrl.updateRoleByModifiedUserId = async (req, res) => {
     const { modifiedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objRole = await roleService.updateRoleByModifiedUserId(modifiedUserId, req.body);
            if (!objRole) {
                util.setError(404, `Cannot find role with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Role updated', objRole);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

rolesCtrl.updateRoleByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objRole = await roleService.updateRoleByCreatedBy(createdBy, req.body);
            if (!objRole) {
                util.setError(404, `Cannot find role with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Role updated', objRole);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = rolesCtrl;
//</es-section>
