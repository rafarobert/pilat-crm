/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:35 GMT-0400 (Bolivia Time)
 * Time: 14:57:35
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:35 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:35
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const prospectsCstmCtrl = require("../controllers/prospects_cstm.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/prospects-cstm/findOneByIdC/:idC`, (req, res) => prospectsCstmCtrl.findOneByIdC(req, res));

router.get(`/api-${sys}/prospects-cstm/findOneByJjwgMapsLngC/:jjwgMapsLngC`, (req, res) => prospectsCstmCtrl.findOneByJjwgMapsLngC(req, res));

router.get(`/api-${sys}/prospects-cstm/findOneByJjwgMapsLatC/:jjwgMapsLatC`, (req, res) => prospectsCstmCtrl.findOneByJjwgMapsLatC(req, res));

router.get(`/api-${sys}/prospects-cstm/findOneByJjwgMapsGeocodeStatusC/:jjwgMapsGeocodeStatusC`, (req, res) => prospectsCstmCtrl.findOneByJjwgMapsGeocodeStatusC(req, res));

router.get(`/api-${sys}/prospects-cstm/findOneByJjwgMapsAddressC/:jjwgMapsAddressC`, (req, res) => prospectsCstmCtrl.findOneByJjwgMapsAddressC(req, res));



router.post(`/api-${sys}/prospects-cstm/updateProspectCstmByIdC`, (req, res) => prospectsCstmCtrl.updateProspectCstmByIdC(req, res));

router.post(`/api-${sys}/prospects-cstm/updateProspectCstmByJjwgMapsLngC`, (req, res) => prospectsCstmCtrl.updateProspectCstmByJjwgMapsLngC(req, res));

router.post(`/api-${sys}/prospects-cstm/updateProspectCstmByJjwgMapsLatC`, (req, res) => prospectsCstmCtrl.updateProspectCstmByJjwgMapsLatC(req, res));

router.post(`/api-${sys}/prospects-cstm/updateProspectCstmByJjwgMapsGeocodeStatusC`, (req, res) => prospectsCstmCtrl.updateProspectCstmByJjwgMapsGeocodeStatusC(req, res));

router.post(`/api-${sys}/prospects-cstm/updateProspectCstmByJjwgMapsAddressC`, (req, res) => prospectsCstmCtrl.updateProspectCstmByJjwgMapsAddressC(req, res));





router.get(`/api-${sys}/prospects-cstm/`, (req, res) => prospectsCstmCtrl.getAllProspectsCstm(req, res));
router.post(`/api-${sys}/datatable/prospects-cstm/`, (req, res) => prospectsCstmCtrl.getAllProspectsCstm(req, res));
router.post(`/api-${sys}/prospects-cstm/`, (req, res) => prospectsCstmCtrl.addProspectCstm(req, res));
router.get(`/api-${sys}/prospects-cstm/:idC`, (req, res) => prospectsCstmCtrl.getAProspectCstm(req, res));
router.put(`/api-${sys}/prospects-cstm/:idC`, (req, res) => prospectsCstmCtrl.updateProspectCstm(req, res));
router.delete(`/api-${sys}/prospects-cstm/:idC`, (req, res) => prospectsCstmCtrl.deleteProspectCstm(req, res));

//</es-section>
module.exports = router;
