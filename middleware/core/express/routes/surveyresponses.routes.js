/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:38:51 GMT-0400 (Bolivia Time)
 * Time: 18:38:51
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:38:51 GMT-0400 (Bolivia Time)
 * Last time updated: 18:38:51
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const surveyresponsesCtrl = require("../controllers/surveyresponses.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/surveyresponses/findOneById/:id`, (req, res) => surveyresponsesCtrl.findOneById(req, res));

router.get(`/api-${sys}/surveyresponses/findOneByDeleted/:deleted`, (req, res) => surveyresponsesCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/surveyresponses/findOneByEmailResponseSent/:emailResponseSent`, (req, res) => surveyresponsesCtrl.findOneByEmailResponseSent(req, res));

router.get(`/api-${sys}/surveyresponses/findOneByHappiness/:happiness`, (req, res) => surveyresponsesCtrl.findOneByHappiness(req, res));

router.get(`/api-${sys}/surveyresponses/findOneByName/:name`, (req, res) => surveyresponsesCtrl.findOneByName(req, res));

router.get(`/api-${sys}/surveyresponses/findOneByDescription/:description`, (req, res) => surveyresponsesCtrl.findOneByDescription(req, res));

router.get(`/api-${sys}/surveyresponses/findOneByDateEntered/:dateEntered`, (req, res) => surveyresponsesCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/surveyresponses/findOneByDateModified/:dateModified`, (req, res) => surveyresponsesCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/surveyresponses/findOneByModifiedUserId/:modifiedUserId`, (req, res) => surveyresponsesCtrl.findOneByModifiedUserId(req, res));

router.get(`/api-${sys}/surveyresponses/findOneByCreatedBy/:createdBy`, (req, res) => surveyresponsesCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/surveyresponses/findOneByAssignedUserId/:assignedUserId`, (req, res) => surveyresponsesCtrl.findOneByAssignedUserId(req, res));

router.get(`/api-${sys}/surveyresponses/findOneByAccountId/:accountId`, (req, res) => surveyresponsesCtrl.findOneByAccountId(req, res));

router.get(`/api-${sys}/surveyresponses/findOneByCampaignId/:campaignId`, (req, res) => surveyresponsesCtrl.findOneByCampaignId(req, res));

router.get(`/api-${sys}/surveyresponses/findOneByContactId/:contactId`, (req, res) => surveyresponsesCtrl.findOneByContactId(req, res));

router.get(`/api-${sys}/surveyresponses/findOneBySurveyId/:surveyId`, (req, res) => surveyresponsesCtrl.findOneBySurveyId(req, res));



router.post(`/api-${sys}/surveyresponses/updateSurveyresponseById`, (req, res) => surveyresponsesCtrl.updateSurveyresponseById(req, res));

router.post(`/api-${sys}/surveyresponses/updateSurveyresponseByDeleted`, (req, res) => surveyresponsesCtrl.updateSurveyresponseByDeleted(req, res));

router.post(`/api-${sys}/surveyresponses/updateSurveyresponseByEmailResponseSent`, (req, res) => surveyresponsesCtrl.updateSurveyresponseByEmailResponseSent(req, res));

router.post(`/api-${sys}/surveyresponses/updateSurveyresponseByHappiness`, (req, res) => surveyresponsesCtrl.updateSurveyresponseByHappiness(req, res));

router.post(`/api-${sys}/surveyresponses/updateSurveyresponseByName`, (req, res) => surveyresponsesCtrl.updateSurveyresponseByName(req, res));

router.post(`/api-${sys}/surveyresponses/updateSurveyresponseByDescription`, (req, res) => surveyresponsesCtrl.updateSurveyresponseByDescription(req, res));

router.post(`/api-${sys}/surveyresponses/updateSurveyresponseByDateEntered`, (req, res) => surveyresponsesCtrl.updateSurveyresponseByDateEntered(req, res));

router.post(`/api-${sys}/surveyresponses/updateSurveyresponseByDateModified`, (req, res) => surveyresponsesCtrl.updateSurveyresponseByDateModified(req, res));

router.post(`/api-${sys}/surveyresponses/updateSurveyresponseByModifiedUserId`, (req, res) => surveyresponsesCtrl.updateSurveyresponseByModifiedUserId(req, res));

router.post(`/api-${sys}/surveyresponses/updateSurveyresponseByCreatedBy`, (req, res) => surveyresponsesCtrl.updateSurveyresponseByCreatedBy(req, res));

router.post(`/api-${sys}/surveyresponses/updateSurveyresponseByAssignedUserId`, (req, res) => surveyresponsesCtrl.updateSurveyresponseByAssignedUserId(req, res));

router.post(`/api-${sys}/surveyresponses/updateSurveyresponseByAccountId`, (req, res) => surveyresponsesCtrl.updateSurveyresponseByAccountId(req, res));

router.post(`/api-${sys}/surveyresponses/updateSurveyresponseByCampaignId`, (req, res) => surveyresponsesCtrl.updateSurveyresponseByCampaignId(req, res));

router.post(`/api-${sys}/surveyresponses/updateSurveyresponseByContactId`, (req, res) => surveyresponsesCtrl.updateSurveyresponseByContactId(req, res));

router.post(`/api-${sys}/surveyresponses/updateSurveyresponseBySurveyId`, (req, res) => surveyresponsesCtrl.updateSurveyresponseBySurveyId(req, res));





router.get(`/api-${sys}/surveyresponses/`, (req, res) => surveyresponsesCtrl.getAllSurveyresponses(req, res));
router.post(`/api-${sys}/surveyresponses/`, (req, res) => surveyresponsesCtrl.addSurveyresponse(req, res));
router.get(`/api-${sys}/surveyresponses/:id`, (req, res) => surveyresponsesCtrl.getASurveyresponse(req, res));
router.put(`/api-${sys}/surveyresponses/:id`, (req, res) => surveyresponsesCtrl.updateSurveyresponse(req, res));
router.delete(`/api-${sys}/surveyresponses/:id`, (req, res) => surveyresponsesCtrl.deleteSurveyresponse(req, res));

//</es-section>
module.exports = router;
