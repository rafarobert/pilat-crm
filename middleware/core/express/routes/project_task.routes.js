/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:43:54 GMT-0400 (Bolivia Time)
 * Time: 4:43:54
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:43:54 GMT-0400 (Bolivia Time)
 * Last time updated: 4:43:54
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const projectTaskCtrl = require("../controllers/project_task.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/project-task/findOneById/:id`, (req, res) => projectTaskCtrl.findOneById(req, res));

router.get(`/api-${sys}/project-task/findOneByMilestoneFlag/:milestoneFlag`, (req, res) => projectTaskCtrl.findOneByMilestoneFlag(req, res));

router.get(`/api-${sys}/project-task/findOneByDeleted/:deleted`, (req, res) => projectTaskCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/project-task/findOneByProjectTaskId/:projectTaskId`, (req, res) => projectTaskCtrl.findOneByProjectTaskId(req, res));

router.get(`/api-${sys}/project-task/findOneByTimeStart/:timeStart`, (req, res) => projectTaskCtrl.findOneByTimeStart(req, res));

router.get(`/api-${sys}/project-task/findOneByTimeFinish/:timeFinish`, (req, res) => projectTaskCtrl.findOneByTimeFinish(req, res));

router.get(`/api-${sys}/project-task/findOneByDuration/:duration`, (req, res) => projectTaskCtrl.findOneByDuration(req, res));

router.get(`/api-${sys}/project-task/findOneByActualDuration/:actualDuration`, (req, res) => projectTaskCtrl.findOneByActualDuration(req, res));

router.get(`/api-${sys}/project-task/findOneByPercentComplete/:percentComplete`, (req, res) => projectTaskCtrl.findOneByPercentComplete(req, res));

router.get(`/api-${sys}/project-task/findOneByParentTaskId/:parentTaskId`, (req, res) => projectTaskCtrl.findOneByParentTaskId(req, res));

router.get(`/api-${sys}/project-task/findOneByOrderNumber/:orderNumber`, (req, res) => projectTaskCtrl.findOneByOrderNumber(req, res));

router.get(`/api-${sys}/project-task/findOneByTaskNumber/:taskNumber`, (req, res) => projectTaskCtrl.findOneByTaskNumber(req, res));

router.get(`/api-${sys}/project-task/findOneByEstimatedEffort/:estimatedEffort`, (req, res) => projectTaskCtrl.findOneByEstimatedEffort(req, res));

router.get(`/api-${sys}/project-task/findOneByActualEffort/:actualEffort`, (req, res) => projectTaskCtrl.findOneByActualEffort(req, res));

router.get(`/api-${sys}/project-task/findOneByUtilization/:utilization`, (req, res) => projectTaskCtrl.findOneByUtilization(req, res));

router.get(`/api-${sys}/project-task/findOneByName/:name`, (req, res) => projectTaskCtrl.findOneByName(req, res));

router.get(`/api-${sys}/project-task/findOneByStatus/:status`, (req, res) => projectTaskCtrl.findOneByStatus(req, res));

router.get(`/api-${sys}/project-task/findOneByRelationshipType/:relationshipType`, (req, res) => projectTaskCtrl.findOneByRelationshipType(req, res));

router.get(`/api-${sys}/project-task/findOneByPriority/:priority`, (req, res) => projectTaskCtrl.findOneByPriority(req, res));

router.get(`/api-${sys}/project-task/findOneByDescription/:description`, (req, res) => projectTaskCtrl.findOneByDescription(req, res));

router.get(`/api-${sys}/project-task/findOneByPredecessors/:predecessors`, (req, res) => projectTaskCtrl.findOneByPredecessors(req, res));

router.get(`/api-${sys}/project-task/findOneByDurationUnit/:durationUnit`, (req, res) => projectTaskCtrl.findOneByDurationUnit(req, res));

router.get(`/api-${sys}/project-task/findOneByDateEntered/:dateEntered`, (req, res) => projectTaskCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/project-task/findOneByDateModified/:dateModified`, (req, res) => projectTaskCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/project-task/findOneByDateStart/:dateStart`, (req, res) => projectTaskCtrl.findOneByDateStart(req, res));

router.get(`/api-${sys}/project-task/findOneByDateFinish/:dateFinish`, (req, res) => projectTaskCtrl.findOneByDateFinish(req, res));

router.get(`/api-${sys}/project-task/findOneByDateDue/:dateDue`, (req, res) => projectTaskCtrl.findOneByDateDue(req, res));

router.get(`/api-${sys}/project-task/findOneByProjectId/:projectId`, (req, res) => projectTaskCtrl.findOneByProjectId(req, res));

router.get(`/api-${sys}/project-task/findOneByAssignedUserId/:assignedUserId`, (req, res) => projectTaskCtrl.findOneByAssignedUserId(req, res));

router.get(`/api-${sys}/project-task/findOneByModifiedUserId/:modifiedUserId`, (req, res) => projectTaskCtrl.findOneByModifiedUserId(req, res));

router.get(`/api-${sys}/project-task/findOneByCreatedBy/:createdBy`, (req, res) => projectTaskCtrl.findOneByCreatedBy(req, res));



router.post(`/api-${sys}/project-task/updateProjectTaskById`, (req, res) => projectTaskCtrl.updateProjectTaskById(req, res));

router.post(`/api-${sys}/project-task/updateProjectTaskByMilestoneFlag`, (req, res) => projectTaskCtrl.updateProjectTaskByMilestoneFlag(req, res));

router.post(`/api-${sys}/project-task/updateProjectTaskByDeleted`, (req, res) => projectTaskCtrl.updateProjectTaskByDeleted(req, res));

router.post(`/api-${sys}/project-task/updateProjectTaskByProjectTaskId`, (req, res) => projectTaskCtrl.updateProjectTaskByProjectTaskId(req, res));

router.post(`/api-${sys}/project-task/updateProjectTaskByTimeStart`, (req, res) => projectTaskCtrl.updateProjectTaskByTimeStart(req, res));

router.post(`/api-${sys}/project-task/updateProjectTaskByTimeFinish`, (req, res) => projectTaskCtrl.updateProjectTaskByTimeFinish(req, res));

router.post(`/api-${sys}/project-task/updateProjectTaskByDuration`, (req, res) => projectTaskCtrl.updateProjectTaskByDuration(req, res));

router.post(`/api-${sys}/project-task/updateProjectTaskByActualDuration`, (req, res) => projectTaskCtrl.updateProjectTaskByActualDuration(req, res));

router.post(`/api-${sys}/project-task/updateProjectTaskByPercentComplete`, (req, res) => projectTaskCtrl.updateProjectTaskByPercentComplete(req, res));

router.post(`/api-${sys}/project-task/updateProjectTaskByParentTaskId`, (req, res) => projectTaskCtrl.updateProjectTaskByParentTaskId(req, res));

router.post(`/api-${sys}/project-task/updateProjectTaskByOrderNumber`, (req, res) => projectTaskCtrl.updateProjectTaskByOrderNumber(req, res));

router.post(`/api-${sys}/project-task/updateProjectTaskByTaskNumber`, (req, res) => projectTaskCtrl.updateProjectTaskByTaskNumber(req, res));

router.post(`/api-${sys}/project-task/updateProjectTaskByEstimatedEffort`, (req, res) => projectTaskCtrl.updateProjectTaskByEstimatedEffort(req, res));

router.post(`/api-${sys}/project-task/updateProjectTaskByActualEffort`, (req, res) => projectTaskCtrl.updateProjectTaskByActualEffort(req, res));

router.post(`/api-${sys}/project-task/updateProjectTaskByUtilization`, (req, res) => projectTaskCtrl.updateProjectTaskByUtilization(req, res));

router.post(`/api-${sys}/project-task/updateProjectTaskByName`, (req, res) => projectTaskCtrl.updateProjectTaskByName(req, res));

router.post(`/api-${sys}/project-task/updateProjectTaskByStatus`, (req, res) => projectTaskCtrl.updateProjectTaskByStatus(req, res));

router.post(`/api-${sys}/project-task/updateProjectTaskByRelationshipType`, (req, res) => projectTaskCtrl.updateProjectTaskByRelationshipType(req, res));

router.post(`/api-${sys}/project-task/updateProjectTaskByPriority`, (req, res) => projectTaskCtrl.updateProjectTaskByPriority(req, res));

router.post(`/api-${sys}/project-task/updateProjectTaskByDescription`, (req, res) => projectTaskCtrl.updateProjectTaskByDescription(req, res));

router.post(`/api-${sys}/project-task/updateProjectTaskByPredecessors`, (req, res) => projectTaskCtrl.updateProjectTaskByPredecessors(req, res));

router.post(`/api-${sys}/project-task/updateProjectTaskByDurationUnit`, (req, res) => projectTaskCtrl.updateProjectTaskByDurationUnit(req, res));

router.post(`/api-${sys}/project-task/updateProjectTaskByDateEntered`, (req, res) => projectTaskCtrl.updateProjectTaskByDateEntered(req, res));

router.post(`/api-${sys}/project-task/updateProjectTaskByDateModified`, (req, res) => projectTaskCtrl.updateProjectTaskByDateModified(req, res));

router.post(`/api-${sys}/project-task/updateProjectTaskByDateStart`, (req, res) => projectTaskCtrl.updateProjectTaskByDateStart(req, res));

router.post(`/api-${sys}/project-task/updateProjectTaskByDateFinish`, (req, res) => projectTaskCtrl.updateProjectTaskByDateFinish(req, res));

router.post(`/api-${sys}/project-task/updateProjectTaskByDateDue`, (req, res) => projectTaskCtrl.updateProjectTaskByDateDue(req, res));

router.post(`/api-${sys}/project-task/updateProjectTaskByProjectId`, (req, res) => projectTaskCtrl.updateProjectTaskByProjectId(req, res));

router.post(`/api-${sys}/project-task/updateProjectTaskByAssignedUserId`, (req, res) => projectTaskCtrl.updateProjectTaskByAssignedUserId(req, res));

router.post(`/api-${sys}/project-task/updateProjectTaskByModifiedUserId`, (req, res) => projectTaskCtrl.updateProjectTaskByModifiedUserId(req, res));

router.post(`/api-${sys}/project-task/updateProjectTaskByCreatedBy`, (req, res) => projectTaskCtrl.updateProjectTaskByCreatedBy(req, res));





router.get(`/api-${sys}/project-task/`, (req, res) => projectTaskCtrl.getAllProjectTask(req, res));
router.post(`/api-${sys}/project-task/`, (req, res) => projectTaskCtrl.addProjectTask(req, res));
router.get(`/api-${sys}/project-task/:id`, (req, res) => projectTaskCtrl.getAProjectTask(req, res));
router.put(`/api-${sys}/project-task/:id`, (req, res) => projectTaskCtrl.updateProjectTask(req, res));
router.delete(`/api-${sys}/project-task/:id`, (req, res) => projectTaskCtrl.deleteProjectTask(req, res));

//</es-section>
module.exports = router;
