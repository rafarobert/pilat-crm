/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:01 GMT-0400 (Bolivia Time)
 * Time: 14:57:1
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:01 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:1
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const iadStickyNotesCtrl = require("../controllers/iad_sticky_notes.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/iad-sticky-notes/findOneById/:id`, (req, res) => iadStickyNotesCtrl.findOneById(req, res));

router.get(`/api-${sys}/iad-sticky-notes/findOneByDeleted/:deleted`, (req, res) => iadStickyNotesCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/iad-sticky-notes/findOneByDocumentName/:documentName`, (req, res) => iadStickyNotesCtrl.findOneByDocumentName(req, res));

router.get(`/api-${sys}/iad-sticky-notes/findOneByFilename/:filename`, (req, res) => iadStickyNotesCtrl.findOneByFilename(req, res));

router.get(`/api-${sys}/iad-sticky-notes/findOneByFileExt/:fileExt`, (req, res) => iadStickyNotesCtrl.findOneByFileExt(req, res));

router.get(`/api-${sys}/iad-sticky-notes/findOneByFileMimeType/:fileMimeType`, (req, res) => iadStickyNotesCtrl.findOneByFileMimeType(req, res));

router.get(`/api-${sys}/iad-sticky-notes/findOneByCategoryId/:categoryId`, (req, res) => iadStickyNotesCtrl.findOneByCategoryId(req, res));

router.get(`/api-${sys}/iad-sticky-notes/findOneBySubcategoryId/:subcategoryId`, (req, res) => iadStickyNotesCtrl.findOneBySubcategoryId(req, res));

router.get(`/api-${sys}/iad-sticky-notes/findOneByStatusId/:statusId`, (req, res) => iadStickyNotesCtrl.findOneByStatusId(req, res));

router.get(`/api-${sys}/iad-sticky-notes/findOneByDescription/:description`, (req, res) => iadStickyNotesCtrl.findOneByDescription(req, res));

router.get(`/api-${sys}/iad-sticky-notes/findOneByDateEntered/:dateEntered`, (req, res) => iadStickyNotesCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/iad-sticky-notes/findOneByDateModified/:dateModified`, (req, res) => iadStickyNotesCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/iad-sticky-notes/findOneByActiveDate/:activeDate`, (req, res) => iadStickyNotesCtrl.findOneByActiveDate(req, res));

router.get(`/api-${sys}/iad-sticky-notes/findOneByExpDate/:expDate`, (req, res) => iadStickyNotesCtrl.findOneByExpDate(req, res));

router.get(`/api-${sys}/iad-sticky-notes/findOneByModifiedUserId/:modifiedUserId`, (req, res) => iadStickyNotesCtrl.findOneByModifiedUserId(req, res));

router.get(`/api-${sys}/iad-sticky-notes/findOneByCreatedBy/:createdBy`, (req, res) => iadStickyNotesCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/iad-sticky-notes/findOneByAssignedUserId/:assignedUserId`, (req, res) => iadStickyNotesCtrl.findOneByAssignedUserId(req, res));



router.post(`/api-${sys}/iad-sticky-notes/updateIadStickyNoteById`, (req, res) => iadStickyNotesCtrl.updateIadStickyNoteById(req, res));

router.post(`/api-${sys}/iad-sticky-notes/updateIadStickyNoteByDeleted`, (req, res) => iadStickyNotesCtrl.updateIadStickyNoteByDeleted(req, res));

router.post(`/api-${sys}/iad-sticky-notes/updateIadStickyNoteByDocumentName`, (req, res) => iadStickyNotesCtrl.updateIadStickyNoteByDocumentName(req, res));

router.post(`/api-${sys}/iad-sticky-notes/updateIadStickyNoteByFilename`, (req, res) => iadStickyNotesCtrl.updateIadStickyNoteByFilename(req, res));

router.post(`/api-${sys}/iad-sticky-notes/updateIadStickyNoteByFileExt`, (req, res) => iadStickyNotesCtrl.updateIadStickyNoteByFileExt(req, res));

router.post(`/api-${sys}/iad-sticky-notes/updateIadStickyNoteByFileMimeType`, (req, res) => iadStickyNotesCtrl.updateIadStickyNoteByFileMimeType(req, res));

router.post(`/api-${sys}/iad-sticky-notes/updateIadStickyNoteByCategoryId`, (req, res) => iadStickyNotesCtrl.updateIadStickyNoteByCategoryId(req, res));

router.post(`/api-${sys}/iad-sticky-notes/updateIadStickyNoteBySubcategoryId`, (req, res) => iadStickyNotesCtrl.updateIadStickyNoteBySubcategoryId(req, res));

router.post(`/api-${sys}/iad-sticky-notes/updateIadStickyNoteByStatusId`, (req, res) => iadStickyNotesCtrl.updateIadStickyNoteByStatusId(req, res));

router.post(`/api-${sys}/iad-sticky-notes/updateIadStickyNoteByDescription`, (req, res) => iadStickyNotesCtrl.updateIadStickyNoteByDescription(req, res));

router.post(`/api-${sys}/iad-sticky-notes/updateIadStickyNoteByDateEntered`, (req, res) => iadStickyNotesCtrl.updateIadStickyNoteByDateEntered(req, res));

router.post(`/api-${sys}/iad-sticky-notes/updateIadStickyNoteByDateModified`, (req, res) => iadStickyNotesCtrl.updateIadStickyNoteByDateModified(req, res));

router.post(`/api-${sys}/iad-sticky-notes/updateIadStickyNoteByActiveDate`, (req, res) => iadStickyNotesCtrl.updateIadStickyNoteByActiveDate(req, res));

router.post(`/api-${sys}/iad-sticky-notes/updateIadStickyNoteByExpDate`, (req, res) => iadStickyNotesCtrl.updateIadStickyNoteByExpDate(req, res));

router.post(`/api-${sys}/iad-sticky-notes/updateIadStickyNoteByModifiedUserId`, (req, res) => iadStickyNotesCtrl.updateIadStickyNoteByModifiedUserId(req, res));

router.post(`/api-${sys}/iad-sticky-notes/updateIadStickyNoteByCreatedBy`, (req, res) => iadStickyNotesCtrl.updateIadStickyNoteByCreatedBy(req, res));

router.post(`/api-${sys}/iad-sticky-notes/updateIadStickyNoteByAssignedUserId`, (req, res) => iadStickyNotesCtrl.updateIadStickyNoteByAssignedUserId(req, res));





router.get(`/api-${sys}/iad-sticky-notes/`, (req, res) => iadStickyNotesCtrl.getAllIadStickyNotes(req, res));
router.post(`/api-${sys}/datatable/iad-sticky-notes/`, (req, res) => iadStickyNotesCtrl.getAllIadStickyNotes(req, res));
router.post(`/api-${sys}/iad-sticky-notes/`, (req, res) => iadStickyNotesCtrl.addIadStickyNote(req, res));
router.get(`/api-${sys}/iad-sticky-notes/:id`, (req, res) => iadStickyNotesCtrl.getAIadStickyNote(req, res));
router.put(`/api-${sys}/iad-sticky-notes/:id`, (req, res) => iadStickyNotesCtrl.updateIadStickyNote(req, res));
router.delete(`/api-${sys}/iad-sticky-notes/:id`, (req, res) => iadStickyNotesCtrl.deleteIadStickyNote(req, res));

//</es-section>
module.exports = router;
