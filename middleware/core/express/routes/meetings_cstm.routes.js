/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:16 GMT-0400 (Bolivia Time)
 * Time: 14:57:16
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:16 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:16
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const meetingsCstmCtrl = require("../controllers/meetings_cstm.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/meetings-cstm/findOneByIdC/:idC`, (req, res) => meetingsCstmCtrl.findOneByIdC(req, res));

router.get(`/api-${sys}/meetings-cstm/findOneByJjwgMapsLngC/:jjwgMapsLngC`, (req, res) => meetingsCstmCtrl.findOneByJjwgMapsLngC(req, res));

router.get(`/api-${sys}/meetings-cstm/findOneByJjwgMapsLatC/:jjwgMapsLatC`, (req, res) => meetingsCstmCtrl.findOneByJjwgMapsLatC(req, res));

router.get(`/api-${sys}/meetings-cstm/findOneByJjwgMapsGeocodeStatusC/:jjwgMapsGeocodeStatusC`, (req, res) => meetingsCstmCtrl.findOneByJjwgMapsGeocodeStatusC(req, res));

router.get(`/api-${sys}/meetings-cstm/findOneByJjwgMapsAddressC/:jjwgMapsAddressC`, (req, res) => meetingsCstmCtrl.findOneByJjwgMapsAddressC(req, res));



router.post(`/api-${sys}/meetings-cstm/updateMeetingCstmByIdC`, (req, res) => meetingsCstmCtrl.updateMeetingCstmByIdC(req, res));

router.post(`/api-${sys}/meetings-cstm/updateMeetingCstmByJjwgMapsLngC`, (req, res) => meetingsCstmCtrl.updateMeetingCstmByJjwgMapsLngC(req, res));

router.post(`/api-${sys}/meetings-cstm/updateMeetingCstmByJjwgMapsLatC`, (req, res) => meetingsCstmCtrl.updateMeetingCstmByJjwgMapsLatC(req, res));

router.post(`/api-${sys}/meetings-cstm/updateMeetingCstmByJjwgMapsGeocodeStatusC`, (req, res) => meetingsCstmCtrl.updateMeetingCstmByJjwgMapsGeocodeStatusC(req, res));

router.post(`/api-${sys}/meetings-cstm/updateMeetingCstmByJjwgMapsAddressC`, (req, res) => meetingsCstmCtrl.updateMeetingCstmByJjwgMapsAddressC(req, res));





router.get(`/api-${sys}/meetings-cstm/`, (req, res) => meetingsCstmCtrl.getAllMeetingsCstm(req, res));
router.post(`/api-${sys}/datatable/meetings-cstm/`, (req, res) => meetingsCstmCtrl.getAllMeetingsCstm(req, res));
router.post(`/api-${sys}/meetings-cstm/`, (req, res) => meetingsCstmCtrl.addMeetingCstm(req, res));
router.get(`/api-${sys}/meetings-cstm/:idC`, (req, res) => meetingsCstmCtrl.getAMeetingCstm(req, res));
router.put(`/api-${sys}/meetings-cstm/:idC`, (req, res) => meetingsCstmCtrl.updateMeetingCstm(req, res));
router.delete(`/api-${sys}/meetings-cstm/:idC`, (req, res) => meetingsCstmCtrl.deleteMeetingCstm(req, res));

//</es-section>
module.exports = router;
