/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:38:50 GMT-0400 (Bolivia Time)
 * Time: 18:38:50
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:38:50 GMT-0400 (Bolivia Time)
 * Last time updated: 18:38:50
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const surveyquestionsAuditCtrl = require("../controllers/surveyquestions_audit.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/surveyquestions-audit/findOneById/:id`, (req, res) => surveyquestionsAuditCtrl.findOneById(req, res));

router.get(`/api-${sys}/surveyquestions-audit/findOneByCreatedBy/:createdBy`, (req, res) => surveyquestionsAuditCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/surveyquestions-audit/findOneByFieldName/:fieldName`, (req, res) => surveyquestionsAuditCtrl.findOneByFieldName(req, res));

router.get(`/api-${sys}/surveyquestions-audit/findOneByDataType/:dataType`, (req, res) => surveyquestionsAuditCtrl.findOneByDataType(req, res));

router.get(`/api-${sys}/surveyquestions-audit/findOneByBeforeValueString/:beforeValueString`, (req, res) => surveyquestionsAuditCtrl.findOneByBeforeValueString(req, res));

router.get(`/api-${sys}/surveyquestions-audit/findOneByAfterValueString/:afterValueString`, (req, res) => surveyquestionsAuditCtrl.findOneByAfterValueString(req, res));

router.get(`/api-${sys}/surveyquestions-audit/findOneByBeforeValueText/:beforeValueText`, (req, res) => surveyquestionsAuditCtrl.findOneByBeforeValueText(req, res));

router.get(`/api-${sys}/surveyquestions-audit/findOneByAfterValueText/:afterValueText`, (req, res) => surveyquestionsAuditCtrl.findOneByAfterValueText(req, res));

router.get(`/api-${sys}/surveyquestions-audit/findOneByDateCreated/:dateCreated`, (req, res) => surveyquestionsAuditCtrl.findOneByDateCreated(req, res));

router.get(`/api-${sys}/surveyquestions-audit/findOneByParentId/:parentId`, (req, res) => surveyquestionsAuditCtrl.findOneByParentId(req, res));



router.post(`/api-${sys}/surveyquestions-audit/updateSurveyquestionAuditById`, (req, res) => surveyquestionsAuditCtrl.updateSurveyquestionAuditById(req, res));

router.post(`/api-${sys}/surveyquestions-audit/updateSurveyquestionAuditByCreatedBy`, (req, res) => surveyquestionsAuditCtrl.updateSurveyquestionAuditByCreatedBy(req, res));

router.post(`/api-${sys}/surveyquestions-audit/updateSurveyquestionAuditByFieldName`, (req, res) => surveyquestionsAuditCtrl.updateSurveyquestionAuditByFieldName(req, res));

router.post(`/api-${sys}/surveyquestions-audit/updateSurveyquestionAuditByDataType`, (req, res) => surveyquestionsAuditCtrl.updateSurveyquestionAuditByDataType(req, res));

router.post(`/api-${sys}/surveyquestions-audit/updateSurveyquestionAuditByBeforeValueString`, (req, res) => surveyquestionsAuditCtrl.updateSurveyquestionAuditByBeforeValueString(req, res));

router.post(`/api-${sys}/surveyquestions-audit/updateSurveyquestionAuditByAfterValueString`, (req, res) => surveyquestionsAuditCtrl.updateSurveyquestionAuditByAfterValueString(req, res));

router.post(`/api-${sys}/surveyquestions-audit/updateSurveyquestionAuditByBeforeValueText`, (req, res) => surveyquestionsAuditCtrl.updateSurveyquestionAuditByBeforeValueText(req, res));

router.post(`/api-${sys}/surveyquestions-audit/updateSurveyquestionAuditByAfterValueText`, (req, res) => surveyquestionsAuditCtrl.updateSurveyquestionAuditByAfterValueText(req, res));

router.post(`/api-${sys}/surveyquestions-audit/updateSurveyquestionAuditByDateCreated`, (req, res) => surveyquestionsAuditCtrl.updateSurveyquestionAuditByDateCreated(req, res));

router.post(`/api-${sys}/surveyquestions-audit/updateSurveyquestionAuditByParentId`, (req, res) => surveyquestionsAuditCtrl.updateSurveyquestionAuditByParentId(req, res));





router.get(`/api-${sys}/surveyquestions-audit/`, (req, res) => surveyquestionsAuditCtrl.getAllSurveyquestionsAudit(req, res));
router.post(`/api-${sys}/surveyquestions-audit/`, (req, res) => surveyquestionsAuditCtrl.addSurveyquestionAudit(req, res));
router.get(`/api-${sys}/surveyquestions-audit/:id`, (req, res) => surveyquestionsAuditCtrl.getASurveyquestionAudit(req, res));
router.put(`/api-${sys}/surveyquestions-audit/:id`, (req, res) => surveyquestionsAuditCtrl.updateSurveyquestionAudit(req, res));
router.delete(`/api-${sys}/surveyquestions-audit/:id`, (req, res) => surveyquestionsAuditCtrl.deleteSurveyquestionAudit(req, res));

//</es-section>
module.exports = router;
