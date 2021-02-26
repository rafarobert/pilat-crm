/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:23:49 GMT-0400 (Bolivia Time)
 * Time: 0:23:49
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:23:49 GMT-0400 (Bolivia Time)
 * Last time updated: 0:23:49
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const surveyquestionresponsesCtrl = require("../controllers/surveyquestionresponses.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/surveyquestionresponses/findOneById/:id`, (req, res) => surveyquestionresponsesCtrl.findOneById(req, res));

router.get(`/api-${sys}/surveyquestionresponses/findOneByDeleted/:deleted`, (req, res) => surveyquestionresponsesCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/surveyquestionresponses/findOneByAnswerBool/:answerBool`, (req, res) => surveyquestionresponsesCtrl.findOneByAnswerBool(req, res));

router.get(`/api-${sys}/surveyquestionresponses/findOneByName/:name`, (req, res) => surveyquestionresponsesCtrl.findOneByName(req, res));

router.get(`/api-${sys}/surveyquestionresponses/findOneByDescription/:description`, (req, res) => surveyquestionresponsesCtrl.findOneByDescription(req, res));

router.get(`/api-${sys}/surveyquestionresponses/findOneByAnswer/:answer`, (req, res) => surveyquestionresponsesCtrl.findOneByAnswer(req, res));

router.get(`/api-${sys}/surveyquestionresponses/findOneByDateEntered/:dateEntered`, (req, res) => surveyquestionresponsesCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/surveyquestionresponses/findOneByDateModified/:dateModified`, (req, res) => surveyquestionresponsesCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/surveyquestionresponses/findOneByAnswerDatetime/:answerDatetime`, (req, res) => surveyquestionresponsesCtrl.findOneByAnswerDatetime(req, res));

router.get(`/api-${sys}/surveyquestionresponses/findOneByModifiedUserId/:modifiedUserId`, (req, res) => surveyquestionresponsesCtrl.findOneByModifiedUserId(req, res));

router.get(`/api-${sys}/surveyquestionresponses/findOneByCreatedBy/:createdBy`, (req, res) => surveyquestionresponsesCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/surveyquestionresponses/findOneByAssignedUserId/:assignedUserId`, (req, res) => surveyquestionresponsesCtrl.findOneByAssignedUserId(req, res));

router.get(`/api-${sys}/surveyquestionresponses/findOneBySurveyquestionId/:surveyquestionId`, (req, res) => surveyquestionresponsesCtrl.findOneBySurveyquestionId(req, res));

router.get(`/api-${sys}/surveyquestionresponses/findOneBySurveyresponseId/:surveyresponseId`, (req, res) => surveyquestionresponsesCtrl.findOneBySurveyresponseId(req, res));



router.post(`/api-${sys}/surveyquestionresponses/updateSurveyquestionresponseById`, (req, res) => surveyquestionresponsesCtrl.updateSurveyquestionresponseById(req, res));

router.post(`/api-${sys}/surveyquestionresponses/updateSurveyquestionresponseByDeleted`, (req, res) => surveyquestionresponsesCtrl.updateSurveyquestionresponseByDeleted(req, res));

router.post(`/api-${sys}/surveyquestionresponses/updateSurveyquestionresponseByAnswerBool`, (req, res) => surveyquestionresponsesCtrl.updateSurveyquestionresponseByAnswerBool(req, res));

router.post(`/api-${sys}/surveyquestionresponses/updateSurveyquestionresponseByName`, (req, res) => surveyquestionresponsesCtrl.updateSurveyquestionresponseByName(req, res));

router.post(`/api-${sys}/surveyquestionresponses/updateSurveyquestionresponseByDescription`, (req, res) => surveyquestionresponsesCtrl.updateSurveyquestionresponseByDescription(req, res));

router.post(`/api-${sys}/surveyquestionresponses/updateSurveyquestionresponseByAnswer`, (req, res) => surveyquestionresponsesCtrl.updateSurveyquestionresponseByAnswer(req, res));

router.post(`/api-${sys}/surveyquestionresponses/updateSurveyquestionresponseByDateEntered`, (req, res) => surveyquestionresponsesCtrl.updateSurveyquestionresponseByDateEntered(req, res));

router.post(`/api-${sys}/surveyquestionresponses/updateSurveyquestionresponseByDateModified`, (req, res) => surveyquestionresponsesCtrl.updateSurveyquestionresponseByDateModified(req, res));

router.post(`/api-${sys}/surveyquestionresponses/updateSurveyquestionresponseByAnswerDatetime`, (req, res) => surveyquestionresponsesCtrl.updateSurveyquestionresponseByAnswerDatetime(req, res));

router.post(`/api-${sys}/surveyquestionresponses/updateSurveyquestionresponseByModifiedUserId`, (req, res) => surveyquestionresponsesCtrl.updateSurveyquestionresponseByModifiedUserId(req, res));

router.post(`/api-${sys}/surveyquestionresponses/updateSurveyquestionresponseByCreatedBy`, (req, res) => surveyquestionresponsesCtrl.updateSurveyquestionresponseByCreatedBy(req, res));

router.post(`/api-${sys}/surveyquestionresponses/updateSurveyquestionresponseByAssignedUserId`, (req, res) => surveyquestionresponsesCtrl.updateSurveyquestionresponseByAssignedUserId(req, res));

router.post(`/api-${sys}/surveyquestionresponses/updateSurveyquestionresponseBySurveyquestionId`, (req, res) => surveyquestionresponsesCtrl.updateSurveyquestionresponseBySurveyquestionId(req, res));

router.post(`/api-${sys}/surveyquestionresponses/updateSurveyquestionresponseBySurveyresponseId`, (req, res) => surveyquestionresponsesCtrl.updateSurveyquestionresponseBySurveyresponseId(req, res));





router.get(`/api-${sys}/surveyquestionresponses/`, (req, res) => surveyquestionresponsesCtrl.getAllSurveyquestionresponses(req, res));
router.post(`/api-${sys}/surveyquestionresponses/`, (req, res) => surveyquestionresponsesCtrl.addSurveyquestionresponse(req, res));
router.get(`/api-${sys}/surveyquestionresponses/:id`, (req, res) => surveyquestionresponsesCtrl.getASurveyquestionresponse(req, res));
router.put(`/api-${sys}/surveyquestionresponses/:id`, (req, res) => surveyquestionresponsesCtrl.updateSurveyquestionresponse(req, res));
router.delete(`/api-${sys}/surveyquestionresponses/:id`, (req, res) => surveyquestionresponsesCtrl.deleteSurveyquestionresponse(req, res));

//</es-section>
module.exports = router;
