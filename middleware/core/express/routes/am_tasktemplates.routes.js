/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:41:51 GMT-0400 (Bolivia Time)
 * Time: 4:41:51
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:41:51 GMT-0400 (Bolivia Time)
 * Last time updated: 4:41:51
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const amTasktemplatesCtrl = require("../controllers/am_tasktemplates.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/am-tasktemplates/findOneById/:id`, (req, res) => amTasktemplatesCtrl.findOneById(req, res));

router.get(`/api-${sys}/am-tasktemplates/findOneByDeleted/:deleted`, (req, res) => amTasktemplatesCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/am-tasktemplates/findOneByMilestoneFlag/:milestoneFlag`, (req, res) => amTasktemplatesCtrl.findOneByMilestoneFlag(req, res));

router.get(`/api-${sys}/am-tasktemplates/findOneByPercentComplete/:percentComplete`, (req, res) => amTasktemplatesCtrl.findOneByPercentComplete(req, res));

router.get(`/api-${sys}/am-tasktemplates/findOneByPredecessors/:predecessors`, (req, res) => amTasktemplatesCtrl.findOneByPredecessors(req, res));

router.get(`/api-${sys}/am-tasktemplates/findOneByTaskNumber/:taskNumber`, (req, res) => amTasktemplatesCtrl.findOneByTaskNumber(req, res));

router.get(`/api-${sys}/am-tasktemplates/findOneByOrderNumber/:orderNumber`, (req, res) => amTasktemplatesCtrl.findOneByOrderNumber(req, res));

router.get(`/api-${sys}/am-tasktemplates/findOneByEstimatedEffort/:estimatedEffort`, (req, res) => amTasktemplatesCtrl.findOneByEstimatedEffort(req, res));

router.get(`/api-${sys}/am-tasktemplates/findOneByDuration/:duration`, (req, res) => amTasktemplatesCtrl.findOneByDuration(req, res));

router.get(`/api-${sys}/am-tasktemplates/findOneByName/:name`, (req, res) => amTasktemplatesCtrl.findOneByName(req, res));

router.get(`/api-${sys}/am-tasktemplates/findOneByStatus/:status`, (req, res) => amTasktemplatesCtrl.findOneByStatus(req, res));

router.get(`/api-${sys}/am-tasktemplates/findOneByPriority/:priority`, (req, res) => amTasktemplatesCtrl.findOneByPriority(req, res));

router.get(`/api-${sys}/am-tasktemplates/findOneByRelationshipType/:relationshipType`, (req, res) => amTasktemplatesCtrl.findOneByRelationshipType(req, res));

router.get(`/api-${sys}/am-tasktemplates/findOneByUtilization/:utilization`, (req, res) => amTasktemplatesCtrl.findOneByUtilization(req, res));

router.get(`/api-${sys}/am-tasktemplates/findOneByDescription/:description`, (req, res) => amTasktemplatesCtrl.findOneByDescription(req, res));

router.get(`/api-${sys}/am-tasktemplates/findOneByDateEntered/:dateEntered`, (req, res) => amTasktemplatesCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/am-tasktemplates/findOneByDateModified/:dateModified`, (req, res) => amTasktemplatesCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/am-tasktemplates/findOneByModifiedUserId/:modifiedUserId`, (req, res) => amTasktemplatesCtrl.findOneByModifiedUserId(req, res));

router.get(`/api-${sys}/am-tasktemplates/findOneByCreatedBy/:createdBy`, (req, res) => amTasktemplatesCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/am-tasktemplates/findOneByAssignedUserId/:assignedUserId`, (req, res) => amTasktemplatesCtrl.findOneByAssignedUserId(req, res));



router.post(`/api-${sys}/am-tasktemplates/updateAmTasktemplateById`, (req, res) => amTasktemplatesCtrl.updateAmTasktemplateById(req, res));

router.post(`/api-${sys}/am-tasktemplates/updateAmTasktemplateByDeleted`, (req, res) => amTasktemplatesCtrl.updateAmTasktemplateByDeleted(req, res));

router.post(`/api-${sys}/am-tasktemplates/updateAmTasktemplateByMilestoneFlag`, (req, res) => amTasktemplatesCtrl.updateAmTasktemplateByMilestoneFlag(req, res));

router.post(`/api-${sys}/am-tasktemplates/updateAmTasktemplateByPercentComplete`, (req, res) => amTasktemplatesCtrl.updateAmTasktemplateByPercentComplete(req, res));

router.post(`/api-${sys}/am-tasktemplates/updateAmTasktemplateByPredecessors`, (req, res) => amTasktemplatesCtrl.updateAmTasktemplateByPredecessors(req, res));

router.post(`/api-${sys}/am-tasktemplates/updateAmTasktemplateByTaskNumber`, (req, res) => amTasktemplatesCtrl.updateAmTasktemplateByTaskNumber(req, res));

router.post(`/api-${sys}/am-tasktemplates/updateAmTasktemplateByOrderNumber`, (req, res) => amTasktemplatesCtrl.updateAmTasktemplateByOrderNumber(req, res));

router.post(`/api-${sys}/am-tasktemplates/updateAmTasktemplateByEstimatedEffort`, (req, res) => amTasktemplatesCtrl.updateAmTasktemplateByEstimatedEffort(req, res));

router.post(`/api-${sys}/am-tasktemplates/updateAmTasktemplateByDuration`, (req, res) => amTasktemplatesCtrl.updateAmTasktemplateByDuration(req, res));

router.post(`/api-${sys}/am-tasktemplates/updateAmTasktemplateByName`, (req, res) => amTasktemplatesCtrl.updateAmTasktemplateByName(req, res));

router.post(`/api-${sys}/am-tasktemplates/updateAmTasktemplateByStatus`, (req, res) => amTasktemplatesCtrl.updateAmTasktemplateByStatus(req, res));

router.post(`/api-${sys}/am-tasktemplates/updateAmTasktemplateByPriority`, (req, res) => amTasktemplatesCtrl.updateAmTasktemplateByPriority(req, res));

router.post(`/api-${sys}/am-tasktemplates/updateAmTasktemplateByRelationshipType`, (req, res) => amTasktemplatesCtrl.updateAmTasktemplateByRelationshipType(req, res));

router.post(`/api-${sys}/am-tasktemplates/updateAmTasktemplateByUtilization`, (req, res) => amTasktemplatesCtrl.updateAmTasktemplateByUtilization(req, res));

router.post(`/api-${sys}/am-tasktemplates/updateAmTasktemplateByDescription`, (req, res) => amTasktemplatesCtrl.updateAmTasktemplateByDescription(req, res));

router.post(`/api-${sys}/am-tasktemplates/updateAmTasktemplateByDateEntered`, (req, res) => amTasktemplatesCtrl.updateAmTasktemplateByDateEntered(req, res));

router.post(`/api-${sys}/am-tasktemplates/updateAmTasktemplateByDateModified`, (req, res) => amTasktemplatesCtrl.updateAmTasktemplateByDateModified(req, res));

router.post(`/api-${sys}/am-tasktemplates/updateAmTasktemplateByModifiedUserId`, (req, res) => amTasktemplatesCtrl.updateAmTasktemplateByModifiedUserId(req, res));

router.post(`/api-${sys}/am-tasktemplates/updateAmTasktemplateByCreatedBy`, (req, res) => amTasktemplatesCtrl.updateAmTasktemplateByCreatedBy(req, res));

router.post(`/api-${sys}/am-tasktemplates/updateAmTasktemplateByAssignedUserId`, (req, res) => amTasktemplatesCtrl.updateAmTasktemplateByAssignedUserId(req, res));





router.get(`/api-${sys}/am-tasktemplates/`, (req, res) => amTasktemplatesCtrl.getAllAmTasktemplates(req, res));
router.post(`/api-${sys}/am-tasktemplates/`, (req, res) => amTasktemplatesCtrl.addAmTasktemplate(req, res));
router.get(`/api-${sys}/am-tasktemplates/:id`, (req, res) => amTasktemplatesCtrl.getAAmTasktemplate(req, res));
router.put(`/api-${sys}/am-tasktemplates/:id`, (req, res) => amTasktemplatesCtrl.updateAmTasktemplate(req, res));
router.delete(`/api-${sys}/am-tasktemplates/:id`, (req, res) => amTasktemplatesCtrl.deleteAmTasktemplate(req, res));

//</es-section>
module.exports = router;
