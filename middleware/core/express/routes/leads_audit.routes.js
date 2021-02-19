/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:37:44 GMT-0400 (Bolivia Time)
 * Time: 18:37:44
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:37:44 GMT-0400 (Bolivia Time)
 * Last time updated: 18:37:44
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const leadsAuditCtrl = require("../controllers/leads_audit.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/leads-audit/findOneById/:id`, (req, res) => leadsAuditCtrl.findOneById(req, res));

router.get(`/api-${sys}/leads-audit/findOneByCreatedBy/:createdBy`, (req, res) => leadsAuditCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/leads-audit/findOneByFieldName/:fieldName`, (req, res) => leadsAuditCtrl.findOneByFieldName(req, res));

router.get(`/api-${sys}/leads-audit/findOneByDataType/:dataType`, (req, res) => leadsAuditCtrl.findOneByDataType(req, res));

router.get(`/api-${sys}/leads-audit/findOneByBeforeValueString/:beforeValueString`, (req, res) => leadsAuditCtrl.findOneByBeforeValueString(req, res));

router.get(`/api-${sys}/leads-audit/findOneByAfterValueString/:afterValueString`, (req, res) => leadsAuditCtrl.findOneByAfterValueString(req, res));

router.get(`/api-${sys}/leads-audit/findOneByBeforeValueText/:beforeValueText`, (req, res) => leadsAuditCtrl.findOneByBeforeValueText(req, res));

router.get(`/api-${sys}/leads-audit/findOneByAfterValueText/:afterValueText`, (req, res) => leadsAuditCtrl.findOneByAfterValueText(req, res));

router.get(`/api-${sys}/leads-audit/findOneByDateCreated/:dateCreated`, (req, res) => leadsAuditCtrl.findOneByDateCreated(req, res));

router.get(`/api-${sys}/leads-audit/findOneByParentId/:parentId`, (req, res) => leadsAuditCtrl.findOneByParentId(req, res));



router.post(`/api-${sys}/leads-audit/updateLeadAuditById`, (req, res) => leadsAuditCtrl.updateLeadAuditById(req, res));

router.post(`/api-${sys}/leads-audit/updateLeadAuditByCreatedBy`, (req, res) => leadsAuditCtrl.updateLeadAuditByCreatedBy(req, res));

router.post(`/api-${sys}/leads-audit/updateLeadAuditByFieldName`, (req, res) => leadsAuditCtrl.updateLeadAuditByFieldName(req, res));

router.post(`/api-${sys}/leads-audit/updateLeadAuditByDataType`, (req, res) => leadsAuditCtrl.updateLeadAuditByDataType(req, res));

router.post(`/api-${sys}/leads-audit/updateLeadAuditByBeforeValueString`, (req, res) => leadsAuditCtrl.updateLeadAuditByBeforeValueString(req, res));

router.post(`/api-${sys}/leads-audit/updateLeadAuditByAfterValueString`, (req, res) => leadsAuditCtrl.updateLeadAuditByAfterValueString(req, res));

router.post(`/api-${sys}/leads-audit/updateLeadAuditByBeforeValueText`, (req, res) => leadsAuditCtrl.updateLeadAuditByBeforeValueText(req, res));

router.post(`/api-${sys}/leads-audit/updateLeadAuditByAfterValueText`, (req, res) => leadsAuditCtrl.updateLeadAuditByAfterValueText(req, res));

router.post(`/api-${sys}/leads-audit/updateLeadAuditByDateCreated`, (req, res) => leadsAuditCtrl.updateLeadAuditByDateCreated(req, res));

router.post(`/api-${sys}/leads-audit/updateLeadAuditByParentId`, (req, res) => leadsAuditCtrl.updateLeadAuditByParentId(req, res));





router.get(`/api-${sys}/leads-audit/`, (req, res) => leadsAuditCtrl.getAllLeadsAudit(req, res));
router.post(`/api-${sys}/leads-audit/`, (req, res) => leadsAuditCtrl.addLeadAudit(req, res));
router.get(`/api-${sys}/leads-audit/:id`, (req, res) => leadsAuditCtrl.getALeadAudit(req, res));
router.put(`/api-${sys}/leads-audit/:id`, (req, res) => leadsAuditCtrl.updateLeadAudit(req, res));
router.delete(`/api-${sys}/leads-audit/:id`, (req, res) => leadsAuditCtrl.deleteLeadAudit(req, res));

//</es-section>
module.exports = router;
