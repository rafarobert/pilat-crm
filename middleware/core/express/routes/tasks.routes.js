/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:38:55 GMT-0400 (Bolivia Time)
 * Time: 18:38:55
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:38:55 GMT-0400 (Bolivia Time)
 * Last time updated: 18:38:55
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const tasksCtrl = require("../controllers/tasks.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/tasks/findOneById/:id`, (req, res) => tasksCtrl.findOneById(req, res));

router.get(`/api-${sys}/tasks/findOneByDeleted/:deleted`, (req, res) => tasksCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/tasks/findOneByDateDueFlag/:dateDueFlag`, (req, res) => tasksCtrl.findOneByDateDueFlag(req, res));

router.get(`/api-${sys}/tasks/findOneByDateStartFlag/:dateStartFlag`, (req, res) => tasksCtrl.findOneByDateStartFlag(req, res));

router.get(`/api-${sys}/tasks/findOneByName/:name`, (req, res) => tasksCtrl.findOneByName(req, res));

router.get(`/api-${sys}/tasks/findOneByStatus/:status`, (req, res) => tasksCtrl.findOneByStatus(req, res));

router.get(`/api-${sys}/tasks/findOneByParentType/:parentType`, (req, res) => tasksCtrl.findOneByParentType(req, res));

router.get(`/api-${sys}/tasks/findOneByPriority/:priority`, (req, res) => tasksCtrl.findOneByPriority(req, res));

router.get(`/api-${sys}/tasks/findOneByDescription/:description`, (req, res) => tasksCtrl.findOneByDescription(req, res));

router.get(`/api-${sys}/tasks/findOneByDateEntered/:dateEntered`, (req, res) => tasksCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/tasks/findOneByDateModified/:dateModified`, (req, res) => tasksCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/tasks/findOneByDateDue/:dateDue`, (req, res) => tasksCtrl.findOneByDateDue(req, res));

router.get(`/api-${sys}/tasks/findOneByDateStart/:dateStart`, (req, res) => tasksCtrl.findOneByDateStart(req, res));

router.get(`/api-${sys}/tasks/findOneByModifiedUserId/:modifiedUserId`, (req, res) => tasksCtrl.findOneByModifiedUserId(req, res));

router.get(`/api-${sys}/tasks/findOneByCreatedBy/:createdBy`, (req, res) => tasksCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/tasks/findOneByAssignedUserId/:assignedUserId`, (req, res) => tasksCtrl.findOneByAssignedUserId(req, res));

router.get(`/api-${sys}/tasks/findOneByParentId/:parentId`, (req, res) => tasksCtrl.findOneByParentId(req, res));

router.get(`/api-${sys}/tasks/findOneByContactId/:contactId`, (req, res) => tasksCtrl.findOneByContactId(req, res));



router.post(`/api-${sys}/tasks/updateTaskById`, (req, res) => tasksCtrl.updateTaskById(req, res));

router.post(`/api-${sys}/tasks/updateTaskByDeleted`, (req, res) => tasksCtrl.updateTaskByDeleted(req, res));

router.post(`/api-${sys}/tasks/updateTaskByDateDueFlag`, (req, res) => tasksCtrl.updateTaskByDateDueFlag(req, res));

router.post(`/api-${sys}/tasks/updateTaskByDateStartFlag`, (req, res) => tasksCtrl.updateTaskByDateStartFlag(req, res));

router.post(`/api-${sys}/tasks/updateTaskByName`, (req, res) => tasksCtrl.updateTaskByName(req, res));

router.post(`/api-${sys}/tasks/updateTaskByStatus`, (req, res) => tasksCtrl.updateTaskByStatus(req, res));

router.post(`/api-${sys}/tasks/updateTaskByParentType`, (req, res) => tasksCtrl.updateTaskByParentType(req, res));

router.post(`/api-${sys}/tasks/updateTaskByPriority`, (req, res) => tasksCtrl.updateTaskByPriority(req, res));

router.post(`/api-${sys}/tasks/updateTaskByDescription`, (req, res) => tasksCtrl.updateTaskByDescription(req, res));

router.post(`/api-${sys}/tasks/updateTaskByDateEntered`, (req, res) => tasksCtrl.updateTaskByDateEntered(req, res));

router.post(`/api-${sys}/tasks/updateTaskByDateModified`, (req, res) => tasksCtrl.updateTaskByDateModified(req, res));

router.post(`/api-${sys}/tasks/updateTaskByDateDue`, (req, res) => tasksCtrl.updateTaskByDateDue(req, res));

router.post(`/api-${sys}/tasks/updateTaskByDateStart`, (req, res) => tasksCtrl.updateTaskByDateStart(req, res));

router.post(`/api-${sys}/tasks/updateTaskByModifiedUserId`, (req, res) => tasksCtrl.updateTaskByModifiedUserId(req, res));

router.post(`/api-${sys}/tasks/updateTaskByCreatedBy`, (req, res) => tasksCtrl.updateTaskByCreatedBy(req, res));

router.post(`/api-${sys}/tasks/updateTaskByAssignedUserId`, (req, res) => tasksCtrl.updateTaskByAssignedUserId(req, res));

router.post(`/api-${sys}/tasks/updateTaskByParentId`, (req, res) => tasksCtrl.updateTaskByParentId(req, res));

router.post(`/api-${sys}/tasks/updateTaskByContactId`, (req, res) => tasksCtrl.updateTaskByContactId(req, res));





router.get(`/api-${sys}/tasks/`, (req, res) => tasksCtrl.getAllTasks(req, res));
router.post(`/api-${sys}/tasks/`, (req, res) => tasksCtrl.addTask(req, res));
router.get(`/api-${sys}/tasks/:id`, (req, res) => tasksCtrl.getATask(req, res));
router.put(`/api-${sys}/tasks/:id`, (req, res) => tasksCtrl.updateTask(req, res));
router.delete(`/api-${sys}/tasks/:id`, (req, res) => tasksCtrl.deleteTask(req, res));

//</es-section>
module.exports = router;
