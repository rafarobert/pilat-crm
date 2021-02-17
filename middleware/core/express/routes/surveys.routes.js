/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:44:17 GMT-0400 (Bolivia Time)
 * Time: 4:44:17
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:44:17 GMT-0400 (Bolivia Time)
 * Last time updated: 4:44:17
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const surveysCtrl = require("../controllers/surveys.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/surveys/findOneById/:id`, (req, res) => surveysCtrl.findOneById(req, res));

router.get(`/api-${sys}/surveys/findOneByDeleted/:deleted`, (req, res) => surveysCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/surveys/findOneByName/:name`, (req, res) => surveysCtrl.findOneByName(req, res));

router.get(`/api-${sys}/surveys/findOneByStatus/:status`, (req, res) => surveysCtrl.findOneByStatus(req, res));

router.get(`/api-${sys}/surveys/findOneBySubmitText/:submitText`, (req, res) => surveysCtrl.findOneBySubmitText(req, res));

router.get(`/api-${sys}/surveys/findOneBySatisfiedText/:satisfiedText`, (req, res) => surveysCtrl.findOneBySatisfiedText(req, res));

router.get(`/api-${sys}/surveys/findOneByNeitherText/:neitherText`, (req, res) => surveysCtrl.findOneByNeitherText(req, res));

router.get(`/api-${sys}/surveys/findOneByDissatisfiedText/:dissatisfiedText`, (req, res) => surveysCtrl.findOneByDissatisfiedText(req, res));

router.get(`/api-${sys}/surveys/findOneByDescription/:description`, (req, res) => surveysCtrl.findOneByDescription(req, res));

router.get(`/api-${sys}/surveys/findOneByDateEntered/:dateEntered`, (req, res) => surveysCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/surveys/findOneByDateModified/:dateModified`, (req, res) => surveysCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/surveys/findOneByModifiedUserId/:modifiedUserId`, (req, res) => surveysCtrl.findOneByModifiedUserId(req, res));

router.get(`/api-${sys}/surveys/findOneByCreatedBy/:createdBy`, (req, res) => surveysCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/surveys/findOneByAssignedUserId/:assignedUserId`, (req, res) => surveysCtrl.findOneByAssignedUserId(req, res));



router.post(`/api-${sys}/surveys/updateSurveyById`, (req, res) => surveysCtrl.updateSurveyById(req, res));

router.post(`/api-${sys}/surveys/updateSurveyByDeleted`, (req, res) => surveysCtrl.updateSurveyByDeleted(req, res));

router.post(`/api-${sys}/surveys/updateSurveyByName`, (req, res) => surveysCtrl.updateSurveyByName(req, res));

router.post(`/api-${sys}/surveys/updateSurveyByStatus`, (req, res) => surveysCtrl.updateSurveyByStatus(req, res));

router.post(`/api-${sys}/surveys/updateSurveyBySubmitText`, (req, res) => surveysCtrl.updateSurveyBySubmitText(req, res));

router.post(`/api-${sys}/surveys/updateSurveyBySatisfiedText`, (req, res) => surveysCtrl.updateSurveyBySatisfiedText(req, res));

router.post(`/api-${sys}/surveys/updateSurveyByNeitherText`, (req, res) => surveysCtrl.updateSurveyByNeitherText(req, res));

router.post(`/api-${sys}/surveys/updateSurveyByDissatisfiedText`, (req, res) => surveysCtrl.updateSurveyByDissatisfiedText(req, res));

router.post(`/api-${sys}/surveys/updateSurveyByDescription`, (req, res) => surveysCtrl.updateSurveyByDescription(req, res));

router.post(`/api-${sys}/surveys/updateSurveyByDateEntered`, (req, res) => surveysCtrl.updateSurveyByDateEntered(req, res));

router.post(`/api-${sys}/surveys/updateSurveyByDateModified`, (req, res) => surveysCtrl.updateSurveyByDateModified(req, res));

router.post(`/api-${sys}/surveys/updateSurveyByModifiedUserId`, (req, res) => surveysCtrl.updateSurveyByModifiedUserId(req, res));

router.post(`/api-${sys}/surveys/updateSurveyByCreatedBy`, (req, res) => surveysCtrl.updateSurveyByCreatedBy(req, res));

router.post(`/api-${sys}/surveys/updateSurveyByAssignedUserId`, (req, res) => surveysCtrl.updateSurveyByAssignedUserId(req, res));





router.get(`/api-${sys}/surveys/`, (req, res) => surveysCtrl.getAllSurveys(req, res));
router.post(`/api-${sys}/surveys/`, (req, res) => surveysCtrl.addSurvey(req, res));
router.get(`/api-${sys}/surveys/:id`, (req, res) => surveysCtrl.getASurvey(req, res));
router.put(`/api-${sys}/surveys/:id`, (req, res) => surveysCtrl.updateSurvey(req, res));
router.delete(`/api-${sys}/surveys/:id`, (req, res) => surveysCtrl.deleteSurvey(req, res));

//</es-section>
module.exports = router;
