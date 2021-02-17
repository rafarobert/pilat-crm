/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:43:04 GMT-0400 (Bolivia Time)
 * Time: 4:43:4
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:43:04 GMT-0400 (Bolivia Time)
 * Last time updated: 4:43:4
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const erpClienteCtrl = require("../controllers/erp_cliente.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/erp-cliente/findOneById/:id`, (req, res) => erpClienteCtrl.findOneById(req, res));

router.get(`/api-${sys}/erp-cliente/findOneByDeleted/:deleted`, (req, res) => erpClienteCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/erp-cliente/findOneByName/:name`, (req, res) => erpClienteCtrl.findOneByName(req, res));

router.get(`/api-${sys}/erp-cliente/findOneByDescription/:description`, (req, res) => erpClienteCtrl.findOneByDescription(req, res));

router.get(`/api-${sys}/erp-cliente/findOneByDateEntered/:dateEntered`, (req, res) => erpClienteCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/erp-cliente/findOneByDateModified/:dateModified`, (req, res) => erpClienteCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/erp-cliente/findOneByModifiedUserId/:modifiedUserId`, (req, res) => erpClienteCtrl.findOneByModifiedUserId(req, res));

router.get(`/api-${sys}/erp-cliente/findOneByCreatedBy/:createdBy`, (req, res) => erpClienteCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/erp-cliente/findOneByAssignedUserId/:assignedUserId`, (req, res) => erpClienteCtrl.findOneByAssignedUserId(req, res));



router.post(`/api-${sys}/erp-cliente/updateErpClienteById`, (req, res) => erpClienteCtrl.updateErpClienteById(req, res));

router.post(`/api-${sys}/erp-cliente/updateErpClienteByDeleted`, (req, res) => erpClienteCtrl.updateErpClienteByDeleted(req, res));

router.post(`/api-${sys}/erp-cliente/updateErpClienteByName`, (req, res) => erpClienteCtrl.updateErpClienteByName(req, res));

router.post(`/api-${sys}/erp-cliente/updateErpClienteByDescription`, (req, res) => erpClienteCtrl.updateErpClienteByDescription(req, res));

router.post(`/api-${sys}/erp-cliente/updateErpClienteByDateEntered`, (req, res) => erpClienteCtrl.updateErpClienteByDateEntered(req, res));

router.post(`/api-${sys}/erp-cliente/updateErpClienteByDateModified`, (req, res) => erpClienteCtrl.updateErpClienteByDateModified(req, res));

router.post(`/api-${sys}/erp-cliente/updateErpClienteByModifiedUserId`, (req, res) => erpClienteCtrl.updateErpClienteByModifiedUserId(req, res));

router.post(`/api-${sys}/erp-cliente/updateErpClienteByCreatedBy`, (req, res) => erpClienteCtrl.updateErpClienteByCreatedBy(req, res));

router.post(`/api-${sys}/erp-cliente/updateErpClienteByAssignedUserId`, (req, res) => erpClienteCtrl.updateErpClienteByAssignedUserId(req, res));





router.get(`/api-${sys}/erp-cliente/`, (req, res) => erpClienteCtrl.getAllErpCliente(req, res));
router.post(`/api-${sys}/erp-cliente/`, (req, res) => erpClienteCtrl.addErpCliente(req, res));
router.get(`/api-${sys}/erp-cliente/:id`, (req, res) => erpClienteCtrl.getAErpCliente(req, res));
router.put(`/api-${sys}/erp-cliente/:id`, (req, res) => erpClienteCtrl.updateErpCliente(req, res));
router.delete(`/api-${sys}/erp-cliente/:id`, (req, res) => erpClienteCtrl.deleteErpCliente(req, res));

//</es-section>
module.exports = router;
