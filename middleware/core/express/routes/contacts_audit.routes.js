/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:42:46 GMT-0400 (Bolivia Time)
 * Time: 4:42:46
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:42:46 GMT-0400 (Bolivia Time)
 * Last time updated: 4:42:46
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const contactsAuditCtrl = require("../controllers/contacts_audit.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/contacts-audit/findOneById/:id`, (req, res) => contactsAuditCtrl.findOneById(req, res));

router.get(`/api-${sys}/contacts-audit/findOneByCreatedBy/:createdBy`, (req, res) => contactsAuditCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/contacts-audit/findOneByFieldName/:fieldName`, (req, res) => contactsAuditCtrl.findOneByFieldName(req, res));

router.get(`/api-${sys}/contacts-audit/findOneByDataType/:dataType`, (req, res) => contactsAuditCtrl.findOneByDataType(req, res));

router.get(`/api-${sys}/contacts-audit/findOneByBeforeValueString/:beforeValueString`, (req, res) => contactsAuditCtrl.findOneByBeforeValueString(req, res));

router.get(`/api-${sys}/contacts-audit/findOneByAfterValueString/:afterValueString`, (req, res) => contactsAuditCtrl.findOneByAfterValueString(req, res));

router.get(`/api-${sys}/contacts-audit/findOneByBeforeValueText/:beforeValueText`, (req, res) => contactsAuditCtrl.findOneByBeforeValueText(req, res));

router.get(`/api-${sys}/contacts-audit/findOneByAfterValueText/:afterValueText`, (req, res) => contactsAuditCtrl.findOneByAfterValueText(req, res));

router.get(`/api-${sys}/contacts-audit/findOneByDateCreated/:dateCreated`, (req, res) => contactsAuditCtrl.findOneByDateCreated(req, res));

router.get(`/api-${sys}/contacts-audit/findOneByParentId/:parentId`, (req, res) => contactsAuditCtrl.findOneByParentId(req, res));



router.post(`/api-${sys}/contacts-audit/updateContactAuditById`, (req, res) => contactsAuditCtrl.updateContactAuditById(req, res));

router.post(`/api-${sys}/contacts-audit/updateContactAuditByCreatedBy`, (req, res) => contactsAuditCtrl.updateContactAuditByCreatedBy(req, res));

router.post(`/api-${sys}/contacts-audit/updateContactAuditByFieldName`, (req, res) => contactsAuditCtrl.updateContactAuditByFieldName(req, res));

router.post(`/api-${sys}/contacts-audit/updateContactAuditByDataType`, (req, res) => contactsAuditCtrl.updateContactAuditByDataType(req, res));

router.post(`/api-${sys}/contacts-audit/updateContactAuditByBeforeValueString`, (req, res) => contactsAuditCtrl.updateContactAuditByBeforeValueString(req, res));

router.post(`/api-${sys}/contacts-audit/updateContactAuditByAfterValueString`, (req, res) => contactsAuditCtrl.updateContactAuditByAfterValueString(req, res));

router.post(`/api-${sys}/contacts-audit/updateContactAuditByBeforeValueText`, (req, res) => contactsAuditCtrl.updateContactAuditByBeforeValueText(req, res));

router.post(`/api-${sys}/contacts-audit/updateContactAuditByAfterValueText`, (req, res) => contactsAuditCtrl.updateContactAuditByAfterValueText(req, res));

router.post(`/api-${sys}/contacts-audit/updateContactAuditByDateCreated`, (req, res) => contactsAuditCtrl.updateContactAuditByDateCreated(req, res));

router.post(`/api-${sys}/contacts-audit/updateContactAuditByParentId`, (req, res) => contactsAuditCtrl.updateContactAuditByParentId(req, res));





router.get(`/api-${sys}/contacts-audit/`, (req, res) => contactsAuditCtrl.getAllContactsAudit(req, res));
router.post(`/api-${sys}/contacts-audit/`, (req, res) => contactsAuditCtrl.addContactAudit(req, res));
router.get(`/api-${sys}/contacts-audit/:id`, (req, res) => contactsAuditCtrl.getAContactAudit(req, res));
router.put(`/api-${sys}/contacts-audit/:id`, (req, res) => contactsAuditCtrl.updateContactAudit(req, res));
router.delete(`/api-${sys}/contacts-audit/:id`, (req, res) => contactsAuditCtrl.deleteContactAudit(req, res));

//</es-section>
module.exports = router;
