/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:21:51 GMT-0400 (Bolivia Time)
 * Time: 0:21:51
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:21:51 GMT-0400 (Bolivia Time)
 * Last time updated: 0:21:51
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const accountOpportunityService = require('../services/accounts_opportunities.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const accountsOpportunitiesCtrl = {};
accountsOpportunitiesCtrl.service = accountOpportunityService;


accountsOpportunitiesCtrl.getAllAccountsOpportunities = async (req, res) => {
    try {
        const objAccountsOpportunities = await accountOpportunityService.getAllAccountsOpportunities(req.query);
        if (objAccountsOpportunities.length > 0) {
            util.setSuccess(200, 'AccountsOpportunities retrieved', objAccountsOpportunities);
        } else {
            util.setSuccess(200, 'No accountOpportunity found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

accountsOpportunitiesCtrl.getAAccountOpportunity = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objAccountOpportunity = await accountOpportunityService.getAAccountOpportunity(id, req.query);
        if (!objAccountOpportunity) {
            util.setError(404, `Cannot find accountOpportunity with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found accountOpportunity', objAccountOpportunity);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

accountsOpportunitiesCtrl.addAccountOpportunity = async (req, res) => {
    try {
        const objAccountOpportunity = await accountOpportunityService.addAccountOpportunity(req.body);
        util.setSuccess(201, 'AccountOpportunity Added!', objAccountOpportunity);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

accountsOpportunitiesCtrl.updateAccountOpportunity = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please input a valid String value');
            return util.send(res);
        }
        const objAccountOpportunity = await accountOpportunityService.updateAccountOpportunity(id, req.body);
        if (!objAccountOpportunity) {
            util.setError(404, `Cannot find accountOpportunity with the id: ${id}`);
        } else {
            util.setSuccess(200, 'AccountOpportunity updated', objAccountOpportunity);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

accountsOpportunitiesCtrl.deleteAccountOpportunity = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isString(id)) {
            util.setError(400, 'Please provide a String value');
            return util.send(res);
        }
        const objAccountOpportunity = await accountOpportunityService.deleteAccountOpportunity(id);
        if (objAccountOpportunity) {
            util.setSuccess(200, 'AccountOpportunity deleted', objAccountOpportunity);
        } else {
            util.setError(404, `AccountOpportunity with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



accountsOpportunitiesCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objAccountOpportunity = await accountOpportunityService.findOneById(id, req.query);
        if (!objAccountOpportunity) {
            util.setError(404, `Cannot find accountOpportunity with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found accountOpportunity', objAccountOpportunity);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

accountsOpportunitiesCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objAccountOpportunity = await accountOpportunityService.findOneByDeleted(deleted, req.query);
        if (!objAccountOpportunity) {
            util.setError(404, `Cannot find accountOpportunity with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found accountOpportunity', objAccountOpportunity);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

accountsOpportunitiesCtrl.findOneByOpportunityId = async (req, res) => {
    try {
        const { opportunityId } = req.params;
        const objAccountOpportunity = await accountOpportunityService.findOneByOpportunityId(opportunityId, req.query);
        if (!objAccountOpportunity) {
            util.setError(404, `Cannot find accountOpportunity with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found accountOpportunity', objAccountOpportunity);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

accountsOpportunitiesCtrl.findOneByAccountId = async (req, res) => {
    try {
        const { accountId } = req.params;
        const objAccountOpportunity = await accountOpportunityService.findOneByAccountId(accountId, req.query);
        if (!objAccountOpportunity) {
            util.setError(404, `Cannot find accountOpportunity with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found accountOpportunity', objAccountOpportunity);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

accountsOpportunitiesCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objAccountOpportunity = await accountOpportunityService.findOneByDateModified(dateModified, req.query);
        if (!objAccountOpportunity) {
            util.setError(404, `Cannot find accountOpportunity with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found accountOpportunity', objAccountOpportunity);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



accountsOpportunitiesCtrl.updateAccountOpportunityById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objAccountOpportunity = await accountOpportunityService.updateAccountOpportunityById(id, req.body);
            if (!objAccountOpportunity) {
                util.setError(404, `Cannot find accountOpportunity with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AccountOpportunity updated', objAccountOpportunity);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

accountsOpportunitiesCtrl.updateAccountOpportunityByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objAccountOpportunity = await accountOpportunityService.updateAccountOpportunityByDeleted(deleted, req.body);
            if (!objAccountOpportunity) {
                util.setError(404, `Cannot find accountOpportunity with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AccountOpportunity updated', objAccountOpportunity);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

accountsOpportunitiesCtrl.updateAccountOpportunityByOpportunityId = async (req, res) => {
     const { opportunityId } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objAccountOpportunity = await accountOpportunityService.updateAccountOpportunityByOpportunityId(opportunityId, req.body);
            if (!objAccountOpportunity) {
                util.setError(404, `Cannot find accountOpportunity with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AccountOpportunity updated', objAccountOpportunity);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

accountsOpportunitiesCtrl.updateAccountOpportunityByAccountId = async (req, res) => {
     const { accountId } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objAccountOpportunity = await accountOpportunityService.updateAccountOpportunityByAccountId(accountId, req.body);
            if (!objAccountOpportunity) {
                util.setError(404, `Cannot find accountOpportunity with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AccountOpportunity updated', objAccountOpportunity);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

accountsOpportunitiesCtrl.updateAccountOpportunityByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isString(id)) {
                util.setError(400, 'Please input a valid String value');
                return util.send(res);
            }
            const objAccountOpportunity = await accountOpportunityService.updateAccountOpportunityByDateModified(dateModified, req.body);
            if (!objAccountOpportunity) {
                util.setError(404, `Cannot find accountOpportunity with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AccountOpportunity updated', objAccountOpportunity);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = accountsOpportunitiesCtrl;
//</es-section>
