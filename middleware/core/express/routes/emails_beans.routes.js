/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:42:57 GMT-0400 (Bolivia Time)
 * Time: 4:42:57
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:42:57 GMT-0400 (Bolivia Time)
 * Last time updated: 4:42:57
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const emailsBeansCtrl = require("../controllers/emails_beans.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/emails-beans/findOneById/:id`, (req, res) => emailsBeansCtrl.findOneById(req, res));

router.get(`/api-${sys}/emails-beans/findOneByDeleted/:deleted`, (req, res) => emailsBeansCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/emails-beans/findOneByBeanModule/:beanModule`, (req, res) => emailsBeansCtrl.findOneByBeanModule(req, res));

router.get(`/api-${sys}/emails-beans/findOneByCampaignData/:campaignData`, (req, res) => emailsBeansCtrl.findOneByCampaignData(req, res));

router.get(`/api-${sys}/emails-beans/findOneByDateModified/:dateModified`, (req, res) => emailsBeansCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/emails-beans/findOneByEmailId/:emailId`, (req, res) => emailsBeansCtrl.findOneByEmailId(req, res));

router.get(`/api-${sys}/emails-beans/findOneByBeanId/:beanId`, (req, res) => emailsBeansCtrl.findOneByBeanId(req, res));



router.post(`/api-${sys}/emails-beans/updateEmailBeanById`, (req, res) => emailsBeansCtrl.updateEmailBeanById(req, res));

router.post(`/api-${sys}/emails-beans/updateEmailBeanByDeleted`, (req, res) => emailsBeansCtrl.updateEmailBeanByDeleted(req, res));

router.post(`/api-${sys}/emails-beans/updateEmailBeanByBeanModule`, (req, res) => emailsBeansCtrl.updateEmailBeanByBeanModule(req, res));

router.post(`/api-${sys}/emails-beans/updateEmailBeanByCampaignData`, (req, res) => emailsBeansCtrl.updateEmailBeanByCampaignData(req, res));

router.post(`/api-${sys}/emails-beans/updateEmailBeanByDateModified`, (req, res) => emailsBeansCtrl.updateEmailBeanByDateModified(req, res));

router.post(`/api-${sys}/emails-beans/updateEmailBeanByEmailId`, (req, res) => emailsBeansCtrl.updateEmailBeanByEmailId(req, res));

router.post(`/api-${sys}/emails-beans/updateEmailBeanByBeanId`, (req, res) => emailsBeansCtrl.updateEmailBeanByBeanId(req, res));





router.get(`/api-${sys}/emails-beans/`, (req, res) => emailsBeansCtrl.getAllEmailsBeans(req, res));
router.post(`/api-${sys}/emails-beans/`, (req, res) => emailsBeansCtrl.addEmailBean(req, res));
router.get(`/api-${sys}/emails-beans/:id`, (req, res) => emailsBeansCtrl.getAEmailBean(req, res));
router.put(`/api-${sys}/emails-beans/:id`, (req, res) => emailsBeansCtrl.updateEmailBean(req, res));
router.delete(`/api-${sys}/emails-beans/:id`, (req, res) => emailsBeansCtrl.deleteEmailBean(req, res));

//</es-section>
module.exports = router;
