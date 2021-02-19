/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:37:25 GMT-0400 (Bolivia Time)
 * Time: 18:37:25
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:37:25 GMT-0400 (Bolivia Time)
 * Last time updated: 18:37:25
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const fpEventLocationsFpEvents1CCtrl = require("../controllers/fp_event_locations_fp_events_1_c.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/fp-event-locations-fp-events-1-c/findOneById/:id`, (req, res) => fpEventLocationsFpEvents1CCtrl.findOneById(req, res));

router.get(`/api-${sys}/fp-event-locations-fp-events-1-c/findOneByDeleted/:deleted`, (req, res) => fpEventLocationsFpEvents1CCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/fp-event-locations-fp-events-1-c/findOneByFpEventLocationsFpEvents1fpEventLocationsIda/:fpEventLocationsFpEvents1fpEventLocationsIda`, (req, res) => fpEventLocationsFpEvents1CCtrl.findOneByFpEventLocationsFpEvents1fpEventLocationsIda(req, res));

router.get(`/api-${sys}/fp-event-locations-fp-events-1-c/findOneByFpEventLocationsFpEvents1fpEventsIdb/:fpEventLocationsFpEvents1fpEventsIdb`, (req, res) => fpEventLocationsFpEvents1CCtrl.findOneByFpEventLocationsFpEvents1fpEventsIdb(req, res));

router.get(`/api-${sys}/fp-event-locations-fp-events-1-c/findOneByDateModified/:dateModified`, (req, res) => fpEventLocationsFpEvents1CCtrl.findOneByDateModified(req, res));



router.post(`/api-${sys}/fp-event-locations-fp-events-1-c/updateFpEventLocationFpEvent1CById`, (req, res) => fpEventLocationsFpEvents1CCtrl.updateFpEventLocationFpEvent1CById(req, res));

router.post(`/api-${sys}/fp-event-locations-fp-events-1-c/updateFpEventLocationFpEvent1CByDeleted`, (req, res) => fpEventLocationsFpEvents1CCtrl.updateFpEventLocationFpEvent1CByDeleted(req, res));

router.post(`/api-${sys}/fp-event-locations-fp-events-1-c/updateFpEventLocationFpEvent1CByFpEventLocationsFpEvents1fpEventLocationsIda`, (req, res) => fpEventLocationsFpEvents1CCtrl.updateFpEventLocationFpEvent1CByFpEventLocationsFpEvents1fpEventLocationsIda(req, res));

router.post(`/api-${sys}/fp-event-locations-fp-events-1-c/updateFpEventLocationFpEvent1CByFpEventLocationsFpEvents1fpEventsIdb`, (req, res) => fpEventLocationsFpEvents1CCtrl.updateFpEventLocationFpEvent1CByFpEventLocationsFpEvents1fpEventsIdb(req, res));

router.post(`/api-${sys}/fp-event-locations-fp-events-1-c/updateFpEventLocationFpEvent1CByDateModified`, (req, res) => fpEventLocationsFpEvents1CCtrl.updateFpEventLocationFpEvent1CByDateModified(req, res));





router.get(`/api-${sys}/fp-event-locations-fp-events-1-c/`, (req, res) => fpEventLocationsFpEvents1CCtrl.getAllFpEventLocationsFpEvents1C(req, res));
router.post(`/api-${sys}/fp-event-locations-fp-events-1-c/`, (req, res) => fpEventLocationsFpEvents1CCtrl.addFpEventLocationFpEvent1C(req, res));
router.get(`/api-${sys}/fp-event-locations-fp-events-1-c/:id`, (req, res) => fpEventLocationsFpEvents1CCtrl.getAFpEventLocationFpEvent1C(req, res));
router.put(`/api-${sys}/fp-event-locations-fp-events-1-c/:id`, (req, res) => fpEventLocationsFpEvents1CCtrl.updateFpEventLocationFpEvent1C(req, res));
router.delete(`/api-${sys}/fp-event-locations-fp-events-1-c/:id`, (req, res) => fpEventLocationsFpEvents1CCtrl.deleteFpEventLocationFpEvent1C(req, res));

//</es-section>
module.exports = router;
