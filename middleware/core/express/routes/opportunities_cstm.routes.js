/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:38:04 GMT-0400 (Bolivia Time)
 * Time: 18:38:4
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:38:04 GMT-0400 (Bolivia Time)
 * Last time updated: 18:38:4
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const opportunitiesCstmCtrl = require("../controllers/opportunities_cstm.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/opportunities-cstm/findOneByIdC/:idC`, (req, res) => opportunitiesCstmCtrl.findOneByIdC(req, res));

router.get(`/api-${sys}/opportunities-cstm/findOneByUnidadIndustrialC/:unidadIndustrialC`, (req, res) => opportunitiesCstmCtrl.findOneByUnidadIndustrialC(req, res));

router.get(`/api-${sys}/opportunities-cstm/findOneByManzanoC/:manzanoC`, (req, res) => opportunitiesCstmCtrl.findOneByManzanoC(req, res));

router.get(`/api-${sys}/opportunities-cstm/findOneBySuperficieC/:superficieC`, (req, res) => opportunitiesCstmCtrl.findOneBySuperficieC(req, res));

router.get(`/api-${sys}/opportunities-cstm/findOneByJjwgMapsLngC/:jjwgMapsLngC`, (req, res) => opportunitiesCstmCtrl.findOneByJjwgMapsLngC(req, res));

router.get(`/api-${sys}/opportunities-cstm/findOneByJjwgMapsLatC/:jjwgMapsLatC`, (req, res) => opportunitiesCstmCtrl.findOneByJjwgMapsLatC(req, res));

router.get(`/api-${sys}/opportunities-cstm/findOneByJjwgMapsGeocodeStatusC/:jjwgMapsGeocodeStatusC`, (req, res) => opportunitiesCstmCtrl.findOneByJjwgMapsGeocodeStatusC(req, res));

router.get(`/api-${sys}/opportunities-cstm/findOneByJjwgMapsAddressC/:jjwgMapsAddressC`, (req, res) => opportunitiesCstmCtrl.findOneByJjwgMapsAddressC(req, res));

router.get(`/api-${sys}/opportunities-cstm/findOneByLblTipoPagoC/:lblTipoPagoC`, (req, res) => opportunitiesCstmCtrl.findOneByLblTipoPagoC(req, res));

router.get(`/api-${sys}/opportunities-cstm/findOneByUbicacionC/:ubicacionC`, (req, res) => opportunitiesCstmCtrl.findOneByUbicacionC(req, res));

router.get(`/api-${sys}/opportunities-cstm/findOneByTipoVentaC/:tipoVentaC`, (req, res) => opportunitiesCstmCtrl.findOneByTipoVentaC(req, res));

router.get(`/api-${sys}/opportunities-cstm/findOneByMonedaC/:monedaC`, (req, res) => opportunitiesCstmCtrl.findOneByMonedaC(req, res));



router.post(`/api-${sys}/opportunities-cstm/updateOpportunityCstmByIdC`, (req, res) => opportunitiesCstmCtrl.updateOpportunityCstmByIdC(req, res));

router.post(`/api-${sys}/opportunities-cstm/updateOpportunityCstmByUnidadIndustrialC`, (req, res) => opportunitiesCstmCtrl.updateOpportunityCstmByUnidadIndustrialC(req, res));

router.post(`/api-${sys}/opportunities-cstm/updateOpportunityCstmByManzanoC`, (req, res) => opportunitiesCstmCtrl.updateOpportunityCstmByManzanoC(req, res));

router.post(`/api-${sys}/opportunities-cstm/updateOpportunityCstmBySuperficieC`, (req, res) => opportunitiesCstmCtrl.updateOpportunityCstmBySuperficieC(req, res));

router.post(`/api-${sys}/opportunities-cstm/updateOpportunityCstmByJjwgMapsLngC`, (req, res) => opportunitiesCstmCtrl.updateOpportunityCstmByJjwgMapsLngC(req, res));

router.post(`/api-${sys}/opportunities-cstm/updateOpportunityCstmByJjwgMapsLatC`, (req, res) => opportunitiesCstmCtrl.updateOpportunityCstmByJjwgMapsLatC(req, res));

router.post(`/api-${sys}/opportunities-cstm/updateOpportunityCstmByJjwgMapsGeocodeStatusC`, (req, res) => opportunitiesCstmCtrl.updateOpportunityCstmByJjwgMapsGeocodeStatusC(req, res));

router.post(`/api-${sys}/opportunities-cstm/updateOpportunityCstmByJjwgMapsAddressC`, (req, res) => opportunitiesCstmCtrl.updateOpportunityCstmByJjwgMapsAddressC(req, res));

router.post(`/api-${sys}/opportunities-cstm/updateOpportunityCstmByLblTipoPagoC`, (req, res) => opportunitiesCstmCtrl.updateOpportunityCstmByLblTipoPagoC(req, res));

router.post(`/api-${sys}/opportunities-cstm/updateOpportunityCstmByUbicacionC`, (req, res) => opportunitiesCstmCtrl.updateOpportunityCstmByUbicacionC(req, res));

router.post(`/api-${sys}/opportunities-cstm/updateOpportunityCstmByTipoVentaC`, (req, res) => opportunitiesCstmCtrl.updateOpportunityCstmByTipoVentaC(req, res));

router.post(`/api-${sys}/opportunities-cstm/updateOpportunityCstmByMonedaC`, (req, res) => opportunitiesCstmCtrl.updateOpportunityCstmByMonedaC(req, res));





router.get(`/api-${sys}/opportunities-cstm/`, (req, res) => opportunitiesCstmCtrl.getAllOpportunitiesCstm(req, res));
router.post(`/api-${sys}/opportunities-cstm/`, (req, res) => opportunitiesCstmCtrl.addOpportunityCstm(req, res));
router.get(`/api-${sys}/opportunities-cstm/:idC`, (req, res) => opportunitiesCstmCtrl.getAOpportunityCstm(req, res));
router.put(`/api-${sys}/opportunities-cstm/:idC`, (req, res) => opportunitiesCstmCtrl.updateOpportunityCstm(req, res));
router.delete(`/api-${sys}/opportunities-cstm/:idC`, (req, res) => opportunitiesCstmCtrl.deleteOpportunityCstm(req, res));

//</es-section>
module.exports = router;
