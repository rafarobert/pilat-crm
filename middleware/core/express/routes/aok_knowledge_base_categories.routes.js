/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:35:43 GMT-0400 (Bolivia Time)
 * Time: 18:35:43
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:35:43 GMT-0400 (Bolivia Time)
 * Last time updated: 18:35:43
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const aokKnowledgeBaseCategoriesCtrl = require("../controllers/aok_knowledge_base_categories.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/aok-knowledge-base-categories/findOneById/:id`, (req, res) => aokKnowledgeBaseCategoriesCtrl.findOneById(req, res));

router.get(`/api-${sys}/aok-knowledge-base-categories/findOneByDeleted/:deleted`, (req, res) => aokKnowledgeBaseCategoriesCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/aok-knowledge-base-categories/findOneByName/:name`, (req, res) => aokKnowledgeBaseCategoriesCtrl.findOneByName(req, res));

router.get(`/api-${sys}/aok-knowledge-base-categories/findOneByDescription/:description`, (req, res) => aokKnowledgeBaseCategoriesCtrl.findOneByDescription(req, res));

router.get(`/api-${sys}/aok-knowledge-base-categories/findOneByDateEntered/:dateEntered`, (req, res) => aokKnowledgeBaseCategoriesCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/aok-knowledge-base-categories/findOneByDateModified/:dateModified`, (req, res) => aokKnowledgeBaseCategoriesCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/aok-knowledge-base-categories/findOneByModifiedUserId/:modifiedUserId`, (req, res) => aokKnowledgeBaseCategoriesCtrl.findOneByModifiedUserId(req, res));

router.get(`/api-${sys}/aok-knowledge-base-categories/findOneByCreatedBy/:createdBy`, (req, res) => aokKnowledgeBaseCategoriesCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/aok-knowledge-base-categories/findOneByAssignedUserId/:assignedUserId`, (req, res) => aokKnowledgeBaseCategoriesCtrl.findOneByAssignedUserId(req, res));



router.post(`/api-${sys}/aok-knowledge-base-categories/updateAokKnowledgeBaseCategoryById`, (req, res) => aokKnowledgeBaseCategoriesCtrl.updateAokKnowledgeBaseCategoryById(req, res));

router.post(`/api-${sys}/aok-knowledge-base-categories/updateAokKnowledgeBaseCategoryByDeleted`, (req, res) => aokKnowledgeBaseCategoriesCtrl.updateAokKnowledgeBaseCategoryByDeleted(req, res));

router.post(`/api-${sys}/aok-knowledge-base-categories/updateAokKnowledgeBaseCategoryByName`, (req, res) => aokKnowledgeBaseCategoriesCtrl.updateAokKnowledgeBaseCategoryByName(req, res));

router.post(`/api-${sys}/aok-knowledge-base-categories/updateAokKnowledgeBaseCategoryByDescription`, (req, res) => aokKnowledgeBaseCategoriesCtrl.updateAokKnowledgeBaseCategoryByDescription(req, res));

router.post(`/api-${sys}/aok-knowledge-base-categories/updateAokKnowledgeBaseCategoryByDateEntered`, (req, res) => aokKnowledgeBaseCategoriesCtrl.updateAokKnowledgeBaseCategoryByDateEntered(req, res));

router.post(`/api-${sys}/aok-knowledge-base-categories/updateAokKnowledgeBaseCategoryByDateModified`, (req, res) => aokKnowledgeBaseCategoriesCtrl.updateAokKnowledgeBaseCategoryByDateModified(req, res));

router.post(`/api-${sys}/aok-knowledge-base-categories/updateAokKnowledgeBaseCategoryByModifiedUserId`, (req, res) => aokKnowledgeBaseCategoriesCtrl.updateAokKnowledgeBaseCategoryByModifiedUserId(req, res));

router.post(`/api-${sys}/aok-knowledge-base-categories/updateAokKnowledgeBaseCategoryByCreatedBy`, (req, res) => aokKnowledgeBaseCategoriesCtrl.updateAokKnowledgeBaseCategoryByCreatedBy(req, res));

router.post(`/api-${sys}/aok-knowledge-base-categories/updateAokKnowledgeBaseCategoryByAssignedUserId`, (req, res) => aokKnowledgeBaseCategoriesCtrl.updateAokKnowledgeBaseCategoryByAssignedUserId(req, res));





router.get(`/api-${sys}/aok-knowledge-base-categories/`, (req, res) => aokKnowledgeBaseCategoriesCtrl.getAllAokKnowledgeBaseCategories(req, res));
router.post(`/api-${sys}/aok-knowledge-base-categories/`, (req, res) => aokKnowledgeBaseCategoriesCtrl.addAokKnowledgeBaseCategory(req, res));
router.get(`/api-${sys}/aok-knowledge-base-categories/:id`, (req, res) => aokKnowledgeBaseCategoriesCtrl.getAAokKnowledgeBaseCategory(req, res));
router.put(`/api-${sys}/aok-knowledge-base-categories/:id`, (req, res) => aokKnowledgeBaseCategoriesCtrl.updateAokKnowledgeBaseCategory(req, res));
router.delete(`/api-${sys}/aok-knowledge-base-categories/:id`, (req, res) => aokKnowledgeBaseCategoriesCtrl.deleteAokKnowledgeBaseCategory(req, res));

//</es-section>
module.exports = router;
