/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:46 GMT-0400 (Bolivia Time)
 * Time: 14:0:46
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:46 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:46
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const emailAddressesAuditCtrl = require("../controllers/email_addresses_audit.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/email-addresses-audit/findOneById/:id`, (req, res) => emailAddressesAuditCtrl.findOneById(req, res));

router.get(`/api-${sys}/email-addresses-audit/findOneByCreatedBy/:createdBy`, (req, res) => emailAddressesAuditCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/email-addresses-audit/findOneByFieldName/:fieldName`, (req, res) => emailAddressesAuditCtrl.findOneByFieldName(req, res));

router.get(`/api-${sys}/email-addresses-audit/findOneByDataType/:dataType`, (req, res) => emailAddressesAuditCtrl.findOneByDataType(req, res));

router.get(`/api-${sys}/email-addresses-audit/findOneByBeforeValueString/:beforeValueString`, (req, res) => emailAddressesAuditCtrl.findOneByBeforeValueString(req, res));

router.get(`/api-${sys}/email-addresses-audit/findOneByAfterValueString/:afterValueString`, (req, res) => emailAddressesAuditCtrl.findOneByAfterValueString(req, res));

router.get(`/api-${sys}/email-addresses-audit/findOneByBeforeValueText/:beforeValueText`, (req, res) => emailAddressesAuditCtrl.findOneByBeforeValueText(req, res));

router.get(`/api-${sys}/email-addresses-audit/findOneByAfterValueText/:afterValueText`, (req, res) => emailAddressesAuditCtrl.findOneByAfterValueText(req, res));

router.get(`/api-${sys}/email-addresses-audit/findOneByDateCreated/:dateCreated`, (req, res) => emailAddressesAuditCtrl.findOneByDateCreated(req, res));

router.get(`/api-${sys}/email-addresses-audit/findOneByParentId/:parentId`, (req, res) => emailAddressesAuditCtrl.findOneByParentId(req, res));



router.post(`/api-${sys}/email-addresses-audit/updateEmailAddresseAuditById`, (req, res) => emailAddressesAuditCtrl.updateEmailAddresseAuditById(req, res));

router.post(`/api-${sys}/email-addresses-audit/updateEmailAddresseAuditByCreatedBy`, (req, res) => emailAddressesAuditCtrl.updateEmailAddresseAuditByCreatedBy(req, res));

router.post(`/api-${sys}/email-addresses-audit/updateEmailAddresseAuditByFieldName`, (req, res) => emailAddressesAuditCtrl.updateEmailAddresseAuditByFieldName(req, res));

router.post(`/api-${sys}/email-addresses-audit/updateEmailAddresseAuditByDataType`, (req, res) => emailAddressesAuditCtrl.updateEmailAddresseAuditByDataType(req, res));

router.post(`/api-${sys}/email-addresses-audit/updateEmailAddresseAuditByBeforeValueString`, (req, res) => emailAddressesAuditCtrl.updateEmailAddresseAuditByBeforeValueString(req, res));

router.post(`/api-${sys}/email-addresses-audit/updateEmailAddresseAuditByAfterValueString`, (req, res) => emailAddressesAuditCtrl.updateEmailAddresseAuditByAfterValueString(req, res));

router.post(`/api-${sys}/email-addresses-audit/updateEmailAddresseAuditByBeforeValueText`, (req, res) => emailAddressesAuditCtrl.updateEmailAddresseAuditByBeforeValueText(req, res));

router.post(`/api-${sys}/email-addresses-audit/updateEmailAddresseAuditByAfterValueText`, (req, res) => emailAddressesAuditCtrl.updateEmailAddresseAuditByAfterValueText(req, res));

router.post(`/api-${sys}/email-addresses-audit/updateEmailAddresseAuditByDateCreated`, (req, res) => emailAddressesAuditCtrl.updateEmailAddresseAuditByDateCreated(req, res));

router.post(`/api-${sys}/email-addresses-audit/updateEmailAddresseAuditByParentId`, (req, res) => emailAddressesAuditCtrl.updateEmailAddresseAuditByParentId(req, res));





router.get(`/api-${sys}/email-addresses-audit/`, (req, res) => emailAddressesAuditCtrl.getAllEmailAddressesAudit(req, res));
router.post(`/api-${sys}/email-addresses-audit/`, (req, res) => emailAddressesAuditCtrl.addEmailAddresseAudit(req, res));
router.get(`/api-${sys}/email-addresses-audit/:id`, (req, res) => emailAddressesAuditCtrl.getAEmailAddresseAudit(req, res));
router.put(`/api-${sys}/email-addresses-audit/:id`, (req, res) => emailAddressesAuditCtrl.updateEmailAddresseAudit(req, res));
router.delete(`/api-${sys}/email-addresses-audit/:id`, (req, res) => emailAddressesAuditCtrl.deleteEmailAddresseAudit(req, res));

//</es-section>
module.exports = router;
