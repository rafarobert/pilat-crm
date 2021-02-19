/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:43:21 GMT-0400 (Bolivia Time)
 * Time: 4:43:21
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:43:21 GMT-0400 (Bolivia Time)
 * Last time updated: 4:43:21
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const jjwgAreasAuditCtrl = require("../controllers/jjwg_areas_audit.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/jjwg-areas-audit/findOneById/:id`, (req, res) => jjwgAreasAuditCtrl.findOneById(req, res));

router.get(`/api-${sys}/jjwg-areas-audit/findOneByCreatedBy/:createdBy`, (req, res) => jjwgAreasAuditCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/jjwg-areas-audit/findOneByFieldName/:fieldName`, (req, res) => jjwgAreasAuditCtrl.findOneByFieldName(req, res));

router.get(`/api-${sys}/jjwg-areas-audit/findOneByDataType/:dataType`, (req, res) => jjwgAreasAuditCtrl.findOneByDataType(req, res));

router.get(`/api-${sys}/jjwg-areas-audit/findOneByBeforeValueString/:beforeValueString`, (req, res) => jjwgAreasAuditCtrl.findOneByBeforeValueString(req, res));

router.get(`/api-${sys}/jjwg-areas-audit/findOneByAfterValueString/:afterValueString`, (req, res) => jjwgAreasAuditCtrl.findOneByAfterValueString(req, res));

router.get(`/api-${sys}/jjwg-areas-audit/findOneByBeforeValueText/:beforeValueText`, (req, res) => jjwgAreasAuditCtrl.findOneByBeforeValueText(req, res));

router.get(`/api-${sys}/jjwg-areas-audit/findOneByAfterValueText/:afterValueText`, (req, res) => jjwgAreasAuditCtrl.findOneByAfterValueText(req, res));

router.get(`/api-${sys}/jjwg-areas-audit/findOneByDateCreated/:dateCreated`, (req, res) => jjwgAreasAuditCtrl.findOneByDateCreated(req, res));

router.get(`/api-${sys}/jjwg-areas-audit/findOneByParentId/:parentId`, (req, res) => jjwgAreasAuditCtrl.findOneByParentId(req, res));



router.post(`/api-${sys}/jjwg-areas-audit/updateJjwgAreaAuditById`, (req, res) => jjwgAreasAuditCtrl.updateJjwgAreaAuditById(req, res));

router.post(`/api-${sys}/jjwg-areas-audit/updateJjwgAreaAuditByCreatedBy`, (req, res) => jjwgAreasAuditCtrl.updateJjwgAreaAuditByCreatedBy(req, res));

router.post(`/api-${sys}/jjwg-areas-audit/updateJjwgAreaAuditByFieldName`, (req, res) => jjwgAreasAuditCtrl.updateJjwgAreaAuditByFieldName(req, res));

router.post(`/api-${sys}/jjwg-areas-audit/updateJjwgAreaAuditByDataType`, (req, res) => jjwgAreasAuditCtrl.updateJjwgAreaAuditByDataType(req, res));

router.post(`/api-${sys}/jjwg-areas-audit/updateJjwgAreaAuditByBeforeValueString`, (req, res) => jjwgAreasAuditCtrl.updateJjwgAreaAuditByBeforeValueString(req, res));

router.post(`/api-${sys}/jjwg-areas-audit/updateJjwgAreaAuditByAfterValueString`, (req, res) => jjwgAreasAuditCtrl.updateJjwgAreaAuditByAfterValueString(req, res));

router.post(`/api-${sys}/jjwg-areas-audit/updateJjwgAreaAuditByBeforeValueText`, (req, res) => jjwgAreasAuditCtrl.updateJjwgAreaAuditByBeforeValueText(req, res));

router.post(`/api-${sys}/jjwg-areas-audit/updateJjwgAreaAuditByAfterValueText`, (req, res) => jjwgAreasAuditCtrl.updateJjwgAreaAuditByAfterValueText(req, res));

router.post(`/api-${sys}/jjwg-areas-audit/updateJjwgAreaAuditByDateCreated`, (req, res) => jjwgAreasAuditCtrl.updateJjwgAreaAuditByDateCreated(req, res));

router.post(`/api-${sys}/jjwg-areas-audit/updateJjwgAreaAuditByParentId`, (req, res) => jjwgAreasAuditCtrl.updateJjwgAreaAuditByParentId(req, res));





router.get(`/api-${sys}/jjwg-areas-audit/`, (req, res) => jjwgAreasAuditCtrl.getAllJjwgAreasAudit(req, res));
router.post(`/api-${sys}/jjwg-areas-audit/`, (req, res) => jjwgAreasAuditCtrl.addJjwgAreaAudit(req, res));
router.get(`/api-${sys}/jjwg-areas-audit/:id`, (req, res) => jjwgAreasAuditCtrl.getAJjwgAreaAudit(req, res));
router.put(`/api-${sys}/jjwg-areas-audit/:id`, (req, res) => jjwgAreasAuditCtrl.updateJjwgAreaAudit(req, res));
router.delete(`/api-${sys}/jjwg-areas-audit/:id`, (req, res) => jjwgAreasAuditCtrl.deleteJjwgAreaAudit(req, res));

//</es-section>
module.exports = router;
