/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:20 GMT-0400 (Bolivia Time)
 * Time: 14:57:20
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:20 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:20
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const oauthTokensCtrl = require("../controllers/oauth_tokens.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/oauth-tokens/findOneById/:id`, (req, res) => oauthTokensCtrl.findOneById(req, res));

router.get(`/api-${sys}/oauth-tokens/findOneByDeleted/:deleted`, (req, res) => oauthTokensCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/oauth-tokens/findOneByTokenTs/:tokenTs`, (req, res) => oauthTokensCtrl.findOneByTokenTs(req, res));

router.get(`/api-${sys}/oauth-tokens/findOneBySecret/:secret`, (req, res) => oauthTokensCtrl.findOneBySecret(req, res));

router.get(`/api-${sys}/oauth-tokens/findOneByTstate/:tstate`, (req, res) => oauthTokensCtrl.findOneByTstate(req, res));

router.get(`/api-${sys}/oauth-tokens/findOneByVerify/:verify`, (req, res) => oauthTokensCtrl.findOneByVerify(req, res));

router.get(`/api-${sys}/oauth-tokens/findOneByCallbackUrl/:callbackUrl`, (req, res) => oauthTokensCtrl.findOneByCallbackUrl(req, res));

router.get(`/api-${sys}/oauth-tokens/findOneByConsumer/:consumer`, (req, res) => oauthTokensCtrl.findOneByConsumer(req, res));

router.get(`/api-${sys}/oauth-tokens/findOneByAssignedUserId/:assignedUserId`, (req, res) => oauthTokensCtrl.findOneByAssignedUserId(req, res));



router.post(`/api-${sys}/oauth-tokens/updateOauthTokenById`, (req, res) => oauthTokensCtrl.updateOauthTokenById(req, res));

router.post(`/api-${sys}/oauth-tokens/updateOauthTokenByDeleted`, (req, res) => oauthTokensCtrl.updateOauthTokenByDeleted(req, res));

router.post(`/api-${sys}/oauth-tokens/updateOauthTokenByTokenTs`, (req, res) => oauthTokensCtrl.updateOauthTokenByTokenTs(req, res));

router.post(`/api-${sys}/oauth-tokens/updateOauthTokenBySecret`, (req, res) => oauthTokensCtrl.updateOauthTokenBySecret(req, res));

router.post(`/api-${sys}/oauth-tokens/updateOauthTokenByTstate`, (req, res) => oauthTokensCtrl.updateOauthTokenByTstate(req, res));

router.post(`/api-${sys}/oauth-tokens/updateOauthTokenByVerify`, (req, res) => oauthTokensCtrl.updateOauthTokenByVerify(req, res));

router.post(`/api-${sys}/oauth-tokens/updateOauthTokenByCallbackUrl`, (req, res) => oauthTokensCtrl.updateOauthTokenByCallbackUrl(req, res));

router.post(`/api-${sys}/oauth-tokens/updateOauthTokenByConsumer`, (req, res) => oauthTokensCtrl.updateOauthTokenByConsumer(req, res));

router.post(`/api-${sys}/oauth-tokens/updateOauthTokenByAssignedUserId`, (req, res) => oauthTokensCtrl.updateOauthTokenByAssignedUserId(req, res));





router.get(`/api-${sys}/oauth-tokens/`, (req, res) => oauthTokensCtrl.getAllOauthTokens(req, res));
router.post(`/api-${sys}/oauth-tokens/`, (req, res) => oauthTokensCtrl.addOauthToken(req, res));
router.get(`/api-${sys}/oauth-tokens/:id`, (req, res) => oauthTokensCtrl.getAOauthToken(req, res));
router.put(`/api-${sys}/oauth-tokens/:id`, (req, res) => oauthTokensCtrl.updateOauthToken(req, res));
router.delete(`/api-${sys}/oauth-tokens/:id`, (req, res) => oauthTokensCtrl.deleteOauthToken(req, res));

//</es-section>
module.exports = router;
