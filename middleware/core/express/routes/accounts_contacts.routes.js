/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:21:50 GMT-0400 (Bolivia Time)
 * Time: 0:21:50
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:21:50 GMT-0400 (Bolivia Time)
 * Last time updated: 0:21:50
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const accountsContactsCtrl = require("../controllers/accounts_contacts.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/accounts-contacts/findOneById/:id`, (req, res) => accountsContactsCtrl.findOneById(req, res));

router.get(`/api-${sys}/accounts-contacts/findOneByDeleted/:deleted`, (req, res) => accountsContactsCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/accounts-contacts/findOneByContactId/:contactId`, (req, res) => accountsContactsCtrl.findOneByContactId(req, res));

router.get(`/api-${sys}/accounts-contacts/findOneByAccountId/:accountId`, (req, res) => accountsContactsCtrl.findOneByAccountId(req, res));

router.get(`/api-${sys}/accounts-contacts/findOneByDateModified/:dateModified`, (req, res) => accountsContactsCtrl.findOneByDateModified(req, res));



router.post(`/api-${sys}/accounts-contacts/updateAccountContactById`, (req, res) => accountsContactsCtrl.updateAccountContactById(req, res));

router.post(`/api-${sys}/accounts-contacts/updateAccountContactByDeleted`, (req, res) => accountsContactsCtrl.updateAccountContactByDeleted(req, res));

router.post(`/api-${sys}/accounts-contacts/updateAccountContactByContactId`, (req, res) => accountsContactsCtrl.updateAccountContactByContactId(req, res));

router.post(`/api-${sys}/accounts-contacts/updateAccountContactByAccountId`, (req, res) => accountsContactsCtrl.updateAccountContactByAccountId(req, res));

router.post(`/api-${sys}/accounts-contacts/updateAccountContactByDateModified`, (req, res) => accountsContactsCtrl.updateAccountContactByDateModified(req, res));





router.get(`/api-${sys}/accounts-contacts/`, (req, res) => accountsContactsCtrl.getAllAccountsContacts(req, res));
router.post(`/api-${sys}/accounts-contacts/`, (req, res) => accountsContactsCtrl.addAccountContact(req, res));
router.get(`/api-${sys}/accounts-contacts/:id`, (req, res) => accountsContactsCtrl.getAAccountContact(req, res));
router.put(`/api-${sys}/accounts-contacts/:id`, (req, res) => accountsContactsCtrl.updateAccountContact(req, res));
router.delete(`/api-${sys}/accounts-contacts/:id`, (req, res) => accountsContactsCtrl.deleteAccountContact(req, res));

//</es-section>
module.exports = router;
