/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:38:42 GMT-0400 (Bolivia Time)
 * Time: 18:38:42
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:38:42 GMT-0400 (Bolivia Time)
 * Last time updated: 18:38:42
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const securitygroupUserService = require('../services/securitygroups_users.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const securitygroupsUsersCtrl = {};
securitygroupsUsersCtrl.service = securitygroupUserService;


securitygroupsUsersCtrl.getAllSecuritygroupsUsers = async (req, res) => {
    try {
        const objSecuritygroupsUsers = await securitygroupUserService.getAllSecuritygroupsUsers(req.query);
        if (objSecuritygroupsUsers.length > 0) {
            util.setSuccess(200, 'SecuritygroupsUsers retrieved', objSecuritygroupsUsers);
        } else {
            util.setSuccess(200, 'No securitygroupUser found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

securitygroupsUsersCtrl.getASecuritygroupUser = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objSecuritygroupUser = await securitygroupUserService.getASecuritygroupUser(id, req.query);
        if (!objSecuritygroupUser) {
            util.setError(404, `Cannot find securitygroupUser with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found securitygroupUser', objSecuritygroupUser);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

securitygroupsUsersCtrl.addSecuritygroupUser = async (req, res) => {
    try {
        const objSecuritygroupUser = await securitygroupUserService.addSecuritygroupUser(req.body);
        util.setSuccess(201, 'SecuritygroupUser Added!', objSecuritygroupUser);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

securitygroupsUsersCtrl.updateSecuritygroupUser = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objSecuritygroupUser = await securitygroupUserService.updateSecuritygroupUser(id, req.body);
        if (!objSecuritygroupUser) {
            util.setError(404, `Cannot find securitygroupUser with the id: ${id}`);
        } else {
            util.setSuccess(200, 'SecuritygroupUser updated', objSecuritygroupUser);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

securitygroupsUsersCtrl.deleteSecuritygroupUser = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please provide a String value');
            return util.send(res);
        }
        const objSecuritygroupUser = await securitygroupUserService.deleteSecuritygroupUser(id);
        if (objSecuritygroupUser) {
            util.setSuccess(200, 'SecuritygroupUser deleted', objSecuritygroupUser);
        } else {
            util.setError(404, `SecuritygroupUser with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



securitygroupsUsersCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objSecuritygroupUser = await securitygroupUserService.findOneById(id, req.query);
        if (!objSecuritygroupUser) {
            util.setError(404, `Cannot find securitygroupUser with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found securitygroupUser', objSecuritygroupUser);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

securitygroupsUsersCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objSecuritygroupUser = await securitygroupUserService.findOneByDeleted(deleted, req.query);
        if (!objSecuritygroupUser) {
            util.setError(404, `Cannot find securitygroupUser with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found securitygroupUser', objSecuritygroupUser);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

securitygroupsUsersCtrl.findOneByPrimaryGroup = async (req, res) => {
    try {
        const { primaryGroup } = req.params;
        const objSecuritygroupUser = await securitygroupUserService.findOneByPrimaryGroup(primaryGroup, req.query);
        if (!objSecuritygroupUser) {
            util.setError(404, `Cannot find securitygroupUser with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found securitygroupUser', objSecuritygroupUser);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

securitygroupsUsersCtrl.findOneByNoninheritable = async (req, res) => {
    try {
        const { noninheritable } = req.params;
        const objSecuritygroupUser = await securitygroupUserService.findOneByNoninheritable(noninheritable, req.query);
        if (!objSecuritygroupUser) {
            util.setError(404, `Cannot find securitygroupUser with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found securitygroupUser', objSecuritygroupUser);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

securitygroupsUsersCtrl.findOneBySecuritygroupId = async (req, res) => {
    try {
        const { securitygroupId } = req.params;
        const objSecuritygroupUser = await securitygroupUserService.findOneBySecuritygroupId(securitygroupId, req.query);
        if (!objSecuritygroupUser) {
            util.setError(404, `Cannot find securitygroupUser with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found securitygroupUser', objSecuritygroupUser);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

securitygroupsUsersCtrl.findOneByUserId = async (req, res) => {
    try {
        const { userId } = req.params;
        const objSecuritygroupUser = await securitygroupUserService.findOneByUserId(userId, req.query);
        if (!objSecuritygroupUser) {
            util.setError(404, `Cannot find securitygroupUser with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found securitygroupUser', objSecuritygroupUser);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

securitygroupsUsersCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objSecuritygroupUser = await securitygroupUserService.findOneByDateModified(dateModified, req.query);
        if (!objSecuritygroupUser) {
            util.setError(404, `Cannot find securitygroupUser with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found securitygroupUser', objSecuritygroupUser);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



securitygroupsUsersCtrl.updateSecuritygroupUserById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objSecuritygroupUser = await securitygroupUserService.updateSecuritygroupUserById(id, req.body);
            if (!objSecuritygroupUser) {
                util.setError(404, `Cannot find securitygroupUser with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SecuritygroupUser updated', objSecuritygroupUser);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

securitygroupsUsersCtrl.updateSecuritygroupUserByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objSecuritygroupUser = await securitygroupUserService.updateSecuritygroupUserByDeleted(deleted, req.body);
            if (!objSecuritygroupUser) {
                util.setError(404, `Cannot find securitygroupUser with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SecuritygroupUser updated', objSecuritygroupUser);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

securitygroupsUsersCtrl.updateSecuritygroupUserByPrimaryGroup = async (req, res) => {
     const { primaryGroup } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objSecuritygroupUser = await securitygroupUserService.updateSecuritygroupUserByPrimaryGroup(primaryGroup, req.body);
            if (!objSecuritygroupUser) {
                util.setError(404, `Cannot find securitygroupUser with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SecuritygroupUser updated', objSecuritygroupUser);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

securitygroupsUsersCtrl.updateSecuritygroupUserByNoninheritable = async (req, res) => {
     const { noninheritable } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objSecuritygroupUser = await securitygroupUserService.updateSecuritygroupUserByNoninheritable(noninheritable, req.body);
            if (!objSecuritygroupUser) {
                util.setError(404, `Cannot find securitygroupUser with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SecuritygroupUser updated', objSecuritygroupUser);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

securitygroupsUsersCtrl.updateSecuritygroupUserBySecuritygroupId = async (req, res) => {
     const { securitygroupId } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objSecuritygroupUser = await securitygroupUserService.updateSecuritygroupUserBySecuritygroupId(securitygroupId, req.body);
            if (!objSecuritygroupUser) {
                util.setError(404, `Cannot find securitygroupUser with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SecuritygroupUser updated', objSecuritygroupUser);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

securitygroupsUsersCtrl.updateSecuritygroupUserByUserId = async (req, res) => {
     const { userId } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objSecuritygroupUser = await securitygroupUserService.updateSecuritygroupUserByUserId(userId, req.body);
            if (!objSecuritygroupUser) {
                util.setError(404, `Cannot find securitygroupUser with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SecuritygroupUser updated', objSecuritygroupUser);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

securitygroupsUsersCtrl.updateSecuritygroupUserByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objSecuritygroupUser = await securitygroupUserService.updateSecuritygroupUserByDateModified(dateModified, req.body);
            if (!objSecuritygroupUser) {
                util.setError(404, `Cannot find securitygroupUser with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SecuritygroupUser updated', objSecuritygroupUser);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = securitygroupsUsersCtrl;
//</es-section>
