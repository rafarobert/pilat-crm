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
const oauthNonceCtrl = require("../controllers/oauth_nonce.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/oauth-nonce/findOneByConskey/:conskey`, (req, res) => oauthNonceCtrl.findOneByConskey(req, res));

router.get(`/api-${sys}/oauth-nonce/findOneByNonce/:nonce`, (req, res) => oauthNonceCtrl.findOneByNonce(req, res));

router.get(`/api-${sys}/oauth-nonce/findOneByNonceTs/:nonceTs`, (req, res) => oauthNonceCtrl.findOneByNonceTs(req, res));



router.post(`/api-${sys}/oauth-nonce/updateOauthNonceByConskey`, (req, res) => oauthNonceCtrl.updateOauthNonceByConskey(req, res));

router.post(`/api-${sys}/oauth-nonce/updateOauthNonceByNonce`, (req, res) => oauthNonceCtrl.updateOauthNonceByNonce(req, res));

router.post(`/api-${sys}/oauth-nonce/updateOauthNonceByNonceTs`, (req, res) => oauthNonceCtrl.updateOauthNonceByNonceTs(req, res));





router.get(`/api-${sys}/oauth-nonce/`, (req, res) => oauthNonceCtrl.getAllOauthNonce(req, res));
router.post(`/api-${sys}/datatable/oauth-nonce/`, (req, res) => oauthNonceCtrl.getAllOauthNonce(req, res));
router.post(`/api-${sys}/oauth-nonce/`, (req, res) => oauthNonceCtrl.addOauthNonce(req, res));
router.get(`/api-${sys}/oauth-nonce/:nonce`, (req, res) => oauthNonceCtrl.getAOauthNonce(req, res));
router.put(`/api-${sys}/oauth-nonce/:nonce`, (req, res) => oauthNonceCtrl.updateOauthNonce(req, res));
router.delete(`/api-${sys}/oauth-nonce/:nonce`, (req, res) => oauthNonceCtrl.deleteOauthNonce(req, res));

//</es-section>
module.exports = router;
