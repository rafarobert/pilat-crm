/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:25 GMT-0400 (Bolivia Time)
 * Time: 14:0:25
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:25 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:25
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const aosQuotesAosInvoicesCCtrl = require("../controllers/aos_quotes_aos_invoices_c.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/aos-quotes-aos-invoices-c/findOneById/:id`, (req, res) => aosQuotesAosInvoicesCCtrl.findOneById(req, res));

router.get(`/api-${sys}/aos-quotes-aos-invoices-c/findOneByDeleted/:deleted`, (req, res) => aosQuotesAosInvoicesCCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/aos-quotes-aos-invoices-c/findOneByAosQuotes77d9QuotesIda/:aosQuotes77d9QuotesIda`, (req, res) => aosQuotesAosInvoicesCCtrl.findOneByAosQuotes77d9QuotesIda(req, res));

router.get(`/api-${sys}/aos-quotes-aos-invoices-c/findOneByAosQuotes6b83nvoicesIdb/:aosQuotes6b83nvoicesIdb`, (req, res) => aosQuotesAosInvoicesCCtrl.findOneByAosQuotes6b83nvoicesIdb(req, res));

router.get(`/api-${sys}/aos-quotes-aos-invoices-c/findOneByDateModified/:dateModified`, (req, res) => aosQuotesAosInvoicesCCtrl.findOneByDateModified(req, res));



router.post(`/api-${sys}/aos-quotes-aos-invoices-c/updateAoQuoteAoInvoiceCById`, (req, res) => aosQuotesAosInvoicesCCtrl.updateAoQuoteAoInvoiceCById(req, res));

router.post(`/api-${sys}/aos-quotes-aos-invoices-c/updateAoQuoteAoInvoiceCByDeleted`, (req, res) => aosQuotesAosInvoicesCCtrl.updateAoQuoteAoInvoiceCByDeleted(req, res));

router.post(`/api-${sys}/aos-quotes-aos-invoices-c/updateAoQuoteAoInvoiceCByAosQuotes77d9QuotesIda`, (req, res) => aosQuotesAosInvoicesCCtrl.updateAoQuoteAoInvoiceCByAosQuotes77d9QuotesIda(req, res));

router.post(`/api-${sys}/aos-quotes-aos-invoices-c/updateAoQuoteAoInvoiceCByAosQuotes6b83nvoicesIdb`, (req, res) => aosQuotesAosInvoicesCCtrl.updateAoQuoteAoInvoiceCByAosQuotes6b83nvoicesIdb(req, res));

router.post(`/api-${sys}/aos-quotes-aos-invoices-c/updateAoQuoteAoInvoiceCByDateModified`, (req, res) => aosQuotesAosInvoicesCCtrl.updateAoQuoteAoInvoiceCByDateModified(req, res));





router.get(`/api-${sys}/aos-quotes-aos-invoices-c/`, (req, res) => aosQuotesAosInvoicesCCtrl.getAllAosQuotesAosInvoicesC(req, res));
router.post(`/api-${sys}/aos-quotes-aos-invoices-c/`, (req, res) => aosQuotesAosInvoicesCCtrl.addAoQuoteAoInvoiceC(req, res));
router.get(`/api-${sys}/aos-quotes-aos-invoices-c/:id`, (req, res) => aosQuotesAosInvoicesCCtrl.getAAoQuoteAoInvoiceC(req, res));
router.put(`/api-${sys}/aos-quotes-aos-invoices-c/:id`, (req, res) => aosQuotesAosInvoicesCCtrl.updateAoQuoteAoInvoiceC(req, res));
router.delete(`/api-${sys}/aos-quotes-aos-invoices-c/:id`, (req, res) => aosQuotesAosInvoicesCCtrl.deleteAoQuoteAoInvoiceC(req, res));

//</es-section>
module.exports = router;
