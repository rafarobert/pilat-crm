/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:29 GMT-0400 (Bolivia Time)
 * Time: 14:56:29
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:29 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:29
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const callsLeadsCtrl = require("../controllers/calls_leads.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/calls-leads/findOneById/:id`, (req, res) => callsLeadsCtrl.findOneById(req, res));

router.get(`/api-${sys}/calls-leads/findOneByDeleted/:deleted`, (req, res) => callsLeadsCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/calls-leads/findOneByCallId/:callId`, (req, res) => callsLeadsCtrl.findOneByCallId(req, res));

router.get(`/api-${sys}/calls-leads/findOneByLeadId/:leadId`, (req, res) => callsLeadsCtrl.findOneByLeadId(req, res));

router.get(`/api-${sys}/calls-leads/findOneByRequired/:required`, (req, res) => callsLeadsCtrl.findOneByRequired(req, res));

router.get(`/api-${sys}/calls-leads/findOneByAcceptStatus/:acceptStatus`, (req, res) => callsLeadsCtrl.findOneByAcceptStatus(req, res));

router.get(`/api-${sys}/calls-leads/findOneByDateModified/:dateModified`, (req, res) => callsLeadsCtrl.findOneByDateModified(req, res));



router.post(`/api-${sys}/calls-leads/updateCallLeadById`, (req, res) => callsLeadsCtrl.updateCallLeadById(req, res));

router.post(`/api-${sys}/calls-leads/updateCallLeadByDeleted`, (req, res) => callsLeadsCtrl.updateCallLeadByDeleted(req, res));

router.post(`/api-${sys}/calls-leads/updateCallLeadByCallId`, (req, res) => callsLeadsCtrl.updateCallLeadByCallId(req, res));

router.post(`/api-${sys}/calls-leads/updateCallLeadByLeadId`, (req, res) => callsLeadsCtrl.updateCallLeadByLeadId(req, res));

router.post(`/api-${sys}/calls-leads/updateCallLeadByRequired`, (req, res) => callsLeadsCtrl.updateCallLeadByRequired(req, res));

router.post(`/api-${sys}/calls-leads/updateCallLeadByAcceptStatus`, (req, res) => callsLeadsCtrl.updateCallLeadByAcceptStatus(req, res));

router.post(`/api-${sys}/calls-leads/updateCallLeadByDateModified`, (req, res) => callsLeadsCtrl.updateCallLeadByDateModified(req, res));





router.get(`/api-${sys}/calls-leads/`, (req, res) => callsLeadsCtrl.getAllCallsLeads(req, res));
router.post(`/api-${sys}/datatable/calls-leads/`, (req, res) => callsLeadsCtrl.getAllCallsLeads(req, res));
router.post(`/api-${sys}/calls-leads/`, (req, res) => callsLeadsCtrl.addCallLead(req, res));
router.get(`/api-${sys}/calls-leads/:id`, (req, res) => callsLeadsCtrl.getACallLead(req, res));
router.put(`/api-${sys}/calls-leads/:id`, (req, res) => callsLeadsCtrl.updateCallLead(req, res));
router.delete(`/api-${sys}/calls-leads/:id`, (req, res) => callsLeadsCtrl.deleteCallLead(req, res));

//</es-section>
module.exports = router;
