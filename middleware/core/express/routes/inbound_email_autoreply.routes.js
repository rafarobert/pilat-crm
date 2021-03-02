/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:59 GMT-0400 (Bolivia Time)
 * Time: 14:0:59
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:59 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:59
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const inboundEmailAutoreplyCtrl = require("../controllers/inbound_email_autoreply.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/inbound-email-autoreply/findOneById/:id`, (req, res) => inboundEmailAutoreplyCtrl.findOneById(req, res));

router.get(`/api-${sys}/inbound-email-autoreply/findOneByDeleted/:deleted`, (req, res) => inboundEmailAutoreplyCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/inbound-email-autoreply/findOneByAutorepliedTo/:autorepliedTo`, (req, res) => inboundEmailAutoreplyCtrl.findOneByAutorepliedTo(req, res));

router.get(`/api-${sys}/inbound-email-autoreply/findOneByDateEntered/:dateEntered`, (req, res) => inboundEmailAutoreplyCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/inbound-email-autoreply/findOneByDateModified/:dateModified`, (req, res) => inboundEmailAutoreplyCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/inbound-email-autoreply/findOneByIeId/:ieId`, (req, res) => inboundEmailAutoreplyCtrl.findOneByIeId(req, res));



router.post(`/api-${sys}/inbound-email-autoreply/updateInboundEmailAutoreplyById`, (req, res) => inboundEmailAutoreplyCtrl.updateInboundEmailAutoreplyById(req, res));

router.post(`/api-${sys}/inbound-email-autoreply/updateInboundEmailAutoreplyByDeleted`, (req, res) => inboundEmailAutoreplyCtrl.updateInboundEmailAutoreplyByDeleted(req, res));

router.post(`/api-${sys}/inbound-email-autoreply/updateInboundEmailAutoreplyByAutorepliedTo`, (req, res) => inboundEmailAutoreplyCtrl.updateInboundEmailAutoreplyByAutorepliedTo(req, res));

router.post(`/api-${sys}/inbound-email-autoreply/updateInboundEmailAutoreplyByDateEntered`, (req, res) => inboundEmailAutoreplyCtrl.updateInboundEmailAutoreplyByDateEntered(req, res));

router.post(`/api-${sys}/inbound-email-autoreply/updateInboundEmailAutoreplyByDateModified`, (req, res) => inboundEmailAutoreplyCtrl.updateInboundEmailAutoreplyByDateModified(req, res));

router.post(`/api-${sys}/inbound-email-autoreply/updateInboundEmailAutoreplyByIeId`, (req, res) => inboundEmailAutoreplyCtrl.updateInboundEmailAutoreplyByIeId(req, res));





router.get(`/api-${sys}/inbound-email-autoreply/`, (req, res) => inboundEmailAutoreplyCtrl.getAllInboundEmailAutoreply(req, res));
router.post(`/api-${sys}/inbound-email-autoreply/`, (req, res) => inboundEmailAutoreplyCtrl.addInboundEmailAutoreply(req, res));
router.get(`/api-${sys}/inbound-email-autoreply/:id`, (req, res) => inboundEmailAutoreplyCtrl.getAInboundEmailAutoreply(req, res));
router.put(`/api-${sys}/inbound-email-autoreply/:id`, (req, res) => inboundEmailAutoreplyCtrl.updateInboundEmailAutoreply(req, res));
router.delete(`/api-${sys}/inbound-email-autoreply/:id`, (req, res) => inboundEmailAutoreplyCtrl.deleteInboundEmailAutoreply(req, res));

//</es-section>
module.exports = router;
