/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:16 GMT-0400 (Bolivia Time)
 * Time: 14:56:16
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:16 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:16
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const aosProductsAuditCtrl = require("../controllers/aos_products_audit.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/aos-products-audit/findOneById/:id`, (req, res) => aosProductsAuditCtrl.findOneById(req, res));

router.get(`/api-${sys}/aos-products-audit/findOneByCreatedBy/:createdBy`, (req, res) => aosProductsAuditCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/aos-products-audit/findOneByFieldName/:fieldName`, (req, res) => aosProductsAuditCtrl.findOneByFieldName(req, res));

router.get(`/api-${sys}/aos-products-audit/findOneByDataType/:dataType`, (req, res) => aosProductsAuditCtrl.findOneByDataType(req, res));

router.get(`/api-${sys}/aos-products-audit/findOneByBeforeValueString/:beforeValueString`, (req, res) => aosProductsAuditCtrl.findOneByBeforeValueString(req, res));

router.get(`/api-${sys}/aos-products-audit/findOneByAfterValueString/:afterValueString`, (req, res) => aosProductsAuditCtrl.findOneByAfterValueString(req, res));

router.get(`/api-${sys}/aos-products-audit/findOneByBeforeValueText/:beforeValueText`, (req, res) => aosProductsAuditCtrl.findOneByBeforeValueText(req, res));

router.get(`/api-${sys}/aos-products-audit/findOneByAfterValueText/:afterValueText`, (req, res) => aosProductsAuditCtrl.findOneByAfterValueText(req, res));

router.get(`/api-${sys}/aos-products-audit/findOneByDateCreated/:dateCreated`, (req, res) => aosProductsAuditCtrl.findOneByDateCreated(req, res));

router.get(`/api-${sys}/aos-products-audit/findOneByParentId/:parentId`, (req, res) => aosProductsAuditCtrl.findOneByParentId(req, res));



router.post(`/api-${sys}/aos-products-audit/updateAoProductAuditById`, (req, res) => aosProductsAuditCtrl.updateAoProductAuditById(req, res));

router.post(`/api-${sys}/aos-products-audit/updateAoProductAuditByCreatedBy`, (req, res) => aosProductsAuditCtrl.updateAoProductAuditByCreatedBy(req, res));

router.post(`/api-${sys}/aos-products-audit/updateAoProductAuditByFieldName`, (req, res) => aosProductsAuditCtrl.updateAoProductAuditByFieldName(req, res));

router.post(`/api-${sys}/aos-products-audit/updateAoProductAuditByDataType`, (req, res) => aosProductsAuditCtrl.updateAoProductAuditByDataType(req, res));

router.post(`/api-${sys}/aos-products-audit/updateAoProductAuditByBeforeValueString`, (req, res) => aosProductsAuditCtrl.updateAoProductAuditByBeforeValueString(req, res));

router.post(`/api-${sys}/aos-products-audit/updateAoProductAuditByAfterValueString`, (req, res) => aosProductsAuditCtrl.updateAoProductAuditByAfterValueString(req, res));

router.post(`/api-${sys}/aos-products-audit/updateAoProductAuditByBeforeValueText`, (req, res) => aosProductsAuditCtrl.updateAoProductAuditByBeforeValueText(req, res));

router.post(`/api-${sys}/aos-products-audit/updateAoProductAuditByAfterValueText`, (req, res) => aosProductsAuditCtrl.updateAoProductAuditByAfterValueText(req, res));

router.post(`/api-${sys}/aos-products-audit/updateAoProductAuditByDateCreated`, (req, res) => aosProductsAuditCtrl.updateAoProductAuditByDateCreated(req, res));

router.post(`/api-${sys}/aos-products-audit/updateAoProductAuditByParentId`, (req, res) => aosProductsAuditCtrl.updateAoProductAuditByParentId(req, res));





router.get(`/api-${sys}/aos-products-audit/`, (req, res) => aosProductsAuditCtrl.getAllAosProductsAudit(req, res));
router.post(`/api-${sys}/datatable/aos-products-audit/`, (req, res) => aosProductsAuditCtrl.getAllAosProductsAudit(req, res));
router.post(`/api-${sys}/aos-products-audit/`, (req, res) => aosProductsAuditCtrl.addAoProductAudit(req, res));
router.get(`/api-${sys}/aos-products-audit/:id`, (req, res) => aosProductsAuditCtrl.getAAoProductAudit(req, res));
router.put(`/api-${sys}/aos-products-audit/:id`, (req, res) => aosProductsAuditCtrl.updateAoProductAudit(req, res));
router.delete(`/api-${sys}/aos-products-audit/:id`, (req, res) => aosProductsAuditCtrl.deleteAoProductAudit(req, res));

//</es-section>
module.exports = router;
