/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:36:56 GMT-0400 (Bolivia Time)
 * Time: 18:36:56
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:36:56 GMT-0400 (Bolivia Time)
 * Last time updated: 18:36:56
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const documentsCasesCtrl = require("../controllers/documents_cases.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/documents-cases/findOneById/:id`, (req, res) => documentsCasesCtrl.findOneById(req, res));

router.get(`/api-${sys}/documents-cases/findOneByDeleted/:deleted`, (req, res) => documentsCasesCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/documents-cases/findOneByDocumentId/:documentId`, (req, res) => documentsCasesCtrl.findOneByDocumentId(req, res));

router.get(`/api-${sys}/documents-cases/findOneByCaseId/:caseId`, (req, res) => documentsCasesCtrl.findOneByCaseId(req, res));

router.get(`/api-${sys}/documents-cases/findOneByDateModified/:dateModified`, (req, res) => documentsCasesCtrl.findOneByDateModified(req, res));



router.post(`/api-${sys}/documents-cases/updateDocumentCaseById`, (req, res) => documentsCasesCtrl.updateDocumentCaseById(req, res));

router.post(`/api-${sys}/documents-cases/updateDocumentCaseByDeleted`, (req, res) => documentsCasesCtrl.updateDocumentCaseByDeleted(req, res));

router.post(`/api-${sys}/documents-cases/updateDocumentCaseByDocumentId`, (req, res) => documentsCasesCtrl.updateDocumentCaseByDocumentId(req, res));

router.post(`/api-${sys}/documents-cases/updateDocumentCaseByCaseId`, (req, res) => documentsCasesCtrl.updateDocumentCaseByCaseId(req, res));

router.post(`/api-${sys}/documents-cases/updateDocumentCaseByDateModified`, (req, res) => documentsCasesCtrl.updateDocumentCaseByDateModified(req, res));





router.get(`/api-${sys}/documents-cases/`, (req, res) => documentsCasesCtrl.getAllDocumentsCases(req, res));
router.post(`/api-${sys}/documents-cases/`, (req, res) => documentsCasesCtrl.addDocumentCase(req, res));
router.get(`/api-${sys}/documents-cases/:id`, (req, res) => documentsCasesCtrl.getADocumentCase(req, res));
router.put(`/api-${sys}/documents-cases/:id`, (req, res) => documentsCasesCtrl.updateDocumentCase(req, res));
router.delete(`/api-${sys}/documents-cases/:id`, (req, res) => documentsCasesCtrl.deleteDocumentCase(req, res));

//</es-section>
module.exports = router;
