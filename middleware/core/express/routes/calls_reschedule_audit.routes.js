/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:22:33 GMT-0400 (Bolivia Time)
 * Time: 0:22:33
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:22:33 GMT-0400 (Bolivia Time)
 * Last time updated: 0:22:33
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const callsRescheduleAuditCtrl = require("../controllers/calls_reschedule_audit.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/calls-reschedule-audit/findOneById/:id`, (req, res) => callsRescheduleAuditCtrl.findOneById(req, res));

router.get(`/api-${sys}/calls-reschedule-audit/findOneByCreatedBy/:createdBy`, (req, res) => callsRescheduleAuditCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/calls-reschedule-audit/findOneByFieldName/:fieldName`, (req, res) => callsRescheduleAuditCtrl.findOneByFieldName(req, res));

router.get(`/api-${sys}/calls-reschedule-audit/findOneByDataType/:dataType`, (req, res) => callsRescheduleAuditCtrl.findOneByDataType(req, res));

router.get(`/api-${sys}/calls-reschedule-audit/findOneByBeforeValueString/:beforeValueString`, (req, res) => callsRescheduleAuditCtrl.findOneByBeforeValueString(req, res));

router.get(`/api-${sys}/calls-reschedule-audit/findOneByAfterValueString/:afterValueString`, (req, res) => callsRescheduleAuditCtrl.findOneByAfterValueString(req, res));

router.get(`/api-${sys}/calls-reschedule-audit/findOneByBeforeValueText/:beforeValueText`, (req, res) => callsRescheduleAuditCtrl.findOneByBeforeValueText(req, res));

router.get(`/api-${sys}/calls-reschedule-audit/findOneByAfterValueText/:afterValueText`, (req, res) => callsRescheduleAuditCtrl.findOneByAfterValueText(req, res));

router.get(`/api-${sys}/calls-reschedule-audit/findOneByDateCreated/:dateCreated`, (req, res) => callsRescheduleAuditCtrl.findOneByDateCreated(req, res));

router.get(`/api-${sys}/calls-reschedule-audit/findOneByParentId/:parentId`, (req, res) => callsRescheduleAuditCtrl.findOneByParentId(req, res));



router.post(`/api-${sys}/calls-reschedule-audit/updateCallRescheduleAuditById`, (req, res) => callsRescheduleAuditCtrl.updateCallRescheduleAuditById(req, res));

router.post(`/api-${sys}/calls-reschedule-audit/updateCallRescheduleAuditByCreatedBy`, (req, res) => callsRescheduleAuditCtrl.updateCallRescheduleAuditByCreatedBy(req, res));

router.post(`/api-${sys}/calls-reschedule-audit/updateCallRescheduleAuditByFieldName`, (req, res) => callsRescheduleAuditCtrl.updateCallRescheduleAuditByFieldName(req, res));

router.post(`/api-${sys}/calls-reschedule-audit/updateCallRescheduleAuditByDataType`, (req, res) => callsRescheduleAuditCtrl.updateCallRescheduleAuditByDataType(req, res));

router.post(`/api-${sys}/calls-reschedule-audit/updateCallRescheduleAuditByBeforeValueString`, (req, res) => callsRescheduleAuditCtrl.updateCallRescheduleAuditByBeforeValueString(req, res));

router.post(`/api-${sys}/calls-reschedule-audit/updateCallRescheduleAuditByAfterValueString`, (req, res) => callsRescheduleAuditCtrl.updateCallRescheduleAuditByAfterValueString(req, res));

router.post(`/api-${sys}/calls-reschedule-audit/updateCallRescheduleAuditByBeforeValueText`, (req, res) => callsRescheduleAuditCtrl.updateCallRescheduleAuditByBeforeValueText(req, res));

router.post(`/api-${sys}/calls-reschedule-audit/updateCallRescheduleAuditByAfterValueText`, (req, res) => callsRescheduleAuditCtrl.updateCallRescheduleAuditByAfterValueText(req, res));

router.post(`/api-${sys}/calls-reschedule-audit/updateCallRescheduleAuditByDateCreated`, (req, res) => callsRescheduleAuditCtrl.updateCallRescheduleAuditByDateCreated(req, res));

router.post(`/api-${sys}/calls-reschedule-audit/updateCallRescheduleAuditByParentId`, (req, res) => callsRescheduleAuditCtrl.updateCallRescheduleAuditByParentId(req, res));





router.get(`/api-${sys}/calls-reschedule-audit/`, (req, res) => callsRescheduleAuditCtrl.getAllCallsRescheduleAudit(req, res));
router.post(`/api-${sys}/calls-reschedule-audit/`, (req, res) => callsRescheduleAuditCtrl.addCallRescheduleAudit(req, res));
router.get(`/api-${sys}/calls-reschedule-audit/:id`, (req, res) => callsRescheduleAuditCtrl.getACallRescheduleAudit(req, res));
router.put(`/api-${sys}/calls-reschedule-audit/:id`, (req, res) => callsRescheduleAuditCtrl.updateCallRescheduleAudit(req, res));
router.delete(`/api-${sys}/calls-reschedule-audit/:id`, (req, res) => callsRescheduleAuditCtrl.deleteCallRescheduleAudit(req, res));

//</es-section>
module.exports = router;
