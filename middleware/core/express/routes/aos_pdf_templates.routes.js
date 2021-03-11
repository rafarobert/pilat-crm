/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:14 GMT-0400 (Bolivia Time)
 * Time: 14:56:14
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:14 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:14
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const aosPdfTemplatesCtrl = require("../controllers/aos_pdf_templates.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/aos-pdf-templates/findOneById/:id`, (req, res) => aosPdfTemplatesCtrl.findOneById(req, res));

router.get(`/api-${sys}/aos-pdf-templates/findOneByDeleted/:deleted`, (req, res) => aosPdfTemplatesCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/aos-pdf-templates/findOneByActive/:active`, (req, res) => aosPdfTemplatesCtrl.findOneByActive(req, res));

router.get(`/api-${sys}/aos-pdf-templates/findOneByMarginLeft/:marginLeft`, (req, res) => aosPdfTemplatesCtrl.findOneByMarginLeft(req, res));

router.get(`/api-${sys}/aos-pdf-templates/findOneByMarginRight/:marginRight`, (req, res) => aosPdfTemplatesCtrl.findOneByMarginRight(req, res));

router.get(`/api-${sys}/aos-pdf-templates/findOneByMarginTop/:marginTop`, (req, res) => aosPdfTemplatesCtrl.findOneByMarginTop(req, res));

router.get(`/api-${sys}/aos-pdf-templates/findOneByMarginBottom/:marginBottom`, (req, res) => aosPdfTemplatesCtrl.findOneByMarginBottom(req, res));

router.get(`/api-${sys}/aos-pdf-templates/findOneByMarginHeader/:marginHeader`, (req, res) => aosPdfTemplatesCtrl.findOneByMarginHeader(req, res));

router.get(`/api-${sys}/aos-pdf-templates/findOneByMarginFooter/:marginFooter`, (req, res) => aosPdfTemplatesCtrl.findOneByMarginFooter(req, res));

router.get(`/api-${sys}/aos-pdf-templates/findOneByName/:name`, (req, res) => aosPdfTemplatesCtrl.findOneByName(req, res));

router.get(`/api-${sys}/aos-pdf-templates/findOneByType/:type`, (req, res) => aosPdfTemplatesCtrl.findOneByType(req, res));

router.get(`/api-${sys}/aos-pdf-templates/findOneByPageSize/:pageSize`, (req, res) => aosPdfTemplatesCtrl.findOneByPageSize(req, res));

router.get(`/api-${sys}/aos-pdf-templates/findOneByOrientation/:orientation`, (req, res) => aosPdfTemplatesCtrl.findOneByOrientation(req, res));

router.get(`/api-${sys}/aos-pdf-templates/findOneByDescription/:description`, (req, res) => aosPdfTemplatesCtrl.findOneByDescription(req, res));

router.get(`/api-${sys}/aos-pdf-templates/findOneByPdfheader/:pdfheader`, (req, res) => aosPdfTemplatesCtrl.findOneByPdfheader(req, res));

router.get(`/api-${sys}/aos-pdf-templates/findOneByPdffooter/:pdffooter`, (req, res) => aosPdfTemplatesCtrl.findOneByPdffooter(req, res));

router.get(`/api-${sys}/aos-pdf-templates/findOneByDateEntered/:dateEntered`, (req, res) => aosPdfTemplatesCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/aos-pdf-templates/findOneByDateModified/:dateModified`, (req, res) => aosPdfTemplatesCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/aos-pdf-templates/findOneByModifiedUserId/:modifiedUserId`, (req, res) => aosPdfTemplatesCtrl.findOneByModifiedUserId(req, res));

router.get(`/api-${sys}/aos-pdf-templates/findOneByCreatedBy/:createdBy`, (req, res) => aosPdfTemplatesCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/aos-pdf-templates/findOneByAssignedUserId/:assignedUserId`, (req, res) => aosPdfTemplatesCtrl.findOneByAssignedUserId(req, res));



router.post(`/api-${sys}/aos-pdf-templates/updateAoPdfTemplateById`, (req, res) => aosPdfTemplatesCtrl.updateAoPdfTemplateById(req, res));

router.post(`/api-${sys}/aos-pdf-templates/updateAoPdfTemplateByDeleted`, (req, res) => aosPdfTemplatesCtrl.updateAoPdfTemplateByDeleted(req, res));

router.post(`/api-${sys}/aos-pdf-templates/updateAoPdfTemplateByActive`, (req, res) => aosPdfTemplatesCtrl.updateAoPdfTemplateByActive(req, res));

router.post(`/api-${sys}/aos-pdf-templates/updateAoPdfTemplateByMarginLeft`, (req, res) => aosPdfTemplatesCtrl.updateAoPdfTemplateByMarginLeft(req, res));

router.post(`/api-${sys}/aos-pdf-templates/updateAoPdfTemplateByMarginRight`, (req, res) => aosPdfTemplatesCtrl.updateAoPdfTemplateByMarginRight(req, res));

router.post(`/api-${sys}/aos-pdf-templates/updateAoPdfTemplateByMarginTop`, (req, res) => aosPdfTemplatesCtrl.updateAoPdfTemplateByMarginTop(req, res));

router.post(`/api-${sys}/aos-pdf-templates/updateAoPdfTemplateByMarginBottom`, (req, res) => aosPdfTemplatesCtrl.updateAoPdfTemplateByMarginBottom(req, res));

router.post(`/api-${sys}/aos-pdf-templates/updateAoPdfTemplateByMarginHeader`, (req, res) => aosPdfTemplatesCtrl.updateAoPdfTemplateByMarginHeader(req, res));

router.post(`/api-${sys}/aos-pdf-templates/updateAoPdfTemplateByMarginFooter`, (req, res) => aosPdfTemplatesCtrl.updateAoPdfTemplateByMarginFooter(req, res));

router.post(`/api-${sys}/aos-pdf-templates/updateAoPdfTemplateByName`, (req, res) => aosPdfTemplatesCtrl.updateAoPdfTemplateByName(req, res));

router.post(`/api-${sys}/aos-pdf-templates/updateAoPdfTemplateByType`, (req, res) => aosPdfTemplatesCtrl.updateAoPdfTemplateByType(req, res));

router.post(`/api-${sys}/aos-pdf-templates/updateAoPdfTemplateByPageSize`, (req, res) => aosPdfTemplatesCtrl.updateAoPdfTemplateByPageSize(req, res));

router.post(`/api-${sys}/aos-pdf-templates/updateAoPdfTemplateByOrientation`, (req, res) => aosPdfTemplatesCtrl.updateAoPdfTemplateByOrientation(req, res));

router.post(`/api-${sys}/aos-pdf-templates/updateAoPdfTemplateByDescription`, (req, res) => aosPdfTemplatesCtrl.updateAoPdfTemplateByDescription(req, res));

router.post(`/api-${sys}/aos-pdf-templates/updateAoPdfTemplateByPdfheader`, (req, res) => aosPdfTemplatesCtrl.updateAoPdfTemplateByPdfheader(req, res));

router.post(`/api-${sys}/aos-pdf-templates/updateAoPdfTemplateByPdffooter`, (req, res) => aosPdfTemplatesCtrl.updateAoPdfTemplateByPdffooter(req, res));

router.post(`/api-${sys}/aos-pdf-templates/updateAoPdfTemplateByDateEntered`, (req, res) => aosPdfTemplatesCtrl.updateAoPdfTemplateByDateEntered(req, res));

router.post(`/api-${sys}/aos-pdf-templates/updateAoPdfTemplateByDateModified`, (req, res) => aosPdfTemplatesCtrl.updateAoPdfTemplateByDateModified(req, res));

router.post(`/api-${sys}/aos-pdf-templates/updateAoPdfTemplateByModifiedUserId`, (req, res) => aosPdfTemplatesCtrl.updateAoPdfTemplateByModifiedUserId(req, res));

router.post(`/api-${sys}/aos-pdf-templates/updateAoPdfTemplateByCreatedBy`, (req, res) => aosPdfTemplatesCtrl.updateAoPdfTemplateByCreatedBy(req, res));

router.post(`/api-${sys}/aos-pdf-templates/updateAoPdfTemplateByAssignedUserId`, (req, res) => aosPdfTemplatesCtrl.updateAoPdfTemplateByAssignedUserId(req, res));





router.get(`/api-${sys}/aos-pdf-templates/`, (req, res) => aosPdfTemplatesCtrl.getAllAosPdfTemplates(req, res));
router.post(`/api-${sys}/datatable/aos-pdf-templates/`, (req, res) => aosPdfTemplatesCtrl.getAllAosPdfTemplates(req, res));
router.post(`/api-${sys}/aos-pdf-templates/`, (req, res) => aosPdfTemplatesCtrl.addAoPdfTemplate(req, res));
router.get(`/api-${sys}/aos-pdf-templates/:id`, (req, res) => aosPdfTemplatesCtrl.getAAoPdfTemplate(req, res));
router.put(`/api-${sys}/aos-pdf-templates/:id`, (req, res) => aosPdfTemplatesCtrl.updateAoPdfTemplate(req, res));
router.delete(`/api-${sys}/aos-pdf-templates/:id`, (req, res) => aosPdfTemplatesCtrl.deleteAoPdfTemplate(req, res));

//</es-section>
module.exports = router;
