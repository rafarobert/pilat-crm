/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:36:36 GMT-0400 (Bolivia Time)
 * Time: 18:36:36
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:36:36 GMT-0400 (Bolivia Time)
 * Last time updated: 18:36:36
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const campaignsCtrl = require("../controllers/campaigns.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/campaigns/findOneById/:id`, (req, res) => campaignsCtrl.findOneById(req, res));

router.get(`/api-${sys}/campaigns/findOneByDeleted/:deleted`, (req, res) => campaignsCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/campaigns/findOneByTrackerKey/:trackerKey`, (req, res) => campaignsCtrl.findOneByTrackerKey(req, res));

router.get(`/api-${sys}/campaigns/findOneByTrackerCount/:trackerCount`, (req, res) => campaignsCtrl.findOneByTrackerCount(req, res));

router.get(`/api-${sys}/campaigns/findOneByImpressions/:impressions`, (req, res) => campaignsCtrl.findOneByImpressions(req, res));

router.get(`/api-${sys}/campaigns/findOneByBudget/:budget`, (req, res) => campaignsCtrl.findOneByBudget(req, res));

router.get(`/api-${sys}/campaigns/findOneByExpectedCost/:expectedCost`, (req, res) => campaignsCtrl.findOneByExpectedCost(req, res));

router.get(`/api-${sys}/campaigns/findOneByActualCost/:actualCost`, (req, res) => campaignsCtrl.findOneByActualCost(req, res));

router.get(`/api-${sys}/campaigns/findOneByExpectedRevenue/:expectedRevenue`, (req, res) => campaignsCtrl.findOneByExpectedRevenue(req, res));

router.get(`/api-${sys}/campaigns/findOneByName/:name`, (req, res) => campaignsCtrl.findOneByName(req, res));

router.get(`/api-${sys}/campaigns/findOneByReferUrl/:referUrl`, (req, res) => campaignsCtrl.findOneByReferUrl(req, res));

router.get(`/api-${sys}/campaigns/findOneByTrackerText/:trackerText`, (req, res) => campaignsCtrl.findOneByTrackerText(req, res));

router.get(`/api-${sys}/campaigns/findOneByStatus/:status`, (req, res) => campaignsCtrl.findOneByStatus(req, res));

router.get(`/api-${sys}/campaigns/findOneByCampaignType/:campaignType`, (req, res) => campaignsCtrl.findOneByCampaignType(req, res));

router.get(`/api-${sys}/campaigns/findOneByFrequency/:frequency`, (req, res) => campaignsCtrl.findOneByFrequency(req, res));

router.get(`/api-${sys}/campaigns/findOneByObjective/:objective`, (req, res) => campaignsCtrl.findOneByObjective(req, res));

router.get(`/api-${sys}/campaigns/findOneByContent/:content`, (req, res) => campaignsCtrl.findOneByContent(req, res));

router.get(`/api-${sys}/campaigns/findOneByDateEntered/:dateEntered`, (req, res) => campaignsCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/campaigns/findOneByDateModified/:dateModified`, (req, res) => campaignsCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/campaigns/findOneByStartDate/:startDate`, (req, res) => campaignsCtrl.findOneByStartDate(req, res));

router.get(`/api-${sys}/campaigns/findOneByEndDate/:endDate`, (req, res) => campaignsCtrl.findOneByEndDate(req, res));

router.get(`/api-${sys}/campaigns/findOneByModifiedUserId/:modifiedUserId`, (req, res) => campaignsCtrl.findOneByModifiedUserId(req, res));

router.get(`/api-${sys}/campaigns/findOneByCreatedBy/:createdBy`, (req, res) => campaignsCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/campaigns/findOneByAssignedUserId/:assignedUserId`, (req, res) => campaignsCtrl.findOneByAssignedUserId(req, res));

router.get(`/api-${sys}/campaigns/findOneByCurrencyId/:currencyId`, (req, res) => campaignsCtrl.findOneByCurrencyId(req, res));

router.get(`/api-${sys}/campaigns/findOneBySurveyId/:surveyId`, (req, res) => campaignsCtrl.findOneBySurveyId(req, res));



router.post(`/api-${sys}/campaigns/updateCampaignById`, (req, res) => campaignsCtrl.updateCampaignById(req, res));

router.post(`/api-${sys}/campaigns/updateCampaignByDeleted`, (req, res) => campaignsCtrl.updateCampaignByDeleted(req, res));

router.post(`/api-${sys}/campaigns/updateCampaignByTrackerKey`, (req, res) => campaignsCtrl.updateCampaignByTrackerKey(req, res));

router.post(`/api-${sys}/campaigns/updateCampaignByTrackerCount`, (req, res) => campaignsCtrl.updateCampaignByTrackerCount(req, res));

router.post(`/api-${sys}/campaigns/updateCampaignByImpressions`, (req, res) => campaignsCtrl.updateCampaignByImpressions(req, res));

router.post(`/api-${sys}/campaigns/updateCampaignByBudget`, (req, res) => campaignsCtrl.updateCampaignByBudget(req, res));

router.post(`/api-${sys}/campaigns/updateCampaignByExpectedCost`, (req, res) => campaignsCtrl.updateCampaignByExpectedCost(req, res));

router.post(`/api-${sys}/campaigns/updateCampaignByActualCost`, (req, res) => campaignsCtrl.updateCampaignByActualCost(req, res));

router.post(`/api-${sys}/campaigns/updateCampaignByExpectedRevenue`, (req, res) => campaignsCtrl.updateCampaignByExpectedRevenue(req, res));

router.post(`/api-${sys}/campaigns/updateCampaignByName`, (req, res) => campaignsCtrl.updateCampaignByName(req, res));

router.post(`/api-${sys}/campaigns/updateCampaignByReferUrl`, (req, res) => campaignsCtrl.updateCampaignByReferUrl(req, res));

router.post(`/api-${sys}/campaigns/updateCampaignByTrackerText`, (req, res) => campaignsCtrl.updateCampaignByTrackerText(req, res));

router.post(`/api-${sys}/campaigns/updateCampaignByStatus`, (req, res) => campaignsCtrl.updateCampaignByStatus(req, res));

router.post(`/api-${sys}/campaigns/updateCampaignByCampaignType`, (req, res) => campaignsCtrl.updateCampaignByCampaignType(req, res));

router.post(`/api-${sys}/campaigns/updateCampaignByFrequency`, (req, res) => campaignsCtrl.updateCampaignByFrequency(req, res));

router.post(`/api-${sys}/campaigns/updateCampaignByObjective`, (req, res) => campaignsCtrl.updateCampaignByObjective(req, res));

router.post(`/api-${sys}/campaigns/updateCampaignByContent`, (req, res) => campaignsCtrl.updateCampaignByContent(req, res));

router.post(`/api-${sys}/campaigns/updateCampaignByDateEntered`, (req, res) => campaignsCtrl.updateCampaignByDateEntered(req, res));

router.post(`/api-${sys}/campaigns/updateCampaignByDateModified`, (req, res) => campaignsCtrl.updateCampaignByDateModified(req, res));

router.post(`/api-${sys}/campaigns/updateCampaignByStartDate`, (req, res) => campaignsCtrl.updateCampaignByStartDate(req, res));

router.post(`/api-${sys}/campaigns/updateCampaignByEndDate`, (req, res) => campaignsCtrl.updateCampaignByEndDate(req, res));

router.post(`/api-${sys}/campaigns/updateCampaignByModifiedUserId`, (req, res) => campaignsCtrl.updateCampaignByModifiedUserId(req, res));

router.post(`/api-${sys}/campaigns/updateCampaignByCreatedBy`, (req, res) => campaignsCtrl.updateCampaignByCreatedBy(req, res));

router.post(`/api-${sys}/campaigns/updateCampaignByAssignedUserId`, (req, res) => campaignsCtrl.updateCampaignByAssignedUserId(req, res));

router.post(`/api-${sys}/campaigns/updateCampaignByCurrencyId`, (req, res) => campaignsCtrl.updateCampaignByCurrencyId(req, res));

router.post(`/api-${sys}/campaigns/updateCampaignBySurveyId`, (req, res) => campaignsCtrl.updateCampaignBySurveyId(req, res));





router.get(`/api-${sys}/campaigns/`, (req, res) => campaignsCtrl.getAllCampaigns(req, res));
router.post(`/api-${sys}/campaigns/`, (req, res) => campaignsCtrl.addCampaign(req, res));
router.get(`/api-${sys}/campaigns/:id`, (req, res) => campaignsCtrl.getACampaign(req, res));
router.put(`/api-${sys}/campaigns/:id`, (req, res) => campaignsCtrl.updateCampaign(req, res));
router.delete(`/api-${sys}/campaigns/:id`, (req, res) => campaignsCtrl.deleteCampaign(req, res));

//</es-section>
module.exports = router;
