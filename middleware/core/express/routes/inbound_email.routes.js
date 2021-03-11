/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:03 GMT-0400 (Bolivia Time)
 * Time: 14:57:3
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:03 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:3
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const inboundEmailCtrl = require("../controllers/inbound_email.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/inbound-email/findOneById/:id`, (req, res) => inboundEmailCtrl.findOneById(req, res));

router.get(`/api-${sys}/inbound-email/findOneByDeleted/:deleted`, (req, res) => inboundEmailCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/inbound-email/findOneByDeleteSeen/:deleteSeen`, (req, res) => inboundEmailCtrl.findOneByDeleteSeen(req, res));

router.get(`/api-${sys}/inbound-email/findOneByIsPersonal/:isPersonal`, (req, res) => inboundEmailCtrl.findOneByIsPersonal(req, res));

router.get(`/api-${sys}/inbound-email/findOneByPort/:port`, (req, res) => inboundEmailCtrl.findOneByPort(req, res));

router.get(`/api-${sys}/inbound-email/findOneByName/:name`, (req, res) => inboundEmailCtrl.findOneByName(req, res));

router.get(`/api-${sys}/inbound-email/findOneByStatus/:status`, (req, res) => inboundEmailCtrl.findOneByStatus(req, res));

router.get(`/api-${sys}/inbound-email/findOneByServerUrl/:serverUrl`, (req, res) => inboundEmailCtrl.findOneByServerUrl(req, res));

router.get(`/api-${sys}/inbound-email/findOneByEmailUser/:emailUser`, (req, res) => inboundEmailCtrl.findOneByEmailUser(req, res));

router.get(`/api-${sys}/inbound-email/findOneByEmailPassword/:emailPassword`, (req, res) => inboundEmailCtrl.findOneByEmailPassword(req, res));

router.get(`/api-${sys}/inbound-email/findOneByService/:service`, (req, res) => inboundEmailCtrl.findOneByService(req, res));

router.get(`/api-${sys}/inbound-email/findOneByMailboxType/:mailboxType`, (req, res) => inboundEmailCtrl.findOneByMailboxType(req, res));

router.get(`/api-${sys}/inbound-email/findOneByMailbox/:mailbox`, (req, res) => inboundEmailCtrl.findOneByMailbox(req, res));

router.get(`/api-${sys}/inbound-email/findOneByStoredOptions/:storedOptions`, (req, res) => inboundEmailCtrl.findOneByStoredOptions(req, res));

router.get(`/api-${sys}/inbound-email/findOneByDateEntered/:dateEntered`, (req, res) => inboundEmailCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/inbound-email/findOneByDateModified/:dateModified`, (req, res) => inboundEmailCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/inbound-email/findOneByModifiedUserId/:modifiedUserId`, (req, res) => inboundEmailCtrl.findOneByModifiedUserId(req, res));

router.get(`/api-${sys}/inbound-email/findOneByCreatedBy/:createdBy`, (req, res) => inboundEmailCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/inbound-email/findOneByTemplateId/:templateId`, (req, res) => inboundEmailCtrl.findOneByTemplateId(req, res));

router.get(`/api-${sys}/inbound-email/findOneByGroupId/:groupId`, (req, res) => inboundEmailCtrl.findOneByGroupId(req, res));

router.get(`/api-${sys}/inbound-email/findOneByGroupfolderId/:groupfolderId`, (req, res) => inboundEmailCtrl.findOneByGroupfolderId(req, res));



router.post(`/api-${sys}/inbound-email/updateInboundEmailById`, (req, res) => inboundEmailCtrl.updateInboundEmailById(req, res));

router.post(`/api-${sys}/inbound-email/updateInboundEmailByDeleted`, (req, res) => inboundEmailCtrl.updateInboundEmailByDeleted(req, res));

router.post(`/api-${sys}/inbound-email/updateInboundEmailByDeleteSeen`, (req, res) => inboundEmailCtrl.updateInboundEmailByDeleteSeen(req, res));

router.post(`/api-${sys}/inbound-email/updateInboundEmailByIsPersonal`, (req, res) => inboundEmailCtrl.updateInboundEmailByIsPersonal(req, res));

router.post(`/api-${sys}/inbound-email/updateInboundEmailByPort`, (req, res) => inboundEmailCtrl.updateInboundEmailByPort(req, res));

router.post(`/api-${sys}/inbound-email/updateInboundEmailByName`, (req, res) => inboundEmailCtrl.updateInboundEmailByName(req, res));

router.post(`/api-${sys}/inbound-email/updateInboundEmailByStatus`, (req, res) => inboundEmailCtrl.updateInboundEmailByStatus(req, res));

router.post(`/api-${sys}/inbound-email/updateInboundEmailByServerUrl`, (req, res) => inboundEmailCtrl.updateInboundEmailByServerUrl(req, res));

router.post(`/api-${sys}/inbound-email/updateInboundEmailByEmailUser`, (req, res) => inboundEmailCtrl.updateInboundEmailByEmailUser(req, res));

router.post(`/api-${sys}/inbound-email/updateInboundEmailByEmailPassword`, (req, res) => inboundEmailCtrl.updateInboundEmailByEmailPassword(req, res));

router.post(`/api-${sys}/inbound-email/updateInboundEmailByService`, (req, res) => inboundEmailCtrl.updateInboundEmailByService(req, res));

router.post(`/api-${sys}/inbound-email/updateInboundEmailByMailboxType`, (req, res) => inboundEmailCtrl.updateInboundEmailByMailboxType(req, res));

router.post(`/api-${sys}/inbound-email/updateInboundEmailByMailbox`, (req, res) => inboundEmailCtrl.updateInboundEmailByMailbox(req, res));

router.post(`/api-${sys}/inbound-email/updateInboundEmailByStoredOptions`, (req, res) => inboundEmailCtrl.updateInboundEmailByStoredOptions(req, res));

router.post(`/api-${sys}/inbound-email/updateInboundEmailByDateEntered`, (req, res) => inboundEmailCtrl.updateInboundEmailByDateEntered(req, res));

router.post(`/api-${sys}/inbound-email/updateInboundEmailByDateModified`, (req, res) => inboundEmailCtrl.updateInboundEmailByDateModified(req, res));

router.post(`/api-${sys}/inbound-email/updateInboundEmailByModifiedUserId`, (req, res) => inboundEmailCtrl.updateInboundEmailByModifiedUserId(req, res));

router.post(`/api-${sys}/inbound-email/updateInboundEmailByCreatedBy`, (req, res) => inboundEmailCtrl.updateInboundEmailByCreatedBy(req, res));

router.post(`/api-${sys}/inbound-email/updateInboundEmailByTemplateId`, (req, res) => inboundEmailCtrl.updateInboundEmailByTemplateId(req, res));

router.post(`/api-${sys}/inbound-email/updateInboundEmailByGroupId`, (req, res) => inboundEmailCtrl.updateInboundEmailByGroupId(req, res));

router.post(`/api-${sys}/inbound-email/updateInboundEmailByGroupfolderId`, (req, res) => inboundEmailCtrl.updateInboundEmailByGroupfolderId(req, res));





router.get(`/api-${sys}/inbound-email/`, (req, res) => inboundEmailCtrl.getAllInboundEmail(req, res));
router.post(`/api-${sys}/datatable/inbound-email/`, (req, res) => inboundEmailCtrl.getAllInboundEmail(req, res));
router.post(`/api-${sys}/inbound-email/`, (req, res) => inboundEmailCtrl.addInboundEmail(req, res));
router.get(`/api-${sys}/inbound-email/:id`, (req, res) => inboundEmailCtrl.getAInboundEmail(req, res));
router.put(`/api-${sys}/inbound-email/:id`, (req, res) => inboundEmailCtrl.updateInboundEmail(req, res));
router.delete(`/api-${sys}/inbound-email/:id`, (req, res) => inboundEmailCtrl.deleteInboundEmail(req, res));

//</es-section>
module.exports = router;
