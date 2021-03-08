/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:36:20 GMT-0400 (Bolivia Time)
 * Time: 15:36:20
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:36:20 GMT-0400 (Bolivia Time)
 * Last time updated: 15:36:20
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const inboundEmailCacheTsCtrl = require("../controllers/inbound_email_cache_ts.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/inbound-email-cache-ts/findOneById/:id`, (req, res) => inboundEmailCacheTsCtrl.findOneById(req, res));

router.get(`/api-${sys}/inbound-email-cache-ts/findOneByIeTimestamp/:ieTimestamp`, (req, res) => inboundEmailCacheTsCtrl.findOneByIeTimestamp(req, res));



router.post(`/api-${sys}/inbound-email-cache-ts/updateInboundEmailCacheTById`, (req, res) => inboundEmailCacheTsCtrl.updateInboundEmailCacheTById(req, res));

router.post(`/api-${sys}/inbound-email-cache-ts/updateInboundEmailCacheTByIeTimestamp`, (req, res) => inboundEmailCacheTsCtrl.updateInboundEmailCacheTByIeTimestamp(req, res));





router.get(`/api-${sys}/inbound-email-cache-ts/`, (req, res) => inboundEmailCacheTsCtrl.getAllInboundEmailCacheTs(req, res));
router.post(`/api-${sys}/inbound-email-cache-ts/`, (req, res) => inboundEmailCacheTsCtrl.addInboundEmailCacheT(req, res));
router.get(`/api-${sys}/inbound-email-cache-ts/:id`, (req, res) => inboundEmailCacheTsCtrl.getAInboundEmailCacheT(req, res));
router.put(`/api-${sys}/inbound-email-cache-ts/:id`, (req, res) => inboundEmailCacheTsCtrl.updateInboundEmailCacheT(req, res));
router.delete(`/api-${sys}/inbound-email-cache-ts/:id`, (req, res) => inboundEmailCacheTsCtrl.deleteInboundEmailCacheT(req, res));

//</es-section>
module.exports = router;
