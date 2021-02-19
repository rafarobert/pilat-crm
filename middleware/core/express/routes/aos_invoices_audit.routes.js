/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:36:03 GMT-0400 (Bolivia Time)
 * Time: 18:36:3
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:36:03 GMT-0400 (Bolivia Time)
 * Last time updated: 18:36:3
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const aosInvoicesAuditCtrl = require("../controllers/aos_invoices_audit.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/aos-invoices-audit/findOneById/:id`, (req, res) => aosInvoicesAuditCtrl.findOneById(req, res));

router.get(`/api-${sys}/aos-invoices-audit/findOneByCreatedBy/:createdBy`, (req, res) => aosInvoicesAuditCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/aos-invoices-audit/findOneByFieldName/:fieldName`, (req, res) => aosInvoicesAuditCtrl.findOneByFieldName(req, res));

router.get(`/api-${sys}/aos-invoices-audit/findOneByDataType/:dataType`, (req, res) => aosInvoicesAuditCtrl.findOneByDataType(req, res));

router.get(`/api-${sys}/aos-invoices-audit/findOneByBeforeValueString/:beforeValueString`, (req, res) => aosInvoicesAuditCtrl.findOneByBeforeValueString(req, res));

router.get(`/api-${sys}/aos-invoices-audit/findOneByAfterValueString/:afterValueString`, (req, res) => aosInvoicesAuditCtrl.findOneByAfterValueString(req, res));

router.get(`/api-${sys}/aos-invoices-audit/findOneByBeforeValueText/:beforeValueText`, (req, res) => aosInvoicesAuditCtrl.findOneByBeforeValueText(req, res));

router.get(`/api-${sys}/aos-invoices-audit/findOneByAfterValueText/:afterValueText`, (req, res) => aosInvoicesAuditCtrl.findOneByAfterValueText(req, res));

router.get(`/api-${sys}/aos-invoices-audit/findOneByDateCreated/:dateCreated`, (req, res) => aosInvoicesAuditCtrl.findOneByDateCreated(req, res));

router.get(`/api-${sys}/aos-invoices-audit/findOneByParentId/:parentId`, (req, res) => aosInvoicesAuditCtrl.findOneByParentId(req, res));



router.post(`/api-${sys}/aos-invoices-audit/updateAoInvoiceAuditById`, (req, res) => aosInvoicesAuditCtrl.updateAoInvoiceAuditById(req, res));

router.post(`/api-${sys}/aos-invoices-audit/updateAoInvoiceAuditByCreatedBy`, (req, res) => aosInvoicesAuditCtrl.updateAoInvoiceAuditByCreatedBy(req, res));

router.post(`/api-${sys}/aos-invoices-audit/updateAoInvoiceAuditByFieldName`, (req, res) => aosInvoicesAuditCtrl.updateAoInvoiceAuditByFieldName(req, res));

router.post(`/api-${sys}/aos-invoices-audit/updateAoInvoiceAuditByDataType`, (req, res) => aosInvoicesAuditCtrl.updateAoInvoiceAuditByDataType(req, res));

router.post(`/api-${sys}/aos-invoices-audit/updateAoInvoiceAuditByBeforeValueString`, (req, res) => aosInvoicesAuditCtrl.updateAoInvoiceAuditByBeforeValueString(req, res));

router.post(`/api-${sys}/aos-invoices-audit/updateAoInvoiceAuditByAfterValueString`, (req, res) => aosInvoicesAuditCtrl.updateAoInvoiceAuditByAfterValueString(req, res));

router.post(`/api-${sys}/aos-invoices-audit/updateAoInvoiceAuditByBeforeValueText`, (req, res) => aosInvoicesAuditCtrl.updateAoInvoiceAuditByBeforeValueText(req, res));

router.post(`/api-${sys}/aos-invoices-audit/updateAoInvoiceAuditByAfterValueText`, (req, res) => aosInvoicesAuditCtrl.updateAoInvoiceAuditByAfterValueText(req, res));

router.post(`/api-${sys}/aos-invoices-audit/updateAoInvoiceAuditByDateCreated`, (req, res) => aosInvoicesAuditCtrl.updateAoInvoiceAuditByDateCreated(req, res));

router.post(`/api-${sys}/aos-invoices-audit/updateAoInvoiceAuditByParentId`, (req, res) => aosInvoicesAuditCtrl.updateAoInvoiceAuditByParentId(req, res));





router.get(`/api-${sys}/aos-invoices-audit/`, (req, res) => aosInvoicesAuditCtrl.getAllAosInvoicesAudit(req, res));
router.post(`/api-${sys}/aos-invoices-audit/`, (req, res) => aosInvoicesAuditCtrl.addAoInvoiceAudit(req, res));
router.get(`/api-${sys}/aos-invoices-audit/:id`, (req, res) => aosInvoicesAuditCtrl.getAAoInvoiceAudit(req, res));
router.put(`/api-${sys}/aos-invoices-audit/:id`, (req, res) => aosInvoicesAuditCtrl.updateAoInvoiceAudit(req, res));
router.delete(`/api-${sys}/aos-invoices-audit/:id`, (req, res) => aosInvoicesAuditCtrl.deleteAoInvoiceAudit(req, res));

//</es-section>
module.exports = router;
