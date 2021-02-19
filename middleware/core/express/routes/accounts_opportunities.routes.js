/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:35:23 GMT-0400 (Bolivia Time)
 * Time: 18:35:23
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:35:23 GMT-0400 (Bolivia Time)
 * Last time updated: 18:35:23
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const accountsOpportunitiesCtrl = require("../controllers/accounts_opportunities.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/accounts-opportunities/findOneById/:id`, (req, res) => accountsOpportunitiesCtrl.findOneById(req, res));

router.get(`/api-${sys}/accounts-opportunities/findOneByDeleted/:deleted`, (req, res) => accountsOpportunitiesCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/accounts-opportunities/findOneByOpportunityId/:opportunityId`, (req, res) => accountsOpportunitiesCtrl.findOneByOpportunityId(req, res));

router.get(`/api-${sys}/accounts-opportunities/findOneByAccountId/:accountId`, (req, res) => accountsOpportunitiesCtrl.findOneByAccountId(req, res));

router.get(`/api-${sys}/accounts-opportunities/findOneByDateModified/:dateModified`, (req, res) => accountsOpportunitiesCtrl.findOneByDateModified(req, res));



router.post(`/api-${sys}/accounts-opportunities/updateAccountOpportunityById`, (req, res) => accountsOpportunitiesCtrl.updateAccountOpportunityById(req, res));

router.post(`/api-${sys}/accounts-opportunities/updateAccountOpportunityByDeleted`, (req, res) => accountsOpportunitiesCtrl.updateAccountOpportunityByDeleted(req, res));

router.post(`/api-${sys}/accounts-opportunities/updateAccountOpportunityByOpportunityId`, (req, res) => accountsOpportunitiesCtrl.updateAccountOpportunityByOpportunityId(req, res));

router.post(`/api-${sys}/accounts-opportunities/updateAccountOpportunityByAccountId`, (req, res) => accountsOpportunitiesCtrl.updateAccountOpportunityByAccountId(req, res));

router.post(`/api-${sys}/accounts-opportunities/updateAccountOpportunityByDateModified`, (req, res) => accountsOpportunitiesCtrl.updateAccountOpportunityByDateModified(req, res));





router.get(`/api-${sys}/accounts-opportunities/`, (req, res) => accountsOpportunitiesCtrl.getAllAccountsOpportunities(req, res));
router.post(`/api-${sys}/accounts-opportunities/`, (req, res) => accountsOpportunitiesCtrl.addAccountOpportunity(req, res));
router.get(`/api-${sys}/accounts-opportunities/:id`, (req, res) => accountsOpportunitiesCtrl.getAAccountOpportunity(req, res));
router.put(`/api-${sys}/accounts-opportunities/:id`, (req, res) => accountsOpportunitiesCtrl.updateAccountOpportunity(req, res));
router.delete(`/api-${sys}/accounts-opportunities/:id`, (req, res) => accountsOpportunitiesCtrl.deleteAccountOpportunity(req, res));

//</es-section>
module.exports = router;
