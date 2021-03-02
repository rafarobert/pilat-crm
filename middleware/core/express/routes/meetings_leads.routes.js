/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:01:09 GMT-0400 (Bolivia Time)
 * Time: 14:1:9
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:01:09 GMT-0400 (Bolivia Time)
 * Last time updated: 14:1:9
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const meetingsLeadsCtrl = require("../controllers/meetings_leads.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/meetings-leads/findOneById/:id`, (req, res) => meetingsLeadsCtrl.findOneById(req, res));

router.get(`/api-${sys}/meetings-leads/findOneByDeleted/:deleted`, (req, res) => meetingsLeadsCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/meetings-leads/findOneByMeetingId/:meetingId`, (req, res) => meetingsLeadsCtrl.findOneByMeetingId(req, res));

router.get(`/api-${sys}/meetings-leads/findOneByLeadId/:leadId`, (req, res) => meetingsLeadsCtrl.findOneByLeadId(req, res));

router.get(`/api-${sys}/meetings-leads/findOneByRequired/:required`, (req, res) => meetingsLeadsCtrl.findOneByRequired(req, res));

router.get(`/api-${sys}/meetings-leads/findOneByAcceptStatus/:acceptStatus`, (req, res) => meetingsLeadsCtrl.findOneByAcceptStatus(req, res));

router.get(`/api-${sys}/meetings-leads/findOneByDateModified/:dateModified`, (req, res) => meetingsLeadsCtrl.findOneByDateModified(req, res));



router.post(`/api-${sys}/meetings-leads/updateMeetingLeadById`, (req, res) => meetingsLeadsCtrl.updateMeetingLeadById(req, res));

router.post(`/api-${sys}/meetings-leads/updateMeetingLeadByDeleted`, (req, res) => meetingsLeadsCtrl.updateMeetingLeadByDeleted(req, res));

router.post(`/api-${sys}/meetings-leads/updateMeetingLeadByMeetingId`, (req, res) => meetingsLeadsCtrl.updateMeetingLeadByMeetingId(req, res));

router.post(`/api-${sys}/meetings-leads/updateMeetingLeadByLeadId`, (req, res) => meetingsLeadsCtrl.updateMeetingLeadByLeadId(req, res));

router.post(`/api-${sys}/meetings-leads/updateMeetingLeadByRequired`, (req, res) => meetingsLeadsCtrl.updateMeetingLeadByRequired(req, res));

router.post(`/api-${sys}/meetings-leads/updateMeetingLeadByAcceptStatus`, (req, res) => meetingsLeadsCtrl.updateMeetingLeadByAcceptStatus(req, res));

router.post(`/api-${sys}/meetings-leads/updateMeetingLeadByDateModified`, (req, res) => meetingsLeadsCtrl.updateMeetingLeadByDateModified(req, res));





router.get(`/api-${sys}/meetings-leads/`, (req, res) => meetingsLeadsCtrl.getAllMeetingsLeads(req, res));
router.post(`/api-${sys}/meetings-leads/`, (req, res) => meetingsLeadsCtrl.addMeetingLead(req, res));
router.get(`/api-${sys}/meetings-leads/:id`, (req, res) => meetingsLeadsCtrl.getAMeetingLead(req, res));
router.put(`/api-${sys}/meetings-leads/:id`, (req, res) => meetingsLeadsCtrl.updateMeetingLead(req, res));
router.delete(`/api-${sys}/meetings-leads/:id`, (req, res) => meetingsLeadsCtrl.deleteMeetingLead(req, res));

//</es-section>
module.exports = router;
