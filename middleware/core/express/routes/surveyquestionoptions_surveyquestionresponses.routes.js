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
const surveyquestionoptionsSurveyquestionresponsesCtrl = require("../controllers/surveyquestionoptions_surveyquestionresponses.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/surveyquestionoptions-surveyquestionresponses/findOneById/:id`, (req, res) => surveyquestionoptionsSurveyquestionresponsesCtrl.findOneById(req, res));

router.get(`/api-${sys}/surveyquestionoptions-surveyquestionresponses/findOneByDeleted/:deleted`, (req, res) => surveyquestionoptionsSurveyquestionresponsesCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/surveyquestionoptions-surveyquestionresponses/findOneBySurveyq72c7optionsIda/:surveyq72c7optionsIda`, (req, res) => surveyquestionoptionsSurveyquestionresponsesCtrl.findOneBySurveyq72c7optionsIda(req, res));

router.get(`/api-${sys}/surveyquestionoptions-surveyquestionresponses/findOneBySurveyq10d4sponsesIdb/:surveyq10d4sponsesIdb`, (req, res) => surveyquestionoptionsSurveyquestionresponsesCtrl.findOneBySurveyq10d4sponsesIdb(req, res));

router.get(`/api-${sys}/surveyquestionoptions-surveyquestionresponses/findOneByDateModified/:dateModified`, (req, res) => surveyquestionoptionsSurveyquestionresponsesCtrl.findOneByDateModified(req, res));



router.post(`/api-${sys}/surveyquestionoptions-surveyquestionresponses/updateSurveyquestionoptionSurveyquestionresponseById`, (req, res) => surveyquestionoptionsSurveyquestionresponsesCtrl.updateSurveyquestionoptionSurveyquestionresponseById(req, res));

router.post(`/api-${sys}/surveyquestionoptions-surveyquestionresponses/updateSurveyquestionoptionSurveyquestionresponseByDeleted`, (req, res) => surveyquestionoptionsSurveyquestionresponsesCtrl.updateSurveyquestionoptionSurveyquestionresponseByDeleted(req, res));

router.post(`/api-${sys}/surveyquestionoptions-surveyquestionresponses/updateSurveyquestionoptionSurveyquestionresponseBySurveyq72c7optionsIda`, (req, res) => surveyquestionoptionsSurveyquestionresponsesCtrl.updateSurveyquestionoptionSurveyquestionresponseBySurveyq72c7optionsIda(req, res));

router.post(`/api-${sys}/surveyquestionoptions-surveyquestionresponses/updateSurveyquestionoptionSurveyquestionresponseBySurveyq10d4sponsesIdb`, (req, res) => surveyquestionoptionsSurveyquestionresponsesCtrl.updateSurveyquestionoptionSurveyquestionresponseBySurveyq10d4sponsesIdb(req, res));

router.post(`/api-${sys}/surveyquestionoptions-surveyquestionresponses/updateSurveyquestionoptionSurveyquestionresponseByDateModified`, (req, res) => surveyquestionoptionsSurveyquestionresponsesCtrl.updateSurveyquestionoptionSurveyquestionresponseByDateModified(req, res));





router.get(`/api-${sys}/surveyquestionoptions-surveyquestionresponses/`, (req, res) => surveyquestionoptionsSurveyquestionresponsesCtrl.getAllSurveyquestionoptionsSurveyquestionresponses(req, res));
router.post(`/api-${sys}/surveyquestionoptions-surveyquestionresponses/`, (req, res) => surveyquestionoptionsSurveyquestionresponsesCtrl.addSurveyquestionoptionSurveyquestionresponse(req, res));
router.get(`/api-${sys}/surveyquestionoptions-surveyquestionresponses/:id`, (req, res) => surveyquestionoptionsSurveyquestionresponsesCtrl.getASurveyquestionoptionSurveyquestionresponse(req, res));
router.put(`/api-${sys}/surveyquestionoptions-surveyquestionresponses/:id`, (req, res) => surveyquestionoptionsSurveyquestionresponsesCtrl.updateSurveyquestionoptionSurveyquestionresponse(req, res));
router.delete(`/api-${sys}/surveyquestionoptions-surveyquestionresponses/:id`, (req, res) => surveyquestionoptionsSurveyquestionresponsesCtrl.deleteSurveyquestionoptionSurveyquestionresponse(req, res));

//</es-section>
module.exports = router;
