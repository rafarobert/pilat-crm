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
const emailsEmailAddrRelCtrl = require("../controllers/emails_email_addr_rel.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/emails-email-addr-rel/findOneById/:id`, (req, res) => emailsEmailAddrRelCtrl.findOneById(req, res));

router.get(`/api-${sys}/emails-email-addr-rel/findOneByDeleted/:deleted`, (req, res) => emailsEmailAddrRelCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/emails-email-addr-rel/findOneByAddressType/:addressType`, (req, res) => emailsEmailAddrRelCtrl.findOneByAddressType(req, res));

router.get(`/api-${sys}/emails-email-addr-rel/findOneByEmailId/:emailId`, (req, res) => emailsEmailAddrRelCtrl.findOneByEmailId(req, res));

router.get(`/api-${sys}/emails-email-addr-rel/findOneByEmailAddressId/:emailAddressId`, (req, res) => emailsEmailAddrRelCtrl.findOneByEmailAddressId(req, res));



router.post(`/api-${sys}/emails-email-addr-rel/updateEmailEmailAddrRelById`, (req, res) => emailsEmailAddrRelCtrl.updateEmailEmailAddrRelById(req, res));

router.post(`/api-${sys}/emails-email-addr-rel/updateEmailEmailAddrRelByDeleted`, (req, res) => emailsEmailAddrRelCtrl.updateEmailEmailAddrRelByDeleted(req, res));

router.post(`/api-${sys}/emails-email-addr-rel/updateEmailEmailAddrRelByAddressType`, (req, res) => emailsEmailAddrRelCtrl.updateEmailEmailAddrRelByAddressType(req, res));

router.post(`/api-${sys}/emails-email-addr-rel/updateEmailEmailAddrRelByEmailId`, (req, res) => emailsEmailAddrRelCtrl.updateEmailEmailAddrRelByEmailId(req, res));

router.post(`/api-${sys}/emails-email-addr-rel/updateEmailEmailAddrRelByEmailAddressId`, (req, res) => emailsEmailAddrRelCtrl.updateEmailEmailAddrRelByEmailAddressId(req, res));





router.get(`/api-${sys}/emails-email-addr-rel/`, (req, res) => emailsEmailAddrRelCtrl.getAllEmailsEmailAddrRel(req, res));
router.post(`/api-${sys}/datatable/emails-email-addr-rel/`, (req, res) => emailsEmailAddrRelCtrl.getAllEmailsEmailAddrRel(req, res));
router.post(`/api-${sys}/emails-email-addr-rel/`, (req, res) => emailsEmailAddrRelCtrl.addEmailEmailAddrRel(req, res));
router.get(`/api-${sys}/emails-email-addr-rel/:id`, (req, res) => emailsEmailAddrRelCtrl.getAEmailEmailAddrRel(req, res));
router.put(`/api-${sys}/emails-email-addr-rel/:id`, (req, res) => emailsEmailAddrRelCtrl.updateEmailEmailAddrRel(req, res));
router.delete(`/api-${sys}/emails-email-addr-rel/:id`, (req, res) => emailsEmailAddrRelCtrl.deleteEmailEmailAddrRel(req, res));

//</es-section>
module.exports = router;
