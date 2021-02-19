/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:35:35 GMT-0400 (Bolivia Time)
 * Time: 18:35:35
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:35:35 GMT-0400 (Bolivia Time)
 * Last time updated: 18:35:35
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const amTasktemplatesAuditCtrl = require("../controllers/am_tasktemplates_audit.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/am-tasktemplates-audit/findOneById/:id`, (req, res) => amTasktemplatesAuditCtrl.findOneById(req, res));

router.get(`/api-${sys}/am-tasktemplates-audit/findOneByCreatedBy/:createdBy`, (req, res) => amTasktemplatesAuditCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/am-tasktemplates-audit/findOneByFieldName/:fieldName`, (req, res) => amTasktemplatesAuditCtrl.findOneByFieldName(req, res));

router.get(`/api-${sys}/am-tasktemplates-audit/findOneByDataType/:dataType`, (req, res) => amTasktemplatesAuditCtrl.findOneByDataType(req, res));

router.get(`/api-${sys}/am-tasktemplates-audit/findOneByBeforeValueString/:beforeValueString`, (req, res) => amTasktemplatesAuditCtrl.findOneByBeforeValueString(req, res));

router.get(`/api-${sys}/am-tasktemplates-audit/findOneByAfterValueString/:afterValueString`, (req, res) => amTasktemplatesAuditCtrl.findOneByAfterValueString(req, res));

router.get(`/api-${sys}/am-tasktemplates-audit/findOneByBeforeValueText/:beforeValueText`, (req, res) => amTasktemplatesAuditCtrl.findOneByBeforeValueText(req, res));

router.get(`/api-${sys}/am-tasktemplates-audit/findOneByAfterValueText/:afterValueText`, (req, res) => amTasktemplatesAuditCtrl.findOneByAfterValueText(req, res));

router.get(`/api-${sys}/am-tasktemplates-audit/findOneByDateCreated/:dateCreated`, (req, res) => amTasktemplatesAuditCtrl.findOneByDateCreated(req, res));

router.get(`/api-${sys}/am-tasktemplates-audit/findOneByParentId/:parentId`, (req, res) => amTasktemplatesAuditCtrl.findOneByParentId(req, res));



router.post(`/api-${sys}/am-tasktemplates-audit/updateAmTasktemplateAuditById`, (req, res) => amTasktemplatesAuditCtrl.updateAmTasktemplateAuditById(req, res));

router.post(`/api-${sys}/am-tasktemplates-audit/updateAmTasktemplateAuditByCreatedBy`, (req, res) => amTasktemplatesAuditCtrl.updateAmTasktemplateAuditByCreatedBy(req, res));

router.post(`/api-${sys}/am-tasktemplates-audit/updateAmTasktemplateAuditByFieldName`, (req, res) => amTasktemplatesAuditCtrl.updateAmTasktemplateAuditByFieldName(req, res));

router.post(`/api-${sys}/am-tasktemplates-audit/updateAmTasktemplateAuditByDataType`, (req, res) => amTasktemplatesAuditCtrl.updateAmTasktemplateAuditByDataType(req, res));

router.post(`/api-${sys}/am-tasktemplates-audit/updateAmTasktemplateAuditByBeforeValueString`, (req, res) => amTasktemplatesAuditCtrl.updateAmTasktemplateAuditByBeforeValueString(req, res));

router.post(`/api-${sys}/am-tasktemplates-audit/updateAmTasktemplateAuditByAfterValueString`, (req, res) => amTasktemplatesAuditCtrl.updateAmTasktemplateAuditByAfterValueString(req, res));

router.post(`/api-${sys}/am-tasktemplates-audit/updateAmTasktemplateAuditByBeforeValueText`, (req, res) => amTasktemplatesAuditCtrl.updateAmTasktemplateAuditByBeforeValueText(req, res));

router.post(`/api-${sys}/am-tasktemplates-audit/updateAmTasktemplateAuditByAfterValueText`, (req, res) => amTasktemplatesAuditCtrl.updateAmTasktemplateAuditByAfterValueText(req, res));

router.post(`/api-${sys}/am-tasktemplates-audit/updateAmTasktemplateAuditByDateCreated`, (req, res) => amTasktemplatesAuditCtrl.updateAmTasktemplateAuditByDateCreated(req, res));

router.post(`/api-${sys}/am-tasktemplates-audit/updateAmTasktemplateAuditByParentId`, (req, res) => amTasktemplatesAuditCtrl.updateAmTasktemplateAuditByParentId(req, res));





router.get(`/api-${sys}/am-tasktemplates-audit/`, (req, res) => amTasktemplatesAuditCtrl.getAllAmTasktemplatesAudit(req, res));
router.post(`/api-${sys}/am-tasktemplates-audit/`, (req, res) => amTasktemplatesAuditCtrl.addAmTasktemplateAudit(req, res));
router.get(`/api-${sys}/am-tasktemplates-audit/:id`, (req, res) => amTasktemplatesAuditCtrl.getAAmTasktemplateAudit(req, res));
router.put(`/api-${sys}/am-tasktemplates-audit/:id`, (req, res) => amTasktemplatesAuditCtrl.updateAmTasktemplateAudit(req, res));
router.delete(`/api-${sys}/am-tasktemplates-audit/:id`, (req, res) => amTasktemplatesAuditCtrl.deleteAmTasktemplateAudit(req, res));

//</es-section>
module.exports = router;
