/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:37:27 GMT-0400 (Bolivia Time)
 * Time: 18:37:27
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:37:27 GMT-0400 (Bolivia Time)
 * Last time updated: 18:37:27
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const g3lGelWhatsappAuditCtrl = require("../controllers/g3l_gel_whatsapp_audit.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/g3l-gel-whatsapp-audit/findOneById/:id`, (req, res) => g3lGelWhatsappAuditCtrl.findOneById(req, res));

router.get(`/api-${sys}/g3l-gel-whatsapp-audit/findOneByCreatedBy/:createdBy`, (req, res) => g3lGelWhatsappAuditCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/g3l-gel-whatsapp-audit/findOneByFieldName/:fieldName`, (req, res) => g3lGelWhatsappAuditCtrl.findOneByFieldName(req, res));

router.get(`/api-${sys}/g3l-gel-whatsapp-audit/findOneByDataType/:dataType`, (req, res) => g3lGelWhatsappAuditCtrl.findOneByDataType(req, res));

router.get(`/api-${sys}/g3l-gel-whatsapp-audit/findOneByBeforeValueString/:beforeValueString`, (req, res) => g3lGelWhatsappAuditCtrl.findOneByBeforeValueString(req, res));

router.get(`/api-${sys}/g3l-gel-whatsapp-audit/findOneByAfterValueString/:afterValueString`, (req, res) => g3lGelWhatsappAuditCtrl.findOneByAfterValueString(req, res));

router.get(`/api-${sys}/g3l-gel-whatsapp-audit/findOneByBeforeValueText/:beforeValueText`, (req, res) => g3lGelWhatsappAuditCtrl.findOneByBeforeValueText(req, res));

router.get(`/api-${sys}/g3l-gel-whatsapp-audit/findOneByAfterValueText/:afterValueText`, (req, res) => g3lGelWhatsappAuditCtrl.findOneByAfterValueText(req, res));

router.get(`/api-${sys}/g3l-gel-whatsapp-audit/findOneByDateCreated/:dateCreated`, (req, res) => g3lGelWhatsappAuditCtrl.findOneByDateCreated(req, res));

router.get(`/api-${sys}/g3l-gel-whatsapp-audit/findOneByParentId/:parentId`, (req, res) => g3lGelWhatsappAuditCtrl.findOneByParentId(req, res));



router.post(`/api-${sys}/g3l-gel-whatsapp-audit/updateG3lGelWhatsappAuditById`, (req, res) => g3lGelWhatsappAuditCtrl.updateG3lGelWhatsappAuditById(req, res));

router.post(`/api-${sys}/g3l-gel-whatsapp-audit/updateG3lGelWhatsappAuditByCreatedBy`, (req, res) => g3lGelWhatsappAuditCtrl.updateG3lGelWhatsappAuditByCreatedBy(req, res));

router.post(`/api-${sys}/g3l-gel-whatsapp-audit/updateG3lGelWhatsappAuditByFieldName`, (req, res) => g3lGelWhatsappAuditCtrl.updateG3lGelWhatsappAuditByFieldName(req, res));

router.post(`/api-${sys}/g3l-gel-whatsapp-audit/updateG3lGelWhatsappAuditByDataType`, (req, res) => g3lGelWhatsappAuditCtrl.updateG3lGelWhatsappAuditByDataType(req, res));

router.post(`/api-${sys}/g3l-gel-whatsapp-audit/updateG3lGelWhatsappAuditByBeforeValueString`, (req, res) => g3lGelWhatsappAuditCtrl.updateG3lGelWhatsappAuditByBeforeValueString(req, res));

router.post(`/api-${sys}/g3l-gel-whatsapp-audit/updateG3lGelWhatsappAuditByAfterValueString`, (req, res) => g3lGelWhatsappAuditCtrl.updateG3lGelWhatsappAuditByAfterValueString(req, res));

router.post(`/api-${sys}/g3l-gel-whatsapp-audit/updateG3lGelWhatsappAuditByBeforeValueText`, (req, res) => g3lGelWhatsappAuditCtrl.updateG3lGelWhatsappAuditByBeforeValueText(req, res));

router.post(`/api-${sys}/g3l-gel-whatsapp-audit/updateG3lGelWhatsappAuditByAfterValueText`, (req, res) => g3lGelWhatsappAuditCtrl.updateG3lGelWhatsappAuditByAfterValueText(req, res));

router.post(`/api-${sys}/g3l-gel-whatsapp-audit/updateG3lGelWhatsappAuditByDateCreated`, (req, res) => g3lGelWhatsappAuditCtrl.updateG3lGelWhatsappAuditByDateCreated(req, res));

router.post(`/api-${sys}/g3l-gel-whatsapp-audit/updateG3lGelWhatsappAuditByParentId`, (req, res) => g3lGelWhatsappAuditCtrl.updateG3lGelWhatsappAuditByParentId(req, res));





router.get(`/api-${sys}/g3l-gel-whatsapp-audit/`, (req, res) => g3lGelWhatsappAuditCtrl.getAllG3lGelWhatsappAudit(req, res));
router.post(`/api-${sys}/g3l-gel-whatsapp-audit/`, (req, res) => g3lGelWhatsappAuditCtrl.addG3lGelWhatsappAudit(req, res));
router.get(`/api-${sys}/g3l-gel-whatsapp-audit/:id`, (req, res) => g3lGelWhatsappAuditCtrl.getAG3lGelWhatsappAudit(req, res));
router.put(`/api-${sys}/g3l-gel-whatsapp-audit/:id`, (req, res) => g3lGelWhatsappAuditCtrl.updateG3lGelWhatsappAudit(req, res));
router.delete(`/api-${sys}/g3l-gel-whatsapp-audit/:id`, (req, res) => g3lGelWhatsappAuditCtrl.deleteG3lGelWhatsappAudit(req, res));

//</es-section>
module.exports = router;
