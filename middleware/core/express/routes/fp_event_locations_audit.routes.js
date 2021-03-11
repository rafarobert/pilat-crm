/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:58 GMT-0400 (Bolivia Time)
 * Time: 14:56:58
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:58 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:58
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const fpEventLocationsAuditCtrl = require("../controllers/fp_event_locations_audit.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/fp-event-locations-audit/findOneById/:id`, (req, res) => fpEventLocationsAuditCtrl.findOneById(req, res));

router.get(`/api-${sys}/fp-event-locations-audit/findOneByCreatedBy/:createdBy`, (req, res) => fpEventLocationsAuditCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/fp-event-locations-audit/findOneByFieldName/:fieldName`, (req, res) => fpEventLocationsAuditCtrl.findOneByFieldName(req, res));

router.get(`/api-${sys}/fp-event-locations-audit/findOneByDataType/:dataType`, (req, res) => fpEventLocationsAuditCtrl.findOneByDataType(req, res));

router.get(`/api-${sys}/fp-event-locations-audit/findOneByBeforeValueString/:beforeValueString`, (req, res) => fpEventLocationsAuditCtrl.findOneByBeforeValueString(req, res));

router.get(`/api-${sys}/fp-event-locations-audit/findOneByAfterValueString/:afterValueString`, (req, res) => fpEventLocationsAuditCtrl.findOneByAfterValueString(req, res));

router.get(`/api-${sys}/fp-event-locations-audit/findOneByBeforeValueText/:beforeValueText`, (req, res) => fpEventLocationsAuditCtrl.findOneByBeforeValueText(req, res));

router.get(`/api-${sys}/fp-event-locations-audit/findOneByAfterValueText/:afterValueText`, (req, res) => fpEventLocationsAuditCtrl.findOneByAfterValueText(req, res));

router.get(`/api-${sys}/fp-event-locations-audit/findOneByDateCreated/:dateCreated`, (req, res) => fpEventLocationsAuditCtrl.findOneByDateCreated(req, res));

router.get(`/api-${sys}/fp-event-locations-audit/findOneByParentId/:parentId`, (req, res) => fpEventLocationsAuditCtrl.findOneByParentId(req, res));



router.post(`/api-${sys}/fp-event-locations-audit/updateFpEventLocationAuditById`, (req, res) => fpEventLocationsAuditCtrl.updateFpEventLocationAuditById(req, res));

router.post(`/api-${sys}/fp-event-locations-audit/updateFpEventLocationAuditByCreatedBy`, (req, res) => fpEventLocationsAuditCtrl.updateFpEventLocationAuditByCreatedBy(req, res));

router.post(`/api-${sys}/fp-event-locations-audit/updateFpEventLocationAuditByFieldName`, (req, res) => fpEventLocationsAuditCtrl.updateFpEventLocationAuditByFieldName(req, res));

router.post(`/api-${sys}/fp-event-locations-audit/updateFpEventLocationAuditByDataType`, (req, res) => fpEventLocationsAuditCtrl.updateFpEventLocationAuditByDataType(req, res));

router.post(`/api-${sys}/fp-event-locations-audit/updateFpEventLocationAuditByBeforeValueString`, (req, res) => fpEventLocationsAuditCtrl.updateFpEventLocationAuditByBeforeValueString(req, res));

router.post(`/api-${sys}/fp-event-locations-audit/updateFpEventLocationAuditByAfterValueString`, (req, res) => fpEventLocationsAuditCtrl.updateFpEventLocationAuditByAfterValueString(req, res));

router.post(`/api-${sys}/fp-event-locations-audit/updateFpEventLocationAuditByBeforeValueText`, (req, res) => fpEventLocationsAuditCtrl.updateFpEventLocationAuditByBeforeValueText(req, res));

router.post(`/api-${sys}/fp-event-locations-audit/updateFpEventLocationAuditByAfterValueText`, (req, res) => fpEventLocationsAuditCtrl.updateFpEventLocationAuditByAfterValueText(req, res));

router.post(`/api-${sys}/fp-event-locations-audit/updateFpEventLocationAuditByDateCreated`, (req, res) => fpEventLocationsAuditCtrl.updateFpEventLocationAuditByDateCreated(req, res));

router.post(`/api-${sys}/fp-event-locations-audit/updateFpEventLocationAuditByParentId`, (req, res) => fpEventLocationsAuditCtrl.updateFpEventLocationAuditByParentId(req, res));





router.get(`/api-${sys}/fp-event-locations-audit/`, (req, res) => fpEventLocationsAuditCtrl.getAllFpEventLocationsAudit(req, res));
router.post(`/api-${sys}/datatable/fp-event-locations-audit/`, (req, res) => fpEventLocationsAuditCtrl.getAllFpEventLocationsAudit(req, res));
router.post(`/api-${sys}/fp-event-locations-audit/`, (req, res) => fpEventLocationsAuditCtrl.addFpEventLocationAudit(req, res));
router.get(`/api-${sys}/fp-event-locations-audit/:id`, (req, res) => fpEventLocationsAuditCtrl.getAFpEventLocationAudit(req, res));
router.put(`/api-${sys}/fp-event-locations-audit/:id`, (req, res) => fpEventLocationsAuditCtrl.updateFpEventLocationAudit(req, res));
router.delete(`/api-${sys}/fp-event-locations-audit/:id`, (req, res) => fpEventLocationsAuditCtrl.deleteFpEventLocationAudit(req, res));

//</es-section>
module.exports = router;
