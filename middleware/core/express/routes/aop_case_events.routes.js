/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:41:59 GMT-0400 (Bolivia Time)
 * Time: 4:41:59
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:41:59 GMT-0400 (Bolivia Time)
 * Last time updated: 4:41:59
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const aopCaseEventsCtrl = require("../controllers/aop_case_events.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/aop-case-events/findOneById/:id`, (req, res) => aopCaseEventsCtrl.findOneById(req, res));

router.get(`/api-${sys}/aop-case-events/findOneByDeleted/:deleted`, (req, res) => aopCaseEventsCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/aop-case-events/findOneByName/:name`, (req, res) => aopCaseEventsCtrl.findOneByName(req, res));

router.get(`/api-${sys}/aop-case-events/findOneByDescription/:description`, (req, res) => aopCaseEventsCtrl.findOneByDescription(req, res));

router.get(`/api-${sys}/aop-case-events/findOneByDateEntered/:dateEntered`, (req, res) => aopCaseEventsCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/aop-case-events/findOneByDateModified/:dateModified`, (req, res) => aopCaseEventsCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/aop-case-events/findOneByModifiedUserId/:modifiedUserId`, (req, res) => aopCaseEventsCtrl.findOneByModifiedUserId(req, res));

router.get(`/api-${sys}/aop-case-events/findOneByCreatedBy/:createdBy`, (req, res) => aopCaseEventsCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/aop-case-events/findOneByAssignedUserId/:assignedUserId`, (req, res) => aopCaseEventsCtrl.findOneByAssignedUserId(req, res));

router.get(`/api-${sys}/aop-case-events/findOneByCaseId/:caseId`, (req, res) => aopCaseEventsCtrl.findOneByCaseId(req, res));



router.post(`/api-${sys}/aop-case-events/updateAopCaseEventById`, (req, res) => aopCaseEventsCtrl.updateAopCaseEventById(req, res));

router.post(`/api-${sys}/aop-case-events/updateAopCaseEventByDeleted`, (req, res) => aopCaseEventsCtrl.updateAopCaseEventByDeleted(req, res));

router.post(`/api-${sys}/aop-case-events/updateAopCaseEventByName`, (req, res) => aopCaseEventsCtrl.updateAopCaseEventByName(req, res));

router.post(`/api-${sys}/aop-case-events/updateAopCaseEventByDescription`, (req, res) => aopCaseEventsCtrl.updateAopCaseEventByDescription(req, res));

router.post(`/api-${sys}/aop-case-events/updateAopCaseEventByDateEntered`, (req, res) => aopCaseEventsCtrl.updateAopCaseEventByDateEntered(req, res));

router.post(`/api-${sys}/aop-case-events/updateAopCaseEventByDateModified`, (req, res) => aopCaseEventsCtrl.updateAopCaseEventByDateModified(req, res));

router.post(`/api-${sys}/aop-case-events/updateAopCaseEventByModifiedUserId`, (req, res) => aopCaseEventsCtrl.updateAopCaseEventByModifiedUserId(req, res));

router.post(`/api-${sys}/aop-case-events/updateAopCaseEventByCreatedBy`, (req, res) => aopCaseEventsCtrl.updateAopCaseEventByCreatedBy(req, res));

router.post(`/api-${sys}/aop-case-events/updateAopCaseEventByAssignedUserId`, (req, res) => aopCaseEventsCtrl.updateAopCaseEventByAssignedUserId(req, res));

router.post(`/api-${sys}/aop-case-events/updateAopCaseEventByCaseId`, (req, res) => aopCaseEventsCtrl.updateAopCaseEventByCaseId(req, res));





router.get(`/api-${sys}/aop-case-events/`, (req, res) => aopCaseEventsCtrl.getAllAopCaseEvents(req, res));
router.post(`/api-${sys}/aop-case-events/`, (req, res) => aopCaseEventsCtrl.addAopCaseEvent(req, res));
router.get(`/api-${sys}/aop-case-events/:id`, (req, res) => aopCaseEventsCtrl.getAAopCaseEvent(req, res));
router.put(`/api-${sys}/aop-case-events/:id`, (req, res) => aopCaseEventsCtrl.updateAopCaseEvent(req, res));
router.delete(`/api-${sys}/aop-case-events/:id`, (req, res) => aopCaseEventsCtrl.deleteAopCaseEvent(req, res));

//</es-section>
module.exports = router;
