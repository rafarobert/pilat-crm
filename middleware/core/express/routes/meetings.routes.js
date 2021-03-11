/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:15 GMT-0400 (Bolivia Time)
 * Time: 14:57:15
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:15 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:15
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const meetingsCtrl = require("../controllers/meetings.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/meetings/findOneById/:id`, (req, res) => meetingsCtrl.findOneById(req, res));

router.get(`/api-${sys}/meetings/findOneByDeleted/:deleted`, (req, res) => meetingsCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/meetings/findOneByEmailReminderSent/:emailReminderSent`, (req, res) => meetingsCtrl.findOneByEmailReminderSent(req, res));

router.get(`/api-${sys}/meetings/findOneByDurationHours/:durationHours`, (req, res) => meetingsCtrl.findOneByDurationHours(req, res));

router.get(`/api-${sys}/meetings/findOneByDurationMinutes/:durationMinutes`, (req, res) => meetingsCtrl.findOneByDurationMinutes(req, res));

router.get(`/api-${sys}/meetings/findOneByReminderTime/:reminderTime`, (req, res) => meetingsCtrl.findOneByReminderTime(req, res));

router.get(`/api-${sys}/meetings/findOneByEmailReminderTime/:emailReminderTime`, (req, res) => meetingsCtrl.findOneByEmailReminderTime(req, res));

router.get(`/api-${sys}/meetings/findOneBySequence/:sequence`, (req, res) => meetingsCtrl.findOneBySequence(req, res));

router.get(`/api-${sys}/meetings/findOneByRepeatInterval/:repeatInterval`, (req, res) => meetingsCtrl.findOneByRepeatInterval(req, res));

router.get(`/api-${sys}/meetings/findOneByRepeatCount/:repeatCount`, (req, res) => meetingsCtrl.findOneByRepeatCount(req, res));

router.get(`/api-${sys}/meetings/findOneByGsyncLastsync/:gsyncLastsync`, (req, res) => meetingsCtrl.findOneByGsyncLastsync(req, res));

router.get(`/api-${sys}/meetings/findOneByName/:name`, (req, res) => meetingsCtrl.findOneByName(req, res));

router.get(`/api-${sys}/meetings/findOneByLocation/:location`, (req, res) => meetingsCtrl.findOneByLocation(req, res));

router.get(`/api-${sys}/meetings/findOneByPassword/:password`, (req, res) => meetingsCtrl.findOneByPassword(req, res));

router.get(`/api-${sys}/meetings/findOneByJoinUrl/:joinUrl`, (req, res) => meetingsCtrl.findOneByJoinUrl(req, res));

router.get(`/api-${sys}/meetings/findOneByHostUrl/:hostUrl`, (req, res) => meetingsCtrl.findOneByHostUrl(req, res));

router.get(`/api-${sys}/meetings/findOneByDisplayedUrl/:displayedUrl`, (req, res) => meetingsCtrl.findOneByDisplayedUrl(req, res));

router.get(`/api-${sys}/meetings/findOneByCreator/:creator`, (req, res) => meetingsCtrl.findOneByCreator(req, res));

router.get(`/api-${sys}/meetings/findOneByExternalId/:externalId`, (req, res) => meetingsCtrl.findOneByExternalId(req, res));

router.get(`/api-${sys}/meetings/findOneByParentType/:parentType`, (req, res) => meetingsCtrl.findOneByParentType(req, res));

router.get(`/api-${sys}/meetings/findOneByStatus/:status`, (req, res) => meetingsCtrl.findOneByStatus(req, res));

router.get(`/api-${sys}/meetings/findOneByType/:type`, (req, res) => meetingsCtrl.findOneByType(req, res));

router.get(`/api-${sys}/meetings/findOneByOutlookId/:outlookId`, (req, res) => meetingsCtrl.findOneByOutlookId(req, res));

router.get(`/api-${sys}/meetings/findOneByRepeatType/:repeatType`, (req, res) => meetingsCtrl.findOneByRepeatType(req, res));

router.get(`/api-${sys}/meetings/findOneByRepeatDow/:repeatDow`, (req, res) => meetingsCtrl.findOneByRepeatDow(req, res));

router.get(`/api-${sys}/meetings/findOneByRecurringSource/:recurringSource`, (req, res) => meetingsCtrl.findOneByRecurringSource(req, res));

router.get(`/api-${sys}/meetings/findOneByGsyncId/:gsyncId`, (req, res) => meetingsCtrl.findOneByGsyncId(req, res));

router.get(`/api-${sys}/meetings/findOneByDescription/:description`, (req, res) => meetingsCtrl.findOneByDescription(req, res));

router.get(`/api-${sys}/meetings/findOneByDateEntered/:dateEntered`, (req, res) => meetingsCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/meetings/findOneByDateModified/:dateModified`, (req, res) => meetingsCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/meetings/findOneByDateStart/:dateStart`, (req, res) => meetingsCtrl.findOneByDateStart(req, res));

router.get(`/api-${sys}/meetings/findOneByDateEnd/:dateEnd`, (req, res) => meetingsCtrl.findOneByDateEnd(req, res));

router.get(`/api-${sys}/meetings/findOneByRepeatUntil/:repeatUntil`, (req, res) => meetingsCtrl.findOneByRepeatUntil(req, res));

router.get(`/api-${sys}/meetings/findOneByModifiedUserId/:modifiedUserId`, (req, res) => meetingsCtrl.findOneByModifiedUserId(req, res));

router.get(`/api-${sys}/meetings/findOneByCreatedBy/:createdBy`, (req, res) => meetingsCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/meetings/findOneByAssignedUserId/:assignedUserId`, (req, res) => meetingsCtrl.findOneByAssignedUserId(req, res));

router.get(`/api-${sys}/meetings/findOneByParentId/:parentId`, (req, res) => meetingsCtrl.findOneByParentId(req, res));

router.get(`/api-${sys}/meetings/findOneByRepeatParentId/:repeatParentId`, (req, res) => meetingsCtrl.findOneByRepeatParentId(req, res));



router.post(`/api-${sys}/meetings/updateMeetingById`, (req, res) => meetingsCtrl.updateMeetingById(req, res));

router.post(`/api-${sys}/meetings/updateMeetingByDeleted`, (req, res) => meetingsCtrl.updateMeetingByDeleted(req, res));

router.post(`/api-${sys}/meetings/updateMeetingByEmailReminderSent`, (req, res) => meetingsCtrl.updateMeetingByEmailReminderSent(req, res));

router.post(`/api-${sys}/meetings/updateMeetingByDurationHours`, (req, res) => meetingsCtrl.updateMeetingByDurationHours(req, res));

router.post(`/api-${sys}/meetings/updateMeetingByDurationMinutes`, (req, res) => meetingsCtrl.updateMeetingByDurationMinutes(req, res));

router.post(`/api-${sys}/meetings/updateMeetingByReminderTime`, (req, res) => meetingsCtrl.updateMeetingByReminderTime(req, res));

router.post(`/api-${sys}/meetings/updateMeetingByEmailReminderTime`, (req, res) => meetingsCtrl.updateMeetingByEmailReminderTime(req, res));

router.post(`/api-${sys}/meetings/updateMeetingBySequence`, (req, res) => meetingsCtrl.updateMeetingBySequence(req, res));

router.post(`/api-${sys}/meetings/updateMeetingByRepeatInterval`, (req, res) => meetingsCtrl.updateMeetingByRepeatInterval(req, res));

router.post(`/api-${sys}/meetings/updateMeetingByRepeatCount`, (req, res) => meetingsCtrl.updateMeetingByRepeatCount(req, res));

router.post(`/api-${sys}/meetings/updateMeetingByGsyncLastsync`, (req, res) => meetingsCtrl.updateMeetingByGsyncLastsync(req, res));

router.post(`/api-${sys}/meetings/updateMeetingByName`, (req, res) => meetingsCtrl.updateMeetingByName(req, res));

router.post(`/api-${sys}/meetings/updateMeetingByLocation`, (req, res) => meetingsCtrl.updateMeetingByLocation(req, res));

router.post(`/api-${sys}/meetings/updateMeetingByPassword`, (req, res) => meetingsCtrl.updateMeetingByPassword(req, res));

router.post(`/api-${sys}/meetings/updateMeetingByJoinUrl`, (req, res) => meetingsCtrl.updateMeetingByJoinUrl(req, res));

router.post(`/api-${sys}/meetings/updateMeetingByHostUrl`, (req, res) => meetingsCtrl.updateMeetingByHostUrl(req, res));

router.post(`/api-${sys}/meetings/updateMeetingByDisplayedUrl`, (req, res) => meetingsCtrl.updateMeetingByDisplayedUrl(req, res));

router.post(`/api-${sys}/meetings/updateMeetingByCreator`, (req, res) => meetingsCtrl.updateMeetingByCreator(req, res));

router.post(`/api-${sys}/meetings/updateMeetingByExternalId`, (req, res) => meetingsCtrl.updateMeetingByExternalId(req, res));

router.post(`/api-${sys}/meetings/updateMeetingByParentType`, (req, res) => meetingsCtrl.updateMeetingByParentType(req, res));

router.post(`/api-${sys}/meetings/updateMeetingByStatus`, (req, res) => meetingsCtrl.updateMeetingByStatus(req, res));

router.post(`/api-${sys}/meetings/updateMeetingByType`, (req, res) => meetingsCtrl.updateMeetingByType(req, res));

router.post(`/api-${sys}/meetings/updateMeetingByOutlookId`, (req, res) => meetingsCtrl.updateMeetingByOutlookId(req, res));

router.post(`/api-${sys}/meetings/updateMeetingByRepeatType`, (req, res) => meetingsCtrl.updateMeetingByRepeatType(req, res));

router.post(`/api-${sys}/meetings/updateMeetingByRepeatDow`, (req, res) => meetingsCtrl.updateMeetingByRepeatDow(req, res));

router.post(`/api-${sys}/meetings/updateMeetingByRecurringSource`, (req, res) => meetingsCtrl.updateMeetingByRecurringSource(req, res));

router.post(`/api-${sys}/meetings/updateMeetingByGsyncId`, (req, res) => meetingsCtrl.updateMeetingByGsyncId(req, res));

router.post(`/api-${sys}/meetings/updateMeetingByDescription`, (req, res) => meetingsCtrl.updateMeetingByDescription(req, res));

router.post(`/api-${sys}/meetings/updateMeetingByDateEntered`, (req, res) => meetingsCtrl.updateMeetingByDateEntered(req, res));

router.post(`/api-${sys}/meetings/updateMeetingByDateModified`, (req, res) => meetingsCtrl.updateMeetingByDateModified(req, res));

router.post(`/api-${sys}/meetings/updateMeetingByDateStart`, (req, res) => meetingsCtrl.updateMeetingByDateStart(req, res));

router.post(`/api-${sys}/meetings/updateMeetingByDateEnd`, (req, res) => meetingsCtrl.updateMeetingByDateEnd(req, res));

router.post(`/api-${sys}/meetings/updateMeetingByRepeatUntil`, (req, res) => meetingsCtrl.updateMeetingByRepeatUntil(req, res));

router.post(`/api-${sys}/meetings/updateMeetingByModifiedUserId`, (req, res) => meetingsCtrl.updateMeetingByModifiedUserId(req, res));

router.post(`/api-${sys}/meetings/updateMeetingByCreatedBy`, (req, res) => meetingsCtrl.updateMeetingByCreatedBy(req, res));

router.post(`/api-${sys}/meetings/updateMeetingByAssignedUserId`, (req, res) => meetingsCtrl.updateMeetingByAssignedUserId(req, res));

router.post(`/api-${sys}/meetings/updateMeetingByParentId`, (req, res) => meetingsCtrl.updateMeetingByParentId(req, res));

router.post(`/api-${sys}/meetings/updateMeetingByRepeatParentId`, (req, res) => meetingsCtrl.updateMeetingByRepeatParentId(req, res));





router.get(`/api-${sys}/meetings/`, (req, res) => meetingsCtrl.getAllMeetings(req, res));
router.post(`/api-${sys}/datatable/meetings/`, (req, res) => meetingsCtrl.getAllMeetings(req, res));
router.post(`/api-${sys}/meetings/`, (req, res) => meetingsCtrl.addMeeting(req, res));
router.get(`/api-${sys}/meetings/:id`, (req, res) => meetingsCtrl.getAMeeting(req, res));
router.put(`/api-${sys}/meetings/:id`, (req, res) => meetingsCtrl.updateMeeting(req, res));
router.delete(`/api-${sys}/meetings/:id`, (req, res) => meetingsCtrl.deleteMeeting(req, res));

//</es-section>
module.exports = router;
