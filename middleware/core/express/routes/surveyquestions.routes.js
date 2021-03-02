/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:01:34 GMT-0400 (Bolivia Time)
 * Time: 14:1:34
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:01:34 GMT-0400 (Bolivia Time)
 * Last time updated: 14:1:34
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const surveyquestionsCtrl = require("../controllers/surveyquestions.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/surveyquestions/findOneById/:id`, (req, res) => surveyquestionsCtrl.findOneById(req, res));

router.get(`/api-${sys}/surveyquestions/findOneByDeleted/:deleted`, (req, res) => surveyquestionsCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/surveyquestions/findOneByHappinessQuestion/:happinessQuestion`, (req, res) => surveyquestionsCtrl.findOneByHappinessQuestion(req, res));

router.get(`/api-${sys}/surveyquestions/findOneBySortOrder/:sortOrder`, (req, res) => surveyquestionsCtrl.findOneBySortOrder(req, res));

router.get(`/api-${sys}/surveyquestions/findOneByName/:name`, (req, res) => surveyquestionsCtrl.findOneByName(req, res));

router.get(`/api-${sys}/surveyquestions/findOneByType/:type`, (req, res) => surveyquestionsCtrl.findOneByType(req, res));

router.get(`/api-${sys}/surveyquestions/findOneByDescription/:description`, (req, res) => surveyquestionsCtrl.findOneByDescription(req, res));

router.get(`/api-${sys}/surveyquestions/findOneByDateEntered/:dateEntered`, (req, res) => surveyquestionsCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/surveyquestions/findOneByDateModified/:dateModified`, (req, res) => surveyquestionsCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/surveyquestions/findOneByModifiedUserId/:modifiedUserId`, (req, res) => surveyquestionsCtrl.findOneByModifiedUserId(req, res));

router.get(`/api-${sys}/surveyquestions/findOneByCreatedBy/:createdBy`, (req, res) => surveyquestionsCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/surveyquestions/findOneByAssignedUserId/:assignedUserId`, (req, res) => surveyquestionsCtrl.findOneByAssignedUserId(req, res));

router.get(`/api-${sys}/surveyquestions/findOneBySurveyId/:surveyId`, (req, res) => surveyquestionsCtrl.findOneBySurveyId(req, res));



router.post(`/api-${sys}/surveyquestions/updateSurveyquestionById`, (req, res) => surveyquestionsCtrl.updateSurveyquestionById(req, res));

router.post(`/api-${sys}/surveyquestions/updateSurveyquestionByDeleted`, (req, res) => surveyquestionsCtrl.updateSurveyquestionByDeleted(req, res));

router.post(`/api-${sys}/surveyquestions/updateSurveyquestionByHappinessQuestion`, (req, res) => surveyquestionsCtrl.updateSurveyquestionByHappinessQuestion(req, res));

router.post(`/api-${sys}/surveyquestions/updateSurveyquestionBySortOrder`, (req, res) => surveyquestionsCtrl.updateSurveyquestionBySortOrder(req, res));

router.post(`/api-${sys}/surveyquestions/updateSurveyquestionByName`, (req, res) => surveyquestionsCtrl.updateSurveyquestionByName(req, res));

router.post(`/api-${sys}/surveyquestions/updateSurveyquestionByType`, (req, res) => surveyquestionsCtrl.updateSurveyquestionByType(req, res));

router.post(`/api-${sys}/surveyquestions/updateSurveyquestionByDescription`, (req, res) => surveyquestionsCtrl.updateSurveyquestionByDescription(req, res));

router.post(`/api-${sys}/surveyquestions/updateSurveyquestionByDateEntered`, (req, res) => surveyquestionsCtrl.updateSurveyquestionByDateEntered(req, res));

router.post(`/api-${sys}/surveyquestions/updateSurveyquestionByDateModified`, (req, res) => surveyquestionsCtrl.updateSurveyquestionByDateModified(req, res));

router.post(`/api-${sys}/surveyquestions/updateSurveyquestionByModifiedUserId`, (req, res) => surveyquestionsCtrl.updateSurveyquestionByModifiedUserId(req, res));

router.post(`/api-${sys}/surveyquestions/updateSurveyquestionByCreatedBy`, (req, res) => surveyquestionsCtrl.updateSurveyquestionByCreatedBy(req, res));

router.post(`/api-${sys}/surveyquestions/updateSurveyquestionByAssignedUserId`, (req, res) => surveyquestionsCtrl.updateSurveyquestionByAssignedUserId(req, res));

router.post(`/api-${sys}/surveyquestions/updateSurveyquestionBySurveyId`, (req, res) => surveyquestionsCtrl.updateSurveyquestionBySurveyId(req, res));





router.get(`/api-${sys}/surveyquestions/`, (req, res) => surveyquestionsCtrl.getAllSurveyquestions(req, res));
router.post(`/api-${sys}/surveyquestions/`, (req, res) => surveyquestionsCtrl.addSurveyquestion(req, res));
router.get(`/api-${sys}/surveyquestions/:id`, (req, res) => surveyquestionsCtrl.getASurveyquestion(req, res));
router.put(`/api-${sys}/surveyquestions/:id`, (req, res) => surveyquestionsCtrl.updateSurveyquestion(req, res));
router.delete(`/api-${sys}/surveyquestions/:id`, (req, res) => surveyquestionsCtrl.deleteSurveyquestion(req, res));

//</es-section>
module.exports = router;
