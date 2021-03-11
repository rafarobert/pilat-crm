/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:45 GMT-0400 (Bolivia Time)
 * Time: 14:57:45
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:45 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:45
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const surveyquestionoptionsAuditCtrl = require("../controllers/surveyquestionoptions_audit.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/surveyquestionoptions-audit/findOneById/:id`, (req, res) => surveyquestionoptionsAuditCtrl.findOneById(req, res));

router.get(`/api-${sys}/surveyquestionoptions-audit/findOneByCreatedBy/:createdBy`, (req, res) => surveyquestionoptionsAuditCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/surveyquestionoptions-audit/findOneByFieldName/:fieldName`, (req, res) => surveyquestionoptionsAuditCtrl.findOneByFieldName(req, res));

router.get(`/api-${sys}/surveyquestionoptions-audit/findOneByDataType/:dataType`, (req, res) => surveyquestionoptionsAuditCtrl.findOneByDataType(req, res));

router.get(`/api-${sys}/surveyquestionoptions-audit/findOneByBeforeValueString/:beforeValueString`, (req, res) => surveyquestionoptionsAuditCtrl.findOneByBeforeValueString(req, res));

router.get(`/api-${sys}/surveyquestionoptions-audit/findOneByAfterValueString/:afterValueString`, (req, res) => surveyquestionoptionsAuditCtrl.findOneByAfterValueString(req, res));

router.get(`/api-${sys}/surveyquestionoptions-audit/findOneByBeforeValueText/:beforeValueText`, (req, res) => surveyquestionoptionsAuditCtrl.findOneByBeforeValueText(req, res));

router.get(`/api-${sys}/surveyquestionoptions-audit/findOneByAfterValueText/:afterValueText`, (req, res) => surveyquestionoptionsAuditCtrl.findOneByAfterValueText(req, res));

router.get(`/api-${sys}/surveyquestionoptions-audit/findOneByDateCreated/:dateCreated`, (req, res) => surveyquestionoptionsAuditCtrl.findOneByDateCreated(req, res));

router.get(`/api-${sys}/surveyquestionoptions-audit/findOneByParentId/:parentId`, (req, res) => surveyquestionoptionsAuditCtrl.findOneByParentId(req, res));



router.post(`/api-${sys}/surveyquestionoptions-audit/updateSurveyquestionoptionAuditById`, (req, res) => surveyquestionoptionsAuditCtrl.updateSurveyquestionoptionAuditById(req, res));

router.post(`/api-${sys}/surveyquestionoptions-audit/updateSurveyquestionoptionAuditByCreatedBy`, (req, res) => surveyquestionoptionsAuditCtrl.updateSurveyquestionoptionAuditByCreatedBy(req, res));

router.post(`/api-${sys}/surveyquestionoptions-audit/updateSurveyquestionoptionAuditByFieldName`, (req, res) => surveyquestionoptionsAuditCtrl.updateSurveyquestionoptionAuditByFieldName(req, res));

router.post(`/api-${sys}/surveyquestionoptions-audit/updateSurveyquestionoptionAuditByDataType`, (req, res) => surveyquestionoptionsAuditCtrl.updateSurveyquestionoptionAuditByDataType(req, res));

router.post(`/api-${sys}/surveyquestionoptions-audit/updateSurveyquestionoptionAuditByBeforeValueString`, (req, res) => surveyquestionoptionsAuditCtrl.updateSurveyquestionoptionAuditByBeforeValueString(req, res));

router.post(`/api-${sys}/surveyquestionoptions-audit/updateSurveyquestionoptionAuditByAfterValueString`, (req, res) => surveyquestionoptionsAuditCtrl.updateSurveyquestionoptionAuditByAfterValueString(req, res));

router.post(`/api-${sys}/surveyquestionoptions-audit/updateSurveyquestionoptionAuditByBeforeValueText`, (req, res) => surveyquestionoptionsAuditCtrl.updateSurveyquestionoptionAuditByBeforeValueText(req, res));

router.post(`/api-${sys}/surveyquestionoptions-audit/updateSurveyquestionoptionAuditByAfterValueText`, (req, res) => surveyquestionoptionsAuditCtrl.updateSurveyquestionoptionAuditByAfterValueText(req, res));

router.post(`/api-${sys}/surveyquestionoptions-audit/updateSurveyquestionoptionAuditByDateCreated`, (req, res) => surveyquestionoptionsAuditCtrl.updateSurveyquestionoptionAuditByDateCreated(req, res));

router.post(`/api-${sys}/surveyquestionoptions-audit/updateSurveyquestionoptionAuditByParentId`, (req, res) => surveyquestionoptionsAuditCtrl.updateSurveyquestionoptionAuditByParentId(req, res));





router.get(`/api-${sys}/surveyquestionoptions-audit/`, (req, res) => surveyquestionoptionsAuditCtrl.getAllSurveyquestionoptionsAudit(req, res));
router.post(`/api-${sys}/surveyquestionoptions-audit/`, (req, res) => surveyquestionoptionsAuditCtrl.addSurveyquestionoptionAudit(req, res));
router.get(`/api-${sys}/surveyquestionoptions-audit/:id`, (req, res) => surveyquestionoptionsAuditCtrl.getASurveyquestionoptionAudit(req, res));
router.put(`/api-${sys}/surveyquestionoptions-audit/:id`, (req, res) => surveyquestionoptionsAuditCtrl.updateSurveyquestionoptionAudit(req, res));
router.delete(`/api-${sys}/surveyquestionoptions-audit/:id`, (req, res) => surveyquestionoptionsAuditCtrl.deleteSurveyquestionoptionAudit(req, res));

//</es-section>
module.exports = router;
