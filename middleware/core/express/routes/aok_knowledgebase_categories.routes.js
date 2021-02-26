/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:22:02 GMT-0400 (Bolivia Time)
 * Time: 0:22:2
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:22:02 GMT-0400 (Bolivia Time)
 * Last time updated: 0:22:2
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const aokKnowledgebaseCategoriesCtrl = require("../controllers/aok_knowledgebase_categories.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/aok-knowledgebase-categories/findOneById/:id`, (req, res) => aokKnowledgebaseCategoriesCtrl.findOneById(req, res));

router.get(`/api-${sys}/aok-knowledgebase-categories/findOneByDeleted/:deleted`, (req, res) => aokKnowledgebaseCategoriesCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/aok-knowledgebase-categories/findOneByAokKnowledgebaseId/:aokKnowledgebaseId`, (req, res) => aokKnowledgebaseCategoriesCtrl.findOneByAokKnowledgebaseId(req, res));

router.get(`/api-${sys}/aok-knowledgebase-categories/findOneByAokKnowledgeBaseCategoriesId/:aokKnowledgeBaseCategoriesId`, (req, res) => aokKnowledgebaseCategoriesCtrl.findOneByAokKnowledgeBaseCategoriesId(req, res));

router.get(`/api-${sys}/aok-knowledgebase-categories/findOneByDateModified/:dateModified`, (req, res) => aokKnowledgebaseCategoriesCtrl.findOneByDateModified(req, res));



router.post(`/api-${sys}/aok-knowledgebase-categories/updateAokKnowledgebaseCategoryById`, (req, res) => aokKnowledgebaseCategoriesCtrl.updateAokKnowledgebaseCategoryById(req, res));

router.post(`/api-${sys}/aok-knowledgebase-categories/updateAokKnowledgebaseCategoryByDeleted`, (req, res) => aokKnowledgebaseCategoriesCtrl.updateAokKnowledgebaseCategoryByDeleted(req, res));

router.post(`/api-${sys}/aok-knowledgebase-categories/updateAokKnowledgebaseCategoryByAokKnowledgebaseId`, (req, res) => aokKnowledgebaseCategoriesCtrl.updateAokKnowledgebaseCategoryByAokKnowledgebaseId(req, res));

router.post(`/api-${sys}/aok-knowledgebase-categories/updateAokKnowledgebaseCategoryByAokKnowledgeBaseCategoriesId`, (req, res) => aokKnowledgebaseCategoriesCtrl.updateAokKnowledgebaseCategoryByAokKnowledgeBaseCategoriesId(req, res));

router.post(`/api-${sys}/aok-knowledgebase-categories/updateAokKnowledgebaseCategoryByDateModified`, (req, res) => aokKnowledgebaseCategoriesCtrl.updateAokKnowledgebaseCategoryByDateModified(req, res));





router.get(`/api-${sys}/aok-knowledgebase-categories/`, (req, res) => aokKnowledgebaseCategoriesCtrl.getAllAokKnowledgebaseCategories(req, res));
router.post(`/api-${sys}/aok-knowledgebase-categories/`, (req, res) => aokKnowledgebaseCategoriesCtrl.addAokKnowledgebaseCategory(req, res));
router.get(`/api-${sys}/aok-knowledgebase-categories/:id`, (req, res) => aokKnowledgebaseCategoriesCtrl.getAAokKnowledgebaseCategory(req, res));
router.put(`/api-${sys}/aok-knowledgebase-categories/:id`, (req, res) => aokKnowledgebaseCategoriesCtrl.updateAokKnowledgebaseCategory(req, res));
router.delete(`/api-${sys}/aok-knowledgebase-categories/:id`, (req, res) => aokKnowledgebaseCategoriesCtrl.deleteAokKnowledgebaseCategory(req, res));

//</es-section>
module.exports = router;
