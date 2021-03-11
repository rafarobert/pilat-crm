/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:57 GMT-0400 (Bolivia Time)
 * Time: 14:56:57
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:57 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:57
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const fpEventsProspects1CCtrl = require("../controllers/fp_events_prospects_1_c.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/fp-events-prospects-1-c/findOneById/:id`, (req, res) => fpEventsProspects1CCtrl.findOneById(req, res));

router.get(`/api-${sys}/fp-events-prospects-1-c/findOneByDeleted/:deleted`, (req, res) => fpEventsProspects1CCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/fp-events-prospects-1-c/findOneByEmailResponded/:emailResponded`, (req, res) => fpEventsProspects1CCtrl.findOneByEmailResponded(req, res));

router.get(`/api-${sys}/fp-events-prospects-1-c/findOneByFpEventsProspects1fpEventsIda/:fpEventsProspects1fpEventsIda`, (req, res) => fpEventsProspects1CCtrl.findOneByFpEventsProspects1fpEventsIda(req, res));

router.get(`/api-${sys}/fp-events-prospects-1-c/findOneByFpEventsProspects1prospectsIdb/:fpEventsProspects1prospectsIdb`, (req, res) => fpEventsProspects1CCtrl.findOneByFpEventsProspects1prospectsIdb(req, res));

router.get(`/api-${sys}/fp-events-prospects-1-c/findOneByInviteStatus/:inviteStatus`, (req, res) => fpEventsProspects1CCtrl.findOneByInviteStatus(req, res));

router.get(`/api-${sys}/fp-events-prospects-1-c/findOneByAcceptStatus/:acceptStatus`, (req, res) => fpEventsProspects1CCtrl.findOneByAcceptStatus(req, res));

router.get(`/api-${sys}/fp-events-prospects-1-c/findOneByDateModified/:dateModified`, (req, res) => fpEventsProspects1CCtrl.findOneByDateModified(req, res));



router.post(`/api-${sys}/fp-events-prospects-1-c/updateFpEventProspect1CById`, (req, res) => fpEventsProspects1CCtrl.updateFpEventProspect1CById(req, res));

router.post(`/api-${sys}/fp-events-prospects-1-c/updateFpEventProspect1CByDeleted`, (req, res) => fpEventsProspects1CCtrl.updateFpEventProspect1CByDeleted(req, res));

router.post(`/api-${sys}/fp-events-prospects-1-c/updateFpEventProspect1CByEmailResponded`, (req, res) => fpEventsProspects1CCtrl.updateFpEventProspect1CByEmailResponded(req, res));

router.post(`/api-${sys}/fp-events-prospects-1-c/updateFpEventProspect1CByFpEventsProspects1fpEventsIda`, (req, res) => fpEventsProspects1CCtrl.updateFpEventProspect1CByFpEventsProspects1fpEventsIda(req, res));

router.post(`/api-${sys}/fp-events-prospects-1-c/updateFpEventProspect1CByFpEventsProspects1prospectsIdb`, (req, res) => fpEventsProspects1CCtrl.updateFpEventProspect1CByFpEventsProspects1prospectsIdb(req, res));

router.post(`/api-${sys}/fp-events-prospects-1-c/updateFpEventProspect1CByInviteStatus`, (req, res) => fpEventsProspects1CCtrl.updateFpEventProspect1CByInviteStatus(req, res));

router.post(`/api-${sys}/fp-events-prospects-1-c/updateFpEventProspect1CByAcceptStatus`, (req, res) => fpEventsProspects1CCtrl.updateFpEventProspect1CByAcceptStatus(req, res));

router.post(`/api-${sys}/fp-events-prospects-1-c/updateFpEventProspect1CByDateModified`, (req, res) => fpEventsProspects1CCtrl.updateFpEventProspect1CByDateModified(req, res));





router.get(`/api-${sys}/fp-events-prospects-1-c/`, (req, res) => fpEventsProspects1CCtrl.getAllFpEventsProspects1C(req, res));
router.post(`/api-${sys}/fp-events-prospects-1-c/`, (req, res) => fpEventsProspects1CCtrl.addFpEventProspect1C(req, res));
router.get(`/api-${sys}/fp-events-prospects-1-c/:id`, (req, res) => fpEventsProspects1CCtrl.getAFpEventProspect1C(req, res));
router.put(`/api-${sys}/fp-events-prospects-1-c/:id`, (req, res) => fpEventsProspects1CCtrl.updateFpEventProspect1C(req, res));
router.delete(`/api-${sys}/fp-events-prospects-1-c/:id`, (req, res) => fpEventsProspects1CCtrl.deleteFpEventProspect1C(req, res));

//</es-section>
module.exports = router;
