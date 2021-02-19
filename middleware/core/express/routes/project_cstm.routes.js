/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:43:53 GMT-0400 (Bolivia Time)
 * Time: 4:43:53
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:43:53 GMT-0400 (Bolivia Time)
 * Last time updated: 4:43:53
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const projectCstmCtrl = require("../controllers/project_cstm.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/project-cstm/findOneByIdC/:idC`, (req, res) => projectCstmCtrl.findOneByIdC(req, res));

router.get(`/api-${sys}/project-cstm/findOneByJjwgMapsLngC/:jjwgMapsLngC`, (req, res) => projectCstmCtrl.findOneByJjwgMapsLngC(req, res));

router.get(`/api-${sys}/project-cstm/findOneByJjwgMapsLatC/:jjwgMapsLatC`, (req, res) => projectCstmCtrl.findOneByJjwgMapsLatC(req, res));

router.get(`/api-${sys}/project-cstm/findOneByJjwgMapsGeocodeStatusC/:jjwgMapsGeocodeStatusC`, (req, res) => projectCstmCtrl.findOneByJjwgMapsGeocodeStatusC(req, res));

router.get(`/api-${sys}/project-cstm/findOneByJjwgMapsAddressC/:jjwgMapsAddressC`, (req, res) => projectCstmCtrl.findOneByJjwgMapsAddressC(req, res));



router.post(`/api-${sys}/project-cstm/updateProjectCstmByIdC`, (req, res) => projectCstmCtrl.updateProjectCstmByIdC(req, res));

router.post(`/api-${sys}/project-cstm/updateProjectCstmByJjwgMapsLngC`, (req, res) => projectCstmCtrl.updateProjectCstmByJjwgMapsLngC(req, res));

router.post(`/api-${sys}/project-cstm/updateProjectCstmByJjwgMapsLatC`, (req, res) => projectCstmCtrl.updateProjectCstmByJjwgMapsLatC(req, res));

router.post(`/api-${sys}/project-cstm/updateProjectCstmByJjwgMapsGeocodeStatusC`, (req, res) => projectCstmCtrl.updateProjectCstmByJjwgMapsGeocodeStatusC(req, res));

router.post(`/api-${sys}/project-cstm/updateProjectCstmByJjwgMapsAddressC`, (req, res) => projectCstmCtrl.updateProjectCstmByJjwgMapsAddressC(req, res));





router.get(`/api-${sys}/project-cstm/`, (req, res) => projectCstmCtrl.getAllProjectCstm(req, res));
router.post(`/api-${sys}/project-cstm/`, (req, res) => projectCstmCtrl.addProjectCstm(req, res));
router.get(`/api-${sys}/project-cstm/:idC`, (req, res) => projectCstmCtrl.getAProjectCstm(req, res));
router.put(`/api-${sys}/project-cstm/:idC`, (req, res) => projectCstmCtrl.updateProjectCstm(req, res));
router.delete(`/api-${sys}/project-cstm/:idC`, (req, res) => projectCstmCtrl.deleteProjectCstm(req, res));

//</es-section>
module.exports = router;
