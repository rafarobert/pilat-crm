/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:16 GMT-0400 (Bolivia Time)
 * Time: 14:0:16
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:16 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:16
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const aosInvoicesCtrl = require("../controllers/aos_invoices.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/aos-invoices/findOneById/:id`, (req, res) => aosInvoicesCtrl.findOneById(req, res));

router.get(`/api-${sys}/aos-invoices/findOneByDeleted/:deleted`, (req, res) => aosInvoicesCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/aos-invoices/findOneByNumber/:number`, (req, res) => aosInvoicesCtrl.findOneByNumber(req, res));

router.get(`/api-${sys}/aos-invoices/findOneByQuoteNumber/:quoteNumber`, (req, res) => aosInvoicesCtrl.findOneByQuoteNumber(req, res));

router.get(`/api-${sys}/aos-invoices/findOneByTotalAmt/:totalAmt`, (req, res) => aosInvoicesCtrl.findOneByTotalAmt(req, res));

router.get(`/api-${sys}/aos-invoices/findOneByTotalAmtUsdollar/:totalAmtUsdollar`, (req, res) => aosInvoicesCtrl.findOneByTotalAmtUsdollar(req, res));

router.get(`/api-${sys}/aos-invoices/findOneBySubtotalAmount/:subtotalAmount`, (req, res) => aosInvoicesCtrl.findOneBySubtotalAmount(req, res));

router.get(`/api-${sys}/aos-invoices/findOneBySubtotalAmountUsdollar/:subtotalAmountUsdollar`, (req, res) => aosInvoicesCtrl.findOneBySubtotalAmountUsdollar(req, res));

router.get(`/api-${sys}/aos-invoices/findOneByDiscountAmount/:discountAmount`, (req, res) => aosInvoicesCtrl.findOneByDiscountAmount(req, res));

router.get(`/api-${sys}/aos-invoices/findOneByDiscountAmountUsdollar/:discountAmountUsdollar`, (req, res) => aosInvoicesCtrl.findOneByDiscountAmountUsdollar(req, res));

router.get(`/api-${sys}/aos-invoices/findOneByTaxAmount/:taxAmount`, (req, res) => aosInvoicesCtrl.findOneByTaxAmount(req, res));

router.get(`/api-${sys}/aos-invoices/findOneByTaxAmountUsdollar/:taxAmountUsdollar`, (req, res) => aosInvoicesCtrl.findOneByTaxAmountUsdollar(req, res));

router.get(`/api-${sys}/aos-invoices/findOneByShippingAmount/:shippingAmount`, (req, res) => aosInvoicesCtrl.findOneByShippingAmount(req, res));

router.get(`/api-${sys}/aos-invoices/findOneByShippingAmountUsdollar/:shippingAmountUsdollar`, (req, res) => aosInvoicesCtrl.findOneByShippingAmountUsdollar(req, res));

router.get(`/api-${sys}/aos-invoices/findOneByShippingTaxAmt/:shippingTaxAmt`, (req, res) => aosInvoicesCtrl.findOneByShippingTaxAmt(req, res));

router.get(`/api-${sys}/aos-invoices/findOneByShippingTaxAmtUsdollar/:shippingTaxAmtUsdollar`, (req, res) => aosInvoicesCtrl.findOneByShippingTaxAmtUsdollar(req, res));

router.get(`/api-${sys}/aos-invoices/findOneByTotalAmount/:totalAmount`, (req, res) => aosInvoicesCtrl.findOneByTotalAmount(req, res));

router.get(`/api-${sys}/aos-invoices/findOneByTotalAmountUsdollar/:totalAmountUsdollar`, (req, res) => aosInvoicesCtrl.findOneByTotalAmountUsdollar(req, res));

router.get(`/api-${sys}/aos-invoices/findOneBySubtotalTaxAmount/:subtotalTaxAmount`, (req, res) => aosInvoicesCtrl.findOneBySubtotalTaxAmount(req, res));

router.get(`/api-${sys}/aos-invoices/findOneBySubtotalTaxAmountUsdollar/:subtotalTaxAmountUsdollar`, (req, res) => aosInvoicesCtrl.findOneBySubtotalTaxAmountUsdollar(req, res));

router.get(`/api-${sys}/aos-invoices/findOneByName/:name`, (req, res) => aosInvoicesCtrl.findOneByName(req, res));

router.get(`/api-${sys}/aos-invoices/findOneByBillingAddressStreet/:billingAddressStreet`, (req, res) => aosInvoicesCtrl.findOneByBillingAddressStreet(req, res));

router.get(`/api-${sys}/aos-invoices/findOneByBillingAddressCity/:billingAddressCity`, (req, res) => aosInvoicesCtrl.findOneByBillingAddressCity(req, res));

router.get(`/api-${sys}/aos-invoices/findOneByBillingAddressState/:billingAddressState`, (req, res) => aosInvoicesCtrl.findOneByBillingAddressState(req, res));

router.get(`/api-${sys}/aos-invoices/findOneByBillingAddressPostalcode/:billingAddressPostalcode`, (req, res) => aosInvoicesCtrl.findOneByBillingAddressPostalcode(req, res));

router.get(`/api-${sys}/aos-invoices/findOneByBillingAddressCountry/:billingAddressCountry`, (req, res) => aosInvoicesCtrl.findOneByBillingAddressCountry(req, res));

router.get(`/api-${sys}/aos-invoices/findOneByShippingAddressStreet/:shippingAddressStreet`, (req, res) => aosInvoicesCtrl.findOneByShippingAddressStreet(req, res));

router.get(`/api-${sys}/aos-invoices/findOneByShippingAddressCity/:shippingAddressCity`, (req, res) => aosInvoicesCtrl.findOneByShippingAddressCity(req, res));

router.get(`/api-${sys}/aos-invoices/findOneByShippingAddressState/:shippingAddressState`, (req, res) => aosInvoicesCtrl.findOneByShippingAddressState(req, res));

router.get(`/api-${sys}/aos-invoices/findOneByShippingAddressPostalcode/:shippingAddressPostalcode`, (req, res) => aosInvoicesCtrl.findOneByShippingAddressPostalcode(req, res));

router.get(`/api-${sys}/aos-invoices/findOneByShippingAddressCountry/:shippingAddressCountry`, (req, res) => aosInvoicesCtrl.findOneByShippingAddressCountry(req, res));

router.get(`/api-${sys}/aos-invoices/findOneByShippingTax/:shippingTax`, (req, res) => aosInvoicesCtrl.findOneByShippingTax(req, res));

router.get(`/api-${sys}/aos-invoices/findOneByStatus/:status`, (req, res) => aosInvoicesCtrl.findOneByStatus(req, res));

router.get(`/api-${sys}/aos-invoices/findOneByDescription/:description`, (req, res) => aosInvoicesCtrl.findOneByDescription(req, res));

router.get(`/api-${sys}/aos-invoices/findOneByTemplateDdownC/:templateDdownC`, (req, res) => aosInvoicesCtrl.findOneByTemplateDdownC(req, res));

router.get(`/api-${sys}/aos-invoices/findOneByDateEntered/:dateEntered`, (req, res) => aosInvoicesCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/aos-invoices/findOneByDateModified/:dateModified`, (req, res) => aosInvoicesCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/aos-invoices/findOneByQuoteDate/:quoteDate`, (req, res) => aosInvoicesCtrl.findOneByQuoteDate(req, res));

router.get(`/api-${sys}/aos-invoices/findOneByInvoiceDate/:invoiceDate`, (req, res) => aosInvoicesCtrl.findOneByInvoiceDate(req, res));

router.get(`/api-${sys}/aos-invoices/findOneByDueDate/:dueDate`, (req, res) => aosInvoicesCtrl.findOneByDueDate(req, res));

router.get(`/api-${sys}/aos-invoices/findOneByModifiedUserId/:modifiedUserId`, (req, res) => aosInvoicesCtrl.findOneByModifiedUserId(req, res));

router.get(`/api-${sys}/aos-invoices/findOneByCreatedBy/:createdBy`, (req, res) => aosInvoicesCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/aos-invoices/findOneByAssignedUserId/:assignedUserId`, (req, res) => aosInvoicesCtrl.findOneByAssignedUserId(req, res));

router.get(`/api-${sys}/aos-invoices/findOneByBillingAccountId/:billingAccountId`, (req, res) => aosInvoicesCtrl.findOneByBillingAccountId(req, res));

router.get(`/api-${sys}/aos-invoices/findOneByBillingContactId/:billingContactId`, (req, res) => aosInvoicesCtrl.findOneByBillingContactId(req, res));

router.get(`/api-${sys}/aos-invoices/findOneByCurrencyId/:currencyId`, (req, res) => aosInvoicesCtrl.findOneByCurrencyId(req, res));



router.post(`/api-${sys}/aos-invoices/updateAoInvoiceById`, (req, res) => aosInvoicesCtrl.updateAoInvoiceById(req, res));

router.post(`/api-${sys}/aos-invoices/updateAoInvoiceByDeleted`, (req, res) => aosInvoicesCtrl.updateAoInvoiceByDeleted(req, res));

router.post(`/api-${sys}/aos-invoices/updateAoInvoiceByNumber`, (req, res) => aosInvoicesCtrl.updateAoInvoiceByNumber(req, res));

router.post(`/api-${sys}/aos-invoices/updateAoInvoiceByQuoteNumber`, (req, res) => aosInvoicesCtrl.updateAoInvoiceByQuoteNumber(req, res));

router.post(`/api-${sys}/aos-invoices/updateAoInvoiceByTotalAmt`, (req, res) => aosInvoicesCtrl.updateAoInvoiceByTotalAmt(req, res));

router.post(`/api-${sys}/aos-invoices/updateAoInvoiceByTotalAmtUsdollar`, (req, res) => aosInvoicesCtrl.updateAoInvoiceByTotalAmtUsdollar(req, res));

router.post(`/api-${sys}/aos-invoices/updateAoInvoiceBySubtotalAmount`, (req, res) => aosInvoicesCtrl.updateAoInvoiceBySubtotalAmount(req, res));

router.post(`/api-${sys}/aos-invoices/updateAoInvoiceBySubtotalAmountUsdollar`, (req, res) => aosInvoicesCtrl.updateAoInvoiceBySubtotalAmountUsdollar(req, res));

router.post(`/api-${sys}/aos-invoices/updateAoInvoiceByDiscountAmount`, (req, res) => aosInvoicesCtrl.updateAoInvoiceByDiscountAmount(req, res));

router.post(`/api-${sys}/aos-invoices/updateAoInvoiceByDiscountAmountUsdollar`, (req, res) => aosInvoicesCtrl.updateAoInvoiceByDiscountAmountUsdollar(req, res));

router.post(`/api-${sys}/aos-invoices/updateAoInvoiceByTaxAmount`, (req, res) => aosInvoicesCtrl.updateAoInvoiceByTaxAmount(req, res));

router.post(`/api-${sys}/aos-invoices/updateAoInvoiceByTaxAmountUsdollar`, (req, res) => aosInvoicesCtrl.updateAoInvoiceByTaxAmountUsdollar(req, res));

router.post(`/api-${sys}/aos-invoices/updateAoInvoiceByShippingAmount`, (req, res) => aosInvoicesCtrl.updateAoInvoiceByShippingAmount(req, res));

router.post(`/api-${sys}/aos-invoices/updateAoInvoiceByShippingAmountUsdollar`, (req, res) => aosInvoicesCtrl.updateAoInvoiceByShippingAmountUsdollar(req, res));

router.post(`/api-${sys}/aos-invoices/updateAoInvoiceByShippingTaxAmt`, (req, res) => aosInvoicesCtrl.updateAoInvoiceByShippingTaxAmt(req, res));

router.post(`/api-${sys}/aos-invoices/updateAoInvoiceByShippingTaxAmtUsdollar`, (req, res) => aosInvoicesCtrl.updateAoInvoiceByShippingTaxAmtUsdollar(req, res));

router.post(`/api-${sys}/aos-invoices/updateAoInvoiceByTotalAmount`, (req, res) => aosInvoicesCtrl.updateAoInvoiceByTotalAmount(req, res));

router.post(`/api-${sys}/aos-invoices/updateAoInvoiceByTotalAmountUsdollar`, (req, res) => aosInvoicesCtrl.updateAoInvoiceByTotalAmountUsdollar(req, res));

router.post(`/api-${sys}/aos-invoices/updateAoInvoiceBySubtotalTaxAmount`, (req, res) => aosInvoicesCtrl.updateAoInvoiceBySubtotalTaxAmount(req, res));

router.post(`/api-${sys}/aos-invoices/updateAoInvoiceBySubtotalTaxAmountUsdollar`, (req, res) => aosInvoicesCtrl.updateAoInvoiceBySubtotalTaxAmountUsdollar(req, res));

router.post(`/api-${sys}/aos-invoices/updateAoInvoiceByName`, (req, res) => aosInvoicesCtrl.updateAoInvoiceByName(req, res));

router.post(`/api-${sys}/aos-invoices/updateAoInvoiceByBillingAddressStreet`, (req, res) => aosInvoicesCtrl.updateAoInvoiceByBillingAddressStreet(req, res));

router.post(`/api-${sys}/aos-invoices/updateAoInvoiceByBillingAddressCity`, (req, res) => aosInvoicesCtrl.updateAoInvoiceByBillingAddressCity(req, res));

router.post(`/api-${sys}/aos-invoices/updateAoInvoiceByBillingAddressState`, (req, res) => aosInvoicesCtrl.updateAoInvoiceByBillingAddressState(req, res));

router.post(`/api-${sys}/aos-invoices/updateAoInvoiceByBillingAddressPostalcode`, (req, res) => aosInvoicesCtrl.updateAoInvoiceByBillingAddressPostalcode(req, res));

router.post(`/api-${sys}/aos-invoices/updateAoInvoiceByBillingAddressCountry`, (req, res) => aosInvoicesCtrl.updateAoInvoiceByBillingAddressCountry(req, res));

router.post(`/api-${sys}/aos-invoices/updateAoInvoiceByShippingAddressStreet`, (req, res) => aosInvoicesCtrl.updateAoInvoiceByShippingAddressStreet(req, res));

router.post(`/api-${sys}/aos-invoices/updateAoInvoiceByShippingAddressCity`, (req, res) => aosInvoicesCtrl.updateAoInvoiceByShippingAddressCity(req, res));

router.post(`/api-${sys}/aos-invoices/updateAoInvoiceByShippingAddressState`, (req, res) => aosInvoicesCtrl.updateAoInvoiceByShippingAddressState(req, res));

router.post(`/api-${sys}/aos-invoices/updateAoInvoiceByShippingAddressPostalcode`, (req, res) => aosInvoicesCtrl.updateAoInvoiceByShippingAddressPostalcode(req, res));

router.post(`/api-${sys}/aos-invoices/updateAoInvoiceByShippingAddressCountry`, (req, res) => aosInvoicesCtrl.updateAoInvoiceByShippingAddressCountry(req, res));

router.post(`/api-${sys}/aos-invoices/updateAoInvoiceByShippingTax`, (req, res) => aosInvoicesCtrl.updateAoInvoiceByShippingTax(req, res));

router.post(`/api-${sys}/aos-invoices/updateAoInvoiceByStatus`, (req, res) => aosInvoicesCtrl.updateAoInvoiceByStatus(req, res));

router.post(`/api-${sys}/aos-invoices/updateAoInvoiceByDescription`, (req, res) => aosInvoicesCtrl.updateAoInvoiceByDescription(req, res));

router.post(`/api-${sys}/aos-invoices/updateAoInvoiceByTemplateDdownC`, (req, res) => aosInvoicesCtrl.updateAoInvoiceByTemplateDdownC(req, res));

router.post(`/api-${sys}/aos-invoices/updateAoInvoiceByDateEntered`, (req, res) => aosInvoicesCtrl.updateAoInvoiceByDateEntered(req, res));

router.post(`/api-${sys}/aos-invoices/updateAoInvoiceByDateModified`, (req, res) => aosInvoicesCtrl.updateAoInvoiceByDateModified(req, res));

router.post(`/api-${sys}/aos-invoices/updateAoInvoiceByQuoteDate`, (req, res) => aosInvoicesCtrl.updateAoInvoiceByQuoteDate(req, res));

router.post(`/api-${sys}/aos-invoices/updateAoInvoiceByInvoiceDate`, (req, res) => aosInvoicesCtrl.updateAoInvoiceByInvoiceDate(req, res));

router.post(`/api-${sys}/aos-invoices/updateAoInvoiceByDueDate`, (req, res) => aosInvoicesCtrl.updateAoInvoiceByDueDate(req, res));

router.post(`/api-${sys}/aos-invoices/updateAoInvoiceByModifiedUserId`, (req, res) => aosInvoicesCtrl.updateAoInvoiceByModifiedUserId(req, res));

router.post(`/api-${sys}/aos-invoices/updateAoInvoiceByCreatedBy`, (req, res) => aosInvoicesCtrl.updateAoInvoiceByCreatedBy(req, res));

router.post(`/api-${sys}/aos-invoices/updateAoInvoiceByAssignedUserId`, (req, res) => aosInvoicesCtrl.updateAoInvoiceByAssignedUserId(req, res));

router.post(`/api-${sys}/aos-invoices/updateAoInvoiceByBillingAccountId`, (req, res) => aosInvoicesCtrl.updateAoInvoiceByBillingAccountId(req, res));

router.post(`/api-${sys}/aos-invoices/updateAoInvoiceByBillingContactId`, (req, res) => aosInvoicesCtrl.updateAoInvoiceByBillingContactId(req, res));

router.post(`/api-${sys}/aos-invoices/updateAoInvoiceByCurrencyId`, (req, res) => aosInvoicesCtrl.updateAoInvoiceByCurrencyId(req, res));





router.get(`/api-${sys}/aos-invoices/`, (req, res) => aosInvoicesCtrl.getAllAosInvoices(req, res));
router.post(`/api-${sys}/aos-invoices/`, (req, res) => aosInvoicesCtrl.addAoInvoice(req, res));
router.get(`/api-${sys}/aos-invoices/:id`, (req, res) => aosInvoicesCtrl.getAAoInvoice(req, res));
router.put(`/api-${sys}/aos-invoices/:id`, (req, res) => aosInvoicesCtrl.updateAoInvoice(req, res));
router.delete(`/api-${sys}/aos-invoices/:id`, (req, res) => aosInvoicesCtrl.deleteAoInvoice(req, res));

//</es-section>
module.exports = router;
