/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:43:50 GMT-0400 (Bolivia Time)
 * Time: 4:43:50
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:43:50 GMT-0400 (Bolivia Time)
 * Last time updated: 4:43:50
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const projectCtrl = require("../controllers/project.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/project/findOneById/:id`, (req, res) => projectCtrl.findOneById(req, res));

router.get(`/api-${sys}/project/findOneByDeleted/:deleted`, (req, res) => projectCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/project/findOneByOverrideBusinessHours/:overrideBusinessHours`, (req, res) => projectCtrl.findOneByOverrideBusinessHours(req, res));

router.get(`/api-${sys}/project/findOneByName/:name`, (req, res) => projectCtrl.findOneByName(req, res));

router.get(`/api-${sys}/project/findOneByStatus/:status`, (req, res) => projectCtrl.findOneByStatus(req, res));

router.get(`/api-${sys}/project/findOneByPriority/:priority`, (req, res) => projectCtrl.findOneByPriority(req, res));

router.get(`/api-${sys}/project/findOneByDescription/:description`, (req, res) => projectCtrl.findOneByDescription(req, res));

router.get(`/api-${sys}/project/findOneByDateEntered/:dateEntered`, (req, res) => projectCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/project/findOneByDateModified/:dateModified`, (req, res) => projectCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/project/findOneByEstimatedStartDate/:estimatedStartDate`, (req, res) => projectCtrl.findOneByEstimatedStartDate(req, res));

router.get(`/api-${sys}/project/findOneByEstimatedEndDate/:estimatedEndDate`, (req, res) => projectCtrl.findOneByEstimatedEndDate(req, res));

router.get(`/api-${sys}/project/findOneByAssignedUserId/:assignedUserId`, (req, res) => projectCtrl.findOneByAssignedUserId(req, res));

router.get(`/api-${sys}/project/findOneByModifiedUserId/:modifiedUserId`, (req, res) => projectCtrl.findOneByModifiedUserId(req, res));

router.get(`/api-${sys}/project/findOneByCreatedBy/:createdBy`, (req, res) => projectCtrl.findOneByCreatedBy(req, res));



router.post(`/api-${sys}/project/updateProjectById`, (req, res) => projectCtrl.updateProjectById(req, res));

router.post(`/api-${sys}/project/updateProjectByDeleted`, (req, res) => projectCtrl.updateProjectByDeleted(req, res));

router.post(`/api-${sys}/project/updateProjectByOverrideBusinessHours`, (req, res) => projectCtrl.updateProjectByOverrideBusinessHours(req, res));

router.post(`/api-${sys}/project/updateProjectByName`, (req, res) => projectCtrl.updateProjectByName(req, res));

router.post(`/api-${sys}/project/updateProjectByStatus`, (req, res) => projectCtrl.updateProjectByStatus(req, res));

router.post(`/api-${sys}/project/updateProjectByPriority`, (req, res) => projectCtrl.updateProjectByPriority(req, res));

router.post(`/api-${sys}/project/updateProjectByDescription`, (req, res) => projectCtrl.updateProjectByDescription(req, res));

router.post(`/api-${sys}/project/updateProjectByDateEntered`, (req, res) => projectCtrl.updateProjectByDateEntered(req, res));

router.post(`/api-${sys}/project/updateProjectByDateModified`, (req, res) => projectCtrl.updateProjectByDateModified(req, res));

router.post(`/api-${sys}/project/updateProjectByEstimatedStartDate`, (req, res) => projectCtrl.updateProjectByEstimatedStartDate(req, res));

router.post(`/api-${sys}/project/updateProjectByEstimatedEndDate`, (req, res) => projectCtrl.updateProjectByEstimatedEndDate(req, res));

router.post(`/api-${sys}/project/updateProjectByAssignedUserId`, (req, res) => projectCtrl.updateProjectByAssignedUserId(req, res));

router.post(`/api-${sys}/project/updateProjectByModifiedUserId`, (req, res) => projectCtrl.updateProjectByModifiedUserId(req, res));

router.post(`/api-${sys}/project/updateProjectByCreatedBy`, (req, res) => projectCtrl.updateProjectByCreatedBy(req, res));





router.get(`/api-${sys}/project/`, (req, res) => projectCtrl.getAllProject(req, res));
router.post(`/api-${sys}/project/`, (req, res) => projectCtrl.addProject(req, res));
router.get(`/api-${sys}/project/:id`, (req, res) => projectCtrl.getAProject(req, res));
router.put(`/api-${sys}/project/:id`, (req, res) => projectCtrl.updateProject(req, res));
router.delete(`/api-${sys}/project/:id`, (req, res) => projectCtrl.deleteProject(req, res));

//</es-section>
module.exports = router;
