/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:38:02 GMT-0400 (Bolivia Time)
 * Time: 18:38:2
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:38:02 GMT-0400 (Bolivia Time)
 * Last time updated: 18:38:2
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const opportunitiesAuditCtrl = require("../controllers/opportunities_audit.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/opportunities-audit/findOneById/:id`, (req, res) => opportunitiesAuditCtrl.findOneById(req, res));

router.get(`/api-${sys}/opportunities-audit/findOneByCreatedBy/:createdBy`, (req, res) => opportunitiesAuditCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/opportunities-audit/findOneByFieldName/:fieldName`, (req, res) => opportunitiesAuditCtrl.findOneByFieldName(req, res));

router.get(`/api-${sys}/opportunities-audit/findOneByDataType/:dataType`, (req, res) => opportunitiesAuditCtrl.findOneByDataType(req, res));

router.get(`/api-${sys}/opportunities-audit/findOneByBeforeValueString/:beforeValueString`, (req, res) => opportunitiesAuditCtrl.findOneByBeforeValueString(req, res));

router.get(`/api-${sys}/opportunities-audit/findOneByAfterValueString/:afterValueString`, (req, res) => opportunitiesAuditCtrl.findOneByAfterValueString(req, res));

router.get(`/api-${sys}/opportunities-audit/findOneByBeforeValueText/:beforeValueText`, (req, res) => opportunitiesAuditCtrl.findOneByBeforeValueText(req, res));

router.get(`/api-${sys}/opportunities-audit/findOneByAfterValueText/:afterValueText`, (req, res) => opportunitiesAuditCtrl.findOneByAfterValueText(req, res));

router.get(`/api-${sys}/opportunities-audit/findOneByDateCreated/:dateCreated`, (req, res) => opportunitiesAuditCtrl.findOneByDateCreated(req, res));

router.get(`/api-${sys}/opportunities-audit/findOneByParentId/:parentId`, (req, res) => opportunitiesAuditCtrl.findOneByParentId(req, res));



router.post(`/api-${sys}/opportunities-audit/updateOpportunityAuditById`, (req, res) => opportunitiesAuditCtrl.updateOpportunityAuditById(req, res));

router.post(`/api-${sys}/opportunities-audit/updateOpportunityAuditByCreatedBy`, (req, res) => opportunitiesAuditCtrl.updateOpportunityAuditByCreatedBy(req, res));

router.post(`/api-${sys}/opportunities-audit/updateOpportunityAuditByFieldName`, (req, res) => opportunitiesAuditCtrl.updateOpportunityAuditByFieldName(req, res));

router.post(`/api-${sys}/opportunities-audit/updateOpportunityAuditByDataType`, (req, res) => opportunitiesAuditCtrl.updateOpportunityAuditByDataType(req, res));

router.post(`/api-${sys}/opportunities-audit/updateOpportunityAuditByBeforeValueString`, (req, res) => opportunitiesAuditCtrl.updateOpportunityAuditByBeforeValueString(req, res));

router.post(`/api-${sys}/opportunities-audit/updateOpportunityAuditByAfterValueString`, (req, res) => opportunitiesAuditCtrl.updateOpportunityAuditByAfterValueString(req, res));

router.post(`/api-${sys}/opportunities-audit/updateOpportunityAuditByBeforeValueText`, (req, res) => opportunitiesAuditCtrl.updateOpportunityAuditByBeforeValueText(req, res));

router.post(`/api-${sys}/opportunities-audit/updateOpportunityAuditByAfterValueText`, (req, res) => opportunitiesAuditCtrl.updateOpportunityAuditByAfterValueText(req, res));

router.post(`/api-${sys}/opportunities-audit/updateOpportunityAuditByDateCreated`, (req, res) => opportunitiesAuditCtrl.updateOpportunityAuditByDateCreated(req, res));

router.post(`/api-${sys}/opportunities-audit/updateOpportunityAuditByParentId`, (req, res) => opportunitiesAuditCtrl.updateOpportunityAuditByParentId(req, res));





router.get(`/api-${sys}/opportunities-audit/`, (req, res) => opportunitiesAuditCtrl.getAllOpportunitiesAudit(req, res));
router.post(`/api-${sys}/opportunities-audit/`, (req, res) => opportunitiesAuditCtrl.addOpportunityAudit(req, res));
router.get(`/api-${sys}/opportunities-audit/:id`, (req, res) => opportunitiesAuditCtrl.getAOpportunityAudit(req, res));
router.put(`/api-${sys}/opportunities-audit/:id`, (req, res) => opportunitiesAuditCtrl.updateOpportunityAudit(req, res));
router.delete(`/api-${sys}/opportunities-audit/:id`, (req, res) => opportunitiesAuditCtrl.deleteOpportunityAudit(req, res));

//</es-section>
module.exports = router;
