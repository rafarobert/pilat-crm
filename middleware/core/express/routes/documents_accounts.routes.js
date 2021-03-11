/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:41 GMT-0400 (Bolivia Time)
 * Time: 14:56:41
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:41 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:41
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const documentsAccountsCtrl = require("../controllers/documents_accounts.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/documents-accounts/findOneById/:id`, (req, res) => documentsAccountsCtrl.findOneById(req, res));

router.get(`/api-${sys}/documents-accounts/findOneByDeleted/:deleted`, (req, res) => documentsAccountsCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/documents-accounts/findOneByDocumentId/:documentId`, (req, res) => documentsAccountsCtrl.findOneByDocumentId(req, res));

router.get(`/api-${sys}/documents-accounts/findOneByAccountId/:accountId`, (req, res) => documentsAccountsCtrl.findOneByAccountId(req, res));

router.get(`/api-${sys}/documents-accounts/findOneByDateModified/:dateModified`, (req, res) => documentsAccountsCtrl.findOneByDateModified(req, res));



router.post(`/api-${sys}/documents-accounts/updateDocumentAccountById`, (req, res) => documentsAccountsCtrl.updateDocumentAccountById(req, res));

router.post(`/api-${sys}/documents-accounts/updateDocumentAccountByDeleted`, (req, res) => documentsAccountsCtrl.updateDocumentAccountByDeleted(req, res));

router.post(`/api-${sys}/documents-accounts/updateDocumentAccountByDocumentId`, (req, res) => documentsAccountsCtrl.updateDocumentAccountByDocumentId(req, res));

router.post(`/api-${sys}/documents-accounts/updateDocumentAccountByAccountId`, (req, res) => documentsAccountsCtrl.updateDocumentAccountByAccountId(req, res));

router.post(`/api-${sys}/documents-accounts/updateDocumentAccountByDateModified`, (req, res) => documentsAccountsCtrl.updateDocumentAccountByDateModified(req, res));





router.get(`/api-${sys}/documents-accounts/`, (req, res) => documentsAccountsCtrl.getAllDocumentsAccounts(req, res));
router.post(`/api-${sys}/documents-accounts/`, (req, res) => documentsAccountsCtrl.addDocumentAccount(req, res));
router.get(`/api-${sys}/documents-accounts/:id`, (req, res) => documentsAccountsCtrl.getADocumentAccount(req, res));
router.put(`/api-${sys}/documents-accounts/:id`, (req, res) => documentsAccountsCtrl.updateDocumentAccount(req, res));
router.delete(`/api-${sys}/documents-accounts/:id`, (req, res) => documentsAccountsCtrl.deleteDocumentAccount(req, res));

//</es-section>
module.exports = router;
