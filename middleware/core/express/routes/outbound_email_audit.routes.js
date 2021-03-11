/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:23 GMT-0400 (Bolivia Time)
 * Time: 14:57:23
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:23 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:23
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const outboundEmailAuditCtrl = require("../controllers/outbound_email_audit.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/outbound-email-audit/findOneById/:id`, (req, res) => outboundEmailAuditCtrl.findOneById(req, res));

router.get(`/api-${sys}/outbound-email-audit/findOneByCreatedBy/:createdBy`, (req, res) => outboundEmailAuditCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/outbound-email-audit/findOneByFieldName/:fieldName`, (req, res) => outboundEmailAuditCtrl.findOneByFieldName(req, res));

router.get(`/api-${sys}/outbound-email-audit/findOneByDataType/:dataType`, (req, res) => outboundEmailAuditCtrl.findOneByDataType(req, res));

router.get(`/api-${sys}/outbound-email-audit/findOneByBeforeValueString/:beforeValueString`, (req, res) => outboundEmailAuditCtrl.findOneByBeforeValueString(req, res));

router.get(`/api-${sys}/outbound-email-audit/findOneByAfterValueString/:afterValueString`, (req, res) => outboundEmailAuditCtrl.findOneByAfterValueString(req, res));

router.get(`/api-${sys}/outbound-email-audit/findOneByBeforeValueText/:beforeValueText`, (req, res) => outboundEmailAuditCtrl.findOneByBeforeValueText(req, res));

router.get(`/api-${sys}/outbound-email-audit/findOneByAfterValueText/:afterValueText`, (req, res) => outboundEmailAuditCtrl.findOneByAfterValueText(req, res));

router.get(`/api-${sys}/outbound-email-audit/findOneByDateCreated/:dateCreated`, (req, res) => outboundEmailAuditCtrl.findOneByDateCreated(req, res));

router.get(`/api-${sys}/outbound-email-audit/findOneByParentId/:parentId`, (req, res) => outboundEmailAuditCtrl.findOneByParentId(req, res));



router.post(`/api-${sys}/outbound-email-audit/updateOutboundEmailAuditById`, (req, res) => outboundEmailAuditCtrl.updateOutboundEmailAuditById(req, res));

router.post(`/api-${sys}/outbound-email-audit/updateOutboundEmailAuditByCreatedBy`, (req, res) => outboundEmailAuditCtrl.updateOutboundEmailAuditByCreatedBy(req, res));

router.post(`/api-${sys}/outbound-email-audit/updateOutboundEmailAuditByFieldName`, (req, res) => outboundEmailAuditCtrl.updateOutboundEmailAuditByFieldName(req, res));

router.post(`/api-${sys}/outbound-email-audit/updateOutboundEmailAuditByDataType`, (req, res) => outboundEmailAuditCtrl.updateOutboundEmailAuditByDataType(req, res));

router.post(`/api-${sys}/outbound-email-audit/updateOutboundEmailAuditByBeforeValueString`, (req, res) => outboundEmailAuditCtrl.updateOutboundEmailAuditByBeforeValueString(req, res));

router.post(`/api-${sys}/outbound-email-audit/updateOutboundEmailAuditByAfterValueString`, (req, res) => outboundEmailAuditCtrl.updateOutboundEmailAuditByAfterValueString(req, res));

router.post(`/api-${sys}/outbound-email-audit/updateOutboundEmailAuditByBeforeValueText`, (req, res) => outboundEmailAuditCtrl.updateOutboundEmailAuditByBeforeValueText(req, res));

router.post(`/api-${sys}/outbound-email-audit/updateOutboundEmailAuditByAfterValueText`, (req, res) => outboundEmailAuditCtrl.updateOutboundEmailAuditByAfterValueText(req, res));

router.post(`/api-${sys}/outbound-email-audit/updateOutboundEmailAuditByDateCreated`, (req, res) => outboundEmailAuditCtrl.updateOutboundEmailAuditByDateCreated(req, res));

router.post(`/api-${sys}/outbound-email-audit/updateOutboundEmailAuditByParentId`, (req, res) => outboundEmailAuditCtrl.updateOutboundEmailAuditByParentId(req, res));





router.get(`/api-${sys}/outbound-email-audit/`, (req, res) => outboundEmailAuditCtrl.getAllOutboundEmailAudit(req, res));
router.post(`/api-${sys}/outbound-email-audit/`, (req, res) => outboundEmailAuditCtrl.addOutboundEmailAudit(req, res));
router.get(`/api-${sys}/outbound-email-audit/:id`, (req, res) => outboundEmailAuditCtrl.getAOutboundEmailAudit(req, res));
router.put(`/api-${sys}/outbound-email-audit/:id`, (req, res) => outboundEmailAuditCtrl.updateOutboundEmailAudit(req, res));
router.delete(`/api-${sys}/outbound-email-audit/:id`, (req, res) => outboundEmailAuditCtrl.deleteOutboundEmailAudit(req, res));

//</es-section>
module.exports = router;
