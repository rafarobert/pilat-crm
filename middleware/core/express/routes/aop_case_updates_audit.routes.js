/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:22:05 GMT-0400 (Bolivia Time)
 * Time: 0:22:5
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:22:05 GMT-0400 (Bolivia Time)
 * Last time updated: 0:22:5
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const aopCaseUpdatesAuditCtrl = require("../controllers/aop_case_updates_audit.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/aop-case-updates-audit/findOneById/:id`, (req, res) => aopCaseUpdatesAuditCtrl.findOneById(req, res));

router.get(`/api-${sys}/aop-case-updates-audit/findOneByCreatedBy/:createdBy`, (req, res) => aopCaseUpdatesAuditCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/aop-case-updates-audit/findOneByFieldName/:fieldName`, (req, res) => aopCaseUpdatesAuditCtrl.findOneByFieldName(req, res));

router.get(`/api-${sys}/aop-case-updates-audit/findOneByDataType/:dataType`, (req, res) => aopCaseUpdatesAuditCtrl.findOneByDataType(req, res));

router.get(`/api-${sys}/aop-case-updates-audit/findOneByBeforeValueString/:beforeValueString`, (req, res) => aopCaseUpdatesAuditCtrl.findOneByBeforeValueString(req, res));

router.get(`/api-${sys}/aop-case-updates-audit/findOneByAfterValueString/:afterValueString`, (req, res) => aopCaseUpdatesAuditCtrl.findOneByAfterValueString(req, res));

router.get(`/api-${sys}/aop-case-updates-audit/findOneByBeforeValueText/:beforeValueText`, (req, res) => aopCaseUpdatesAuditCtrl.findOneByBeforeValueText(req, res));

router.get(`/api-${sys}/aop-case-updates-audit/findOneByAfterValueText/:afterValueText`, (req, res) => aopCaseUpdatesAuditCtrl.findOneByAfterValueText(req, res));

router.get(`/api-${sys}/aop-case-updates-audit/findOneByDateCreated/:dateCreated`, (req, res) => aopCaseUpdatesAuditCtrl.findOneByDateCreated(req, res));

router.get(`/api-${sys}/aop-case-updates-audit/findOneByParentId/:parentId`, (req, res) => aopCaseUpdatesAuditCtrl.findOneByParentId(req, res));



router.post(`/api-${sys}/aop-case-updates-audit/updateAopCaseUpdateAuditById`, (req, res) => aopCaseUpdatesAuditCtrl.updateAopCaseUpdateAuditById(req, res));

router.post(`/api-${sys}/aop-case-updates-audit/updateAopCaseUpdateAuditByCreatedBy`, (req, res) => aopCaseUpdatesAuditCtrl.updateAopCaseUpdateAuditByCreatedBy(req, res));

router.post(`/api-${sys}/aop-case-updates-audit/updateAopCaseUpdateAuditByFieldName`, (req, res) => aopCaseUpdatesAuditCtrl.updateAopCaseUpdateAuditByFieldName(req, res));

router.post(`/api-${sys}/aop-case-updates-audit/updateAopCaseUpdateAuditByDataType`, (req, res) => aopCaseUpdatesAuditCtrl.updateAopCaseUpdateAuditByDataType(req, res));

router.post(`/api-${sys}/aop-case-updates-audit/updateAopCaseUpdateAuditByBeforeValueString`, (req, res) => aopCaseUpdatesAuditCtrl.updateAopCaseUpdateAuditByBeforeValueString(req, res));

router.post(`/api-${sys}/aop-case-updates-audit/updateAopCaseUpdateAuditByAfterValueString`, (req, res) => aopCaseUpdatesAuditCtrl.updateAopCaseUpdateAuditByAfterValueString(req, res));

router.post(`/api-${sys}/aop-case-updates-audit/updateAopCaseUpdateAuditByBeforeValueText`, (req, res) => aopCaseUpdatesAuditCtrl.updateAopCaseUpdateAuditByBeforeValueText(req, res));

router.post(`/api-${sys}/aop-case-updates-audit/updateAopCaseUpdateAuditByAfterValueText`, (req, res) => aopCaseUpdatesAuditCtrl.updateAopCaseUpdateAuditByAfterValueText(req, res));

router.post(`/api-${sys}/aop-case-updates-audit/updateAopCaseUpdateAuditByDateCreated`, (req, res) => aopCaseUpdatesAuditCtrl.updateAopCaseUpdateAuditByDateCreated(req, res));

router.post(`/api-${sys}/aop-case-updates-audit/updateAopCaseUpdateAuditByParentId`, (req, res) => aopCaseUpdatesAuditCtrl.updateAopCaseUpdateAuditByParentId(req, res));





router.get(`/api-${sys}/aop-case-updates-audit/`, (req, res) => aopCaseUpdatesAuditCtrl.getAllAopCaseUpdatesAudit(req, res));
router.post(`/api-${sys}/aop-case-updates-audit/`, (req, res) => aopCaseUpdatesAuditCtrl.addAopCaseUpdateAudit(req, res));
router.get(`/api-${sys}/aop-case-updates-audit/:id`, (req, res) => aopCaseUpdatesAuditCtrl.getAAopCaseUpdateAudit(req, res));
router.put(`/api-${sys}/aop-case-updates-audit/:id`, (req, res) => aopCaseUpdatesAuditCtrl.updateAopCaseUpdateAudit(req, res));
router.delete(`/api-${sys}/aop-case-updates-audit/:id`, (req, res) => aopCaseUpdatesAuditCtrl.deleteAopCaseUpdateAudit(req, res));

//</es-section>
module.exports = router;
