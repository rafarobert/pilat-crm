/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:14 GMT-0400 (Bolivia Time)
 * Time: 14:57:14
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:14 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:14
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const leadsImportCtrl = require("../controllers/leads_import.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/leads-import/findOneByProspeccion/:prospeccion`, (req, res) => leadsImportCtrl.findOneByProspeccion(req, res));

router.get(`/api-${sys}/leads-import/findOneByOficial/:oficial`, (req, res) => leadsImportCtrl.findOneByOficial(req, res));

router.get(`/api-${sys}/leads-import/findOneByMes/:mes`, (req, res) => leadsImportCtrl.findOneByMes(req, res));

router.get(`/api-${sys}/leads-import/findOneByCliente/:cliente`, (req, res) => leadsImportCtrl.findOneByCliente(req, res));

router.get(`/api-${sys}/leads-import/findOneByLugarorubrodetrabajo/:lugarorubrodetrabajo`, (req, res) => leadsImportCtrl.findOneByLugarorubrodetrabajo(req, res));

router.get(`/api-${sys}/leads-import/findOneByTeléfono/:teléfono`, (req, res) => leadsImportCtrl.findOneByTeléfono(req, res));

router.get(`/api-${sys}/leads-import/findOneByFecha/:fecha`, (req, res) => leadsImportCtrl.findOneByFecha(req, res));



router.post(`/api-${sys}/leads-import/updateLeadImportByProspeccion`, (req, res) => leadsImportCtrl.updateLeadImportByProspeccion(req, res));

router.post(`/api-${sys}/leads-import/updateLeadImportByOficial`, (req, res) => leadsImportCtrl.updateLeadImportByOficial(req, res));

router.post(`/api-${sys}/leads-import/updateLeadImportByMes`, (req, res) => leadsImportCtrl.updateLeadImportByMes(req, res));

router.post(`/api-${sys}/leads-import/updateLeadImportByCliente`, (req, res) => leadsImportCtrl.updateLeadImportByCliente(req, res));

router.post(`/api-${sys}/leads-import/updateLeadImportByLugarorubrodetrabajo`, (req, res) => leadsImportCtrl.updateLeadImportByLugarorubrodetrabajo(req, res));

router.post(`/api-${sys}/leads-import/updateLeadImportByTeléfono`, (req, res) => leadsImportCtrl.updateLeadImportByTeléfono(req, res));

router.post(`/api-${sys}/leads-import/updateLeadImportByFecha`, (req, res) => leadsImportCtrl.updateLeadImportByFecha(req, res));





//</es-section>
module.exports = router;
