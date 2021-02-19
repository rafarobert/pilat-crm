/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:44:13 GMT-0400 (Bolivia Time)
 * Time: 4:44:13
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:44:13 GMT-0400 (Bolivia Time)
 * Last time updated: 4:44:13
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const surveyquestionresponsesAuditCtrl = require("../controllers/surveyquestionresponses_audit.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/surveyquestionresponses-audit/findOneById/:id`, (req, res) => surveyquestionresponsesAuditCtrl.findOneById(req, res));

router.get(`/api-${sys}/surveyquestionresponses-audit/findOneByCreatedBy/:createdBy`, (req, res) => surveyquestionresponsesAuditCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/surveyquestionresponses-audit/findOneByFieldName/:fieldName`, (req, res) => surveyquestionresponsesAuditCtrl.findOneByFieldName(req, res));

router.get(`/api-${sys}/surveyquestionresponses-audit/findOneByDataType/:dataType`, (req, res) => surveyquestionresponsesAuditCtrl.findOneByDataType(req, res));

router.get(`/api-${sys}/surveyquestionresponses-audit/findOneByBeforeValueString/:beforeValueString`, (req, res) => surveyquestionresponsesAuditCtrl.findOneByBeforeValueString(req, res));

router.get(`/api-${sys}/surveyquestionresponses-audit/findOneByAfterValueString/:afterValueString`, (req, res) => surveyquestionresponsesAuditCtrl.findOneByAfterValueString(req, res));

router.get(`/api-${sys}/surveyquestionresponses-audit/findOneByBeforeValueText/:beforeValueText`, (req, res) => surveyquestionresponsesAuditCtrl.findOneByBeforeValueText(req, res));

router.get(`/api-${sys}/surveyquestionresponses-audit/findOneByAfterValueText/:afterValueText`, (req, res) => surveyquestionresponsesAuditCtrl.findOneByAfterValueText(req, res));

router.get(`/api-${sys}/surveyquestionresponses-audit/findOneByDateCreated/:dateCreated`, (req, res) => surveyquestionresponsesAuditCtrl.findOneByDateCreated(req, res));

router.get(`/api-${sys}/surveyquestionresponses-audit/findOneByParentId/:parentId`, (req, res) => surveyquestionresponsesAuditCtrl.findOneByParentId(req, res));



router.post(`/api-${sys}/surveyquestionresponses-audit/updateSurveyquestionresponseAuditById`, (req, res) => surveyquestionresponsesAuditCtrl.updateSurveyquestionresponseAuditById(req, res));

router.post(`/api-${sys}/surveyquestionresponses-audit/updateSurveyquestionresponseAuditByCreatedBy`, (req, res) => surveyquestionresponsesAuditCtrl.updateSurveyquestionresponseAuditByCreatedBy(req, res));

router.post(`/api-${sys}/surveyquestionresponses-audit/updateSurveyquestionresponseAuditByFieldName`, (req, res) => surveyquestionresponsesAuditCtrl.updateSurveyquestionresponseAuditByFieldName(req, res));

router.post(`/api-${sys}/surveyquestionresponses-audit/updateSurveyquestionresponseAuditByDataType`, (req, res) => surveyquestionresponsesAuditCtrl.updateSurveyquestionresponseAuditByDataType(req, res));

router.post(`/api-${sys}/surveyquestionresponses-audit/updateSurveyquestionresponseAuditByBeforeValueString`, (req, res) => surveyquestionresponsesAuditCtrl.updateSurveyquestionresponseAuditByBeforeValueString(req, res));

router.post(`/api-${sys}/surveyquestionresponses-audit/updateSurveyquestionresponseAuditByAfterValueString`, (req, res) => surveyquestionresponsesAuditCtrl.updateSurveyquestionresponseAuditByAfterValueString(req, res));

router.post(`/api-${sys}/surveyquestionresponses-audit/updateSurveyquestionresponseAuditByBeforeValueText`, (req, res) => surveyquestionresponsesAuditCtrl.updateSurveyquestionresponseAuditByBeforeValueText(req, res));

router.post(`/api-${sys}/surveyquestionresponses-audit/updateSurveyquestionresponseAuditByAfterValueText`, (req, res) => surveyquestionresponsesAuditCtrl.updateSurveyquestionresponseAuditByAfterValueText(req, res));

router.post(`/api-${sys}/surveyquestionresponses-audit/updateSurveyquestionresponseAuditByDateCreated`, (req, res) => surveyquestionresponsesAuditCtrl.updateSurveyquestionresponseAuditByDateCreated(req, res));

router.post(`/api-${sys}/surveyquestionresponses-audit/updateSurveyquestionresponseAuditByParentId`, (req, res) => surveyquestionresponsesAuditCtrl.updateSurveyquestionresponseAuditByParentId(req, res));





router.get(`/api-${sys}/surveyquestionresponses-audit/`, (req, res) => surveyquestionresponsesAuditCtrl.getAllSurveyquestionresponsesAudit(req, res));
router.post(`/api-${sys}/surveyquestionresponses-audit/`, (req, res) => surveyquestionresponsesAuditCtrl.addSurveyquestionresponseAudit(req, res));
router.get(`/api-${sys}/surveyquestionresponses-audit/:id`, (req, res) => surveyquestionresponsesAuditCtrl.getASurveyquestionresponseAudit(req, res));
router.put(`/api-${sys}/surveyquestionresponses-audit/:id`, (req, res) => surveyquestionresponsesAuditCtrl.updateSurveyquestionresponseAudit(req, res));
router.delete(`/api-${sys}/surveyquestionresponses-audit/:id`, (req, res) => surveyquestionresponsesAuditCtrl.deleteSurveyquestionresponseAudit(req, res));

//</es-section>
module.exports = router;
