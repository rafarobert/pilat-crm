/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:41 GMT-0400 (Bolivia Time)
 * Time: 14:0:41
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:41 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:41
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const documentsBugsCtrl = require("../controllers/documents_bugs.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/documents-bugs/findOneById/:id`, (req, res) => documentsBugsCtrl.findOneById(req, res));

router.get(`/api-${sys}/documents-bugs/findOneByDeleted/:deleted`, (req, res) => documentsBugsCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/documents-bugs/findOneByDocumentId/:documentId`, (req, res) => documentsBugsCtrl.findOneByDocumentId(req, res));

router.get(`/api-${sys}/documents-bugs/findOneByBugId/:bugId`, (req, res) => documentsBugsCtrl.findOneByBugId(req, res));

router.get(`/api-${sys}/documents-bugs/findOneByDateModified/:dateModified`, (req, res) => documentsBugsCtrl.findOneByDateModified(req, res));



router.post(`/api-${sys}/documents-bugs/updateDocumentBugById`, (req, res) => documentsBugsCtrl.updateDocumentBugById(req, res));

router.post(`/api-${sys}/documents-bugs/updateDocumentBugByDeleted`, (req, res) => documentsBugsCtrl.updateDocumentBugByDeleted(req, res));

router.post(`/api-${sys}/documents-bugs/updateDocumentBugByDocumentId`, (req, res) => documentsBugsCtrl.updateDocumentBugByDocumentId(req, res));

router.post(`/api-${sys}/documents-bugs/updateDocumentBugByBugId`, (req, res) => documentsBugsCtrl.updateDocumentBugByBugId(req, res));

router.post(`/api-${sys}/documents-bugs/updateDocumentBugByDateModified`, (req, res) => documentsBugsCtrl.updateDocumentBugByDateModified(req, res));





router.get(`/api-${sys}/documents-bugs/`, (req, res) => documentsBugsCtrl.getAllDocumentsBugs(req, res));
router.post(`/api-${sys}/documents-bugs/`, (req, res) => documentsBugsCtrl.addDocumentBug(req, res));
router.get(`/api-${sys}/documents-bugs/:id`, (req, res) => documentsBugsCtrl.getADocumentBug(req, res));
router.put(`/api-${sys}/documents-bugs/:id`, (req, res) => documentsBugsCtrl.updateDocumentBug(req, res));
router.delete(`/api-${sys}/documents-bugs/:id`, (req, res) => documentsBugsCtrl.deleteDocumentBug(req, res));

//</es-section>
module.exports = router;
