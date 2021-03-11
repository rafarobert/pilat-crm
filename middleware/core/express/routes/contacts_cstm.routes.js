/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:38 GMT-0400 (Bolivia Time)
 * Time: 14:56:38
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:38 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:38
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const contactsCstmCtrl = require("../controllers/contacts_cstm.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/contacts-cstm/findOneByIdC/:idC`, (req, res) => contactsCstmCtrl.findOneByIdC(req, res));

router.get(`/api-${sys}/contacts-cstm/findOneByJjwgMapsLngC/:jjwgMapsLngC`, (req, res) => contactsCstmCtrl.findOneByJjwgMapsLngC(req, res));

router.get(`/api-${sys}/contacts-cstm/findOneByJjwgMapsLatC/:jjwgMapsLatC`, (req, res) => contactsCstmCtrl.findOneByJjwgMapsLatC(req, res));

router.get(`/api-${sys}/contacts-cstm/findOneByJjwgMapsGeocodeStatusC/:jjwgMapsGeocodeStatusC`, (req, res) => contactsCstmCtrl.findOneByJjwgMapsGeocodeStatusC(req, res));

router.get(`/api-${sys}/contacts-cstm/findOneByJjwgMapsAddressC/:jjwgMapsAddressC`, (req, res) => contactsCstmCtrl.findOneByJjwgMapsAddressC(req, res));



router.post(`/api-${sys}/contacts-cstm/updateContactCstmByIdC`, (req, res) => contactsCstmCtrl.updateContactCstmByIdC(req, res));

router.post(`/api-${sys}/contacts-cstm/updateContactCstmByJjwgMapsLngC`, (req, res) => contactsCstmCtrl.updateContactCstmByJjwgMapsLngC(req, res));

router.post(`/api-${sys}/contacts-cstm/updateContactCstmByJjwgMapsLatC`, (req, res) => contactsCstmCtrl.updateContactCstmByJjwgMapsLatC(req, res));

router.post(`/api-${sys}/contacts-cstm/updateContactCstmByJjwgMapsGeocodeStatusC`, (req, res) => contactsCstmCtrl.updateContactCstmByJjwgMapsGeocodeStatusC(req, res));

router.post(`/api-${sys}/contacts-cstm/updateContactCstmByJjwgMapsAddressC`, (req, res) => contactsCstmCtrl.updateContactCstmByJjwgMapsAddressC(req, res));





router.get(`/api-${sys}/contacts-cstm/`, (req, res) => contactsCstmCtrl.getAllContactsCstm(req, res));
router.post(`/api-${sys}/datatable/contacts-cstm/`, (req, res) => contactsCstmCtrl.getAllContactsCstm(req, res));
router.post(`/api-${sys}/contacts-cstm/`, (req, res) => contactsCstmCtrl.addContactCstm(req, res));
router.get(`/api-${sys}/contacts-cstm/:idC`, (req, res) => contactsCstmCtrl.getAContactCstm(req, res));
router.put(`/api-${sys}/contacts-cstm/:idC`, (req, res) => contactsCstmCtrl.updateContactCstm(req, res));
router.delete(`/api-${sys}/contacts-cstm/:idC`, (req, res) => contactsCstmCtrl.deleteContactCstm(req, res));

//</es-section>
module.exports = router;
