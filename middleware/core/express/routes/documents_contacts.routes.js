/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:22:45 GMT-0400 (Bolivia Time)
 * Time: 0:22:45
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:22:45 GMT-0400 (Bolivia Time)
 * Last time updated: 0:22:45
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const documentsContactsCtrl = require("../controllers/documents_contacts.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/documents-contacts/findOneById/:id`, (req, res) => documentsContactsCtrl.findOneById(req, res));

router.get(`/api-${sys}/documents-contacts/findOneByDeleted/:deleted`, (req, res) => documentsContactsCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/documents-contacts/findOneByDocumentId/:documentId`, (req, res) => documentsContactsCtrl.findOneByDocumentId(req, res));

router.get(`/api-${sys}/documents-contacts/findOneByContactId/:contactId`, (req, res) => documentsContactsCtrl.findOneByContactId(req, res));

router.get(`/api-${sys}/documents-contacts/findOneByDateModified/:dateModified`, (req, res) => documentsContactsCtrl.findOneByDateModified(req, res));



router.post(`/api-${sys}/documents-contacts/updateDocumentContactById`, (req, res) => documentsContactsCtrl.updateDocumentContactById(req, res));

router.post(`/api-${sys}/documents-contacts/updateDocumentContactByDeleted`, (req, res) => documentsContactsCtrl.updateDocumentContactByDeleted(req, res));

router.post(`/api-${sys}/documents-contacts/updateDocumentContactByDocumentId`, (req, res) => documentsContactsCtrl.updateDocumentContactByDocumentId(req, res));

router.post(`/api-${sys}/documents-contacts/updateDocumentContactByContactId`, (req, res) => documentsContactsCtrl.updateDocumentContactByContactId(req, res));

router.post(`/api-${sys}/documents-contacts/updateDocumentContactByDateModified`, (req, res) => documentsContactsCtrl.updateDocumentContactByDateModified(req, res));





router.get(`/api-${sys}/documents-contacts/`, (req, res) => documentsContactsCtrl.getAllDocumentsContacts(req, res));
router.post(`/api-${sys}/documents-contacts/`, (req, res) => documentsContactsCtrl.addDocumentContact(req, res));
router.get(`/api-${sys}/documents-contacts/:id`, (req, res) => documentsContactsCtrl.getADocumentContact(req, res));
router.put(`/api-${sys}/documents-contacts/:id`, (req, res) => documentsContactsCtrl.updateDocumentContact(req, res));
router.delete(`/api-${sys}/documents-contacts/:id`, (req, res) => documentsContactsCtrl.deleteDocumentContact(req, res));

//</es-section>
module.exports = router;
