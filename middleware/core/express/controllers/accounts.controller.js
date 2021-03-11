/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:55:46 GMT-0400 (Bolivia Time)
 * Time: 14:55:46
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:55:46 GMT-0400 (Bolivia Time)
 * Last time updated: 14:55:46
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const models = require('../../express');
const accountService = require('../services/accounts.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const accountsCtrl = {};
accountsCtrl.service = accountService;


accountsCtrl.getAllAccounts = async (req, res) => {
    try {
        const { length } = req.body;
        const { start } = req.body;
        const [column, dir] = util.getOrderByColumnDirection(models.sequelize.accounts.rawAttributes,req.body);
        req.query.limit = length ? length : req.query.limit;
        req.query.offset = start ? start : req.query.offset;
        req.query.order = column && dir ? [[column,dir]] : req.query.order;

        const objAccounts = await accountService.getAllAccounts(req.query);
        if (objAccounts && objAccounts.rows && objAccounts.count) {
            util.setSuccess(200, 'Accounts retrieved', objAccounts.rows, objAccounts.count, req.query.limit, req.query.offset);
        } else {
            util.setSuccess(200, 'No account found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

accountsCtrl.getAAccount = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAccount = await accountService.getAAccount(id, req.query);
        if (!objAccount) {
            util.setError(404, `Cannot find account with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found account', objAccount);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

accountsCtrl.addAccount = async (req, res) => {
    try {
        const objAccount = await accountService.addAccount(req.body);
        util.setSuccess(201, 'Account Added!', objAccount);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

accountsCtrl.updateAccount = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAccount = await accountService.updateAccount(id, req.body);
        if (!objAccount) {
            util.setError(404, `Cannot find account with the id: ${id}`);
        } else {
            util.setSuccess(200, 'Account updated', objAccount);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

accountsCtrl.deleteAccount = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objAccount = await accountService.deleteAccount(id);
        if (objAccount) {
            util.setSuccess(200, 'Account deleted', objAccount);
        } else {
            util.setError(404, `Account with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



accountsCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objAccount = await accountService.findOneById(id, req.query);
        if (!objAccount) {
            util.setError(404, `Cannot find account with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found account', objAccount);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

accountsCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objAccount = await accountService.findOneByDeleted(deleted, req.query);
        if (!objAccount) {
            util.setError(404, `Cannot find account with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found account', objAccount);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

accountsCtrl.findOneByName = async (req, res) => {
    try {
        const { name } = req.params;
        const objAccount = await accountService.findOneByName(name, req.query);
        if (!objAccount) {
            util.setError(404, `Cannot find account with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found account', objAccount);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

accountsCtrl.findOneByAccountType = async (req, res) => {
    try {
        const { accountType } = req.params;
        const objAccount = await accountService.findOneByAccountType(accountType, req.query);
        if (!objAccount) {
            util.setError(404, `Cannot find account with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found account', objAccount);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

accountsCtrl.findOneByIndustry = async (req, res) => {
    try {
        const { industry } = req.params;
        const objAccount = await accountService.findOneByIndustry(industry, req.query);
        if (!objAccount) {
            util.setError(404, `Cannot find account with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found account', objAccount);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

accountsCtrl.findOneByAnnualRevenue = async (req, res) => {
    try {
        const { annualRevenue } = req.params;
        const objAccount = await accountService.findOneByAnnualRevenue(annualRevenue, req.query);
        if (!objAccount) {
            util.setError(404, `Cannot find account with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found account', objAccount);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

accountsCtrl.findOneByPhoneFax = async (req, res) => {
    try {
        const { phoneFax } = req.params;
        const objAccount = await accountService.findOneByPhoneFax(phoneFax, req.query);
        if (!objAccount) {
            util.setError(404, `Cannot find account with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found account', objAccount);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

accountsCtrl.findOneByBillingAddressStreet = async (req, res) => {
    try {
        const { billingAddressStreet } = req.params;
        const objAccount = await accountService.findOneByBillingAddressStreet(billingAddressStreet, req.query);
        if (!objAccount) {
            util.setError(404, `Cannot find account with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found account', objAccount);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

accountsCtrl.findOneByBillingAddressCity = async (req, res) => {
    try {
        const { billingAddressCity } = req.params;
        const objAccount = await accountService.findOneByBillingAddressCity(billingAddressCity, req.query);
        if (!objAccount) {
            util.setError(404, `Cannot find account with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found account', objAccount);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

accountsCtrl.findOneByBillingAddressState = async (req, res) => {
    try {
        const { billingAddressState } = req.params;
        const objAccount = await accountService.findOneByBillingAddressState(billingAddressState, req.query);
        if (!objAccount) {
            util.setError(404, `Cannot find account with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found account', objAccount);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

accountsCtrl.findOneByBillingAddressPostalcode = async (req, res) => {
    try {
        const { billingAddressPostalcode } = req.params;
        const objAccount = await accountService.findOneByBillingAddressPostalcode(billingAddressPostalcode, req.query);
        if (!objAccount) {
            util.setError(404, `Cannot find account with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found account', objAccount);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

accountsCtrl.findOneByBillingAddressCountry = async (req, res) => {
    try {
        const { billingAddressCountry } = req.params;
        const objAccount = await accountService.findOneByBillingAddressCountry(billingAddressCountry, req.query);
        if (!objAccount) {
            util.setError(404, `Cannot find account with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found account', objAccount);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

accountsCtrl.findOneByRating = async (req, res) => {
    try {
        const { rating } = req.params;
        const objAccount = await accountService.findOneByRating(rating, req.query);
        if (!objAccount) {
            util.setError(404, `Cannot find account with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found account', objAccount);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

accountsCtrl.findOneByPhoneOffice = async (req, res) => {
    try {
        const { phoneOffice } = req.params;
        const objAccount = await accountService.findOneByPhoneOffice(phoneOffice, req.query);
        if (!objAccount) {
            util.setError(404, `Cannot find account with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found account', objAccount);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

accountsCtrl.findOneByPhoneAlternate = async (req, res) => {
    try {
        const { phoneAlternate } = req.params;
        const objAccount = await accountService.findOneByPhoneAlternate(phoneAlternate, req.query);
        if (!objAccount) {
            util.setError(404, `Cannot find account with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found account', objAccount);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

accountsCtrl.findOneByWebsite = async (req, res) => {
    try {
        const { website } = req.params;
        const objAccount = await accountService.findOneByWebsite(website, req.query);
        if (!objAccount) {
            util.setError(404, `Cannot find account with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found account', objAccount);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

accountsCtrl.findOneByOwnership = async (req, res) => {
    try {
        const { ownership } = req.params;
        const objAccount = await accountService.findOneByOwnership(ownership, req.query);
        if (!objAccount) {
            util.setError(404, `Cannot find account with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found account', objAccount);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

accountsCtrl.findOneByEmployees = async (req, res) => {
    try {
        const { employees } = req.params;
        const objAccount = await accountService.findOneByEmployees(employees, req.query);
        if (!objAccount) {
            util.setError(404, `Cannot find account with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found account', objAccount);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

accountsCtrl.findOneByTickerSymbol = async (req, res) => {
    try {
        const { tickerSymbol } = req.params;
        const objAccount = await accountService.findOneByTickerSymbol(tickerSymbol, req.query);
        if (!objAccount) {
            util.setError(404, `Cannot find account with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found account', objAccount);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

accountsCtrl.findOneByShippingAddressStreet = async (req, res) => {
    try {
        const { shippingAddressStreet } = req.params;
        const objAccount = await accountService.findOneByShippingAddressStreet(shippingAddressStreet, req.query);
        if (!objAccount) {
            util.setError(404, `Cannot find account with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found account', objAccount);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

accountsCtrl.findOneByShippingAddressCity = async (req, res) => {
    try {
        const { shippingAddressCity } = req.params;
        const objAccount = await accountService.findOneByShippingAddressCity(shippingAddressCity, req.query);
        if (!objAccount) {
            util.setError(404, `Cannot find account with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found account', objAccount);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

accountsCtrl.findOneByShippingAddressState = async (req, res) => {
    try {
        const { shippingAddressState } = req.params;
        const objAccount = await accountService.findOneByShippingAddressState(shippingAddressState, req.query);
        if (!objAccount) {
            util.setError(404, `Cannot find account with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found account', objAccount);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

accountsCtrl.findOneByShippingAddressPostalcode = async (req, res) => {
    try {
        const { shippingAddressPostalcode } = req.params;
        const objAccount = await accountService.findOneByShippingAddressPostalcode(shippingAddressPostalcode, req.query);
        if (!objAccount) {
            util.setError(404, `Cannot find account with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found account', objAccount);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

accountsCtrl.findOneByShippingAddressCountry = async (req, res) => {
    try {
        const { shippingAddressCountry } = req.params;
        const objAccount = await accountService.findOneByShippingAddressCountry(shippingAddressCountry, req.query);
        if (!objAccount) {
            util.setError(404, `Cannot find account with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found account', objAccount);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

accountsCtrl.findOneBySicCode = async (req, res) => {
    try {
        const { sicCode } = req.params;
        const objAccount = await accountService.findOneBySicCode(sicCode, req.query);
        if (!objAccount) {
            util.setError(404, `Cannot find account with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found account', objAccount);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

accountsCtrl.findOneByDescription = async (req, res) => {
    try {
        const { description } = req.params;
        const objAccount = await accountService.findOneByDescription(description, req.query);
        if (!objAccount) {
            util.setError(404, `Cannot find account with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found account', objAccount);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

accountsCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objAccount = await accountService.findOneByDateEntered(dateEntered, req.query);
        if (!objAccount) {
            util.setError(404, `Cannot find account with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found account', objAccount);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

accountsCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objAccount = await accountService.findOneByDateModified(dateModified, req.query);
        if (!objAccount) {
            util.setError(404, `Cannot find account with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found account', objAccount);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

accountsCtrl.findOneByModifiedUserId = async (req, res) => {
    try {
        const { modifiedUserId } = req.params;
        const objAccount = await accountService.findOneByModifiedUserId(modifiedUserId, req.query);
        if (!objAccount) {
            util.setError(404, `Cannot find account with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found account', objAccount);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

accountsCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objAccount = await accountService.findOneByCreatedBy(createdBy, req.query);
        if (!objAccount) {
            util.setError(404, `Cannot find account with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found account', objAccount);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

accountsCtrl.findOneByAssignedUserId = async (req, res) => {
    try {
        const { assignedUserId } = req.params;
        const objAccount = await accountService.findOneByAssignedUserId(assignedUserId, req.query);
        if (!objAccount) {
            util.setError(404, `Cannot find account with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found account', objAccount);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

accountsCtrl.findOneByParentId = async (req, res) => {
    try {
        const { parentId } = req.params;
        const objAccount = await accountService.findOneByParentId(parentId, req.query);
        if (!objAccount) {
            util.setError(404, `Cannot find account with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found account', objAccount);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

accountsCtrl.findOneByCampaignId = async (req, res) => {
    try {
        const { campaignId } = req.params;
        const objAccount = await accountService.findOneByCampaignId(campaignId, req.query);
        if (!objAccount) {
            util.setError(404, `Cannot find account with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found account', objAccount);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



accountsCtrl.updateAccountById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAccount = await accountService.updateAccountById(id, req.body);
            if (!objAccount) {
                util.setError(404, `Cannot find account with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Account updated', objAccount);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

accountsCtrl.updateAccountByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAccount = await accountService.updateAccountByDeleted(deleted, req.body);
            if (!objAccount) {
                util.setError(404, `Cannot find account with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Account updated', objAccount);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

accountsCtrl.updateAccountByName = async (req, res) => {
     const { name } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAccount = await accountService.updateAccountByName(name, req.body);
            if (!objAccount) {
                util.setError(404, `Cannot find account with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Account updated', objAccount);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

accountsCtrl.updateAccountByAccountType = async (req, res) => {
     const { accountType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAccount = await accountService.updateAccountByAccountType(accountType, req.body);
            if (!objAccount) {
                util.setError(404, `Cannot find account with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Account updated', objAccount);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

accountsCtrl.updateAccountByIndustry = async (req, res) => {
     const { industry } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAccount = await accountService.updateAccountByIndustry(industry, req.body);
            if (!objAccount) {
                util.setError(404, `Cannot find account with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Account updated', objAccount);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

accountsCtrl.updateAccountByAnnualRevenue = async (req, res) => {
     const { annualRevenue } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAccount = await accountService.updateAccountByAnnualRevenue(annualRevenue, req.body);
            if (!objAccount) {
                util.setError(404, `Cannot find account with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Account updated', objAccount);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

accountsCtrl.updateAccountByPhoneFax = async (req, res) => {
     const { phoneFax } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAccount = await accountService.updateAccountByPhoneFax(phoneFax, req.body);
            if (!objAccount) {
                util.setError(404, `Cannot find account with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Account updated', objAccount);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

accountsCtrl.updateAccountByBillingAddressStreet = async (req, res) => {
     const { billingAddressStreet } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAccount = await accountService.updateAccountByBillingAddressStreet(billingAddressStreet, req.body);
            if (!objAccount) {
                util.setError(404, `Cannot find account with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Account updated', objAccount);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

accountsCtrl.updateAccountByBillingAddressCity = async (req, res) => {
     const { billingAddressCity } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAccount = await accountService.updateAccountByBillingAddressCity(billingAddressCity, req.body);
            if (!objAccount) {
                util.setError(404, `Cannot find account with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Account updated', objAccount);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

accountsCtrl.updateAccountByBillingAddressState = async (req, res) => {
     const { billingAddressState } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAccount = await accountService.updateAccountByBillingAddressState(billingAddressState, req.body);
            if (!objAccount) {
                util.setError(404, `Cannot find account with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Account updated', objAccount);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

accountsCtrl.updateAccountByBillingAddressPostalcode = async (req, res) => {
     const { billingAddressPostalcode } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAccount = await accountService.updateAccountByBillingAddressPostalcode(billingAddressPostalcode, req.body);
            if (!objAccount) {
                util.setError(404, `Cannot find account with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Account updated', objAccount);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

accountsCtrl.updateAccountByBillingAddressCountry = async (req, res) => {
     const { billingAddressCountry } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAccount = await accountService.updateAccountByBillingAddressCountry(billingAddressCountry, req.body);
            if (!objAccount) {
                util.setError(404, `Cannot find account with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Account updated', objAccount);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

accountsCtrl.updateAccountByRating = async (req, res) => {
     const { rating } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAccount = await accountService.updateAccountByRating(rating, req.body);
            if (!objAccount) {
                util.setError(404, `Cannot find account with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Account updated', objAccount);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

accountsCtrl.updateAccountByPhoneOffice = async (req, res) => {
     const { phoneOffice } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAccount = await accountService.updateAccountByPhoneOffice(phoneOffice, req.body);
            if (!objAccount) {
                util.setError(404, `Cannot find account with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Account updated', objAccount);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

accountsCtrl.updateAccountByPhoneAlternate = async (req, res) => {
     const { phoneAlternate } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAccount = await accountService.updateAccountByPhoneAlternate(phoneAlternate, req.body);
            if (!objAccount) {
                util.setError(404, `Cannot find account with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Account updated', objAccount);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

accountsCtrl.updateAccountByWebsite = async (req, res) => {
     const { website } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAccount = await accountService.updateAccountByWebsite(website, req.body);
            if (!objAccount) {
                util.setError(404, `Cannot find account with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Account updated', objAccount);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

accountsCtrl.updateAccountByOwnership = async (req, res) => {
     const { ownership } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAccount = await accountService.updateAccountByOwnership(ownership, req.body);
            if (!objAccount) {
                util.setError(404, `Cannot find account with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Account updated', objAccount);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

accountsCtrl.updateAccountByEmployees = async (req, res) => {
     const { employees } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAccount = await accountService.updateAccountByEmployees(employees, req.body);
            if (!objAccount) {
                util.setError(404, `Cannot find account with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Account updated', objAccount);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

accountsCtrl.updateAccountByTickerSymbol = async (req, res) => {
     const { tickerSymbol } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAccount = await accountService.updateAccountByTickerSymbol(tickerSymbol, req.body);
            if (!objAccount) {
                util.setError(404, `Cannot find account with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Account updated', objAccount);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

accountsCtrl.updateAccountByShippingAddressStreet = async (req, res) => {
     const { shippingAddressStreet } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAccount = await accountService.updateAccountByShippingAddressStreet(shippingAddressStreet, req.body);
            if (!objAccount) {
                util.setError(404, `Cannot find account with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Account updated', objAccount);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

accountsCtrl.updateAccountByShippingAddressCity = async (req, res) => {
     const { shippingAddressCity } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAccount = await accountService.updateAccountByShippingAddressCity(shippingAddressCity, req.body);
            if (!objAccount) {
                util.setError(404, `Cannot find account with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Account updated', objAccount);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

accountsCtrl.updateAccountByShippingAddressState = async (req, res) => {
     const { shippingAddressState } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAccount = await accountService.updateAccountByShippingAddressState(shippingAddressState, req.body);
            if (!objAccount) {
                util.setError(404, `Cannot find account with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Account updated', objAccount);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

accountsCtrl.updateAccountByShippingAddressPostalcode = async (req, res) => {
     const { shippingAddressPostalcode } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAccount = await accountService.updateAccountByShippingAddressPostalcode(shippingAddressPostalcode, req.body);
            if (!objAccount) {
                util.setError(404, `Cannot find account with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Account updated', objAccount);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

accountsCtrl.updateAccountByShippingAddressCountry = async (req, res) => {
     const { shippingAddressCountry } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAccount = await accountService.updateAccountByShippingAddressCountry(shippingAddressCountry, req.body);
            if (!objAccount) {
                util.setError(404, `Cannot find account with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Account updated', objAccount);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

accountsCtrl.updateAccountBySicCode = async (req, res) => {
     const { sicCode } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAccount = await accountService.updateAccountBySicCode(sicCode, req.body);
            if (!objAccount) {
                util.setError(404, `Cannot find account with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Account updated', objAccount);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

accountsCtrl.updateAccountByDescription = async (req, res) => {
     const { description } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAccount = await accountService.updateAccountByDescription(description, req.body);
            if (!objAccount) {
                util.setError(404, `Cannot find account with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Account updated', objAccount);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

accountsCtrl.updateAccountByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAccount = await accountService.updateAccountByDateEntered(dateEntered, req.body);
            if (!objAccount) {
                util.setError(404, `Cannot find account with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Account updated', objAccount);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

accountsCtrl.updateAccountByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAccount = await accountService.updateAccountByDateModified(dateModified, req.body);
            if (!objAccount) {
                util.setError(404, `Cannot find account with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Account updated', objAccount);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

accountsCtrl.updateAccountByModifiedUserId = async (req, res) => {
     const { modifiedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAccount = await accountService.updateAccountByModifiedUserId(modifiedUserId, req.body);
            if (!objAccount) {
                util.setError(404, `Cannot find account with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Account updated', objAccount);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

accountsCtrl.updateAccountByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAccount = await accountService.updateAccountByCreatedBy(createdBy, req.body);
            if (!objAccount) {
                util.setError(404, `Cannot find account with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Account updated', objAccount);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

accountsCtrl.updateAccountByAssignedUserId = async (req, res) => {
     const { assignedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAccount = await accountService.updateAccountByAssignedUserId(assignedUserId, req.body);
            if (!objAccount) {
                util.setError(404, `Cannot find account with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Account updated', objAccount);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

accountsCtrl.updateAccountByParentId = async (req, res) => {
     const { parentId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAccount = await accountService.updateAccountByParentId(parentId, req.body);
            if (!objAccount) {
                util.setError(404, `Cannot find account with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Account updated', objAccount);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

accountsCtrl.updateAccountByCampaignId = async (req, res) => {
     const { campaignId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAccount = await accountService.updateAccountByCampaignId(campaignId, req.body);
            if (!objAccount) {
                util.setError(404, `Cannot find account with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Account updated', objAccount);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = accountsCtrl;
//</es-section>
