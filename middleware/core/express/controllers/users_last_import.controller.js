/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:39:03 GMT-0400 (Bolivia Time)
 * Time: 18:39:3
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:39:03 GMT-0400 (Bolivia Time)
 * Last time updated: 18:39:3
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const userLastImportService = require('../services/users_last_import.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const usersLastImportCtrl = {};
usersLastImportCtrl.service = userLastImportService;


usersLastImportCtrl.getAllUsersLastImport = async (req, res) => {
    try {
        const objUsersLastImport = await userLastImportService.getAllUsersLastImport(req.query);
        if (objUsersLastImport.length > 0) {
            util.setSuccess(200, 'UsersLastImport retrieved', objUsersLastImport);
        } else {
            util.setSuccess(200, 'No userLastImport found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

usersLastImportCtrl.getAUserLastImport = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objUserLastImport = await userLastImportService.getAUserLastImport(id, req.query);
        if (!objUserLastImport) {
            util.setError(404, `Cannot find userLastImport with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found userLastImport', objUserLastImport);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

usersLastImportCtrl.addUserLastImport = async (req, res) => {
    try {
        const objUserLastImport = await userLastImportService.addUserLastImport(req.body);
        util.setSuccess(201, 'UserLastImport Added!', objUserLastImport);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

usersLastImportCtrl.updateUserLastImport = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objUserLastImport = await userLastImportService.updateUserLastImport(id, req.body);
        if (!objUserLastImport) {
            util.setError(404, `Cannot find userLastImport with the id: ${id}`);
        } else {
            util.setSuccess(200, 'UserLastImport updated', objUserLastImport);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

usersLastImportCtrl.deleteUserLastImport = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objUserLastImport = await userLastImportService.deleteUserLastImport(id);
        if (objUserLastImport) {
            util.setSuccess(200, 'UserLastImport deleted', objUserLastImport);
        } else {
            util.setError(404, `UserLastImport with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



usersLastImportCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objUserLastImport = await userLastImportService.findOneById(id, req.query);
        if (!objUserLastImport) {
            util.setError(404, `Cannot find userLastImport with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found userLastImport', objUserLastImport);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

usersLastImportCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objUserLastImport = await userLastImportService.findOneByDeleted(deleted, req.query);
        if (!objUserLastImport) {
            util.setError(404, `Cannot find userLastImport with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found userLastImport', objUserLastImport);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

usersLastImportCtrl.findOneByImportModule = async (req, res) => {
    try {
        const { importModule } = req.params;
        const objUserLastImport = await userLastImportService.findOneByImportModule(importModule, req.query);
        if (!objUserLastImport) {
            util.setError(404, `Cannot find userLastImport with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found userLastImport', objUserLastImport);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

usersLastImportCtrl.findOneByBeanType = async (req, res) => {
    try {
        const { beanType } = req.params;
        const objUserLastImport = await userLastImportService.findOneByBeanType(beanType, req.query);
        if (!objUserLastImport) {
            util.setError(404, `Cannot find userLastImport with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found userLastImport', objUserLastImport);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

usersLastImportCtrl.findOneByAssignedUserId = async (req, res) => {
    try {
        const { assignedUserId } = req.params;
        const objUserLastImport = await userLastImportService.findOneByAssignedUserId(assignedUserId, req.query);
        if (!objUserLastImport) {
            util.setError(404, `Cannot find userLastImport with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found userLastImport', objUserLastImport);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

usersLastImportCtrl.findOneByBeanId = async (req, res) => {
    try {
        const { beanId } = req.params;
        const objUserLastImport = await userLastImportService.findOneByBeanId(beanId, req.query);
        if (!objUserLastImport) {
            util.setError(404, `Cannot find userLastImport with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found userLastImport', objUserLastImport);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



usersLastImportCtrl.updateUserLastImportById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objUserLastImport = await userLastImportService.updateUserLastImportById(id, req.body);
            if (!objUserLastImport) {
                util.setError(404, `Cannot find userLastImport with the id: ${id}`);
            } else {
                util.setSuccess(200, 'UserLastImport updated', objUserLastImport);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

usersLastImportCtrl.updateUserLastImportByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objUserLastImport = await userLastImportService.updateUserLastImportByDeleted(deleted, req.body);
            if (!objUserLastImport) {
                util.setError(404, `Cannot find userLastImport with the id: ${id}`);
            } else {
                util.setSuccess(200, 'UserLastImport updated', objUserLastImport);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

usersLastImportCtrl.updateUserLastImportByImportModule = async (req, res) => {
     const { importModule } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objUserLastImport = await userLastImportService.updateUserLastImportByImportModule(importModule, req.body);
            if (!objUserLastImport) {
                util.setError(404, `Cannot find userLastImport with the id: ${id}`);
            } else {
                util.setSuccess(200, 'UserLastImport updated', objUserLastImport);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

usersLastImportCtrl.updateUserLastImportByBeanType = async (req, res) => {
     const { beanType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objUserLastImport = await userLastImportService.updateUserLastImportByBeanType(beanType, req.body);
            if (!objUserLastImport) {
                util.setError(404, `Cannot find userLastImport with the id: ${id}`);
            } else {
                util.setSuccess(200, 'UserLastImport updated', objUserLastImport);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

usersLastImportCtrl.updateUserLastImportByAssignedUserId = async (req, res) => {
     const { assignedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objUserLastImport = await userLastImportService.updateUserLastImportByAssignedUserId(assignedUserId, req.body);
            if (!objUserLastImport) {
                util.setError(404, `Cannot find userLastImport with the id: ${id}`);
            } else {
                util.setSuccess(200, 'UserLastImport updated', objUserLastImport);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

usersLastImportCtrl.updateUserLastImportByBeanId = async (req, res) => {
     const { beanId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objUserLastImport = await userLastImportService.updateUserLastImportByBeanId(beanId, req.body);
            if (!objUserLastImport) {
                util.setError(404, `Cannot find userLastImport with the id: ${id}`);
            } else {
                util.setSuccess(200, 'UserLastImport updated', objUserLastImport);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = usersLastImportCtrl;
//</es-section>
