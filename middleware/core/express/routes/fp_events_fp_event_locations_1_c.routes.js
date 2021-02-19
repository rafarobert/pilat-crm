/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:43:11 GMT-0400 (Bolivia Time)
 * Time: 4:43:11
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:43:11 GMT-0400 (Bolivia Time)
 * Last time updated: 4:43:11
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const fpEventsFpEventLocations1CCtrl = require("../controllers/fp_events_fp_event_locations_1_c.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/fp-events-fp-event-locations-1-c/findOneById/:id`, (req, res) => fpEventsFpEventLocations1CCtrl.findOneById(req, res));

router.get(`/api-${sys}/fp-events-fp-event-locations-1-c/findOneByDeleted/:deleted`, (req, res) => fpEventsFpEventLocations1CCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/fp-events-fp-event-locations-1-c/findOneByFpEventsFpEventLocations1fpEventsIda/:fpEventsFpEventLocations1fpEventsIda`, (req, res) => fpEventsFpEventLocations1CCtrl.findOneByFpEventsFpEventLocations1fpEventsIda(req, res));

router.get(`/api-${sys}/fp-events-fp-event-locations-1-c/findOneByFpEventsFpEventLocations1fpEventLocationsIdb/:fpEventsFpEventLocations1fpEventLocationsIdb`, (req, res) => fpEventsFpEventLocations1CCtrl.findOneByFpEventsFpEventLocations1fpEventLocationsIdb(req, res));

router.get(`/api-${sys}/fp-events-fp-event-locations-1-c/findOneByDateModified/:dateModified`, (req, res) => fpEventsFpEventLocations1CCtrl.findOneByDateModified(req, res));



router.post(`/api-${sys}/fp-events-fp-event-locations-1-c/updateFpEventFpEventLocation1CById`, (req, res) => fpEventsFpEventLocations1CCtrl.updateFpEventFpEventLocation1CById(req, res));

router.post(`/api-${sys}/fp-events-fp-event-locations-1-c/updateFpEventFpEventLocation1CByDeleted`, (req, res) => fpEventsFpEventLocations1CCtrl.updateFpEventFpEventLocation1CByDeleted(req, res));

router.post(`/api-${sys}/fp-events-fp-event-locations-1-c/updateFpEventFpEventLocation1CByFpEventsFpEventLocations1fpEventsIda`, (req, res) => fpEventsFpEventLocations1CCtrl.updateFpEventFpEventLocation1CByFpEventsFpEventLocations1fpEventsIda(req, res));

router.post(`/api-${sys}/fp-events-fp-event-locations-1-c/updateFpEventFpEventLocation1CByFpEventsFpEventLocations1fpEventLocationsIdb`, (req, res) => fpEventsFpEventLocations1CCtrl.updateFpEventFpEventLocation1CByFpEventsFpEventLocations1fpEventLocationsIdb(req, res));

router.post(`/api-${sys}/fp-events-fp-event-locations-1-c/updateFpEventFpEventLocation1CByDateModified`, (req, res) => fpEventsFpEventLocations1CCtrl.updateFpEventFpEventLocation1CByDateModified(req, res));





router.get(`/api-${sys}/fp-events-fp-event-locations-1-c/`, (req, res) => fpEventsFpEventLocations1CCtrl.getAllFpEventsFpEventLocations1C(req, res));
router.post(`/api-${sys}/fp-events-fp-event-locations-1-c/`, (req, res) => fpEventsFpEventLocations1CCtrl.addFpEventFpEventLocation1C(req, res));
router.get(`/api-${sys}/fp-events-fp-event-locations-1-c/:id`, (req, res) => fpEventsFpEventLocations1CCtrl.getAFpEventFpEventLocation1C(req, res));
router.put(`/api-${sys}/fp-events-fp-event-locations-1-c/:id`, (req, res) => fpEventsFpEventLocations1CCtrl.updateFpEventFpEventLocation1C(req, res));
router.delete(`/api-${sys}/fp-events-fp-event-locations-1-c/:id`, (req, res) => fpEventsFpEventLocations1CCtrl.deleteFpEventFpEventLocation1C(req, res));

//</es-section>
module.exports = router;
