/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sat Dec 19 2020 19:44:07 GMT-0400 (Bolivia Time)
 * Time: 19:44:7calls
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sat Dec 19 2020 19:44:07 GMT-0400 (Bolivia Time)
 * Last time updated: 19:44:7
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../../config/token");

//<es-section>
const callCtrl = require("./call.controller");

router.get(`/api-${sys}/crm/calls`, (req, res) => callCtrl.getAllCalls(req, res));
router.get(`/api-${sys}/crm/calls/:id`, (req, res) => callCtrl.getACall(req, res));
router.put(`/api-${sys}/crm/calls/:id`, (req, res) => callCtrl.updateCall(req, res));
router.delete(`/api-${sys}/crm/calls/:id`, (req, res) => callCtrl.deleteCall(req, res));
router.post(`/api-${sys}/crm/calls`, (req, res) => callCtrl.addCall(req, res));

module.exports = router;
