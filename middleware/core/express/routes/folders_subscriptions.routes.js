/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:37:17 GMT-0400 (Bolivia Time)
 * Time: 18:37:17
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:37:17 GMT-0400 (Bolivia Time)
 * Last time updated: 18:37:17
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const foldersSubscriptionsCtrl = require("../controllers/folders_subscriptions.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/folders-subscriptions/findOneById/:id`, (req, res) => foldersSubscriptionsCtrl.findOneById(req, res));

router.get(`/api-${sys}/folders-subscriptions/findOneByFolderId/:folderId`, (req, res) => foldersSubscriptionsCtrl.findOneByFolderId(req, res));

router.get(`/api-${sys}/folders-subscriptions/findOneByAssignedUserId/:assignedUserId`, (req, res) => foldersSubscriptionsCtrl.findOneByAssignedUserId(req, res));



router.post(`/api-${sys}/folders-subscriptions/updateFolderSubscriptionById`, (req, res) => foldersSubscriptionsCtrl.updateFolderSubscriptionById(req, res));

router.post(`/api-${sys}/folders-subscriptions/updateFolderSubscriptionByFolderId`, (req, res) => foldersSubscriptionsCtrl.updateFolderSubscriptionByFolderId(req, res));

router.post(`/api-${sys}/folders-subscriptions/updateFolderSubscriptionByAssignedUserId`, (req, res) => foldersSubscriptionsCtrl.updateFolderSubscriptionByAssignedUserId(req, res));





router.get(`/api-${sys}/folders-subscriptions/`, (req, res) => foldersSubscriptionsCtrl.getAllFoldersSubscriptions(req, res));
router.post(`/api-${sys}/folders-subscriptions/`, (req, res) => foldersSubscriptionsCtrl.addFolderSubscription(req, res));
router.get(`/api-${sys}/folders-subscriptions/:id`, (req, res) => foldersSubscriptionsCtrl.getAFolderSubscription(req, res));
router.put(`/api-${sys}/folders-subscriptions/:id`, (req, res) => foldersSubscriptionsCtrl.updateFolderSubscription(req, res));
router.delete(`/api-${sys}/folders-subscriptions/:id`, (req, res) => foldersSubscriptionsCtrl.deleteFolderSubscription(req, res));

//</es-section>
module.exports = router;
