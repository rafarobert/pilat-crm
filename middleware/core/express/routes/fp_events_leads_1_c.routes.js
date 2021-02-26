/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:23:00 GMT-0400 (Bolivia Time)
 * Time: 0:23:0
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:23:00 GMT-0400 (Bolivia Time)
 * Last time updated: 0:23:0
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const fpEventsLeads1CCtrl = require("../controllers/fp_events_leads_1_c.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/fp-events-leads-1-c/findOneById/:id`, (req, res) => fpEventsLeads1CCtrl.findOneById(req, res));

router.get(`/api-${sys}/fp-events-leads-1-c/findOneByDeleted/:deleted`, (req, res) => fpEventsLeads1CCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/fp-events-leads-1-c/findOneByEmailResponded/:emailResponded`, (req, res) => fpEventsLeads1CCtrl.findOneByEmailResponded(req, res));

router.get(`/api-${sys}/fp-events-leads-1-c/findOneByFpEventsLeads1fpEventsIda/:fpEventsLeads1fpEventsIda`, (req, res) => fpEventsLeads1CCtrl.findOneByFpEventsLeads1fpEventsIda(req, res));

router.get(`/api-${sys}/fp-events-leads-1-c/findOneByFpEventsLeads1leadsIdb/:fpEventsLeads1leadsIdb`, (req, res) => fpEventsLeads1CCtrl.findOneByFpEventsLeads1leadsIdb(req, res));

router.get(`/api-${sys}/fp-events-leads-1-c/findOneByInviteStatus/:inviteStatus`, (req, res) => fpEventsLeads1CCtrl.findOneByInviteStatus(req, res));

router.get(`/api-${sys}/fp-events-leads-1-c/findOneByAcceptStatus/:acceptStatus`, (req, res) => fpEventsLeads1CCtrl.findOneByAcceptStatus(req, res));

router.get(`/api-${sys}/fp-events-leads-1-c/findOneByDateModified/:dateModified`, (req, res) => fpEventsLeads1CCtrl.findOneByDateModified(req, res));



router.post(`/api-${sys}/fp-events-leads-1-c/updateFpEventLead1CById`, (req, res) => fpEventsLeads1CCtrl.updateFpEventLead1CById(req, res));

router.post(`/api-${sys}/fp-events-leads-1-c/updateFpEventLead1CByDeleted`, (req, res) => fpEventsLeads1CCtrl.updateFpEventLead1CByDeleted(req, res));

router.post(`/api-${sys}/fp-events-leads-1-c/updateFpEventLead1CByEmailResponded`, (req, res) => fpEventsLeads1CCtrl.updateFpEventLead1CByEmailResponded(req, res));

router.post(`/api-${sys}/fp-events-leads-1-c/updateFpEventLead1CByFpEventsLeads1fpEventsIda`, (req, res) => fpEventsLeads1CCtrl.updateFpEventLead1CByFpEventsLeads1fpEventsIda(req, res));

router.post(`/api-${sys}/fp-events-leads-1-c/updateFpEventLead1CByFpEventsLeads1leadsIdb`, (req, res) => fpEventsLeads1CCtrl.updateFpEventLead1CByFpEventsLeads1leadsIdb(req, res));

router.post(`/api-${sys}/fp-events-leads-1-c/updateFpEventLead1CByInviteStatus`, (req, res) => fpEventsLeads1CCtrl.updateFpEventLead1CByInviteStatus(req, res));

router.post(`/api-${sys}/fp-events-leads-1-c/updateFpEventLead1CByAcceptStatus`, (req, res) => fpEventsLeads1CCtrl.updateFpEventLead1CByAcceptStatus(req, res));

router.post(`/api-${sys}/fp-events-leads-1-c/updateFpEventLead1CByDateModified`, (req, res) => fpEventsLeads1CCtrl.updateFpEventLead1CByDateModified(req, res));





router.get(`/api-${sys}/fp-events-leads-1-c/`, (req, res) => fpEventsLeads1CCtrl.getAllFpEventsLeads1C(req, res));
router.post(`/api-${sys}/fp-events-leads-1-c/`, (req, res) => fpEventsLeads1CCtrl.addFpEventLead1C(req, res));
router.get(`/api-${sys}/fp-events-leads-1-c/:id`, (req, res) => fpEventsLeads1CCtrl.getAFpEventLead1C(req, res));
router.put(`/api-${sys}/fp-events-leads-1-c/:id`, (req, res) => fpEventsLeads1CCtrl.updateFpEventLead1C(req, res));
router.delete(`/api-${sys}/fp-events-leads-1-c/:id`, (req, res) => fpEventsLeads1CCtrl.deleteFpEventLead1C(req, res));

//</es-section>
module.exports = router;
