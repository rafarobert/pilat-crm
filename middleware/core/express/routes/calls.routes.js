/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:28 GMT-0400 (Bolivia Time)
 * Time: 14:56:28
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:28 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:28
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const callsCtrl = require("../controllers/calls.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/calls/findOneById/:id`, (req, res) => callsCtrl.findOneById(req, res));

router.get(`/api-${sys}/calls/findOneByDeleted/:deleted`, (req, res) => callsCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/calls/findOneByEmailReminderSent/:emailReminderSent`, (req, res) => callsCtrl.findOneByEmailReminderSent(req, res));

router.get(`/api-${sys}/calls/findOneByDurationHours/:durationHours`, (req, res) => callsCtrl.findOneByDurationHours(req, res));

router.get(`/api-${sys}/calls/findOneByDurationMinutes/:durationMinutes`, (req, res) => callsCtrl.findOneByDurationMinutes(req, res));

router.get(`/api-${sys}/calls/findOneByReminderTime/:reminderTime`, (req, res) => callsCtrl.findOneByReminderTime(req, res));

router.get(`/api-${sys}/calls/findOneByEmailReminderTime/:emailReminderTime`, (req, res) => callsCtrl.findOneByEmailReminderTime(req, res));

router.get(`/api-${sys}/calls/findOneByRepeatInterval/:repeatInterval`, (req, res) => callsCtrl.findOneByRepeatInterval(req, res));

router.get(`/api-${sys}/calls/findOneByRepeatCount/:repeatCount`, (req, res) => callsCtrl.findOneByRepeatCount(req, res));

router.get(`/api-${sys}/calls/findOneByName/:name`, (req, res) => callsCtrl.findOneByName(req, res));

router.get(`/api-${sys}/calls/findOneByParentType/:parentType`, (req, res) => callsCtrl.findOneByParentType(req, res));

router.get(`/api-${sys}/calls/findOneByStatus/:status`, (req, res) => callsCtrl.findOneByStatus(req, res));

router.get(`/api-${sys}/calls/findOneByDirection/:direction`, (req, res) => callsCtrl.findOneByDirection(req, res));

router.get(`/api-${sys}/calls/findOneByOutlookId/:outlookId`, (req, res) => callsCtrl.findOneByOutlookId(req, res));

router.get(`/api-${sys}/calls/findOneByRepeatType/:repeatType`, (req, res) => callsCtrl.findOneByRepeatType(req, res));

router.get(`/api-${sys}/calls/findOneByRepeatDow/:repeatDow`, (req, res) => callsCtrl.findOneByRepeatDow(req, res));

router.get(`/api-${sys}/calls/findOneByRecurringSource/:recurringSource`, (req, res) => callsCtrl.findOneByRecurringSource(req, res));

router.get(`/api-${sys}/calls/findOneByDescription/:description`, (req, res) => callsCtrl.findOneByDescription(req, res));

router.get(`/api-${sys}/calls/findOneByDateEntered/:dateEntered`, (req, res) => callsCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/calls/findOneByDateModified/:dateModified`, (req, res) => callsCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/calls/findOneByDateStart/:dateStart`, (req, res) => callsCtrl.findOneByDateStart(req, res));

router.get(`/api-${sys}/calls/findOneByDateEnd/:dateEnd`, (req, res) => callsCtrl.findOneByDateEnd(req, res));

router.get(`/api-${sys}/calls/findOneByRepeatUntil/:repeatUntil`, (req, res) => callsCtrl.findOneByRepeatUntil(req, res));

router.get(`/api-${sys}/calls/findOneByModifiedUserId/:modifiedUserId`, (req, res) => callsCtrl.findOneByModifiedUserId(req, res));

router.get(`/api-${sys}/calls/findOneByCreatedBy/:createdBy`, (req, res) => callsCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/calls/findOneByAssignedUserId/:assignedUserId`, (req, res) => callsCtrl.findOneByAssignedUserId(req, res));

router.get(`/api-${sys}/calls/findOneByParentId/:parentId`, (req, res) => callsCtrl.findOneByParentId(req, res));

router.get(`/api-${sys}/calls/findOneByRepeatParentId/:repeatParentId`, (req, res) => callsCtrl.findOneByRepeatParentId(req, res));



router.post(`/api-${sys}/calls/updateCallById`, (req, res) => callsCtrl.updateCallById(req, res));

router.post(`/api-${sys}/calls/updateCallByDeleted`, (req, res) => callsCtrl.updateCallByDeleted(req, res));

router.post(`/api-${sys}/calls/updateCallByEmailReminderSent`, (req, res) => callsCtrl.updateCallByEmailReminderSent(req, res));

router.post(`/api-${sys}/calls/updateCallByDurationHours`, (req, res) => callsCtrl.updateCallByDurationHours(req, res));

router.post(`/api-${sys}/calls/updateCallByDurationMinutes`, (req, res) => callsCtrl.updateCallByDurationMinutes(req, res));

router.post(`/api-${sys}/calls/updateCallByReminderTime`, (req, res) => callsCtrl.updateCallByReminderTime(req, res));

router.post(`/api-${sys}/calls/updateCallByEmailReminderTime`, (req, res) => callsCtrl.updateCallByEmailReminderTime(req, res));

router.post(`/api-${sys}/calls/updateCallByRepeatInterval`, (req, res) => callsCtrl.updateCallByRepeatInterval(req, res));

router.post(`/api-${sys}/calls/updateCallByRepeatCount`, (req, res) => callsCtrl.updateCallByRepeatCount(req, res));

router.post(`/api-${sys}/calls/updateCallByName`, (req, res) => callsCtrl.updateCallByName(req, res));

router.post(`/api-${sys}/calls/updateCallByParentType`, (req, res) => callsCtrl.updateCallByParentType(req, res));

router.post(`/api-${sys}/calls/updateCallByStatus`, (req, res) => callsCtrl.updateCallByStatus(req, res));

router.post(`/api-${sys}/calls/updateCallByDirection`, (req, res) => callsCtrl.updateCallByDirection(req, res));

router.post(`/api-${sys}/calls/updateCallByOutlookId`, (req, res) => callsCtrl.updateCallByOutlookId(req, res));

router.post(`/api-${sys}/calls/updateCallByRepeatType`, (req, res) => callsCtrl.updateCallByRepeatType(req, res));

router.post(`/api-${sys}/calls/updateCallByRepeatDow`, (req, res) => callsCtrl.updateCallByRepeatDow(req, res));

router.post(`/api-${sys}/calls/updateCallByRecurringSource`, (req, res) => callsCtrl.updateCallByRecurringSource(req, res));

router.post(`/api-${sys}/calls/updateCallByDescription`, (req, res) => callsCtrl.updateCallByDescription(req, res));

router.post(`/api-${sys}/calls/updateCallByDateEntered`, (req, res) => callsCtrl.updateCallByDateEntered(req, res));

router.post(`/api-${sys}/calls/updateCallByDateModified`, (req, res) => callsCtrl.updateCallByDateModified(req, res));

router.post(`/api-${sys}/calls/updateCallByDateStart`, (req, res) => callsCtrl.updateCallByDateStart(req, res));

router.post(`/api-${sys}/calls/updateCallByDateEnd`, (req, res) => callsCtrl.updateCallByDateEnd(req, res));

router.post(`/api-${sys}/calls/updateCallByRepeatUntil`, (req, res) => callsCtrl.updateCallByRepeatUntil(req, res));

router.post(`/api-${sys}/calls/updateCallByModifiedUserId`, (req, res) => callsCtrl.updateCallByModifiedUserId(req, res));

router.post(`/api-${sys}/calls/updateCallByCreatedBy`, (req, res) => callsCtrl.updateCallByCreatedBy(req, res));

router.post(`/api-${sys}/calls/updateCallByAssignedUserId`, (req, res) => callsCtrl.updateCallByAssignedUserId(req, res));

router.post(`/api-${sys}/calls/updateCallByParentId`, (req, res) => callsCtrl.updateCallByParentId(req, res));

router.post(`/api-${sys}/calls/updateCallByRepeatParentId`, (req, res) => callsCtrl.updateCallByRepeatParentId(req, res));





router.get(`/api-${sys}/calls/`, (req, res) => callsCtrl.getAllCalls(req, res));
router.post(`/api-${sys}/datatable/calls/`, (req, res) => callsCtrl.getAllCalls(req, res));
router.post(`/api-${sys}/calls/`, (req, res) => callsCtrl.addCall(req, res));
router.get(`/api-${sys}/calls/:id`, (req, res) => callsCtrl.getACall(req, res));
router.put(`/api-${sys}/calls/:id`, (req, res) => callsCtrl.updateCall(req, res));
router.delete(`/api-${sys}/calls/:id`, (req, res) => callsCtrl.deleteCall(req, res));

//</es-section>
module.exports = router;
