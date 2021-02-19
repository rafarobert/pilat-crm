/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:38:36 GMT-0400 (Bolivia Time)
 * Time: 18:38:36
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:38:36 GMT-0400 (Bolivia Time)
 * Last time updated: 18:38:36
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const roleModuleService = require('../services/roles_modules.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const rolesModulesCtrl = {};
rolesModulesCtrl.service = roleModuleService;


rolesModulesCtrl.getAllRolesModules = async (req, res) => {
    try {
        const objRolesModules = await roleModuleService.getAllRolesModules(req.query);
        if (objRolesModules.length > 0) {
            util.setSuccess(200, 'RolesModules retrieved', objRolesModules);
        } else {
            util.setSuccess(200, 'No roleModule found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

rolesModulesCtrl.getARoleModule = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objRoleModule = await roleModuleService.getARoleModule(id, req.query);
        if (!objRoleModule) {
            util.setError(404, `Cannot find roleModule with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found roleModule', objRoleModule);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

rolesModulesCtrl.addRoleModule = async (req, res) => {
    try {
        const objRoleModule = await roleModuleService.addRoleModule(req.body);
        util.setSuccess(201, 'RoleModule Added!', objRoleModule);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

rolesModulesCtrl.updateRoleModule = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objRoleModule = await roleModuleService.updateRoleModule(id, req.body);
        if (!objRoleModule) {
            util.setError(404, `Cannot find roleModule with the id: ${id}`);
        } else {
            util.setSuccess(200, 'RoleModule updated', objRoleModule);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

rolesModulesCtrl.deleteRoleModule = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please provide a String value');
            return util.send(res);
        }
        const objRoleModule = await roleModuleService.deleteRoleModule(id);
        if (objRoleModule) {
            util.setSuccess(200, 'RoleModule deleted', objRoleModule);
        } else {
            util.setError(404, `RoleModule with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



rolesModulesCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objRoleModule = await roleModuleService.findOneById(id, req.query);
        if (!objRoleModule) {
            util.setError(404, `Cannot find roleModule with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found roleModule', objRoleModule);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

rolesModulesCtrl.findOneByAllow = async (req, res) => {
    try {
        const { allow } = req.params;
        const objRoleModule = await roleModuleService.findOneByAllow(allow, req.query);
        if (!objRoleModule) {
            util.setError(404, `Cannot find roleModule with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found roleModule', objRoleModule);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

rolesModulesCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objRoleModule = await roleModuleService.findOneByDeleted(deleted, req.query);
        if (!objRoleModule) {
            util.setError(404, `Cannot find roleModule with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found roleModule', objRoleModule);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

rolesModulesCtrl.findOneByRoleId = async (req, res) => {
    try {
        const { roleId } = req.params;
        const objRoleModule = await roleModuleService.findOneByRoleId(roleId, req.query);
        if (!objRoleModule) {
            util.setError(404, `Cannot find roleModule with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found roleModule', objRoleModule);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

rolesModulesCtrl.findOneByModuleId = async (req, res) => {
    try {
        const { moduleId } = req.params;
        const objRoleModule = await roleModuleService.findOneByModuleId(moduleId, req.query);
        if (!objRoleModule) {
            util.setError(404, `Cannot find roleModule with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found roleModule', objRoleModule);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

rolesModulesCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objRoleModule = await roleModuleService.findOneByDateModified(dateModified, req.query);
        if (!objRoleModule) {
            util.setError(404, `Cannot find roleModule with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found roleModule', objRoleModule);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



rolesModulesCtrl.updateRoleModuleById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objRoleModule = await roleModuleService.updateRoleModuleById(id, req.body);
            if (!objRoleModule) {
                util.setError(404, `Cannot find roleModule with the id: ${id}`);
            } else {
                util.setSuccess(200, 'RoleModule updated', objRoleModule);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

rolesModulesCtrl.updateRoleModuleByAllow = async (req, res) => {
     const { allow } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objRoleModule = await roleModuleService.updateRoleModuleByAllow(allow, req.body);
            if (!objRoleModule) {
                util.setError(404, `Cannot find roleModule with the id: ${id}`);
            } else {
                util.setSuccess(200, 'RoleModule updated', objRoleModule);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

rolesModulesCtrl.updateRoleModuleByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objRoleModule = await roleModuleService.updateRoleModuleByDeleted(deleted, req.body);
            if (!objRoleModule) {
                util.setError(404, `Cannot find roleModule with the id: ${id}`);
            } else {
                util.setSuccess(200, 'RoleModule updated', objRoleModule);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

rolesModulesCtrl.updateRoleModuleByRoleId = async (req, res) => {
     const { roleId } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objRoleModule = await roleModuleService.updateRoleModuleByRoleId(roleId, req.body);
            if (!objRoleModule) {
                util.setError(404, `Cannot find roleModule with the id: ${id}`);
            } else {
                util.setSuccess(200, 'RoleModule updated', objRoleModule);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

rolesModulesCtrl.updateRoleModuleByModuleId = async (req, res) => {
     const { moduleId } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objRoleModule = await roleModuleService.updateRoleModuleByModuleId(moduleId, req.body);
            if (!objRoleModule) {
                util.setError(404, `Cannot find roleModule with the id: ${id}`);
            } else {
                util.setSuccess(200, 'RoleModule updated', objRoleModule);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

rolesModulesCtrl.updateRoleModuleByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objRoleModule = await roleModuleService.updateRoleModuleByDateModified(dateModified, req.body);
            if (!objRoleModule) {
                util.setError(404, `Cannot find roleModule with the id: ${id}`);
            } else {
                util.setSuccess(200, 'RoleModule updated', objRoleModule);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = rolesModulesCtrl;
//</es-section>
