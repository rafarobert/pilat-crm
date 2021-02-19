/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:36:13 GMT-0400 (Bolivia Time)
 * Time: 18:36:13
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:36:13 GMT-0400 (Bolivia Time)
 * Last time updated: 18:36:13
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const aosProductsQuotesAuditCtrl = require("../controllers/aos_products_quotes_audit.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/aos-products-quotes-audit/findOneById/:id`, (req, res) => aosProductsQuotesAuditCtrl.findOneById(req, res));

router.get(`/api-${sys}/aos-products-quotes-audit/findOneByCreatedBy/:createdBy`, (req, res) => aosProductsQuotesAuditCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/aos-products-quotes-audit/findOneByFieldName/:fieldName`, (req, res) => aosProductsQuotesAuditCtrl.findOneByFieldName(req, res));

router.get(`/api-${sys}/aos-products-quotes-audit/findOneByDataType/:dataType`, (req, res) => aosProductsQuotesAuditCtrl.findOneByDataType(req, res));

router.get(`/api-${sys}/aos-products-quotes-audit/findOneByBeforeValueString/:beforeValueString`, (req, res) => aosProductsQuotesAuditCtrl.findOneByBeforeValueString(req, res));

router.get(`/api-${sys}/aos-products-quotes-audit/findOneByAfterValueString/:afterValueString`, (req, res) => aosProductsQuotesAuditCtrl.findOneByAfterValueString(req, res));

router.get(`/api-${sys}/aos-products-quotes-audit/findOneByBeforeValueText/:beforeValueText`, (req, res) => aosProductsQuotesAuditCtrl.findOneByBeforeValueText(req, res));

router.get(`/api-${sys}/aos-products-quotes-audit/findOneByAfterValueText/:afterValueText`, (req, res) => aosProductsQuotesAuditCtrl.findOneByAfterValueText(req, res));

router.get(`/api-${sys}/aos-products-quotes-audit/findOneByDateCreated/:dateCreated`, (req, res) => aosProductsQuotesAuditCtrl.findOneByDateCreated(req, res));

router.get(`/api-${sys}/aos-products-quotes-audit/findOneByParentId/:parentId`, (req, res) => aosProductsQuotesAuditCtrl.findOneByParentId(req, res));



router.post(`/api-${sys}/aos-products-quotes-audit/updateAoProductQuoteAuditById`, (req, res) => aosProductsQuotesAuditCtrl.updateAoProductQuoteAuditById(req, res));

router.post(`/api-${sys}/aos-products-quotes-audit/updateAoProductQuoteAuditByCreatedBy`, (req, res) => aosProductsQuotesAuditCtrl.updateAoProductQuoteAuditByCreatedBy(req, res));

router.post(`/api-${sys}/aos-products-quotes-audit/updateAoProductQuoteAuditByFieldName`, (req, res) => aosProductsQuotesAuditCtrl.updateAoProductQuoteAuditByFieldName(req, res));

router.post(`/api-${sys}/aos-products-quotes-audit/updateAoProductQuoteAuditByDataType`, (req, res) => aosProductsQuotesAuditCtrl.updateAoProductQuoteAuditByDataType(req, res));

router.post(`/api-${sys}/aos-products-quotes-audit/updateAoProductQuoteAuditByBeforeValueString`, (req, res) => aosProductsQuotesAuditCtrl.updateAoProductQuoteAuditByBeforeValueString(req, res));

router.post(`/api-${sys}/aos-products-quotes-audit/updateAoProductQuoteAuditByAfterValueString`, (req, res) => aosProductsQuotesAuditCtrl.updateAoProductQuoteAuditByAfterValueString(req, res));

router.post(`/api-${sys}/aos-products-quotes-audit/updateAoProductQuoteAuditByBeforeValueText`, (req, res) => aosProductsQuotesAuditCtrl.updateAoProductQuoteAuditByBeforeValueText(req, res));

router.post(`/api-${sys}/aos-products-quotes-audit/updateAoProductQuoteAuditByAfterValueText`, (req, res) => aosProductsQuotesAuditCtrl.updateAoProductQuoteAuditByAfterValueText(req, res));

router.post(`/api-${sys}/aos-products-quotes-audit/updateAoProductQuoteAuditByDateCreated`, (req, res) => aosProductsQuotesAuditCtrl.updateAoProductQuoteAuditByDateCreated(req, res));

router.post(`/api-${sys}/aos-products-quotes-audit/updateAoProductQuoteAuditByParentId`, (req, res) => aosProductsQuotesAuditCtrl.updateAoProductQuoteAuditByParentId(req, res));





router.get(`/api-${sys}/aos-products-quotes-audit/`, (req, res) => aosProductsQuotesAuditCtrl.getAllAosProductsQuotesAudit(req, res));
router.post(`/api-${sys}/aos-products-quotes-audit/`, (req, res) => aosProductsQuotesAuditCtrl.addAoProductQuoteAudit(req, res));
router.get(`/api-${sys}/aos-products-quotes-audit/:id`, (req, res) => aosProductsQuotesAuditCtrl.getAAoProductQuoteAudit(req, res));
router.put(`/api-${sys}/aos-products-quotes-audit/:id`, (req, res) => aosProductsQuotesAuditCtrl.updateAoProductQuoteAudit(req, res));
router.delete(`/api-${sys}/aos-products-quotes-audit/:id`, (req, res) => aosProductsQuotesAuditCtrl.deleteAoProductQuoteAudit(req, res));

//</es-section>
module.exports = router;
