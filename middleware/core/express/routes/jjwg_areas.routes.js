/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:05 GMT-0400 (Bolivia Time)
 * Time: 14:57:5
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:05 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:5
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const jjwgAreasCtrl = require("../controllers/jjwg_areas.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/jjwg-areas/findOneById/:id`, (req, res) => jjwgAreasCtrl.findOneById(req, res));

router.get(`/api-${sys}/jjwg-areas/findOneByDeleted/:deleted`, (req, res) => jjwgAreasCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/jjwg-areas/findOneByName/:name`, (req, res) => jjwgAreasCtrl.findOneByName(req, res));

router.get(`/api-${sys}/jjwg-areas/findOneByCity/:city`, (req, res) => jjwgAreasCtrl.findOneByCity(req, res));

router.get(`/api-${sys}/jjwg-areas/findOneByState/:state`, (req, res) => jjwgAreasCtrl.findOneByState(req, res));

router.get(`/api-${sys}/jjwg-areas/findOneByCountry/:country`, (req, res) => jjwgAreasCtrl.findOneByCountry(req, res));

router.get(`/api-${sys}/jjwg-areas/findOneByDescription/:description`, (req, res) => jjwgAreasCtrl.findOneByDescription(req, res));

router.get(`/api-${sys}/jjwg-areas/findOneByCoordinates/:coordinates`, (req, res) => jjwgAreasCtrl.findOneByCoordinates(req, res));

router.get(`/api-${sys}/jjwg-areas/findOneByDateEntered/:dateEntered`, (req, res) => jjwgAreasCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/jjwg-areas/findOneByDateModified/:dateModified`, (req, res) => jjwgAreasCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/jjwg-areas/findOneByModifiedUserId/:modifiedUserId`, (req, res) => jjwgAreasCtrl.findOneByModifiedUserId(req, res));

router.get(`/api-${sys}/jjwg-areas/findOneByCreatedBy/:createdBy`, (req, res) => jjwgAreasCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/jjwg-areas/findOneByAssignedUserId/:assignedUserId`, (req, res) => jjwgAreasCtrl.findOneByAssignedUserId(req, res));



router.post(`/api-${sys}/jjwg-areas/updateJjwgAreaById`, (req, res) => jjwgAreasCtrl.updateJjwgAreaById(req, res));

router.post(`/api-${sys}/jjwg-areas/updateJjwgAreaByDeleted`, (req, res) => jjwgAreasCtrl.updateJjwgAreaByDeleted(req, res));

router.post(`/api-${sys}/jjwg-areas/updateJjwgAreaByName`, (req, res) => jjwgAreasCtrl.updateJjwgAreaByName(req, res));

router.post(`/api-${sys}/jjwg-areas/updateJjwgAreaByCity`, (req, res) => jjwgAreasCtrl.updateJjwgAreaByCity(req, res));

router.post(`/api-${sys}/jjwg-areas/updateJjwgAreaByState`, (req, res) => jjwgAreasCtrl.updateJjwgAreaByState(req, res));

router.post(`/api-${sys}/jjwg-areas/updateJjwgAreaByCountry`, (req, res) => jjwgAreasCtrl.updateJjwgAreaByCountry(req, res));

router.post(`/api-${sys}/jjwg-areas/updateJjwgAreaByDescription`, (req, res) => jjwgAreasCtrl.updateJjwgAreaByDescription(req, res));

router.post(`/api-${sys}/jjwg-areas/updateJjwgAreaByCoordinates`, (req, res) => jjwgAreasCtrl.updateJjwgAreaByCoordinates(req, res));

router.post(`/api-${sys}/jjwg-areas/updateJjwgAreaByDateEntered`, (req, res) => jjwgAreasCtrl.updateJjwgAreaByDateEntered(req, res));

router.post(`/api-${sys}/jjwg-areas/updateJjwgAreaByDateModified`, (req, res) => jjwgAreasCtrl.updateJjwgAreaByDateModified(req, res));

router.post(`/api-${sys}/jjwg-areas/updateJjwgAreaByModifiedUserId`, (req, res) => jjwgAreasCtrl.updateJjwgAreaByModifiedUserId(req, res));

router.post(`/api-${sys}/jjwg-areas/updateJjwgAreaByCreatedBy`, (req, res) => jjwgAreasCtrl.updateJjwgAreaByCreatedBy(req, res));

router.post(`/api-${sys}/jjwg-areas/updateJjwgAreaByAssignedUserId`, (req, res) => jjwgAreasCtrl.updateJjwgAreaByAssignedUserId(req, res));





router.get(`/api-${sys}/jjwg-areas/`, (req, res) => jjwgAreasCtrl.getAllJjwgAreas(req, res));
router.post(`/api-${sys}/datatable/jjwg-areas/`, (req, res) => jjwgAreasCtrl.getAllJjwgAreas(req, res));
router.post(`/api-${sys}/jjwg-areas/`, (req, res) => jjwgAreasCtrl.addJjwgArea(req, res));
router.get(`/api-${sys}/jjwg-areas/:id`, (req, res) => jjwgAreasCtrl.getAJjwgArea(req, res));
router.put(`/api-${sys}/jjwg-areas/:id`, (req, res) => jjwgAreasCtrl.updateJjwgArea(req, res));
router.delete(`/api-${sys}/jjwg-areas/:id`, (req, res) => jjwgAreasCtrl.deleteJjwgArea(req, res));

//</es-section>
module.exports = router;
