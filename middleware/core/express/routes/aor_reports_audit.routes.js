/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:35:55 GMT-0400 (Bolivia Time)
 * Time: 18:35:55
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:35:55 GMT-0400 (Bolivia Time)
 * Last time updated: 18:35:55
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const aorReportsAuditCtrl = require("../controllers/aor_reports_audit.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/aor-reports-audit/findOneById/:id`, (req, res) => aorReportsAuditCtrl.findOneById(req, res));

router.get(`/api-${sys}/aor-reports-audit/findOneByCreatedBy/:createdBy`, (req, res) => aorReportsAuditCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/aor-reports-audit/findOneByFieldName/:fieldName`, (req, res) => aorReportsAuditCtrl.findOneByFieldName(req, res));

router.get(`/api-${sys}/aor-reports-audit/findOneByDataType/:dataType`, (req, res) => aorReportsAuditCtrl.findOneByDataType(req, res));

router.get(`/api-${sys}/aor-reports-audit/findOneByBeforeValueString/:beforeValueString`, (req, res) => aorReportsAuditCtrl.findOneByBeforeValueString(req, res));

router.get(`/api-${sys}/aor-reports-audit/findOneByAfterValueString/:afterValueString`, (req, res) => aorReportsAuditCtrl.findOneByAfterValueString(req, res));

router.get(`/api-${sys}/aor-reports-audit/findOneByBeforeValueText/:beforeValueText`, (req, res) => aorReportsAuditCtrl.findOneByBeforeValueText(req, res));

router.get(`/api-${sys}/aor-reports-audit/findOneByAfterValueText/:afterValueText`, (req, res) => aorReportsAuditCtrl.findOneByAfterValueText(req, res));

router.get(`/api-${sys}/aor-reports-audit/findOneByDateCreated/:dateCreated`, (req, res) => aorReportsAuditCtrl.findOneByDateCreated(req, res));

router.get(`/api-${sys}/aor-reports-audit/findOneByParentId/:parentId`, (req, res) => aorReportsAuditCtrl.findOneByParentId(req, res));



router.post(`/api-${sys}/aor-reports-audit/updateAorReportAuditById`, (req, res) => aorReportsAuditCtrl.updateAorReportAuditById(req, res));

router.post(`/api-${sys}/aor-reports-audit/updateAorReportAuditByCreatedBy`, (req, res) => aorReportsAuditCtrl.updateAorReportAuditByCreatedBy(req, res));

router.post(`/api-${sys}/aor-reports-audit/updateAorReportAuditByFieldName`, (req, res) => aorReportsAuditCtrl.updateAorReportAuditByFieldName(req, res));

router.post(`/api-${sys}/aor-reports-audit/updateAorReportAuditByDataType`, (req, res) => aorReportsAuditCtrl.updateAorReportAuditByDataType(req, res));

router.post(`/api-${sys}/aor-reports-audit/updateAorReportAuditByBeforeValueString`, (req, res) => aorReportsAuditCtrl.updateAorReportAuditByBeforeValueString(req, res));

router.post(`/api-${sys}/aor-reports-audit/updateAorReportAuditByAfterValueString`, (req, res) => aorReportsAuditCtrl.updateAorReportAuditByAfterValueString(req, res));

router.post(`/api-${sys}/aor-reports-audit/updateAorReportAuditByBeforeValueText`, (req, res) => aorReportsAuditCtrl.updateAorReportAuditByBeforeValueText(req, res));

router.post(`/api-${sys}/aor-reports-audit/updateAorReportAuditByAfterValueText`, (req, res) => aorReportsAuditCtrl.updateAorReportAuditByAfterValueText(req, res));

router.post(`/api-${sys}/aor-reports-audit/updateAorReportAuditByDateCreated`, (req, res) => aorReportsAuditCtrl.updateAorReportAuditByDateCreated(req, res));

router.post(`/api-${sys}/aor-reports-audit/updateAorReportAuditByParentId`, (req, res) => aorReportsAuditCtrl.updateAorReportAuditByParentId(req, res));





router.get(`/api-${sys}/aor-reports-audit/`, (req, res) => aorReportsAuditCtrl.getAllAorReportsAudit(req, res));
router.post(`/api-${sys}/aor-reports-audit/`, (req, res) => aorReportsAuditCtrl.addAorReportAudit(req, res));
router.get(`/api-${sys}/aor-reports-audit/:id`, (req, res) => aorReportsAuditCtrl.getAAorReportAudit(req, res));
router.put(`/api-${sys}/aor-reports-audit/:id`, (req, res) => aorReportsAuditCtrl.updateAorReportAudit(req, res));
router.delete(`/api-${sys}/aor-reports-audit/:id`, (req, res) => aorReportsAuditCtrl.deleteAorReportAudit(req, res));

//</es-section>
module.exports = router;
