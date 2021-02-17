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
const userCtrl = require("./user.controller");

router.get(`/api-${sys}/crm/users`, (req, res) => userCtrl.getAllUsers(req, res));
router.get(`/api-${sys}/crm/users/:id`, (req, res) => userCtrl.getAUser(req, res));
router.put(`/api-${sys}/crm/users/:id`, (req, res) => userCtrl.updateUser(req, res));
router.delete(`/api-${sys}/crm/users/:id`, (req, res) => userCtrl.deleteUser(req, res));
router.post(`/api-${sys}/crm/users`, (req, res) => userCtrl.addUser(req, res));

module.exports = router;
