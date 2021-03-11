/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:06 GMT-0400 (Bolivia Time)
 * Time: 14:56:6
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:06 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:6
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const aorScheduledReportsCtrl = require("../controllers/aor_scheduled_reports.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/aor-scheduled-reports/findOneById/:id`, (req, res) => aorScheduledReportsCtrl.findOneById(req, res));

router.get(`/api-${sys}/aor-scheduled-reports/findOneByDeleted/:deleted`, (req, res) => aorScheduledReportsCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/aor-scheduled-reports/findOneByName/:name`, (req, res) => aorScheduledReportsCtrl.findOneByName(req, res));

router.get(`/api-${sys}/aor-scheduled-reports/findOneBySchedule/:schedule`, (req, res) => aorScheduledReportsCtrl.findOneBySchedule(req, res));

router.get(`/api-${sys}/aor-scheduled-reports/findOneByStatus/:status`, (req, res) => aorScheduledReportsCtrl.findOneByStatus(req, res));

router.get(`/api-${sys}/aor-scheduled-reports/findOneByDescription/:description`, (req, res) => aorScheduledReportsCtrl.findOneByDescription(req, res));

router.get(`/api-${sys}/aor-scheduled-reports/findOneByEmailRecipients/:emailRecipients`, (req, res) => aorScheduledReportsCtrl.findOneByEmailRecipients(req, res));

router.get(`/api-${sys}/aor-scheduled-reports/findOneByDateEntered/:dateEntered`, (req, res) => aorScheduledReportsCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/aor-scheduled-reports/findOneByDateModified/:dateModified`, (req, res) => aorScheduledReportsCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/aor-scheduled-reports/findOneByLastRun/:lastRun`, (req, res) => aorScheduledReportsCtrl.findOneByLastRun(req, res));

router.get(`/api-${sys}/aor-scheduled-reports/findOneByModifiedUserId/:modifiedUserId`, (req, res) => aorScheduledReportsCtrl.findOneByModifiedUserId(req, res));

router.get(`/api-${sys}/aor-scheduled-reports/findOneByCreatedBy/:createdBy`, (req, res) => aorScheduledReportsCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/aor-scheduled-reports/findOneByAorReportId/:aorReportId`, (req, res) => aorScheduledReportsCtrl.findOneByAorReportId(req, res));



router.post(`/api-${sys}/aor-scheduled-reports/updateAorScheduledReportById`, (req, res) => aorScheduledReportsCtrl.updateAorScheduledReportById(req, res));

router.post(`/api-${sys}/aor-scheduled-reports/updateAorScheduledReportByDeleted`, (req, res) => aorScheduledReportsCtrl.updateAorScheduledReportByDeleted(req, res));

router.post(`/api-${sys}/aor-scheduled-reports/updateAorScheduledReportByName`, (req, res) => aorScheduledReportsCtrl.updateAorScheduledReportByName(req, res));

router.post(`/api-${sys}/aor-scheduled-reports/updateAorScheduledReportBySchedule`, (req, res) => aorScheduledReportsCtrl.updateAorScheduledReportBySchedule(req, res));

router.post(`/api-${sys}/aor-scheduled-reports/updateAorScheduledReportByStatus`, (req, res) => aorScheduledReportsCtrl.updateAorScheduledReportByStatus(req, res));

router.post(`/api-${sys}/aor-scheduled-reports/updateAorScheduledReportByDescription`, (req, res) => aorScheduledReportsCtrl.updateAorScheduledReportByDescription(req, res));

router.post(`/api-${sys}/aor-scheduled-reports/updateAorScheduledReportByEmailRecipients`, (req, res) => aorScheduledReportsCtrl.updateAorScheduledReportByEmailRecipients(req, res));

router.post(`/api-${sys}/aor-scheduled-reports/updateAorScheduledReportByDateEntered`, (req, res) => aorScheduledReportsCtrl.updateAorScheduledReportByDateEntered(req, res));

router.post(`/api-${sys}/aor-scheduled-reports/updateAorScheduledReportByDateModified`, (req, res) => aorScheduledReportsCtrl.updateAorScheduledReportByDateModified(req, res));

router.post(`/api-${sys}/aor-scheduled-reports/updateAorScheduledReportByLastRun`, (req, res) => aorScheduledReportsCtrl.updateAorScheduledReportByLastRun(req, res));

router.post(`/api-${sys}/aor-scheduled-reports/updateAorScheduledReportByModifiedUserId`, (req, res) => aorScheduledReportsCtrl.updateAorScheduledReportByModifiedUserId(req, res));

router.post(`/api-${sys}/aor-scheduled-reports/updateAorScheduledReportByCreatedBy`, (req, res) => aorScheduledReportsCtrl.updateAorScheduledReportByCreatedBy(req, res));

router.post(`/api-${sys}/aor-scheduled-reports/updateAorScheduledReportByAorReportId`, (req, res) => aorScheduledReportsCtrl.updateAorScheduledReportByAorReportId(req, res));





router.get(`/api-${sys}/aor-scheduled-reports/`, (req, res) => aorScheduledReportsCtrl.getAllAorScheduledReports(req, res));
router.post(`/api-${sys}/aor-scheduled-reports/`, (req, res) => aorScheduledReportsCtrl.addAorScheduledReport(req, res));
router.get(`/api-${sys}/aor-scheduled-reports/:id`, (req, res) => aorScheduledReportsCtrl.getAAorScheduledReport(req, res));
router.put(`/api-${sys}/aor-scheduled-reports/:id`, (req, res) => aorScheduledReportsCtrl.updateAorScheduledReport(req, res));
router.delete(`/api-${sys}/aor-scheduled-reports/:id`, (req, res) => aorScheduledReportsCtrl.deleteAorScheduledReport(req, res));

//</es-section>
module.exports = router;
