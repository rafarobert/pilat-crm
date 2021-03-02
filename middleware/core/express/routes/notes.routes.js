/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:01:10 GMT-0400 (Bolivia Time)
 * Time: 14:1:10
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:01:10 GMT-0400 (Bolivia Time)
 * Last time updated: 14:1:10
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const notesCtrl = require("../controllers/notes.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/notes/findOneById/:id`, (req, res) => notesCtrl.findOneById(req, res));

router.get(`/api-${sys}/notes/findOneByPortalFlag/:portalFlag`, (req, res) => notesCtrl.findOneByPortalFlag(req, res));

router.get(`/api-${sys}/notes/findOneByEmbedFlag/:embedFlag`, (req, res) => notesCtrl.findOneByEmbedFlag(req, res));

router.get(`/api-${sys}/notes/findOneByDeleted/:deleted`, (req, res) => notesCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/notes/findOneByName/:name`, (req, res) => notesCtrl.findOneByName(req, res));

router.get(`/api-${sys}/notes/findOneByFileMimeType/:fileMimeType`, (req, res) => notesCtrl.findOneByFileMimeType(req, res));

router.get(`/api-${sys}/notes/findOneByFilename/:filename`, (req, res) => notesCtrl.findOneByFilename(req, res));

router.get(`/api-${sys}/notes/findOneByParentType/:parentType`, (req, res) => notesCtrl.findOneByParentType(req, res));

router.get(`/api-${sys}/notes/findOneByDescription/:description`, (req, res) => notesCtrl.findOneByDescription(req, res));

router.get(`/api-${sys}/notes/findOneByDateEntered/:dateEntered`, (req, res) => notesCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/notes/findOneByDateModified/:dateModified`, (req, res) => notesCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/notes/findOneByAssignedUserId/:assignedUserId`, (req, res) => notesCtrl.findOneByAssignedUserId(req, res));

router.get(`/api-${sys}/notes/findOneByModifiedUserId/:modifiedUserId`, (req, res) => notesCtrl.findOneByModifiedUserId(req, res));

router.get(`/api-${sys}/notes/findOneByCreatedBy/:createdBy`, (req, res) => notesCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/notes/findOneByParentId/:parentId`, (req, res) => notesCtrl.findOneByParentId(req, res));

router.get(`/api-${sys}/notes/findOneByContactId/:contactId`, (req, res) => notesCtrl.findOneByContactId(req, res));



router.post(`/api-${sys}/notes/updateNoteById`, (req, res) => notesCtrl.updateNoteById(req, res));

router.post(`/api-${sys}/notes/updateNoteByPortalFlag`, (req, res) => notesCtrl.updateNoteByPortalFlag(req, res));

router.post(`/api-${sys}/notes/updateNoteByEmbedFlag`, (req, res) => notesCtrl.updateNoteByEmbedFlag(req, res));

router.post(`/api-${sys}/notes/updateNoteByDeleted`, (req, res) => notesCtrl.updateNoteByDeleted(req, res));

router.post(`/api-${sys}/notes/updateNoteByName`, (req, res) => notesCtrl.updateNoteByName(req, res));

router.post(`/api-${sys}/notes/updateNoteByFileMimeType`, (req, res) => notesCtrl.updateNoteByFileMimeType(req, res));

router.post(`/api-${sys}/notes/updateNoteByFilename`, (req, res) => notesCtrl.updateNoteByFilename(req, res));

router.post(`/api-${sys}/notes/updateNoteByParentType`, (req, res) => notesCtrl.updateNoteByParentType(req, res));

router.post(`/api-${sys}/notes/updateNoteByDescription`, (req, res) => notesCtrl.updateNoteByDescription(req, res));

router.post(`/api-${sys}/notes/updateNoteByDateEntered`, (req, res) => notesCtrl.updateNoteByDateEntered(req, res));

router.post(`/api-${sys}/notes/updateNoteByDateModified`, (req, res) => notesCtrl.updateNoteByDateModified(req, res));

router.post(`/api-${sys}/notes/updateNoteByAssignedUserId`, (req, res) => notesCtrl.updateNoteByAssignedUserId(req, res));

router.post(`/api-${sys}/notes/updateNoteByModifiedUserId`, (req, res) => notesCtrl.updateNoteByModifiedUserId(req, res));

router.post(`/api-${sys}/notes/updateNoteByCreatedBy`, (req, res) => notesCtrl.updateNoteByCreatedBy(req, res));

router.post(`/api-${sys}/notes/updateNoteByParentId`, (req, res) => notesCtrl.updateNoteByParentId(req, res));

router.post(`/api-${sys}/notes/updateNoteByContactId`, (req, res) => notesCtrl.updateNoteByContactId(req, res));





router.get(`/api-${sys}/notes/`, (req, res) => notesCtrl.getAllNotes(req, res));
router.post(`/api-${sys}/notes/`, (req, res) => notesCtrl.addNote(req, res));
router.get(`/api-${sys}/notes/:id`, (req, res) => notesCtrl.getANote(req, res));
router.put(`/api-${sys}/notes/:id`, (req, res) => notesCtrl.updateNote(req, res));
router.delete(`/api-${sys}/notes/:id`, (req, res) => notesCtrl.deleteNote(req, res));

//</es-section>
module.exports = router;
