/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:35 GMT-0400 (Bolivia Time)
 * Time: 14:0:35
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:35 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:35
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const campaignTrkrsCtrl = require("../controllers/campaign_trkrs.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/campaign-trkrs/findOneById/:id`, (req, res) => campaignTrkrsCtrl.findOneById(req, res));

router.get(`/api-${sys}/campaign-trkrs/findOneByIsOptout/:isOptout`, (req, res) => campaignTrkrsCtrl.findOneByIsOptout(req, res));

router.get(`/api-${sys}/campaign-trkrs/findOneByDeleted/:deleted`, (req, res) => campaignTrkrsCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/campaign-trkrs/findOneByTrackerKey/:trackerKey`, (req, res) => campaignTrkrsCtrl.findOneByTrackerKey(req, res));

router.get(`/api-${sys}/campaign-trkrs/findOneByTrackerName/:trackerName`, (req, res) => campaignTrkrsCtrl.findOneByTrackerName(req, res));

router.get(`/api-${sys}/campaign-trkrs/findOneByTrackerUrl/:trackerUrl`, (req, res) => campaignTrkrsCtrl.findOneByTrackerUrl(req, res));

router.get(`/api-${sys}/campaign-trkrs/findOneByDateEntered/:dateEntered`, (req, res) => campaignTrkrsCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/campaign-trkrs/findOneByDateModified/:dateModified`, (req, res) => campaignTrkrsCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/campaign-trkrs/findOneByCampaignId/:campaignId`, (req, res) => campaignTrkrsCtrl.findOneByCampaignId(req, res));

router.get(`/api-${sys}/campaign-trkrs/findOneByModifiedUserId/:modifiedUserId`, (req, res) => campaignTrkrsCtrl.findOneByModifiedUserId(req, res));

router.get(`/api-${sys}/campaign-trkrs/findOneByCreatedBy/:createdBy`, (req, res) => campaignTrkrsCtrl.findOneByCreatedBy(req, res));



router.post(`/api-${sys}/campaign-trkrs/updateCampaignTrkrById`, (req, res) => campaignTrkrsCtrl.updateCampaignTrkrById(req, res));

router.post(`/api-${sys}/campaign-trkrs/updateCampaignTrkrByIsOptout`, (req, res) => campaignTrkrsCtrl.updateCampaignTrkrByIsOptout(req, res));

router.post(`/api-${sys}/campaign-trkrs/updateCampaignTrkrByDeleted`, (req, res) => campaignTrkrsCtrl.updateCampaignTrkrByDeleted(req, res));

router.post(`/api-${sys}/campaign-trkrs/updateCampaignTrkrByTrackerKey`, (req, res) => campaignTrkrsCtrl.updateCampaignTrkrByTrackerKey(req, res));

router.post(`/api-${sys}/campaign-trkrs/updateCampaignTrkrByTrackerName`, (req, res) => campaignTrkrsCtrl.updateCampaignTrkrByTrackerName(req, res));

router.post(`/api-${sys}/campaign-trkrs/updateCampaignTrkrByTrackerUrl`, (req, res) => campaignTrkrsCtrl.updateCampaignTrkrByTrackerUrl(req, res));

router.post(`/api-${sys}/campaign-trkrs/updateCampaignTrkrByDateEntered`, (req, res) => campaignTrkrsCtrl.updateCampaignTrkrByDateEntered(req, res));

router.post(`/api-${sys}/campaign-trkrs/updateCampaignTrkrByDateModified`, (req, res) => campaignTrkrsCtrl.updateCampaignTrkrByDateModified(req, res));

router.post(`/api-${sys}/campaign-trkrs/updateCampaignTrkrByCampaignId`, (req, res) => campaignTrkrsCtrl.updateCampaignTrkrByCampaignId(req, res));

router.post(`/api-${sys}/campaign-trkrs/updateCampaignTrkrByModifiedUserId`, (req, res) => campaignTrkrsCtrl.updateCampaignTrkrByModifiedUserId(req, res));

router.post(`/api-${sys}/campaign-trkrs/updateCampaignTrkrByCreatedBy`, (req, res) => campaignTrkrsCtrl.updateCampaignTrkrByCreatedBy(req, res));





router.get(`/api-${sys}/campaign-trkrs/`, (req, res) => campaignTrkrsCtrl.getAllCampaignTrkrs(req, res));
router.post(`/api-${sys}/campaign-trkrs/`, (req, res) => campaignTrkrsCtrl.addCampaignTrkr(req, res));
router.get(`/api-${sys}/campaign-trkrs/:id`, (req, res) => campaignTrkrsCtrl.getACampaignTrkr(req, res));
router.put(`/api-${sys}/campaign-trkrs/:id`, (req, res) => campaignTrkrsCtrl.updateCampaignTrkr(req, res));
router.delete(`/api-${sys}/campaign-trkrs/:id`, (req, res) => campaignTrkrsCtrl.deleteCampaignTrkr(req, res));

//</es-section>
module.exports = router;
