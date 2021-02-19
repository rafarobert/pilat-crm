/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:44:18 GMT-0400 (Bolivia Time)
 * Time: 4:44:18
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:44:18 GMT-0400 (Bolivia Time)
 * Last time updated: 4:44:18
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const surveysAuditCtrl = require("../controllers/surveys_audit.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/surveys-audit/findOneById/:id`, (req, res) => surveysAuditCtrl.findOneById(req, res));

router.get(`/api-${sys}/surveys-audit/findOneByCreatedBy/:createdBy`, (req, res) => surveysAuditCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/surveys-audit/findOneByFieldName/:fieldName`, (req, res) => surveysAuditCtrl.findOneByFieldName(req, res));

router.get(`/api-${sys}/surveys-audit/findOneByDataType/:dataType`, (req, res) => surveysAuditCtrl.findOneByDataType(req, res));

router.get(`/api-${sys}/surveys-audit/findOneByBeforeValueString/:beforeValueString`, (req, res) => surveysAuditCtrl.findOneByBeforeValueString(req, res));

router.get(`/api-${sys}/surveys-audit/findOneByAfterValueString/:afterValueString`, (req, res) => surveysAuditCtrl.findOneByAfterValueString(req, res));

router.get(`/api-${sys}/surveys-audit/findOneByBeforeValueText/:beforeValueText`, (req, res) => surveysAuditCtrl.findOneByBeforeValueText(req, res));

router.get(`/api-${sys}/surveys-audit/findOneByAfterValueText/:afterValueText`, (req, res) => surveysAuditCtrl.findOneByAfterValueText(req, res));

router.get(`/api-${sys}/surveys-audit/findOneByDateCreated/:dateCreated`, (req, res) => surveysAuditCtrl.findOneByDateCreated(req, res));

router.get(`/api-${sys}/surveys-audit/findOneByParentId/:parentId`, (req, res) => surveysAuditCtrl.findOneByParentId(req, res));



router.post(`/api-${sys}/surveys-audit/updateSurveyAuditById`, (req, res) => surveysAuditCtrl.updateSurveyAuditById(req, res));

router.post(`/api-${sys}/surveys-audit/updateSurveyAuditByCreatedBy`, (req, res) => surveysAuditCtrl.updateSurveyAuditByCreatedBy(req, res));

router.post(`/api-${sys}/surveys-audit/updateSurveyAuditByFieldName`, (req, res) => surveysAuditCtrl.updateSurveyAuditByFieldName(req, res));

router.post(`/api-${sys}/surveys-audit/updateSurveyAuditByDataType`, (req, res) => surveysAuditCtrl.updateSurveyAuditByDataType(req, res));

router.post(`/api-${sys}/surveys-audit/updateSurveyAuditByBeforeValueString`, (req, res) => surveysAuditCtrl.updateSurveyAuditByBeforeValueString(req, res));

router.post(`/api-${sys}/surveys-audit/updateSurveyAuditByAfterValueString`, (req, res) => surveysAuditCtrl.updateSurveyAuditByAfterValueString(req, res));

router.post(`/api-${sys}/surveys-audit/updateSurveyAuditByBeforeValueText`, (req, res) => surveysAuditCtrl.updateSurveyAuditByBeforeValueText(req, res));

router.post(`/api-${sys}/surveys-audit/updateSurveyAuditByAfterValueText`, (req, res) => surveysAuditCtrl.updateSurveyAuditByAfterValueText(req, res));

router.post(`/api-${sys}/surveys-audit/updateSurveyAuditByDateCreated`, (req, res) => surveysAuditCtrl.updateSurveyAuditByDateCreated(req, res));

router.post(`/api-${sys}/surveys-audit/updateSurveyAuditByParentId`, (req, res) => surveysAuditCtrl.updateSurveyAuditByParentId(req, res));





router.get(`/api-${sys}/surveys-audit/`, (req, res) => surveysAuditCtrl.getAllSurveysAudit(req, res));
router.post(`/api-${sys}/surveys-audit/`, (req, res) => surveysAuditCtrl.addSurveyAudit(req, res));
router.get(`/api-${sys}/surveys-audit/:id`, (req, res) => surveysAuditCtrl.getASurveyAudit(req, res));
router.put(`/api-${sys}/surveys-audit/:id`, (req, res) => surveysAuditCtrl.updateSurveyAudit(req, res));
router.delete(`/api-${sys}/surveys-audit/:id`, (req, res) => surveysAuditCtrl.deleteSurveyAudit(req, res));

//</es-section>
module.exports = router;
