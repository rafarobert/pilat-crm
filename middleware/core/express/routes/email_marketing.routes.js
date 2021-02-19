/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:37:08 GMT-0400 (Bolivia Time)
 * Time: 18:37:8
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:37:08 GMT-0400 (Bolivia Time)
 * Last time updated: 18:37:8
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const emailMarketingCtrl = require("../controllers/email_marketing.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/email-marketing/findOneById/:id`, (req, res) => emailMarketingCtrl.findOneById(req, res));

router.get(`/api-${sys}/email-marketing/findOneByDeleted/:deleted`, (req, res) => emailMarketingCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/email-marketing/findOneByAllProspectLists/:allProspectLists`, (req, res) => emailMarketingCtrl.findOneByAllProspectLists(req, res));

router.get(`/api-${sys}/email-marketing/findOneByName/:name`, (req, res) => emailMarketingCtrl.findOneByName(req, res));

router.get(`/api-${sys}/email-marketing/findOneByFromName/:fromName`, (req, res) => emailMarketingCtrl.findOneByFromName(req, res));

router.get(`/api-${sys}/email-marketing/findOneByFromAddr/:fromAddr`, (req, res) => emailMarketingCtrl.findOneByFromAddr(req, res));

router.get(`/api-${sys}/email-marketing/findOneByReplyToName/:replyToName`, (req, res) => emailMarketingCtrl.findOneByReplyToName(req, res));

router.get(`/api-${sys}/email-marketing/findOneByReplyToAddr/:replyToAddr`, (req, res) => emailMarketingCtrl.findOneByReplyToAddr(req, res));

router.get(`/api-${sys}/email-marketing/findOneByInboundEmailId/:inboundEmailId`, (req, res) => emailMarketingCtrl.findOneByInboundEmailId(req, res));

router.get(`/api-${sys}/email-marketing/findOneByStatus/:status`, (req, res) => emailMarketingCtrl.findOneByStatus(req, res));

router.get(`/api-${sys}/email-marketing/findOneByDateEntered/:dateEntered`, (req, res) => emailMarketingCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/email-marketing/findOneByDateModified/:dateModified`, (req, res) => emailMarketingCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/email-marketing/findOneByDateStart/:dateStart`, (req, res) => emailMarketingCtrl.findOneByDateStart(req, res));

router.get(`/api-${sys}/email-marketing/findOneByModifiedUserId/:modifiedUserId`, (req, res) => emailMarketingCtrl.findOneByModifiedUserId(req, res));

router.get(`/api-${sys}/email-marketing/findOneByCreatedBy/:createdBy`, (req, res) => emailMarketingCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/email-marketing/findOneByTemplateId/:templateId`, (req, res) => emailMarketingCtrl.findOneByTemplateId(req, res));

router.get(`/api-${sys}/email-marketing/findOneByCampaignId/:campaignId`, (req, res) => emailMarketingCtrl.findOneByCampaignId(req, res));

router.get(`/api-${sys}/email-marketing/findOneByOutboundEmailId/:outboundEmailId`, (req, res) => emailMarketingCtrl.findOneByOutboundEmailId(req, res));



router.post(`/api-${sys}/email-marketing/updateEmailMarketingById`, (req, res) => emailMarketingCtrl.updateEmailMarketingById(req, res));

router.post(`/api-${sys}/email-marketing/updateEmailMarketingByDeleted`, (req, res) => emailMarketingCtrl.updateEmailMarketingByDeleted(req, res));

router.post(`/api-${sys}/email-marketing/updateEmailMarketingByAllProspectLists`, (req, res) => emailMarketingCtrl.updateEmailMarketingByAllProspectLists(req, res));

router.post(`/api-${sys}/email-marketing/updateEmailMarketingByName`, (req, res) => emailMarketingCtrl.updateEmailMarketingByName(req, res));

router.post(`/api-${sys}/email-marketing/updateEmailMarketingByFromName`, (req, res) => emailMarketingCtrl.updateEmailMarketingByFromName(req, res));

router.post(`/api-${sys}/email-marketing/updateEmailMarketingByFromAddr`, (req, res) => emailMarketingCtrl.updateEmailMarketingByFromAddr(req, res));

router.post(`/api-${sys}/email-marketing/updateEmailMarketingByReplyToName`, (req, res) => emailMarketingCtrl.updateEmailMarketingByReplyToName(req, res));

router.post(`/api-${sys}/email-marketing/updateEmailMarketingByReplyToAddr`, (req, res) => emailMarketingCtrl.updateEmailMarketingByReplyToAddr(req, res));

router.post(`/api-${sys}/email-marketing/updateEmailMarketingByInboundEmailId`, (req, res) => emailMarketingCtrl.updateEmailMarketingByInboundEmailId(req, res));

router.post(`/api-${sys}/email-marketing/updateEmailMarketingByStatus`, (req, res) => emailMarketingCtrl.updateEmailMarketingByStatus(req, res));

router.post(`/api-${sys}/email-marketing/updateEmailMarketingByDateEntered`, (req, res) => emailMarketingCtrl.updateEmailMarketingByDateEntered(req, res));

router.post(`/api-${sys}/email-marketing/updateEmailMarketingByDateModified`, (req, res) => emailMarketingCtrl.updateEmailMarketingByDateModified(req, res));

router.post(`/api-${sys}/email-marketing/updateEmailMarketingByDateStart`, (req, res) => emailMarketingCtrl.updateEmailMarketingByDateStart(req, res));

router.post(`/api-${sys}/email-marketing/updateEmailMarketingByModifiedUserId`, (req, res) => emailMarketingCtrl.updateEmailMarketingByModifiedUserId(req, res));

router.post(`/api-${sys}/email-marketing/updateEmailMarketingByCreatedBy`, (req, res) => emailMarketingCtrl.updateEmailMarketingByCreatedBy(req, res));

router.post(`/api-${sys}/email-marketing/updateEmailMarketingByTemplateId`, (req, res) => emailMarketingCtrl.updateEmailMarketingByTemplateId(req, res));

router.post(`/api-${sys}/email-marketing/updateEmailMarketingByCampaignId`, (req, res) => emailMarketingCtrl.updateEmailMarketingByCampaignId(req, res));

router.post(`/api-${sys}/email-marketing/updateEmailMarketingByOutboundEmailId`, (req, res) => emailMarketingCtrl.updateEmailMarketingByOutboundEmailId(req, res));





router.get(`/api-${sys}/email-marketing/`, (req, res) => emailMarketingCtrl.getAllEmailMarketing(req, res));
router.post(`/api-${sys}/email-marketing/`, (req, res) => emailMarketingCtrl.addEmailMarketing(req, res));
router.get(`/api-${sys}/email-marketing/:id`, (req, res) => emailMarketingCtrl.getAEmailMarketing(req, res));
router.put(`/api-${sys}/email-marketing/:id`, (req, res) => emailMarketingCtrl.updateEmailMarketing(req, res));
router.delete(`/api-${sys}/email-marketing/:id`, (req, res) => emailMarketingCtrl.deleteEmailMarketing(req, res));

//</es-section>
module.exports = router;
