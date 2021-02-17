/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Sep 11 2020 21:41:43 GMT-0400 (Bolivia Time)
 * Time: 21:41:43
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Sep 11 2020 21:41:43 GMT-0400 (Bolivia Time)
 * Last time updated: 21:41:43
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
const authenticateToken = require("../../../config/token");

//<es-section>
const authCtrl = require("./auth.controller");
//</es-section>


	router.post(`/api-${sys}/auths/rest-login`, authCtrl.restLocalLogin(), (req, res) => authCtrl.restOnLogin(req,res));
	router.get(`/api-${sys}/auths/rest-logout`, (req, res) => authCtrl.restLogout(req,res));
	router.post(`/api-${sys}/auths/rest-signup`, authCtrl.restLocalSignup(), (req, res) => authCtrl.restOnSignup(req,res));

module.exports = router;
