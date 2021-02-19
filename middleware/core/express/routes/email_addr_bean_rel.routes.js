/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:43:00 GMT-0400 (Bolivia Time)
 * Time: 4:43:0
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:43:00 GMT-0400 (Bolivia Time)
 * Last time updated: 4:43:0
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const emailAddrBeanRelCtrl = require("../controllers/email_addr_bean_rel.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/email-addr-bean-rel/findOneById/:id`, (req, res) => emailAddrBeanRelCtrl.findOneById(req, res));

router.get(`/api-${sys}/email-addr-bean-rel/findOneByPrimaryAddress/:primaryAddress`, (req, res) => emailAddrBeanRelCtrl.findOneByPrimaryAddress(req, res));

router.get(`/api-${sys}/email-addr-bean-rel/findOneByReplyToAddress/:replyToAddress`, (req, res) => emailAddrBeanRelCtrl.findOneByReplyToAddress(req, res));

router.get(`/api-${sys}/email-addr-bean-rel/findOneByDeleted/:deleted`, (req, res) => emailAddrBeanRelCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/email-addr-bean-rel/findOneByBeanModule/:beanModule`, (req, res) => emailAddrBeanRelCtrl.findOneByBeanModule(req, res));

router.get(`/api-${sys}/email-addr-bean-rel/findOneByDateCreated/:dateCreated`, (req, res) => emailAddrBeanRelCtrl.findOneByDateCreated(req, res));

router.get(`/api-${sys}/email-addr-bean-rel/findOneByDateModified/:dateModified`, (req, res) => emailAddrBeanRelCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/email-addr-bean-rel/findOneByEmailAddressId/:emailAddressId`, (req, res) => emailAddrBeanRelCtrl.findOneByEmailAddressId(req, res));

router.get(`/api-${sys}/email-addr-bean-rel/findOneByBeanId/:beanId`, (req, res) => emailAddrBeanRelCtrl.findOneByBeanId(req, res));



router.post(`/api-${sys}/email-addr-bean-rel/updateEmailAddrBeanRelById`, (req, res) => emailAddrBeanRelCtrl.updateEmailAddrBeanRelById(req, res));

router.post(`/api-${sys}/email-addr-bean-rel/updateEmailAddrBeanRelByPrimaryAddress`, (req, res) => emailAddrBeanRelCtrl.updateEmailAddrBeanRelByPrimaryAddress(req, res));

router.post(`/api-${sys}/email-addr-bean-rel/updateEmailAddrBeanRelByReplyToAddress`, (req, res) => emailAddrBeanRelCtrl.updateEmailAddrBeanRelByReplyToAddress(req, res));

router.post(`/api-${sys}/email-addr-bean-rel/updateEmailAddrBeanRelByDeleted`, (req, res) => emailAddrBeanRelCtrl.updateEmailAddrBeanRelByDeleted(req, res));

router.post(`/api-${sys}/email-addr-bean-rel/updateEmailAddrBeanRelByBeanModule`, (req, res) => emailAddrBeanRelCtrl.updateEmailAddrBeanRelByBeanModule(req, res));

router.post(`/api-${sys}/email-addr-bean-rel/updateEmailAddrBeanRelByDateCreated`, (req, res) => emailAddrBeanRelCtrl.updateEmailAddrBeanRelByDateCreated(req, res));

router.post(`/api-${sys}/email-addr-bean-rel/updateEmailAddrBeanRelByDateModified`, (req, res) => emailAddrBeanRelCtrl.updateEmailAddrBeanRelByDateModified(req, res));

router.post(`/api-${sys}/email-addr-bean-rel/updateEmailAddrBeanRelByEmailAddressId`, (req, res) => emailAddrBeanRelCtrl.updateEmailAddrBeanRelByEmailAddressId(req, res));

router.post(`/api-${sys}/email-addr-bean-rel/updateEmailAddrBeanRelByBeanId`, (req, res) => emailAddrBeanRelCtrl.updateEmailAddrBeanRelByBeanId(req, res));





router.get(`/api-${sys}/email-addr-bean-rel/`, (req, res) => emailAddrBeanRelCtrl.getAllEmailAddrBeanRel(req, res));
router.post(`/api-${sys}/email-addr-bean-rel/`, (req, res) => emailAddrBeanRelCtrl.addEmailAddrBeanRel(req, res));
router.get(`/api-${sys}/email-addr-bean-rel/:id`, (req, res) => emailAddrBeanRelCtrl.getAEmailAddrBeanRel(req, res));
router.put(`/api-${sys}/email-addr-bean-rel/:id`, (req, res) => emailAddrBeanRelCtrl.updateEmailAddrBeanRel(req, res));
router.delete(`/api-${sys}/email-addr-bean-rel/:id`, (req, res) => emailAddrBeanRelCtrl.deleteEmailAddrBeanRel(req, res));

//</es-section>
module.exports = router;
