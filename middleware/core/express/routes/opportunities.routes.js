/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:20 GMT-0400 (Bolivia Time)
 * Time: 14:57:20
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:20 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:20
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const opportunitiesCtrl = require("../controllers/opportunities.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/opportunities/findOneById/:id`, (req, res) => opportunitiesCtrl.findOneById(req, res));

router.get(`/api-${sys}/opportunities/findOneByDeleted/:deleted`, (req, res) => opportunitiesCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/opportunities/findOneByAmount/:amount`, (req, res) => opportunitiesCtrl.findOneByAmount(req, res));

router.get(`/api-${sys}/opportunities/findOneByAmountUsdollar/:amountUsdollar`, (req, res) => opportunitiesCtrl.findOneByAmountUsdollar(req, res));

router.get(`/api-${sys}/opportunities/findOneByProbability/:probability`, (req, res) => opportunitiesCtrl.findOneByProbability(req, res));

router.get(`/api-${sys}/opportunities/findOneByName/:name`, (req, res) => opportunitiesCtrl.findOneByName(req, res));

router.get(`/api-${sys}/opportunities/findOneByOpportunityType/:opportunityType`, (req, res) => opportunitiesCtrl.findOneByOpportunityType(req, res));

router.get(`/api-${sys}/opportunities/findOneByLeadSource/:leadSource`, (req, res) => opportunitiesCtrl.findOneByLeadSource(req, res));

router.get(`/api-${sys}/opportunities/findOneByNextStep/:nextStep`, (req, res) => opportunitiesCtrl.findOneByNextStep(req, res));

router.get(`/api-${sys}/opportunities/findOneBySalesStage/:salesStage`, (req, res) => opportunitiesCtrl.findOneBySalesStage(req, res));

router.get(`/api-${sys}/opportunities/findOneByDescription/:description`, (req, res) => opportunitiesCtrl.findOneByDescription(req, res));

router.get(`/api-${sys}/opportunities/findOneByDateEntered/:dateEntered`, (req, res) => opportunitiesCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/opportunities/findOneByDateModified/:dateModified`, (req, res) => opportunitiesCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/opportunities/findOneByDateClosed/:dateClosed`, (req, res) => opportunitiesCtrl.findOneByDateClosed(req, res));

router.get(`/api-${sys}/opportunities/findOneByModifiedUserId/:modifiedUserId`, (req, res) => opportunitiesCtrl.findOneByModifiedUserId(req, res));

router.get(`/api-${sys}/opportunities/findOneByCreatedBy/:createdBy`, (req, res) => opportunitiesCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/opportunities/findOneByAssignedUserId/:assignedUserId`, (req, res) => opportunitiesCtrl.findOneByAssignedUserId(req, res));

router.get(`/api-${sys}/opportunities/findOneByCampaignId/:campaignId`, (req, res) => opportunitiesCtrl.findOneByCampaignId(req, res));

router.get(`/api-${sys}/opportunities/findOneByCurrencyId/:currencyId`, (req, res) => opportunitiesCtrl.findOneByCurrencyId(req, res));



router.post(`/api-${sys}/opportunities/updateOpportunityById`, (req, res) => opportunitiesCtrl.updateOpportunityById(req, res));

router.post(`/api-${sys}/opportunities/updateOpportunityByDeleted`, (req, res) => opportunitiesCtrl.updateOpportunityByDeleted(req, res));

router.post(`/api-${sys}/opportunities/updateOpportunityByAmount`, (req, res) => opportunitiesCtrl.updateOpportunityByAmount(req, res));

router.post(`/api-${sys}/opportunities/updateOpportunityByAmountUsdollar`, (req, res) => opportunitiesCtrl.updateOpportunityByAmountUsdollar(req, res));

router.post(`/api-${sys}/opportunities/updateOpportunityByProbability`, (req, res) => opportunitiesCtrl.updateOpportunityByProbability(req, res));

router.post(`/api-${sys}/opportunities/updateOpportunityByName`, (req, res) => opportunitiesCtrl.updateOpportunityByName(req, res));

router.post(`/api-${sys}/opportunities/updateOpportunityByOpportunityType`, (req, res) => opportunitiesCtrl.updateOpportunityByOpportunityType(req, res));

router.post(`/api-${sys}/opportunities/updateOpportunityByLeadSource`, (req, res) => opportunitiesCtrl.updateOpportunityByLeadSource(req, res));

router.post(`/api-${sys}/opportunities/updateOpportunityByNextStep`, (req, res) => opportunitiesCtrl.updateOpportunityByNextStep(req, res));

router.post(`/api-${sys}/opportunities/updateOpportunityBySalesStage`, (req, res) => opportunitiesCtrl.updateOpportunityBySalesStage(req, res));

router.post(`/api-${sys}/opportunities/updateOpportunityByDescription`, (req, res) => opportunitiesCtrl.updateOpportunityByDescription(req, res));

router.post(`/api-${sys}/opportunities/updateOpportunityByDateEntered`, (req, res) => opportunitiesCtrl.updateOpportunityByDateEntered(req, res));

router.post(`/api-${sys}/opportunities/updateOpportunityByDateModified`, (req, res) => opportunitiesCtrl.updateOpportunityByDateModified(req, res));

router.post(`/api-${sys}/opportunities/updateOpportunityByDateClosed`, (req, res) => opportunitiesCtrl.updateOpportunityByDateClosed(req, res));

router.post(`/api-${sys}/opportunities/updateOpportunityByModifiedUserId`, (req, res) => opportunitiesCtrl.updateOpportunityByModifiedUserId(req, res));

router.post(`/api-${sys}/opportunities/updateOpportunityByCreatedBy`, (req, res) => opportunitiesCtrl.updateOpportunityByCreatedBy(req, res));

router.post(`/api-${sys}/opportunities/updateOpportunityByAssignedUserId`, (req, res) => opportunitiesCtrl.updateOpportunityByAssignedUserId(req, res));

router.post(`/api-${sys}/opportunities/updateOpportunityByCampaignId`, (req, res) => opportunitiesCtrl.updateOpportunityByCampaignId(req, res));

router.post(`/api-${sys}/opportunities/updateOpportunityByCurrencyId`, (req, res) => opportunitiesCtrl.updateOpportunityByCurrencyId(req, res));





router.get(`/api-${sys}/opportunities/`, (req, res) => opportunitiesCtrl.getAllOpportunities(req, res));
router.post(`/api-${sys}/opportunities/`, (req, res) => opportunitiesCtrl.addOpportunity(req, res));
router.get(`/api-${sys}/opportunities/:id`, (req, res) => opportunitiesCtrl.getAOpportunity(req, res));
router.put(`/api-${sys}/opportunities/:id`, (req, res) => opportunitiesCtrl.updateOpportunity(req, res));
router.delete(`/api-${sys}/opportunities/:id`, (req, res) => opportunitiesCtrl.deleteOpportunity(req, res));

//</es-section>
module.exports = router;
