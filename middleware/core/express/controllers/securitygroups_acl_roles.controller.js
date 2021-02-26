/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:23:45 GMT-0400 (Bolivia Time)
 * Time: 0:23:45
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:23:45 GMT-0400 (Bolivia Time)
 * Last time updated: 0:23:45
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const securitygroupAclRoleService = require('../services/securitygroups_acl_roles.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const securitygroupsAclRolesCtrl = {};
securitygroupsAclRolesCtrl.service = securitygroupAclRoleService;


securitygroupsAclRolesCtrl.getAllSecuritygroupsAclRoles = async (req, res) => {
    try {
        const objSecuritygroupsAclRoles = await securitygroupAclRoleService.getAllSecuritygroupsAclRoles(req.query);
        if (objSecuritygroupsAclRoles.length > 0) {
            util.setSuccess(200, 'SecuritygroupsAclRoles retrieved', objSecuritygroupsAclRoles);
        } else {
            util.setSuccess(200, 'No securitygroupAclRole found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

securitygroupsAclRolesCtrl.getASecuritygroupAclRole = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objSecuritygroupAclRole = await securitygroupAclRoleService.getASecuritygroupAclRole(id, req.query);
        if (!objSecuritygroupAclRole) {
            util.setError(404, `Cannot find securitygroupAclRole with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found securitygroupAclRole', objSecuritygroupAclRole);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

securitygroupsAclRolesCtrl.addSecuritygroupAclRole = async (req, res) => {
    try {
        const objSecuritygroupAclRole = await securitygroupAclRoleService.addSecuritygroupAclRole(req.body);
        util.setSuccess(201, 'SecuritygroupAclRole Added!', objSecuritygroupAclRole);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

securitygroupsAclRolesCtrl.updateSecuritygroupAclRole = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objSecuritygroupAclRole = await securitygroupAclRoleService.updateSecuritygroupAclRole(id, req.body);
        if (!objSecuritygroupAclRole) {
            util.setError(404, `Cannot find securitygroupAclRole with the id: ${id}`);
        } else {
            util.setSuccess(200, 'SecuritygroupAclRole updated', objSecuritygroupAclRole);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

securitygroupsAclRolesCtrl.deleteSecuritygroupAclRole = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objSecuritygroupAclRole = await securitygroupAclRoleService.deleteSecuritygroupAclRole(id);
        if (objSecuritygroupAclRole) {
            util.setSuccess(200, 'SecuritygroupAclRole deleted', objSecuritygroupAclRole);
        } else {
            util.setError(404, `SecuritygroupAclRole with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



securitygroupsAclRolesCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objSecuritygroupAclRole = await securitygroupAclRoleService.findOneById(id, req.query);
        if (!objSecuritygroupAclRole) {
            util.setError(404, `Cannot find securitygroupAclRole with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found securitygroupAclRole', objSecuritygroupAclRole);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

securitygroupsAclRolesCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objSecuritygroupAclRole = await securitygroupAclRoleService.findOneByDeleted(deleted, req.query);
        if (!objSecuritygroupAclRole) {
            util.setError(404, `Cannot find securitygroupAclRole with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found securitygroupAclRole', objSecuritygroupAclRole);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

securitygroupsAclRolesCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objSecuritygroupAclRole = await securitygroupAclRoleService.findOneByDateModified(dateModified, req.query);
        if (!objSecuritygroupAclRole) {
            util.setError(404, `Cannot find securitygroupAclRole with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found securitygroupAclRole', objSecuritygroupAclRole);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

securitygroupsAclRolesCtrl.findOneBySecuritygroupId = async (req, res) => {
    try {
        const { securitygroupId } = req.params;
        const objSecuritygroupAclRole = await securitygroupAclRoleService.findOneBySecuritygroupId(securitygroupId, req.query);
        if (!objSecuritygroupAclRole) {
            util.setError(404, `Cannot find securitygroupAclRole with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found securitygroupAclRole', objSecuritygroupAclRole);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

securitygroupsAclRolesCtrl.findOneByRoleId = async (req, res) => {
    try {
        const { roleId } = req.params;
        const objSecuritygroupAclRole = await securitygroupAclRoleService.findOneByRoleId(roleId, req.query);
        if (!objSecuritygroupAclRole) {
            util.setError(404, `Cannot find securitygroupAclRole with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found securitygroupAclRole', objSecuritygroupAclRole);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



securitygroupsAclRolesCtrl.updateSecuritygroupAclRoleById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSecuritygroupAclRole = await securitygroupAclRoleService.updateSecuritygroupAclRoleById(id, req.body);
            if (!objSecuritygroupAclRole) {
                util.setError(404, `Cannot find securitygroupAclRole with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SecuritygroupAclRole updated', objSecuritygroupAclRole);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

securitygroupsAclRolesCtrl.updateSecuritygroupAclRoleByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSecuritygroupAclRole = await securitygroupAclRoleService.updateSecuritygroupAclRoleByDeleted(deleted, req.body);
            if (!objSecuritygroupAclRole) {
                util.setError(404, `Cannot find securitygroupAclRole with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SecuritygroupAclRole updated', objSecuritygroupAclRole);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

securitygroupsAclRolesCtrl.updateSecuritygroupAclRoleByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSecuritygroupAclRole = await securitygroupAclRoleService.updateSecuritygroupAclRoleByDateModified(dateModified, req.body);
            if (!objSecuritygroupAclRole) {
                util.setError(404, `Cannot find securitygroupAclRole with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SecuritygroupAclRole updated', objSecuritygroupAclRole);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

securitygroupsAclRolesCtrl.updateSecuritygroupAclRoleBySecuritygroupId = async (req, res) => {
     const { securitygroupId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSecuritygroupAclRole = await securitygroupAclRoleService.updateSecuritygroupAclRoleBySecuritygroupId(securitygroupId, req.body);
            if (!objSecuritygroupAclRole) {
                util.setError(404, `Cannot find securitygroupAclRole with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SecuritygroupAclRole updated', objSecuritygroupAclRole);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

securitygroupsAclRolesCtrl.updateSecuritygroupAclRoleByRoleId = async (req, res) => {
     const { roleId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSecuritygroupAclRole = await securitygroupAclRoleService.updateSecuritygroupAclRoleByRoleId(roleId, req.body);
            if (!objSecuritygroupAclRole) {
                util.setError(404, `Cannot find securitygroupAclRole with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SecuritygroupAclRole updated', objSecuritygroupAclRole);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = securitygroupsAclRolesCtrl;
//</es-section>
