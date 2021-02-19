/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:37:12 GMT-0400 (Bolivia Time)
 * Time: 18:37:12
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:37:12 GMT-0400 (Bolivia Time)
 * Last time updated: 18:37:12
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const erpClienteAuditCtrl = require("../controllers/erp_cliente_audit.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/erp-cliente-audit/findOneById/:id`, (req, res) => erpClienteAuditCtrl.findOneById(req, res));

router.get(`/api-${sys}/erp-cliente-audit/findOneByCreatedBy/:createdBy`, (req, res) => erpClienteAuditCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/erp-cliente-audit/findOneByFieldName/:fieldName`, (req, res) => erpClienteAuditCtrl.findOneByFieldName(req, res));

router.get(`/api-${sys}/erp-cliente-audit/findOneByDataType/:dataType`, (req, res) => erpClienteAuditCtrl.findOneByDataType(req, res));

router.get(`/api-${sys}/erp-cliente-audit/findOneByBeforeValueString/:beforeValueString`, (req, res) => erpClienteAuditCtrl.findOneByBeforeValueString(req, res));

router.get(`/api-${sys}/erp-cliente-audit/findOneByAfterValueString/:afterValueString`, (req, res) => erpClienteAuditCtrl.findOneByAfterValueString(req, res));

router.get(`/api-${sys}/erp-cliente-audit/findOneByBeforeValueText/:beforeValueText`, (req, res) => erpClienteAuditCtrl.findOneByBeforeValueText(req, res));

router.get(`/api-${sys}/erp-cliente-audit/findOneByAfterValueText/:afterValueText`, (req, res) => erpClienteAuditCtrl.findOneByAfterValueText(req, res));

router.get(`/api-${sys}/erp-cliente-audit/findOneByDateCreated/:dateCreated`, (req, res) => erpClienteAuditCtrl.findOneByDateCreated(req, res));

router.get(`/api-${sys}/erp-cliente-audit/findOneByParentId/:parentId`, (req, res) => erpClienteAuditCtrl.findOneByParentId(req, res));



router.post(`/api-${sys}/erp-cliente-audit/updateErpClienteAuditById`, (req, res) => erpClienteAuditCtrl.updateErpClienteAuditById(req, res));

router.post(`/api-${sys}/erp-cliente-audit/updateErpClienteAuditByCreatedBy`, (req, res) => erpClienteAuditCtrl.updateErpClienteAuditByCreatedBy(req, res));

router.post(`/api-${sys}/erp-cliente-audit/updateErpClienteAuditByFieldName`, (req, res) => erpClienteAuditCtrl.updateErpClienteAuditByFieldName(req, res));

router.post(`/api-${sys}/erp-cliente-audit/updateErpClienteAuditByDataType`, (req, res) => erpClienteAuditCtrl.updateErpClienteAuditByDataType(req, res));

router.post(`/api-${sys}/erp-cliente-audit/updateErpClienteAuditByBeforeValueString`, (req, res) => erpClienteAuditCtrl.updateErpClienteAuditByBeforeValueString(req, res));

router.post(`/api-${sys}/erp-cliente-audit/updateErpClienteAuditByAfterValueString`, (req, res) => erpClienteAuditCtrl.updateErpClienteAuditByAfterValueString(req, res));

router.post(`/api-${sys}/erp-cliente-audit/updateErpClienteAuditByBeforeValueText`, (req, res) => erpClienteAuditCtrl.updateErpClienteAuditByBeforeValueText(req, res));

router.post(`/api-${sys}/erp-cliente-audit/updateErpClienteAuditByAfterValueText`, (req, res) => erpClienteAuditCtrl.updateErpClienteAuditByAfterValueText(req, res));

router.post(`/api-${sys}/erp-cliente-audit/updateErpClienteAuditByDateCreated`, (req, res) => erpClienteAuditCtrl.updateErpClienteAuditByDateCreated(req, res));

router.post(`/api-${sys}/erp-cliente-audit/updateErpClienteAuditByParentId`, (req, res) => erpClienteAuditCtrl.updateErpClienteAuditByParentId(req, res));





router.get(`/api-${sys}/erp-cliente-audit/`, (req, res) => erpClienteAuditCtrl.getAllErpClienteAudit(req, res));
router.post(`/api-${sys}/erp-cliente-audit/`, (req, res) => erpClienteAuditCtrl.addErpClienteAudit(req, res));
router.get(`/api-${sys}/erp-cliente-audit/:id`, (req, res) => erpClienteAuditCtrl.getAErpClienteAudit(req, res));
router.put(`/api-${sys}/erp-cliente-audit/:id`, (req, res) => erpClienteAuditCtrl.updateErpClienteAudit(req, res));
router.delete(`/api-${sys}/erp-cliente-audit/:id`, (req, res) => erpClienteAuditCtrl.deleteErpClienteAudit(req, res));

//</es-section>
module.exports = router;
