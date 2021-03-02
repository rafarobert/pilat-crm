/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:01:02 GMT-0400 (Bolivia Time)
 * Time: 14:1:2
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:01:02 GMT-0400 (Bolivia Time)
 * Last time updated: 14:1:2
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const jjwgMarkersCtrl = require("../controllers/jjwg_markers.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/jjwg-markers/findOneById/:id`, (req, res) => jjwgMarkersCtrl.findOneById(req, res));

router.get(`/api-${sys}/jjwg-markers/findOneByDeleted/:deleted`, (req, res) => jjwgMarkersCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/jjwg-markers/findOneByJjwgMapsLat/:jjwgMapsLat`, (req, res) => jjwgMarkersCtrl.findOneByJjwgMapsLat(req, res));

router.get(`/api-${sys}/jjwg-markers/findOneByJjwgMapsLng/:jjwgMapsLng`, (req, res) => jjwgMarkersCtrl.findOneByJjwgMapsLng(req, res));

router.get(`/api-${sys}/jjwg-markers/findOneByName/:name`, (req, res) => jjwgMarkersCtrl.findOneByName(req, res));

router.get(`/api-${sys}/jjwg-markers/findOneByCity/:city`, (req, res) => jjwgMarkersCtrl.findOneByCity(req, res));

router.get(`/api-${sys}/jjwg-markers/findOneByState/:state`, (req, res) => jjwgMarkersCtrl.findOneByState(req, res));

router.get(`/api-${sys}/jjwg-markers/findOneByCountry/:country`, (req, res) => jjwgMarkersCtrl.findOneByCountry(req, res));

router.get(`/api-${sys}/jjwg-markers/findOneByMarkerImage/:markerImage`, (req, res) => jjwgMarkersCtrl.findOneByMarkerImage(req, res));

router.get(`/api-${sys}/jjwg-markers/findOneByDescription/:description`, (req, res) => jjwgMarkersCtrl.findOneByDescription(req, res));

router.get(`/api-${sys}/jjwg-markers/findOneByDateEntered/:dateEntered`, (req, res) => jjwgMarkersCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/jjwg-markers/findOneByDateModified/:dateModified`, (req, res) => jjwgMarkersCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/jjwg-markers/findOneByModifiedUserId/:modifiedUserId`, (req, res) => jjwgMarkersCtrl.findOneByModifiedUserId(req, res));

router.get(`/api-${sys}/jjwg-markers/findOneByCreatedBy/:createdBy`, (req, res) => jjwgMarkersCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/jjwg-markers/findOneByAssignedUserId/:assignedUserId`, (req, res) => jjwgMarkersCtrl.findOneByAssignedUserId(req, res));



router.post(`/api-${sys}/jjwg-markers/updateJjwgMarkerById`, (req, res) => jjwgMarkersCtrl.updateJjwgMarkerById(req, res));

router.post(`/api-${sys}/jjwg-markers/updateJjwgMarkerByDeleted`, (req, res) => jjwgMarkersCtrl.updateJjwgMarkerByDeleted(req, res));

router.post(`/api-${sys}/jjwg-markers/updateJjwgMarkerByJjwgMapsLat`, (req, res) => jjwgMarkersCtrl.updateJjwgMarkerByJjwgMapsLat(req, res));

router.post(`/api-${sys}/jjwg-markers/updateJjwgMarkerByJjwgMapsLng`, (req, res) => jjwgMarkersCtrl.updateJjwgMarkerByJjwgMapsLng(req, res));

router.post(`/api-${sys}/jjwg-markers/updateJjwgMarkerByName`, (req, res) => jjwgMarkersCtrl.updateJjwgMarkerByName(req, res));

router.post(`/api-${sys}/jjwg-markers/updateJjwgMarkerByCity`, (req, res) => jjwgMarkersCtrl.updateJjwgMarkerByCity(req, res));

router.post(`/api-${sys}/jjwg-markers/updateJjwgMarkerByState`, (req, res) => jjwgMarkersCtrl.updateJjwgMarkerByState(req, res));

router.post(`/api-${sys}/jjwg-markers/updateJjwgMarkerByCountry`, (req, res) => jjwgMarkersCtrl.updateJjwgMarkerByCountry(req, res));

router.post(`/api-${sys}/jjwg-markers/updateJjwgMarkerByMarkerImage`, (req, res) => jjwgMarkersCtrl.updateJjwgMarkerByMarkerImage(req, res));

router.post(`/api-${sys}/jjwg-markers/updateJjwgMarkerByDescription`, (req, res) => jjwgMarkersCtrl.updateJjwgMarkerByDescription(req, res));

router.post(`/api-${sys}/jjwg-markers/updateJjwgMarkerByDateEntered`, (req, res) => jjwgMarkersCtrl.updateJjwgMarkerByDateEntered(req, res));

router.post(`/api-${sys}/jjwg-markers/updateJjwgMarkerByDateModified`, (req, res) => jjwgMarkersCtrl.updateJjwgMarkerByDateModified(req, res));

router.post(`/api-${sys}/jjwg-markers/updateJjwgMarkerByModifiedUserId`, (req, res) => jjwgMarkersCtrl.updateJjwgMarkerByModifiedUserId(req, res));

router.post(`/api-${sys}/jjwg-markers/updateJjwgMarkerByCreatedBy`, (req, res) => jjwgMarkersCtrl.updateJjwgMarkerByCreatedBy(req, res));

router.post(`/api-${sys}/jjwg-markers/updateJjwgMarkerByAssignedUserId`, (req, res) => jjwgMarkersCtrl.updateJjwgMarkerByAssignedUserId(req, res));





router.get(`/api-${sys}/jjwg-markers/`, (req, res) => jjwgMarkersCtrl.getAllJjwgMarkers(req, res));
router.post(`/api-${sys}/jjwg-markers/`, (req, res) => jjwgMarkersCtrl.addJjwgMarker(req, res));
router.get(`/api-${sys}/jjwg-markers/:id`, (req, res) => jjwgMarkersCtrl.getAJjwgMarker(req, res));
router.put(`/api-${sys}/jjwg-markers/:id`, (req, res) => jjwgMarkersCtrl.updateJjwgMarker(req, res));
router.delete(`/api-${sys}/jjwg-markers/:id`, (req, res) => jjwgMarkersCtrl.deleteJjwgMarker(req, res));

//</es-section>
module.exports = router;
