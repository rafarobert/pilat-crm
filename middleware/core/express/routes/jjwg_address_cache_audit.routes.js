/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:43:20 GMT-0400 (Bolivia Time)
 * Time: 4:43:20
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:43:20 GMT-0400 (Bolivia Time)
 * Last time updated: 4:43:20
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const jjwgAddressCacheAuditCtrl = require("../controllers/jjwg_address_cache_audit.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/jjwg-address-cache-audit/findOneById/:id`, (req, res) => jjwgAddressCacheAuditCtrl.findOneById(req, res));

router.get(`/api-${sys}/jjwg-address-cache-audit/findOneByCreatedBy/:createdBy`, (req, res) => jjwgAddressCacheAuditCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/jjwg-address-cache-audit/findOneByFieldName/:fieldName`, (req, res) => jjwgAddressCacheAuditCtrl.findOneByFieldName(req, res));

router.get(`/api-${sys}/jjwg-address-cache-audit/findOneByDataType/:dataType`, (req, res) => jjwgAddressCacheAuditCtrl.findOneByDataType(req, res));

router.get(`/api-${sys}/jjwg-address-cache-audit/findOneByBeforeValueString/:beforeValueString`, (req, res) => jjwgAddressCacheAuditCtrl.findOneByBeforeValueString(req, res));

router.get(`/api-${sys}/jjwg-address-cache-audit/findOneByAfterValueString/:afterValueString`, (req, res) => jjwgAddressCacheAuditCtrl.findOneByAfterValueString(req, res));

router.get(`/api-${sys}/jjwg-address-cache-audit/findOneByBeforeValueText/:beforeValueText`, (req, res) => jjwgAddressCacheAuditCtrl.findOneByBeforeValueText(req, res));

router.get(`/api-${sys}/jjwg-address-cache-audit/findOneByAfterValueText/:afterValueText`, (req, res) => jjwgAddressCacheAuditCtrl.findOneByAfterValueText(req, res));

router.get(`/api-${sys}/jjwg-address-cache-audit/findOneByDateCreated/:dateCreated`, (req, res) => jjwgAddressCacheAuditCtrl.findOneByDateCreated(req, res));

router.get(`/api-${sys}/jjwg-address-cache-audit/findOneByParentId/:parentId`, (req, res) => jjwgAddressCacheAuditCtrl.findOneByParentId(req, res));



router.post(`/api-${sys}/jjwg-address-cache-audit/updateJjwgAddresCacheAuditById`, (req, res) => jjwgAddressCacheAuditCtrl.updateJjwgAddresCacheAuditById(req, res));

router.post(`/api-${sys}/jjwg-address-cache-audit/updateJjwgAddresCacheAuditByCreatedBy`, (req, res) => jjwgAddressCacheAuditCtrl.updateJjwgAddresCacheAuditByCreatedBy(req, res));

router.post(`/api-${sys}/jjwg-address-cache-audit/updateJjwgAddresCacheAuditByFieldName`, (req, res) => jjwgAddressCacheAuditCtrl.updateJjwgAddresCacheAuditByFieldName(req, res));

router.post(`/api-${sys}/jjwg-address-cache-audit/updateJjwgAddresCacheAuditByDataType`, (req, res) => jjwgAddressCacheAuditCtrl.updateJjwgAddresCacheAuditByDataType(req, res));

router.post(`/api-${sys}/jjwg-address-cache-audit/updateJjwgAddresCacheAuditByBeforeValueString`, (req, res) => jjwgAddressCacheAuditCtrl.updateJjwgAddresCacheAuditByBeforeValueString(req, res));

router.post(`/api-${sys}/jjwg-address-cache-audit/updateJjwgAddresCacheAuditByAfterValueString`, (req, res) => jjwgAddressCacheAuditCtrl.updateJjwgAddresCacheAuditByAfterValueString(req, res));

router.post(`/api-${sys}/jjwg-address-cache-audit/updateJjwgAddresCacheAuditByBeforeValueText`, (req, res) => jjwgAddressCacheAuditCtrl.updateJjwgAddresCacheAuditByBeforeValueText(req, res));

router.post(`/api-${sys}/jjwg-address-cache-audit/updateJjwgAddresCacheAuditByAfterValueText`, (req, res) => jjwgAddressCacheAuditCtrl.updateJjwgAddresCacheAuditByAfterValueText(req, res));

router.post(`/api-${sys}/jjwg-address-cache-audit/updateJjwgAddresCacheAuditByDateCreated`, (req, res) => jjwgAddressCacheAuditCtrl.updateJjwgAddresCacheAuditByDateCreated(req, res));

router.post(`/api-${sys}/jjwg-address-cache-audit/updateJjwgAddresCacheAuditByParentId`, (req, res) => jjwgAddressCacheAuditCtrl.updateJjwgAddresCacheAuditByParentId(req, res));





router.get(`/api-${sys}/jjwg-address-cache-audit/`, (req, res) => jjwgAddressCacheAuditCtrl.getAllJjwgAddressCacheAudit(req, res));
router.post(`/api-${sys}/jjwg-address-cache-audit/`, (req, res) => jjwgAddressCacheAuditCtrl.addJjwgAddresCacheAudit(req, res));
router.get(`/api-${sys}/jjwg-address-cache-audit/:id`, (req, res) => jjwgAddressCacheAuditCtrl.getAJjwgAddresCacheAudit(req, res));
router.put(`/api-${sys}/jjwg-address-cache-audit/:id`, (req, res) => jjwgAddressCacheAuditCtrl.updateJjwgAddresCacheAudit(req, res));
router.delete(`/api-${sys}/jjwg-address-cache-audit/:id`, (req, res) => jjwgAddressCacheAuditCtrl.deleteJjwgAddresCacheAudit(req, res));

//</es-section>
module.exports = router;
