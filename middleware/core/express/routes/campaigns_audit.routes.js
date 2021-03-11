/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:32 GMT-0400 (Bolivia Time)
 * Time: 14:56:32
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:32 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:32
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const campaignsAuditCtrl = require("../controllers/campaigns_audit.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/campaigns-audit/findOneById/:id`, (req, res) => campaignsAuditCtrl.findOneById(req, res));

router.get(`/api-${sys}/campaigns-audit/findOneByCreatedBy/:createdBy`, (req, res) => campaignsAuditCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/campaigns-audit/findOneByFieldName/:fieldName`, (req, res) => campaignsAuditCtrl.findOneByFieldName(req, res));

router.get(`/api-${sys}/campaigns-audit/findOneByDataType/:dataType`, (req, res) => campaignsAuditCtrl.findOneByDataType(req, res));

router.get(`/api-${sys}/campaigns-audit/findOneByBeforeValueString/:beforeValueString`, (req, res) => campaignsAuditCtrl.findOneByBeforeValueString(req, res));

router.get(`/api-${sys}/campaigns-audit/findOneByAfterValueString/:afterValueString`, (req, res) => campaignsAuditCtrl.findOneByAfterValueString(req, res));

router.get(`/api-${sys}/campaigns-audit/findOneByBeforeValueText/:beforeValueText`, (req, res) => campaignsAuditCtrl.findOneByBeforeValueText(req, res));

router.get(`/api-${sys}/campaigns-audit/findOneByAfterValueText/:afterValueText`, (req, res) => campaignsAuditCtrl.findOneByAfterValueText(req, res));

router.get(`/api-${sys}/campaigns-audit/findOneByDateCreated/:dateCreated`, (req, res) => campaignsAuditCtrl.findOneByDateCreated(req, res));

router.get(`/api-${sys}/campaigns-audit/findOneByParentId/:parentId`, (req, res) => campaignsAuditCtrl.findOneByParentId(req, res));



router.post(`/api-${sys}/campaigns-audit/updateCampaignAuditById`, (req, res) => campaignsAuditCtrl.updateCampaignAuditById(req, res));

router.post(`/api-${sys}/campaigns-audit/updateCampaignAuditByCreatedBy`, (req, res) => campaignsAuditCtrl.updateCampaignAuditByCreatedBy(req, res));

router.post(`/api-${sys}/campaigns-audit/updateCampaignAuditByFieldName`, (req, res) => campaignsAuditCtrl.updateCampaignAuditByFieldName(req, res));

router.post(`/api-${sys}/campaigns-audit/updateCampaignAuditByDataType`, (req, res) => campaignsAuditCtrl.updateCampaignAuditByDataType(req, res));

router.post(`/api-${sys}/campaigns-audit/updateCampaignAuditByBeforeValueString`, (req, res) => campaignsAuditCtrl.updateCampaignAuditByBeforeValueString(req, res));

router.post(`/api-${sys}/campaigns-audit/updateCampaignAuditByAfterValueString`, (req, res) => campaignsAuditCtrl.updateCampaignAuditByAfterValueString(req, res));

router.post(`/api-${sys}/campaigns-audit/updateCampaignAuditByBeforeValueText`, (req, res) => campaignsAuditCtrl.updateCampaignAuditByBeforeValueText(req, res));

router.post(`/api-${sys}/campaigns-audit/updateCampaignAuditByAfterValueText`, (req, res) => campaignsAuditCtrl.updateCampaignAuditByAfterValueText(req, res));

router.post(`/api-${sys}/campaigns-audit/updateCampaignAuditByDateCreated`, (req, res) => campaignsAuditCtrl.updateCampaignAuditByDateCreated(req, res));

router.post(`/api-${sys}/campaigns-audit/updateCampaignAuditByParentId`, (req, res) => campaignsAuditCtrl.updateCampaignAuditByParentId(req, res));





router.get(`/api-${sys}/campaigns-audit/`, (req, res) => campaignsAuditCtrl.getAllCampaignsAudit(req, res));
router.post(`/api-${sys}/datatable/campaigns-audit/`, (req, res) => campaignsAuditCtrl.getAllCampaignsAudit(req, res));
router.post(`/api-${sys}/campaigns-audit/`, (req, res) => campaignsAuditCtrl.addCampaignAudit(req, res));
router.get(`/api-${sys}/campaigns-audit/:id`, (req, res) => campaignsAuditCtrl.getACampaignAudit(req, res));
router.put(`/api-${sys}/campaigns-audit/:id`, (req, res) => campaignsAuditCtrl.updateCampaignAudit(req, res));
router.delete(`/api-${sys}/campaigns-audit/:id`, (req, res) => campaignsAuditCtrl.deleteCampaignAudit(req, res));

//</es-section>
module.exports = router;
