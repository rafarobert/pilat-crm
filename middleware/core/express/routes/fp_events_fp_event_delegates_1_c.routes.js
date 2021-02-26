/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:22:59 GMT-0400 (Bolivia Time)
 * Time: 0:22:59
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:22:59 GMT-0400 (Bolivia Time)
 * Last time updated: 0:22:59
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const fpEventsFpEventDelegates1CCtrl = require("../controllers/fp_events_fp_event_delegates_1_c.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/fp-events-fp-event-delegates-1-c/findOneById/:id`, (req, res) => fpEventsFpEventDelegates1CCtrl.findOneById(req, res));

router.get(`/api-${sys}/fp-events-fp-event-delegates-1-c/findOneByDeleted/:deleted`, (req, res) => fpEventsFpEventDelegates1CCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/fp-events-fp-event-delegates-1-c/findOneByFpEventsFpEventDelegates1fpEventsIda/:fpEventsFpEventDelegates1fpEventsIda`, (req, res) => fpEventsFpEventDelegates1CCtrl.findOneByFpEventsFpEventDelegates1fpEventsIda(req, res));

router.get(`/api-${sys}/fp-events-fp-event-delegates-1-c/findOneByFpEventsFpEventDelegates1fpEventDelegatesIdb/:fpEventsFpEventDelegates1fpEventDelegatesIdb`, (req, res) => fpEventsFpEventDelegates1CCtrl.findOneByFpEventsFpEventDelegates1fpEventDelegatesIdb(req, res));

router.get(`/api-${sys}/fp-events-fp-event-delegates-1-c/findOneByDateModified/:dateModified`, (req, res) => fpEventsFpEventDelegates1CCtrl.findOneByDateModified(req, res));



router.post(`/api-${sys}/fp-events-fp-event-delegates-1-c/updateFpEventFpEventDelegate1CById`, (req, res) => fpEventsFpEventDelegates1CCtrl.updateFpEventFpEventDelegate1CById(req, res));

router.post(`/api-${sys}/fp-events-fp-event-delegates-1-c/updateFpEventFpEventDelegate1CByDeleted`, (req, res) => fpEventsFpEventDelegates1CCtrl.updateFpEventFpEventDelegate1CByDeleted(req, res));

router.post(`/api-${sys}/fp-events-fp-event-delegates-1-c/updateFpEventFpEventDelegate1CByFpEventsFpEventDelegates1fpEventsIda`, (req, res) => fpEventsFpEventDelegates1CCtrl.updateFpEventFpEventDelegate1CByFpEventsFpEventDelegates1fpEventsIda(req, res));

router.post(`/api-${sys}/fp-events-fp-event-delegates-1-c/updateFpEventFpEventDelegate1CByFpEventsFpEventDelegates1fpEventDelegatesIdb`, (req, res) => fpEventsFpEventDelegates1CCtrl.updateFpEventFpEventDelegate1CByFpEventsFpEventDelegates1fpEventDelegatesIdb(req, res));

router.post(`/api-${sys}/fp-events-fp-event-delegates-1-c/updateFpEventFpEventDelegate1CByDateModified`, (req, res) => fpEventsFpEventDelegates1CCtrl.updateFpEventFpEventDelegate1CByDateModified(req, res));





router.get(`/api-${sys}/fp-events-fp-event-delegates-1-c/`, (req, res) => fpEventsFpEventDelegates1CCtrl.getAllFpEventsFpEventDelegates1C(req, res));
router.post(`/api-${sys}/fp-events-fp-event-delegates-1-c/`, (req, res) => fpEventsFpEventDelegates1CCtrl.addFpEventFpEventDelegate1C(req, res));
router.get(`/api-${sys}/fp-events-fp-event-delegates-1-c/:id`, (req, res) => fpEventsFpEventDelegates1CCtrl.getAFpEventFpEventDelegate1C(req, res));
router.put(`/api-${sys}/fp-events-fp-event-delegates-1-c/:id`, (req, res) => fpEventsFpEventDelegates1CCtrl.updateFpEventFpEventDelegate1C(req, res));
router.delete(`/api-${sys}/fp-events-fp-event-delegates-1-c/:id`, (req, res) => fpEventsFpEventDelegates1CCtrl.deleteFpEventFpEventDelegate1C(req, res));

//</es-section>
module.exports = router;
