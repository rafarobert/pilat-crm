/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:01:27 GMT-0400 (Bolivia Time)
 * Time: 14:1:27
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:01:27 GMT-0400 (Bolivia Time)
 * Last time updated: 14:1:27
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const remindersInviteesCtrl = require("../controllers/reminders_invitees.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/reminders-invitees/findOneById/:id`, (req, res) => remindersInviteesCtrl.findOneById(req, res));

router.get(`/api-${sys}/reminders-invitees/findOneByDeleted/:deleted`, (req, res) => remindersInviteesCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/reminders-invitees/findOneByName/:name`, (req, res) => remindersInviteesCtrl.findOneByName(req, res));

router.get(`/api-${sys}/reminders-invitees/findOneByRelatedInviteeModule/:relatedInviteeModule`, (req, res) => remindersInviteesCtrl.findOneByRelatedInviteeModule(req, res));

router.get(`/api-${sys}/reminders-invitees/findOneByDescription/:description`, (req, res) => remindersInviteesCtrl.findOneByDescription(req, res));

router.get(`/api-${sys}/reminders-invitees/findOneByDateEntered/:dateEntered`, (req, res) => remindersInviteesCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/reminders-invitees/findOneByDateModified/:dateModified`, (req, res) => remindersInviteesCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/reminders-invitees/findOneByModifiedUserId/:modifiedUserId`, (req, res) => remindersInviteesCtrl.findOneByModifiedUserId(req, res));

router.get(`/api-${sys}/reminders-invitees/findOneByCreatedBy/:createdBy`, (req, res) => remindersInviteesCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/reminders-invitees/findOneByAssignedUserId/:assignedUserId`, (req, res) => remindersInviteesCtrl.findOneByAssignedUserId(req, res));

router.get(`/api-${sys}/reminders-invitees/findOneByReminderId/:reminderId`, (req, res) => remindersInviteesCtrl.findOneByReminderId(req, res));

router.get(`/api-${sys}/reminders-invitees/findOneByRelatedInviteeModuleId/:relatedInviteeModuleId`, (req, res) => remindersInviteesCtrl.findOneByRelatedInviteeModuleId(req, res));



router.post(`/api-${sys}/reminders-invitees/updateReminderInviteeById`, (req, res) => remindersInviteesCtrl.updateReminderInviteeById(req, res));

router.post(`/api-${sys}/reminders-invitees/updateReminderInviteeByDeleted`, (req, res) => remindersInviteesCtrl.updateReminderInviteeByDeleted(req, res));

router.post(`/api-${sys}/reminders-invitees/updateReminderInviteeByName`, (req, res) => remindersInviteesCtrl.updateReminderInviteeByName(req, res));

router.post(`/api-${sys}/reminders-invitees/updateReminderInviteeByRelatedInviteeModule`, (req, res) => remindersInviteesCtrl.updateReminderInviteeByRelatedInviteeModule(req, res));

router.post(`/api-${sys}/reminders-invitees/updateReminderInviteeByDescription`, (req, res) => remindersInviteesCtrl.updateReminderInviteeByDescription(req, res));

router.post(`/api-${sys}/reminders-invitees/updateReminderInviteeByDateEntered`, (req, res) => remindersInviteesCtrl.updateReminderInviteeByDateEntered(req, res));

router.post(`/api-${sys}/reminders-invitees/updateReminderInviteeByDateModified`, (req, res) => remindersInviteesCtrl.updateReminderInviteeByDateModified(req, res));

router.post(`/api-${sys}/reminders-invitees/updateReminderInviteeByModifiedUserId`, (req, res) => remindersInviteesCtrl.updateReminderInviteeByModifiedUserId(req, res));

router.post(`/api-${sys}/reminders-invitees/updateReminderInviteeByCreatedBy`, (req, res) => remindersInviteesCtrl.updateReminderInviteeByCreatedBy(req, res));

router.post(`/api-${sys}/reminders-invitees/updateReminderInviteeByAssignedUserId`, (req, res) => remindersInviteesCtrl.updateReminderInviteeByAssignedUserId(req, res));

router.post(`/api-${sys}/reminders-invitees/updateReminderInviteeByReminderId`, (req, res) => remindersInviteesCtrl.updateReminderInviteeByReminderId(req, res));

router.post(`/api-${sys}/reminders-invitees/updateReminderInviteeByRelatedInviteeModuleId`, (req, res) => remindersInviteesCtrl.updateReminderInviteeByRelatedInviteeModuleId(req, res));





router.get(`/api-${sys}/reminders-invitees/`, (req, res) => remindersInviteesCtrl.getAllRemindersInvitees(req, res));
router.post(`/api-${sys}/reminders-invitees/`, (req, res) => remindersInviteesCtrl.addReminderInvitee(req, res));
router.get(`/api-${sys}/reminders-invitees/:id`, (req, res) => remindersInviteesCtrl.getAReminderInvitee(req, res));
router.put(`/api-${sys}/reminders-invitees/:id`, (req, res) => remindersInviteesCtrl.updateReminderInvitee(req, res));
router.delete(`/api-${sys}/reminders-invitees/:id`, (req, res) => remindersInviteesCtrl.deleteReminderInvitee(req, res));

//</es-section>
module.exports = router;
