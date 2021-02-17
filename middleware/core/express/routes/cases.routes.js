/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:42:41 GMT-0400 (Bolivia Time)
 * Time: 4:42:41
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:42:41 GMT-0400 (Bolivia Time)
 * Last time updated: 4:42:41
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const casesCtrl = require("../controllers/cases.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/cases/findOneById/:id`, (req, res) => casesCtrl.findOneById(req, res));

router.get(`/api-${sys}/cases/findOneByDeleted/:deleted`, (req, res) => casesCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/cases/findOneByCaseNumber/:caseNumber`, (req, res) => casesCtrl.findOneByCaseNumber(req, res));

router.get(`/api-${sys}/cases/findOneByName/:name`, (req, res) => casesCtrl.findOneByName(req, res));

router.get(`/api-${sys}/cases/findOneByType/:type`, (req, res) => casesCtrl.findOneByType(req, res));

router.get(`/api-${sys}/cases/findOneByStatus/:status`, (req, res) => casesCtrl.findOneByStatus(req, res));

router.get(`/api-${sys}/cases/findOneByPriority/:priority`, (req, res) => casesCtrl.findOneByPriority(req, res));

router.get(`/api-${sys}/cases/findOneByState/:state`, (req, res) => casesCtrl.findOneByState(req, res));

router.get(`/api-${sys}/cases/findOneByDescription/:description`, (req, res) => casesCtrl.findOneByDescription(req, res));

router.get(`/api-${sys}/cases/findOneByResolution/:resolution`, (req, res) => casesCtrl.findOneByResolution(req, res));

router.get(`/api-${sys}/cases/findOneByWorkLog/:workLog`, (req, res) => casesCtrl.findOneByWorkLog(req, res));

router.get(`/api-${sys}/cases/findOneByDateEntered/:dateEntered`, (req, res) => casesCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/cases/findOneByDateModified/:dateModified`, (req, res) => casesCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/cases/findOneByModifiedUserId/:modifiedUserId`, (req, res) => casesCtrl.findOneByModifiedUserId(req, res));

router.get(`/api-${sys}/cases/findOneByCreatedBy/:createdBy`, (req, res) => casesCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/cases/findOneByAssignedUserId/:assignedUserId`, (req, res) => casesCtrl.findOneByAssignedUserId(req, res));

router.get(`/api-${sys}/cases/findOneByAccountId/:accountId`, (req, res) => casesCtrl.findOneByAccountId(req, res));

router.get(`/api-${sys}/cases/findOneByContactCreatedById/:contactCreatedById`, (req, res) => casesCtrl.findOneByContactCreatedById(req, res));



router.post(`/api-${sys}/cases/updateCaseById`, (req, res) => casesCtrl.updateCaseById(req, res));

router.post(`/api-${sys}/cases/updateCaseByDeleted`, (req, res) => casesCtrl.updateCaseByDeleted(req, res));

router.post(`/api-${sys}/cases/updateCaseByCaseNumber`, (req, res) => casesCtrl.updateCaseByCaseNumber(req, res));

router.post(`/api-${sys}/cases/updateCaseByName`, (req, res) => casesCtrl.updateCaseByName(req, res));

router.post(`/api-${sys}/cases/updateCaseByType`, (req, res) => casesCtrl.updateCaseByType(req, res));

router.post(`/api-${sys}/cases/updateCaseByStatus`, (req, res) => casesCtrl.updateCaseByStatus(req, res));

router.post(`/api-${sys}/cases/updateCaseByPriority`, (req, res) => casesCtrl.updateCaseByPriority(req, res));

router.post(`/api-${sys}/cases/updateCaseByState`, (req, res) => casesCtrl.updateCaseByState(req, res));

router.post(`/api-${sys}/cases/updateCaseByDescription`, (req, res) => casesCtrl.updateCaseByDescription(req, res));

router.post(`/api-${sys}/cases/updateCaseByResolution`, (req, res) => casesCtrl.updateCaseByResolution(req, res));

router.post(`/api-${sys}/cases/updateCaseByWorkLog`, (req, res) => casesCtrl.updateCaseByWorkLog(req, res));

router.post(`/api-${sys}/cases/updateCaseByDateEntered`, (req, res) => casesCtrl.updateCaseByDateEntered(req, res));

router.post(`/api-${sys}/cases/updateCaseByDateModified`, (req, res) => casesCtrl.updateCaseByDateModified(req, res));

router.post(`/api-${sys}/cases/updateCaseByModifiedUserId`, (req, res) => casesCtrl.updateCaseByModifiedUserId(req, res));

router.post(`/api-${sys}/cases/updateCaseByCreatedBy`, (req, res) => casesCtrl.updateCaseByCreatedBy(req, res));

router.post(`/api-${sys}/cases/updateCaseByAssignedUserId`, (req, res) => casesCtrl.updateCaseByAssignedUserId(req, res));

router.post(`/api-${sys}/cases/updateCaseByAccountId`, (req, res) => casesCtrl.updateCaseByAccountId(req, res));

router.post(`/api-${sys}/cases/updateCaseByContactCreatedById`, (req, res) => casesCtrl.updateCaseByContactCreatedById(req, res));





router.get(`/api-${sys}/cases/`, (req, res) => casesCtrl.getAllCases(req, res));
router.post(`/api-${sys}/cases/`, (req, res) => casesCtrl.addCase(req, res));
router.get(`/api-${sys}/cases/:id`, (req, res) => casesCtrl.getACase(req, res));
router.put(`/api-${sys}/cases/:id`, (req, res) => casesCtrl.updateCase(req, res));
router.delete(`/api-${sys}/cases/:id`, (req, res) => casesCtrl.deleteCase(req, res));

//</es-section>
module.exports = router;
