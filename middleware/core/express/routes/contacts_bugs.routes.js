/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:22:41 GMT-0400 (Bolivia Time)
 * Time: 0:22:41
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:22:41 GMT-0400 (Bolivia Time)
 * Last time updated: 0:22:41
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const contactsBugsCtrl = require("../controllers/contacts_bugs.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/contacts-bugs/findOneById/:id`, (req, res) => contactsBugsCtrl.findOneById(req, res));

router.get(`/api-${sys}/contacts-bugs/findOneByDeleted/:deleted`, (req, res) => contactsBugsCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/contacts-bugs/findOneByContactId/:contactId`, (req, res) => contactsBugsCtrl.findOneByContactId(req, res));

router.get(`/api-${sys}/contacts-bugs/findOneByBugId/:bugId`, (req, res) => contactsBugsCtrl.findOneByBugId(req, res));

router.get(`/api-${sys}/contacts-bugs/findOneByContactRole/:contactRole`, (req, res) => contactsBugsCtrl.findOneByContactRole(req, res));

router.get(`/api-${sys}/contacts-bugs/findOneByDateModified/:dateModified`, (req, res) => contactsBugsCtrl.findOneByDateModified(req, res));



router.post(`/api-${sys}/contacts-bugs/updateContactBugById`, (req, res) => contactsBugsCtrl.updateContactBugById(req, res));

router.post(`/api-${sys}/contacts-bugs/updateContactBugByDeleted`, (req, res) => contactsBugsCtrl.updateContactBugByDeleted(req, res));

router.post(`/api-${sys}/contacts-bugs/updateContactBugByContactId`, (req, res) => contactsBugsCtrl.updateContactBugByContactId(req, res));

router.post(`/api-${sys}/contacts-bugs/updateContactBugByBugId`, (req, res) => contactsBugsCtrl.updateContactBugByBugId(req, res));

router.post(`/api-${sys}/contacts-bugs/updateContactBugByContactRole`, (req, res) => contactsBugsCtrl.updateContactBugByContactRole(req, res));

router.post(`/api-${sys}/contacts-bugs/updateContactBugByDateModified`, (req, res) => contactsBugsCtrl.updateContactBugByDateModified(req, res));





router.get(`/api-${sys}/contacts-bugs/`, (req, res) => contactsBugsCtrl.getAllContactsBugs(req, res));
router.post(`/api-${sys}/contacts-bugs/`, (req, res) => contactsBugsCtrl.addContactBug(req, res));
router.get(`/api-${sys}/contacts-bugs/:id`, (req, res) => contactsBugsCtrl.getAContactBug(req, res));
router.put(`/api-${sys}/contacts-bugs/:id`, (req, res) => contactsBugsCtrl.updateContactBug(req, res));
router.delete(`/api-${sys}/contacts-bugs/:id`, (req, res) => contactsBugsCtrl.deleteContactBug(req, res));

//</es-section>
module.exports = router;
