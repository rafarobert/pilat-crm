/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:23 GMT-0400 (Bolivia Time)
 * Time: 14:56:23
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:23 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:23
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const aosQuotesProjectCCtrl = require("../controllers/aos_quotes_project_c.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/aos-quotes-project-c/findOneById/:id`, (req, res) => aosQuotesProjectCCtrl.findOneById(req, res));

router.get(`/api-${sys}/aos-quotes-project-c/findOneByDeleted/:deleted`, (req, res) => aosQuotesProjectCCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/aos-quotes-project-c/findOneByAosQuotes1112QuotesIda/:aosQuotes1112QuotesIda`, (req, res) => aosQuotesProjectCCtrl.findOneByAosQuotes1112QuotesIda(req, res));

router.get(`/api-${sys}/aos-quotes-project-c/findOneByAosQuotes7207projectIdb/:aosQuotes7207projectIdb`, (req, res) => aosQuotesProjectCCtrl.findOneByAosQuotes7207projectIdb(req, res));

router.get(`/api-${sys}/aos-quotes-project-c/findOneByDateModified/:dateModified`, (req, res) => aosQuotesProjectCCtrl.findOneByDateModified(req, res));



router.post(`/api-${sys}/aos-quotes-project-c/updateAoQuoteProjectCById`, (req, res) => aosQuotesProjectCCtrl.updateAoQuoteProjectCById(req, res));

router.post(`/api-${sys}/aos-quotes-project-c/updateAoQuoteProjectCByDeleted`, (req, res) => aosQuotesProjectCCtrl.updateAoQuoteProjectCByDeleted(req, res));

router.post(`/api-${sys}/aos-quotes-project-c/updateAoQuoteProjectCByAosQuotes1112QuotesIda`, (req, res) => aosQuotesProjectCCtrl.updateAoQuoteProjectCByAosQuotes1112QuotesIda(req, res));

router.post(`/api-${sys}/aos-quotes-project-c/updateAoQuoteProjectCByAosQuotes7207projectIdb`, (req, res) => aosQuotesProjectCCtrl.updateAoQuoteProjectCByAosQuotes7207projectIdb(req, res));

router.post(`/api-${sys}/aos-quotes-project-c/updateAoQuoteProjectCByDateModified`, (req, res) => aosQuotesProjectCCtrl.updateAoQuoteProjectCByDateModified(req, res));





router.get(`/api-${sys}/aos-quotes-project-c/`, (req, res) => aosQuotesProjectCCtrl.getAllAosQuotesProjectC(req, res));
router.post(`/api-${sys}/datatable/aos-quotes-project-c/`, (req, res) => aosQuotesProjectCCtrl.getAllAosQuotesProjectC(req, res));
router.post(`/api-${sys}/aos-quotes-project-c/`, (req, res) => aosQuotesProjectCCtrl.addAoQuoteProjectC(req, res));
router.get(`/api-${sys}/aos-quotes-project-c/:id`, (req, res) => aosQuotesProjectCCtrl.getAAoQuoteProjectC(req, res));
router.put(`/api-${sys}/aos-quotes-project-c/:id`, (req, res) => aosQuotesProjectCCtrl.updateAoQuoteProjectC(req, res));
router.delete(`/api-${sys}/aos-quotes-project-c/:id`, (req, res) => aosQuotesProjectCCtrl.deleteAoQuoteProjectC(req, res));

//</es-section>
module.exports = router;
