/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:00 GMT-0400 (Bolivia Time)
 * Time: 14:0:0
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:00 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:0
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const accountsCstmCtrl = require("../controllers/accounts_cstm.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/accounts-cstm/findOneByIdC/:idC`, (req, res) => accountsCstmCtrl.findOneByIdC(req, res));

router.get(`/api-${sys}/accounts-cstm/findOneByJjwgMapsLngC/:jjwgMapsLngC`, (req, res) => accountsCstmCtrl.findOneByJjwgMapsLngC(req, res));

router.get(`/api-${sys}/accounts-cstm/findOneByJjwgMapsLatC/:jjwgMapsLatC`, (req, res) => accountsCstmCtrl.findOneByJjwgMapsLatC(req, res));

router.get(`/api-${sys}/accounts-cstm/findOneByJjwgMapsGeocodeStatusC/:jjwgMapsGeocodeStatusC`, (req, res) => accountsCstmCtrl.findOneByJjwgMapsGeocodeStatusC(req, res));

router.get(`/api-${sys}/accounts-cstm/findOneByJjwgMapsAddressC/:jjwgMapsAddressC`, (req, res) => accountsCstmCtrl.findOneByJjwgMapsAddressC(req, res));

router.get(`/api-${sys}/accounts-cstm/findOneByNumeroDocumentoC/:numeroDocumentoC`, (req, res) => accountsCstmCtrl.findOneByNumeroDocumentoC(req, res));

router.get(`/api-${sys}/accounts-cstm/findOneByExtensionDocumentoC/:extensionDocumentoC`, (req, res) => accountsCstmCtrl.findOneByExtensionDocumentoC(req, res));



router.post(`/api-${sys}/accounts-cstm/updateAccountCstmByIdC`, (req, res) => accountsCstmCtrl.updateAccountCstmByIdC(req, res));

router.post(`/api-${sys}/accounts-cstm/updateAccountCstmByJjwgMapsLngC`, (req, res) => accountsCstmCtrl.updateAccountCstmByJjwgMapsLngC(req, res));

router.post(`/api-${sys}/accounts-cstm/updateAccountCstmByJjwgMapsLatC`, (req, res) => accountsCstmCtrl.updateAccountCstmByJjwgMapsLatC(req, res));

router.post(`/api-${sys}/accounts-cstm/updateAccountCstmByJjwgMapsGeocodeStatusC`, (req, res) => accountsCstmCtrl.updateAccountCstmByJjwgMapsGeocodeStatusC(req, res));

router.post(`/api-${sys}/accounts-cstm/updateAccountCstmByJjwgMapsAddressC`, (req, res) => accountsCstmCtrl.updateAccountCstmByJjwgMapsAddressC(req, res));

router.post(`/api-${sys}/accounts-cstm/updateAccountCstmByNumeroDocumentoC`, (req, res) => accountsCstmCtrl.updateAccountCstmByNumeroDocumentoC(req, res));

router.post(`/api-${sys}/accounts-cstm/updateAccountCstmByExtensionDocumentoC`, (req, res) => accountsCstmCtrl.updateAccountCstmByExtensionDocumentoC(req, res));





router.get(`/api-${sys}/accounts-cstm/`, (req, res) => accountsCstmCtrl.getAllAccountsCstm(req, res));
router.post(`/api-${sys}/accounts-cstm/`, (req, res) => accountsCstmCtrl.addAccountCstm(req, res));
router.get(`/api-${sys}/accounts-cstm/:idC`, (req, res) => accountsCstmCtrl.getAAccountCstm(req, res));
router.put(`/api-${sys}/accounts-cstm/:idC`, (req, res) => accountsCstmCtrl.updateAccountCstm(req, res));
router.delete(`/api-${sys}/accounts-cstm/:idC`, (req, res) => accountsCstmCtrl.deleteAccountCstm(req, res));

//</es-section>
module.exports = router;
