/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:00 GMT-0400 (Bolivia Time)
 * Time: 14:57:0
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:00 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:0
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const g3lGelEmailAuditCtrl = require("../controllers/g3l_gel_email_audit.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/g3l-gel-email-audit/findOneById/:id`, (req, res) => g3lGelEmailAuditCtrl.findOneById(req, res));

router.get(`/api-${sys}/g3l-gel-email-audit/findOneByCreatedBy/:createdBy`, (req, res) => g3lGelEmailAuditCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/g3l-gel-email-audit/findOneByFieldName/:fieldName`, (req, res) => g3lGelEmailAuditCtrl.findOneByFieldName(req, res));

router.get(`/api-${sys}/g3l-gel-email-audit/findOneByDataType/:dataType`, (req, res) => g3lGelEmailAuditCtrl.findOneByDataType(req, res));

router.get(`/api-${sys}/g3l-gel-email-audit/findOneByBeforeValueString/:beforeValueString`, (req, res) => g3lGelEmailAuditCtrl.findOneByBeforeValueString(req, res));

router.get(`/api-${sys}/g3l-gel-email-audit/findOneByAfterValueString/:afterValueString`, (req, res) => g3lGelEmailAuditCtrl.findOneByAfterValueString(req, res));

router.get(`/api-${sys}/g3l-gel-email-audit/findOneByBeforeValueText/:beforeValueText`, (req, res) => g3lGelEmailAuditCtrl.findOneByBeforeValueText(req, res));

router.get(`/api-${sys}/g3l-gel-email-audit/findOneByAfterValueText/:afterValueText`, (req, res) => g3lGelEmailAuditCtrl.findOneByAfterValueText(req, res));

router.get(`/api-${sys}/g3l-gel-email-audit/findOneByDateCreated/:dateCreated`, (req, res) => g3lGelEmailAuditCtrl.findOneByDateCreated(req, res));

router.get(`/api-${sys}/g3l-gel-email-audit/findOneByParentId/:parentId`, (req, res) => g3lGelEmailAuditCtrl.findOneByParentId(req, res));



router.post(`/api-${sys}/g3l-gel-email-audit/updateG3lGelEmailAuditById`, (req, res) => g3lGelEmailAuditCtrl.updateG3lGelEmailAuditById(req, res));

router.post(`/api-${sys}/g3l-gel-email-audit/updateG3lGelEmailAuditByCreatedBy`, (req, res) => g3lGelEmailAuditCtrl.updateG3lGelEmailAuditByCreatedBy(req, res));

router.post(`/api-${sys}/g3l-gel-email-audit/updateG3lGelEmailAuditByFieldName`, (req, res) => g3lGelEmailAuditCtrl.updateG3lGelEmailAuditByFieldName(req, res));

router.post(`/api-${sys}/g3l-gel-email-audit/updateG3lGelEmailAuditByDataType`, (req, res) => g3lGelEmailAuditCtrl.updateG3lGelEmailAuditByDataType(req, res));

router.post(`/api-${sys}/g3l-gel-email-audit/updateG3lGelEmailAuditByBeforeValueString`, (req, res) => g3lGelEmailAuditCtrl.updateG3lGelEmailAuditByBeforeValueString(req, res));

router.post(`/api-${sys}/g3l-gel-email-audit/updateG3lGelEmailAuditByAfterValueString`, (req, res) => g3lGelEmailAuditCtrl.updateG3lGelEmailAuditByAfterValueString(req, res));

router.post(`/api-${sys}/g3l-gel-email-audit/updateG3lGelEmailAuditByBeforeValueText`, (req, res) => g3lGelEmailAuditCtrl.updateG3lGelEmailAuditByBeforeValueText(req, res));

router.post(`/api-${sys}/g3l-gel-email-audit/updateG3lGelEmailAuditByAfterValueText`, (req, res) => g3lGelEmailAuditCtrl.updateG3lGelEmailAuditByAfterValueText(req, res));

router.post(`/api-${sys}/g3l-gel-email-audit/updateG3lGelEmailAuditByDateCreated`, (req, res) => g3lGelEmailAuditCtrl.updateG3lGelEmailAuditByDateCreated(req, res));

router.post(`/api-${sys}/g3l-gel-email-audit/updateG3lGelEmailAuditByParentId`, (req, res) => g3lGelEmailAuditCtrl.updateG3lGelEmailAuditByParentId(req, res));





router.get(`/api-${sys}/g3l-gel-email-audit/`, (req, res) => g3lGelEmailAuditCtrl.getAllG3lGelEmailAudit(req, res));
router.post(`/api-${sys}/g3l-gel-email-audit/`, (req, res) => g3lGelEmailAuditCtrl.addG3lGelEmailAudit(req, res));
router.get(`/api-${sys}/g3l-gel-email-audit/:id`, (req, res) => g3lGelEmailAuditCtrl.getAG3lGelEmailAudit(req, res));
router.put(`/api-${sys}/g3l-gel-email-audit/:id`, (req, res) => g3lGelEmailAuditCtrl.updateG3lGelEmailAudit(req, res));
router.delete(`/api-${sys}/g3l-gel-email-audit/:id`, (req, res) => g3lGelEmailAuditCtrl.deleteG3lGelEmailAudit(req, res));

//</es-section>
module.exports = router;
