/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:23:10 GMT-0400 (Bolivia Time)
 * Time: 0:23:10
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:23:10 GMT-0400 (Bolivia Time)
 * Last time updated: 0:23:10
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const jjwgMapsJjwgAreasCCtrl = require("../controllers/jjwg_maps_jjwg_areas_c.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/jjwg-maps-jjwg-areas-c/findOneById/:id`, (req, res) => jjwgMapsJjwgAreasCCtrl.findOneById(req, res));

router.get(`/api-${sys}/jjwg-maps-jjwg-areas-c/findOneByDeleted/:deleted`, (req, res) => jjwgMapsJjwgAreasCCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/jjwg-maps-jjwg-areas-c/findOneByJjwgMaps5304wgMapsIda/:jjwgMaps5304wgMapsIda`, (req, res) => jjwgMapsJjwgAreasCCtrl.findOneByJjwgMaps5304wgMapsIda(req, res));

router.get(`/api-${sys}/jjwg-maps-jjwg-areas-c/findOneByJjwgMaps41f2gAreasIdb/:jjwgMaps41f2gAreasIdb`, (req, res) => jjwgMapsJjwgAreasCCtrl.findOneByJjwgMaps41f2gAreasIdb(req, res));

router.get(`/api-${sys}/jjwg-maps-jjwg-areas-c/findOneByDateModified/:dateModified`, (req, res) => jjwgMapsJjwgAreasCCtrl.findOneByDateModified(req, res));



router.post(`/api-${sys}/jjwg-maps-jjwg-areas-c/updateJjwgMapJjwgAreaCById`, (req, res) => jjwgMapsJjwgAreasCCtrl.updateJjwgMapJjwgAreaCById(req, res));

router.post(`/api-${sys}/jjwg-maps-jjwg-areas-c/updateJjwgMapJjwgAreaCByDeleted`, (req, res) => jjwgMapsJjwgAreasCCtrl.updateJjwgMapJjwgAreaCByDeleted(req, res));

router.post(`/api-${sys}/jjwg-maps-jjwg-areas-c/updateJjwgMapJjwgAreaCByJjwgMaps5304wgMapsIda`, (req, res) => jjwgMapsJjwgAreasCCtrl.updateJjwgMapJjwgAreaCByJjwgMaps5304wgMapsIda(req, res));

router.post(`/api-${sys}/jjwg-maps-jjwg-areas-c/updateJjwgMapJjwgAreaCByJjwgMaps41f2gAreasIdb`, (req, res) => jjwgMapsJjwgAreasCCtrl.updateJjwgMapJjwgAreaCByJjwgMaps41f2gAreasIdb(req, res));

router.post(`/api-${sys}/jjwg-maps-jjwg-areas-c/updateJjwgMapJjwgAreaCByDateModified`, (req, res) => jjwgMapsJjwgAreasCCtrl.updateJjwgMapJjwgAreaCByDateModified(req, res));





router.get(`/api-${sys}/jjwg-maps-jjwg-areas-c/`, (req, res) => jjwgMapsJjwgAreasCCtrl.getAllJjwgMapsJjwgAreasC(req, res));
router.post(`/api-${sys}/jjwg-maps-jjwg-areas-c/`, (req, res) => jjwgMapsJjwgAreasCCtrl.addJjwgMapJjwgAreaC(req, res));
router.get(`/api-${sys}/jjwg-maps-jjwg-areas-c/:id`, (req, res) => jjwgMapsJjwgAreasCCtrl.getAJjwgMapJjwgAreaC(req, res));
router.put(`/api-${sys}/jjwg-maps-jjwg-areas-c/:id`, (req, res) => jjwgMapsJjwgAreasCCtrl.updateJjwgMapJjwgAreaC(req, res));
router.delete(`/api-${sys}/jjwg-maps-jjwg-areas-c/:id`, (req, res) => jjwgMapsJjwgAreasCCtrl.deleteJjwgMapJjwgAreaC(req, res));

//</es-section>
module.exports = router;
