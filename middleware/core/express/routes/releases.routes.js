/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:38:33 GMT-0400 (Bolivia Time)
 * Time: 18:38:33
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:38:33 GMT-0400 (Bolivia Time)
 * Last time updated: 18:38:33
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const releasesCtrl = require("../controllers/releases.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/releases/findOneById/:id`, (req, res) => releasesCtrl.findOneById(req, res));

router.get(`/api-${sys}/releases/findOneByDeleted/:deleted`, (req, res) => releasesCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/releases/findOneByListOrder/:listOrder`, (req, res) => releasesCtrl.findOneByListOrder(req, res));

router.get(`/api-${sys}/releases/findOneByName/:name`, (req, res) => releasesCtrl.findOneByName(req, res));

router.get(`/api-${sys}/releases/findOneByStatus/:status`, (req, res) => releasesCtrl.findOneByStatus(req, res));

router.get(`/api-${sys}/releases/findOneByDateEntered/:dateEntered`, (req, res) => releasesCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/releases/findOneByDateModified/:dateModified`, (req, res) => releasesCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/releases/findOneByModifiedUserId/:modifiedUserId`, (req, res) => releasesCtrl.findOneByModifiedUserId(req, res));

router.get(`/api-${sys}/releases/findOneByCreatedBy/:createdBy`, (req, res) => releasesCtrl.findOneByCreatedBy(req, res));



router.post(`/api-${sys}/releases/updateReleaseById`, (req, res) => releasesCtrl.updateReleaseById(req, res));

router.post(`/api-${sys}/releases/updateReleaseByDeleted`, (req, res) => releasesCtrl.updateReleaseByDeleted(req, res));

router.post(`/api-${sys}/releases/updateReleaseByListOrder`, (req, res) => releasesCtrl.updateReleaseByListOrder(req, res));

router.post(`/api-${sys}/releases/updateReleaseByName`, (req, res) => releasesCtrl.updateReleaseByName(req, res));

router.post(`/api-${sys}/releases/updateReleaseByStatus`, (req, res) => releasesCtrl.updateReleaseByStatus(req, res));

router.post(`/api-${sys}/releases/updateReleaseByDateEntered`, (req, res) => releasesCtrl.updateReleaseByDateEntered(req, res));

router.post(`/api-${sys}/releases/updateReleaseByDateModified`, (req, res) => releasesCtrl.updateReleaseByDateModified(req, res));

router.post(`/api-${sys}/releases/updateReleaseByModifiedUserId`, (req, res) => releasesCtrl.updateReleaseByModifiedUserId(req, res));

router.post(`/api-${sys}/releases/updateReleaseByCreatedBy`, (req, res) => releasesCtrl.updateReleaseByCreatedBy(req, res));





router.get(`/api-${sys}/releases/`, (req, res) => releasesCtrl.getAllReleases(req, res));
router.post(`/api-${sys}/releases/`, (req, res) => releasesCtrl.addRelease(req, res));
router.get(`/api-${sys}/releases/:id`, (req, res) => releasesCtrl.getARelease(req, res));
router.put(`/api-${sys}/releases/:id`, (req, res) => releasesCtrl.updateRelease(req, res));
router.delete(`/api-${sys}/releases/:id`, (req, res) => releasesCtrl.deleteRelease(req, res));

//</es-section>
module.exports = router;
