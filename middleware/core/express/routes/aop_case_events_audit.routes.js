/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:35:12 GMT-0400 (Bolivia Time)
 * Time: 15:35:12
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:35:12 GMT-0400 (Bolivia Time)
 * Last time updated: 15:35:12
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const aopCaseEventsAuditCtrl = require("../controllers/aop_case_events_audit.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/aop-case-events-audit/findOneById/:id`, (req, res) => aopCaseEventsAuditCtrl.findOneById(req, res));

router.get(`/api-${sys}/aop-case-events-audit/findOneByCreatedBy/:createdBy`, (req, res) => aopCaseEventsAuditCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/aop-case-events-audit/findOneByFieldName/:fieldName`, (req, res) => aopCaseEventsAuditCtrl.findOneByFieldName(req, res));

router.get(`/api-${sys}/aop-case-events-audit/findOneByDataType/:dataType`, (req, res) => aopCaseEventsAuditCtrl.findOneByDataType(req, res));

router.get(`/api-${sys}/aop-case-events-audit/findOneByBeforeValueString/:beforeValueString`, (req, res) => aopCaseEventsAuditCtrl.findOneByBeforeValueString(req, res));

router.get(`/api-${sys}/aop-case-events-audit/findOneByAfterValueString/:afterValueString`, (req, res) => aopCaseEventsAuditCtrl.findOneByAfterValueString(req, res));

router.get(`/api-${sys}/aop-case-events-audit/findOneByBeforeValueText/:beforeValueText`, (req, res) => aopCaseEventsAuditCtrl.findOneByBeforeValueText(req, res));

router.get(`/api-${sys}/aop-case-events-audit/findOneByAfterValueText/:afterValueText`, (req, res) => aopCaseEventsAuditCtrl.findOneByAfterValueText(req, res));

router.get(`/api-${sys}/aop-case-events-audit/findOneByDateCreated/:dateCreated`, (req, res) => aopCaseEventsAuditCtrl.findOneByDateCreated(req, res));

router.get(`/api-${sys}/aop-case-events-audit/findOneByParentId/:parentId`, (req, res) => aopCaseEventsAuditCtrl.findOneByParentId(req, res));



router.post(`/api-${sys}/aop-case-events-audit/updateAopCaseEventAuditById`, (req, res) => aopCaseEventsAuditCtrl.updateAopCaseEventAuditById(req, res));

router.post(`/api-${sys}/aop-case-events-audit/updateAopCaseEventAuditByCreatedBy`, (req, res) => aopCaseEventsAuditCtrl.updateAopCaseEventAuditByCreatedBy(req, res));

router.post(`/api-${sys}/aop-case-events-audit/updateAopCaseEventAuditByFieldName`, (req, res) => aopCaseEventsAuditCtrl.updateAopCaseEventAuditByFieldName(req, res));

router.post(`/api-${sys}/aop-case-events-audit/updateAopCaseEventAuditByDataType`, (req, res) => aopCaseEventsAuditCtrl.updateAopCaseEventAuditByDataType(req, res));

router.post(`/api-${sys}/aop-case-events-audit/updateAopCaseEventAuditByBeforeValueString`, (req, res) => aopCaseEventsAuditCtrl.updateAopCaseEventAuditByBeforeValueString(req, res));

router.post(`/api-${sys}/aop-case-events-audit/updateAopCaseEventAuditByAfterValueString`, (req, res) => aopCaseEventsAuditCtrl.updateAopCaseEventAuditByAfterValueString(req, res));

router.post(`/api-${sys}/aop-case-events-audit/updateAopCaseEventAuditByBeforeValueText`, (req, res) => aopCaseEventsAuditCtrl.updateAopCaseEventAuditByBeforeValueText(req, res));

router.post(`/api-${sys}/aop-case-events-audit/updateAopCaseEventAuditByAfterValueText`, (req, res) => aopCaseEventsAuditCtrl.updateAopCaseEventAuditByAfterValueText(req, res));

router.post(`/api-${sys}/aop-case-events-audit/updateAopCaseEventAuditByDateCreated`, (req, res) => aopCaseEventsAuditCtrl.updateAopCaseEventAuditByDateCreated(req, res));

router.post(`/api-${sys}/aop-case-events-audit/updateAopCaseEventAuditByParentId`, (req, res) => aopCaseEventsAuditCtrl.updateAopCaseEventAuditByParentId(req, res));





router.get(`/api-${sys}/aop-case-events-audit/`, (req, res) => aopCaseEventsAuditCtrl.getAllAopCaseEventsAudit(req, res));
router.post(`/api-${sys}/aop-case-events-audit/`, (req, res) => aopCaseEventsAuditCtrl.addAopCaseEventAudit(req, res));
router.get(`/api-${sys}/aop-case-events-audit/:id`, (req, res) => aopCaseEventsAuditCtrl.getAAopCaseEventAudit(req, res));
router.put(`/api-${sys}/aop-case-events-audit/:id`, (req, res) => aopCaseEventsAuditCtrl.updateAopCaseEventAudit(req, res));
router.delete(`/api-${sys}/aop-case-events-audit/:id`, (req, res) => aopCaseEventsAuditCtrl.deleteAopCaseEventAudit(req, res));

//</es-section>
module.exports = router;
