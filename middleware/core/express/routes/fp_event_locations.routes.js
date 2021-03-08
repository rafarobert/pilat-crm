/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:36:14 GMT-0400 (Bolivia Time)
 * Time: 15:36:14
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:36:14 GMT-0400 (Bolivia Time)
 * Last time updated: 15:36:14
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const fpEventLocationsCtrl = require("../controllers/fp_event_locations.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/fp-event-locations/findOneById/:id`, (req, res) => fpEventLocationsCtrl.findOneById(req, res));

router.get(`/api-${sys}/fp-event-locations/findOneByDeleted/:deleted`, (req, res) => fpEventLocationsCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/fp-event-locations/findOneByName/:name`, (req, res) => fpEventLocationsCtrl.findOneByName(req, res));

router.get(`/api-${sys}/fp-event-locations/findOneByAddress/:address`, (req, res) => fpEventLocationsCtrl.findOneByAddress(req, res));

router.get(`/api-${sys}/fp-event-locations/findOneByAddressCity/:addressCity`, (req, res) => fpEventLocationsCtrl.findOneByAddressCity(req, res));

router.get(`/api-${sys}/fp-event-locations/findOneByAddressCountry/:addressCountry`, (req, res) => fpEventLocationsCtrl.findOneByAddressCountry(req, res));

router.get(`/api-${sys}/fp-event-locations/findOneByAddressPostalcode/:addressPostalcode`, (req, res) => fpEventLocationsCtrl.findOneByAddressPostalcode(req, res));

router.get(`/api-${sys}/fp-event-locations/findOneByAddressState/:addressState`, (req, res) => fpEventLocationsCtrl.findOneByAddressState(req, res));

router.get(`/api-${sys}/fp-event-locations/findOneByCapacity/:capacity`, (req, res) => fpEventLocationsCtrl.findOneByCapacity(req, res));

router.get(`/api-${sys}/fp-event-locations/findOneByDescription/:description`, (req, res) => fpEventLocationsCtrl.findOneByDescription(req, res));

router.get(`/api-${sys}/fp-event-locations/findOneByDateEntered/:dateEntered`, (req, res) => fpEventLocationsCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/fp-event-locations/findOneByDateModified/:dateModified`, (req, res) => fpEventLocationsCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/fp-event-locations/findOneByModifiedUserId/:modifiedUserId`, (req, res) => fpEventLocationsCtrl.findOneByModifiedUserId(req, res));

router.get(`/api-${sys}/fp-event-locations/findOneByCreatedBy/:createdBy`, (req, res) => fpEventLocationsCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/fp-event-locations/findOneByAssignedUserId/:assignedUserId`, (req, res) => fpEventLocationsCtrl.findOneByAssignedUserId(req, res));



router.post(`/api-${sys}/fp-event-locations/updateFpEventLocationById`, (req, res) => fpEventLocationsCtrl.updateFpEventLocationById(req, res));

router.post(`/api-${sys}/fp-event-locations/updateFpEventLocationByDeleted`, (req, res) => fpEventLocationsCtrl.updateFpEventLocationByDeleted(req, res));

router.post(`/api-${sys}/fp-event-locations/updateFpEventLocationByName`, (req, res) => fpEventLocationsCtrl.updateFpEventLocationByName(req, res));

router.post(`/api-${sys}/fp-event-locations/updateFpEventLocationByAddress`, (req, res) => fpEventLocationsCtrl.updateFpEventLocationByAddress(req, res));

router.post(`/api-${sys}/fp-event-locations/updateFpEventLocationByAddressCity`, (req, res) => fpEventLocationsCtrl.updateFpEventLocationByAddressCity(req, res));

router.post(`/api-${sys}/fp-event-locations/updateFpEventLocationByAddressCountry`, (req, res) => fpEventLocationsCtrl.updateFpEventLocationByAddressCountry(req, res));

router.post(`/api-${sys}/fp-event-locations/updateFpEventLocationByAddressPostalcode`, (req, res) => fpEventLocationsCtrl.updateFpEventLocationByAddressPostalcode(req, res));

router.post(`/api-${sys}/fp-event-locations/updateFpEventLocationByAddressState`, (req, res) => fpEventLocationsCtrl.updateFpEventLocationByAddressState(req, res));

router.post(`/api-${sys}/fp-event-locations/updateFpEventLocationByCapacity`, (req, res) => fpEventLocationsCtrl.updateFpEventLocationByCapacity(req, res));

router.post(`/api-${sys}/fp-event-locations/updateFpEventLocationByDescription`, (req, res) => fpEventLocationsCtrl.updateFpEventLocationByDescription(req, res));

router.post(`/api-${sys}/fp-event-locations/updateFpEventLocationByDateEntered`, (req, res) => fpEventLocationsCtrl.updateFpEventLocationByDateEntered(req, res));

router.post(`/api-${sys}/fp-event-locations/updateFpEventLocationByDateModified`, (req, res) => fpEventLocationsCtrl.updateFpEventLocationByDateModified(req, res));

router.post(`/api-${sys}/fp-event-locations/updateFpEventLocationByModifiedUserId`, (req, res) => fpEventLocationsCtrl.updateFpEventLocationByModifiedUserId(req, res));

router.post(`/api-${sys}/fp-event-locations/updateFpEventLocationByCreatedBy`, (req, res) => fpEventLocationsCtrl.updateFpEventLocationByCreatedBy(req, res));

router.post(`/api-${sys}/fp-event-locations/updateFpEventLocationByAssignedUserId`, (req, res) => fpEventLocationsCtrl.updateFpEventLocationByAssignedUserId(req, res));





router.get(`/api-${sys}/fp-event-locations/`, (req, res) => fpEventLocationsCtrl.getAllFpEventLocations(req, res));
router.post(`/api-${sys}/fp-event-locations/`, (req, res) => fpEventLocationsCtrl.addFpEventLocation(req, res));
router.get(`/api-${sys}/fp-event-locations/:id`, (req, res) => fpEventLocationsCtrl.getAFpEventLocation(req, res));
router.put(`/api-${sys}/fp-event-locations/:id`, (req, res) => fpEventLocationsCtrl.updateFpEventLocation(req, res));
router.delete(`/api-${sys}/fp-event-locations/:id`, (req, res) => fpEventLocationsCtrl.deleteFpEventLocation(req, res));

//</es-section>
module.exports = router;
