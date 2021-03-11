/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:00 GMT-0400 (Bolivia Time)
 * Time: 14:56:0
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:00 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:0
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const aokKnowledgeBaseCategoriesAuditCtrl = require("../controllers/aok_knowledge_base_categories_audit.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/aok-knowledge-base-categories-audit/findOneById/:id`, (req, res) => aokKnowledgeBaseCategoriesAuditCtrl.findOneById(req, res));

router.get(`/api-${sys}/aok-knowledge-base-categories-audit/findOneByCreatedBy/:createdBy`, (req, res) => aokKnowledgeBaseCategoriesAuditCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/aok-knowledge-base-categories-audit/findOneByFieldName/:fieldName`, (req, res) => aokKnowledgeBaseCategoriesAuditCtrl.findOneByFieldName(req, res));

router.get(`/api-${sys}/aok-knowledge-base-categories-audit/findOneByDataType/:dataType`, (req, res) => aokKnowledgeBaseCategoriesAuditCtrl.findOneByDataType(req, res));

router.get(`/api-${sys}/aok-knowledge-base-categories-audit/findOneByBeforeValueString/:beforeValueString`, (req, res) => aokKnowledgeBaseCategoriesAuditCtrl.findOneByBeforeValueString(req, res));

router.get(`/api-${sys}/aok-knowledge-base-categories-audit/findOneByAfterValueString/:afterValueString`, (req, res) => aokKnowledgeBaseCategoriesAuditCtrl.findOneByAfterValueString(req, res));

router.get(`/api-${sys}/aok-knowledge-base-categories-audit/findOneByBeforeValueText/:beforeValueText`, (req, res) => aokKnowledgeBaseCategoriesAuditCtrl.findOneByBeforeValueText(req, res));

router.get(`/api-${sys}/aok-knowledge-base-categories-audit/findOneByAfterValueText/:afterValueText`, (req, res) => aokKnowledgeBaseCategoriesAuditCtrl.findOneByAfterValueText(req, res));

router.get(`/api-${sys}/aok-knowledge-base-categories-audit/findOneByDateCreated/:dateCreated`, (req, res) => aokKnowledgeBaseCategoriesAuditCtrl.findOneByDateCreated(req, res));

router.get(`/api-${sys}/aok-knowledge-base-categories-audit/findOneByParentId/:parentId`, (req, res) => aokKnowledgeBaseCategoriesAuditCtrl.findOneByParentId(req, res));



router.post(`/api-${sys}/aok-knowledge-base-categories-audit/updateAokKnowledgeBaseCategoryAuditById`, (req, res) => aokKnowledgeBaseCategoriesAuditCtrl.updateAokKnowledgeBaseCategoryAuditById(req, res));

router.post(`/api-${sys}/aok-knowledge-base-categories-audit/updateAokKnowledgeBaseCategoryAuditByCreatedBy`, (req, res) => aokKnowledgeBaseCategoriesAuditCtrl.updateAokKnowledgeBaseCategoryAuditByCreatedBy(req, res));

router.post(`/api-${sys}/aok-knowledge-base-categories-audit/updateAokKnowledgeBaseCategoryAuditByFieldName`, (req, res) => aokKnowledgeBaseCategoriesAuditCtrl.updateAokKnowledgeBaseCategoryAuditByFieldName(req, res));

router.post(`/api-${sys}/aok-knowledge-base-categories-audit/updateAokKnowledgeBaseCategoryAuditByDataType`, (req, res) => aokKnowledgeBaseCategoriesAuditCtrl.updateAokKnowledgeBaseCategoryAuditByDataType(req, res));

router.post(`/api-${sys}/aok-knowledge-base-categories-audit/updateAokKnowledgeBaseCategoryAuditByBeforeValueString`, (req, res) => aokKnowledgeBaseCategoriesAuditCtrl.updateAokKnowledgeBaseCategoryAuditByBeforeValueString(req, res));

router.post(`/api-${sys}/aok-knowledge-base-categories-audit/updateAokKnowledgeBaseCategoryAuditByAfterValueString`, (req, res) => aokKnowledgeBaseCategoriesAuditCtrl.updateAokKnowledgeBaseCategoryAuditByAfterValueString(req, res));

router.post(`/api-${sys}/aok-knowledge-base-categories-audit/updateAokKnowledgeBaseCategoryAuditByBeforeValueText`, (req, res) => aokKnowledgeBaseCategoriesAuditCtrl.updateAokKnowledgeBaseCategoryAuditByBeforeValueText(req, res));

router.post(`/api-${sys}/aok-knowledge-base-categories-audit/updateAokKnowledgeBaseCategoryAuditByAfterValueText`, (req, res) => aokKnowledgeBaseCategoriesAuditCtrl.updateAokKnowledgeBaseCategoryAuditByAfterValueText(req, res));

router.post(`/api-${sys}/aok-knowledge-base-categories-audit/updateAokKnowledgeBaseCategoryAuditByDateCreated`, (req, res) => aokKnowledgeBaseCategoriesAuditCtrl.updateAokKnowledgeBaseCategoryAuditByDateCreated(req, res));

router.post(`/api-${sys}/aok-knowledge-base-categories-audit/updateAokKnowledgeBaseCategoryAuditByParentId`, (req, res) => aokKnowledgeBaseCategoriesAuditCtrl.updateAokKnowledgeBaseCategoryAuditByParentId(req, res));





router.get(`/api-${sys}/aok-knowledge-base-categories-audit/`, (req, res) => aokKnowledgeBaseCategoriesAuditCtrl.getAllAokKnowledgeBaseCategoriesAudit(req, res));
router.post(`/api-${sys}/datatable/aok-knowledge-base-categories-audit/`, (req, res) => aokKnowledgeBaseCategoriesAuditCtrl.getAllAokKnowledgeBaseCategoriesAudit(req, res));
router.post(`/api-${sys}/aok-knowledge-base-categories-audit/`, (req, res) => aokKnowledgeBaseCategoriesAuditCtrl.addAokKnowledgeBaseCategoryAudit(req, res));
router.get(`/api-${sys}/aok-knowledge-base-categories-audit/:id`, (req, res) => aokKnowledgeBaseCategoriesAuditCtrl.getAAokKnowledgeBaseCategoryAudit(req, res));
router.put(`/api-${sys}/aok-knowledge-base-categories-audit/:id`, (req, res) => aokKnowledgeBaseCategoriesAuditCtrl.updateAokKnowledgeBaseCategoryAudit(req, res));
router.delete(`/api-${sys}/aok-knowledge-base-categories-audit/:id`, (req, res) => aokKnowledgeBaseCategoriesAuditCtrl.deleteAokKnowledgeBaseCategoryAudit(req, res));

//</es-section>
module.exports = router;
