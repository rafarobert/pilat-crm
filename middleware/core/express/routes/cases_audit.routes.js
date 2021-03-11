/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:35 GMT-0400 (Bolivia Time)
 * Time: 14:56:35
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:35 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:35
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const casesAuditCtrl = require("../controllers/cases_audit.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/cases-audit/findOneById/:id`, (req, res) => casesAuditCtrl.findOneById(req, res));

router.get(`/api-${sys}/cases-audit/findOneByCreatedBy/:createdBy`, (req, res) => casesAuditCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/cases-audit/findOneByFieldName/:fieldName`, (req, res) => casesAuditCtrl.findOneByFieldName(req, res));

router.get(`/api-${sys}/cases-audit/findOneByDataType/:dataType`, (req, res) => casesAuditCtrl.findOneByDataType(req, res));

router.get(`/api-${sys}/cases-audit/findOneByBeforeValueString/:beforeValueString`, (req, res) => casesAuditCtrl.findOneByBeforeValueString(req, res));

router.get(`/api-${sys}/cases-audit/findOneByAfterValueString/:afterValueString`, (req, res) => casesAuditCtrl.findOneByAfterValueString(req, res));

router.get(`/api-${sys}/cases-audit/findOneByBeforeValueText/:beforeValueText`, (req, res) => casesAuditCtrl.findOneByBeforeValueText(req, res));

router.get(`/api-${sys}/cases-audit/findOneByAfterValueText/:afterValueText`, (req, res) => casesAuditCtrl.findOneByAfterValueText(req, res));

router.get(`/api-${sys}/cases-audit/findOneByDateCreated/:dateCreated`, (req, res) => casesAuditCtrl.findOneByDateCreated(req, res));

router.get(`/api-${sys}/cases-audit/findOneByParentId/:parentId`, (req, res) => casesAuditCtrl.findOneByParentId(req, res));



router.post(`/api-${sys}/cases-audit/updateCaseAuditById`, (req, res) => casesAuditCtrl.updateCaseAuditById(req, res));

router.post(`/api-${sys}/cases-audit/updateCaseAuditByCreatedBy`, (req, res) => casesAuditCtrl.updateCaseAuditByCreatedBy(req, res));

router.post(`/api-${sys}/cases-audit/updateCaseAuditByFieldName`, (req, res) => casesAuditCtrl.updateCaseAuditByFieldName(req, res));

router.post(`/api-${sys}/cases-audit/updateCaseAuditByDataType`, (req, res) => casesAuditCtrl.updateCaseAuditByDataType(req, res));

router.post(`/api-${sys}/cases-audit/updateCaseAuditByBeforeValueString`, (req, res) => casesAuditCtrl.updateCaseAuditByBeforeValueString(req, res));

router.post(`/api-${sys}/cases-audit/updateCaseAuditByAfterValueString`, (req, res) => casesAuditCtrl.updateCaseAuditByAfterValueString(req, res));

router.post(`/api-${sys}/cases-audit/updateCaseAuditByBeforeValueText`, (req, res) => casesAuditCtrl.updateCaseAuditByBeforeValueText(req, res));

router.post(`/api-${sys}/cases-audit/updateCaseAuditByAfterValueText`, (req, res) => casesAuditCtrl.updateCaseAuditByAfterValueText(req, res));

router.post(`/api-${sys}/cases-audit/updateCaseAuditByDateCreated`, (req, res) => casesAuditCtrl.updateCaseAuditByDateCreated(req, res));

router.post(`/api-${sys}/cases-audit/updateCaseAuditByParentId`, (req, res) => casesAuditCtrl.updateCaseAuditByParentId(req, res));





router.get(`/api-${sys}/cases-audit/`, (req, res) => casesAuditCtrl.getAllCasesAudit(req, res));
router.post(`/api-${sys}/datatable/cases-audit/`, (req, res) => casesAuditCtrl.getAllCasesAudit(req, res));
router.post(`/api-${sys}/cases-audit/`, (req, res) => casesAuditCtrl.addCaseAudit(req, res));
router.get(`/api-${sys}/cases-audit/:id`, (req, res) => casesAuditCtrl.getACaseAudit(req, res));
router.put(`/api-${sys}/cases-audit/:id`, (req, res) => casesAuditCtrl.updateCaseAudit(req, res));
router.delete(`/api-${sys}/cases-audit/:id`, (req, res) => casesAuditCtrl.deleteCaseAudit(req, res));

//</es-section>
module.exports = router;
