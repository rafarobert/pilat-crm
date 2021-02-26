/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:22:46 GMT-0400 (Bolivia Time)
 * Time: 0:22:46
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:22:46 GMT-0400 (Bolivia Time)
 * Last time updated: 0:22:46
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const eapmCtrl = require("../controllers/eapm.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/eapm/findOneById/:id`, (req, res) => eapmCtrl.findOneById(req, res));

router.get(`/api-${sys}/eapm/findOneByDeleted/:deleted`, (req, res) => eapmCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/eapm/findOneByValidated/:validated`, (req, res) => eapmCtrl.findOneByValidated(req, res));

router.get(`/api-${sys}/eapm/findOneByName/:name`, (req, res) => eapmCtrl.findOneByName(req, res));

router.get(`/api-${sys}/eapm/findOneByPassword/:password`, (req, res) => eapmCtrl.findOneByPassword(req, res));

router.get(`/api-${sys}/eapm/findOneByUrl/:url`, (req, res) => eapmCtrl.findOneByUrl(req, res));

router.get(`/api-${sys}/eapm/findOneByApplication/:application`, (req, res) => eapmCtrl.findOneByApplication(req, res));

router.get(`/api-${sys}/eapm/findOneByConsumerKey/:consumerKey`, (req, res) => eapmCtrl.findOneByConsumerKey(req, res));

router.get(`/api-${sys}/eapm/findOneByConsumerSecret/:consumerSecret`, (req, res) => eapmCtrl.findOneByConsumerSecret(req, res));

router.get(`/api-${sys}/eapm/findOneByOauthToken/:oauthToken`, (req, res) => eapmCtrl.findOneByOauthToken(req, res));

router.get(`/api-${sys}/eapm/findOneByOauthSecret/:oauthSecret`, (req, res) => eapmCtrl.findOneByOauthSecret(req, res));

router.get(`/api-${sys}/eapm/findOneByDescription/:description`, (req, res) => eapmCtrl.findOneByDescription(req, res));

router.get(`/api-${sys}/eapm/findOneByApiData/:apiData`, (req, res) => eapmCtrl.findOneByApiData(req, res));

router.get(`/api-${sys}/eapm/findOneByDateEntered/:dateEntered`, (req, res) => eapmCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/eapm/findOneByDateModified/:dateModified`, (req, res) => eapmCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/eapm/findOneByModifiedUserId/:modifiedUserId`, (req, res) => eapmCtrl.findOneByModifiedUserId(req, res));

router.get(`/api-${sys}/eapm/findOneByCreatedBy/:createdBy`, (req, res) => eapmCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/eapm/findOneByAssignedUserId/:assignedUserId`, (req, res) => eapmCtrl.findOneByAssignedUserId(req, res));



router.post(`/api-${sys}/eapm/updateEapmById`, (req, res) => eapmCtrl.updateEapmById(req, res));

router.post(`/api-${sys}/eapm/updateEapmByDeleted`, (req, res) => eapmCtrl.updateEapmByDeleted(req, res));

router.post(`/api-${sys}/eapm/updateEapmByValidated`, (req, res) => eapmCtrl.updateEapmByValidated(req, res));

router.post(`/api-${sys}/eapm/updateEapmByName`, (req, res) => eapmCtrl.updateEapmByName(req, res));

router.post(`/api-${sys}/eapm/updateEapmByPassword`, (req, res) => eapmCtrl.updateEapmByPassword(req, res));

router.post(`/api-${sys}/eapm/updateEapmByUrl`, (req, res) => eapmCtrl.updateEapmByUrl(req, res));

router.post(`/api-${sys}/eapm/updateEapmByApplication`, (req, res) => eapmCtrl.updateEapmByApplication(req, res));

router.post(`/api-${sys}/eapm/updateEapmByConsumerKey`, (req, res) => eapmCtrl.updateEapmByConsumerKey(req, res));

router.post(`/api-${sys}/eapm/updateEapmByConsumerSecret`, (req, res) => eapmCtrl.updateEapmByConsumerSecret(req, res));

router.post(`/api-${sys}/eapm/updateEapmByOauthToken`, (req, res) => eapmCtrl.updateEapmByOauthToken(req, res));

router.post(`/api-${sys}/eapm/updateEapmByOauthSecret`, (req, res) => eapmCtrl.updateEapmByOauthSecret(req, res));

router.post(`/api-${sys}/eapm/updateEapmByDescription`, (req, res) => eapmCtrl.updateEapmByDescription(req, res));

router.post(`/api-${sys}/eapm/updateEapmByApiData`, (req, res) => eapmCtrl.updateEapmByApiData(req, res));

router.post(`/api-${sys}/eapm/updateEapmByDateEntered`, (req, res) => eapmCtrl.updateEapmByDateEntered(req, res));

router.post(`/api-${sys}/eapm/updateEapmByDateModified`, (req, res) => eapmCtrl.updateEapmByDateModified(req, res));

router.post(`/api-${sys}/eapm/updateEapmByModifiedUserId`, (req, res) => eapmCtrl.updateEapmByModifiedUserId(req, res));

router.post(`/api-${sys}/eapm/updateEapmByCreatedBy`, (req, res) => eapmCtrl.updateEapmByCreatedBy(req, res));

router.post(`/api-${sys}/eapm/updateEapmByAssignedUserId`, (req, res) => eapmCtrl.updateEapmByAssignedUserId(req, res));





router.get(`/api-${sys}/eapm/`, (req, res) => eapmCtrl.getAllEapm(req, res));
router.post(`/api-${sys}/eapm/`, (req, res) => eapmCtrl.addEapm(req, res));
router.get(`/api-${sys}/eapm/:id`, (req, res) => eapmCtrl.getAEapm(req, res));
router.put(`/api-${sys}/eapm/:id`, (req, res) => eapmCtrl.updateEapm(req, res));
router.delete(`/api-${sys}/eapm/:id`, (req, res) => eapmCtrl.deleteEapm(req, res));

//</es-section>
module.exports = router;
