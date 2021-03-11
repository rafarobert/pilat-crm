/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:17 GMT-0400 (Bolivia Time)
 * Time: 14:56:17
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:17 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:17
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const aosProductsQuotesCtrl = require("../controllers/aos_products_quotes.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/aos-products-quotes/findOneById/:id`, (req, res) => aosProductsQuotesCtrl.findOneById(req, res));

router.get(`/api-${sys}/aos-products-quotes/findOneByDeleted/:deleted`, (req, res) => aosProductsQuotesCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/aos-products-quotes/findOneByNumber/:number`, (req, res) => aosProductsQuotesCtrl.findOneByNumber(req, res));

router.get(`/api-${sys}/aos-products-quotes/findOneByProductQty/:productQty`, (req, res) => aosProductsQuotesCtrl.findOneByProductQty(req, res));

router.get(`/api-${sys}/aos-products-quotes/findOneByProductCostPrice/:productCostPrice`, (req, res) => aosProductsQuotesCtrl.findOneByProductCostPrice(req, res));

router.get(`/api-${sys}/aos-products-quotes/findOneByProductCostPriceUsdollar/:productCostPriceUsdollar`, (req, res) => aosProductsQuotesCtrl.findOneByProductCostPriceUsdollar(req, res));

router.get(`/api-${sys}/aos-products-quotes/findOneByProductListPrice/:productListPrice`, (req, res) => aosProductsQuotesCtrl.findOneByProductListPrice(req, res));

router.get(`/api-${sys}/aos-products-quotes/findOneByProductListPriceUsdollar/:productListPriceUsdollar`, (req, res) => aosProductsQuotesCtrl.findOneByProductListPriceUsdollar(req, res));

router.get(`/api-${sys}/aos-products-quotes/findOneByProductDiscount/:productDiscount`, (req, res) => aosProductsQuotesCtrl.findOneByProductDiscount(req, res));

router.get(`/api-${sys}/aos-products-quotes/findOneByProductDiscountUsdollar/:productDiscountUsdollar`, (req, res) => aosProductsQuotesCtrl.findOneByProductDiscountUsdollar(req, res));

router.get(`/api-${sys}/aos-products-quotes/findOneByProductDiscountAmount/:productDiscountAmount`, (req, res) => aosProductsQuotesCtrl.findOneByProductDiscountAmount(req, res));

router.get(`/api-${sys}/aos-products-quotes/findOneByProductDiscountAmountUsdollar/:productDiscountAmountUsdollar`, (req, res) => aosProductsQuotesCtrl.findOneByProductDiscountAmountUsdollar(req, res));

router.get(`/api-${sys}/aos-products-quotes/findOneByProductUnitPrice/:productUnitPrice`, (req, res) => aosProductsQuotesCtrl.findOneByProductUnitPrice(req, res));

router.get(`/api-${sys}/aos-products-quotes/findOneByProductUnitPriceUsdollar/:productUnitPriceUsdollar`, (req, res) => aosProductsQuotesCtrl.findOneByProductUnitPriceUsdollar(req, res));

router.get(`/api-${sys}/aos-products-quotes/findOneByVatAmt/:vatAmt`, (req, res) => aosProductsQuotesCtrl.findOneByVatAmt(req, res));

router.get(`/api-${sys}/aos-products-quotes/findOneByVatAmtUsdollar/:vatAmtUsdollar`, (req, res) => aosProductsQuotesCtrl.findOneByVatAmtUsdollar(req, res));

router.get(`/api-${sys}/aos-products-quotes/findOneByProductTotalPrice/:productTotalPrice`, (req, res) => aosProductsQuotesCtrl.findOneByProductTotalPrice(req, res));

router.get(`/api-${sys}/aos-products-quotes/findOneByProductTotalPriceUsdollar/:productTotalPriceUsdollar`, (req, res) => aosProductsQuotesCtrl.findOneByProductTotalPriceUsdollar(req, res));

router.get(`/api-${sys}/aos-products-quotes/findOneByPartNumber/:partNumber`, (req, res) => aosProductsQuotesCtrl.findOneByPartNumber(req, res));

router.get(`/api-${sys}/aos-products-quotes/findOneByDiscount/:discount`, (req, res) => aosProductsQuotesCtrl.findOneByDiscount(req, res));

router.get(`/api-${sys}/aos-products-quotes/findOneByVat/:vat`, (req, res) => aosProductsQuotesCtrl.findOneByVat(req, res));

router.get(`/api-${sys}/aos-products-quotes/findOneByParentType/:parentType`, (req, res) => aosProductsQuotesCtrl.findOneByParentType(req, res));

router.get(`/api-${sys}/aos-products-quotes/findOneByName/:name`, (req, res) => aosProductsQuotesCtrl.findOneByName(req, res));

router.get(`/api-${sys}/aos-products-quotes/findOneByDescription/:description`, (req, res) => aosProductsQuotesCtrl.findOneByDescription(req, res));

router.get(`/api-${sys}/aos-products-quotes/findOneByItemDescription/:itemDescription`, (req, res) => aosProductsQuotesCtrl.findOneByItemDescription(req, res));

router.get(`/api-${sys}/aos-products-quotes/findOneByDateEntered/:dateEntered`, (req, res) => aosProductsQuotesCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/aos-products-quotes/findOneByDateModified/:dateModified`, (req, res) => aosProductsQuotesCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/aos-products-quotes/findOneByModifiedUserId/:modifiedUserId`, (req, res) => aosProductsQuotesCtrl.findOneByModifiedUserId(req, res));

router.get(`/api-${sys}/aos-products-quotes/findOneByCreatedBy/:createdBy`, (req, res) => aosProductsQuotesCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/aos-products-quotes/findOneByAssignedUserId/:assignedUserId`, (req, res) => aosProductsQuotesCtrl.findOneByAssignedUserId(req, res));

router.get(`/api-${sys}/aos-products-quotes/findOneByCurrencyId/:currencyId`, (req, res) => aosProductsQuotesCtrl.findOneByCurrencyId(req, res));

router.get(`/api-${sys}/aos-products-quotes/findOneByParentId/:parentId`, (req, res) => aosProductsQuotesCtrl.findOneByParentId(req, res));

router.get(`/api-${sys}/aos-products-quotes/findOneByProductId/:productId`, (req, res) => aosProductsQuotesCtrl.findOneByProductId(req, res));

router.get(`/api-${sys}/aos-products-quotes/findOneByGroupId/:groupId`, (req, res) => aosProductsQuotesCtrl.findOneByGroupId(req, res));



router.post(`/api-${sys}/aos-products-quotes/updateAoProductQuoteById`, (req, res) => aosProductsQuotesCtrl.updateAoProductQuoteById(req, res));

router.post(`/api-${sys}/aos-products-quotes/updateAoProductQuoteByDeleted`, (req, res) => aosProductsQuotesCtrl.updateAoProductQuoteByDeleted(req, res));

router.post(`/api-${sys}/aos-products-quotes/updateAoProductQuoteByNumber`, (req, res) => aosProductsQuotesCtrl.updateAoProductQuoteByNumber(req, res));

router.post(`/api-${sys}/aos-products-quotes/updateAoProductQuoteByProductQty`, (req, res) => aosProductsQuotesCtrl.updateAoProductQuoteByProductQty(req, res));

router.post(`/api-${sys}/aos-products-quotes/updateAoProductQuoteByProductCostPrice`, (req, res) => aosProductsQuotesCtrl.updateAoProductQuoteByProductCostPrice(req, res));

router.post(`/api-${sys}/aos-products-quotes/updateAoProductQuoteByProductCostPriceUsdollar`, (req, res) => aosProductsQuotesCtrl.updateAoProductQuoteByProductCostPriceUsdollar(req, res));

router.post(`/api-${sys}/aos-products-quotes/updateAoProductQuoteByProductListPrice`, (req, res) => aosProductsQuotesCtrl.updateAoProductQuoteByProductListPrice(req, res));

router.post(`/api-${sys}/aos-products-quotes/updateAoProductQuoteByProductListPriceUsdollar`, (req, res) => aosProductsQuotesCtrl.updateAoProductQuoteByProductListPriceUsdollar(req, res));

router.post(`/api-${sys}/aos-products-quotes/updateAoProductQuoteByProductDiscount`, (req, res) => aosProductsQuotesCtrl.updateAoProductQuoteByProductDiscount(req, res));

router.post(`/api-${sys}/aos-products-quotes/updateAoProductQuoteByProductDiscountUsdollar`, (req, res) => aosProductsQuotesCtrl.updateAoProductQuoteByProductDiscountUsdollar(req, res));

router.post(`/api-${sys}/aos-products-quotes/updateAoProductQuoteByProductDiscountAmount`, (req, res) => aosProductsQuotesCtrl.updateAoProductQuoteByProductDiscountAmount(req, res));

router.post(`/api-${sys}/aos-products-quotes/updateAoProductQuoteByProductDiscountAmountUsdollar`, (req, res) => aosProductsQuotesCtrl.updateAoProductQuoteByProductDiscountAmountUsdollar(req, res));

router.post(`/api-${sys}/aos-products-quotes/updateAoProductQuoteByProductUnitPrice`, (req, res) => aosProductsQuotesCtrl.updateAoProductQuoteByProductUnitPrice(req, res));

router.post(`/api-${sys}/aos-products-quotes/updateAoProductQuoteByProductUnitPriceUsdollar`, (req, res) => aosProductsQuotesCtrl.updateAoProductQuoteByProductUnitPriceUsdollar(req, res));

router.post(`/api-${sys}/aos-products-quotes/updateAoProductQuoteByVatAmt`, (req, res) => aosProductsQuotesCtrl.updateAoProductQuoteByVatAmt(req, res));

router.post(`/api-${sys}/aos-products-quotes/updateAoProductQuoteByVatAmtUsdollar`, (req, res) => aosProductsQuotesCtrl.updateAoProductQuoteByVatAmtUsdollar(req, res));

router.post(`/api-${sys}/aos-products-quotes/updateAoProductQuoteByProductTotalPrice`, (req, res) => aosProductsQuotesCtrl.updateAoProductQuoteByProductTotalPrice(req, res));

router.post(`/api-${sys}/aos-products-quotes/updateAoProductQuoteByProductTotalPriceUsdollar`, (req, res) => aosProductsQuotesCtrl.updateAoProductQuoteByProductTotalPriceUsdollar(req, res));

router.post(`/api-${sys}/aos-products-quotes/updateAoProductQuoteByPartNumber`, (req, res) => aosProductsQuotesCtrl.updateAoProductQuoteByPartNumber(req, res));

router.post(`/api-${sys}/aos-products-quotes/updateAoProductQuoteByDiscount`, (req, res) => aosProductsQuotesCtrl.updateAoProductQuoteByDiscount(req, res));

router.post(`/api-${sys}/aos-products-quotes/updateAoProductQuoteByVat`, (req, res) => aosProductsQuotesCtrl.updateAoProductQuoteByVat(req, res));

router.post(`/api-${sys}/aos-products-quotes/updateAoProductQuoteByParentType`, (req, res) => aosProductsQuotesCtrl.updateAoProductQuoteByParentType(req, res));

router.post(`/api-${sys}/aos-products-quotes/updateAoProductQuoteByName`, (req, res) => aosProductsQuotesCtrl.updateAoProductQuoteByName(req, res));

router.post(`/api-${sys}/aos-products-quotes/updateAoProductQuoteByDescription`, (req, res) => aosProductsQuotesCtrl.updateAoProductQuoteByDescription(req, res));

router.post(`/api-${sys}/aos-products-quotes/updateAoProductQuoteByItemDescription`, (req, res) => aosProductsQuotesCtrl.updateAoProductQuoteByItemDescription(req, res));

router.post(`/api-${sys}/aos-products-quotes/updateAoProductQuoteByDateEntered`, (req, res) => aosProductsQuotesCtrl.updateAoProductQuoteByDateEntered(req, res));

router.post(`/api-${sys}/aos-products-quotes/updateAoProductQuoteByDateModified`, (req, res) => aosProductsQuotesCtrl.updateAoProductQuoteByDateModified(req, res));

router.post(`/api-${sys}/aos-products-quotes/updateAoProductQuoteByModifiedUserId`, (req, res) => aosProductsQuotesCtrl.updateAoProductQuoteByModifiedUserId(req, res));

router.post(`/api-${sys}/aos-products-quotes/updateAoProductQuoteByCreatedBy`, (req, res) => aosProductsQuotesCtrl.updateAoProductQuoteByCreatedBy(req, res));

router.post(`/api-${sys}/aos-products-quotes/updateAoProductQuoteByAssignedUserId`, (req, res) => aosProductsQuotesCtrl.updateAoProductQuoteByAssignedUserId(req, res));

router.post(`/api-${sys}/aos-products-quotes/updateAoProductQuoteByCurrencyId`, (req, res) => aosProductsQuotesCtrl.updateAoProductQuoteByCurrencyId(req, res));

router.post(`/api-${sys}/aos-products-quotes/updateAoProductQuoteByParentId`, (req, res) => aosProductsQuotesCtrl.updateAoProductQuoteByParentId(req, res));

router.post(`/api-${sys}/aos-products-quotes/updateAoProductQuoteByProductId`, (req, res) => aosProductsQuotesCtrl.updateAoProductQuoteByProductId(req, res));

router.post(`/api-${sys}/aos-products-quotes/updateAoProductQuoteByGroupId`, (req, res) => aosProductsQuotesCtrl.updateAoProductQuoteByGroupId(req, res));





router.get(`/api-${sys}/aos-products-quotes/`, (req, res) => aosProductsQuotesCtrl.getAllAosProductsQuotes(req, res));
router.post(`/api-${sys}/datatable/aos-products-quotes/`, (req, res) => aosProductsQuotesCtrl.getAllAosProductsQuotes(req, res));
router.post(`/api-${sys}/aos-products-quotes/`, (req, res) => aosProductsQuotesCtrl.addAoProductQuote(req, res));
router.get(`/api-${sys}/aos-products-quotes/:id`, (req, res) => aosProductsQuotesCtrl.getAAoProductQuote(req, res));
router.put(`/api-${sys}/aos-products-quotes/:id`, (req, res) => aosProductsQuotesCtrl.updateAoProductQuote(req, res));
router.delete(`/api-${sys}/aos-products-quotes/:id`, (req, res) => aosProductsQuotesCtrl.deleteAoProductQuote(req, res));

//</es-section>
module.exports = router;
