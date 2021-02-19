/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:35:25 GMT-0400 (Bolivia Time)
 * Time: 18:35:25
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:35:25 GMT-0400 (Bolivia Time)
 * Last time updated: 18:35:25
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const aclRoleService = require('../services/acl_roles.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const aclRolesCtrl = {};
aclRolesCtrl.service = aclRoleService;


aclRolesCtrl.getAllAclRoles = async (req, res) => {
    try {
        const objAclRoles = await aclRoleService.getAllAclRoles(req.query);
        if (objAclRoles.length > 0) {
            util.setSuccess(200, 'AclRoles retrieved', objAclRoles);
        } else {
            util.setSuccess(200, 'No aclRole found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aclRolesCtrl.getAAclRole = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAclRole = await aclRoleService.getAAclRole(id, req.query);
        if (!objAclRole) {
            util.setError(404, `Cannot find aclRole with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found aclRole', objAclRole);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aclRolesCtrl.addAclRole = async (req, res) => {
    try {
        const objAclRole = await aclRoleService.addAclRole(req.body);
        util.setSuccess(201, 'AclRole Added!', objAclRole);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aclRolesCtrl.updateAclRole = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAclRole = await aclRoleService.updateAclRole(id, req.body);
        if (!objAclRole) {
            util.setError(404, `Cannot find aclRole with the id: ${id}`);
        } else {
            util.setSuccess(200, 'AclRole updated', objAclRole);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

aclRolesCtrl.deleteAclRole = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objAclRole = await aclRoleService.deleteAclRole(id);
        if (objAclRole) {
            util.setSuccess(200, 'AclRole deleted', objAclRole);
        } else {
            util.setError(404, `AclRole with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



aclRolesCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objAclRole = await aclRoleService.findOneById(id, req.query);
        if (!objAclRole) {
            util.setError(404, `Cannot find aclRole with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aclRole', objAclRole);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aclRolesCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objAclRole = await aclRoleService.findOneByDeleted(deleted, req.query);
        if (!objAclRole) {
            util.setError(404, `Cannot find aclRole with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aclRole', objAclRole);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aclRolesCtrl.findOneByName = async (req, res) => {
    try {
        const { name } = req.params;
        const objAclRole = await aclRoleService.findOneByName(name, req.query);
        if (!objAclRole) {
            util.setError(404, `Cannot find aclRole with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aclRole', objAclRole);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aclRolesCtrl.findOneByDescription = async (req, res) => {
    try {
        const { description } = req.params;
        const objAclRole = await aclRoleService.findOneByDescription(description, req.query);
        if (!objAclRole) {
            util.setError(404, `Cannot find aclRole with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aclRole', objAclRole);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aclRolesCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objAclRole = await aclRoleService.findOneByDateEntered(dateEntered, req.query);
        if (!objAclRole) {
            util.setError(404, `Cannot find aclRole with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aclRole', objAclRole);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aclRolesCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objAclRole = await aclRoleService.findOneByDateModified(dateModified, req.query);
        if (!objAclRole) {
            util.setError(404, `Cannot find aclRole with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aclRole', objAclRole);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aclRolesCtrl.findOneByModifiedUserId = async (req, res) => {
    try {
        const { modifiedUserId } = req.params;
        const objAclRole = await aclRoleService.findOneByModifiedUserId(modifiedUserId, req.query);
        if (!objAclRole) {
            util.setError(404, `Cannot find aclRole with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aclRole', objAclRole);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aclRolesCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objAclRole = await aclRoleService.findOneByCreatedBy(createdBy, req.query);
        if (!objAclRole) {
            util.setError(404, `Cannot find aclRole with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aclRole', objAclRole);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



aclRolesCtrl.updateAclRoleById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAclRole = await aclRoleService.updateAclRoleById(id, req.body);
            if (!objAclRole) {
                util.setError(404, `Cannot find aclRole with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AclRole updated', objAclRole);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aclRolesCtrl.updateAclRoleByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAclRole = await aclRoleService.updateAclRoleByDeleted(deleted, req.body);
            if (!objAclRole) {
                util.setError(404, `Cannot find aclRole with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AclRole updated', objAclRole);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aclRolesCtrl.updateAclRoleByName = async (req, res) => {
     const { name } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAclRole = await aclRoleService.updateAclRoleByName(name, req.body);
            if (!objAclRole) {
                util.setError(404, `Cannot find aclRole with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AclRole updated', objAclRole);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aclRolesCtrl.updateAclRoleByDescription = async (req, res) => {
     const { description } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAclRole = await aclRoleService.updateAclRoleByDescription(description, req.body);
            if (!objAclRole) {
                util.setError(404, `Cannot find aclRole with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AclRole updated', objAclRole);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aclRolesCtrl.updateAclRoleByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAclRole = await aclRoleService.updateAclRoleByDateEntered(dateEntered, req.body);
            if (!objAclRole) {
                util.setError(404, `Cannot find aclRole with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AclRole updated', objAclRole);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aclRolesCtrl.updateAclRoleByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAclRole = await aclRoleService.updateAclRoleByDateModified(dateModified, req.body);
            if (!objAclRole) {
                util.setError(404, `Cannot find aclRole with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AclRole updated', objAclRole);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aclRolesCtrl.updateAclRoleByModifiedUserId = async (req, res) => {
     const { modifiedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAclRole = await aclRoleService.updateAclRoleByModifiedUserId(modifiedUserId, req.body);
            if (!objAclRole) {
                util.setError(404, `Cannot find aclRole with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AclRole updated', objAclRole);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aclRolesCtrl.updateAclRoleByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAclRole = await aclRoleService.updateAclRoleByCreatedBy(createdBy, req.body);
            if (!objAclRole) {
                util.setError(404, `Cannot find aclRole with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AclRole updated', objAclRole);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = aclRolesCtrl;
//</es-section>
