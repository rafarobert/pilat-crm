/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:23:41 GMT-0400 (Bolivia Time)
 * Time: 0:23:41
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:23:41 GMT-0400 (Bolivia Time)
 * Last time updated: 0:23:41
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const remindersCtrl = require("../controllers/reminders.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/reminders/findOneById/:id`, (req, res) => remindersCtrl.findOneById(req, res));

router.get(`/api-${sys}/reminders/findOneByDeleted/:deleted`, (req, res) => remindersCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/reminders/findOneByPopup/:popup`, (req, res) => remindersCtrl.findOneByPopup(req, res));

router.get(`/api-${sys}/reminders/findOneByEmail/:email`, (req, res) => remindersCtrl.findOneByEmail(req, res));

router.get(`/api-${sys}/reminders/findOneByEmailSent/:emailSent`, (req, res) => remindersCtrl.findOneByEmailSent(req, res));

router.get(`/api-${sys}/reminders/findOneByPopupViewed/:popupViewed`, (req, res) => remindersCtrl.findOneByPopupViewed(req, res));

router.get(`/api-${sys}/reminders/findOneByDateWillexecute/:dateWillexecute`, (req, res) => remindersCtrl.findOneByDateWillexecute(req, res));

router.get(`/api-${sys}/reminders/findOneByName/:name`, (req, res) => remindersCtrl.findOneByName(req, res));

router.get(`/api-${sys}/reminders/findOneByTimerPopup/:timerPopup`, (req, res) => remindersCtrl.findOneByTimerPopup(req, res));

router.get(`/api-${sys}/reminders/findOneByTimerEmail/:timerEmail`, (req, res) => remindersCtrl.findOneByTimerEmail(req, res));

router.get(`/api-${sys}/reminders/findOneByRelatedEventModule/:relatedEventModule`, (req, res) => remindersCtrl.findOneByRelatedEventModule(req, res));

router.get(`/api-${sys}/reminders/findOneByDescription/:description`, (req, res) => remindersCtrl.findOneByDescription(req, res));

router.get(`/api-${sys}/reminders/findOneByDateEntered/:dateEntered`, (req, res) => remindersCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/reminders/findOneByDateModified/:dateModified`, (req, res) => remindersCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/reminders/findOneByModifiedUserId/:modifiedUserId`, (req, res) => remindersCtrl.findOneByModifiedUserId(req, res));

router.get(`/api-${sys}/reminders/findOneByCreatedBy/:createdBy`, (req, res) => remindersCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/reminders/findOneByAssignedUserId/:assignedUserId`, (req, res) => remindersCtrl.findOneByAssignedUserId(req, res));

router.get(`/api-${sys}/reminders/findOneByRelatedEventModuleId/:relatedEventModuleId`, (req, res) => remindersCtrl.findOneByRelatedEventModuleId(req, res));



router.post(`/api-${sys}/reminders/updateReminderById`, (req, res) => remindersCtrl.updateReminderById(req, res));

router.post(`/api-${sys}/reminders/updateReminderByDeleted`, (req, res) => remindersCtrl.updateReminderByDeleted(req, res));

router.post(`/api-${sys}/reminders/updateReminderByPopup`, (req, res) => remindersCtrl.updateReminderByPopup(req, res));

router.post(`/api-${sys}/reminders/updateReminderByEmail`, (req, res) => remindersCtrl.updateReminderByEmail(req, res));

router.post(`/api-${sys}/reminders/updateReminderByEmailSent`, (req, res) => remindersCtrl.updateReminderByEmailSent(req, res));

router.post(`/api-${sys}/reminders/updateReminderByPopupViewed`, (req, res) => remindersCtrl.updateReminderByPopupViewed(req, res));

router.post(`/api-${sys}/reminders/updateReminderByDateWillexecute`, (req, res) => remindersCtrl.updateReminderByDateWillexecute(req, res));

router.post(`/api-${sys}/reminders/updateReminderByName`, (req, res) => remindersCtrl.updateReminderByName(req, res));

router.post(`/api-${sys}/reminders/updateReminderByTimerPopup`, (req, res) => remindersCtrl.updateReminderByTimerPopup(req, res));

router.post(`/api-${sys}/reminders/updateReminderByTimerEmail`, (req, res) => remindersCtrl.updateReminderByTimerEmail(req, res));

router.post(`/api-${sys}/reminders/updateReminderByRelatedEventModule`, (req, res) => remindersCtrl.updateReminderByRelatedEventModule(req, res));

router.post(`/api-${sys}/reminders/updateReminderByDescription`, (req, res) => remindersCtrl.updateReminderByDescription(req, res));

router.post(`/api-${sys}/reminders/updateReminderByDateEntered`, (req, res) => remindersCtrl.updateReminderByDateEntered(req, res));

router.post(`/api-${sys}/reminders/updateReminderByDateModified`, (req, res) => remindersCtrl.updateReminderByDateModified(req, res));

router.post(`/api-${sys}/reminders/updateReminderByModifiedUserId`, (req, res) => remindersCtrl.updateReminderByModifiedUserId(req, res));

router.post(`/api-${sys}/reminders/updateReminderByCreatedBy`, (req, res) => remindersCtrl.updateReminderByCreatedBy(req, res));

router.post(`/api-${sys}/reminders/updateReminderByAssignedUserId`, (req, res) => remindersCtrl.updateReminderByAssignedUserId(req, res));

router.post(`/api-${sys}/reminders/updateReminderByRelatedEventModuleId`, (req, res) => remindersCtrl.updateReminderByRelatedEventModuleId(req, res));





router.get(`/api-${sys}/reminders/`, (req, res) => remindersCtrl.getAllReminders(req, res));
router.post(`/api-${sys}/reminders/`, (req, res) => remindersCtrl.addReminder(req, res));
router.get(`/api-${sys}/reminders/:id`, (req, res) => remindersCtrl.getAReminder(req, res));
router.put(`/api-${sys}/reminders/:id`, (req, res) => remindersCtrl.updateReminder(req, res));
router.delete(`/api-${sys}/reminders/:id`, (req, res) => remindersCtrl.deleteReminder(req, res));

//</es-section>
module.exports = router;
