/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:23:39 GMT-0400 (Bolivia Time)
 * Time: 0:23:39
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:23:39 GMT-0400 (Bolivia Time)
 * Last time updated: 0:23:39
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const prospectListCampaignsCtrl = require("../controllers/prospect_list_campaigns.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/prospect-list-campaigns/findOneById/:id`, (req, res) => prospectListCampaignsCtrl.findOneById(req, res));

router.get(`/api-${sys}/prospect-list-campaigns/findOneByDeleted/:deleted`, (req, res) => prospectListCampaignsCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/prospect-list-campaigns/findOneByProspectListId/:prospectListId`, (req, res) => prospectListCampaignsCtrl.findOneByProspectListId(req, res));

router.get(`/api-${sys}/prospect-list-campaigns/findOneByCampaignId/:campaignId`, (req, res) => prospectListCampaignsCtrl.findOneByCampaignId(req, res));

router.get(`/api-${sys}/prospect-list-campaigns/findOneByDateModified/:dateModified`, (req, res) => prospectListCampaignsCtrl.findOneByDateModified(req, res));



router.post(`/api-${sys}/prospect-list-campaigns/updateProspectListCampaignById`, (req, res) => prospectListCampaignsCtrl.updateProspectListCampaignById(req, res));

router.post(`/api-${sys}/prospect-list-campaigns/updateProspectListCampaignByDeleted`, (req, res) => prospectListCampaignsCtrl.updateProspectListCampaignByDeleted(req, res));

router.post(`/api-${sys}/prospect-list-campaigns/updateProspectListCampaignByProspectListId`, (req, res) => prospectListCampaignsCtrl.updateProspectListCampaignByProspectListId(req, res));

router.post(`/api-${sys}/prospect-list-campaigns/updateProspectListCampaignByCampaignId`, (req, res) => prospectListCampaignsCtrl.updateProspectListCampaignByCampaignId(req, res));

router.post(`/api-${sys}/prospect-list-campaigns/updateProspectListCampaignByDateModified`, (req, res) => prospectListCampaignsCtrl.updateProspectListCampaignByDateModified(req, res));





router.get(`/api-${sys}/prospect-list-campaigns/`, (req, res) => prospectListCampaignsCtrl.getAllProspectListCampaigns(req, res));
router.post(`/api-${sys}/prospect-list-campaigns/`, (req, res) => prospectListCampaignsCtrl.addProspectListCampaign(req, res));
router.get(`/api-${sys}/prospect-list-campaigns/:id`, (req, res) => prospectListCampaignsCtrl.getAProspectListCampaign(req, res));
router.put(`/api-${sys}/prospect-list-campaigns/:id`, (req, res) => prospectListCampaignsCtrl.updateProspectListCampaign(req, res));
router.delete(`/api-${sys}/prospect-list-campaigns/:id`, (req, res) => prospectListCampaignsCtrl.deleteProspectListCampaign(req, res));

//</es-section>
module.exports = router;
