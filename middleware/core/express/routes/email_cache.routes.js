/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:37:07 GMT-0400 (Bolivia Time)
 * Time: 18:37:7
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:37:07 GMT-0400 (Bolivia Time)
 * Last time updated: 18:37:7
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const emailCacheCtrl = require("../controllers/email_cache.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/email-cache/findOneByRecent/:recent`, (req, res) => emailCacheCtrl.findOneByRecent(req, res));

router.get(`/api-${sys}/email-cache/findOneByFlagged/:flagged`, (req, res) => emailCacheCtrl.findOneByFlagged(req, res));

router.get(`/api-${sys}/email-cache/findOneByAnswered/:answered`, (req, res) => emailCacheCtrl.findOneByAnswered(req, res));

router.get(`/api-${sys}/email-cache/findOneByDeleted/:deleted`, (req, res) => emailCacheCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/email-cache/findOneBySeen/:seen`, (req, res) => emailCacheCtrl.findOneBySeen(req, res));

router.get(`/api-${sys}/email-cache/findOneByDraft/:draft`, (req, res) => emailCacheCtrl.findOneByDraft(req, res));

router.get(`/api-${sys}/email-cache/findOneByMailsize/:mailsize`, (req, res) => emailCacheCtrl.findOneByMailsize(req, res));

router.get(`/api-${sys}/email-cache/findOneByImapUid/:imapUid`, (req, res) => emailCacheCtrl.findOneByImapUid(req, res));

router.get(`/api-${sys}/email-cache/findOneByMsgno/:msgno`, (req, res) => emailCacheCtrl.findOneByMsgno(req, res));

router.get(`/api-${sys}/email-cache/findOneByMbox/:mbox`, (req, res) => emailCacheCtrl.findOneByMbox(req, res));

router.get(`/api-${sys}/email-cache/findOneBySubject/:subject`, (req, res) => emailCacheCtrl.findOneBySubject(req, res));

router.get(`/api-${sys}/email-cache/findOneByFromaddr/:fromaddr`, (req, res) => emailCacheCtrl.findOneByFromaddr(req, res));

router.get(`/api-${sys}/email-cache/findOneByToaddr/:toaddr`, (req, res) => emailCacheCtrl.findOneByToaddr(req, res));

router.get(`/api-${sys}/email-cache/findOneByMessageId/:messageId`, (req, res) => emailCacheCtrl.findOneByMessageId(req, res));

router.get(`/api-${sys}/email-cache/findOneBySenddate/:senddate`, (req, res) => emailCacheCtrl.findOneBySenddate(req, res));

router.get(`/api-${sys}/email-cache/findOneByIeId/:ieId`, (req, res) => emailCacheCtrl.findOneByIeId(req, res));



router.post(`/api-${sys}/email-cache/updateEmailCacheByRecent`, (req, res) => emailCacheCtrl.updateEmailCacheByRecent(req, res));

router.post(`/api-${sys}/email-cache/updateEmailCacheByFlagged`, (req, res) => emailCacheCtrl.updateEmailCacheByFlagged(req, res));

router.post(`/api-${sys}/email-cache/updateEmailCacheByAnswered`, (req, res) => emailCacheCtrl.updateEmailCacheByAnswered(req, res));

router.post(`/api-${sys}/email-cache/updateEmailCacheByDeleted`, (req, res) => emailCacheCtrl.updateEmailCacheByDeleted(req, res));

router.post(`/api-${sys}/email-cache/updateEmailCacheBySeen`, (req, res) => emailCacheCtrl.updateEmailCacheBySeen(req, res));

router.post(`/api-${sys}/email-cache/updateEmailCacheByDraft`, (req, res) => emailCacheCtrl.updateEmailCacheByDraft(req, res));

router.post(`/api-${sys}/email-cache/updateEmailCacheByMailsize`, (req, res) => emailCacheCtrl.updateEmailCacheByMailsize(req, res));

router.post(`/api-${sys}/email-cache/updateEmailCacheByImapUid`, (req, res) => emailCacheCtrl.updateEmailCacheByImapUid(req, res));

router.post(`/api-${sys}/email-cache/updateEmailCacheByMsgno`, (req, res) => emailCacheCtrl.updateEmailCacheByMsgno(req, res));

router.post(`/api-${sys}/email-cache/updateEmailCacheByMbox`, (req, res) => emailCacheCtrl.updateEmailCacheByMbox(req, res));

router.post(`/api-${sys}/email-cache/updateEmailCacheBySubject`, (req, res) => emailCacheCtrl.updateEmailCacheBySubject(req, res));

router.post(`/api-${sys}/email-cache/updateEmailCacheByFromaddr`, (req, res) => emailCacheCtrl.updateEmailCacheByFromaddr(req, res));

router.post(`/api-${sys}/email-cache/updateEmailCacheByToaddr`, (req, res) => emailCacheCtrl.updateEmailCacheByToaddr(req, res));

router.post(`/api-${sys}/email-cache/updateEmailCacheByMessageId`, (req, res) => emailCacheCtrl.updateEmailCacheByMessageId(req, res));

router.post(`/api-${sys}/email-cache/updateEmailCacheBySenddate`, (req, res) => emailCacheCtrl.updateEmailCacheBySenddate(req, res));

router.post(`/api-${sys}/email-cache/updateEmailCacheByIeId`, (req, res) => emailCacheCtrl.updateEmailCacheByIeId(req, res));





//</es-section>
module.exports = router;
