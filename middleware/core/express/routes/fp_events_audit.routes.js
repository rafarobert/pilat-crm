/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:55 GMT-0400 (Bolivia Time)
 * Time: 14:56:55
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:55 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:55
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const fpEventsAuditCtrl = require("../controllers/fp_events_audit.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/fp-events-audit/findOneById/:id`, (req, res) => fpEventsAuditCtrl.findOneById(req, res));

router.get(`/api-${sys}/fp-events-audit/findOneByCreatedBy/:createdBy`, (req, res) => fpEventsAuditCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/fp-events-audit/findOneByFieldName/:fieldName`, (req, res) => fpEventsAuditCtrl.findOneByFieldName(req, res));

router.get(`/api-${sys}/fp-events-audit/findOneByDataType/:dataType`, (req, res) => fpEventsAuditCtrl.findOneByDataType(req, res));

router.get(`/api-${sys}/fp-events-audit/findOneByBeforeValueString/:beforeValueString`, (req, res) => fpEventsAuditCtrl.findOneByBeforeValueString(req, res));

router.get(`/api-${sys}/fp-events-audit/findOneByAfterValueString/:afterValueString`, (req, res) => fpEventsAuditCtrl.findOneByAfterValueString(req, res));

router.get(`/api-${sys}/fp-events-audit/findOneByBeforeValueText/:beforeValueText`, (req, res) => fpEventsAuditCtrl.findOneByBeforeValueText(req, res));

router.get(`/api-${sys}/fp-events-audit/findOneByAfterValueText/:afterValueText`, (req, res) => fpEventsAuditCtrl.findOneByAfterValueText(req, res));

router.get(`/api-${sys}/fp-events-audit/findOneByDateCreated/:dateCreated`, (req, res) => fpEventsAuditCtrl.findOneByDateCreated(req, res));

router.get(`/api-${sys}/fp-events-audit/findOneByParentId/:parentId`, (req, res) => fpEventsAuditCtrl.findOneByParentId(req, res));



router.post(`/api-${sys}/fp-events-audit/updateFpEventAuditById`, (req, res) => fpEventsAuditCtrl.updateFpEventAuditById(req, res));

router.post(`/api-${sys}/fp-events-audit/updateFpEventAuditByCreatedBy`, (req, res) => fpEventsAuditCtrl.updateFpEventAuditByCreatedBy(req, res));

router.post(`/api-${sys}/fp-events-audit/updateFpEventAuditByFieldName`, (req, res) => fpEventsAuditCtrl.updateFpEventAuditByFieldName(req, res));

router.post(`/api-${sys}/fp-events-audit/updateFpEventAuditByDataType`, (req, res) => fpEventsAuditCtrl.updateFpEventAuditByDataType(req, res));

router.post(`/api-${sys}/fp-events-audit/updateFpEventAuditByBeforeValueString`, (req, res) => fpEventsAuditCtrl.updateFpEventAuditByBeforeValueString(req, res));

router.post(`/api-${sys}/fp-events-audit/updateFpEventAuditByAfterValueString`, (req, res) => fpEventsAuditCtrl.updateFpEventAuditByAfterValueString(req, res));

router.post(`/api-${sys}/fp-events-audit/updateFpEventAuditByBeforeValueText`, (req, res) => fpEventsAuditCtrl.updateFpEventAuditByBeforeValueText(req, res));

router.post(`/api-${sys}/fp-events-audit/updateFpEventAuditByAfterValueText`, (req, res) => fpEventsAuditCtrl.updateFpEventAuditByAfterValueText(req, res));

router.post(`/api-${sys}/fp-events-audit/updateFpEventAuditByDateCreated`, (req, res) => fpEventsAuditCtrl.updateFpEventAuditByDateCreated(req, res));

router.post(`/api-${sys}/fp-events-audit/updateFpEventAuditByParentId`, (req, res) => fpEventsAuditCtrl.updateFpEventAuditByParentId(req, res));





router.get(`/api-${sys}/fp-events-audit/`, (req, res) => fpEventsAuditCtrl.getAllFpEventsAudit(req, res));
router.post(`/api-${sys}/fp-events-audit/`, (req, res) => fpEventsAuditCtrl.addFpEventAudit(req, res));
router.get(`/api-${sys}/fp-events-audit/:id`, (req, res) => fpEventsAuditCtrl.getAFpEventAudit(req, res));
router.put(`/api-${sys}/fp-events-audit/:id`, (req, res) => fpEventsAuditCtrl.updateFpEventAudit(req, res));
router.delete(`/api-${sys}/fp-events-audit/:id`, (req, res) => fpEventsAuditCtrl.deleteFpEventAudit(req, res));

//</es-section>
module.exports = router;
