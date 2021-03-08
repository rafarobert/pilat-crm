/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:35:49 GMT-0400 (Bolivia Time)
 * Time: 15:35:49
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:35:49 GMT-0400 (Bolivia Time)
 * Last time updated: 15:35:49
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const configCtrl = require("../controllers/config.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/config/findOneByCategory/:category`, (req, res) => configCtrl.findOneByCategory(req, res));

router.get(`/api-${sys}/config/findOneByName/:name`, (req, res) => configCtrl.findOneByName(req, res));

router.get(`/api-${sys}/config/findOneByValue/:value`, (req, res) => configCtrl.findOneByValue(req, res));



router.post(`/api-${sys}/config/updateConfigByCategory`, (req, res) => configCtrl.updateConfigByCategory(req, res));

router.post(`/api-${sys}/config/updateConfigByName`, (req, res) => configCtrl.updateConfigByName(req, res));

router.post(`/api-${sys}/config/updateConfigByValue`, (req, res) => configCtrl.updateConfigByValue(req, res));





//</es-section>
module.exports = router;
