/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:55:55 GMT-0400 (Bolivia Time)
 * Time: 14:55:55
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:55:55 GMT-0400 (Bolivia Time)
 * Last time updated: 14:55:55
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const analyticReportingCtrl = require("../controllers/analytic_reporting.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/analytic-reporting/findOneById/:id`, (req, res) => analyticReportingCtrl.findOneById(req, res));

router.get(`/api-${sys}/analytic-reporting/findOneByDeleted/:deleted`, (req, res) => analyticReportingCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/analytic-reporting/findOneByName/:name`, (req, res) => analyticReportingCtrl.findOneByName(req, res));

router.get(`/api-${sys}/analytic-reporting/findOneByDescription/:description`, (req, res) => analyticReportingCtrl.findOneByDescription(req, res));

router.get(`/api-${sys}/analytic-reporting/findOneByDateEntered/:dateEntered`, (req, res) => analyticReportingCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/analytic-reporting/findOneByDateModified/:dateModified`, (req, res) => analyticReportingCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/analytic-reporting/findOneByModifiedUserId/:modifiedUserId`, (req, res) => analyticReportingCtrl.findOneByModifiedUserId(req, res));

router.get(`/api-${sys}/analytic-reporting/findOneByCreatedBy/:createdBy`, (req, res) => analyticReportingCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/analytic-reporting/findOneByAssignedUserId/:assignedUserId`, (req, res) => analyticReportingCtrl.findOneByAssignedUserId(req, res));



router.post(`/api-${sys}/analytic-reporting/updateAnalyticReportingById`, (req, res) => analyticReportingCtrl.updateAnalyticReportingById(req, res));

router.post(`/api-${sys}/analytic-reporting/updateAnalyticReportingByDeleted`, (req, res) => analyticReportingCtrl.updateAnalyticReportingByDeleted(req, res));

router.post(`/api-${sys}/analytic-reporting/updateAnalyticReportingByName`, (req, res) => analyticReportingCtrl.updateAnalyticReportingByName(req, res));

router.post(`/api-${sys}/analytic-reporting/updateAnalyticReportingByDescription`, (req, res) => analyticReportingCtrl.updateAnalyticReportingByDescription(req, res));

router.post(`/api-${sys}/analytic-reporting/updateAnalyticReportingByDateEntered`, (req, res) => analyticReportingCtrl.updateAnalyticReportingByDateEntered(req, res));

router.post(`/api-${sys}/analytic-reporting/updateAnalyticReportingByDateModified`, (req, res) => analyticReportingCtrl.updateAnalyticReportingByDateModified(req, res));

router.post(`/api-${sys}/analytic-reporting/updateAnalyticReportingByModifiedUserId`, (req, res) => analyticReportingCtrl.updateAnalyticReportingByModifiedUserId(req, res));

router.post(`/api-${sys}/analytic-reporting/updateAnalyticReportingByCreatedBy`, (req, res) => analyticReportingCtrl.updateAnalyticReportingByCreatedBy(req, res));

router.post(`/api-${sys}/analytic-reporting/updateAnalyticReportingByAssignedUserId`, (req, res) => analyticReportingCtrl.updateAnalyticReportingByAssignedUserId(req, res));





router.get(`/api-${sys}/analytic-reporting/`, (req, res) => analyticReportingCtrl.getAllAnalyticReporting(req, res));
router.post(`/api-${sys}/analytic-reporting/`, (req, res) => analyticReportingCtrl.addAnalyticReporting(req, res));
router.get(`/api-${sys}/analytic-reporting/:id`, (req, res) => analyticReportingCtrl.getAAnalyticReporting(req, res));
router.put(`/api-${sys}/analytic-reporting/:id`, (req, res) => analyticReportingCtrl.updateAnalyticReporting(req, res));
router.delete(`/api-${sys}/analytic-reporting/:id`, (req, res) => analyticReportingCtrl.deleteAnalyticReporting(req, res));

//</es-section>
module.exports = router;
