/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:30 GMT-0400 (Bolivia Time)
 * Time: 14:56:30
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:30 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:30
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const callsRescheduleCtrl = require("../controllers/calls_reschedule.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/calls-reschedule/findOneById/:id`, (req, res) => callsRescheduleCtrl.findOneById(req, res));

router.get(`/api-${sys}/calls-reschedule/findOneByDeleted/:deleted`, (req, res) => callsRescheduleCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/calls-reschedule/findOneByName/:name`, (req, res) => callsRescheduleCtrl.findOneByName(req, res));

router.get(`/api-${sys}/calls-reschedule/findOneByReason/:reason`, (req, res) => callsRescheduleCtrl.findOneByReason(req, res));

router.get(`/api-${sys}/calls-reschedule/findOneByDescription/:description`, (req, res) => callsRescheduleCtrl.findOneByDescription(req, res));

router.get(`/api-${sys}/calls-reschedule/findOneByDateEntered/:dateEntered`, (req, res) => callsRescheduleCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/calls-reschedule/findOneByDateModified/:dateModified`, (req, res) => callsRescheduleCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/calls-reschedule/findOneByModifiedUserId/:modifiedUserId`, (req, res) => callsRescheduleCtrl.findOneByModifiedUserId(req, res));

router.get(`/api-${sys}/calls-reschedule/findOneByCreatedBy/:createdBy`, (req, res) => callsRescheduleCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/calls-reschedule/findOneByAssignedUserId/:assignedUserId`, (req, res) => callsRescheduleCtrl.findOneByAssignedUserId(req, res));

router.get(`/api-${sys}/calls-reschedule/findOneByCallId/:callId`, (req, res) => callsRescheduleCtrl.findOneByCallId(req, res));



router.post(`/api-${sys}/calls-reschedule/updateCallRescheduleById`, (req, res) => callsRescheduleCtrl.updateCallRescheduleById(req, res));

router.post(`/api-${sys}/calls-reschedule/updateCallRescheduleByDeleted`, (req, res) => callsRescheduleCtrl.updateCallRescheduleByDeleted(req, res));

router.post(`/api-${sys}/calls-reschedule/updateCallRescheduleByName`, (req, res) => callsRescheduleCtrl.updateCallRescheduleByName(req, res));

router.post(`/api-${sys}/calls-reschedule/updateCallRescheduleByReason`, (req, res) => callsRescheduleCtrl.updateCallRescheduleByReason(req, res));

router.post(`/api-${sys}/calls-reschedule/updateCallRescheduleByDescription`, (req, res) => callsRescheduleCtrl.updateCallRescheduleByDescription(req, res));

router.post(`/api-${sys}/calls-reschedule/updateCallRescheduleByDateEntered`, (req, res) => callsRescheduleCtrl.updateCallRescheduleByDateEntered(req, res));

router.post(`/api-${sys}/calls-reschedule/updateCallRescheduleByDateModified`, (req, res) => callsRescheduleCtrl.updateCallRescheduleByDateModified(req, res));

router.post(`/api-${sys}/calls-reschedule/updateCallRescheduleByModifiedUserId`, (req, res) => callsRescheduleCtrl.updateCallRescheduleByModifiedUserId(req, res));

router.post(`/api-${sys}/calls-reschedule/updateCallRescheduleByCreatedBy`, (req, res) => callsRescheduleCtrl.updateCallRescheduleByCreatedBy(req, res));

router.post(`/api-${sys}/calls-reschedule/updateCallRescheduleByAssignedUserId`, (req, res) => callsRescheduleCtrl.updateCallRescheduleByAssignedUserId(req, res));

router.post(`/api-${sys}/calls-reschedule/updateCallRescheduleByCallId`, (req, res) => callsRescheduleCtrl.updateCallRescheduleByCallId(req, res));





router.get(`/api-${sys}/calls-reschedule/`, (req, res) => callsRescheduleCtrl.getAllCallsReschedule(req, res));
router.post(`/api-${sys}/calls-reschedule/`, (req, res) => callsRescheduleCtrl.addCallReschedule(req, res));
router.get(`/api-${sys}/calls-reschedule/:id`, (req, res) => callsRescheduleCtrl.getACallReschedule(req, res));
router.put(`/api-${sys}/calls-reschedule/:id`, (req, res) => callsRescheduleCtrl.updateCallReschedule(req, res));
router.delete(`/api-${sys}/calls-reschedule/:id`, (req, res) => callsRescheduleCtrl.deleteCallReschedule(req, res));

//</es-section>
module.exports = router;
