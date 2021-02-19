/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:38:45 GMT-0400 (Bolivia Time)
 * Time: 18:38:45
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:38:45 GMT-0400 (Bolivia Time)
 * Last time updated: 18:38:45
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const surveyquestionoptionsCtrl = require("../controllers/surveyquestionoptions.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/surveyquestionoptions/findOneById/:id`, (req, res) => surveyquestionoptionsCtrl.findOneById(req, res));

router.get(`/api-${sys}/surveyquestionoptions/findOneByDeleted/:deleted`, (req, res) => surveyquestionoptionsCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/surveyquestionoptions/findOneBySortOrder/:sortOrder`, (req, res) => surveyquestionoptionsCtrl.findOneBySortOrder(req, res));

router.get(`/api-${sys}/surveyquestionoptions/findOneByName/:name`, (req, res) => surveyquestionoptionsCtrl.findOneByName(req, res));

router.get(`/api-${sys}/surveyquestionoptions/findOneByDescription/:description`, (req, res) => surveyquestionoptionsCtrl.findOneByDescription(req, res));

router.get(`/api-${sys}/surveyquestionoptions/findOneByDateEntered/:dateEntered`, (req, res) => surveyquestionoptionsCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/surveyquestionoptions/findOneByDateModified/:dateModified`, (req, res) => surveyquestionoptionsCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/surveyquestionoptions/findOneByModifiedUserId/:modifiedUserId`, (req, res) => surveyquestionoptionsCtrl.findOneByModifiedUserId(req, res));

router.get(`/api-${sys}/surveyquestionoptions/findOneByCreatedBy/:createdBy`, (req, res) => surveyquestionoptionsCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/surveyquestionoptions/findOneByAssignedUserId/:assignedUserId`, (req, res) => surveyquestionoptionsCtrl.findOneByAssignedUserId(req, res));

router.get(`/api-${sys}/surveyquestionoptions/findOneBySurveyQuestionId/:surveyQuestionId`, (req, res) => surveyquestionoptionsCtrl.findOneBySurveyQuestionId(req, res));



router.post(`/api-${sys}/surveyquestionoptions/updateSurveyquestionoptionById`, (req, res) => surveyquestionoptionsCtrl.updateSurveyquestionoptionById(req, res));

router.post(`/api-${sys}/surveyquestionoptions/updateSurveyquestionoptionByDeleted`, (req, res) => surveyquestionoptionsCtrl.updateSurveyquestionoptionByDeleted(req, res));

router.post(`/api-${sys}/surveyquestionoptions/updateSurveyquestionoptionBySortOrder`, (req, res) => surveyquestionoptionsCtrl.updateSurveyquestionoptionBySortOrder(req, res));

router.post(`/api-${sys}/surveyquestionoptions/updateSurveyquestionoptionByName`, (req, res) => surveyquestionoptionsCtrl.updateSurveyquestionoptionByName(req, res));

router.post(`/api-${sys}/surveyquestionoptions/updateSurveyquestionoptionByDescription`, (req, res) => surveyquestionoptionsCtrl.updateSurveyquestionoptionByDescription(req, res));

router.post(`/api-${sys}/surveyquestionoptions/updateSurveyquestionoptionByDateEntered`, (req, res) => surveyquestionoptionsCtrl.updateSurveyquestionoptionByDateEntered(req, res));

router.post(`/api-${sys}/surveyquestionoptions/updateSurveyquestionoptionByDateModified`, (req, res) => surveyquestionoptionsCtrl.updateSurveyquestionoptionByDateModified(req, res));

router.post(`/api-${sys}/surveyquestionoptions/updateSurveyquestionoptionByModifiedUserId`, (req, res) => surveyquestionoptionsCtrl.updateSurveyquestionoptionByModifiedUserId(req, res));

router.post(`/api-${sys}/surveyquestionoptions/updateSurveyquestionoptionByCreatedBy`, (req, res) => surveyquestionoptionsCtrl.updateSurveyquestionoptionByCreatedBy(req, res));

router.post(`/api-${sys}/surveyquestionoptions/updateSurveyquestionoptionByAssignedUserId`, (req, res) => surveyquestionoptionsCtrl.updateSurveyquestionoptionByAssignedUserId(req, res));

router.post(`/api-${sys}/surveyquestionoptions/updateSurveyquestionoptionBySurveyQuestionId`, (req, res) => surveyquestionoptionsCtrl.updateSurveyquestionoptionBySurveyQuestionId(req, res));





router.get(`/api-${sys}/surveyquestionoptions/`, (req, res) => surveyquestionoptionsCtrl.getAllSurveyquestionoptions(req, res));
router.post(`/api-${sys}/surveyquestionoptions/`, (req, res) => surveyquestionoptionsCtrl.addSurveyquestionoption(req, res));
router.get(`/api-${sys}/surveyquestionoptions/:id`, (req, res) => surveyquestionoptionsCtrl.getASurveyquestionoption(req, res));
router.put(`/api-${sys}/surveyquestionoptions/:id`, (req, res) => surveyquestionoptionsCtrl.updateSurveyquestionoption(req, res));
router.delete(`/api-${sys}/surveyquestionoptions/:id`, (req, res) => surveyquestionoptionsCtrl.deleteSurveyquestionoption(req, res));

//</es-section>
module.exports = router;
