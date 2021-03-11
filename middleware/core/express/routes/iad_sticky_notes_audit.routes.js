/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:02 GMT-0400 (Bolivia Time)
 * Time: 14:57:2
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:02 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:2
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const iadStickyNotesAuditCtrl = require("../controllers/iad_sticky_notes_audit.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/iad-sticky-notes-audit/findOneById/:id`, (req, res) => iadStickyNotesAuditCtrl.findOneById(req, res));

router.get(`/api-${sys}/iad-sticky-notes-audit/findOneByCreatedBy/:createdBy`, (req, res) => iadStickyNotesAuditCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/iad-sticky-notes-audit/findOneByFieldName/:fieldName`, (req, res) => iadStickyNotesAuditCtrl.findOneByFieldName(req, res));

router.get(`/api-${sys}/iad-sticky-notes-audit/findOneByDataType/:dataType`, (req, res) => iadStickyNotesAuditCtrl.findOneByDataType(req, res));

router.get(`/api-${sys}/iad-sticky-notes-audit/findOneByBeforeValueString/:beforeValueString`, (req, res) => iadStickyNotesAuditCtrl.findOneByBeforeValueString(req, res));

router.get(`/api-${sys}/iad-sticky-notes-audit/findOneByAfterValueString/:afterValueString`, (req, res) => iadStickyNotesAuditCtrl.findOneByAfterValueString(req, res));

router.get(`/api-${sys}/iad-sticky-notes-audit/findOneByBeforeValueText/:beforeValueText`, (req, res) => iadStickyNotesAuditCtrl.findOneByBeforeValueText(req, res));

router.get(`/api-${sys}/iad-sticky-notes-audit/findOneByAfterValueText/:afterValueText`, (req, res) => iadStickyNotesAuditCtrl.findOneByAfterValueText(req, res));

router.get(`/api-${sys}/iad-sticky-notes-audit/findOneByDateCreated/:dateCreated`, (req, res) => iadStickyNotesAuditCtrl.findOneByDateCreated(req, res));

router.get(`/api-${sys}/iad-sticky-notes-audit/findOneByParentId/:parentId`, (req, res) => iadStickyNotesAuditCtrl.findOneByParentId(req, res));



router.post(`/api-${sys}/iad-sticky-notes-audit/updateIadStickyNoteAuditById`, (req, res) => iadStickyNotesAuditCtrl.updateIadStickyNoteAuditById(req, res));

router.post(`/api-${sys}/iad-sticky-notes-audit/updateIadStickyNoteAuditByCreatedBy`, (req, res) => iadStickyNotesAuditCtrl.updateIadStickyNoteAuditByCreatedBy(req, res));

router.post(`/api-${sys}/iad-sticky-notes-audit/updateIadStickyNoteAuditByFieldName`, (req, res) => iadStickyNotesAuditCtrl.updateIadStickyNoteAuditByFieldName(req, res));

router.post(`/api-${sys}/iad-sticky-notes-audit/updateIadStickyNoteAuditByDataType`, (req, res) => iadStickyNotesAuditCtrl.updateIadStickyNoteAuditByDataType(req, res));

router.post(`/api-${sys}/iad-sticky-notes-audit/updateIadStickyNoteAuditByBeforeValueString`, (req, res) => iadStickyNotesAuditCtrl.updateIadStickyNoteAuditByBeforeValueString(req, res));

router.post(`/api-${sys}/iad-sticky-notes-audit/updateIadStickyNoteAuditByAfterValueString`, (req, res) => iadStickyNotesAuditCtrl.updateIadStickyNoteAuditByAfterValueString(req, res));

router.post(`/api-${sys}/iad-sticky-notes-audit/updateIadStickyNoteAuditByBeforeValueText`, (req, res) => iadStickyNotesAuditCtrl.updateIadStickyNoteAuditByBeforeValueText(req, res));

router.post(`/api-${sys}/iad-sticky-notes-audit/updateIadStickyNoteAuditByAfterValueText`, (req, res) => iadStickyNotesAuditCtrl.updateIadStickyNoteAuditByAfterValueText(req, res));

router.post(`/api-${sys}/iad-sticky-notes-audit/updateIadStickyNoteAuditByDateCreated`, (req, res) => iadStickyNotesAuditCtrl.updateIadStickyNoteAuditByDateCreated(req, res));

router.post(`/api-${sys}/iad-sticky-notes-audit/updateIadStickyNoteAuditByParentId`, (req, res) => iadStickyNotesAuditCtrl.updateIadStickyNoteAuditByParentId(req, res));





router.get(`/api-${sys}/iad-sticky-notes-audit/`, (req, res) => iadStickyNotesAuditCtrl.getAllIadStickyNotesAudit(req, res));
router.post(`/api-${sys}/datatable/iad-sticky-notes-audit/`, (req, res) => iadStickyNotesAuditCtrl.getAllIadStickyNotesAudit(req, res));
router.post(`/api-${sys}/iad-sticky-notes-audit/`, (req, res) => iadStickyNotesAuditCtrl.addIadStickyNoteAudit(req, res));
router.get(`/api-${sys}/iad-sticky-notes-audit/:id`, (req, res) => iadStickyNotesAuditCtrl.getAIadStickyNoteAudit(req, res));
router.put(`/api-${sys}/iad-sticky-notes-audit/:id`, (req, res) => iadStickyNotesAuditCtrl.updateIadStickyNoteAudit(req, res));
router.delete(`/api-${sys}/iad-sticky-notes-audit/:id`, (req, res) => iadStickyNotesAuditCtrl.deleteIadStickyNoteAudit(req, res));

//</es-section>
module.exports = router;
