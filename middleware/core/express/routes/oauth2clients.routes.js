/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:01:10 GMT-0400 (Bolivia Time)
 * Time: 14:1:10
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:01:10 GMT-0400 (Bolivia Time)
 * Last time updated: 14:1:10
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const oauth2clientsCtrl = require("../controllers/oauth2clients.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/oauth2clients/findOneById/:id`, (req, res) => oauth2clientsCtrl.findOneById(req, res));

router.get(`/api-${sys}/oauth2clients/findOneByDeleted/:deleted`, (req, res) => oauth2clientsCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/oauth2clients/findOneByIsConfidential/:isConfidential`, (req, res) => oauth2clientsCtrl.findOneByIsConfidential(req, res));

router.get(`/api-${sys}/oauth2clients/findOneByDurationValue/:durationValue`, (req, res) => oauth2clientsCtrl.findOneByDurationValue(req, res));

router.get(`/api-${sys}/oauth2clients/findOneByDurationAmount/:durationAmount`, (req, res) => oauth2clientsCtrl.findOneByDurationAmount(req, res));

router.get(`/api-${sys}/oauth2clients/findOneByName/:name`, (req, res) => oauth2clientsCtrl.findOneByName(req, res));

router.get(`/api-${sys}/oauth2clients/findOneBySecret/:secret`, (req, res) => oauth2clientsCtrl.findOneBySecret(req, res));

router.get(`/api-${sys}/oauth2clients/findOneByRedirectUrl/:redirectUrl`, (req, res) => oauth2clientsCtrl.findOneByRedirectUrl(req, res));

router.get(`/api-${sys}/oauth2clients/findOneByAllowedGrantType/:allowedGrantType`, (req, res) => oauth2clientsCtrl.findOneByAllowedGrantType(req, res));

router.get(`/api-${sys}/oauth2clients/findOneByDurationUnit/:durationUnit`, (req, res) => oauth2clientsCtrl.findOneByDurationUnit(req, res));

router.get(`/api-${sys}/oauth2clients/findOneByDescription/:description`, (req, res) => oauth2clientsCtrl.findOneByDescription(req, res));

router.get(`/api-${sys}/oauth2clients/findOneByDateEntered/:dateEntered`, (req, res) => oauth2clientsCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/oauth2clients/findOneByDateModified/:dateModified`, (req, res) => oauth2clientsCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/oauth2clients/findOneByModifiedUserId/:modifiedUserId`, (req, res) => oauth2clientsCtrl.findOneByModifiedUserId(req, res));

router.get(`/api-${sys}/oauth2clients/findOneByCreatedBy/:createdBy`, (req, res) => oauth2clientsCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/oauth2clients/findOneByAssignedUserId/:assignedUserId`, (req, res) => oauth2clientsCtrl.findOneByAssignedUserId(req, res));



router.post(`/api-${sys}/oauth2clients/updateOauth2clientById`, (req, res) => oauth2clientsCtrl.updateOauth2clientById(req, res));

router.post(`/api-${sys}/oauth2clients/updateOauth2clientByDeleted`, (req, res) => oauth2clientsCtrl.updateOauth2clientByDeleted(req, res));

router.post(`/api-${sys}/oauth2clients/updateOauth2clientByIsConfidential`, (req, res) => oauth2clientsCtrl.updateOauth2clientByIsConfidential(req, res));

router.post(`/api-${sys}/oauth2clients/updateOauth2clientByDurationValue`, (req, res) => oauth2clientsCtrl.updateOauth2clientByDurationValue(req, res));

router.post(`/api-${sys}/oauth2clients/updateOauth2clientByDurationAmount`, (req, res) => oauth2clientsCtrl.updateOauth2clientByDurationAmount(req, res));

router.post(`/api-${sys}/oauth2clients/updateOauth2clientByName`, (req, res) => oauth2clientsCtrl.updateOauth2clientByName(req, res));

router.post(`/api-${sys}/oauth2clients/updateOauth2clientBySecret`, (req, res) => oauth2clientsCtrl.updateOauth2clientBySecret(req, res));

router.post(`/api-${sys}/oauth2clients/updateOauth2clientByRedirectUrl`, (req, res) => oauth2clientsCtrl.updateOauth2clientByRedirectUrl(req, res));

router.post(`/api-${sys}/oauth2clients/updateOauth2clientByAllowedGrantType`, (req, res) => oauth2clientsCtrl.updateOauth2clientByAllowedGrantType(req, res));

router.post(`/api-${sys}/oauth2clients/updateOauth2clientByDurationUnit`, (req, res) => oauth2clientsCtrl.updateOauth2clientByDurationUnit(req, res));

router.post(`/api-${sys}/oauth2clients/updateOauth2clientByDescription`, (req, res) => oauth2clientsCtrl.updateOauth2clientByDescription(req, res));

router.post(`/api-${sys}/oauth2clients/updateOauth2clientByDateEntered`, (req, res) => oauth2clientsCtrl.updateOauth2clientByDateEntered(req, res));

router.post(`/api-${sys}/oauth2clients/updateOauth2clientByDateModified`, (req, res) => oauth2clientsCtrl.updateOauth2clientByDateModified(req, res));

router.post(`/api-${sys}/oauth2clients/updateOauth2clientByModifiedUserId`, (req, res) => oauth2clientsCtrl.updateOauth2clientByModifiedUserId(req, res));

router.post(`/api-${sys}/oauth2clients/updateOauth2clientByCreatedBy`, (req, res) => oauth2clientsCtrl.updateOauth2clientByCreatedBy(req, res));

router.post(`/api-${sys}/oauth2clients/updateOauth2clientByAssignedUserId`, (req, res) => oauth2clientsCtrl.updateOauth2clientByAssignedUserId(req, res));





router.get(`/api-${sys}/oauth2clients/`, (req, res) => oauth2clientsCtrl.getAllOauth2clients(req, res));
router.post(`/api-${sys}/oauth2clients/`, (req, res) => oauth2clientsCtrl.addOauth2client(req, res));
router.get(`/api-${sys}/oauth2clients/:id`, (req, res) => oauth2clientsCtrl.getAOauth2client(req, res));
router.put(`/api-${sys}/oauth2clients/:id`, (req, res) => oauth2clientsCtrl.updateOauth2client(req, res));
router.delete(`/api-${sys}/oauth2clients/:id`, (req, res) => oauth2clientsCtrl.deleteOauth2client(req, res));

//</es-section>
module.exports = router;
