/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:35:42 GMT-0400 (Bolivia Time)
 * Time: 15:35:42
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:35:42 GMT-0400 (Bolivia Time)
 * Last time updated: 15:35:42
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const callsCstmCtrl = require("../controllers/calls_cstm.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/calls-cstm/findOneByIdC/:idC`, (req, res) => callsCstmCtrl.findOneByIdC(req, res));

router.get(`/api-${sys}/calls-cstm/findOneByLlamadaRealizadaC/:llamadaRealizadaC`, (req, res) => callsCstmCtrl.findOneByLlamadaRealizadaC(req, res));

router.get(`/api-${sys}/calls-cstm/findOneByMessageIdC/:messageIdC`, (req, res) => callsCstmCtrl.findOneByMessageIdC(req, res));

router.get(`/api-${sys}/calls-cstm/findOneByLlamadaFechaC/:llamadaFechaC`, (req, res) => callsCstmCtrl.findOneByLlamadaFechaC(req, res));



router.post(`/api-${sys}/calls-cstm/updateCallCstmByIdC`, (req, res) => callsCstmCtrl.updateCallCstmByIdC(req, res));

router.post(`/api-${sys}/calls-cstm/updateCallCstmByLlamadaRealizadaC`, (req, res) => callsCstmCtrl.updateCallCstmByLlamadaRealizadaC(req, res));

router.post(`/api-${sys}/calls-cstm/updateCallCstmByMessageIdC`, (req, res) => callsCstmCtrl.updateCallCstmByMessageIdC(req, res));

router.post(`/api-${sys}/calls-cstm/updateCallCstmByLlamadaFechaC`, (req, res) => callsCstmCtrl.updateCallCstmByLlamadaFechaC(req, res));





router.get(`/api-${sys}/calls-cstm/`, (req, res) => callsCstmCtrl.getAllCallsCstm(req, res));
router.post(`/api-${sys}/calls-cstm/`, (req, res) => callsCstmCtrl.addCallCstm(req, res));
router.get(`/api-${sys}/calls-cstm/:idC`, (req, res) => callsCstmCtrl.getACallCstm(req, res));
router.put(`/api-${sys}/calls-cstm/:idC`, (req, res) => callsCstmCtrl.updateCallCstm(req, res));
router.delete(`/api-${sys}/calls-cstm/:idC`, (req, res) => callsCstmCtrl.deleteCallCstm(req, res));

//</es-section>
module.exports = router;
