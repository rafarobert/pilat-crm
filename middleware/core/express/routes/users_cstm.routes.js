/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:54 GMT-0400 (Bolivia Time)
 * Time: 14:57:54
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:54 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:54
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const usersCstmCtrl = require("../controllers/users_cstm.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/users-cstm/findOneByIdC/:idC`, (req, res) => usersCstmCtrl.findOneByIdC(req, res));

router.get(`/api-${sys}/users-cstm/findOneByCodigoAgendaC/:codigoAgendaC`, (req, res) => usersCstmCtrl.findOneByCodigoAgendaC(req, res));

router.get(`/api-${sys}/users-cstm/findOneByNumeroDocumentoC/:numeroDocumentoC`, (req, res) => usersCstmCtrl.findOneByNumeroDocumentoC(req, res));

router.get(`/api-${sys}/users-cstm/findOneByExtensionDocumentoC/:extensionDocumentoC`, (req, res) => usersCstmCtrl.findOneByExtensionDocumentoC(req, res));



router.post(`/api-${sys}/users-cstm/updateUserCstmByIdC`, (req, res) => usersCstmCtrl.updateUserCstmByIdC(req, res));

router.post(`/api-${sys}/users-cstm/updateUserCstmByCodigoAgendaC`, (req, res) => usersCstmCtrl.updateUserCstmByCodigoAgendaC(req, res));

router.post(`/api-${sys}/users-cstm/updateUserCstmByNumeroDocumentoC`, (req, res) => usersCstmCtrl.updateUserCstmByNumeroDocumentoC(req, res));

router.post(`/api-${sys}/users-cstm/updateUserCstmByExtensionDocumentoC`, (req, res) => usersCstmCtrl.updateUserCstmByExtensionDocumentoC(req, res));





router.get(`/api-${sys}/users-cstm/`, (req, res) => usersCstmCtrl.getAllUsersCstm(req, res));
router.post(`/api-${sys}/users-cstm/`, (req, res) => usersCstmCtrl.addUserCstm(req, res));
router.get(`/api-${sys}/users-cstm/:idC`, (req, res) => usersCstmCtrl.getAUserCstm(req, res));
router.put(`/api-${sys}/users-cstm/:idC`, (req, res) => usersCstmCtrl.updateUserCstm(req, res));
router.delete(`/api-${sys}/users-cstm/:idC`, (req, res) => usersCstmCtrl.deleteUserCstm(req, res));

//</es-section>
module.exports = router;
