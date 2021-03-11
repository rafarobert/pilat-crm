/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:55:52 GMT-0400 (Bolivia Time)
 * Time: 14:55:52
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:55:52 GMT-0400 (Bolivia Time)
 * Last time updated: 14:55:52
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const amProjecttemplatesAuditCtrl = require("../controllers/am_projecttemplates_audit.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/am-projecttemplates-audit/findOneById/:id`, (req, res) => amProjecttemplatesAuditCtrl.findOneById(req, res));

router.get(`/api-${sys}/am-projecttemplates-audit/findOneByCreatedBy/:createdBy`, (req, res) => amProjecttemplatesAuditCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/am-projecttemplates-audit/findOneByFieldName/:fieldName`, (req, res) => amProjecttemplatesAuditCtrl.findOneByFieldName(req, res));

router.get(`/api-${sys}/am-projecttemplates-audit/findOneByDataType/:dataType`, (req, res) => amProjecttemplatesAuditCtrl.findOneByDataType(req, res));

router.get(`/api-${sys}/am-projecttemplates-audit/findOneByBeforeValueString/:beforeValueString`, (req, res) => amProjecttemplatesAuditCtrl.findOneByBeforeValueString(req, res));

router.get(`/api-${sys}/am-projecttemplates-audit/findOneByAfterValueString/:afterValueString`, (req, res) => amProjecttemplatesAuditCtrl.findOneByAfterValueString(req, res));

router.get(`/api-${sys}/am-projecttemplates-audit/findOneByBeforeValueText/:beforeValueText`, (req, res) => amProjecttemplatesAuditCtrl.findOneByBeforeValueText(req, res));

router.get(`/api-${sys}/am-projecttemplates-audit/findOneByAfterValueText/:afterValueText`, (req, res) => amProjecttemplatesAuditCtrl.findOneByAfterValueText(req, res));

router.get(`/api-${sys}/am-projecttemplates-audit/findOneByDateCreated/:dateCreated`, (req, res) => amProjecttemplatesAuditCtrl.findOneByDateCreated(req, res));

router.get(`/api-${sys}/am-projecttemplates-audit/findOneByParentId/:parentId`, (req, res) => amProjecttemplatesAuditCtrl.findOneByParentId(req, res));



router.post(`/api-${sys}/am-projecttemplates-audit/updateAmProjecttemplateAuditById`, (req, res) => amProjecttemplatesAuditCtrl.updateAmProjecttemplateAuditById(req, res));

router.post(`/api-${sys}/am-projecttemplates-audit/updateAmProjecttemplateAuditByCreatedBy`, (req, res) => amProjecttemplatesAuditCtrl.updateAmProjecttemplateAuditByCreatedBy(req, res));

router.post(`/api-${sys}/am-projecttemplates-audit/updateAmProjecttemplateAuditByFieldName`, (req, res) => amProjecttemplatesAuditCtrl.updateAmProjecttemplateAuditByFieldName(req, res));

router.post(`/api-${sys}/am-projecttemplates-audit/updateAmProjecttemplateAuditByDataType`, (req, res) => amProjecttemplatesAuditCtrl.updateAmProjecttemplateAuditByDataType(req, res));

router.post(`/api-${sys}/am-projecttemplates-audit/updateAmProjecttemplateAuditByBeforeValueString`, (req, res) => amProjecttemplatesAuditCtrl.updateAmProjecttemplateAuditByBeforeValueString(req, res));

router.post(`/api-${sys}/am-projecttemplates-audit/updateAmProjecttemplateAuditByAfterValueString`, (req, res) => amProjecttemplatesAuditCtrl.updateAmProjecttemplateAuditByAfterValueString(req, res));

router.post(`/api-${sys}/am-projecttemplates-audit/updateAmProjecttemplateAuditByBeforeValueText`, (req, res) => amProjecttemplatesAuditCtrl.updateAmProjecttemplateAuditByBeforeValueText(req, res));

router.post(`/api-${sys}/am-projecttemplates-audit/updateAmProjecttemplateAuditByAfterValueText`, (req, res) => amProjecttemplatesAuditCtrl.updateAmProjecttemplateAuditByAfterValueText(req, res));

router.post(`/api-${sys}/am-projecttemplates-audit/updateAmProjecttemplateAuditByDateCreated`, (req, res) => amProjecttemplatesAuditCtrl.updateAmProjecttemplateAuditByDateCreated(req, res));

router.post(`/api-${sys}/am-projecttemplates-audit/updateAmProjecttemplateAuditByParentId`, (req, res) => amProjecttemplatesAuditCtrl.updateAmProjecttemplateAuditByParentId(req, res));





router.get(`/api-${sys}/am-projecttemplates-audit/`, (req, res) => amProjecttemplatesAuditCtrl.getAllAmProjecttemplatesAudit(req, res));
router.post(`/api-${sys}/am-projecttemplates-audit/`, (req, res) => amProjecttemplatesAuditCtrl.addAmProjecttemplateAudit(req, res));
router.get(`/api-${sys}/am-projecttemplates-audit/:id`, (req, res) => amProjecttemplatesAuditCtrl.getAAmProjecttemplateAudit(req, res));
router.put(`/api-${sys}/am-projecttemplates-audit/:id`, (req, res) => amProjecttemplatesAuditCtrl.updateAmProjecttemplateAudit(req, res));
router.delete(`/api-${sys}/am-projecttemplates-audit/:id`, (req, res) => amProjecttemplatesAuditCtrl.deleteAmProjecttemplateAudit(req, res));

//</es-section>
module.exports = router;
