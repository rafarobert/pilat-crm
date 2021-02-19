/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:37:20 GMT-0400 (Bolivia Time)
 * Time: 18:37:20
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:37:20 GMT-0400 (Bolivia Time)
 * Last time updated: 18:37:20
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const fpEventsContactsCCtrl = require("../controllers/fp_events_contacts_c.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/fp-events-contacts-c/findOneById/:id`, (req, res) => fpEventsContactsCCtrl.findOneById(req, res));

router.get(`/api-${sys}/fp-events-contacts-c/findOneByDeleted/:deleted`, (req, res) => fpEventsContactsCCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/fp-events-contacts-c/findOneByEmailResponded/:emailResponded`, (req, res) => fpEventsContactsCCtrl.findOneByEmailResponded(req, res));

router.get(`/api-${sys}/fp-events-contacts-c/findOneByFpEventsContactsfpEventsIda/:fpEventsContactsfpEventsIda`, (req, res) => fpEventsContactsCCtrl.findOneByFpEventsContactsfpEventsIda(req, res));

router.get(`/api-${sys}/fp-events-contacts-c/findOneByFpEventsContactscontactsIdb/:fpEventsContactscontactsIdb`, (req, res) => fpEventsContactsCCtrl.findOneByFpEventsContactscontactsIdb(req, res));

router.get(`/api-${sys}/fp-events-contacts-c/findOneByInviteStatus/:inviteStatus`, (req, res) => fpEventsContactsCCtrl.findOneByInviteStatus(req, res));

router.get(`/api-${sys}/fp-events-contacts-c/findOneByAcceptStatus/:acceptStatus`, (req, res) => fpEventsContactsCCtrl.findOneByAcceptStatus(req, res));

router.get(`/api-${sys}/fp-events-contacts-c/findOneByDateModified/:dateModified`, (req, res) => fpEventsContactsCCtrl.findOneByDateModified(req, res));



router.post(`/api-${sys}/fp-events-contacts-c/updateFpEventContactCById`, (req, res) => fpEventsContactsCCtrl.updateFpEventContactCById(req, res));

router.post(`/api-${sys}/fp-events-contacts-c/updateFpEventContactCByDeleted`, (req, res) => fpEventsContactsCCtrl.updateFpEventContactCByDeleted(req, res));

router.post(`/api-${sys}/fp-events-contacts-c/updateFpEventContactCByEmailResponded`, (req, res) => fpEventsContactsCCtrl.updateFpEventContactCByEmailResponded(req, res));

router.post(`/api-${sys}/fp-events-contacts-c/updateFpEventContactCByFpEventsContactsfpEventsIda`, (req, res) => fpEventsContactsCCtrl.updateFpEventContactCByFpEventsContactsfpEventsIda(req, res));

router.post(`/api-${sys}/fp-events-contacts-c/updateFpEventContactCByFpEventsContactscontactsIdb`, (req, res) => fpEventsContactsCCtrl.updateFpEventContactCByFpEventsContactscontactsIdb(req, res));

router.post(`/api-${sys}/fp-events-contacts-c/updateFpEventContactCByInviteStatus`, (req, res) => fpEventsContactsCCtrl.updateFpEventContactCByInviteStatus(req, res));

router.post(`/api-${sys}/fp-events-contacts-c/updateFpEventContactCByAcceptStatus`, (req, res) => fpEventsContactsCCtrl.updateFpEventContactCByAcceptStatus(req, res));

router.post(`/api-${sys}/fp-events-contacts-c/updateFpEventContactCByDateModified`, (req, res) => fpEventsContactsCCtrl.updateFpEventContactCByDateModified(req, res));





router.get(`/api-${sys}/fp-events-contacts-c/`, (req, res) => fpEventsContactsCCtrl.getAllFpEventsContactsC(req, res));
router.post(`/api-${sys}/fp-events-contacts-c/`, (req, res) => fpEventsContactsCCtrl.addFpEventContactC(req, res));
router.get(`/api-${sys}/fp-events-contacts-c/:id`, (req, res) => fpEventsContactsCCtrl.getAFpEventContactC(req, res));
router.put(`/api-${sys}/fp-events-contacts-c/:id`, (req, res) => fpEventsContactsCCtrl.updateFpEventContactC(req, res));
router.delete(`/api-${sys}/fp-events-contacts-c/:id`, (req, res) => fpEventsContactsCCtrl.deleteFpEventContactC(req, res));

//</es-section>
module.exports = router;
