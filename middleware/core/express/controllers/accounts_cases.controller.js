/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:21:50 GMT-0400 (Bolivia Time)
 * Time: 0:21:50
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:21:50 GMT-0400 (Bolivia Time)
 * Last time updated: 0:21:50
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const accountCaseService = require('../services/accounts_cases.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const accountsCasesCtrl = {};
accountsCasesCtrl.service = accountCaseService;


accountsCasesCtrl.getAllAccountsCases = async (req, res) => {
    try {
        const objAccountsCases = await accountCaseService.getAllAccountsCases(req.query);
        if (objAccountsCases.length > 0) {
            util.setSuccess(200, 'AccountsCases retrieved', objAccountsCases);
        } else {
            util.setSuccess(200, 'No accountCase found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

accountsCasesCtrl.getAAccountCase = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objAccountCase = await accountCaseService.getAAccountCase(id, req.query);
        if (!objAccountCase) {
            util.setError(404, `Cannot find accountCase with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found accountCase', objAccountCase);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

accountsCasesCtrl.addAccountCase = async (req, res) => {
    try {
        const objAccountCase = await accountCaseService.addAccountCase(req.body);
        util.setSuccess(201, 'AccountCase Added!', objAccountCase);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

accountsCasesCtrl.updateAccountCase = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objAccountCase = await accountCaseService.updateAccountCase(id, req.body);
        if (!objAccountCase) {
            util.setError(404, `Cannot find accountCase with the id: ${id}`);
        } else {
            util.setSuccess(200, 'AccountCase updated', objAccountCase);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

accountsCasesCtrl.deleteAccountCase = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please provide a String value');
            return util.send(res);
        }
        const objAccountCase = await accountCaseService.deleteAccountCase(id);
        if (objAccountCase) {
            util.setSuccess(200, 'AccountCase deleted', objAccountCase);
        } else {
            util.setError(404, `AccountCase with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



accountsCasesCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objAccountCase = await accountCaseService.findOneById(id, req.query);
        if (!objAccountCase) {
            util.setError(404, `Cannot find accountCase with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found accountCase', objAccountCase);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

accountsCasesCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objAccountCase = await accountCaseService.findOneByDeleted(deleted, req.query);
        if (!objAccountCase) {
            util.setError(404, `Cannot find accountCase with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found accountCase', objAccountCase);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

accountsCasesCtrl.findOneByAccountId = async (req, res) => {
    try {
        const { accountId } = req.params;
        const objAccountCase = await accountCaseService.findOneByAccountId(accountId, req.query);
        if (!objAccountCase) {
            util.setError(404, `Cannot find accountCase with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found accountCase', objAccountCase);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

accountsCasesCtrl.findOneByCaseId = async (req, res) => {
    try {
        const { caseId } = req.params;
        const objAccountCase = await accountCaseService.findOneByCaseId(caseId, req.query);
        if (!objAccountCase) {
            util.setError(404, `Cannot find accountCase with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found accountCase', objAccountCase);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

accountsCasesCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objAccountCase = await accountCaseService.findOneByDateModified(dateModified, req.query);
        if (!objAccountCase) {
            util.setError(404, `Cannot find accountCase with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found accountCase', objAccountCase);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



accountsCasesCtrl.updateAccountCaseById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objAccountCase = await accountCaseService.updateAccountCaseById(id, req.body);
            if (!objAccountCase) {
                util.setError(404, `Cannot find accountCase with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AccountCase updated', objAccountCase);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

accountsCasesCtrl.updateAccountCaseByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objAccountCase = await accountCaseService.updateAccountCaseByDeleted(deleted, req.body);
            if (!objAccountCase) {
                util.setError(404, `Cannot find accountCase with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AccountCase updated', objAccountCase);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

accountsCasesCtrl.updateAccountCaseByAccountId = async (req, res) => {
     const { accountId } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objAccountCase = await accountCaseService.updateAccountCaseByAccountId(accountId, req.body);
            if (!objAccountCase) {
                util.setError(404, `Cannot find accountCase with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AccountCase updated', objAccountCase);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

accountsCasesCtrl.updateAccountCaseByCaseId = async (req, res) => {
     const { caseId } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objAccountCase = await accountCaseService.updateAccountCaseByCaseId(caseId, req.body);
            if (!objAccountCase) {
                util.setError(404, `Cannot find accountCase with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AccountCase updated', objAccountCase);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

accountsCasesCtrl.updateAccountCaseByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objAccountCase = await accountCaseService.updateAccountCaseByDateModified(dateModified, req.body);
            if (!objAccountCase) {
                util.setError(404, `Cannot find accountCase with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AccountCase updated', objAccountCase);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = accountsCasesCtrl;
//</es-section>
