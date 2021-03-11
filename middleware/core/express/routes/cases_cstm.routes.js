/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:35 GMT-0400 (Bolivia Time)
 * Time: 14:56:35
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:35 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:35
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const casesCstmCtrl = require("../controllers/cases_cstm.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/cases-cstm/findOneByIdC/:idC`, (req, res) => casesCstmCtrl.findOneByIdC(req, res));

router.get(`/api-${sys}/cases-cstm/findOneByJjwgMapsLngC/:jjwgMapsLngC`, (req, res) => casesCstmCtrl.findOneByJjwgMapsLngC(req, res));

router.get(`/api-${sys}/cases-cstm/findOneByJjwgMapsLatC/:jjwgMapsLatC`, (req, res) => casesCstmCtrl.findOneByJjwgMapsLatC(req, res));

router.get(`/api-${sys}/cases-cstm/findOneByJjwgMapsGeocodeStatusC/:jjwgMapsGeocodeStatusC`, (req, res) => casesCstmCtrl.findOneByJjwgMapsGeocodeStatusC(req, res));

router.get(`/api-${sys}/cases-cstm/findOneByJjwgMapsAddressC/:jjwgMapsAddressC`, (req, res) => casesCstmCtrl.findOneByJjwgMapsAddressC(req, res));



router.post(`/api-${sys}/cases-cstm/updateCaseCstmByIdC`, (req, res) => casesCstmCtrl.updateCaseCstmByIdC(req, res));

router.post(`/api-${sys}/cases-cstm/updateCaseCstmByJjwgMapsLngC`, (req, res) => casesCstmCtrl.updateCaseCstmByJjwgMapsLngC(req, res));

router.post(`/api-${sys}/cases-cstm/updateCaseCstmByJjwgMapsLatC`, (req, res) => casesCstmCtrl.updateCaseCstmByJjwgMapsLatC(req, res));

router.post(`/api-${sys}/cases-cstm/updateCaseCstmByJjwgMapsGeocodeStatusC`, (req, res) => casesCstmCtrl.updateCaseCstmByJjwgMapsGeocodeStatusC(req, res));

router.post(`/api-${sys}/cases-cstm/updateCaseCstmByJjwgMapsAddressC`, (req, res) => casesCstmCtrl.updateCaseCstmByJjwgMapsAddressC(req, res));





router.get(`/api-${sys}/cases-cstm/`, (req, res) => casesCstmCtrl.getAllCasesCstm(req, res));
router.post(`/api-${sys}/datatable/cases-cstm/`, (req, res) => casesCstmCtrl.getAllCasesCstm(req, res));
router.post(`/api-${sys}/cases-cstm/`, (req, res) => casesCstmCtrl.addCaseCstm(req, res));
router.get(`/api-${sys}/cases-cstm/:idC`, (req, res) => casesCstmCtrl.getACaseCstm(req, res));
router.put(`/api-${sys}/cases-cstm/:idC`, (req, res) => casesCstmCtrl.updateCaseCstm(req, res));
router.delete(`/api-${sys}/cases-cstm/:idC`, (req, res) => casesCstmCtrl.deleteCaseCstm(req, res));

//</es-section>
module.exports = router;
