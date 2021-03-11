/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:19 GMT-0400 (Bolivia Time)
 * Time: 14:57:19
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:19 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:19
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const oauthConsumerCtrl = require("../controllers/oauth_consumer.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/oauth-consumer/findOneById/:id`, (req, res) => oauthConsumerCtrl.findOneById(req, res));

router.get(`/api-${sys}/oauth-consumer/findOneByDeleted/:deleted`, (req, res) => oauthConsumerCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/oauth-consumer/findOneByName/:name`, (req, res) => oauthConsumerCtrl.findOneByName(req, res));

router.get(`/api-${sys}/oauth-consumer/findOneByCKey/:cKey`, (req, res) => oauthConsumerCtrl.findOneByCKey(req, res));

router.get(`/api-${sys}/oauth-consumer/findOneByCSecret/:cSecret`, (req, res) => oauthConsumerCtrl.findOneByCSecret(req, res));

router.get(`/api-${sys}/oauth-consumer/findOneByDescription/:description`, (req, res) => oauthConsumerCtrl.findOneByDescription(req, res));

router.get(`/api-${sys}/oauth-consumer/findOneByDateEntered/:dateEntered`, (req, res) => oauthConsumerCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/oauth-consumer/findOneByDateModified/:dateModified`, (req, res) => oauthConsumerCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/oauth-consumer/findOneByModifiedUserId/:modifiedUserId`, (req, res) => oauthConsumerCtrl.findOneByModifiedUserId(req, res));

router.get(`/api-${sys}/oauth-consumer/findOneByCreatedBy/:createdBy`, (req, res) => oauthConsumerCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/oauth-consumer/findOneByAssignedUserId/:assignedUserId`, (req, res) => oauthConsumerCtrl.findOneByAssignedUserId(req, res));



router.post(`/api-${sys}/oauth-consumer/updateOauthConsumerById`, (req, res) => oauthConsumerCtrl.updateOauthConsumerById(req, res));

router.post(`/api-${sys}/oauth-consumer/updateOauthConsumerByDeleted`, (req, res) => oauthConsumerCtrl.updateOauthConsumerByDeleted(req, res));

router.post(`/api-${sys}/oauth-consumer/updateOauthConsumerByName`, (req, res) => oauthConsumerCtrl.updateOauthConsumerByName(req, res));

router.post(`/api-${sys}/oauth-consumer/updateOauthConsumerByCKey`, (req, res) => oauthConsumerCtrl.updateOauthConsumerByCKey(req, res));

router.post(`/api-${sys}/oauth-consumer/updateOauthConsumerByCSecret`, (req, res) => oauthConsumerCtrl.updateOauthConsumerByCSecret(req, res));

router.post(`/api-${sys}/oauth-consumer/updateOauthConsumerByDescription`, (req, res) => oauthConsumerCtrl.updateOauthConsumerByDescription(req, res));

router.post(`/api-${sys}/oauth-consumer/updateOauthConsumerByDateEntered`, (req, res) => oauthConsumerCtrl.updateOauthConsumerByDateEntered(req, res));

router.post(`/api-${sys}/oauth-consumer/updateOauthConsumerByDateModified`, (req, res) => oauthConsumerCtrl.updateOauthConsumerByDateModified(req, res));

router.post(`/api-${sys}/oauth-consumer/updateOauthConsumerByModifiedUserId`, (req, res) => oauthConsumerCtrl.updateOauthConsumerByModifiedUserId(req, res));

router.post(`/api-${sys}/oauth-consumer/updateOauthConsumerByCreatedBy`, (req, res) => oauthConsumerCtrl.updateOauthConsumerByCreatedBy(req, res));

router.post(`/api-${sys}/oauth-consumer/updateOauthConsumerByAssignedUserId`, (req, res) => oauthConsumerCtrl.updateOauthConsumerByAssignedUserId(req, res));





router.get(`/api-${sys}/oauth-consumer/`, (req, res) => oauthConsumerCtrl.getAllOauthConsumer(req, res));
router.post(`/api-${sys}/oauth-consumer/`, (req, res) => oauthConsumerCtrl.addOauthConsumer(req, res));
router.get(`/api-${sys}/oauth-consumer/:id`, (req, res) => oauthConsumerCtrl.getAOauthConsumer(req, res));
router.put(`/api-${sys}/oauth-consumer/:id`, (req, res) => oauthConsumerCtrl.updateOauthConsumer(req, res));
router.delete(`/api-${sys}/oauth-consumer/:id`, (req, res) => oauthConsumerCtrl.deleteOauthConsumer(req, res));

//</es-section>
module.exports = router;
