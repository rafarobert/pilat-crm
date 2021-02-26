/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:23:19 GMT-0400 (Bolivia Time)
 * Time: 0:23:19
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:23:19 GMT-0400 (Bolivia Time)
 * Last time updated: 0:23:19
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const meetingsContactsCtrl = require("../controllers/meetings_contacts.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/meetings-contacts/findOneById/:id`, (req, res) => meetingsContactsCtrl.findOneById(req, res));

router.get(`/api-${sys}/meetings-contacts/findOneByDeleted/:deleted`, (req, res) => meetingsContactsCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/meetings-contacts/findOneByMeetingId/:meetingId`, (req, res) => meetingsContactsCtrl.findOneByMeetingId(req, res));

router.get(`/api-${sys}/meetings-contacts/findOneByContactId/:contactId`, (req, res) => meetingsContactsCtrl.findOneByContactId(req, res));

router.get(`/api-${sys}/meetings-contacts/findOneByRequired/:required`, (req, res) => meetingsContactsCtrl.findOneByRequired(req, res));

router.get(`/api-${sys}/meetings-contacts/findOneByAcceptStatus/:acceptStatus`, (req, res) => meetingsContactsCtrl.findOneByAcceptStatus(req, res));

router.get(`/api-${sys}/meetings-contacts/findOneByDateModified/:dateModified`, (req, res) => meetingsContactsCtrl.findOneByDateModified(req, res));



router.post(`/api-${sys}/meetings-contacts/updateMeetingContactById`, (req, res) => meetingsContactsCtrl.updateMeetingContactById(req, res));

router.post(`/api-${sys}/meetings-contacts/updateMeetingContactByDeleted`, (req, res) => meetingsContactsCtrl.updateMeetingContactByDeleted(req, res));

router.post(`/api-${sys}/meetings-contacts/updateMeetingContactByMeetingId`, (req, res) => meetingsContactsCtrl.updateMeetingContactByMeetingId(req, res));

router.post(`/api-${sys}/meetings-contacts/updateMeetingContactByContactId`, (req, res) => meetingsContactsCtrl.updateMeetingContactByContactId(req, res));

router.post(`/api-${sys}/meetings-contacts/updateMeetingContactByRequired`, (req, res) => meetingsContactsCtrl.updateMeetingContactByRequired(req, res));

router.post(`/api-${sys}/meetings-contacts/updateMeetingContactByAcceptStatus`, (req, res) => meetingsContactsCtrl.updateMeetingContactByAcceptStatus(req, res));

router.post(`/api-${sys}/meetings-contacts/updateMeetingContactByDateModified`, (req, res) => meetingsContactsCtrl.updateMeetingContactByDateModified(req, res));





router.get(`/api-${sys}/meetings-contacts/`, (req, res) => meetingsContactsCtrl.getAllMeetingsContacts(req, res));
router.post(`/api-${sys}/meetings-contacts/`, (req, res) => meetingsContactsCtrl.addMeetingContact(req, res));
router.get(`/api-${sys}/meetings-contacts/:id`, (req, res) => meetingsContactsCtrl.getAMeetingContact(req, res));
router.put(`/api-${sys}/meetings-contacts/:id`, (req, res) => meetingsContactsCtrl.updateMeetingContact(req, res));
router.delete(`/api-${sys}/meetings-contacts/:id`, (req, res) => meetingsContactsCtrl.deleteMeetingContact(req, res));

//</es-section>
module.exports = router;
