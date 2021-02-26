/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:23:48 GMT-0400 (Bolivia Time)
 * Time: 0:23:48
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:23:48 GMT-0400 (Bolivia Time)
 * Last time updated: 0:23:48
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const sugarfeedCtrl = require("../controllers/sugarfeed.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/sugarfeed/findOneById/:id`, (req, res) => sugarfeedCtrl.findOneById(req, res));

router.get(`/api-${sys}/sugarfeed/findOneByDeleted/:deleted`, (req, res) => sugarfeedCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/sugarfeed/findOneByName/:name`, (req, res) => sugarfeedCtrl.findOneByName(req, res));

router.get(`/api-${sys}/sugarfeed/findOneByRelatedModule/:relatedModule`, (req, res) => sugarfeedCtrl.findOneByRelatedModule(req, res));

router.get(`/api-${sys}/sugarfeed/findOneByLinkUrl/:linkUrl`, (req, res) => sugarfeedCtrl.findOneByLinkUrl(req, res));

router.get(`/api-${sys}/sugarfeed/findOneByLinkType/:linkType`, (req, res) => sugarfeedCtrl.findOneByLinkType(req, res));

router.get(`/api-${sys}/sugarfeed/findOneByDescription/:description`, (req, res) => sugarfeedCtrl.findOneByDescription(req, res));

router.get(`/api-${sys}/sugarfeed/findOneByDateEntered/:dateEntered`, (req, res) => sugarfeedCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/sugarfeed/findOneByDateModified/:dateModified`, (req, res) => sugarfeedCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/sugarfeed/findOneByModifiedUserId/:modifiedUserId`, (req, res) => sugarfeedCtrl.findOneByModifiedUserId(req, res));

router.get(`/api-${sys}/sugarfeed/findOneByCreatedBy/:createdBy`, (req, res) => sugarfeedCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/sugarfeed/findOneByAssignedUserId/:assignedUserId`, (req, res) => sugarfeedCtrl.findOneByAssignedUserId(req, res));

router.get(`/api-${sys}/sugarfeed/findOneByRelatedId/:relatedId`, (req, res) => sugarfeedCtrl.findOneByRelatedId(req, res));



router.post(`/api-${sys}/sugarfeed/updateSugarfeedById`, (req, res) => sugarfeedCtrl.updateSugarfeedById(req, res));

router.post(`/api-${sys}/sugarfeed/updateSugarfeedByDeleted`, (req, res) => sugarfeedCtrl.updateSugarfeedByDeleted(req, res));

router.post(`/api-${sys}/sugarfeed/updateSugarfeedByName`, (req, res) => sugarfeedCtrl.updateSugarfeedByName(req, res));

router.post(`/api-${sys}/sugarfeed/updateSugarfeedByRelatedModule`, (req, res) => sugarfeedCtrl.updateSugarfeedByRelatedModule(req, res));

router.post(`/api-${sys}/sugarfeed/updateSugarfeedByLinkUrl`, (req, res) => sugarfeedCtrl.updateSugarfeedByLinkUrl(req, res));

router.post(`/api-${sys}/sugarfeed/updateSugarfeedByLinkType`, (req, res) => sugarfeedCtrl.updateSugarfeedByLinkType(req, res));

router.post(`/api-${sys}/sugarfeed/updateSugarfeedByDescription`, (req, res) => sugarfeedCtrl.updateSugarfeedByDescription(req, res));

router.post(`/api-${sys}/sugarfeed/updateSugarfeedByDateEntered`, (req, res) => sugarfeedCtrl.updateSugarfeedByDateEntered(req, res));

router.post(`/api-${sys}/sugarfeed/updateSugarfeedByDateModified`, (req, res) => sugarfeedCtrl.updateSugarfeedByDateModified(req, res));

router.post(`/api-${sys}/sugarfeed/updateSugarfeedByModifiedUserId`, (req, res) => sugarfeedCtrl.updateSugarfeedByModifiedUserId(req, res));

router.post(`/api-${sys}/sugarfeed/updateSugarfeedByCreatedBy`, (req, res) => sugarfeedCtrl.updateSugarfeedByCreatedBy(req, res));

router.post(`/api-${sys}/sugarfeed/updateSugarfeedByAssignedUserId`, (req, res) => sugarfeedCtrl.updateSugarfeedByAssignedUserId(req, res));

router.post(`/api-${sys}/sugarfeed/updateSugarfeedByRelatedId`, (req, res) => sugarfeedCtrl.updateSugarfeedByRelatedId(req, res));





router.get(`/api-${sys}/sugarfeed/`, (req, res) => sugarfeedCtrl.getAllSugarfeed(req, res));
router.post(`/api-${sys}/sugarfeed/`, (req, res) => sugarfeedCtrl.addSugarfeed(req, res));
router.get(`/api-${sys}/sugarfeed/:id`, (req, res) => sugarfeedCtrl.getASugarfeed(req, res));
router.put(`/api-${sys}/sugarfeed/:id`, (req, res) => sugarfeedCtrl.updateSugarfeed(req, res));
router.delete(`/api-${sys}/sugarfeed/:id`, (req, res) => sugarfeedCtrl.deleteSugarfeed(req, res));

//</es-section>
module.exports = router;
