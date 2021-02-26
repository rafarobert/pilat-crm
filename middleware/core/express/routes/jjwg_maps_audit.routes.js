/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:23:10 GMT-0400 (Bolivia Time)
 * Time: 0:23:10
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:23:10 GMT-0400 (Bolivia Time)
 * Last time updated: 0:23:10
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const jjwgMapsAuditCtrl = require("../controllers/jjwg_maps_audit.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/jjwg-maps-audit/findOneById/:id`, (req, res) => jjwgMapsAuditCtrl.findOneById(req, res));

router.get(`/api-${sys}/jjwg-maps-audit/findOneByCreatedBy/:createdBy`, (req, res) => jjwgMapsAuditCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/jjwg-maps-audit/findOneByFieldName/:fieldName`, (req, res) => jjwgMapsAuditCtrl.findOneByFieldName(req, res));

router.get(`/api-${sys}/jjwg-maps-audit/findOneByDataType/:dataType`, (req, res) => jjwgMapsAuditCtrl.findOneByDataType(req, res));

router.get(`/api-${sys}/jjwg-maps-audit/findOneByBeforeValueString/:beforeValueString`, (req, res) => jjwgMapsAuditCtrl.findOneByBeforeValueString(req, res));

router.get(`/api-${sys}/jjwg-maps-audit/findOneByAfterValueString/:afterValueString`, (req, res) => jjwgMapsAuditCtrl.findOneByAfterValueString(req, res));

router.get(`/api-${sys}/jjwg-maps-audit/findOneByBeforeValueText/:beforeValueText`, (req, res) => jjwgMapsAuditCtrl.findOneByBeforeValueText(req, res));

router.get(`/api-${sys}/jjwg-maps-audit/findOneByAfterValueText/:afterValueText`, (req, res) => jjwgMapsAuditCtrl.findOneByAfterValueText(req, res));

router.get(`/api-${sys}/jjwg-maps-audit/findOneByDateCreated/:dateCreated`, (req, res) => jjwgMapsAuditCtrl.findOneByDateCreated(req, res));

router.get(`/api-${sys}/jjwg-maps-audit/findOneByParentId/:parentId`, (req, res) => jjwgMapsAuditCtrl.findOneByParentId(req, res));



router.post(`/api-${sys}/jjwg-maps-audit/updateJjwgMapAuditById`, (req, res) => jjwgMapsAuditCtrl.updateJjwgMapAuditById(req, res));

router.post(`/api-${sys}/jjwg-maps-audit/updateJjwgMapAuditByCreatedBy`, (req, res) => jjwgMapsAuditCtrl.updateJjwgMapAuditByCreatedBy(req, res));

router.post(`/api-${sys}/jjwg-maps-audit/updateJjwgMapAuditByFieldName`, (req, res) => jjwgMapsAuditCtrl.updateJjwgMapAuditByFieldName(req, res));

router.post(`/api-${sys}/jjwg-maps-audit/updateJjwgMapAuditByDataType`, (req, res) => jjwgMapsAuditCtrl.updateJjwgMapAuditByDataType(req, res));

router.post(`/api-${sys}/jjwg-maps-audit/updateJjwgMapAuditByBeforeValueString`, (req, res) => jjwgMapsAuditCtrl.updateJjwgMapAuditByBeforeValueString(req, res));

router.post(`/api-${sys}/jjwg-maps-audit/updateJjwgMapAuditByAfterValueString`, (req, res) => jjwgMapsAuditCtrl.updateJjwgMapAuditByAfterValueString(req, res));

router.post(`/api-${sys}/jjwg-maps-audit/updateJjwgMapAuditByBeforeValueText`, (req, res) => jjwgMapsAuditCtrl.updateJjwgMapAuditByBeforeValueText(req, res));

router.post(`/api-${sys}/jjwg-maps-audit/updateJjwgMapAuditByAfterValueText`, (req, res) => jjwgMapsAuditCtrl.updateJjwgMapAuditByAfterValueText(req, res));

router.post(`/api-${sys}/jjwg-maps-audit/updateJjwgMapAuditByDateCreated`, (req, res) => jjwgMapsAuditCtrl.updateJjwgMapAuditByDateCreated(req, res));

router.post(`/api-${sys}/jjwg-maps-audit/updateJjwgMapAuditByParentId`, (req, res) => jjwgMapsAuditCtrl.updateJjwgMapAuditByParentId(req, res));





router.get(`/api-${sys}/jjwg-maps-audit/`, (req, res) => jjwgMapsAuditCtrl.getAllJjwgMapsAudit(req, res));
router.post(`/api-${sys}/jjwg-maps-audit/`, (req, res) => jjwgMapsAuditCtrl.addJjwgMapAudit(req, res));
router.get(`/api-${sys}/jjwg-maps-audit/:id`, (req, res) => jjwgMapsAuditCtrl.getAJjwgMapAudit(req, res));
router.put(`/api-${sys}/jjwg-maps-audit/:id`, (req, res) => jjwgMapsAuditCtrl.updateJjwgMapAudit(req, res));
router.delete(`/api-${sys}/jjwg-maps-audit/:id`, (req, res) => jjwgMapsAuditCtrl.deleteJjwgMapAudit(req, res));

//</es-section>
module.exports = router;
