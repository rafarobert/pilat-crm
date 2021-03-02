/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:24 GMT-0400 (Bolivia Time)
 * Time: 14:0:24
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:24 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:24
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const aosQuotesCtrl = require("../controllers/aos_quotes.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/aos-quotes/findOneById/:id`, (req, res) => aosQuotesCtrl.findOneById(req, res));

router.get(`/api-${sys}/aos-quotes/findOneByDeleted/:deleted`, (req, res) => aosQuotesCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/aos-quotes/findOneByNumber/:number`, (req, res) => aosQuotesCtrl.findOneByNumber(req, res));

router.get(`/api-${sys}/aos-quotes/findOneByTotalAmt/:totalAmt`, (req, res) => aosQuotesCtrl.findOneByTotalAmt(req, res));

router.get(`/api-${sys}/aos-quotes/findOneByTotalAmtUsdollar/:totalAmtUsdollar`, (req, res) => aosQuotesCtrl.findOneByTotalAmtUsdollar(req, res));

router.get(`/api-${sys}/aos-quotes/findOneBySubtotalAmount/:subtotalAmount`, (req, res) => aosQuotesCtrl.findOneBySubtotalAmount(req, res));

router.get(`/api-${sys}/aos-quotes/findOneBySubtotalAmountUsdollar/:subtotalAmountUsdollar`, (req, res) => aosQuotesCtrl.findOneBySubtotalAmountUsdollar(req, res));

router.get(`/api-${sys}/aos-quotes/findOneByDiscountAmount/:discountAmount`, (req, res) => aosQuotesCtrl.findOneByDiscountAmount(req, res));

router.get(`/api-${sys}/aos-quotes/findOneByDiscountAmountUsdollar/:discountAmountUsdollar`, (req, res) => aosQuotesCtrl.findOneByDiscountAmountUsdollar(req, res));

router.get(`/api-${sys}/aos-quotes/findOneByTaxAmount/:taxAmount`, (req, res) => aosQuotesCtrl.findOneByTaxAmount(req, res));

router.get(`/api-${sys}/aos-quotes/findOneByTaxAmountUsdollar/:taxAmountUsdollar`, (req, res) => aosQuotesCtrl.findOneByTaxAmountUsdollar(req, res));

router.get(`/api-${sys}/aos-quotes/findOneByShippingAmount/:shippingAmount`, (req, res) => aosQuotesCtrl.findOneByShippingAmount(req, res));

router.get(`/api-${sys}/aos-quotes/findOneByShippingAmountUsdollar/:shippingAmountUsdollar`, (req, res) => aosQuotesCtrl.findOneByShippingAmountUsdollar(req, res));

router.get(`/api-${sys}/aos-quotes/findOneByShippingTaxAmt/:shippingTaxAmt`, (req, res) => aosQuotesCtrl.findOneByShippingTaxAmt(req, res));

router.get(`/api-${sys}/aos-quotes/findOneByShippingTaxAmtUsdollar/:shippingTaxAmtUsdollar`, (req, res) => aosQuotesCtrl.findOneByShippingTaxAmtUsdollar(req, res));

router.get(`/api-${sys}/aos-quotes/findOneByTotalAmount/:totalAmount`, (req, res) => aosQuotesCtrl.findOneByTotalAmount(req, res));

router.get(`/api-${sys}/aos-quotes/findOneByTotalAmountUsdollar/:totalAmountUsdollar`, (req, res) => aosQuotesCtrl.findOneByTotalAmountUsdollar(req, res));

router.get(`/api-${sys}/aos-quotes/findOneBySubtotalTaxAmount/:subtotalTaxAmount`, (req, res) => aosQuotesCtrl.findOneBySubtotalTaxAmount(req, res));

router.get(`/api-${sys}/aos-quotes/findOneBySubtotalTaxAmountUsdollar/:subtotalTaxAmountUsdollar`, (req, res) => aosQuotesCtrl.findOneBySubtotalTaxAmountUsdollar(req, res));

router.get(`/api-${sys}/aos-quotes/findOneByName/:name`, (req, res) => aosQuotesCtrl.findOneByName(req, res));

router.get(`/api-${sys}/aos-quotes/findOneByBillingAddressStreet/:billingAddressStreet`, (req, res) => aosQuotesCtrl.findOneByBillingAddressStreet(req, res));

router.get(`/api-${sys}/aos-quotes/findOneByBillingAddressCity/:billingAddressCity`, (req, res) => aosQuotesCtrl.findOneByBillingAddressCity(req, res));

router.get(`/api-${sys}/aos-quotes/findOneByBillingAddressState/:billingAddressState`, (req, res) => aosQuotesCtrl.findOneByBillingAddressState(req, res));

router.get(`/api-${sys}/aos-quotes/findOneByBillingAddressPostalcode/:billingAddressPostalcode`, (req, res) => aosQuotesCtrl.findOneByBillingAddressPostalcode(req, res));

router.get(`/api-${sys}/aos-quotes/findOneByBillingAddressCountry/:billingAddressCountry`, (req, res) => aosQuotesCtrl.findOneByBillingAddressCountry(req, res));

router.get(`/api-${sys}/aos-quotes/findOneByShippingAddressStreet/:shippingAddressStreet`, (req, res) => aosQuotesCtrl.findOneByShippingAddressStreet(req, res));

router.get(`/api-${sys}/aos-quotes/findOneByShippingAddressCity/:shippingAddressCity`, (req, res) => aosQuotesCtrl.findOneByShippingAddressCity(req, res));

router.get(`/api-${sys}/aos-quotes/findOneByShippingAddressState/:shippingAddressState`, (req, res) => aosQuotesCtrl.findOneByShippingAddressState(req, res));

router.get(`/api-${sys}/aos-quotes/findOneByShippingAddressPostalcode/:shippingAddressPostalcode`, (req, res) => aosQuotesCtrl.findOneByShippingAddressPostalcode(req, res));

router.get(`/api-${sys}/aos-quotes/findOneByShippingAddressCountry/:shippingAddressCountry`, (req, res) => aosQuotesCtrl.findOneByShippingAddressCountry(req, res));

router.get(`/api-${sys}/aos-quotes/findOneByShippingTax/:shippingTax`, (req, res) => aosQuotesCtrl.findOneByShippingTax(req, res));

router.get(`/api-${sys}/aos-quotes/findOneByStage/:stage`, (req, res) => aosQuotesCtrl.findOneByStage(req, res));

router.get(`/api-${sys}/aos-quotes/findOneByTerm/:term`, (req, res) => aosQuotesCtrl.findOneByTerm(req, res));

router.get(`/api-${sys}/aos-quotes/findOneByApprovalStatus/:approvalStatus`, (req, res) => aosQuotesCtrl.findOneByApprovalStatus(req, res));

router.get(`/api-${sys}/aos-quotes/findOneByInvoiceStatus/:invoiceStatus`, (req, res) => aosQuotesCtrl.findOneByInvoiceStatus(req, res));

router.get(`/api-${sys}/aos-quotes/findOneByDescription/:description`, (req, res) => aosQuotesCtrl.findOneByDescription(req, res));

router.get(`/api-${sys}/aos-quotes/findOneByApprovalIssue/:approvalIssue`, (req, res) => aosQuotesCtrl.findOneByApprovalIssue(req, res));

router.get(`/api-${sys}/aos-quotes/findOneByTemplateDdownC/:templateDdownC`, (req, res) => aosQuotesCtrl.findOneByTemplateDdownC(req, res));

router.get(`/api-${sys}/aos-quotes/findOneByTermsC/:termsC`, (req, res) => aosQuotesCtrl.findOneByTermsC(req, res));

router.get(`/api-${sys}/aos-quotes/findOneByDateEntered/:dateEntered`, (req, res) => aosQuotesCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/aos-quotes/findOneByDateModified/:dateModified`, (req, res) => aosQuotesCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/aos-quotes/findOneByExpiration/:expiration`, (req, res) => aosQuotesCtrl.findOneByExpiration(req, res));

router.get(`/api-${sys}/aos-quotes/findOneByModifiedUserId/:modifiedUserId`, (req, res) => aosQuotesCtrl.findOneByModifiedUserId(req, res));

router.get(`/api-${sys}/aos-quotes/findOneByCreatedBy/:createdBy`, (req, res) => aosQuotesCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/aos-quotes/findOneByAssignedUserId/:assignedUserId`, (req, res) => aosQuotesCtrl.findOneByAssignedUserId(req, res));

router.get(`/api-${sys}/aos-quotes/findOneByBillingAccountId/:billingAccountId`, (req, res) => aosQuotesCtrl.findOneByBillingAccountId(req, res));

router.get(`/api-${sys}/aos-quotes/findOneByBillingContactId/:billingContactId`, (req, res) => aosQuotesCtrl.findOneByBillingContactId(req, res));

router.get(`/api-${sys}/aos-quotes/findOneByOpportunityId/:opportunityId`, (req, res) => aosQuotesCtrl.findOneByOpportunityId(req, res));

router.get(`/api-${sys}/aos-quotes/findOneByCurrencyId/:currencyId`, (req, res) => aosQuotesCtrl.findOneByCurrencyId(req, res));



router.post(`/api-${sys}/aos-quotes/updateAoQuoteById`, (req, res) => aosQuotesCtrl.updateAoQuoteById(req, res));

router.post(`/api-${sys}/aos-quotes/updateAoQuoteByDeleted`, (req, res) => aosQuotesCtrl.updateAoQuoteByDeleted(req, res));

router.post(`/api-${sys}/aos-quotes/updateAoQuoteByNumber`, (req, res) => aosQuotesCtrl.updateAoQuoteByNumber(req, res));

router.post(`/api-${sys}/aos-quotes/updateAoQuoteByTotalAmt`, (req, res) => aosQuotesCtrl.updateAoQuoteByTotalAmt(req, res));

router.post(`/api-${sys}/aos-quotes/updateAoQuoteByTotalAmtUsdollar`, (req, res) => aosQuotesCtrl.updateAoQuoteByTotalAmtUsdollar(req, res));

router.post(`/api-${sys}/aos-quotes/updateAoQuoteBySubtotalAmount`, (req, res) => aosQuotesCtrl.updateAoQuoteBySubtotalAmount(req, res));

router.post(`/api-${sys}/aos-quotes/updateAoQuoteBySubtotalAmountUsdollar`, (req, res) => aosQuotesCtrl.updateAoQuoteBySubtotalAmountUsdollar(req, res));

router.post(`/api-${sys}/aos-quotes/updateAoQuoteByDiscountAmount`, (req, res) => aosQuotesCtrl.updateAoQuoteByDiscountAmount(req, res));

router.post(`/api-${sys}/aos-quotes/updateAoQuoteByDiscountAmountUsdollar`, (req, res) => aosQuotesCtrl.updateAoQuoteByDiscountAmountUsdollar(req, res));

router.post(`/api-${sys}/aos-quotes/updateAoQuoteByTaxAmount`, (req, res) => aosQuotesCtrl.updateAoQuoteByTaxAmount(req, res));

router.post(`/api-${sys}/aos-quotes/updateAoQuoteByTaxAmountUsdollar`, (req, res) => aosQuotesCtrl.updateAoQuoteByTaxAmountUsdollar(req, res));

router.post(`/api-${sys}/aos-quotes/updateAoQuoteByShippingAmount`, (req, res) => aosQuotesCtrl.updateAoQuoteByShippingAmount(req, res));

router.post(`/api-${sys}/aos-quotes/updateAoQuoteByShippingAmountUsdollar`, (req, res) => aosQuotesCtrl.updateAoQuoteByShippingAmountUsdollar(req, res));

router.post(`/api-${sys}/aos-quotes/updateAoQuoteByShippingTaxAmt`, (req, res) => aosQuotesCtrl.updateAoQuoteByShippingTaxAmt(req, res));

router.post(`/api-${sys}/aos-quotes/updateAoQuoteByShippingTaxAmtUsdollar`, (req, res) => aosQuotesCtrl.updateAoQuoteByShippingTaxAmtUsdollar(req, res));

router.post(`/api-${sys}/aos-quotes/updateAoQuoteByTotalAmount`, (req, res) => aosQuotesCtrl.updateAoQuoteByTotalAmount(req, res));

router.post(`/api-${sys}/aos-quotes/updateAoQuoteByTotalAmountUsdollar`, (req, res) => aosQuotesCtrl.updateAoQuoteByTotalAmountUsdollar(req, res));

router.post(`/api-${sys}/aos-quotes/updateAoQuoteBySubtotalTaxAmount`, (req, res) => aosQuotesCtrl.updateAoQuoteBySubtotalTaxAmount(req, res));

router.post(`/api-${sys}/aos-quotes/updateAoQuoteBySubtotalTaxAmountUsdollar`, (req, res) => aosQuotesCtrl.updateAoQuoteBySubtotalTaxAmountUsdollar(req, res));

router.post(`/api-${sys}/aos-quotes/updateAoQuoteByName`, (req, res) => aosQuotesCtrl.updateAoQuoteByName(req, res));

router.post(`/api-${sys}/aos-quotes/updateAoQuoteByBillingAddressStreet`, (req, res) => aosQuotesCtrl.updateAoQuoteByBillingAddressStreet(req, res));

router.post(`/api-${sys}/aos-quotes/updateAoQuoteByBillingAddressCity`, (req, res) => aosQuotesCtrl.updateAoQuoteByBillingAddressCity(req, res));

router.post(`/api-${sys}/aos-quotes/updateAoQuoteByBillingAddressState`, (req, res) => aosQuotesCtrl.updateAoQuoteByBillingAddressState(req, res));

router.post(`/api-${sys}/aos-quotes/updateAoQuoteByBillingAddressPostalcode`, (req, res) => aosQuotesCtrl.updateAoQuoteByBillingAddressPostalcode(req, res));

router.post(`/api-${sys}/aos-quotes/updateAoQuoteByBillingAddressCountry`, (req, res) => aosQuotesCtrl.updateAoQuoteByBillingAddressCountry(req, res));

router.post(`/api-${sys}/aos-quotes/updateAoQuoteByShippingAddressStreet`, (req, res) => aosQuotesCtrl.updateAoQuoteByShippingAddressStreet(req, res));

router.post(`/api-${sys}/aos-quotes/updateAoQuoteByShippingAddressCity`, (req, res) => aosQuotesCtrl.updateAoQuoteByShippingAddressCity(req, res));

router.post(`/api-${sys}/aos-quotes/updateAoQuoteByShippingAddressState`, (req, res) => aosQuotesCtrl.updateAoQuoteByShippingAddressState(req, res));

router.post(`/api-${sys}/aos-quotes/updateAoQuoteByShippingAddressPostalcode`, (req, res) => aosQuotesCtrl.updateAoQuoteByShippingAddressPostalcode(req, res));

router.post(`/api-${sys}/aos-quotes/updateAoQuoteByShippingAddressCountry`, (req, res) => aosQuotesCtrl.updateAoQuoteByShippingAddressCountry(req, res));

router.post(`/api-${sys}/aos-quotes/updateAoQuoteByShippingTax`, (req, res) => aosQuotesCtrl.updateAoQuoteByShippingTax(req, res));

router.post(`/api-${sys}/aos-quotes/updateAoQuoteByStage`, (req, res) => aosQuotesCtrl.updateAoQuoteByStage(req, res));

router.post(`/api-${sys}/aos-quotes/updateAoQuoteByTerm`, (req, res) => aosQuotesCtrl.updateAoQuoteByTerm(req, res));

router.post(`/api-${sys}/aos-quotes/updateAoQuoteByApprovalStatus`, (req, res) => aosQuotesCtrl.updateAoQuoteByApprovalStatus(req, res));

router.post(`/api-${sys}/aos-quotes/updateAoQuoteByInvoiceStatus`, (req, res) => aosQuotesCtrl.updateAoQuoteByInvoiceStatus(req, res));

router.post(`/api-${sys}/aos-quotes/updateAoQuoteByDescription`, (req, res) => aosQuotesCtrl.updateAoQuoteByDescription(req, res));

router.post(`/api-${sys}/aos-quotes/updateAoQuoteByApprovalIssue`, (req, res) => aosQuotesCtrl.updateAoQuoteByApprovalIssue(req, res));

router.post(`/api-${sys}/aos-quotes/updateAoQuoteByTemplateDdownC`, (req, res) => aosQuotesCtrl.updateAoQuoteByTemplateDdownC(req, res));

router.post(`/api-${sys}/aos-quotes/updateAoQuoteByTermsC`, (req, res) => aosQuotesCtrl.updateAoQuoteByTermsC(req, res));

router.post(`/api-${sys}/aos-quotes/updateAoQuoteByDateEntered`, (req, res) => aosQuotesCtrl.updateAoQuoteByDateEntered(req, res));

router.post(`/api-${sys}/aos-quotes/updateAoQuoteByDateModified`, (req, res) => aosQuotesCtrl.updateAoQuoteByDateModified(req, res));

router.post(`/api-${sys}/aos-quotes/updateAoQuoteByExpiration`, (req, res) => aosQuotesCtrl.updateAoQuoteByExpiration(req, res));

router.post(`/api-${sys}/aos-quotes/updateAoQuoteByModifiedUserId`, (req, res) => aosQuotesCtrl.updateAoQuoteByModifiedUserId(req, res));

router.post(`/api-${sys}/aos-quotes/updateAoQuoteByCreatedBy`, (req, res) => aosQuotesCtrl.updateAoQuoteByCreatedBy(req, res));

router.post(`/api-${sys}/aos-quotes/updateAoQuoteByAssignedUserId`, (req, res) => aosQuotesCtrl.updateAoQuoteByAssignedUserId(req, res));

router.post(`/api-${sys}/aos-quotes/updateAoQuoteByBillingAccountId`, (req, res) => aosQuotesCtrl.updateAoQuoteByBillingAccountId(req, res));

router.post(`/api-${sys}/aos-quotes/updateAoQuoteByBillingContactId`, (req, res) => aosQuotesCtrl.updateAoQuoteByBillingContactId(req, res));

router.post(`/api-${sys}/aos-quotes/updateAoQuoteByOpportunityId`, (req, res) => aosQuotesCtrl.updateAoQuoteByOpportunityId(req, res));

router.post(`/api-${sys}/aos-quotes/updateAoQuoteByCurrencyId`, (req, res) => aosQuotesCtrl.updateAoQuoteByCurrencyId(req, res));





router.get(`/api-${sys}/aos-quotes/`, (req, res) => aosQuotesCtrl.getAllAosQuotes(req, res));
router.post(`/api-${sys}/aos-quotes/`, (req, res) => aosQuotesCtrl.addAoQuote(req, res));
router.get(`/api-${sys}/aos-quotes/:id`, (req, res) => aosQuotesCtrl.getAAoQuote(req, res));
router.put(`/api-${sys}/aos-quotes/:id`, (req, res) => aosQuotesCtrl.updateAoQuote(req, res));
router.delete(`/api-${sys}/aos-quotes/:id`, (req, res) => aosQuotesCtrl.deleteAoQuote(req, res));

//</es-section>
module.exports = router;
