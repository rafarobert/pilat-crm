/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:35:53 GMT-0400 (Bolivia Time)
 * Time: 15:35:53
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:35:53 GMT-0400 (Bolivia Time)
 * Last time updated: 15:35:53
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const currenciesCtrl = require("../controllers/currencies.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/currencies/findOneById/:id`, (req, res) => currenciesCtrl.findOneById(req, res));

router.get(`/api-${sys}/currencies/findOneByDeleted/:deleted`, (req, res) => currenciesCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/currencies/findOneByConversionRate/:conversionRate`, (req, res) => currenciesCtrl.findOneByConversionRate(req, res));

router.get(`/api-${sys}/currencies/findOneByName/:name`, (req, res) => currenciesCtrl.findOneByName(req, res));

router.get(`/api-${sys}/currencies/findOneBySymbol/:symbol`, (req, res) => currenciesCtrl.findOneBySymbol(req, res));

router.get(`/api-${sys}/currencies/findOneByIso4217/:iso4217`, (req, res) => currenciesCtrl.findOneByIso4217(req, res));

router.get(`/api-${sys}/currencies/findOneByStatus/:status`, (req, res) => currenciesCtrl.findOneByStatus(req, res));

router.get(`/api-${sys}/currencies/findOneByDateEntered/:dateEntered`, (req, res) => currenciesCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/currencies/findOneByDateModified/:dateModified`, (req, res) => currenciesCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/currencies/findOneByCreatedBy/:createdBy`, (req, res) => currenciesCtrl.findOneByCreatedBy(req, res));



router.post(`/api-${sys}/currencies/updateCurrencyById`, (req, res) => currenciesCtrl.updateCurrencyById(req, res));

router.post(`/api-${sys}/currencies/updateCurrencyByDeleted`, (req, res) => currenciesCtrl.updateCurrencyByDeleted(req, res));

router.post(`/api-${sys}/currencies/updateCurrencyByConversionRate`, (req, res) => currenciesCtrl.updateCurrencyByConversionRate(req, res));

router.post(`/api-${sys}/currencies/updateCurrencyByName`, (req, res) => currenciesCtrl.updateCurrencyByName(req, res));

router.post(`/api-${sys}/currencies/updateCurrencyBySymbol`, (req, res) => currenciesCtrl.updateCurrencyBySymbol(req, res));

router.post(`/api-${sys}/currencies/updateCurrencyByIso4217`, (req, res) => currenciesCtrl.updateCurrencyByIso4217(req, res));

router.post(`/api-${sys}/currencies/updateCurrencyByStatus`, (req, res) => currenciesCtrl.updateCurrencyByStatus(req, res));

router.post(`/api-${sys}/currencies/updateCurrencyByDateEntered`, (req, res) => currenciesCtrl.updateCurrencyByDateEntered(req, res));

router.post(`/api-${sys}/currencies/updateCurrencyByDateModified`, (req, res) => currenciesCtrl.updateCurrencyByDateModified(req, res));

router.post(`/api-${sys}/currencies/updateCurrencyByCreatedBy`, (req, res) => currenciesCtrl.updateCurrencyByCreatedBy(req, res));





router.get(`/api-${sys}/currencies/`, (req, res) => currenciesCtrl.getAllCurrencies(req, res));
router.post(`/api-${sys}/currencies/`, (req, res) => currenciesCtrl.addCurrency(req, res));
router.get(`/api-${sys}/currencies/:id`, (req, res) => currenciesCtrl.getACurrency(req, res));
router.put(`/api-${sys}/currencies/:id`, (req, res) => currenciesCtrl.updateCurrency(req, res));
router.delete(`/api-${sys}/currencies/:id`, (req, res) => currenciesCtrl.deleteCurrency(req, res));

//</es-section>
module.exports = router;
