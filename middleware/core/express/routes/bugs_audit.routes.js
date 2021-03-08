/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:35:40 GMT-0400 (Bolivia Time)
 * Time: 15:35:40
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:35:40 GMT-0400 (Bolivia Time)
 * Last time updated: 15:35:40
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const bugsAuditCtrl = require("../controllers/bugs_audit.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/bugs-audit/findOneById/:id`, (req, res) => bugsAuditCtrl.findOneById(req, res));

router.get(`/api-${sys}/bugs-audit/findOneByCreatedBy/:createdBy`, (req, res) => bugsAuditCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/bugs-audit/findOneByFieldName/:fieldName`, (req, res) => bugsAuditCtrl.findOneByFieldName(req, res));

router.get(`/api-${sys}/bugs-audit/findOneByDataType/:dataType`, (req, res) => bugsAuditCtrl.findOneByDataType(req, res));

router.get(`/api-${sys}/bugs-audit/findOneByBeforeValueString/:beforeValueString`, (req, res) => bugsAuditCtrl.findOneByBeforeValueString(req, res));

router.get(`/api-${sys}/bugs-audit/findOneByAfterValueString/:afterValueString`, (req, res) => bugsAuditCtrl.findOneByAfterValueString(req, res));

router.get(`/api-${sys}/bugs-audit/findOneByBeforeValueText/:beforeValueText`, (req, res) => bugsAuditCtrl.findOneByBeforeValueText(req, res));

router.get(`/api-${sys}/bugs-audit/findOneByAfterValueText/:afterValueText`, (req, res) => bugsAuditCtrl.findOneByAfterValueText(req, res));

router.get(`/api-${sys}/bugs-audit/findOneByDateCreated/:dateCreated`, (req, res) => bugsAuditCtrl.findOneByDateCreated(req, res));

router.get(`/api-${sys}/bugs-audit/findOneByParentId/:parentId`, (req, res) => bugsAuditCtrl.findOneByParentId(req, res));



router.post(`/api-${sys}/bugs-audit/updateBugAuditById`, (req, res) => bugsAuditCtrl.updateBugAuditById(req, res));

router.post(`/api-${sys}/bugs-audit/updateBugAuditByCreatedBy`, (req, res) => bugsAuditCtrl.updateBugAuditByCreatedBy(req, res));

router.post(`/api-${sys}/bugs-audit/updateBugAuditByFieldName`, (req, res) => bugsAuditCtrl.updateBugAuditByFieldName(req, res));

router.post(`/api-${sys}/bugs-audit/updateBugAuditByDataType`, (req, res) => bugsAuditCtrl.updateBugAuditByDataType(req, res));

router.post(`/api-${sys}/bugs-audit/updateBugAuditByBeforeValueString`, (req, res) => bugsAuditCtrl.updateBugAuditByBeforeValueString(req, res));

router.post(`/api-${sys}/bugs-audit/updateBugAuditByAfterValueString`, (req, res) => bugsAuditCtrl.updateBugAuditByAfterValueString(req, res));

router.post(`/api-${sys}/bugs-audit/updateBugAuditByBeforeValueText`, (req, res) => bugsAuditCtrl.updateBugAuditByBeforeValueText(req, res));

router.post(`/api-${sys}/bugs-audit/updateBugAuditByAfterValueText`, (req, res) => bugsAuditCtrl.updateBugAuditByAfterValueText(req, res));

router.post(`/api-${sys}/bugs-audit/updateBugAuditByDateCreated`, (req, res) => bugsAuditCtrl.updateBugAuditByDateCreated(req, res));

router.post(`/api-${sys}/bugs-audit/updateBugAuditByParentId`, (req, res) => bugsAuditCtrl.updateBugAuditByParentId(req, res));





router.get(`/api-${sys}/bugs-audit/`, (req, res) => bugsAuditCtrl.getAllBugsAudit(req, res));
router.post(`/api-${sys}/bugs-audit/`, (req, res) => bugsAuditCtrl.addBugAudit(req, res));
router.get(`/api-${sys}/bugs-audit/:id`, (req, res) => bugsAuditCtrl.getABugAudit(req, res));
router.put(`/api-${sys}/bugs-audit/:id`, (req, res) => bugsAuditCtrl.updateBugAudit(req, res));
router.delete(`/api-${sys}/bugs-audit/:id`, (req, res) => bugsAuditCtrl.deleteBugAudit(req, res));

//</es-section>
module.exports = router;
