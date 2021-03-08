/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:34:57 GMT-0400 (Bolivia Time)
 * Time: 15:34:57
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:34:57 GMT-0400 (Bolivia Time)
 * Last time updated: 15:34:57
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const accountsAuditCtrl = require("../controllers/accounts_audit.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/accounts-audit/findOneById/:id`, (req, res) => accountsAuditCtrl.findOneById(req, res));

router.get(`/api-${sys}/accounts-audit/findOneByCreatedBy/:createdBy`, (req, res) => accountsAuditCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/accounts-audit/findOneByFieldName/:fieldName`, (req, res) => accountsAuditCtrl.findOneByFieldName(req, res));

router.get(`/api-${sys}/accounts-audit/findOneByDataType/:dataType`, (req, res) => accountsAuditCtrl.findOneByDataType(req, res));

router.get(`/api-${sys}/accounts-audit/findOneByBeforeValueString/:beforeValueString`, (req, res) => accountsAuditCtrl.findOneByBeforeValueString(req, res));

router.get(`/api-${sys}/accounts-audit/findOneByAfterValueString/:afterValueString`, (req, res) => accountsAuditCtrl.findOneByAfterValueString(req, res));

router.get(`/api-${sys}/accounts-audit/findOneByBeforeValueText/:beforeValueText`, (req, res) => accountsAuditCtrl.findOneByBeforeValueText(req, res));

router.get(`/api-${sys}/accounts-audit/findOneByAfterValueText/:afterValueText`, (req, res) => accountsAuditCtrl.findOneByAfterValueText(req, res));

router.get(`/api-${sys}/accounts-audit/findOneByDateCreated/:dateCreated`, (req, res) => accountsAuditCtrl.findOneByDateCreated(req, res));

router.get(`/api-${sys}/accounts-audit/findOneByParentId/:parentId`, (req, res) => accountsAuditCtrl.findOneByParentId(req, res));



router.post(`/api-${sys}/accounts-audit/updateAccountAuditById`, (req, res) => accountsAuditCtrl.updateAccountAuditById(req, res));

router.post(`/api-${sys}/accounts-audit/updateAccountAuditByCreatedBy`, (req, res) => accountsAuditCtrl.updateAccountAuditByCreatedBy(req, res));

router.post(`/api-${sys}/accounts-audit/updateAccountAuditByFieldName`, (req, res) => accountsAuditCtrl.updateAccountAuditByFieldName(req, res));

router.post(`/api-${sys}/accounts-audit/updateAccountAuditByDataType`, (req, res) => accountsAuditCtrl.updateAccountAuditByDataType(req, res));

router.post(`/api-${sys}/accounts-audit/updateAccountAuditByBeforeValueString`, (req, res) => accountsAuditCtrl.updateAccountAuditByBeforeValueString(req, res));

router.post(`/api-${sys}/accounts-audit/updateAccountAuditByAfterValueString`, (req, res) => accountsAuditCtrl.updateAccountAuditByAfterValueString(req, res));

router.post(`/api-${sys}/accounts-audit/updateAccountAuditByBeforeValueText`, (req, res) => accountsAuditCtrl.updateAccountAuditByBeforeValueText(req, res));

router.post(`/api-${sys}/accounts-audit/updateAccountAuditByAfterValueText`, (req, res) => accountsAuditCtrl.updateAccountAuditByAfterValueText(req, res));

router.post(`/api-${sys}/accounts-audit/updateAccountAuditByDateCreated`, (req, res) => accountsAuditCtrl.updateAccountAuditByDateCreated(req, res));

router.post(`/api-${sys}/accounts-audit/updateAccountAuditByParentId`, (req, res) => accountsAuditCtrl.updateAccountAuditByParentId(req, res));





router.get(`/api-${sys}/accounts-audit/`, (req, res) => accountsAuditCtrl.getAllAccountsAudit(req, res));
router.post(`/api-${sys}/accounts-audit/`, (req, res) => accountsAuditCtrl.addAccountAudit(req, res));
router.get(`/api-${sys}/accounts-audit/:id`, (req, res) => accountsAuditCtrl.getAAccountAudit(req, res));
router.put(`/api-${sys}/accounts-audit/:id`, (req, res) => accountsAuditCtrl.updateAccountAudit(req, res));
router.delete(`/api-${sys}/accounts-audit/:id`, (req, res) => accountsAuditCtrl.deleteAccountAudit(req, res));

//</es-section>
module.exports = router;
