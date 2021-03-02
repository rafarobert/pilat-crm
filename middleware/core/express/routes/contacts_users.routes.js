/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:39 GMT-0400 (Bolivia Time)
 * Time: 14:0:39
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:39 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:39
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const contactsUsersCtrl = require("../controllers/contacts_users.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/contacts-users/findOneById/:id`, (req, res) => contactsUsersCtrl.findOneById(req, res));

router.get(`/api-${sys}/contacts-users/findOneByDeleted/:deleted`, (req, res) => contactsUsersCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/contacts-users/findOneByContactId/:contactId`, (req, res) => contactsUsersCtrl.findOneByContactId(req, res));

router.get(`/api-${sys}/contacts-users/findOneByUserId/:userId`, (req, res) => contactsUsersCtrl.findOneByUserId(req, res));

router.get(`/api-${sys}/contacts-users/findOneByDateModified/:dateModified`, (req, res) => contactsUsersCtrl.findOneByDateModified(req, res));



router.post(`/api-${sys}/contacts-users/updateContactUserById`, (req, res) => contactsUsersCtrl.updateContactUserById(req, res));

router.post(`/api-${sys}/contacts-users/updateContactUserByDeleted`, (req, res) => contactsUsersCtrl.updateContactUserByDeleted(req, res));

router.post(`/api-${sys}/contacts-users/updateContactUserByContactId`, (req, res) => contactsUsersCtrl.updateContactUserByContactId(req, res));

router.post(`/api-${sys}/contacts-users/updateContactUserByUserId`, (req, res) => contactsUsersCtrl.updateContactUserByUserId(req, res));

router.post(`/api-${sys}/contacts-users/updateContactUserByDateModified`, (req, res) => contactsUsersCtrl.updateContactUserByDateModified(req, res));





router.get(`/api-${sys}/contacts-users/`, (req, res) => contactsUsersCtrl.getAllContactsUsers(req, res));
router.post(`/api-${sys}/contacts-users/`, (req, res) => contactsUsersCtrl.addContactUser(req, res));
router.get(`/api-${sys}/contacts-users/:id`, (req, res) => contactsUsersCtrl.getAContactUser(req, res));
router.put(`/api-${sys}/contacts-users/:id`, (req, res) => contactsUsersCtrl.updateContactUser(req, res));
router.delete(`/api-${sys}/contacts-users/:id`, (req, res) => contactsUsersCtrl.deleteContactUser(req, res));

//</es-section>
module.exports = router;
