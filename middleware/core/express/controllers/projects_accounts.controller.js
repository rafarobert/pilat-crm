/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:30 GMT-0400 (Bolivia Time)
 * Time: 14:57:30
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:30 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:30
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const models = require('../../express');
const projectAccountService = require('../services/projects_accounts.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const projectsAccountsCtrl = {};
projectsAccountsCtrl.service = projectAccountService;


projectsAccountsCtrl.getAllProjectsAccounts = async (req, res) => {
    try {
        const { length } = req.body;
        const { start } = req.body;
        const [column, dir] = util.getOrderByColumnDirection(models.sequelize.projectsAccounts.rawAttributes,req.body);
        req.query.limit = length ? length : req.query.limit;
        req.query.offset = start ? start : req.query.offset;
        req.query.order = column && dir ? [[column,dir]] : req.query.order;

        const objProjectsAccounts = await projectAccountService.getAllProjectsAccounts(req.query);
        if (objProjectsAccounts && objProjectsAccounts.rows && objProjectsAccounts.count) {
            util.setSuccess(200, 'ProjectsAccounts retrieved', objProjectsAccounts.rows, objProjectsAccounts.count, req.query.limit, req.query.offset);
        } else {
            util.setSuccess(200, 'No projectAccount found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectsAccountsCtrl.getAProjectAccount = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objProjectAccount = await projectAccountService.getAProjectAccount(id, req.query);
        if (!objProjectAccount) {
            util.setError(404, `Cannot find projectAccount with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found projectAccount', objProjectAccount);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectsAccountsCtrl.addProjectAccount = async (req, res) => {
    try {
        const objProjectAccount = await projectAccountService.addProjectAccount(req.body);
        util.setSuccess(201, 'ProjectAccount Added!', objProjectAccount);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectsAccountsCtrl.updateProjectAccount = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objProjectAccount = await projectAccountService.updateProjectAccount(id, req.body);
        if (!objProjectAccount) {
            util.setError(404, `Cannot find projectAccount with the id: ${id}`);
        } else {
            util.setSuccess(200, 'ProjectAccount updated', objProjectAccount);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

projectsAccountsCtrl.deleteProjectAccount = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please provide a String value');
            return util.send(res);
        }
        const objProjectAccount = await projectAccountService.deleteProjectAccount(id);
        if (objProjectAccount) {
            util.setSuccess(200, 'ProjectAccount deleted', objProjectAccount);
        } else {
            util.setError(404, `ProjectAccount with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



projectsAccountsCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objProjectAccount = await projectAccountService.findOneById(id, req.query);
        if (!objProjectAccount) {
            util.setError(404, `Cannot find projectAccount with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found projectAccount', objProjectAccount);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectsAccountsCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objProjectAccount = await projectAccountService.findOneByDeleted(deleted, req.query);
        if (!objProjectAccount) {
            util.setError(404, `Cannot find projectAccount with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found projectAccount', objProjectAccount);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectsAccountsCtrl.findOneByAccountId = async (req, res) => {
    try {
        const { accountId } = req.params;
        const objProjectAccount = await projectAccountService.findOneByAccountId(accountId, req.query);
        if (!objProjectAccount) {
            util.setError(404, `Cannot find projectAccount with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found projectAccount', objProjectAccount);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectsAccountsCtrl.findOneByProjectId = async (req, res) => {
    try {
        const { projectId } = req.params;
        const objProjectAccount = await projectAccountService.findOneByProjectId(projectId, req.query);
        if (!objProjectAccount) {
            util.setError(404, `Cannot find projectAccount with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found projectAccount', objProjectAccount);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectsAccountsCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objProjectAccount = await projectAccountService.findOneByDateModified(dateModified, req.query);
        if (!objProjectAccount) {
            util.setError(404, `Cannot find projectAccount with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found projectAccount', objProjectAccount);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



projectsAccountsCtrl.updateProjectAccountById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objProjectAccount = await projectAccountService.updateProjectAccountById(id, req.body);
            if (!objProjectAccount) {
                util.setError(404, `Cannot find projectAccount with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProjectAccount updated', objProjectAccount);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectsAccountsCtrl.updateProjectAccountByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objProjectAccount = await projectAccountService.updateProjectAccountByDeleted(deleted, req.body);
            if (!objProjectAccount) {
                util.setError(404, `Cannot find projectAccount with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProjectAccount updated', objProjectAccount);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectsAccountsCtrl.updateProjectAccountByAccountId = async (req, res) => {
     const { accountId } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objProjectAccount = await projectAccountService.updateProjectAccountByAccountId(accountId, req.body);
            if (!objProjectAccount) {
                util.setError(404, `Cannot find projectAccount with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProjectAccount updated', objProjectAccount);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectsAccountsCtrl.updateProjectAccountByProjectId = async (req, res) => {
     const { projectId } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objProjectAccount = await projectAccountService.updateProjectAccountByProjectId(projectId, req.body);
            if (!objProjectAccount) {
                util.setError(404, `Cannot find projectAccount with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProjectAccount updated', objProjectAccount);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectsAccountsCtrl.updateProjectAccountByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objProjectAccount = await projectAccountService.updateProjectAccountByDateModified(dateModified, req.body);
            if (!objProjectAccount) {
                util.setError(404, `Cannot find projectAccount with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ProjectAccount updated', objProjectAccount);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = projectsAccountsCtrl;
//</es-section>
