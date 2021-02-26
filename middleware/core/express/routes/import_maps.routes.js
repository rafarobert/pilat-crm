/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:23:05 GMT-0400 (Bolivia Time)
 * Time: 0:23:5
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:23:05 GMT-0400 (Bolivia Time)
 * Last time updated: 0:23:5
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const importMapsCtrl = require("../controllers/import_maps.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/import-maps/findOneById/:id`, (req, res) => importMapsCtrl.findOneById(req, res));

router.get(`/api-${sys}/import-maps/findOneByHasHeader/:hasHeader`, (req, res) => importMapsCtrl.findOneByHasHeader(req, res));

router.get(`/api-${sys}/import-maps/findOneByDeleted/:deleted`, (req, res) => importMapsCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/import-maps/findOneByName/:name`, (req, res) => importMapsCtrl.findOneByName(req, res));

router.get(`/api-${sys}/import-maps/findOneBySource/:source`, (req, res) => importMapsCtrl.findOneBySource(req, res));

router.get(`/api-${sys}/import-maps/findOneByEnclosure/:enclosure`, (req, res) => importMapsCtrl.findOneByEnclosure(req, res));

router.get(`/api-${sys}/import-maps/findOneByDelimiter/:delimiter`, (req, res) => importMapsCtrl.findOneByDelimiter(req, res));

router.get(`/api-${sys}/import-maps/findOneByModule/:module`, (req, res) => importMapsCtrl.findOneByModule(req, res));

router.get(`/api-${sys}/import-maps/findOneByIsPublished/:isPublished`, (req, res) => importMapsCtrl.findOneByIsPublished(req, res));

router.get(`/api-${sys}/import-maps/findOneByContent/:content`, (req, res) => importMapsCtrl.findOneByContent(req, res));

router.get(`/api-${sys}/import-maps/findOneByDefaultValues/:defaultValues`, (req, res) => importMapsCtrl.findOneByDefaultValues(req, res));

router.get(`/api-${sys}/import-maps/findOneByDateEntered/:dateEntered`, (req, res) => importMapsCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/import-maps/findOneByDateModified/:dateModified`, (req, res) => importMapsCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/import-maps/findOneByAssignedUserId/:assignedUserId`, (req, res) => importMapsCtrl.findOneByAssignedUserId(req, res));



router.post(`/api-${sys}/import-maps/updateImportMapById`, (req, res) => importMapsCtrl.updateImportMapById(req, res));

router.post(`/api-${sys}/import-maps/updateImportMapByHasHeader`, (req, res) => importMapsCtrl.updateImportMapByHasHeader(req, res));

router.post(`/api-${sys}/import-maps/updateImportMapByDeleted`, (req, res) => importMapsCtrl.updateImportMapByDeleted(req, res));

router.post(`/api-${sys}/import-maps/updateImportMapByName`, (req, res) => importMapsCtrl.updateImportMapByName(req, res));

router.post(`/api-${sys}/import-maps/updateImportMapBySource`, (req, res) => importMapsCtrl.updateImportMapBySource(req, res));

router.post(`/api-${sys}/import-maps/updateImportMapByEnclosure`, (req, res) => importMapsCtrl.updateImportMapByEnclosure(req, res));

router.post(`/api-${sys}/import-maps/updateImportMapByDelimiter`, (req, res) => importMapsCtrl.updateImportMapByDelimiter(req, res));

router.post(`/api-${sys}/import-maps/updateImportMapByModule`, (req, res) => importMapsCtrl.updateImportMapByModule(req, res));

router.post(`/api-${sys}/import-maps/updateImportMapByIsPublished`, (req, res) => importMapsCtrl.updateImportMapByIsPublished(req, res));

router.post(`/api-${sys}/import-maps/updateImportMapByContent`, (req, res) => importMapsCtrl.updateImportMapByContent(req, res));

router.post(`/api-${sys}/import-maps/updateImportMapByDefaultValues`, (req, res) => importMapsCtrl.updateImportMapByDefaultValues(req, res));

router.post(`/api-${sys}/import-maps/updateImportMapByDateEntered`, (req, res) => importMapsCtrl.updateImportMapByDateEntered(req, res));

router.post(`/api-${sys}/import-maps/updateImportMapByDateModified`, (req, res) => importMapsCtrl.updateImportMapByDateModified(req, res));

router.post(`/api-${sys}/import-maps/updateImportMapByAssignedUserId`, (req, res) => importMapsCtrl.updateImportMapByAssignedUserId(req, res));





router.get(`/api-${sys}/import-maps/`, (req, res) => importMapsCtrl.getAllImportMaps(req, res));
router.post(`/api-${sys}/import-maps/`, (req, res) => importMapsCtrl.addImportMap(req, res));
router.get(`/api-${sys}/import-maps/:id`, (req, res) => importMapsCtrl.getAImportMap(req, res));
router.put(`/api-${sys}/import-maps/:id`, (req, res) => importMapsCtrl.updateImportMap(req, res));
router.delete(`/api-${sys}/import-maps/:id`, (req, res) => importMapsCtrl.deleteImportMap(req, res));

//</es-section>
module.exports = router;
