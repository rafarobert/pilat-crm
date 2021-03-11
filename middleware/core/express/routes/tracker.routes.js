/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:52 GMT-0400 (Bolivia Time)
 * Time: 14:57:52
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:52 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:52
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const trackerCtrl = require("../controllers/tracker.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/tracker/findOneById/:id`, (req, res) => trackerCtrl.findOneById(req, res));

router.get(`/api-${sys}/tracker/findOneByVisible/:visible`, (req, res) => trackerCtrl.findOneByVisible(req, res));

router.get(`/api-${sys}/tracker/findOneByDeleted/:deleted`, (req, res) => trackerCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/tracker/findOneByUserId/:userId`, (req, res) => trackerCtrl.findOneByUserId(req, res));

router.get(`/api-${sys}/tracker/findOneByModuleName/:moduleName`, (req, res) => trackerCtrl.findOneByModuleName(req, res));

router.get(`/api-${sys}/tracker/findOneByItemId/:itemId`, (req, res) => trackerCtrl.findOneByItemId(req, res));

router.get(`/api-${sys}/tracker/findOneByItemSummary/:itemSummary`, (req, res) => trackerCtrl.findOneByItemSummary(req, res));

router.get(`/api-${sys}/tracker/findOneByAction/:action`, (req, res) => trackerCtrl.findOneByAction(req, res));

router.get(`/api-${sys}/tracker/findOneBySessionId/:sessionId`, (req, res) => trackerCtrl.findOneBySessionId(req, res));

router.get(`/api-${sys}/tracker/findOneByDateModified/:dateModified`, (req, res) => trackerCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/tracker/findOneByMonitorId/:monitorId`, (req, res) => trackerCtrl.findOneByMonitorId(req, res));



router.post(`/api-${sys}/tracker/updateTrackerById`, (req, res) => trackerCtrl.updateTrackerById(req, res));

router.post(`/api-${sys}/tracker/updateTrackerByVisible`, (req, res) => trackerCtrl.updateTrackerByVisible(req, res));

router.post(`/api-${sys}/tracker/updateTrackerByDeleted`, (req, res) => trackerCtrl.updateTrackerByDeleted(req, res));

router.post(`/api-${sys}/tracker/updateTrackerByUserId`, (req, res) => trackerCtrl.updateTrackerByUserId(req, res));

router.post(`/api-${sys}/tracker/updateTrackerByModuleName`, (req, res) => trackerCtrl.updateTrackerByModuleName(req, res));

router.post(`/api-${sys}/tracker/updateTrackerByItemId`, (req, res) => trackerCtrl.updateTrackerByItemId(req, res));

router.post(`/api-${sys}/tracker/updateTrackerByItemSummary`, (req, res) => trackerCtrl.updateTrackerByItemSummary(req, res));

router.post(`/api-${sys}/tracker/updateTrackerByAction`, (req, res) => trackerCtrl.updateTrackerByAction(req, res));

router.post(`/api-${sys}/tracker/updateTrackerBySessionId`, (req, res) => trackerCtrl.updateTrackerBySessionId(req, res));

router.post(`/api-${sys}/tracker/updateTrackerByDateModified`, (req, res) => trackerCtrl.updateTrackerByDateModified(req, res));

router.post(`/api-${sys}/tracker/updateTrackerByMonitorId`, (req, res) => trackerCtrl.updateTrackerByMonitorId(req, res));





router.get(`/api-${sys}/tracker/`, (req, res) => trackerCtrl.getAllTracker(req, res));
router.post(`/api-${sys}/tracker/`, (req, res) => trackerCtrl.addTracker(req, res));
router.get(`/api-${sys}/tracker/:id`, (req, res) => trackerCtrl.getATracker(req, res));
router.put(`/api-${sys}/tracker/:id`, (req, res) => trackerCtrl.updateTracker(req, res));
router.delete(`/api-${sys}/tracker/:id`, (req, res) => trackerCtrl.deleteTracker(req, res));

//</es-section>
module.exports = router;
