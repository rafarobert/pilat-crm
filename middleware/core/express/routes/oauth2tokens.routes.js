/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:36:35 GMT-0400 (Bolivia Time)
 * Time: 15:36:35
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:36:35 GMT-0400 (Bolivia Time)
 * Last time updated: 15:36:35
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const oauth2tokensCtrl = require("../controllers/oauth2tokens.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/oauth2tokens/findOneById/:id`, (req, res) => oauth2tokensCtrl.findOneById(req, res));

router.get(`/api-${sys}/oauth2tokens/findOneByDeleted/:deleted`, (req, res) => oauth2tokensCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/oauth2tokens/findOneByTokenIsRevoked/:tokenIsRevoked`, (req, res) => oauth2tokensCtrl.findOneByTokenIsRevoked(req, res));

router.get(`/api-${sys}/oauth2tokens/findOneByName/:name`, (req, res) => oauth2tokensCtrl.findOneByName(req, res));

router.get(`/api-${sys}/oauth2tokens/findOneByTokenType/:tokenType`, (req, res) => oauth2tokensCtrl.findOneByTokenType(req, res));

router.get(`/api-${sys}/oauth2tokens/findOneByAccessToken/:accessToken`, (req, res) => oauth2tokensCtrl.findOneByAccessToken(req, res));

router.get(`/api-${sys}/oauth2tokens/findOneByRefreshToken/:refreshToken`, (req, res) => oauth2tokensCtrl.findOneByRefreshToken(req, res));

router.get(`/api-${sys}/oauth2tokens/findOneByGrantType/:grantType`, (req, res) => oauth2tokensCtrl.findOneByGrantType(req, res));

router.get(`/api-${sys}/oauth2tokens/findOneByState/:state`, (req, res) => oauth2tokensCtrl.findOneByState(req, res));

router.get(`/api-${sys}/oauth2tokens/findOneByDescription/:description`, (req, res) => oauth2tokensCtrl.findOneByDescription(req, res));

router.get(`/api-${sys}/oauth2tokens/findOneByDateEntered/:dateEntered`, (req, res) => oauth2tokensCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/oauth2tokens/findOneByDateModified/:dateModified`, (req, res) => oauth2tokensCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/oauth2tokens/findOneByAccessTokenExpires/:accessTokenExpires`, (req, res) => oauth2tokensCtrl.findOneByAccessTokenExpires(req, res));

router.get(`/api-${sys}/oauth2tokens/findOneByRefreshTokenExpires/:refreshTokenExpires`, (req, res) => oauth2tokensCtrl.findOneByRefreshTokenExpires(req, res));

router.get(`/api-${sys}/oauth2tokens/findOneByModifiedUserId/:modifiedUserId`, (req, res) => oauth2tokensCtrl.findOneByModifiedUserId(req, res));

router.get(`/api-${sys}/oauth2tokens/findOneByCreatedBy/:createdBy`, (req, res) => oauth2tokensCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/oauth2tokens/findOneByClient/:client`, (req, res) => oauth2tokensCtrl.findOneByClient(req, res));

router.get(`/api-${sys}/oauth2tokens/findOneByAssignedUserId/:assignedUserId`, (req, res) => oauth2tokensCtrl.findOneByAssignedUserId(req, res));



router.post(`/api-${sys}/oauth2tokens/updateOauth2tokenById`, (req, res) => oauth2tokensCtrl.updateOauth2tokenById(req, res));

router.post(`/api-${sys}/oauth2tokens/updateOauth2tokenByDeleted`, (req, res) => oauth2tokensCtrl.updateOauth2tokenByDeleted(req, res));

router.post(`/api-${sys}/oauth2tokens/updateOauth2tokenByTokenIsRevoked`, (req, res) => oauth2tokensCtrl.updateOauth2tokenByTokenIsRevoked(req, res));

router.post(`/api-${sys}/oauth2tokens/updateOauth2tokenByName`, (req, res) => oauth2tokensCtrl.updateOauth2tokenByName(req, res));

router.post(`/api-${sys}/oauth2tokens/updateOauth2tokenByTokenType`, (req, res) => oauth2tokensCtrl.updateOauth2tokenByTokenType(req, res));

router.post(`/api-${sys}/oauth2tokens/updateOauth2tokenByAccessToken`, (req, res) => oauth2tokensCtrl.updateOauth2tokenByAccessToken(req, res));

router.post(`/api-${sys}/oauth2tokens/updateOauth2tokenByRefreshToken`, (req, res) => oauth2tokensCtrl.updateOauth2tokenByRefreshToken(req, res));

router.post(`/api-${sys}/oauth2tokens/updateOauth2tokenByGrantType`, (req, res) => oauth2tokensCtrl.updateOauth2tokenByGrantType(req, res));

router.post(`/api-${sys}/oauth2tokens/updateOauth2tokenByState`, (req, res) => oauth2tokensCtrl.updateOauth2tokenByState(req, res));

router.post(`/api-${sys}/oauth2tokens/updateOauth2tokenByDescription`, (req, res) => oauth2tokensCtrl.updateOauth2tokenByDescription(req, res));

router.post(`/api-${sys}/oauth2tokens/updateOauth2tokenByDateEntered`, (req, res) => oauth2tokensCtrl.updateOauth2tokenByDateEntered(req, res));

router.post(`/api-${sys}/oauth2tokens/updateOauth2tokenByDateModified`, (req, res) => oauth2tokensCtrl.updateOauth2tokenByDateModified(req, res));

router.post(`/api-${sys}/oauth2tokens/updateOauth2tokenByAccessTokenExpires`, (req, res) => oauth2tokensCtrl.updateOauth2tokenByAccessTokenExpires(req, res));

router.post(`/api-${sys}/oauth2tokens/updateOauth2tokenByRefreshTokenExpires`, (req, res) => oauth2tokensCtrl.updateOauth2tokenByRefreshTokenExpires(req, res));

router.post(`/api-${sys}/oauth2tokens/updateOauth2tokenByModifiedUserId`, (req, res) => oauth2tokensCtrl.updateOauth2tokenByModifiedUserId(req, res));

router.post(`/api-${sys}/oauth2tokens/updateOauth2tokenByCreatedBy`, (req, res) => oauth2tokensCtrl.updateOauth2tokenByCreatedBy(req, res));

router.post(`/api-${sys}/oauth2tokens/updateOauth2tokenByClient`, (req, res) => oauth2tokensCtrl.updateOauth2tokenByClient(req, res));

router.post(`/api-${sys}/oauth2tokens/updateOauth2tokenByAssignedUserId`, (req, res) => oauth2tokensCtrl.updateOauth2tokenByAssignedUserId(req, res));





router.get(`/api-${sys}/oauth2tokens/`, (req, res) => oauth2tokensCtrl.getAllOauth2tokens(req, res));
router.post(`/api-${sys}/oauth2tokens/`, (req, res) => oauth2tokensCtrl.addOauth2token(req, res));
router.get(`/api-${sys}/oauth2tokens/:id`, (req, res) => oauth2tokensCtrl.getAOauth2token(req, res));
router.put(`/api-${sys}/oauth2tokens/:id`, (req, res) => oauth2tokensCtrl.updateOauth2token(req, res));
router.delete(`/api-${sys}/oauth2tokens/:id`, (req, res) => oauth2tokensCtrl.deleteOauth2token(req, res));

//</es-section>
module.exports = router;
