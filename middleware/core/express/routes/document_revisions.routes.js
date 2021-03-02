/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:42 GMT-0400 (Bolivia Time)
 * Time: 14:0:42
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:42 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:42
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const documentRevisionsCtrl = require("../controllers/document_revisions.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/document-revisions/findOneById/:id`, (req, res) => documentRevisionsCtrl.findOneById(req, res));

router.get(`/api-${sys}/document-revisions/findOneByDeleted/:deleted`, (req, res) => documentRevisionsCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/document-revisions/findOneByChangeLog/:changeLog`, (req, res) => documentRevisionsCtrl.findOneByChangeLog(req, res));

router.get(`/api-${sys}/document-revisions/findOneByDocumentId/:documentId`, (req, res) => documentRevisionsCtrl.findOneByDocumentId(req, res));

router.get(`/api-${sys}/document-revisions/findOneByDocId/:docId`, (req, res) => documentRevisionsCtrl.findOneByDocId(req, res));

router.get(`/api-${sys}/document-revisions/findOneByDocType/:docType`, (req, res) => documentRevisionsCtrl.findOneByDocType(req, res));

router.get(`/api-${sys}/document-revisions/findOneByDocUrl/:docUrl`, (req, res) => documentRevisionsCtrl.findOneByDocUrl(req, res));

router.get(`/api-${sys}/document-revisions/findOneByFilename/:filename`, (req, res) => documentRevisionsCtrl.findOneByFilename(req, res));

router.get(`/api-${sys}/document-revisions/findOneByFileExt/:fileExt`, (req, res) => documentRevisionsCtrl.findOneByFileExt(req, res));

router.get(`/api-${sys}/document-revisions/findOneByFileMimeType/:fileMimeType`, (req, res) => documentRevisionsCtrl.findOneByFileMimeType(req, res));

router.get(`/api-${sys}/document-revisions/findOneByRevision/:revision`, (req, res) => documentRevisionsCtrl.findOneByRevision(req, res));

router.get(`/api-${sys}/document-revisions/findOneByDateEntered/:dateEntered`, (req, res) => documentRevisionsCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/document-revisions/findOneByDateModified/:dateModified`, (req, res) => documentRevisionsCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/document-revisions/findOneByCreatedBy/:createdBy`, (req, res) => documentRevisionsCtrl.findOneByCreatedBy(req, res));



router.post(`/api-${sys}/document-revisions/updateDocumentRevisionById`, (req, res) => documentRevisionsCtrl.updateDocumentRevisionById(req, res));

router.post(`/api-${sys}/document-revisions/updateDocumentRevisionByDeleted`, (req, res) => documentRevisionsCtrl.updateDocumentRevisionByDeleted(req, res));

router.post(`/api-${sys}/document-revisions/updateDocumentRevisionByChangeLog`, (req, res) => documentRevisionsCtrl.updateDocumentRevisionByChangeLog(req, res));

router.post(`/api-${sys}/document-revisions/updateDocumentRevisionByDocumentId`, (req, res) => documentRevisionsCtrl.updateDocumentRevisionByDocumentId(req, res));

router.post(`/api-${sys}/document-revisions/updateDocumentRevisionByDocId`, (req, res) => documentRevisionsCtrl.updateDocumentRevisionByDocId(req, res));

router.post(`/api-${sys}/document-revisions/updateDocumentRevisionByDocType`, (req, res) => documentRevisionsCtrl.updateDocumentRevisionByDocType(req, res));

router.post(`/api-${sys}/document-revisions/updateDocumentRevisionByDocUrl`, (req, res) => documentRevisionsCtrl.updateDocumentRevisionByDocUrl(req, res));

router.post(`/api-${sys}/document-revisions/updateDocumentRevisionByFilename`, (req, res) => documentRevisionsCtrl.updateDocumentRevisionByFilename(req, res));

router.post(`/api-${sys}/document-revisions/updateDocumentRevisionByFileExt`, (req, res) => documentRevisionsCtrl.updateDocumentRevisionByFileExt(req, res));

router.post(`/api-${sys}/document-revisions/updateDocumentRevisionByFileMimeType`, (req, res) => documentRevisionsCtrl.updateDocumentRevisionByFileMimeType(req, res));

router.post(`/api-${sys}/document-revisions/updateDocumentRevisionByRevision`, (req, res) => documentRevisionsCtrl.updateDocumentRevisionByRevision(req, res));

router.post(`/api-${sys}/document-revisions/updateDocumentRevisionByDateEntered`, (req, res) => documentRevisionsCtrl.updateDocumentRevisionByDateEntered(req, res));

router.post(`/api-${sys}/document-revisions/updateDocumentRevisionByDateModified`, (req, res) => documentRevisionsCtrl.updateDocumentRevisionByDateModified(req, res));

router.post(`/api-${sys}/document-revisions/updateDocumentRevisionByCreatedBy`, (req, res) => documentRevisionsCtrl.updateDocumentRevisionByCreatedBy(req, res));





router.get(`/api-${sys}/document-revisions/`, (req, res) => documentRevisionsCtrl.getAllDocumentRevisions(req, res));
router.post(`/api-${sys}/document-revisions/`, (req, res) => documentRevisionsCtrl.addDocumentRevision(req, res));
router.get(`/api-${sys}/document-revisions/:id`, (req, res) => documentRevisionsCtrl.getADocumentRevision(req, res));
router.put(`/api-${sys}/document-revisions/:id`, (req, res) => documentRevisionsCtrl.updateDocumentRevision(req, res));
router.delete(`/api-${sys}/document-revisions/:id`, (req, res) => documentRevisionsCtrl.deleteDocumentRevision(req, res));

//</es-section>
module.exports = router;
