/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:06 GMT-0400 (Bolivia Time)
 * Time: 14:57:6
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:06 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:6
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const jjwgMapsCtrl = require("../controllers/jjwg_maps.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/jjwg-maps/findOneById/:id`, (req, res) => jjwgMapsCtrl.findOneById(req, res));

router.get(`/api-${sys}/jjwg-maps/findOneByDeleted/:deleted`, (req, res) => jjwgMapsCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/jjwg-maps/findOneByDistance/:distance`, (req, res) => jjwgMapsCtrl.findOneByDistance(req, res));

router.get(`/api-${sys}/jjwg-maps/findOneByName/:name`, (req, res) => jjwgMapsCtrl.findOneByName(req, res));

router.get(`/api-${sys}/jjwg-maps/findOneByUnitType/:unitType`, (req, res) => jjwgMapsCtrl.findOneByUnitType(req, res));

router.get(`/api-${sys}/jjwg-maps/findOneByModuleType/:moduleType`, (req, res) => jjwgMapsCtrl.findOneByModuleType(req, res));

router.get(`/api-${sys}/jjwg-maps/findOneByParentType/:parentType`, (req, res) => jjwgMapsCtrl.findOneByParentType(req, res));

router.get(`/api-${sys}/jjwg-maps/findOneByDescription/:description`, (req, res) => jjwgMapsCtrl.findOneByDescription(req, res));

router.get(`/api-${sys}/jjwg-maps/findOneByDateEntered/:dateEntered`, (req, res) => jjwgMapsCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/jjwg-maps/findOneByDateModified/:dateModified`, (req, res) => jjwgMapsCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/jjwg-maps/findOneByModifiedUserId/:modifiedUserId`, (req, res) => jjwgMapsCtrl.findOneByModifiedUserId(req, res));

router.get(`/api-${sys}/jjwg-maps/findOneByCreatedBy/:createdBy`, (req, res) => jjwgMapsCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/jjwg-maps/findOneByAssignedUserId/:assignedUserId`, (req, res) => jjwgMapsCtrl.findOneByAssignedUserId(req, res));

router.get(`/api-${sys}/jjwg-maps/findOneByParentId/:parentId`, (req, res) => jjwgMapsCtrl.findOneByParentId(req, res));



router.post(`/api-${sys}/jjwg-maps/updateJjwgMapById`, (req, res) => jjwgMapsCtrl.updateJjwgMapById(req, res));

router.post(`/api-${sys}/jjwg-maps/updateJjwgMapByDeleted`, (req, res) => jjwgMapsCtrl.updateJjwgMapByDeleted(req, res));

router.post(`/api-${sys}/jjwg-maps/updateJjwgMapByDistance`, (req, res) => jjwgMapsCtrl.updateJjwgMapByDistance(req, res));

router.post(`/api-${sys}/jjwg-maps/updateJjwgMapByName`, (req, res) => jjwgMapsCtrl.updateJjwgMapByName(req, res));

router.post(`/api-${sys}/jjwg-maps/updateJjwgMapByUnitType`, (req, res) => jjwgMapsCtrl.updateJjwgMapByUnitType(req, res));

router.post(`/api-${sys}/jjwg-maps/updateJjwgMapByModuleType`, (req, res) => jjwgMapsCtrl.updateJjwgMapByModuleType(req, res));

router.post(`/api-${sys}/jjwg-maps/updateJjwgMapByParentType`, (req, res) => jjwgMapsCtrl.updateJjwgMapByParentType(req, res));

router.post(`/api-${sys}/jjwg-maps/updateJjwgMapByDescription`, (req, res) => jjwgMapsCtrl.updateJjwgMapByDescription(req, res));

router.post(`/api-${sys}/jjwg-maps/updateJjwgMapByDateEntered`, (req, res) => jjwgMapsCtrl.updateJjwgMapByDateEntered(req, res));

router.post(`/api-${sys}/jjwg-maps/updateJjwgMapByDateModified`, (req, res) => jjwgMapsCtrl.updateJjwgMapByDateModified(req, res));

router.post(`/api-${sys}/jjwg-maps/updateJjwgMapByModifiedUserId`, (req, res) => jjwgMapsCtrl.updateJjwgMapByModifiedUserId(req, res));

router.post(`/api-${sys}/jjwg-maps/updateJjwgMapByCreatedBy`, (req, res) => jjwgMapsCtrl.updateJjwgMapByCreatedBy(req, res));

router.post(`/api-${sys}/jjwg-maps/updateJjwgMapByAssignedUserId`, (req, res) => jjwgMapsCtrl.updateJjwgMapByAssignedUserId(req, res));

router.post(`/api-${sys}/jjwg-maps/updateJjwgMapByParentId`, (req, res) => jjwgMapsCtrl.updateJjwgMapByParentId(req, res));





router.get(`/api-${sys}/jjwg-maps/`, (req, res) => jjwgMapsCtrl.getAllJjwgMaps(req, res));
router.post(`/api-${sys}/datatable/jjwg-maps/`, (req, res) => jjwgMapsCtrl.getAllJjwgMaps(req, res));
router.post(`/api-${sys}/jjwg-maps/`, (req, res) => jjwgMapsCtrl.addJjwgMap(req, res));
router.get(`/api-${sys}/jjwg-maps/:id`, (req, res) => jjwgMapsCtrl.getAJjwgMap(req, res));
router.put(`/api-${sys}/jjwg-maps/:id`, (req, res) => jjwgMapsCtrl.updateJjwgMap(req, res));
router.delete(`/api-${sys}/jjwg-maps/:id`, (req, res) => jjwgMapsCtrl.deleteJjwgMap(req, res));

//</es-section>
module.exports = router;
