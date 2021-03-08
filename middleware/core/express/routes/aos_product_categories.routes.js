/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:35:30 GMT-0400 (Bolivia Time)
 * Time: 15:35:30
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:35:30 GMT-0400 (Bolivia Time)
 * Last time updated: 15:35:30
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const aosProductCategoriesCtrl = require("../controllers/aos_product_categories.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/aos-product-categories/findOneById/:id`, (req, res) => aosProductCategoriesCtrl.findOneById(req, res));

router.get(`/api-${sys}/aos-product-categories/findOneByDeleted/:deleted`, (req, res) => aosProductCategoriesCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/aos-product-categories/findOneByIsParent/:isParent`, (req, res) => aosProductCategoriesCtrl.findOneByIsParent(req, res));

router.get(`/api-${sys}/aos-product-categories/findOneByName/:name`, (req, res) => aosProductCategoriesCtrl.findOneByName(req, res));

router.get(`/api-${sys}/aos-product-categories/findOneByDescription/:description`, (req, res) => aosProductCategoriesCtrl.findOneByDescription(req, res));

router.get(`/api-${sys}/aos-product-categories/findOneByDateEntered/:dateEntered`, (req, res) => aosProductCategoriesCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/aos-product-categories/findOneByDateModified/:dateModified`, (req, res) => aosProductCategoriesCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/aos-product-categories/findOneByModifiedUserId/:modifiedUserId`, (req, res) => aosProductCategoriesCtrl.findOneByModifiedUserId(req, res));

router.get(`/api-${sys}/aos-product-categories/findOneByCreatedBy/:createdBy`, (req, res) => aosProductCategoriesCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/aos-product-categories/findOneByAssignedUserId/:assignedUserId`, (req, res) => aosProductCategoriesCtrl.findOneByAssignedUserId(req, res));

router.get(`/api-${sys}/aos-product-categories/findOneByParentCategoryId/:parentCategoryId`, (req, res) => aosProductCategoriesCtrl.findOneByParentCategoryId(req, res));



router.post(`/api-${sys}/aos-product-categories/updateAoProductCategoryById`, (req, res) => aosProductCategoriesCtrl.updateAoProductCategoryById(req, res));

router.post(`/api-${sys}/aos-product-categories/updateAoProductCategoryByDeleted`, (req, res) => aosProductCategoriesCtrl.updateAoProductCategoryByDeleted(req, res));

router.post(`/api-${sys}/aos-product-categories/updateAoProductCategoryByIsParent`, (req, res) => aosProductCategoriesCtrl.updateAoProductCategoryByIsParent(req, res));

router.post(`/api-${sys}/aos-product-categories/updateAoProductCategoryByName`, (req, res) => aosProductCategoriesCtrl.updateAoProductCategoryByName(req, res));

router.post(`/api-${sys}/aos-product-categories/updateAoProductCategoryByDescription`, (req, res) => aosProductCategoriesCtrl.updateAoProductCategoryByDescription(req, res));

router.post(`/api-${sys}/aos-product-categories/updateAoProductCategoryByDateEntered`, (req, res) => aosProductCategoriesCtrl.updateAoProductCategoryByDateEntered(req, res));

router.post(`/api-${sys}/aos-product-categories/updateAoProductCategoryByDateModified`, (req, res) => aosProductCategoriesCtrl.updateAoProductCategoryByDateModified(req, res));

router.post(`/api-${sys}/aos-product-categories/updateAoProductCategoryByModifiedUserId`, (req, res) => aosProductCategoriesCtrl.updateAoProductCategoryByModifiedUserId(req, res));

router.post(`/api-${sys}/aos-product-categories/updateAoProductCategoryByCreatedBy`, (req, res) => aosProductCategoriesCtrl.updateAoProductCategoryByCreatedBy(req, res));

router.post(`/api-${sys}/aos-product-categories/updateAoProductCategoryByAssignedUserId`, (req, res) => aosProductCategoriesCtrl.updateAoProductCategoryByAssignedUserId(req, res));

router.post(`/api-${sys}/aos-product-categories/updateAoProductCategoryByParentCategoryId`, (req, res) => aosProductCategoriesCtrl.updateAoProductCategoryByParentCategoryId(req, res));





router.get(`/api-${sys}/aos-product-categories/`, (req, res) => aosProductCategoriesCtrl.getAllAosProductCategories(req, res));
router.post(`/api-${sys}/aos-product-categories/`, (req, res) => aosProductCategoriesCtrl.addAoProductCategory(req, res));
router.get(`/api-${sys}/aos-product-categories/:id`, (req, res) => aosProductCategoriesCtrl.getAAoProductCategory(req, res));
router.put(`/api-${sys}/aos-product-categories/:id`, (req, res) => aosProductCategoriesCtrl.updateAoProductCategory(req, res));
router.delete(`/api-${sys}/aos-product-categories/:id`, (req, res) => aosProductCategoriesCtrl.deleteAoProductCategory(req, res));

//</es-section>
module.exports = router;
