/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:59 GMT-0400 (Bolivia Time)
 * Time: 14:0:59
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:59 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:59
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const jjwgAddressCacheCtrl = require("../controllers/jjwg_address_cache.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/jjwg-address-cache/findOneById/:id`, (req, res) => jjwgAddressCacheCtrl.findOneById(req, res));

router.get(`/api-${sys}/jjwg-address-cache/findOneByDeleted/:deleted`, (req, res) => jjwgAddressCacheCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/jjwg-address-cache/findOneByLat/:lat`, (req, res) => jjwgAddressCacheCtrl.findOneByLat(req, res));

router.get(`/api-${sys}/jjwg-address-cache/findOneByLng/:lng`, (req, res) => jjwgAddressCacheCtrl.findOneByLng(req, res));

router.get(`/api-${sys}/jjwg-address-cache/findOneByName/:name`, (req, res) => jjwgAddressCacheCtrl.findOneByName(req, res));

router.get(`/api-${sys}/jjwg-address-cache/findOneByDescription/:description`, (req, res) => jjwgAddressCacheCtrl.findOneByDescription(req, res));

router.get(`/api-${sys}/jjwg-address-cache/findOneByDateEntered/:dateEntered`, (req, res) => jjwgAddressCacheCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/jjwg-address-cache/findOneByDateModified/:dateModified`, (req, res) => jjwgAddressCacheCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/jjwg-address-cache/findOneByModifiedUserId/:modifiedUserId`, (req, res) => jjwgAddressCacheCtrl.findOneByModifiedUserId(req, res));

router.get(`/api-${sys}/jjwg-address-cache/findOneByCreatedBy/:createdBy`, (req, res) => jjwgAddressCacheCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/jjwg-address-cache/findOneByAssignedUserId/:assignedUserId`, (req, res) => jjwgAddressCacheCtrl.findOneByAssignedUserId(req, res));



router.post(`/api-${sys}/jjwg-address-cache/updateJjwgAddresCacheById`, (req, res) => jjwgAddressCacheCtrl.updateJjwgAddresCacheById(req, res));

router.post(`/api-${sys}/jjwg-address-cache/updateJjwgAddresCacheByDeleted`, (req, res) => jjwgAddressCacheCtrl.updateJjwgAddresCacheByDeleted(req, res));

router.post(`/api-${sys}/jjwg-address-cache/updateJjwgAddresCacheByLat`, (req, res) => jjwgAddressCacheCtrl.updateJjwgAddresCacheByLat(req, res));

router.post(`/api-${sys}/jjwg-address-cache/updateJjwgAddresCacheByLng`, (req, res) => jjwgAddressCacheCtrl.updateJjwgAddresCacheByLng(req, res));

router.post(`/api-${sys}/jjwg-address-cache/updateJjwgAddresCacheByName`, (req, res) => jjwgAddressCacheCtrl.updateJjwgAddresCacheByName(req, res));

router.post(`/api-${sys}/jjwg-address-cache/updateJjwgAddresCacheByDescription`, (req, res) => jjwgAddressCacheCtrl.updateJjwgAddresCacheByDescription(req, res));

router.post(`/api-${sys}/jjwg-address-cache/updateJjwgAddresCacheByDateEntered`, (req, res) => jjwgAddressCacheCtrl.updateJjwgAddresCacheByDateEntered(req, res));

router.post(`/api-${sys}/jjwg-address-cache/updateJjwgAddresCacheByDateModified`, (req, res) => jjwgAddressCacheCtrl.updateJjwgAddresCacheByDateModified(req, res));

router.post(`/api-${sys}/jjwg-address-cache/updateJjwgAddresCacheByModifiedUserId`, (req, res) => jjwgAddressCacheCtrl.updateJjwgAddresCacheByModifiedUserId(req, res));

router.post(`/api-${sys}/jjwg-address-cache/updateJjwgAddresCacheByCreatedBy`, (req, res) => jjwgAddressCacheCtrl.updateJjwgAddresCacheByCreatedBy(req, res));

router.post(`/api-${sys}/jjwg-address-cache/updateJjwgAddresCacheByAssignedUserId`, (req, res) => jjwgAddressCacheCtrl.updateJjwgAddresCacheByAssignedUserId(req, res));





router.get(`/api-${sys}/jjwg-address-cache/`, (req, res) => jjwgAddressCacheCtrl.getAllJjwgAddressCache(req, res));
router.post(`/api-${sys}/jjwg-address-cache/`, (req, res) => jjwgAddressCacheCtrl.addJjwgAddresCache(req, res));
router.get(`/api-${sys}/jjwg-address-cache/:id`, (req, res) => jjwgAddressCacheCtrl.getAJjwgAddresCache(req, res));
router.put(`/api-${sys}/jjwg-address-cache/:id`, (req, res) => jjwgAddressCacheCtrl.updateJjwgAddresCache(req, res));
router.delete(`/api-${sys}/jjwg-address-cache/:id`, (req, res) => jjwgAddressCacheCtrl.deleteJjwgAddresCache(req, res));

//</es-section>
module.exports = router;
