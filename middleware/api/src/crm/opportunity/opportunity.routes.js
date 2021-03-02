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
const cors = require("cors");

//const authenticateToken = require("../../../../config/token");

//<es-section>
const opportunitiesCtrl = require("./opportunity.controller");

router.get(`/api-${sys}/crm/opportunities`, cors(), (req, res) => opportunitiesCtrl.getAllOpportunities(req, res));
router.get(`/api-${sys}/crm/opportunities/:id`, cors(), (req, res) => opportunitiesCtrl.getAOpportunity(req, res));
router.put(`/api-${sys}/crm/opportunities/:id`, cors(), (req, res) => opportunitiesCtrl.updateOpportunity(req, res));
router.delete(`/api-${sys}/crm/opportunities/:id`, cors(), (req, res) => opportunitiesCtrl.deleteOpportunity(req, res));
router.post(`/api-${sys}/crm/opportunities/`, cors(), (req, res) => opportunitiesCtrl.addOpportunity(req, res));


// router.get(`/api-${sys}/crm/leads`, (req, res) => leadCtrl.getOpportunities(req, res));
// router.get(`/api-${sys}/crm/leads/cstm`, (req, res) => leadCtrl.leadsCstm(req, res));
// router.get(`/api-${sys}/crm/leads/sugarfeed`, (req, res) => leadCtrl.leadsSugarFeed(req, res));


module.exports = router;
