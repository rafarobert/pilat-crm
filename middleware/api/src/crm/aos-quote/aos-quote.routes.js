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
const aosQuoteCtrl = require("./aos-quote.controller");

router.get(`/api-${sys}/crm/aos-quotes`, (req, res) => aosQuoteCtrl.getAllAosQuotes(req, res));
router.get(`/api-${sys}/crm/aos-quotes/:id`, (req, res) => aosQuoteCtrl.getAAosQuote(req, res));
router.put(`/api-${sys}/crm/aos-quotes/:id`, (req, res) => aosQuoteCtrl.updateAosQuote(req, res));
router.delete(`/api-${sys}/crm/aos-quotes/:id`, (req, res) => aosQuoteCtrl.deleteAosQuote(req, res));
router.post(`/api-${sys}/crm/aos-quotes`, (req, res) => aosQuoteCtrl.addAosQuote(req, res));


module.exports = router;
