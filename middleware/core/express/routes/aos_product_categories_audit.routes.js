/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:19 GMT-0400 (Bolivia Time)
 * Time: 14:56:19
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:19 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:19
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const aosProductCategoriesAuditCtrl = require("../controllers/aos_product_categories_audit.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/aos-product-categories-audit/findOneById/:id`, (req, res) => aosProductCategoriesAuditCtrl.findOneById(req, res));

router.get(`/api-${sys}/aos-product-categories-audit/findOneByCreatedBy/:createdBy`, (req, res) => aosProductCategoriesAuditCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/aos-product-categories-audit/findOneByFieldName/:fieldName`, (req, res) => aosProductCategoriesAuditCtrl.findOneByFieldName(req, res));

router.get(`/api-${sys}/aos-product-categories-audit/findOneByDataType/:dataType`, (req, res) => aosProductCategoriesAuditCtrl.findOneByDataType(req, res));

router.get(`/api-${sys}/aos-product-categories-audit/findOneByBeforeValueString/:beforeValueString`, (req, res) => aosProductCategoriesAuditCtrl.findOneByBeforeValueString(req, res));

router.get(`/api-${sys}/aos-product-categories-audit/findOneByAfterValueString/:afterValueString`, (req, res) => aosProductCategoriesAuditCtrl.findOneByAfterValueString(req, res));

router.get(`/api-${sys}/aos-product-categories-audit/findOneByBeforeValueText/:beforeValueText`, (req, res) => aosProductCategoriesAuditCtrl.findOneByBeforeValueText(req, res));

router.get(`/api-${sys}/aos-product-categories-audit/findOneByAfterValueText/:afterValueText`, (req, res) => aosProductCategoriesAuditCtrl.findOneByAfterValueText(req, res));

router.get(`/api-${sys}/aos-product-categories-audit/findOneByDateCreated/:dateCreated`, (req, res) => aosProductCategoriesAuditCtrl.findOneByDateCreated(req, res));

router.get(`/api-${sys}/aos-product-categories-audit/findOneByParentId/:parentId`, (req, res) => aosProductCategoriesAuditCtrl.findOneByParentId(req, res));



router.post(`/api-${sys}/aos-product-categories-audit/updateAoProductCategoryAuditById`, (req, res) => aosProductCategoriesAuditCtrl.updateAoProductCategoryAuditById(req, res));

router.post(`/api-${sys}/aos-product-categories-audit/updateAoProductCategoryAuditByCreatedBy`, (req, res) => aosProductCategoriesAuditCtrl.updateAoProductCategoryAuditByCreatedBy(req, res));

router.post(`/api-${sys}/aos-product-categories-audit/updateAoProductCategoryAuditByFieldName`, (req, res) => aosProductCategoriesAuditCtrl.updateAoProductCategoryAuditByFieldName(req, res));

router.post(`/api-${sys}/aos-product-categories-audit/updateAoProductCategoryAuditByDataType`, (req, res) => aosProductCategoriesAuditCtrl.updateAoProductCategoryAuditByDataType(req, res));

router.post(`/api-${sys}/aos-product-categories-audit/updateAoProductCategoryAuditByBeforeValueString`, (req, res) => aosProductCategoriesAuditCtrl.updateAoProductCategoryAuditByBeforeValueString(req, res));

router.post(`/api-${sys}/aos-product-categories-audit/updateAoProductCategoryAuditByAfterValueString`, (req, res) => aosProductCategoriesAuditCtrl.updateAoProductCategoryAuditByAfterValueString(req, res));

router.post(`/api-${sys}/aos-product-categories-audit/updateAoProductCategoryAuditByBeforeValueText`, (req, res) => aosProductCategoriesAuditCtrl.updateAoProductCategoryAuditByBeforeValueText(req, res));

router.post(`/api-${sys}/aos-product-categories-audit/updateAoProductCategoryAuditByAfterValueText`, (req, res) => aosProductCategoriesAuditCtrl.updateAoProductCategoryAuditByAfterValueText(req, res));

router.post(`/api-${sys}/aos-product-categories-audit/updateAoProductCategoryAuditByDateCreated`, (req, res) => aosProductCategoriesAuditCtrl.updateAoProductCategoryAuditByDateCreated(req, res));

router.post(`/api-${sys}/aos-product-categories-audit/updateAoProductCategoryAuditByParentId`, (req, res) => aosProductCategoriesAuditCtrl.updateAoProductCategoryAuditByParentId(req, res));





router.get(`/api-${sys}/aos-product-categories-audit/`, (req, res) => aosProductCategoriesAuditCtrl.getAllAosProductCategoriesAudit(req, res));
router.post(`/api-${sys}/aos-product-categories-audit/`, (req, res) => aosProductCategoriesAuditCtrl.addAoProductCategoryAudit(req, res));
router.get(`/api-${sys}/aos-product-categories-audit/:id`, (req, res) => aosProductCategoriesAuditCtrl.getAAoProductCategoryAudit(req, res));
router.put(`/api-${sys}/aos-product-categories-audit/:id`, (req, res) => aosProductCategoriesAuditCtrl.updateAoProductCategoryAudit(req, res));
router.delete(`/api-${sys}/aos-product-categories-audit/:id`, (req, res) => aosProductCategoriesAuditCtrl.deleteAoProductCategoryAudit(req, res));

//</es-section>
module.exports = router;
