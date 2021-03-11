/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:55:59 GMT-0400 (Bolivia Time)
 * Time: 14:55:59
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:55:59 GMT-0400 (Bolivia Time)
 * Last time updated: 14:55:59
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const aokKnowledgebaseAuditCtrl = require("../controllers/aok_knowledgebase_audit.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/aok-knowledgebase-audit/findOneById/:id`, (req, res) => aokKnowledgebaseAuditCtrl.findOneById(req, res));

router.get(`/api-${sys}/aok-knowledgebase-audit/findOneByCreatedBy/:createdBy`, (req, res) => aokKnowledgebaseAuditCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/aok-knowledgebase-audit/findOneByFieldName/:fieldName`, (req, res) => aokKnowledgebaseAuditCtrl.findOneByFieldName(req, res));

router.get(`/api-${sys}/aok-knowledgebase-audit/findOneByDataType/:dataType`, (req, res) => aokKnowledgebaseAuditCtrl.findOneByDataType(req, res));

router.get(`/api-${sys}/aok-knowledgebase-audit/findOneByBeforeValueString/:beforeValueString`, (req, res) => aokKnowledgebaseAuditCtrl.findOneByBeforeValueString(req, res));

router.get(`/api-${sys}/aok-knowledgebase-audit/findOneByAfterValueString/:afterValueString`, (req, res) => aokKnowledgebaseAuditCtrl.findOneByAfterValueString(req, res));

router.get(`/api-${sys}/aok-knowledgebase-audit/findOneByBeforeValueText/:beforeValueText`, (req, res) => aokKnowledgebaseAuditCtrl.findOneByBeforeValueText(req, res));

router.get(`/api-${sys}/aok-knowledgebase-audit/findOneByAfterValueText/:afterValueText`, (req, res) => aokKnowledgebaseAuditCtrl.findOneByAfterValueText(req, res));

router.get(`/api-${sys}/aok-knowledgebase-audit/findOneByDateCreated/:dateCreated`, (req, res) => aokKnowledgebaseAuditCtrl.findOneByDateCreated(req, res));

router.get(`/api-${sys}/aok-knowledgebase-audit/findOneByParentId/:parentId`, (req, res) => aokKnowledgebaseAuditCtrl.findOneByParentId(req, res));



router.post(`/api-${sys}/aok-knowledgebase-audit/updateAokKnowledgebaseAuditById`, (req, res) => aokKnowledgebaseAuditCtrl.updateAokKnowledgebaseAuditById(req, res));

router.post(`/api-${sys}/aok-knowledgebase-audit/updateAokKnowledgebaseAuditByCreatedBy`, (req, res) => aokKnowledgebaseAuditCtrl.updateAokKnowledgebaseAuditByCreatedBy(req, res));

router.post(`/api-${sys}/aok-knowledgebase-audit/updateAokKnowledgebaseAuditByFieldName`, (req, res) => aokKnowledgebaseAuditCtrl.updateAokKnowledgebaseAuditByFieldName(req, res));

router.post(`/api-${sys}/aok-knowledgebase-audit/updateAokKnowledgebaseAuditByDataType`, (req, res) => aokKnowledgebaseAuditCtrl.updateAokKnowledgebaseAuditByDataType(req, res));

router.post(`/api-${sys}/aok-knowledgebase-audit/updateAokKnowledgebaseAuditByBeforeValueString`, (req, res) => aokKnowledgebaseAuditCtrl.updateAokKnowledgebaseAuditByBeforeValueString(req, res));

router.post(`/api-${sys}/aok-knowledgebase-audit/updateAokKnowledgebaseAuditByAfterValueString`, (req, res) => aokKnowledgebaseAuditCtrl.updateAokKnowledgebaseAuditByAfterValueString(req, res));

router.post(`/api-${sys}/aok-knowledgebase-audit/updateAokKnowledgebaseAuditByBeforeValueText`, (req, res) => aokKnowledgebaseAuditCtrl.updateAokKnowledgebaseAuditByBeforeValueText(req, res));

router.post(`/api-${sys}/aok-knowledgebase-audit/updateAokKnowledgebaseAuditByAfterValueText`, (req, res) => aokKnowledgebaseAuditCtrl.updateAokKnowledgebaseAuditByAfterValueText(req, res));

router.post(`/api-${sys}/aok-knowledgebase-audit/updateAokKnowledgebaseAuditByDateCreated`, (req, res) => aokKnowledgebaseAuditCtrl.updateAokKnowledgebaseAuditByDateCreated(req, res));

router.post(`/api-${sys}/aok-knowledgebase-audit/updateAokKnowledgebaseAuditByParentId`, (req, res) => aokKnowledgebaseAuditCtrl.updateAokKnowledgebaseAuditByParentId(req, res));





router.get(`/api-${sys}/aok-knowledgebase-audit/`, (req, res) => aokKnowledgebaseAuditCtrl.getAllAokKnowledgebaseAudit(req, res));
router.post(`/api-${sys}/datatable/aok-knowledgebase-audit/`, (req, res) => aokKnowledgebaseAuditCtrl.getAllAokKnowledgebaseAudit(req, res));
router.post(`/api-${sys}/aok-knowledgebase-audit/`, (req, res) => aokKnowledgebaseAuditCtrl.addAokKnowledgebaseAudit(req, res));
router.get(`/api-${sys}/aok-knowledgebase-audit/:id`, (req, res) => aokKnowledgebaseAuditCtrl.getAAokKnowledgebaseAudit(req, res));
router.put(`/api-${sys}/aok-knowledgebase-audit/:id`, (req, res) => aokKnowledgebaseAuditCtrl.updateAokKnowledgebaseAudit(req, res));
router.delete(`/api-${sys}/aok-knowledgebase-audit/:id`, (req, res) => aokKnowledgebaseAuditCtrl.deleteAokKnowledgebaseAudit(req, res));

//</es-section>
module.exports = router;
