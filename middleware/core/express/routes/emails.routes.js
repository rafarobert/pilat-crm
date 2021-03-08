/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:35:59 GMT-0400 (Bolivia Time)
 * Time: 15:35:59
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:35:59 GMT-0400 (Bolivia Time)
 * Last time updated: 15:35:59
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const emailsCtrl = require("../controllers/emails.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/emails/findOneById/:id`, (req, res) => emailsCtrl.findOneById(req, res));

router.get(`/api-${sys}/emails/findOneByDeleted/:deleted`, (req, res) => emailsCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/emails/findOneByOrphaned/:orphaned`, (req, res) => emailsCtrl.findOneByOrphaned(req, res));

router.get(`/api-${sys}/emails/findOneByFlagged/:flagged`, (req, res) => emailsCtrl.findOneByFlagged(req, res));

router.get(`/api-${sys}/emails/findOneByReplyToStatus/:replyToStatus`, (req, res) => emailsCtrl.findOneByReplyToStatus(req, res));

router.get(`/api-${sys}/emails/findOneByName/:name`, (req, res) => emailsCtrl.findOneByName(req, res));

router.get(`/api-${sys}/emails/findOneByMessageId/:messageId`, (req, res) => emailsCtrl.findOneByMessageId(req, res));

router.get(`/api-${sys}/emails/findOneByType/:type`, (req, res) => emailsCtrl.findOneByType(req, res));

router.get(`/api-${sys}/emails/findOneByStatus/:status`, (req, res) => emailsCtrl.findOneByStatus(req, res));

router.get(`/api-${sys}/emails/findOneByIntent/:intent`, (req, res) => emailsCtrl.findOneByIntent(req, res));

router.get(`/api-${sys}/emails/findOneByParentType/:parentType`, (req, res) => emailsCtrl.findOneByParentType(req, res));

router.get(`/api-${sys}/emails/findOneByUid/:uid`, (req, res) => emailsCtrl.findOneByUid(req, res));

router.get(`/api-${sys}/emails/findOneByCategoryId/:categoryId`, (req, res) => emailsCtrl.findOneByCategoryId(req, res));

router.get(`/api-${sys}/emails/findOneByDateEntered/:dateEntered`, (req, res) => emailsCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/emails/findOneByDateModified/:dateModified`, (req, res) => emailsCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/emails/findOneByLastSynced/:lastSynced`, (req, res) => emailsCtrl.findOneByLastSynced(req, res));

router.get(`/api-${sys}/emails/findOneByDateSentReceived/:dateSentReceived`, (req, res) => emailsCtrl.findOneByDateSentReceived(req, res));

router.get(`/api-${sys}/emails/findOneByModifiedUserId/:modifiedUserId`, (req, res) => emailsCtrl.findOneByModifiedUserId(req, res));

router.get(`/api-${sys}/emails/findOneByCreatedBy/:createdBy`, (req, res) => emailsCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/emails/findOneByAssignedUserId/:assignedUserId`, (req, res) => emailsCtrl.findOneByAssignedUserId(req, res));

router.get(`/api-${sys}/emails/findOneByMailboxId/:mailboxId`, (req, res) => emailsCtrl.findOneByMailboxId(req, res));

router.get(`/api-${sys}/emails/findOneByParentId/:parentId`, (req, res) => emailsCtrl.findOneByParentId(req, res));



router.post(`/api-${sys}/emails/updateEmailById`, (req, res) => emailsCtrl.updateEmailById(req, res));

router.post(`/api-${sys}/emails/updateEmailByDeleted`, (req, res) => emailsCtrl.updateEmailByDeleted(req, res));

router.post(`/api-${sys}/emails/updateEmailByOrphaned`, (req, res) => emailsCtrl.updateEmailByOrphaned(req, res));

router.post(`/api-${sys}/emails/updateEmailByFlagged`, (req, res) => emailsCtrl.updateEmailByFlagged(req, res));

router.post(`/api-${sys}/emails/updateEmailByReplyToStatus`, (req, res) => emailsCtrl.updateEmailByReplyToStatus(req, res));

router.post(`/api-${sys}/emails/updateEmailByName`, (req, res) => emailsCtrl.updateEmailByName(req, res));

router.post(`/api-${sys}/emails/updateEmailByMessageId`, (req, res) => emailsCtrl.updateEmailByMessageId(req, res));

router.post(`/api-${sys}/emails/updateEmailByType`, (req, res) => emailsCtrl.updateEmailByType(req, res));

router.post(`/api-${sys}/emails/updateEmailByStatus`, (req, res) => emailsCtrl.updateEmailByStatus(req, res));

router.post(`/api-${sys}/emails/updateEmailByIntent`, (req, res) => emailsCtrl.updateEmailByIntent(req, res));

router.post(`/api-${sys}/emails/updateEmailByParentType`, (req, res) => emailsCtrl.updateEmailByParentType(req, res));

router.post(`/api-${sys}/emails/updateEmailByUid`, (req, res) => emailsCtrl.updateEmailByUid(req, res));

router.post(`/api-${sys}/emails/updateEmailByCategoryId`, (req, res) => emailsCtrl.updateEmailByCategoryId(req, res));

router.post(`/api-${sys}/emails/updateEmailByDateEntered`, (req, res) => emailsCtrl.updateEmailByDateEntered(req, res));

router.post(`/api-${sys}/emails/updateEmailByDateModified`, (req, res) => emailsCtrl.updateEmailByDateModified(req, res));

router.post(`/api-${sys}/emails/updateEmailByLastSynced`, (req, res) => emailsCtrl.updateEmailByLastSynced(req, res));

router.post(`/api-${sys}/emails/updateEmailByDateSentReceived`, (req, res) => emailsCtrl.updateEmailByDateSentReceived(req, res));

router.post(`/api-${sys}/emails/updateEmailByModifiedUserId`, (req, res) => emailsCtrl.updateEmailByModifiedUserId(req, res));

router.post(`/api-${sys}/emails/updateEmailByCreatedBy`, (req, res) => emailsCtrl.updateEmailByCreatedBy(req, res));

router.post(`/api-${sys}/emails/updateEmailByAssignedUserId`, (req, res) => emailsCtrl.updateEmailByAssignedUserId(req, res));

router.post(`/api-${sys}/emails/updateEmailByMailboxId`, (req, res) => emailsCtrl.updateEmailByMailboxId(req, res));

router.post(`/api-${sys}/emails/updateEmailByParentId`, (req, res) => emailsCtrl.updateEmailByParentId(req, res));





router.get(`/api-${sys}/emails/`, (req, res) => emailsCtrl.getAllEmails(req, res));
router.post(`/api-${sys}/emails/`, (req, res) => emailsCtrl.addEmail(req, res));
router.get(`/api-${sys}/emails/:id`, (req, res) => emailsCtrl.getAEmail(req, res));
router.put(`/api-${sys}/emails/:id`, (req, res) => emailsCtrl.updateEmail(req, res));
router.delete(`/api-${sys}/emails/:id`, (req, res) => emailsCtrl.deleteEmail(req, res));

//</es-section>
module.exports = router;
