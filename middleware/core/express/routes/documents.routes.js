/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:22:43 GMT-0400 (Bolivia Time)
 * Time: 0:22:43
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:22:43 GMT-0400 (Bolivia Time)
 * Last time updated: 0:22:43
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const documentsCtrl = require("../controllers/documents.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/documents/findOneById/:id`, (req, res) => documentsCtrl.findOneById(req, res));

router.get(`/api-${sys}/documents/findOneByDeleted/:deleted`, (req, res) => documentsCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/documents/findOneByIsTemplate/:isTemplate`, (req, res) => documentsCtrl.findOneByIsTemplate(req, res));

router.get(`/api-${sys}/documents/findOneByDocumentName/:documentName`, (req, res) => documentsCtrl.findOneByDocumentName(req, res));

router.get(`/api-${sys}/documents/findOneByDocId/:docId`, (req, res) => documentsCtrl.findOneByDocId(req, res));

router.get(`/api-${sys}/documents/findOneByDocType/:docType`, (req, res) => documentsCtrl.findOneByDocType(req, res));

router.get(`/api-${sys}/documents/findOneByDocUrl/:docUrl`, (req, res) => documentsCtrl.findOneByDocUrl(req, res));

router.get(`/api-${sys}/documents/findOneByCategoryId/:categoryId`, (req, res) => documentsCtrl.findOneByCategoryId(req, res));

router.get(`/api-${sys}/documents/findOneBySubcategoryId/:subcategoryId`, (req, res) => documentsCtrl.findOneBySubcategoryId(req, res));

router.get(`/api-${sys}/documents/findOneByStatusId/:statusId`, (req, res) => documentsCtrl.findOneByStatusId(req, res));

router.get(`/api-${sys}/documents/findOneByDocumentRevisionId/:documentRevisionId`, (req, res) => documentsCtrl.findOneByDocumentRevisionId(req, res));

router.get(`/api-${sys}/documents/findOneByTemplateType/:templateType`, (req, res) => documentsCtrl.findOneByTemplateType(req, res));

router.get(`/api-${sys}/documents/findOneByDescription/:description`, (req, res) => documentsCtrl.findOneByDescription(req, res));

router.get(`/api-${sys}/documents/findOneByDateEntered/:dateEntered`, (req, res) => documentsCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/documents/findOneByDateModified/:dateModified`, (req, res) => documentsCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/documents/findOneByActiveDate/:activeDate`, (req, res) => documentsCtrl.findOneByActiveDate(req, res));

router.get(`/api-${sys}/documents/findOneByExpDate/:expDate`, (req, res) => documentsCtrl.findOneByExpDate(req, res));

router.get(`/api-${sys}/documents/findOneByModifiedUserId/:modifiedUserId`, (req, res) => documentsCtrl.findOneByModifiedUserId(req, res));

router.get(`/api-${sys}/documents/findOneByCreatedBy/:createdBy`, (req, res) => documentsCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/documents/findOneByAssignedUserId/:assignedUserId`, (req, res) => documentsCtrl.findOneByAssignedUserId(req, res));

router.get(`/api-${sys}/documents/findOneByRelatedDocId/:relatedDocId`, (req, res) => documentsCtrl.findOneByRelatedDocId(req, res));

router.get(`/api-${sys}/documents/findOneByRelatedDocRevId/:relatedDocRevId`, (req, res) => documentsCtrl.findOneByRelatedDocRevId(req, res));



router.post(`/api-${sys}/documents/updateDocumentById`, (req, res) => documentsCtrl.updateDocumentById(req, res));

router.post(`/api-${sys}/documents/updateDocumentByDeleted`, (req, res) => documentsCtrl.updateDocumentByDeleted(req, res));

router.post(`/api-${sys}/documents/updateDocumentByIsTemplate`, (req, res) => documentsCtrl.updateDocumentByIsTemplate(req, res));

router.post(`/api-${sys}/documents/updateDocumentByDocumentName`, (req, res) => documentsCtrl.updateDocumentByDocumentName(req, res));

router.post(`/api-${sys}/documents/updateDocumentByDocId`, (req, res) => documentsCtrl.updateDocumentByDocId(req, res));

router.post(`/api-${sys}/documents/updateDocumentByDocType`, (req, res) => documentsCtrl.updateDocumentByDocType(req, res));

router.post(`/api-${sys}/documents/updateDocumentByDocUrl`, (req, res) => documentsCtrl.updateDocumentByDocUrl(req, res));

router.post(`/api-${sys}/documents/updateDocumentByCategoryId`, (req, res) => documentsCtrl.updateDocumentByCategoryId(req, res));

router.post(`/api-${sys}/documents/updateDocumentBySubcategoryId`, (req, res) => documentsCtrl.updateDocumentBySubcategoryId(req, res));

router.post(`/api-${sys}/documents/updateDocumentByStatusId`, (req, res) => documentsCtrl.updateDocumentByStatusId(req, res));

router.post(`/api-${sys}/documents/updateDocumentByDocumentRevisionId`, (req, res) => documentsCtrl.updateDocumentByDocumentRevisionId(req, res));

router.post(`/api-${sys}/documents/updateDocumentByTemplateType`, (req, res) => documentsCtrl.updateDocumentByTemplateType(req, res));

router.post(`/api-${sys}/documents/updateDocumentByDescription`, (req, res) => documentsCtrl.updateDocumentByDescription(req, res));

router.post(`/api-${sys}/documents/updateDocumentByDateEntered`, (req, res) => documentsCtrl.updateDocumentByDateEntered(req, res));

router.post(`/api-${sys}/documents/updateDocumentByDateModified`, (req, res) => documentsCtrl.updateDocumentByDateModified(req, res));

router.post(`/api-${sys}/documents/updateDocumentByActiveDate`, (req, res) => documentsCtrl.updateDocumentByActiveDate(req, res));

router.post(`/api-${sys}/documents/updateDocumentByExpDate`, (req, res) => documentsCtrl.updateDocumentByExpDate(req, res));

router.post(`/api-${sys}/documents/updateDocumentByModifiedUserId`, (req, res) => documentsCtrl.updateDocumentByModifiedUserId(req, res));

router.post(`/api-${sys}/documents/updateDocumentByCreatedBy`, (req, res) => documentsCtrl.updateDocumentByCreatedBy(req, res));

router.post(`/api-${sys}/documents/updateDocumentByAssignedUserId`, (req, res) => documentsCtrl.updateDocumentByAssignedUserId(req, res));

router.post(`/api-${sys}/documents/updateDocumentByRelatedDocId`, (req, res) => documentsCtrl.updateDocumentByRelatedDocId(req, res));

router.post(`/api-${sys}/documents/updateDocumentByRelatedDocRevId`, (req, res) => documentsCtrl.updateDocumentByRelatedDocRevId(req, res));





router.get(`/api-${sys}/documents/`, (req, res) => documentsCtrl.getAllDocuments(req, res));
router.post(`/api-${sys}/documents/`, (req, res) => documentsCtrl.addDocument(req, res));
router.get(`/api-${sys}/documents/:id`, (req, res) => documentsCtrl.getADocument(req, res));
router.put(`/api-${sys}/documents/:id`, (req, res) => documentsCtrl.updateDocument(req, res));
router.delete(`/api-${sys}/documents/:id`, (req, res) => documentsCtrl.deleteDocument(req, res));

//</es-section>
module.exports = router;
