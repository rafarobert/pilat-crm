/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:22:17 GMT-0400 (Bolivia Time)
 * Time: 0:22:17
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:22:17 GMT-0400 (Bolivia Time)
 * Last time updated: 0:22:17
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const aosPdfTemplatesAuditCtrl = require("../controllers/aos_pdf_templates_audit.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/aos-pdf-templates-audit/findOneById/:id`, (req, res) => aosPdfTemplatesAuditCtrl.findOneById(req, res));

router.get(`/api-${sys}/aos-pdf-templates-audit/findOneByCreatedBy/:createdBy`, (req, res) => aosPdfTemplatesAuditCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/aos-pdf-templates-audit/findOneByFieldName/:fieldName`, (req, res) => aosPdfTemplatesAuditCtrl.findOneByFieldName(req, res));

router.get(`/api-${sys}/aos-pdf-templates-audit/findOneByDataType/:dataType`, (req, res) => aosPdfTemplatesAuditCtrl.findOneByDataType(req, res));

router.get(`/api-${sys}/aos-pdf-templates-audit/findOneByBeforeValueString/:beforeValueString`, (req, res) => aosPdfTemplatesAuditCtrl.findOneByBeforeValueString(req, res));

router.get(`/api-${sys}/aos-pdf-templates-audit/findOneByAfterValueString/:afterValueString`, (req, res) => aosPdfTemplatesAuditCtrl.findOneByAfterValueString(req, res));

router.get(`/api-${sys}/aos-pdf-templates-audit/findOneByBeforeValueText/:beforeValueText`, (req, res) => aosPdfTemplatesAuditCtrl.findOneByBeforeValueText(req, res));

router.get(`/api-${sys}/aos-pdf-templates-audit/findOneByAfterValueText/:afterValueText`, (req, res) => aosPdfTemplatesAuditCtrl.findOneByAfterValueText(req, res));

router.get(`/api-${sys}/aos-pdf-templates-audit/findOneByDateCreated/:dateCreated`, (req, res) => aosPdfTemplatesAuditCtrl.findOneByDateCreated(req, res));

router.get(`/api-${sys}/aos-pdf-templates-audit/findOneByParentId/:parentId`, (req, res) => aosPdfTemplatesAuditCtrl.findOneByParentId(req, res));



router.post(`/api-${sys}/aos-pdf-templates-audit/updateAoPdfTemplateAuditById`, (req, res) => aosPdfTemplatesAuditCtrl.updateAoPdfTemplateAuditById(req, res));

router.post(`/api-${sys}/aos-pdf-templates-audit/updateAoPdfTemplateAuditByCreatedBy`, (req, res) => aosPdfTemplatesAuditCtrl.updateAoPdfTemplateAuditByCreatedBy(req, res));

router.post(`/api-${sys}/aos-pdf-templates-audit/updateAoPdfTemplateAuditByFieldName`, (req, res) => aosPdfTemplatesAuditCtrl.updateAoPdfTemplateAuditByFieldName(req, res));

router.post(`/api-${sys}/aos-pdf-templates-audit/updateAoPdfTemplateAuditByDataType`, (req, res) => aosPdfTemplatesAuditCtrl.updateAoPdfTemplateAuditByDataType(req, res));

router.post(`/api-${sys}/aos-pdf-templates-audit/updateAoPdfTemplateAuditByBeforeValueString`, (req, res) => aosPdfTemplatesAuditCtrl.updateAoPdfTemplateAuditByBeforeValueString(req, res));

router.post(`/api-${sys}/aos-pdf-templates-audit/updateAoPdfTemplateAuditByAfterValueString`, (req, res) => aosPdfTemplatesAuditCtrl.updateAoPdfTemplateAuditByAfterValueString(req, res));

router.post(`/api-${sys}/aos-pdf-templates-audit/updateAoPdfTemplateAuditByBeforeValueText`, (req, res) => aosPdfTemplatesAuditCtrl.updateAoPdfTemplateAuditByBeforeValueText(req, res));

router.post(`/api-${sys}/aos-pdf-templates-audit/updateAoPdfTemplateAuditByAfterValueText`, (req, res) => aosPdfTemplatesAuditCtrl.updateAoPdfTemplateAuditByAfterValueText(req, res));

router.post(`/api-${sys}/aos-pdf-templates-audit/updateAoPdfTemplateAuditByDateCreated`, (req, res) => aosPdfTemplatesAuditCtrl.updateAoPdfTemplateAuditByDateCreated(req, res));

router.post(`/api-${sys}/aos-pdf-templates-audit/updateAoPdfTemplateAuditByParentId`, (req, res) => aosPdfTemplatesAuditCtrl.updateAoPdfTemplateAuditByParentId(req, res));





router.get(`/api-${sys}/aos-pdf-templates-audit/`, (req, res) => aosPdfTemplatesAuditCtrl.getAllAosPdfTemplatesAudit(req, res));
router.post(`/api-${sys}/aos-pdf-templates-audit/`, (req, res) => aosPdfTemplatesAuditCtrl.addAoPdfTemplateAudit(req, res));
router.get(`/api-${sys}/aos-pdf-templates-audit/:id`, (req, res) => aosPdfTemplatesAuditCtrl.getAAoPdfTemplateAudit(req, res));
router.put(`/api-${sys}/aos-pdf-templates-audit/:id`, (req, res) => aosPdfTemplatesAuditCtrl.updateAoPdfTemplateAudit(req, res));
router.delete(`/api-${sys}/aos-pdf-templates-audit/:id`, (req, res) => aosPdfTemplatesAuditCtrl.deleteAoPdfTemplateAudit(req, res));

//</es-section>
module.exports = router;
