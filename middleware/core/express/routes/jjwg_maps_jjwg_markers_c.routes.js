/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:08 GMT-0400 (Bolivia Time)
 * Time: 14:57:8
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:08 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:8
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const jjwgMapsJjwgMarkersCCtrl = require("../controllers/jjwg_maps_jjwg_markers_c.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/jjwg-maps-jjwg-markers-c/findOneById/:id`, (req, res) => jjwgMapsJjwgMarkersCCtrl.findOneById(req, res));

router.get(`/api-${sys}/jjwg-maps-jjwg-markers-c/findOneByDeleted/:deleted`, (req, res) => jjwgMapsJjwgMarkersCCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/jjwg-maps-jjwg-markers-c/findOneByJjwgMapsB229wgMapsIda/:jjwgMapsB229wgMapsIda`, (req, res) => jjwgMapsJjwgMarkersCCtrl.findOneByJjwgMapsB229wgMapsIda(req, res));

router.get(`/api-${sys}/jjwg-maps-jjwg-markers-c/findOneByJjwgMaps2e31markersIdb/:jjwgMaps2e31markersIdb`, (req, res) => jjwgMapsJjwgMarkersCCtrl.findOneByJjwgMaps2e31markersIdb(req, res));

router.get(`/api-${sys}/jjwg-maps-jjwg-markers-c/findOneByDateModified/:dateModified`, (req, res) => jjwgMapsJjwgMarkersCCtrl.findOneByDateModified(req, res));



router.post(`/api-${sys}/jjwg-maps-jjwg-markers-c/updateJjwgMapJjwgMarkerCById`, (req, res) => jjwgMapsJjwgMarkersCCtrl.updateJjwgMapJjwgMarkerCById(req, res));

router.post(`/api-${sys}/jjwg-maps-jjwg-markers-c/updateJjwgMapJjwgMarkerCByDeleted`, (req, res) => jjwgMapsJjwgMarkersCCtrl.updateJjwgMapJjwgMarkerCByDeleted(req, res));

router.post(`/api-${sys}/jjwg-maps-jjwg-markers-c/updateJjwgMapJjwgMarkerCByJjwgMapsB229wgMapsIda`, (req, res) => jjwgMapsJjwgMarkersCCtrl.updateJjwgMapJjwgMarkerCByJjwgMapsB229wgMapsIda(req, res));

router.post(`/api-${sys}/jjwg-maps-jjwg-markers-c/updateJjwgMapJjwgMarkerCByJjwgMaps2e31markersIdb`, (req, res) => jjwgMapsJjwgMarkersCCtrl.updateJjwgMapJjwgMarkerCByJjwgMaps2e31markersIdb(req, res));

router.post(`/api-${sys}/jjwg-maps-jjwg-markers-c/updateJjwgMapJjwgMarkerCByDateModified`, (req, res) => jjwgMapsJjwgMarkersCCtrl.updateJjwgMapJjwgMarkerCByDateModified(req, res));





router.get(`/api-${sys}/jjwg-maps-jjwg-markers-c/`, (req, res) => jjwgMapsJjwgMarkersCCtrl.getAllJjwgMapsJjwgMarkersC(req, res));
router.post(`/api-${sys}/jjwg-maps-jjwg-markers-c/`, (req, res) => jjwgMapsJjwgMarkersCCtrl.addJjwgMapJjwgMarkerC(req, res));
router.get(`/api-${sys}/jjwg-maps-jjwg-markers-c/:id`, (req, res) => jjwgMapsJjwgMarkersCCtrl.getAJjwgMapJjwgMarkerC(req, res));
router.put(`/api-${sys}/jjwg-maps-jjwg-markers-c/:id`, (req, res) => jjwgMapsJjwgMarkersCCtrl.updateJjwgMapJjwgMarkerC(req, res));
router.delete(`/api-${sys}/jjwg-maps-jjwg-markers-c/:id`, (req, res) => jjwgMapsJjwgMarkersCCtrl.deleteJjwgMapJjwgMarkerC(req, res));

//</es-section>
module.exports = router;
