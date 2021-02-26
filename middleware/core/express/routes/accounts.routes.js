/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:21:48 GMT-0400 (Bolivia Time)
 * Time: 0:21:48
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:21:48 GMT-0400 (Bolivia Time)
 * Last time updated: 0:21:48
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const accountsCtrl = require("../controllers/accounts.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/accounts/findOneById/:id`, (req, res) => accountsCtrl.findOneById(req, res));

router.get(`/api-${sys}/accounts/findOneByDeleted/:deleted`, (req, res) => accountsCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/accounts/findOneByName/:name`, (req, res) => accountsCtrl.findOneByName(req, res));

router.get(`/api-${sys}/accounts/findOneByAccountType/:accountType`, (req, res) => accountsCtrl.findOneByAccountType(req, res));

router.get(`/api-${sys}/accounts/findOneByIndustry/:industry`, (req, res) => accountsCtrl.findOneByIndustry(req, res));

router.get(`/api-${sys}/accounts/findOneByAnnualRevenue/:annualRevenue`, (req, res) => accountsCtrl.findOneByAnnualRevenue(req, res));

router.get(`/api-${sys}/accounts/findOneByPhoneFax/:phoneFax`, (req, res) => accountsCtrl.findOneByPhoneFax(req, res));

router.get(`/api-${sys}/accounts/findOneByBillingAddressStreet/:billingAddressStreet`, (req, res) => accountsCtrl.findOneByBillingAddressStreet(req, res));

router.get(`/api-${sys}/accounts/findOneByBillingAddressCity/:billingAddressCity`, (req, res) => accountsCtrl.findOneByBillingAddressCity(req, res));

router.get(`/api-${sys}/accounts/findOneByBillingAddressState/:billingAddressState`, (req, res) => accountsCtrl.findOneByBillingAddressState(req, res));

router.get(`/api-${sys}/accounts/findOneByBillingAddressPostalcode/:billingAddressPostalcode`, (req, res) => accountsCtrl.findOneByBillingAddressPostalcode(req, res));

router.get(`/api-${sys}/accounts/findOneByBillingAddressCountry/:billingAddressCountry`, (req, res) => accountsCtrl.findOneByBillingAddressCountry(req, res));

router.get(`/api-${sys}/accounts/findOneByRating/:rating`, (req, res) => accountsCtrl.findOneByRating(req, res));

router.get(`/api-${sys}/accounts/findOneByPhoneOffice/:phoneOffice`, (req, res) => accountsCtrl.findOneByPhoneOffice(req, res));

router.get(`/api-${sys}/accounts/findOneByPhoneAlternate/:phoneAlternate`, (req, res) => accountsCtrl.findOneByPhoneAlternate(req, res));

router.get(`/api-${sys}/accounts/findOneByWebsite/:website`, (req, res) => accountsCtrl.findOneByWebsite(req, res));

router.get(`/api-${sys}/accounts/findOneByOwnership/:ownership`, (req, res) => accountsCtrl.findOneByOwnership(req, res));

router.get(`/api-${sys}/accounts/findOneByEmployees/:employees`, (req, res) => accountsCtrl.findOneByEmployees(req, res));

router.get(`/api-${sys}/accounts/findOneByTickerSymbol/:tickerSymbol`, (req, res) => accountsCtrl.findOneByTickerSymbol(req, res));

router.get(`/api-${sys}/accounts/findOneByShippingAddressStreet/:shippingAddressStreet`, (req, res) => accountsCtrl.findOneByShippingAddressStreet(req, res));

router.get(`/api-${sys}/accounts/findOneByShippingAddressCity/:shippingAddressCity`, (req, res) => accountsCtrl.findOneByShippingAddressCity(req, res));

router.get(`/api-${sys}/accounts/findOneByShippingAddressState/:shippingAddressState`, (req, res) => accountsCtrl.findOneByShippingAddressState(req, res));

router.get(`/api-${sys}/accounts/findOneByShippingAddressPostalcode/:shippingAddressPostalcode`, (req, res) => accountsCtrl.findOneByShippingAddressPostalcode(req, res));

router.get(`/api-${sys}/accounts/findOneByShippingAddressCountry/:shippingAddressCountry`, (req, res) => accountsCtrl.findOneByShippingAddressCountry(req, res));

router.get(`/api-${sys}/accounts/findOneBySicCode/:sicCode`, (req, res) => accountsCtrl.findOneBySicCode(req, res));

router.get(`/api-${sys}/accounts/findOneByDescription/:description`, (req, res) => accountsCtrl.findOneByDescription(req, res));

router.get(`/api-${sys}/accounts/findOneByDateEntered/:dateEntered`, (req, res) => accountsCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/accounts/findOneByDateModified/:dateModified`, (req, res) => accountsCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/accounts/findOneByModifiedUserId/:modifiedUserId`, (req, res) => accountsCtrl.findOneByModifiedUserId(req, res));

router.get(`/api-${sys}/accounts/findOneByCreatedBy/:createdBy`, (req, res) => accountsCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/accounts/findOneByAssignedUserId/:assignedUserId`, (req, res) => accountsCtrl.findOneByAssignedUserId(req, res));

router.get(`/api-${sys}/accounts/findOneByParentId/:parentId`, (req, res) => accountsCtrl.findOneByParentId(req, res));

router.get(`/api-${sys}/accounts/findOneByCampaignId/:campaignId`, (req, res) => accountsCtrl.findOneByCampaignId(req, res));



router.post(`/api-${sys}/accounts/updateAccountById`, (req, res) => accountsCtrl.updateAccountById(req, res));

router.post(`/api-${sys}/accounts/updateAccountByDeleted`, (req, res) => accountsCtrl.updateAccountByDeleted(req, res));

router.post(`/api-${sys}/accounts/updateAccountByName`, (req, res) => accountsCtrl.updateAccountByName(req, res));

router.post(`/api-${sys}/accounts/updateAccountByAccountType`, (req, res) => accountsCtrl.updateAccountByAccountType(req, res));

router.post(`/api-${sys}/accounts/updateAccountByIndustry`, (req, res) => accountsCtrl.updateAccountByIndustry(req, res));

router.post(`/api-${sys}/accounts/updateAccountByAnnualRevenue`, (req, res) => accountsCtrl.updateAccountByAnnualRevenue(req, res));

router.post(`/api-${sys}/accounts/updateAccountByPhoneFax`, (req, res) => accountsCtrl.updateAccountByPhoneFax(req, res));

router.post(`/api-${sys}/accounts/updateAccountByBillingAddressStreet`, (req, res) => accountsCtrl.updateAccountByBillingAddressStreet(req, res));

router.post(`/api-${sys}/accounts/updateAccountByBillingAddressCity`, (req, res) => accountsCtrl.updateAccountByBillingAddressCity(req, res));

router.post(`/api-${sys}/accounts/updateAccountByBillingAddressState`, (req, res) => accountsCtrl.updateAccountByBillingAddressState(req, res));

router.post(`/api-${sys}/accounts/updateAccountByBillingAddressPostalcode`, (req, res) => accountsCtrl.updateAccountByBillingAddressPostalcode(req, res));

router.post(`/api-${sys}/accounts/updateAccountByBillingAddressCountry`, (req, res) => accountsCtrl.updateAccountByBillingAddressCountry(req, res));

router.post(`/api-${sys}/accounts/updateAccountByRating`, (req, res) => accountsCtrl.updateAccountByRating(req, res));

router.post(`/api-${sys}/accounts/updateAccountByPhoneOffice`, (req, res) => accountsCtrl.updateAccountByPhoneOffice(req, res));

router.post(`/api-${sys}/accounts/updateAccountByPhoneAlternate`, (req, res) => accountsCtrl.updateAccountByPhoneAlternate(req, res));

router.post(`/api-${sys}/accounts/updateAccountByWebsite`, (req, res) => accountsCtrl.updateAccountByWebsite(req, res));

router.post(`/api-${sys}/accounts/updateAccountByOwnership`, (req, res) => accountsCtrl.updateAccountByOwnership(req, res));

router.post(`/api-${sys}/accounts/updateAccountByEmployees`, (req, res) => accountsCtrl.updateAccountByEmployees(req, res));

router.post(`/api-${sys}/accounts/updateAccountByTickerSymbol`, (req, res) => accountsCtrl.updateAccountByTickerSymbol(req, res));

router.post(`/api-${sys}/accounts/updateAccountByShippingAddressStreet`, (req, res) => accountsCtrl.updateAccountByShippingAddressStreet(req, res));

router.post(`/api-${sys}/accounts/updateAccountByShippingAddressCity`, (req, res) => accountsCtrl.updateAccountByShippingAddressCity(req, res));

router.post(`/api-${sys}/accounts/updateAccountByShippingAddressState`, (req, res) => accountsCtrl.updateAccountByShippingAddressState(req, res));

router.post(`/api-${sys}/accounts/updateAccountByShippingAddressPostalcode`, (req, res) => accountsCtrl.updateAccountByShippingAddressPostalcode(req, res));

router.post(`/api-${sys}/accounts/updateAccountByShippingAddressCountry`, (req, res) => accountsCtrl.updateAccountByShippingAddressCountry(req, res));

router.post(`/api-${sys}/accounts/updateAccountBySicCode`, (req, res) => accountsCtrl.updateAccountBySicCode(req, res));

router.post(`/api-${sys}/accounts/updateAccountByDescription`, (req, res) => accountsCtrl.updateAccountByDescription(req, res));

router.post(`/api-${sys}/accounts/updateAccountByDateEntered`, (req, res) => accountsCtrl.updateAccountByDateEntered(req, res));

router.post(`/api-${sys}/accounts/updateAccountByDateModified`, (req, res) => accountsCtrl.updateAccountByDateModified(req, res));

router.post(`/api-${sys}/accounts/updateAccountByModifiedUserId`, (req, res) => accountsCtrl.updateAccountByModifiedUserId(req, res));

router.post(`/api-${sys}/accounts/updateAccountByCreatedBy`, (req, res) => accountsCtrl.updateAccountByCreatedBy(req, res));

router.post(`/api-${sys}/accounts/updateAccountByAssignedUserId`, (req, res) => accountsCtrl.updateAccountByAssignedUserId(req, res));

router.post(`/api-${sys}/accounts/updateAccountByParentId`, (req, res) => accountsCtrl.updateAccountByParentId(req, res));

router.post(`/api-${sys}/accounts/updateAccountByCampaignId`, (req, res) => accountsCtrl.updateAccountByCampaignId(req, res));





router.get(`/api-${sys}/accounts/`, (req, res) => accountsCtrl.getAllAccounts(req, res));
router.post(`/api-${sys}/accounts/`, (req, res) => accountsCtrl.addAccount(req, res));
router.get(`/api-${sys}/accounts/:id`, (req, res) => accountsCtrl.getAAccount(req, res));
router.put(`/api-${sys}/accounts/:id`, (req, res) => accountsCtrl.updateAccount(req, res));
router.delete(`/api-${sys}/accounts/:id`, (req, res) => accountsCtrl.deleteAccount(req, res));

//</es-section>
module.exports = router;
