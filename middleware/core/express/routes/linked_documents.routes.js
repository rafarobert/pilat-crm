/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:36:31 GMT-0400 (Bolivia Time)
 * Time: 15:36:31
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:36:31 GMT-0400 (Bolivia Time)
 * Last time updated: 15:36:31
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const linkedDocumentsCtrl = require("../controllers/linked_documents.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/linked-documents/findOneById/:id`, (req, res) => linkedDocumentsCtrl.findOneById(req, res));

router.get(`/api-${sys}/linked-documents/findOneByDeleted/:deleted`, (req, res) => linkedDocumentsCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/linked-documents/findOneByParentId/:parentId`, (req, res) => linkedDocumentsCtrl.findOneByParentId(req, res));

router.get(`/api-${sys}/linked-documents/findOneByParentType/:parentType`, (req, res) => linkedDocumentsCtrl.findOneByParentType(req, res));

router.get(`/api-${sys}/linked-documents/findOneByDocumentId/:documentId`, (req, res) => linkedDocumentsCtrl.findOneByDocumentId(req, res));

router.get(`/api-${sys}/linked-documents/findOneByDocumentRevisionId/:documentRevisionId`, (req, res) => linkedDocumentsCtrl.findOneByDocumentRevisionId(req, res));

router.get(`/api-${sys}/linked-documents/findOneByDateModified/:dateModified`, (req, res) => linkedDocumentsCtrl.findOneByDateModified(req, res));



router.post(`/api-${sys}/linked-documents/updateLinkedDocumentById`, (req, res) => linkedDocumentsCtrl.updateLinkedDocumentById(req, res));

router.post(`/api-${sys}/linked-documents/updateLinkedDocumentByDeleted`, (req, res) => linkedDocumentsCtrl.updateLinkedDocumentByDeleted(req, res));

router.post(`/api-${sys}/linked-documents/updateLinkedDocumentByParentId`, (req, res) => linkedDocumentsCtrl.updateLinkedDocumentByParentId(req, res));

router.post(`/api-${sys}/linked-documents/updateLinkedDocumentByParentType`, (req, res) => linkedDocumentsCtrl.updateLinkedDocumentByParentType(req, res));

router.post(`/api-${sys}/linked-documents/updateLinkedDocumentByDocumentId`, (req, res) => linkedDocumentsCtrl.updateLinkedDocumentByDocumentId(req, res));

router.post(`/api-${sys}/linked-documents/updateLinkedDocumentByDocumentRevisionId`, (req, res) => linkedDocumentsCtrl.updateLinkedDocumentByDocumentRevisionId(req, res));

router.post(`/api-${sys}/linked-documents/updateLinkedDocumentByDateModified`, (req, res) => linkedDocumentsCtrl.updateLinkedDocumentByDateModified(req, res));





router.get(`/api-${sys}/linked-documents/`, (req, res) => linkedDocumentsCtrl.getAllLinkedDocuments(req, res));
router.post(`/api-${sys}/linked-documents/`, (req, res) => linkedDocumentsCtrl.addLinkedDocument(req, res));
router.get(`/api-${sys}/linked-documents/:id`, (req, res) => linkedDocumentsCtrl.getALinkedDocument(req, res));
router.put(`/api-${sys}/linked-documents/:id`, (req, res) => linkedDocumentsCtrl.updateLinkedDocument(req, res));
router.delete(`/api-${sys}/linked-documents/:id`, (req, res) => linkedDocumentsCtrl.deleteLinkedDocument(req, res));

//</es-section>
module.exports = router;
