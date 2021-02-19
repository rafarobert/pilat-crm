/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:43:43 GMT-0400 (Bolivia Time)
 * Time: 4:43:43
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:43:43 GMT-0400 (Bolivia Time)
 * Last time updated: 4:43:43
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const outboundEmailCtrl = require("../controllers/outbound_email.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/outbound-email/findOneById/:id`, (req, res) => outboundEmailCtrl.findOneById(req, res));

router.get(`/api-${sys}/outbound-email/findOneByMailSmtpauthReq/:mailSmtpauthReq`, (req, res) => outboundEmailCtrl.findOneByMailSmtpauthReq(req, res));

router.get(`/api-${sys}/outbound-email/findOneByDeleted/:deleted`, (req, res) => outboundEmailCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/outbound-email/findOneByName/:name`, (req, res) => outboundEmailCtrl.findOneByName(req, res));

router.get(`/api-${sys}/outbound-email/findOneByType/:type`, (req, res) => outboundEmailCtrl.findOneByType(req, res));

router.get(`/api-${sys}/outbound-email/findOneBySmtpFromName/:smtpFromName`, (req, res) => outboundEmailCtrl.findOneBySmtpFromName(req, res));

router.get(`/api-${sys}/outbound-email/findOneBySmtpFromAddr/:smtpFromAddr`, (req, res) => outboundEmailCtrl.findOneBySmtpFromAddr(req, res));

router.get(`/api-${sys}/outbound-email/findOneByMailSendtype/:mailSendtype`, (req, res) => outboundEmailCtrl.findOneByMailSendtype(req, res));

router.get(`/api-${sys}/outbound-email/findOneByMailSmtptype/:mailSmtptype`, (req, res) => outboundEmailCtrl.findOneByMailSmtptype(req, res));

router.get(`/api-${sys}/outbound-email/findOneByMailSmtpserver/:mailSmtpserver`, (req, res) => outboundEmailCtrl.findOneByMailSmtpserver(req, res));

router.get(`/api-${sys}/outbound-email/findOneByMailSmtpport/:mailSmtpport`, (req, res) => outboundEmailCtrl.findOneByMailSmtpport(req, res));

router.get(`/api-${sys}/outbound-email/findOneByMailSmtpuser/:mailSmtpuser`, (req, res) => outboundEmailCtrl.findOneByMailSmtpuser(req, res));

router.get(`/api-${sys}/outbound-email/findOneByMailSmtppass/:mailSmtppass`, (req, res) => outboundEmailCtrl.findOneByMailSmtppass(req, res));

router.get(`/api-${sys}/outbound-email/findOneByMailSmtpssl/:mailSmtpssl`, (req, res) => outboundEmailCtrl.findOneByMailSmtpssl(req, res));

router.get(`/api-${sys}/outbound-email/findOneByDateEntered/:dateEntered`, (req, res) => outboundEmailCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/outbound-email/findOneByDateModified/:dateModified`, (req, res) => outboundEmailCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/outbound-email/findOneByUserId/:userId`, (req, res) => outboundEmailCtrl.findOneByUserId(req, res));

router.get(`/api-${sys}/outbound-email/findOneByModifiedUserId/:modifiedUserId`, (req, res) => outboundEmailCtrl.findOneByModifiedUserId(req, res));

router.get(`/api-${sys}/outbound-email/findOneByCreatedBy/:createdBy`, (req, res) => outboundEmailCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/outbound-email/findOneByAssignedUserId/:assignedUserId`, (req, res) => outboundEmailCtrl.findOneByAssignedUserId(req, res));



router.post(`/api-${sys}/outbound-email/updateOutboundEmailById`, (req, res) => outboundEmailCtrl.updateOutboundEmailById(req, res));

router.post(`/api-${sys}/outbound-email/updateOutboundEmailByMailSmtpauthReq`, (req, res) => outboundEmailCtrl.updateOutboundEmailByMailSmtpauthReq(req, res));

router.post(`/api-${sys}/outbound-email/updateOutboundEmailByDeleted`, (req, res) => outboundEmailCtrl.updateOutboundEmailByDeleted(req, res));

router.post(`/api-${sys}/outbound-email/updateOutboundEmailByName`, (req, res) => outboundEmailCtrl.updateOutboundEmailByName(req, res));

router.post(`/api-${sys}/outbound-email/updateOutboundEmailByType`, (req, res) => outboundEmailCtrl.updateOutboundEmailByType(req, res));

router.post(`/api-${sys}/outbound-email/updateOutboundEmailBySmtpFromName`, (req, res) => outboundEmailCtrl.updateOutboundEmailBySmtpFromName(req, res));

router.post(`/api-${sys}/outbound-email/updateOutboundEmailBySmtpFromAddr`, (req, res) => outboundEmailCtrl.updateOutboundEmailBySmtpFromAddr(req, res));

router.post(`/api-${sys}/outbound-email/updateOutboundEmailByMailSendtype`, (req, res) => outboundEmailCtrl.updateOutboundEmailByMailSendtype(req, res));

router.post(`/api-${sys}/outbound-email/updateOutboundEmailByMailSmtptype`, (req, res) => outboundEmailCtrl.updateOutboundEmailByMailSmtptype(req, res));

router.post(`/api-${sys}/outbound-email/updateOutboundEmailByMailSmtpserver`, (req, res) => outboundEmailCtrl.updateOutboundEmailByMailSmtpserver(req, res));

router.post(`/api-${sys}/outbound-email/updateOutboundEmailByMailSmtpport`, (req, res) => outboundEmailCtrl.updateOutboundEmailByMailSmtpport(req, res));

router.post(`/api-${sys}/outbound-email/updateOutboundEmailByMailSmtpuser`, (req, res) => outboundEmailCtrl.updateOutboundEmailByMailSmtpuser(req, res));

router.post(`/api-${sys}/outbound-email/updateOutboundEmailByMailSmtppass`, (req, res) => outboundEmailCtrl.updateOutboundEmailByMailSmtppass(req, res));

router.post(`/api-${sys}/outbound-email/updateOutboundEmailByMailSmtpssl`, (req, res) => outboundEmailCtrl.updateOutboundEmailByMailSmtpssl(req, res));

router.post(`/api-${sys}/outbound-email/updateOutboundEmailByDateEntered`, (req, res) => outboundEmailCtrl.updateOutboundEmailByDateEntered(req, res));

router.post(`/api-${sys}/outbound-email/updateOutboundEmailByDateModified`, (req, res) => outboundEmailCtrl.updateOutboundEmailByDateModified(req, res));

router.post(`/api-${sys}/outbound-email/updateOutboundEmailByUserId`, (req, res) => outboundEmailCtrl.updateOutboundEmailByUserId(req, res));

router.post(`/api-${sys}/outbound-email/updateOutboundEmailByModifiedUserId`, (req, res) => outboundEmailCtrl.updateOutboundEmailByModifiedUserId(req, res));

router.post(`/api-${sys}/outbound-email/updateOutboundEmailByCreatedBy`, (req, res) => outboundEmailCtrl.updateOutboundEmailByCreatedBy(req, res));

router.post(`/api-${sys}/outbound-email/updateOutboundEmailByAssignedUserId`, (req, res) => outboundEmailCtrl.updateOutboundEmailByAssignedUserId(req, res));





router.get(`/api-${sys}/outbound-email/`, (req, res) => outboundEmailCtrl.getAllOutboundEmail(req, res));
router.post(`/api-${sys}/outbound-email/`, (req, res) => outboundEmailCtrl.addOutboundEmail(req, res));
router.get(`/api-${sys}/outbound-email/:id`, (req, res) => outboundEmailCtrl.getAOutboundEmail(req, res));
router.put(`/api-${sys}/outbound-email/:id`, (req, res) => outboundEmailCtrl.updateOutboundEmail(req, res));
router.delete(`/api-${sys}/outbound-email/:id`, (req, res) => outboundEmailCtrl.deleteOutboundEmail(req, res));

//</es-section>
module.exports = router;
