/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:05 GMT-0400 (Bolivia Time)
 * Time: 14:56:5
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:05 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:5
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const aorReportsCtrl = require("../controllers/aor_reports.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/aor-reports/findOneById/:id`, (req, res) => aorReportsCtrl.findOneById(req, res));

router.get(`/api-${sys}/aor-reports/findOneByDeleted/:deleted`, (req, res) => aorReportsCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/aor-reports/findOneByGraphsPerRow/:graphsPerRow`, (req, res) => aorReportsCtrl.findOneByGraphsPerRow(req, res));

router.get(`/api-${sys}/aor-reports/findOneByName/:name`, (req, res) => aorReportsCtrl.findOneByName(req, res));

router.get(`/api-${sys}/aor-reports/findOneByReportModule/:reportModule`, (req, res) => aorReportsCtrl.findOneByReportModule(req, res));

router.get(`/api-${sys}/aor-reports/findOneByDescription/:description`, (req, res) => aorReportsCtrl.findOneByDescription(req, res));

router.get(`/api-${sys}/aor-reports/findOneByDateEntered/:dateEntered`, (req, res) => aorReportsCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/aor-reports/findOneByDateModified/:dateModified`, (req, res) => aorReportsCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/aor-reports/findOneByModifiedUserId/:modifiedUserId`, (req, res) => aorReportsCtrl.findOneByModifiedUserId(req, res));

router.get(`/api-${sys}/aor-reports/findOneByCreatedBy/:createdBy`, (req, res) => aorReportsCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/aor-reports/findOneByAssignedUserId/:assignedUserId`, (req, res) => aorReportsCtrl.findOneByAssignedUserId(req, res));



router.post(`/api-${sys}/aor-reports/updateAorReportById`, (req, res) => aorReportsCtrl.updateAorReportById(req, res));

router.post(`/api-${sys}/aor-reports/updateAorReportByDeleted`, (req, res) => aorReportsCtrl.updateAorReportByDeleted(req, res));

router.post(`/api-${sys}/aor-reports/updateAorReportByGraphsPerRow`, (req, res) => aorReportsCtrl.updateAorReportByGraphsPerRow(req, res));

router.post(`/api-${sys}/aor-reports/updateAorReportByName`, (req, res) => aorReportsCtrl.updateAorReportByName(req, res));

router.post(`/api-${sys}/aor-reports/updateAorReportByReportModule`, (req, res) => aorReportsCtrl.updateAorReportByReportModule(req, res));

router.post(`/api-${sys}/aor-reports/updateAorReportByDescription`, (req, res) => aorReportsCtrl.updateAorReportByDescription(req, res));

router.post(`/api-${sys}/aor-reports/updateAorReportByDateEntered`, (req, res) => aorReportsCtrl.updateAorReportByDateEntered(req, res));

router.post(`/api-${sys}/aor-reports/updateAorReportByDateModified`, (req, res) => aorReportsCtrl.updateAorReportByDateModified(req, res));

router.post(`/api-${sys}/aor-reports/updateAorReportByModifiedUserId`, (req, res) => aorReportsCtrl.updateAorReportByModifiedUserId(req, res));

router.post(`/api-${sys}/aor-reports/updateAorReportByCreatedBy`, (req, res) => aorReportsCtrl.updateAorReportByCreatedBy(req, res));

router.post(`/api-${sys}/aor-reports/updateAorReportByAssignedUserId`, (req, res) => aorReportsCtrl.updateAorReportByAssignedUserId(req, res));





router.get(`/api-${sys}/aor-reports/`, (req, res) => aorReportsCtrl.getAllAorReports(req, res));
router.post(`/api-${sys}/aor-reports/`, (req, res) => aorReportsCtrl.addAorReport(req, res));
router.get(`/api-${sys}/aor-reports/:id`, (req, res) => aorReportsCtrl.getAAorReport(req, res));
router.put(`/api-${sys}/aor-reports/:id`, (req, res) => aorReportsCtrl.updateAorReport(req, res));
router.delete(`/api-${sys}/aor-reports/:id`, (req, res) => aorReportsCtrl.deleteAorReport(req, res));

//</es-section>
module.exports = router;
