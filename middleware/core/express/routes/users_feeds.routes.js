/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:37:13 GMT-0400 (Bolivia Time)
 * Time: 15:37:13
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:37:13 GMT-0400 (Bolivia Time)
 * Last time updated: 15:37:13
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const usersFeedsCtrl = require("../controllers/users_feeds.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/users-feeds/findOneByDeleted/:deleted`, (req, res) => usersFeedsCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/users-feeds/findOneByRank/:rank`, (req, res) => usersFeedsCtrl.findOneByRank(req, res));

router.get(`/api-${sys}/users-feeds/findOneByUserId/:userId`, (req, res) => usersFeedsCtrl.findOneByUserId(req, res));

router.get(`/api-${sys}/users-feeds/findOneByFeedId/:feedId`, (req, res) => usersFeedsCtrl.findOneByFeedId(req, res));

router.get(`/api-${sys}/users-feeds/findOneByDateModified/:dateModified`, (req, res) => usersFeedsCtrl.findOneByDateModified(req, res));



router.post(`/api-${sys}/users-feeds/updateUserFeedByDeleted`, (req, res) => usersFeedsCtrl.updateUserFeedByDeleted(req, res));

router.post(`/api-${sys}/users-feeds/updateUserFeedByRank`, (req, res) => usersFeedsCtrl.updateUserFeedByRank(req, res));

router.post(`/api-${sys}/users-feeds/updateUserFeedByUserId`, (req, res) => usersFeedsCtrl.updateUserFeedByUserId(req, res));

router.post(`/api-${sys}/users-feeds/updateUserFeedByFeedId`, (req, res) => usersFeedsCtrl.updateUserFeedByFeedId(req, res));

router.post(`/api-${sys}/users-feeds/updateUserFeedByDateModified`, (req, res) => usersFeedsCtrl.updateUserFeedByDateModified(req, res));





//</es-section>
module.exports = router;
