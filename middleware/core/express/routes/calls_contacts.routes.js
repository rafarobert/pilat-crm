/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:29 GMT-0400 (Bolivia Time)
 * Time: 14:56:29
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:29 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:29
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const callsContactsCtrl = require("../controllers/calls_contacts.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/calls-contacts/findOneById/:id`, (req, res) => callsContactsCtrl.findOneById(req, res));

router.get(`/api-${sys}/calls-contacts/findOneByDeleted/:deleted`, (req, res) => callsContactsCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/calls-contacts/findOneByCallId/:callId`, (req, res) => callsContactsCtrl.findOneByCallId(req, res));

router.get(`/api-${sys}/calls-contacts/findOneByContactId/:contactId`, (req, res) => callsContactsCtrl.findOneByContactId(req, res));

router.get(`/api-${sys}/calls-contacts/findOneByRequired/:required`, (req, res) => callsContactsCtrl.findOneByRequired(req, res));

router.get(`/api-${sys}/calls-contacts/findOneByAcceptStatus/:acceptStatus`, (req, res) => callsContactsCtrl.findOneByAcceptStatus(req, res));

router.get(`/api-${sys}/calls-contacts/findOneByDateModified/:dateModified`, (req, res) => callsContactsCtrl.findOneByDateModified(req, res));



router.post(`/api-${sys}/calls-contacts/updateCallContactById`, (req, res) => callsContactsCtrl.updateCallContactById(req, res));

router.post(`/api-${sys}/calls-contacts/updateCallContactByDeleted`, (req, res) => callsContactsCtrl.updateCallContactByDeleted(req, res));

router.post(`/api-${sys}/calls-contacts/updateCallContactByCallId`, (req, res) => callsContactsCtrl.updateCallContactByCallId(req, res));

router.post(`/api-${sys}/calls-contacts/updateCallContactByContactId`, (req, res) => callsContactsCtrl.updateCallContactByContactId(req, res));

router.post(`/api-${sys}/calls-contacts/updateCallContactByRequired`, (req, res) => callsContactsCtrl.updateCallContactByRequired(req, res));

router.post(`/api-${sys}/calls-contacts/updateCallContactByAcceptStatus`, (req, res) => callsContactsCtrl.updateCallContactByAcceptStatus(req, res));

router.post(`/api-${sys}/calls-contacts/updateCallContactByDateModified`, (req, res) => callsContactsCtrl.updateCallContactByDateModified(req, res));





router.get(`/api-${sys}/calls-contacts/`, (req, res) => callsContactsCtrl.getAllCallsContacts(req, res));
router.post(`/api-${sys}/datatable/calls-contacts/`, (req, res) => callsContactsCtrl.getAllCallsContacts(req, res));
router.post(`/api-${sys}/calls-contacts/`, (req, res) => callsContactsCtrl.addCallContact(req, res));
router.get(`/api-${sys}/calls-contacts/:id`, (req, res) => callsContactsCtrl.getACallContact(req, res));
router.put(`/api-${sys}/calls-contacts/:id`, (req, res) => callsContactsCtrl.updateCallContact(req, res));
router.delete(`/api-${sys}/calls-contacts/:id`, (req, res) => callsContactsCtrl.deleteCallContact(req, res));

//</es-section>
module.exports = router;
