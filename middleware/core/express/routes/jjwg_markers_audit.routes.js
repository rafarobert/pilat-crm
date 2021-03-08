/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:36:25 GMT-0400 (Bolivia Time)
 * Time: 15:36:25
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:36:25 GMT-0400 (Bolivia Time)
 * Last time updated: 15:36:25
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const jjwgMarkersAuditCtrl = require("../controllers/jjwg_markers_audit.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/jjwg-markers-audit/findOneById/:id`, (req, res) => jjwgMarkersAuditCtrl.findOneById(req, res));

router.get(`/api-${sys}/jjwg-markers-audit/findOneByCreatedBy/:createdBy`, (req, res) => jjwgMarkersAuditCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/jjwg-markers-audit/findOneByFieldName/:fieldName`, (req, res) => jjwgMarkersAuditCtrl.findOneByFieldName(req, res));

router.get(`/api-${sys}/jjwg-markers-audit/findOneByDataType/:dataType`, (req, res) => jjwgMarkersAuditCtrl.findOneByDataType(req, res));

router.get(`/api-${sys}/jjwg-markers-audit/findOneByBeforeValueString/:beforeValueString`, (req, res) => jjwgMarkersAuditCtrl.findOneByBeforeValueString(req, res));

router.get(`/api-${sys}/jjwg-markers-audit/findOneByAfterValueString/:afterValueString`, (req, res) => jjwgMarkersAuditCtrl.findOneByAfterValueString(req, res));

router.get(`/api-${sys}/jjwg-markers-audit/findOneByBeforeValueText/:beforeValueText`, (req, res) => jjwgMarkersAuditCtrl.findOneByBeforeValueText(req, res));

router.get(`/api-${sys}/jjwg-markers-audit/findOneByAfterValueText/:afterValueText`, (req, res) => jjwgMarkersAuditCtrl.findOneByAfterValueText(req, res));

router.get(`/api-${sys}/jjwg-markers-audit/findOneByDateCreated/:dateCreated`, (req, res) => jjwgMarkersAuditCtrl.findOneByDateCreated(req, res));

router.get(`/api-${sys}/jjwg-markers-audit/findOneByParentId/:parentId`, (req, res) => jjwgMarkersAuditCtrl.findOneByParentId(req, res));



router.post(`/api-${sys}/jjwg-markers-audit/updateJjwgMarkerAuditById`, (req, res) => jjwgMarkersAuditCtrl.updateJjwgMarkerAuditById(req, res));

router.post(`/api-${sys}/jjwg-markers-audit/updateJjwgMarkerAuditByCreatedBy`, (req, res) => jjwgMarkersAuditCtrl.updateJjwgMarkerAuditByCreatedBy(req, res));

router.post(`/api-${sys}/jjwg-markers-audit/updateJjwgMarkerAuditByFieldName`, (req, res) => jjwgMarkersAuditCtrl.updateJjwgMarkerAuditByFieldName(req, res));

router.post(`/api-${sys}/jjwg-markers-audit/updateJjwgMarkerAuditByDataType`, (req, res) => jjwgMarkersAuditCtrl.updateJjwgMarkerAuditByDataType(req, res));

router.post(`/api-${sys}/jjwg-markers-audit/updateJjwgMarkerAuditByBeforeValueString`, (req, res) => jjwgMarkersAuditCtrl.updateJjwgMarkerAuditByBeforeValueString(req, res));

router.post(`/api-${sys}/jjwg-markers-audit/updateJjwgMarkerAuditByAfterValueString`, (req, res) => jjwgMarkersAuditCtrl.updateJjwgMarkerAuditByAfterValueString(req, res));

router.post(`/api-${sys}/jjwg-markers-audit/updateJjwgMarkerAuditByBeforeValueText`, (req, res) => jjwgMarkersAuditCtrl.updateJjwgMarkerAuditByBeforeValueText(req, res));

router.post(`/api-${sys}/jjwg-markers-audit/updateJjwgMarkerAuditByAfterValueText`, (req, res) => jjwgMarkersAuditCtrl.updateJjwgMarkerAuditByAfterValueText(req, res));

router.post(`/api-${sys}/jjwg-markers-audit/updateJjwgMarkerAuditByDateCreated`, (req, res) => jjwgMarkersAuditCtrl.updateJjwgMarkerAuditByDateCreated(req, res));

router.post(`/api-${sys}/jjwg-markers-audit/updateJjwgMarkerAuditByParentId`, (req, res) => jjwgMarkersAuditCtrl.updateJjwgMarkerAuditByParentId(req, res));





router.get(`/api-${sys}/jjwg-markers-audit/`, (req, res) => jjwgMarkersAuditCtrl.getAllJjwgMarkersAudit(req, res));
router.post(`/api-${sys}/jjwg-markers-audit/`, (req, res) => jjwgMarkersAuditCtrl.addJjwgMarkerAudit(req, res));
router.get(`/api-${sys}/jjwg-markers-audit/:id`, (req, res) => jjwgMarkersAuditCtrl.getAJjwgMarkerAudit(req, res));
router.put(`/api-${sys}/jjwg-markers-audit/:id`, (req, res) => jjwgMarkersAuditCtrl.updateJjwgMarkerAudit(req, res));
router.delete(`/api-${sys}/jjwg-markers-audit/:id`, (req, res) => jjwgMarkersAuditCtrl.deleteJjwgMarkerAudit(req, res));

//</es-section>
module.exports = router;
