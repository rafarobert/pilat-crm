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
const emailTemplatesCtrl = require("../controllers/email_templates.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/email-templates/findOneById/:id`, (req, res) => emailTemplatesCtrl.findOneById(req, res));

router.get(`/api-${sys}/email-templates/findOneByDeleted/:deleted`, (req, res) => emailTemplatesCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/email-templates/findOneByTextOnly/:textOnly`, (req, res) => emailTemplatesCtrl.findOneByTextOnly(req, res));

router.get(`/api-${sys}/email-templates/findOneByCreatedBy/:createdBy`, (req, res) => emailTemplatesCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/email-templates/findOneByPublished/:published`, (req, res) => emailTemplatesCtrl.findOneByPublished(req, res));

router.get(`/api-${sys}/email-templates/findOneByName/:name`, (req, res) => emailTemplatesCtrl.findOneByName(req, res));

router.get(`/api-${sys}/email-templates/findOneBySubject/:subject`, (req, res) => emailTemplatesCtrl.findOneBySubject(req, res));

router.get(`/api-${sys}/email-templates/findOneByType/:type`, (req, res) => emailTemplatesCtrl.findOneByType(req, res));

router.get(`/api-${sys}/email-templates/findOneByDescription/:description`, (req, res) => emailTemplatesCtrl.findOneByDescription(req, res));

router.get(`/api-${sys}/email-templates/findOneByBody/:body`, (req, res) => emailTemplatesCtrl.findOneByBody(req, res));

router.get(`/api-${sys}/email-templates/findOneByBodyHtml/:bodyHtml`, (req, res) => emailTemplatesCtrl.findOneByBodyHtml(req, res));

router.get(`/api-${sys}/email-templates/findOneByDateEntered/:dateEntered`, (req, res) => emailTemplatesCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/email-templates/findOneByDateModified/:dateModified`, (req, res) => emailTemplatesCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/email-templates/findOneByModifiedUserId/:modifiedUserId`, (req, res) => emailTemplatesCtrl.findOneByModifiedUserId(req, res));

router.get(`/api-${sys}/email-templates/findOneByAssignedUserId/:assignedUserId`, (req, res) => emailTemplatesCtrl.findOneByAssignedUserId(req, res));



router.post(`/api-${sys}/email-templates/updateEmailTemplateById`, (req, res) => emailTemplatesCtrl.updateEmailTemplateById(req, res));

router.post(`/api-${sys}/email-templates/updateEmailTemplateByDeleted`, (req, res) => emailTemplatesCtrl.updateEmailTemplateByDeleted(req, res));

router.post(`/api-${sys}/email-templates/updateEmailTemplateByTextOnly`, (req, res) => emailTemplatesCtrl.updateEmailTemplateByTextOnly(req, res));

router.post(`/api-${sys}/email-templates/updateEmailTemplateByCreatedBy`, (req, res) => emailTemplatesCtrl.updateEmailTemplateByCreatedBy(req, res));

router.post(`/api-${sys}/email-templates/updateEmailTemplateByPublished`, (req, res) => emailTemplatesCtrl.updateEmailTemplateByPublished(req, res));

router.post(`/api-${sys}/email-templates/updateEmailTemplateByName`, (req, res) => emailTemplatesCtrl.updateEmailTemplateByName(req, res));

router.post(`/api-${sys}/email-templates/updateEmailTemplateBySubject`, (req, res) => emailTemplatesCtrl.updateEmailTemplateBySubject(req, res));

router.post(`/api-${sys}/email-templates/updateEmailTemplateByType`, (req, res) => emailTemplatesCtrl.updateEmailTemplateByType(req, res));

router.post(`/api-${sys}/email-templates/updateEmailTemplateByDescription`, (req, res) => emailTemplatesCtrl.updateEmailTemplateByDescription(req, res));

router.post(`/api-${sys}/email-templates/updateEmailTemplateByBody`, (req, res) => emailTemplatesCtrl.updateEmailTemplateByBody(req, res));

router.post(`/api-${sys}/email-templates/updateEmailTemplateByBodyHtml`, (req, res) => emailTemplatesCtrl.updateEmailTemplateByBodyHtml(req, res));

router.post(`/api-${sys}/email-templates/updateEmailTemplateByDateEntered`, (req, res) => emailTemplatesCtrl.updateEmailTemplateByDateEntered(req, res));

router.post(`/api-${sys}/email-templates/updateEmailTemplateByDateModified`, (req, res) => emailTemplatesCtrl.updateEmailTemplateByDateModified(req, res));

router.post(`/api-${sys}/email-templates/updateEmailTemplateByModifiedUserId`, (req, res) => emailTemplatesCtrl.updateEmailTemplateByModifiedUserId(req, res));

router.post(`/api-${sys}/email-templates/updateEmailTemplateByAssignedUserId`, (req, res) => emailTemplatesCtrl.updateEmailTemplateByAssignedUserId(req, res));





router.get(`/api-${sys}/email-templates/`, (req, res) => emailTemplatesCtrl.getAllEmailTemplates(req, res));
router.post(`/api-${sys}/email-templates/`, (req, res) => emailTemplatesCtrl.addEmailTemplate(req, res));
router.get(`/api-${sys}/email-templates/:id`, (req, res) => emailTemplatesCtrl.getAEmailTemplate(req, res));
router.put(`/api-${sys}/email-templates/:id`, (req, res) => emailTemplatesCtrl.updateEmailTemplate(req, res));
router.delete(`/api-${sys}/email-templates/:id`, (req, res) => emailTemplatesCtrl.deleteEmailTemplate(req, res));

//</es-section>
module.exports = router;
