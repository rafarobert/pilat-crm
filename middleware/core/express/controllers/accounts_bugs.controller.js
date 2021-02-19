/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:35:21 GMT-0400 (Bolivia Time)
 * Time: 18:35:21
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:35:21 GMT-0400 (Bolivia Time)
 * Last time updated: 18:35:21
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const accountBugService = require('../services/accounts_bugs.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const accountsBugsCtrl = {};
accountsBugsCtrl.service = accountBugService;


accountsBugsCtrl.getAllAccountsBugs = async (req, res) => {
    try {
        const objAccountsBugs = await accountBugService.getAllAccountsBugs(req.query);
        if (objAccountsBugs.length > 0) {
            util.setSuccess(200, 'AccountsBugs retrieved', objAccountsBugs);
        } else {
            util.setSuccess(200, 'No accountBug found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

accountsBugsCtrl.getAAccountBug = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objAccountBug = await accountBugService.getAAccountBug(id, req.query);
        if (!objAccountBug) {
            util.setError(404, `Cannot find accountBug with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found accountBug', objAccountBug);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

accountsBugsCtrl.addAccountBug = async (req, res) => {
    try {
        const objAccountBug = await accountBugService.addAccountBug(req.body);
        util.setSuccess(201, 'AccountBug Added!', objAccountBug);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

accountsBugsCtrl.updateAccountBug = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objAccountBug = await accountBugService.updateAccountBug(id, req.body);
        if (!objAccountBug) {
            util.setError(404, `Cannot find accountBug with the id: ${id}`);
        } else {
            util.setSuccess(200, 'AccountBug updated', objAccountBug);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

accountsBugsCtrl.deleteAccountBug = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please provide a String value');
            return util.send(res);
        }
        const objAccountBug = await accountBugService.deleteAccountBug(id);
        if (objAccountBug) {
            util.setSuccess(200, 'AccountBug deleted', objAccountBug);
        } else {
            util.setError(404, `AccountBug with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



accountsBugsCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objAccountBug = await accountBugService.findOneById(id, req.query);
        if (!objAccountBug) {
            util.setError(404, `Cannot find accountBug with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found accountBug', objAccountBug);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

accountsBugsCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objAccountBug = await accountBugService.findOneByDeleted(deleted, req.query);
        if (!objAccountBug) {
            util.setError(404, `Cannot find accountBug with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found accountBug', objAccountBug);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

accountsBugsCtrl.findOneByAccountId = async (req, res) => {
    try {
        const { accountId } = req.params;
        const objAccountBug = await accountBugService.findOneByAccountId(accountId, req.query);
        if (!objAccountBug) {
            util.setError(404, `Cannot find accountBug with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found accountBug', objAccountBug);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

accountsBugsCtrl.findOneByBugId = async (req, res) => {
    try {
        const { bugId } = req.params;
        const objAccountBug = await accountBugService.findOneByBugId(bugId, req.query);
        if (!objAccountBug) {
            util.setError(404, `Cannot find accountBug with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found accountBug', objAccountBug);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

accountsBugsCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objAccountBug = await accountBugService.findOneByDateModified(dateModified, req.query);
        if (!objAccountBug) {
            util.setError(404, `Cannot find accountBug with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found accountBug', objAccountBug);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



accountsBugsCtrl.updateAccountBugById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objAccountBug = await accountBugService.updateAccountBugById(id, req.body);
            if (!objAccountBug) {
                util.setError(404, `Cannot find accountBug with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AccountBug updated', objAccountBug);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

accountsBugsCtrl.updateAccountBugByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objAccountBug = await accountBugService.updateAccountBugByDeleted(deleted, req.body);
            if (!objAccountBug) {
                util.setError(404, `Cannot find accountBug with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AccountBug updated', objAccountBug);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

accountsBugsCtrl.updateAccountBugByAccountId = async (req, res) => {
     const { accountId } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objAccountBug = await accountBugService.updateAccountBugByAccountId(accountId, req.body);
            if (!objAccountBug) {
                util.setError(404, `Cannot find accountBug with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AccountBug updated', objAccountBug);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

accountsBugsCtrl.updateAccountBugByBugId = async (req, res) => {
     const { bugId } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objAccountBug = await accountBugService.updateAccountBugByBugId(bugId, req.body);
            if (!objAccountBug) {
                util.setError(404, `Cannot find accountBug with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AccountBug updated', objAccountBug);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

accountsBugsCtrl.updateAccountBugByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objAccountBug = await accountBugService.updateAccountBugByDateModified(dateModified, req.body);
            if (!objAccountBug) {
                util.setError(404, `Cannot find accountBug with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AccountBug updated', objAccountBug);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = accountsBugsCtrl;
//</es-section>
