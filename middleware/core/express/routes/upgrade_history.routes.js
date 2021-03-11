/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:52 GMT-0400 (Bolivia Time)
 * Time: 14:57:52
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:52 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:52
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const upgradeHistoryCtrl = require("../controllers/upgrade_history.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/upgrade-history/findOneById/:id`, (req, res) => upgradeHistoryCtrl.findOneById(req, res));

router.get(`/api-${sys}/upgrade-history/findOneByEnabled/:enabled`, (req, res) => upgradeHistoryCtrl.findOneByEnabled(req, res));

router.get(`/api-${sys}/upgrade-history/findOneByFilename/:filename`, (req, res) => upgradeHistoryCtrl.findOneByFilename(req, res));

router.get(`/api-${sys}/upgrade-history/findOneByMd5sum/:md5sum`, (req, res) => upgradeHistoryCtrl.findOneByMd5sum(req, res));

router.get(`/api-${sys}/upgrade-history/findOneByType/:type`, (req, res) => upgradeHistoryCtrl.findOneByType(req, res));

router.get(`/api-${sys}/upgrade-history/findOneByStatus/:status`, (req, res) => upgradeHistoryCtrl.findOneByStatus(req, res));

router.get(`/api-${sys}/upgrade-history/findOneByVersion/:version`, (req, res) => upgradeHistoryCtrl.findOneByVersion(req, res));

router.get(`/api-${sys}/upgrade-history/findOneByName/:name`, (req, res) => upgradeHistoryCtrl.findOneByName(req, res));

router.get(`/api-${sys}/upgrade-history/findOneByIdName/:idName`, (req, res) => upgradeHistoryCtrl.findOneByIdName(req, res));

router.get(`/api-${sys}/upgrade-history/findOneByDescription/:description`, (req, res) => upgradeHistoryCtrl.findOneByDescription(req, res));

router.get(`/api-${sys}/upgrade-history/findOneByManifest/:manifest`, (req, res) => upgradeHistoryCtrl.findOneByManifest(req, res));

router.get(`/api-${sys}/upgrade-history/findOneByDateEntered/:dateEntered`, (req, res) => upgradeHistoryCtrl.findOneByDateEntered(req, res));



router.post(`/api-${sys}/upgrade-history/updateUpgradeHistoryById`, (req, res) => upgradeHistoryCtrl.updateUpgradeHistoryById(req, res));

router.post(`/api-${sys}/upgrade-history/updateUpgradeHistoryByEnabled`, (req, res) => upgradeHistoryCtrl.updateUpgradeHistoryByEnabled(req, res));

router.post(`/api-${sys}/upgrade-history/updateUpgradeHistoryByFilename`, (req, res) => upgradeHistoryCtrl.updateUpgradeHistoryByFilename(req, res));

router.post(`/api-${sys}/upgrade-history/updateUpgradeHistoryByMd5sum`, (req, res) => upgradeHistoryCtrl.updateUpgradeHistoryByMd5sum(req, res));

router.post(`/api-${sys}/upgrade-history/updateUpgradeHistoryByType`, (req, res) => upgradeHistoryCtrl.updateUpgradeHistoryByType(req, res));

router.post(`/api-${sys}/upgrade-history/updateUpgradeHistoryByStatus`, (req, res) => upgradeHistoryCtrl.updateUpgradeHistoryByStatus(req, res));

router.post(`/api-${sys}/upgrade-history/updateUpgradeHistoryByVersion`, (req, res) => upgradeHistoryCtrl.updateUpgradeHistoryByVersion(req, res));

router.post(`/api-${sys}/upgrade-history/updateUpgradeHistoryByName`, (req, res) => upgradeHistoryCtrl.updateUpgradeHistoryByName(req, res));

router.post(`/api-${sys}/upgrade-history/updateUpgradeHistoryByIdName`, (req, res) => upgradeHistoryCtrl.updateUpgradeHistoryByIdName(req, res));

router.post(`/api-${sys}/upgrade-history/updateUpgradeHistoryByDescription`, (req, res) => upgradeHistoryCtrl.updateUpgradeHistoryByDescription(req, res));

router.post(`/api-${sys}/upgrade-history/updateUpgradeHistoryByManifest`, (req, res) => upgradeHistoryCtrl.updateUpgradeHistoryByManifest(req, res));

router.post(`/api-${sys}/upgrade-history/updateUpgradeHistoryByDateEntered`, (req, res) => upgradeHistoryCtrl.updateUpgradeHistoryByDateEntered(req, res));





router.get(`/api-${sys}/upgrade-history/`, (req, res) => upgradeHistoryCtrl.getAllUpgradeHistory(req, res));
router.post(`/api-${sys}/upgrade-history/`, (req, res) => upgradeHistoryCtrl.addUpgradeHistory(req, res));
router.get(`/api-${sys}/upgrade-history/:id`, (req, res) => upgradeHistoryCtrl.getAUpgradeHistory(req, res));
router.put(`/api-${sys}/upgrade-history/:id`, (req, res) => upgradeHistoryCtrl.updateUpgradeHistory(req, res));
router.delete(`/api-${sys}/upgrade-history/:id`, (req, res) => upgradeHistoryCtrl.deleteUpgradeHistory(req, res));

//</es-section>
module.exports = router;
