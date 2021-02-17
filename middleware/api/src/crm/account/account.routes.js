/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sat Dec 19 2020 19:44:07 GMT-0400 (Bolivia Time)
 * Time: 19:44:7users
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
const accountCtrl = require("./account.controller");

router.get(`/api-${sys}/crm/accounts`, (req, res) => accountCtrl.getAllAccounts(req, res));
router.get(`/api-${sys}/crm/accounts/:id`, (req, res) => accountCtrl.getAAccount(req, res));
router.put(`/api-${sys}/crm/accounts/:id`, (req, res) => accountCtrl.updateAccount(req, res));
router.delete(`/api-${sys}/crm/accounts/:id`, (req, res) => accountCtrl.deleteAccount(req, res));
router.post(`/api-${sys}/crm/accounts`, (req, res) => accountCtrl.addAccount(req, res));


module.exports = router;
