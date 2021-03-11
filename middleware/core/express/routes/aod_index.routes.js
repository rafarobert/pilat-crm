/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:55:56 GMT-0400 (Bolivia Time)
 * Time: 14:55:56
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:55:56 GMT-0400 (Bolivia Time)
 * Last time updated: 14:55:56
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const aodIndexCtrl = require("../controllers/aod_index.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/aod-index/findOneById/:id`, (req, res) => aodIndexCtrl.findOneById(req, res));

router.get(`/api-${sys}/aod-index/findOneByDeleted/:deleted`, (req, res) => aodIndexCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/aod-index/findOneByName/:name`, (req, res) => aodIndexCtrl.findOneByName(req, res));

router.get(`/api-${sys}/aod-index/findOneByLocation/:location`, (req, res) => aodIndexCtrl.findOneByLocation(req, res));

router.get(`/api-${sys}/aod-index/findOneByDescription/:description`, (req, res) => aodIndexCtrl.findOneByDescription(req, res));

router.get(`/api-${sys}/aod-index/findOneByDateEntered/:dateEntered`, (req, res) => aodIndexCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/aod-index/findOneByDateModified/:dateModified`, (req, res) => aodIndexCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/aod-index/findOneByLastOptimised/:lastOptimised`, (req, res) => aodIndexCtrl.findOneByLastOptimised(req, res));

router.get(`/api-${sys}/aod-index/findOneByModifiedUserId/:modifiedUserId`, (req, res) => aodIndexCtrl.findOneByModifiedUserId(req, res));

router.get(`/api-${sys}/aod-index/findOneByCreatedBy/:createdBy`, (req, res) => aodIndexCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/aod-index/findOneByAssignedUserId/:assignedUserId`, (req, res) => aodIndexCtrl.findOneByAssignedUserId(req, res));



router.post(`/api-${sys}/aod-index/updateAodIndexById`, (req, res) => aodIndexCtrl.updateAodIndexById(req, res));

router.post(`/api-${sys}/aod-index/updateAodIndexByDeleted`, (req, res) => aodIndexCtrl.updateAodIndexByDeleted(req, res));

router.post(`/api-${sys}/aod-index/updateAodIndexByName`, (req, res) => aodIndexCtrl.updateAodIndexByName(req, res));

router.post(`/api-${sys}/aod-index/updateAodIndexByLocation`, (req, res) => aodIndexCtrl.updateAodIndexByLocation(req, res));

router.post(`/api-${sys}/aod-index/updateAodIndexByDescription`, (req, res) => aodIndexCtrl.updateAodIndexByDescription(req, res));

router.post(`/api-${sys}/aod-index/updateAodIndexByDateEntered`, (req, res) => aodIndexCtrl.updateAodIndexByDateEntered(req, res));

router.post(`/api-${sys}/aod-index/updateAodIndexByDateModified`, (req, res) => aodIndexCtrl.updateAodIndexByDateModified(req, res));

router.post(`/api-${sys}/aod-index/updateAodIndexByLastOptimised`, (req, res) => aodIndexCtrl.updateAodIndexByLastOptimised(req, res));

router.post(`/api-${sys}/aod-index/updateAodIndexByModifiedUserId`, (req, res) => aodIndexCtrl.updateAodIndexByModifiedUserId(req, res));

router.post(`/api-${sys}/aod-index/updateAodIndexByCreatedBy`, (req, res) => aodIndexCtrl.updateAodIndexByCreatedBy(req, res));

router.post(`/api-${sys}/aod-index/updateAodIndexByAssignedUserId`, (req, res) => aodIndexCtrl.updateAodIndexByAssignedUserId(req, res));





router.get(`/api-${sys}/aod-index/`, (req, res) => aodIndexCtrl.getAllAodIndex(req, res));
router.post(`/api-${sys}/aod-index/`, (req, res) => aodIndexCtrl.addAodIndex(req, res));
router.get(`/api-${sys}/aod-index/:id`, (req, res) => aodIndexCtrl.getAAodIndex(req, res));
router.put(`/api-${sys}/aod-index/:id`, (req, res) => aodIndexCtrl.updateAodIndex(req, res));
router.delete(`/api-${sys}/aod-index/:id`, (req, res) => aodIndexCtrl.deleteAodIndex(req, res));

//</es-section>
module.exports = router;
