/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:42:25 GMT-0400 (Bolivia Time)
 * Time: 4:42:25
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:42:25 GMT-0400 (Bolivia Time)
 * Last time updated: 4:42:25
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const aosQuotesCstmCtrl = require("../controllers/aos_quotes_cstm.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/aos-quotes-cstm/findOneByIdC/:idC`, (req, res) => aosQuotesCstmCtrl.findOneByIdC(req, res));

router.get(`/api-${sys}/aos-quotes-cstm/findOneByUnidadIndustrialC/:unidadIndustrialC`, (req, res) => aosQuotesCstmCtrl.findOneByUnidadIndustrialC(req, res));

router.get(`/api-${sys}/aos-quotes-cstm/findOneByManzanoC/:manzanoC`, (req, res) => aosQuotesCstmCtrl.findOneByManzanoC(req, res));

router.get(`/api-${sys}/aos-quotes-cstm/findOneByMetroCuadradoC/:metroCuadradoC`, (req, res) => aosQuotesCstmCtrl.findOneByMetroCuadradoC(req, res));

router.get(`/api-${sys}/aos-quotes-cstm/findOneByFrenteMetrosC/:frenteMetrosC`, (req, res) => aosQuotesCstmCtrl.findOneByFrenteMetrosC(req, res));

router.get(`/api-${sys}/aos-quotes-cstm/findOneByFondoMetrosC/:fondoMetrosC`, (req, res) => aosQuotesCstmCtrl.findOneByFondoMetrosC(req, res));

router.get(`/api-${sys}/aos-quotes-cstm/findOneByLblSuperficieC/:lblSuperficieC`, (req, res) => aosQuotesCstmCtrl.findOneByLblSuperficieC(req, res));

router.get(`/api-${sys}/aos-quotes-cstm/findOneByLblCuotainicialC/:lblCuotainicialC`, (req, res) => aosQuotesCstmCtrl.findOneByLblCuotainicialC(req, res));

router.get(`/api-${sys}/aos-quotes-cstm/findOneBySaldoCuotaInicalC/:saldoCuotaInicalC`, (req, res) => aosQuotesCstmCtrl.findOneBySaldoCuotaInicalC(req, res));

router.get(`/api-${sys}/aos-quotes-cstm/findOneByPrecioMcuadradoC/:precioMcuadradoC`, (req, res) => aosQuotesCstmCtrl.findOneByPrecioMcuadradoC(req, res));

router.get(`/api-${sys}/aos-quotes-cstm/findOneBySaldoC/:saldoC`, (req, res) => aosQuotesCstmCtrl.findOneBySaldoC(req, res));

router.get(`/api-${sys}/aos-quotes-cstm/findOneByCuotaMensualC/:cuotaMensualC`, (req, res) => aosQuotesCstmCtrl.findOneByCuotaMensualC(req, res));

router.get(`/api-${sys}/aos-quotes-cstm/findOneByUbicacionC/:ubicacionC`, (req, res) => aosQuotesCstmCtrl.findOneByUbicacionC(req, res));

router.get(`/api-${sys}/aos-quotes-cstm/findOneByLblTipoventaC/:lblTipoventaC`, (req, res) => aosQuotesCstmCtrl.findOneByLblTipoventaC(req, res));

router.get(`/api-${sys}/aos-quotes-cstm/findOneByTermYearsC/:termYearsC`, (req, res) => aosQuotesCstmCtrl.findOneByTermYearsC(req, res));

router.get(`/api-${sys}/aos-quotes-cstm/findOneByTipoPagoC/:tipoPagoC`, (req, res) => aosQuotesCstmCtrl.findOneByTipoPagoC(req, res));

router.get(`/api-${sys}/aos-quotes-cstm/findOneByLinkTerrenoC/:linkTerrenoC`, (req, res) => aosQuotesCstmCtrl.findOneByLinkTerrenoC(req, res));

router.get(`/api-${sys}/aos-quotes-cstm/findOneByFechaEnvioProgramadaC/:fechaEnvioProgramadaC`, (req, res) => aosQuotesCstmCtrl.findOneByFechaEnvioProgramadaC(req, res));



router.post(`/api-${sys}/aos-quotes-cstm/updateAoQuoteCstmByIdC`, (req, res) => aosQuotesCstmCtrl.updateAoQuoteCstmByIdC(req, res));

router.post(`/api-${sys}/aos-quotes-cstm/updateAoQuoteCstmByUnidadIndustrialC`, (req, res) => aosQuotesCstmCtrl.updateAoQuoteCstmByUnidadIndustrialC(req, res));

router.post(`/api-${sys}/aos-quotes-cstm/updateAoQuoteCstmByManzanoC`, (req, res) => aosQuotesCstmCtrl.updateAoQuoteCstmByManzanoC(req, res));

router.post(`/api-${sys}/aos-quotes-cstm/updateAoQuoteCstmByMetroCuadradoC`, (req, res) => aosQuotesCstmCtrl.updateAoQuoteCstmByMetroCuadradoC(req, res));

router.post(`/api-${sys}/aos-quotes-cstm/updateAoQuoteCstmByFrenteMetrosC`, (req, res) => aosQuotesCstmCtrl.updateAoQuoteCstmByFrenteMetrosC(req, res));

router.post(`/api-${sys}/aos-quotes-cstm/updateAoQuoteCstmByFondoMetrosC`, (req, res) => aosQuotesCstmCtrl.updateAoQuoteCstmByFondoMetrosC(req, res));

router.post(`/api-${sys}/aos-quotes-cstm/updateAoQuoteCstmByLblSuperficieC`, (req, res) => aosQuotesCstmCtrl.updateAoQuoteCstmByLblSuperficieC(req, res));

router.post(`/api-${sys}/aos-quotes-cstm/updateAoQuoteCstmByLblCuotainicialC`, (req, res) => aosQuotesCstmCtrl.updateAoQuoteCstmByLblCuotainicialC(req, res));

router.post(`/api-${sys}/aos-quotes-cstm/updateAoQuoteCstmBySaldoCuotaInicalC`, (req, res) => aosQuotesCstmCtrl.updateAoQuoteCstmBySaldoCuotaInicalC(req, res));

router.post(`/api-${sys}/aos-quotes-cstm/updateAoQuoteCstmByPrecioMcuadradoC`, (req, res) => aosQuotesCstmCtrl.updateAoQuoteCstmByPrecioMcuadradoC(req, res));

router.post(`/api-${sys}/aos-quotes-cstm/updateAoQuoteCstmBySaldoC`, (req, res) => aosQuotesCstmCtrl.updateAoQuoteCstmBySaldoC(req, res));

router.post(`/api-${sys}/aos-quotes-cstm/updateAoQuoteCstmByCuotaMensualC`, (req, res) => aosQuotesCstmCtrl.updateAoQuoteCstmByCuotaMensualC(req, res));

router.post(`/api-${sys}/aos-quotes-cstm/updateAoQuoteCstmByUbicacionC`, (req, res) => aosQuotesCstmCtrl.updateAoQuoteCstmByUbicacionC(req, res));

router.post(`/api-${sys}/aos-quotes-cstm/updateAoQuoteCstmByLblTipoventaC`, (req, res) => aosQuotesCstmCtrl.updateAoQuoteCstmByLblTipoventaC(req, res));

router.post(`/api-${sys}/aos-quotes-cstm/updateAoQuoteCstmByTermYearsC`, (req, res) => aosQuotesCstmCtrl.updateAoQuoteCstmByTermYearsC(req, res));

router.post(`/api-${sys}/aos-quotes-cstm/updateAoQuoteCstmByTipoPagoC`, (req, res) => aosQuotesCstmCtrl.updateAoQuoteCstmByTipoPagoC(req, res));

router.post(`/api-${sys}/aos-quotes-cstm/updateAoQuoteCstmByLinkTerrenoC`, (req, res) => aosQuotesCstmCtrl.updateAoQuoteCstmByLinkTerrenoC(req, res));

router.post(`/api-${sys}/aos-quotes-cstm/updateAoQuoteCstmByFechaEnvioProgramadaC`, (req, res) => aosQuotesCstmCtrl.updateAoQuoteCstmByFechaEnvioProgramadaC(req, res));





router.get(`/api-${sys}/aos-quotes-cstm/`, (req, res) => aosQuotesCstmCtrl.getAllAosQuotesCstm(req, res));
router.post(`/api-${sys}/aos-quotes-cstm/`, (req, res) => aosQuotesCstmCtrl.addAoQuoteCstm(req, res));
router.get(`/api-${sys}/aos-quotes-cstm/:idC`, (req, res) => aosQuotesCstmCtrl.getAAoQuoteCstm(req, res));
router.put(`/api-${sys}/aos-quotes-cstm/:idC`, (req, res) => aosQuotesCstmCtrl.updateAoQuoteCstm(req, res));
router.delete(`/api-${sys}/aos-quotes-cstm/:idC`, (req, res) => aosQuotesCstmCtrl.deleteAoQuoteCstm(req, res));

//</es-section>
module.exports = router;
