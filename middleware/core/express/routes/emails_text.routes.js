/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:46 GMT-0400 (Bolivia Time)
 * Time: 14:56:46
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:46 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:46
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const emailsTextCtrl = require("../controllers/emails_text.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/emails-text/findOneByEmailId/:emailId`, (req, res) => emailsTextCtrl.findOneByEmailId(req, res));

router.get(`/api-${sys}/emails-text/findOneByDeleted/:deleted`, (req, res) => emailsTextCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/emails-text/findOneByFromAddr/:fromAddr`, (req, res) => emailsTextCtrl.findOneByFromAddr(req, res));

router.get(`/api-${sys}/emails-text/findOneByReplyToAddr/:replyToAddr`, (req, res) => emailsTextCtrl.findOneByReplyToAddr(req, res));

router.get(`/api-${sys}/emails-text/findOneByToAddrs/:toAddrs`, (req, res) => emailsTextCtrl.findOneByToAddrs(req, res));

router.get(`/api-${sys}/emails-text/findOneByCcAddrs/:ccAddrs`, (req, res) => emailsTextCtrl.findOneByCcAddrs(req, res));

router.get(`/api-${sys}/emails-text/findOneByBccAddrs/:bccAddrs`, (req, res) => emailsTextCtrl.findOneByBccAddrs(req, res));

router.get(`/api-${sys}/emails-text/findOneByDescription/:description`, (req, res) => emailsTextCtrl.findOneByDescription(req, res));

router.get(`/api-${sys}/emails-text/findOneByDescriptionHtml/:descriptionHtml`, (req, res) => emailsTextCtrl.findOneByDescriptionHtml(req, res));

router.get(`/api-${sys}/emails-text/findOneByRawSource/:rawSource`, (req, res) => emailsTextCtrl.findOneByRawSource(req, res));



router.post(`/api-${sys}/emails-text/updateEmailTextByEmailId`, (req, res) => emailsTextCtrl.updateEmailTextByEmailId(req, res));

router.post(`/api-${sys}/emails-text/updateEmailTextByDeleted`, (req, res) => emailsTextCtrl.updateEmailTextByDeleted(req, res));

router.post(`/api-${sys}/emails-text/updateEmailTextByFromAddr`, (req, res) => emailsTextCtrl.updateEmailTextByFromAddr(req, res));

router.post(`/api-${sys}/emails-text/updateEmailTextByReplyToAddr`, (req, res) => emailsTextCtrl.updateEmailTextByReplyToAddr(req, res));

router.post(`/api-${sys}/emails-text/updateEmailTextByToAddrs`, (req, res) => emailsTextCtrl.updateEmailTextByToAddrs(req, res));

router.post(`/api-${sys}/emails-text/updateEmailTextByCcAddrs`, (req, res) => emailsTextCtrl.updateEmailTextByCcAddrs(req, res));

router.post(`/api-${sys}/emails-text/updateEmailTextByBccAddrs`, (req, res) => emailsTextCtrl.updateEmailTextByBccAddrs(req, res));

router.post(`/api-${sys}/emails-text/updateEmailTextByDescription`, (req, res) => emailsTextCtrl.updateEmailTextByDescription(req, res));

router.post(`/api-${sys}/emails-text/updateEmailTextByDescriptionHtml`, (req, res) => emailsTextCtrl.updateEmailTextByDescriptionHtml(req, res));

router.post(`/api-${sys}/emails-text/updateEmailTextByRawSource`, (req, res) => emailsTextCtrl.updateEmailTextByRawSource(req, res));





router.get(`/api-${sys}/emails-text/`, (req, res) => emailsTextCtrl.getAllEmailsText(req, res));
router.post(`/api-${sys}/emails-text/`, (req, res) => emailsTextCtrl.addEmailText(req, res));
router.get(`/api-${sys}/emails-text/:emailId`, (req, res) => emailsTextCtrl.getAEmailText(req, res));
router.put(`/api-${sys}/emails-text/:emailId`, (req, res) => emailsTextCtrl.updateEmailText(req, res));
router.delete(`/api-${sys}/emails-text/:emailId`, (req, res) => emailsTextCtrl.deleteEmailText(req, res));

//</es-section>
module.exports = router;
