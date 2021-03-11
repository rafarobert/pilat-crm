/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:03 GMT-0400 (Bolivia Time)
 * Time: 14:56:3
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:03 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:3
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const aorChartsCtrl = require("../controllers/aor_charts.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/aor-charts/findOneById/:id`, (req, res) => aorChartsCtrl.findOneById(req, res));

router.get(`/api-${sys}/aor-charts/findOneByDeleted/:deleted`, (req, res) => aorChartsCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/aor-charts/findOneByXField/:xField`, (req, res) => aorChartsCtrl.findOneByXField(req, res));

router.get(`/api-${sys}/aor-charts/findOneByYField/:yField`, (req, res) => aorChartsCtrl.findOneByYField(req, res));

router.get(`/api-${sys}/aor-charts/findOneByName/:name`, (req, res) => aorChartsCtrl.findOneByName(req, res));

router.get(`/api-${sys}/aor-charts/findOneByType/:type`, (req, res) => aorChartsCtrl.findOneByType(req, res));

router.get(`/api-${sys}/aor-charts/findOneByDescription/:description`, (req, res) => aorChartsCtrl.findOneByDescription(req, res));

router.get(`/api-${sys}/aor-charts/findOneByDateEntered/:dateEntered`, (req, res) => aorChartsCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/aor-charts/findOneByDateModified/:dateModified`, (req, res) => aorChartsCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/aor-charts/findOneByModifiedUserId/:modifiedUserId`, (req, res) => aorChartsCtrl.findOneByModifiedUserId(req, res));

router.get(`/api-${sys}/aor-charts/findOneByCreatedBy/:createdBy`, (req, res) => aorChartsCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/aor-charts/findOneByAorReportId/:aorReportId`, (req, res) => aorChartsCtrl.findOneByAorReportId(req, res));



router.post(`/api-${sys}/aor-charts/updateAorChartById`, (req, res) => aorChartsCtrl.updateAorChartById(req, res));

router.post(`/api-${sys}/aor-charts/updateAorChartByDeleted`, (req, res) => aorChartsCtrl.updateAorChartByDeleted(req, res));

router.post(`/api-${sys}/aor-charts/updateAorChartByXField`, (req, res) => aorChartsCtrl.updateAorChartByXField(req, res));

router.post(`/api-${sys}/aor-charts/updateAorChartByYField`, (req, res) => aorChartsCtrl.updateAorChartByYField(req, res));

router.post(`/api-${sys}/aor-charts/updateAorChartByName`, (req, res) => aorChartsCtrl.updateAorChartByName(req, res));

router.post(`/api-${sys}/aor-charts/updateAorChartByType`, (req, res) => aorChartsCtrl.updateAorChartByType(req, res));

router.post(`/api-${sys}/aor-charts/updateAorChartByDescription`, (req, res) => aorChartsCtrl.updateAorChartByDescription(req, res));

router.post(`/api-${sys}/aor-charts/updateAorChartByDateEntered`, (req, res) => aorChartsCtrl.updateAorChartByDateEntered(req, res));

router.post(`/api-${sys}/aor-charts/updateAorChartByDateModified`, (req, res) => aorChartsCtrl.updateAorChartByDateModified(req, res));

router.post(`/api-${sys}/aor-charts/updateAorChartByModifiedUserId`, (req, res) => aorChartsCtrl.updateAorChartByModifiedUserId(req, res));

router.post(`/api-${sys}/aor-charts/updateAorChartByCreatedBy`, (req, res) => aorChartsCtrl.updateAorChartByCreatedBy(req, res));

router.post(`/api-${sys}/aor-charts/updateAorChartByAorReportId`, (req, res) => aorChartsCtrl.updateAorChartByAorReportId(req, res));





router.get(`/api-${sys}/aor-charts/`, (req, res) => aorChartsCtrl.getAllAorCharts(req, res));
router.post(`/api-${sys}/datatable/aor-charts/`, (req, res) => aorChartsCtrl.getAllAorCharts(req, res));
router.post(`/api-${sys}/aor-charts/`, (req, res) => aorChartsCtrl.addAorChart(req, res));
router.get(`/api-${sys}/aor-charts/:id`, (req, res) => aorChartsCtrl.getAAorChart(req, res));
router.put(`/api-${sys}/aor-charts/:id`, (req, res) => aorChartsCtrl.updateAorChart(req, res));
router.delete(`/api-${sys}/aor-charts/:id`, (req, res) => aorChartsCtrl.deleteAorChart(req, res));

//</es-section>
module.exports = router;
