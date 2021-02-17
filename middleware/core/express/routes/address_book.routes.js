/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:41:47 GMT-0400 (Bolivia Time)
 * Time: 4:41:47
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:41:47 GMT-0400 (Bolivia Time)
 * Last time updated: 4:41:47
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const addressBookCtrl = require("../controllers/address_book.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/address-book/findOneByBean/:bean`, (req, res) => addressBookCtrl.findOneByBean(req, res));

router.get(`/api-${sys}/address-book/findOneByAssignedUserId/:assignedUserId`, (req, res) => addressBookCtrl.findOneByAssignedUserId(req, res));

router.get(`/api-${sys}/address-book/findOneByBeanId/:beanId`, (req, res) => addressBookCtrl.findOneByBeanId(req, res));



router.post(`/api-${sys}/address-book/updateAddresBookByBean`, (req, res) => addressBookCtrl.updateAddresBookByBean(req, res));

router.post(`/api-${sys}/address-book/updateAddresBookByAssignedUserId`, (req, res) => addressBookCtrl.updateAddresBookByAssignedUserId(req, res));

router.post(`/api-${sys}/address-book/updateAddresBookByBeanId`, (req, res) => addressBookCtrl.updateAddresBookByBeanId(req, res));





//</es-section>
module.exports = router;