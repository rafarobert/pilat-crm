/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:33 GMT-0400 (Bolivia Time)
 * Time: 14:56:33
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:33 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:33
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const campaignLogCtrl = require("../controllers/campaign_log.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/campaign-log/findOneById/:id`, (req, res) => campaignLogCtrl.findOneById(req, res));

router.get(`/api-${sys}/campaign-log/findOneByArchived/:archived`, (req, res) => campaignLogCtrl.findOneByArchived(req, res));

router.get(`/api-${sys}/campaign-log/findOneByDeleted/:deleted`, (req, res) => campaignLogCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/campaign-log/findOneByHits/:hits`, (req, res) => campaignLogCtrl.findOneByHits(req, res));

router.get(`/api-${sys}/campaign-log/findOneByTargetTrackerKey/:targetTrackerKey`, (req, res) => campaignLogCtrl.findOneByTargetTrackerKey(req, res));

router.get(`/api-${sys}/campaign-log/findOneByTargetId/:targetId`, (req, res) => campaignLogCtrl.findOneByTargetId(req, res));

router.get(`/api-${sys}/campaign-log/findOneByTargetType/:targetType`, (req, res) => campaignLogCtrl.findOneByTargetType(req, res));

router.get(`/api-${sys}/campaign-log/findOneByActivityType/:activityType`, (req, res) => campaignLogCtrl.findOneByActivityType(req, res));

router.get(`/api-${sys}/campaign-log/findOneByRelatedId/:relatedId`, (req, res) => campaignLogCtrl.findOneByRelatedId(req, res));

router.get(`/api-${sys}/campaign-log/findOneByRelatedType/:relatedType`, (req, res) => campaignLogCtrl.findOneByRelatedType(req, res));

router.get(`/api-${sys}/campaign-log/findOneByMoreInformation/:moreInformation`, (req, res) => campaignLogCtrl.findOneByMoreInformation(req, res));

router.get(`/api-${sys}/campaign-log/findOneByActivityDate/:activityDate`, (req, res) => campaignLogCtrl.findOneByActivityDate(req, res));

router.get(`/api-${sys}/campaign-log/findOneByDateModified/:dateModified`, (req, res) => campaignLogCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/campaign-log/findOneByCampaignId/:campaignId`, (req, res) => campaignLogCtrl.findOneByCampaignId(req, res));

router.get(`/api-${sys}/campaign-log/findOneByListId/:listId`, (req, res) => campaignLogCtrl.findOneByListId(req, res));

router.get(`/api-${sys}/campaign-log/findOneByMarketingId/:marketingId`, (req, res) => campaignLogCtrl.findOneByMarketingId(req, res));



router.post(`/api-${sys}/campaign-log/updateCampaignLogById`, (req, res) => campaignLogCtrl.updateCampaignLogById(req, res));

router.post(`/api-${sys}/campaign-log/updateCampaignLogByArchived`, (req, res) => campaignLogCtrl.updateCampaignLogByArchived(req, res));

router.post(`/api-${sys}/campaign-log/updateCampaignLogByDeleted`, (req, res) => campaignLogCtrl.updateCampaignLogByDeleted(req, res));

router.post(`/api-${sys}/campaign-log/updateCampaignLogByHits`, (req, res) => campaignLogCtrl.updateCampaignLogByHits(req, res));

router.post(`/api-${sys}/campaign-log/updateCampaignLogByTargetTrackerKey`, (req, res) => campaignLogCtrl.updateCampaignLogByTargetTrackerKey(req, res));

router.post(`/api-${sys}/campaign-log/updateCampaignLogByTargetId`, (req, res) => campaignLogCtrl.updateCampaignLogByTargetId(req, res));

router.post(`/api-${sys}/campaign-log/updateCampaignLogByTargetType`, (req, res) => campaignLogCtrl.updateCampaignLogByTargetType(req, res));

router.post(`/api-${sys}/campaign-log/updateCampaignLogByActivityType`, (req, res) => campaignLogCtrl.updateCampaignLogByActivityType(req, res));

router.post(`/api-${sys}/campaign-log/updateCampaignLogByRelatedId`, (req, res) => campaignLogCtrl.updateCampaignLogByRelatedId(req, res));

router.post(`/api-${sys}/campaign-log/updateCampaignLogByRelatedType`, (req, res) => campaignLogCtrl.updateCampaignLogByRelatedType(req, res));

router.post(`/api-${sys}/campaign-log/updateCampaignLogByMoreInformation`, (req, res) => campaignLogCtrl.updateCampaignLogByMoreInformation(req, res));

router.post(`/api-${sys}/campaign-log/updateCampaignLogByActivityDate`, (req, res) => campaignLogCtrl.updateCampaignLogByActivityDate(req, res));

router.post(`/api-${sys}/campaign-log/updateCampaignLogByDateModified`, (req, res) => campaignLogCtrl.updateCampaignLogByDateModified(req, res));

router.post(`/api-${sys}/campaign-log/updateCampaignLogByCampaignId`, (req, res) => campaignLogCtrl.updateCampaignLogByCampaignId(req, res));

router.post(`/api-${sys}/campaign-log/updateCampaignLogByListId`, (req, res) => campaignLogCtrl.updateCampaignLogByListId(req, res));

router.post(`/api-${sys}/campaign-log/updateCampaignLogByMarketingId`, (req, res) => campaignLogCtrl.updateCampaignLogByMarketingId(req, res));





router.get(`/api-${sys}/campaign-log/`, (req, res) => campaignLogCtrl.getAllCampaignLog(req, res));
router.post(`/api-${sys}/datatable/campaign-log/`, (req, res) => campaignLogCtrl.getAllCampaignLog(req, res));
router.post(`/api-${sys}/campaign-log/`, (req, res) => campaignLogCtrl.addCampaignLog(req, res));
router.get(`/api-${sys}/campaign-log/:id`, (req, res) => campaignLogCtrl.getACampaignLog(req, res));
router.put(`/api-${sys}/campaign-log/:id`, (req, res) => campaignLogCtrl.updateCampaignLog(req, res));
router.delete(`/api-${sys}/campaign-log/:id`, (req, res) => campaignLogCtrl.deleteCampaignLog(req, res));

//</es-section>
module.exports = router;
