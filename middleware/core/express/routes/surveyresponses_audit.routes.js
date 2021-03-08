/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:37:07 GMT-0400 (Bolivia Time)
 * Time: 15:37:7
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:37:07 GMT-0400 (Bolivia Time)
 * Last time updated: 15:37:7
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const surveyresponsesAuditCtrl = require("../controllers/surveyresponses_audit.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/surveyresponses-audit/findOneById/:id`, (req, res) => surveyresponsesAuditCtrl.findOneById(req, res));

router.get(`/api-${sys}/surveyresponses-audit/findOneByCreatedBy/:createdBy`, (req, res) => surveyresponsesAuditCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/surveyresponses-audit/findOneByFieldName/:fieldName`, (req, res) => surveyresponsesAuditCtrl.findOneByFieldName(req, res));

router.get(`/api-${sys}/surveyresponses-audit/findOneByDataType/:dataType`, (req, res) => surveyresponsesAuditCtrl.findOneByDataType(req, res));

router.get(`/api-${sys}/surveyresponses-audit/findOneByBeforeValueString/:beforeValueString`, (req, res) => surveyresponsesAuditCtrl.findOneByBeforeValueString(req, res));

router.get(`/api-${sys}/surveyresponses-audit/findOneByAfterValueString/:afterValueString`, (req, res) => surveyresponsesAuditCtrl.findOneByAfterValueString(req, res));

router.get(`/api-${sys}/surveyresponses-audit/findOneByBeforeValueText/:beforeValueText`, (req, res) => surveyresponsesAuditCtrl.findOneByBeforeValueText(req, res));

router.get(`/api-${sys}/surveyresponses-audit/findOneByAfterValueText/:afterValueText`, (req, res) => surveyresponsesAuditCtrl.findOneByAfterValueText(req, res));

router.get(`/api-${sys}/surveyresponses-audit/findOneByDateCreated/:dateCreated`, (req, res) => surveyresponsesAuditCtrl.findOneByDateCreated(req, res));

router.get(`/api-${sys}/surveyresponses-audit/findOneByParentId/:parentId`, (req, res) => surveyresponsesAuditCtrl.findOneByParentId(req, res));



router.post(`/api-${sys}/surveyresponses-audit/updateSurveyresponseAuditById`, (req, res) => surveyresponsesAuditCtrl.updateSurveyresponseAuditById(req, res));

router.post(`/api-${sys}/surveyresponses-audit/updateSurveyresponseAuditByCreatedBy`, (req, res) => surveyresponsesAuditCtrl.updateSurveyresponseAuditByCreatedBy(req, res));

router.post(`/api-${sys}/surveyresponses-audit/updateSurveyresponseAuditByFieldName`, (req, res) => surveyresponsesAuditCtrl.updateSurveyresponseAuditByFieldName(req, res));

router.post(`/api-${sys}/surveyresponses-audit/updateSurveyresponseAuditByDataType`, (req, res) => surveyresponsesAuditCtrl.updateSurveyresponseAuditByDataType(req, res));

router.post(`/api-${sys}/surveyresponses-audit/updateSurveyresponseAuditByBeforeValueString`, (req, res) => surveyresponsesAuditCtrl.updateSurveyresponseAuditByBeforeValueString(req, res));

router.post(`/api-${sys}/surveyresponses-audit/updateSurveyresponseAuditByAfterValueString`, (req, res) => surveyresponsesAuditCtrl.updateSurveyresponseAuditByAfterValueString(req, res));

router.post(`/api-${sys}/surveyresponses-audit/updateSurveyresponseAuditByBeforeValueText`, (req, res) => surveyresponsesAuditCtrl.updateSurveyresponseAuditByBeforeValueText(req, res));

router.post(`/api-${sys}/surveyresponses-audit/updateSurveyresponseAuditByAfterValueText`, (req, res) => surveyresponsesAuditCtrl.updateSurveyresponseAuditByAfterValueText(req, res));

router.post(`/api-${sys}/surveyresponses-audit/updateSurveyresponseAuditByDateCreated`, (req, res) => surveyresponsesAuditCtrl.updateSurveyresponseAuditByDateCreated(req, res));

router.post(`/api-${sys}/surveyresponses-audit/updateSurveyresponseAuditByParentId`, (req, res) => surveyresponsesAuditCtrl.updateSurveyresponseAuditByParentId(req, res));





router.get(`/api-${sys}/surveyresponses-audit/`, (req, res) => surveyresponsesAuditCtrl.getAllSurveyresponsesAudit(req, res));
router.post(`/api-${sys}/surveyresponses-audit/`, (req, res) => surveyresponsesAuditCtrl.addSurveyresponseAudit(req, res));
router.get(`/api-${sys}/surveyresponses-audit/:id`, (req, res) => surveyresponsesAuditCtrl.getASurveyresponseAudit(req, res));
router.put(`/api-${sys}/surveyresponses-audit/:id`, (req, res) => surveyresponsesAuditCtrl.updateSurveyresponseAudit(req, res));
router.delete(`/api-${sys}/surveyresponses-audit/:id`, (req, res) => surveyresponsesAuditCtrl.deleteSurveyresponseAudit(req, res));

//</es-section>
module.exports = router;
