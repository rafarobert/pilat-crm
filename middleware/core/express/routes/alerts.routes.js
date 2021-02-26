/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:21:54 GMT-0400 (Bolivia Time)
 * Time: 0:21:54
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:21:54 GMT-0400 (Bolivia Time)
 * Last time updated: 0:21:54
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const alertsCtrl = require("../controllers/alerts.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/alerts/findOneById/:id`, (req, res) => alertsCtrl.findOneById(req, res));

router.get(`/api-${sys}/alerts/findOneByDeleted/:deleted`, (req, res) => alertsCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/alerts/findOneByIsRead/:isRead`, (req, res) => alertsCtrl.findOneByIsRead(req, res));

router.get(`/api-${sys}/alerts/findOneByName/:name`, (req, res) => alertsCtrl.findOneByName(req, res));

router.get(`/api-${sys}/alerts/findOneByTargetModule/:targetModule`, (req, res) => alertsCtrl.findOneByTargetModule(req, res));

router.get(`/api-${sys}/alerts/findOneByType/:type`, (req, res) => alertsCtrl.findOneByType(req, res));

router.get(`/api-${sys}/alerts/findOneByUrlRedirect/:urlRedirect`, (req, res) => alertsCtrl.findOneByUrlRedirect(req, res));

router.get(`/api-${sys}/alerts/findOneByDescription/:description`, (req, res) => alertsCtrl.findOneByDescription(req, res));

router.get(`/api-${sys}/alerts/findOneByDateEntered/:dateEntered`, (req, res) => alertsCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/alerts/findOneByDateModified/:dateModified`, (req, res) => alertsCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/alerts/findOneByModifiedUserId/:modifiedUserId`, (req, res) => alertsCtrl.findOneByModifiedUserId(req, res));

router.get(`/api-${sys}/alerts/findOneByCreatedBy/:createdBy`, (req, res) => alertsCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/alerts/findOneByAssignedUserId/:assignedUserId`, (req, res) => alertsCtrl.findOneByAssignedUserId(req, res));

router.get(`/api-${sys}/alerts/findOneByReminderId/:reminderId`, (req, res) => alertsCtrl.findOneByReminderId(req, res));



router.post(`/api-${sys}/alerts/updateAlertById`, (req, res) => alertsCtrl.updateAlertById(req, res));

router.post(`/api-${sys}/alerts/updateAlertByDeleted`, (req, res) => alertsCtrl.updateAlertByDeleted(req, res));

router.post(`/api-${sys}/alerts/updateAlertByIsRead`, (req, res) => alertsCtrl.updateAlertByIsRead(req, res));

router.post(`/api-${sys}/alerts/updateAlertByName`, (req, res) => alertsCtrl.updateAlertByName(req, res));

router.post(`/api-${sys}/alerts/updateAlertByTargetModule`, (req, res) => alertsCtrl.updateAlertByTargetModule(req, res));

router.post(`/api-${sys}/alerts/updateAlertByType`, (req, res) => alertsCtrl.updateAlertByType(req, res));

router.post(`/api-${sys}/alerts/updateAlertByUrlRedirect`, (req, res) => alertsCtrl.updateAlertByUrlRedirect(req, res));

router.post(`/api-${sys}/alerts/updateAlertByDescription`, (req, res) => alertsCtrl.updateAlertByDescription(req, res));

router.post(`/api-${sys}/alerts/updateAlertByDateEntered`, (req, res) => alertsCtrl.updateAlertByDateEntered(req, res));

router.post(`/api-${sys}/alerts/updateAlertByDateModified`, (req, res) => alertsCtrl.updateAlertByDateModified(req, res));

router.post(`/api-${sys}/alerts/updateAlertByModifiedUserId`, (req, res) => alertsCtrl.updateAlertByModifiedUserId(req, res));

router.post(`/api-${sys}/alerts/updateAlertByCreatedBy`, (req, res) => alertsCtrl.updateAlertByCreatedBy(req, res));

router.post(`/api-${sys}/alerts/updateAlertByAssignedUserId`, (req, res) => alertsCtrl.updateAlertByAssignedUserId(req, res));

router.post(`/api-${sys}/alerts/updateAlertByReminderId`, (req, res) => alertsCtrl.updateAlertByReminderId(req, res));





router.get(`/api-${sys}/alerts/`, (req, res) => alertsCtrl.getAllAlerts(req, res));
router.post(`/api-${sys}/alerts/`, (req, res) => alertsCtrl.addAlert(req, res));
router.get(`/api-${sys}/alerts/:id`, (req, res) => alertsCtrl.getAAlert(req, res));
router.put(`/api-${sys}/alerts/:id`, (req, res) => alertsCtrl.updateAlert(req, res));
router.delete(`/api-${sys}/alerts/:id`, (req, res) => alertsCtrl.deleteAlert(req, res));

//</es-section>
module.exports = router;
