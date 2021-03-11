/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:50 GMT-0400 (Bolivia Time)
 * Time: 14:56:50
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:50 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:50
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const emailTemplatesCstmCtrl = require("../controllers/email_templates_cstm.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/email-templates-cstm/findOneByIdC/:idC`, (req, res) => emailTemplatesCstmCtrl.findOneByIdC(req, res));

router.get(`/api-${sys}/email-templates-cstm/findOneBySmsModuleC/:smsModuleC`, (req, res) => emailTemplatesCstmCtrl.findOneBySmsModuleC(req, res));



router.post(`/api-${sys}/email-templates-cstm/updateEmailTemplateCstmByIdC`, (req, res) => emailTemplatesCstmCtrl.updateEmailTemplateCstmByIdC(req, res));

router.post(`/api-${sys}/email-templates-cstm/updateEmailTemplateCstmBySmsModuleC`, (req, res) => emailTemplatesCstmCtrl.updateEmailTemplateCstmBySmsModuleC(req, res));





router.get(`/api-${sys}/email-templates-cstm/`, (req, res) => emailTemplatesCstmCtrl.getAllEmailTemplatesCstm(req, res));
router.post(`/api-${sys}/email-templates-cstm/`, (req, res) => emailTemplatesCstmCtrl.addEmailTemplateCstm(req, res));
router.get(`/api-${sys}/email-templates-cstm/:idC`, (req, res) => emailTemplatesCstmCtrl.getAEmailTemplateCstm(req, res));
router.put(`/api-${sys}/email-templates-cstm/:idC`, (req, res) => emailTemplatesCstmCtrl.updateEmailTemplateCstm(req, res));
router.delete(`/api-${sys}/email-templates-cstm/:idC`, (req, res) => emailTemplatesCstmCtrl.deleteEmailTemplateCstm(req, res));

//</es-section>
module.exports = router;
