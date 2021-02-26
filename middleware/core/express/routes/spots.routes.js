/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:23:47 GMT-0400 (Bolivia Time)
 * Time: 0:23:47
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:23:47 GMT-0400 (Bolivia Time)
 * Last time updated: 0:23:47
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const spotsCtrl = require("../controllers/spots.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/spots/findOneById/:id`, (req, res) => spotsCtrl.findOneById(req, res));

router.get(`/api-${sys}/spots/findOneByDeleted/:deleted`, (req, res) => spotsCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/spots/findOneByName/:name`, (req, res) => spotsCtrl.findOneByName(req, res));

router.get(`/api-${sys}/spots/findOneByType/:type`, (req, res) => spotsCtrl.findOneByType(req, res));

router.get(`/api-${sys}/spots/findOneByDescription/:description`, (req, res) => spotsCtrl.findOneByDescription(req, res));

router.get(`/api-${sys}/spots/findOneByConfig/:config`, (req, res) => spotsCtrl.findOneByConfig(req, res));

router.get(`/api-${sys}/spots/findOneByDateEntered/:dateEntered`, (req, res) => spotsCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/spots/findOneByDateModified/:dateModified`, (req, res) => spotsCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/spots/findOneByModifiedUserId/:modifiedUserId`, (req, res) => spotsCtrl.findOneByModifiedUserId(req, res));

router.get(`/api-${sys}/spots/findOneByCreatedBy/:createdBy`, (req, res) => spotsCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/spots/findOneByAssignedUserId/:assignedUserId`, (req, res) => spotsCtrl.findOneByAssignedUserId(req, res));



router.post(`/api-${sys}/spots/updateSpotById`, (req, res) => spotsCtrl.updateSpotById(req, res));

router.post(`/api-${sys}/spots/updateSpotByDeleted`, (req, res) => spotsCtrl.updateSpotByDeleted(req, res));

router.post(`/api-${sys}/spots/updateSpotByName`, (req, res) => spotsCtrl.updateSpotByName(req, res));

router.post(`/api-${sys}/spots/updateSpotByType`, (req, res) => spotsCtrl.updateSpotByType(req, res));

router.post(`/api-${sys}/spots/updateSpotByDescription`, (req, res) => spotsCtrl.updateSpotByDescription(req, res));

router.post(`/api-${sys}/spots/updateSpotByConfig`, (req, res) => spotsCtrl.updateSpotByConfig(req, res));

router.post(`/api-${sys}/spots/updateSpotByDateEntered`, (req, res) => spotsCtrl.updateSpotByDateEntered(req, res));

router.post(`/api-${sys}/spots/updateSpotByDateModified`, (req, res) => spotsCtrl.updateSpotByDateModified(req, res));

router.post(`/api-${sys}/spots/updateSpotByModifiedUserId`, (req, res) => spotsCtrl.updateSpotByModifiedUserId(req, res));

router.post(`/api-${sys}/spots/updateSpotByCreatedBy`, (req, res) => spotsCtrl.updateSpotByCreatedBy(req, res));

router.post(`/api-${sys}/spots/updateSpotByAssignedUserId`, (req, res) => spotsCtrl.updateSpotByAssignedUserId(req, res));





router.get(`/api-${sys}/spots/`, (req, res) => spotsCtrl.getAllSpots(req, res));
router.post(`/api-${sys}/spots/`, (req, res) => spotsCtrl.addSpot(req, res));
router.get(`/api-${sys}/spots/:id`, (req, res) => spotsCtrl.getASpot(req, res));
router.put(`/api-${sys}/spots/:id`, (req, res) => spotsCtrl.updateSpot(req, res));
router.delete(`/api-${sys}/spots/:id`, (req, res) => spotsCtrl.deleteSpot(req, res));

//</es-section>
module.exports = router;
