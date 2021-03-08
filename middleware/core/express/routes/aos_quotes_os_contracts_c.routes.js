/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:35:34 GMT-0400 (Bolivia Time)
 * Time: 15:35:34
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:35:34 GMT-0400 (Bolivia Time)
 * Last time updated: 15:35:34
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const aosQuotesOsContractsCCtrl = require("../controllers/aos_quotes_os_contracts_c.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/aos-quotes-os-contracts-c/findOneById/:id`, (req, res) => aosQuotesOsContractsCCtrl.findOneById(req, res));

router.get(`/api-${sys}/aos-quotes-os-contracts-c/findOneByDeleted/:deleted`, (req, res) => aosQuotesOsContractsCCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/aos-quotes-os-contracts-c/findOneByAosQuotese81eQuotesIda/:aosQuotese81eQuotesIda`, (req, res) => aosQuotesOsContractsCCtrl.findOneByAosQuotese81eQuotesIda(req, res));

router.get(`/api-${sys}/aos-quotes-os-contracts-c/findOneByAosQuotes4dc0ntractsIdb/:aosQuotes4dc0ntractsIdb`, (req, res) => aosQuotesOsContractsCCtrl.findOneByAosQuotes4dc0ntractsIdb(req, res));

router.get(`/api-${sys}/aos-quotes-os-contracts-c/findOneByDateModified/:dateModified`, (req, res) => aosQuotesOsContractsCCtrl.findOneByDateModified(req, res));



router.post(`/api-${sys}/aos-quotes-os-contracts-c/updateAoQuoteOContractCById`, (req, res) => aosQuotesOsContractsCCtrl.updateAoQuoteOContractCById(req, res));

router.post(`/api-${sys}/aos-quotes-os-contracts-c/updateAoQuoteOContractCByDeleted`, (req, res) => aosQuotesOsContractsCCtrl.updateAoQuoteOContractCByDeleted(req, res));

router.post(`/api-${sys}/aos-quotes-os-contracts-c/updateAoQuoteOContractCByAosQuotese81eQuotesIda`, (req, res) => aosQuotesOsContractsCCtrl.updateAoQuoteOContractCByAosQuotese81eQuotesIda(req, res));

router.post(`/api-${sys}/aos-quotes-os-contracts-c/updateAoQuoteOContractCByAosQuotes4dc0ntractsIdb`, (req, res) => aosQuotesOsContractsCCtrl.updateAoQuoteOContractCByAosQuotes4dc0ntractsIdb(req, res));

router.post(`/api-${sys}/aos-quotes-os-contracts-c/updateAoQuoteOContractCByDateModified`, (req, res) => aosQuotesOsContractsCCtrl.updateAoQuoteOContractCByDateModified(req, res));





router.get(`/api-${sys}/aos-quotes-os-contracts-c/`, (req, res) => aosQuotesOsContractsCCtrl.getAllAosQuotesOsContractsC(req, res));
router.post(`/api-${sys}/aos-quotes-os-contracts-c/`, (req, res) => aosQuotesOsContractsCCtrl.addAoQuoteOContractC(req, res));
router.get(`/api-${sys}/aos-quotes-os-contracts-c/:id`, (req, res) => aosQuotesOsContractsCCtrl.getAAoQuoteOContractC(req, res));
router.put(`/api-${sys}/aos-quotes-os-contracts-c/:id`, (req, res) => aosQuotesOsContractsCCtrl.updateAoQuoteOContractC(req, res));
router.delete(`/api-${sys}/aos-quotes-os-contracts-c/:id`, (req, res) => aosQuotesOsContractsCCtrl.deleteAoQuoteOContractC(req, res));

//</es-section>
module.exports = router;
