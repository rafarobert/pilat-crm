/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sat Dec 19 2020 19:44:07 GMT-0400 (Bolivia Time)
 * Time: 19:44:7
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
const cors = require("cors");

//<es-section>
const leadsCtrl = require("./lead.controller");

router.get(`/api-${sys}/crm/leads`, cors(), (req, res) => leadsCtrl.getAllLeads(req, res));
router.get(`/api-${sys}/crm/leads/:id`, cors(), (req, res) => leadsCtrl.getALead(req, res));
router.put(`/api-${sys}/crm/leads/:id`, cors(), (req, res) => leadsCtrl.updateLead(req, res));
router.delete(`/api-${sys}/crm/leads/:id`, cors(), (req, res) => leadsCtrl.deleteLead(req, res));
router.post(`/api-${sys}/crm/leads/`, cors(), (req, res) => leadsCtrl.addLead(req, res));


// router.get(`/api-${sys}/crm/leads`, (req, res) => leadCtrl.getLeads(req, res));
// router.get(`/api-${sys}/crm/leads/cstm`, (req, res) => leadCtrl.leadsCstm(req, res));
// router.get(`/api-${sys}/crm/leads/sugarfeed`, (req, res) => leadCtrl.leadsSugarFeed(req, res));


module.exports = router;
