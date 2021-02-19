/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:36:26 GMT-0400 (Bolivia Time)
 * Time: 18:36:26
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:36:26 GMT-0400 (Bolivia Time)
 * Last time updated: 18:36:26
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const aowWorkflowCtrl = require("../controllers/aow_workflow.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/aow-workflow/findOneById/:id`, (req, res) => aowWorkflowCtrl.findOneById(req, res));

router.get(`/api-${sys}/aow-workflow/findOneByDeleted/:deleted`, (req, res) => aowWorkflowCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/aow-workflow/findOneByMultipleRuns/:multipleRuns`, (req, res) => aowWorkflowCtrl.findOneByMultipleRuns(req, res));

router.get(`/api-${sys}/aow-workflow/findOneByName/:name`, (req, res) => aowWorkflowCtrl.findOneByName(req, res));

router.get(`/api-${sys}/aow-workflow/findOneByFlowModule/:flowModule`, (req, res) => aowWorkflowCtrl.findOneByFlowModule(req, res));

router.get(`/api-${sys}/aow-workflow/findOneByFlowRunOn/:flowRunOn`, (req, res) => aowWorkflowCtrl.findOneByFlowRunOn(req, res));

router.get(`/api-${sys}/aow-workflow/findOneByStatus/:status`, (req, res) => aowWorkflowCtrl.findOneByStatus(req, res));

router.get(`/api-${sys}/aow-workflow/findOneByRunWhen/:runWhen`, (req, res) => aowWorkflowCtrl.findOneByRunWhen(req, res));

router.get(`/api-${sys}/aow-workflow/findOneByDescription/:description`, (req, res) => aowWorkflowCtrl.findOneByDescription(req, res));

router.get(`/api-${sys}/aow-workflow/findOneByDateEntered/:dateEntered`, (req, res) => aowWorkflowCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/aow-workflow/findOneByDateModified/:dateModified`, (req, res) => aowWorkflowCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/aow-workflow/findOneByModifiedUserId/:modifiedUserId`, (req, res) => aowWorkflowCtrl.findOneByModifiedUserId(req, res));

router.get(`/api-${sys}/aow-workflow/findOneByCreatedBy/:createdBy`, (req, res) => aowWorkflowCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/aow-workflow/findOneByAssignedUserId/:assignedUserId`, (req, res) => aowWorkflowCtrl.findOneByAssignedUserId(req, res));



router.post(`/api-${sys}/aow-workflow/updateAowWorkflowById`, (req, res) => aowWorkflowCtrl.updateAowWorkflowById(req, res));

router.post(`/api-${sys}/aow-workflow/updateAowWorkflowByDeleted`, (req, res) => aowWorkflowCtrl.updateAowWorkflowByDeleted(req, res));

router.post(`/api-${sys}/aow-workflow/updateAowWorkflowByMultipleRuns`, (req, res) => aowWorkflowCtrl.updateAowWorkflowByMultipleRuns(req, res));

router.post(`/api-${sys}/aow-workflow/updateAowWorkflowByName`, (req, res) => aowWorkflowCtrl.updateAowWorkflowByName(req, res));

router.post(`/api-${sys}/aow-workflow/updateAowWorkflowByFlowModule`, (req, res) => aowWorkflowCtrl.updateAowWorkflowByFlowModule(req, res));

router.post(`/api-${sys}/aow-workflow/updateAowWorkflowByFlowRunOn`, (req, res) => aowWorkflowCtrl.updateAowWorkflowByFlowRunOn(req, res));

router.post(`/api-${sys}/aow-workflow/updateAowWorkflowByStatus`, (req, res) => aowWorkflowCtrl.updateAowWorkflowByStatus(req, res));

router.post(`/api-${sys}/aow-workflow/updateAowWorkflowByRunWhen`, (req, res) => aowWorkflowCtrl.updateAowWorkflowByRunWhen(req, res));

router.post(`/api-${sys}/aow-workflow/updateAowWorkflowByDescription`, (req, res) => aowWorkflowCtrl.updateAowWorkflowByDescription(req, res));

router.post(`/api-${sys}/aow-workflow/updateAowWorkflowByDateEntered`, (req, res) => aowWorkflowCtrl.updateAowWorkflowByDateEntered(req, res));

router.post(`/api-${sys}/aow-workflow/updateAowWorkflowByDateModified`, (req, res) => aowWorkflowCtrl.updateAowWorkflowByDateModified(req, res));

router.post(`/api-${sys}/aow-workflow/updateAowWorkflowByModifiedUserId`, (req, res) => aowWorkflowCtrl.updateAowWorkflowByModifiedUserId(req, res));

router.post(`/api-${sys}/aow-workflow/updateAowWorkflowByCreatedBy`, (req, res) => aowWorkflowCtrl.updateAowWorkflowByCreatedBy(req, res));

router.post(`/api-${sys}/aow-workflow/updateAowWorkflowByAssignedUserId`, (req, res) => aowWorkflowCtrl.updateAowWorkflowByAssignedUserId(req, res));





router.get(`/api-${sys}/aow-workflow/`, (req, res) => aowWorkflowCtrl.getAllAowWorkflow(req, res));
router.post(`/api-${sys}/aow-workflow/`, (req, res) => aowWorkflowCtrl.addAowWorkflow(req, res));
router.get(`/api-${sys}/aow-workflow/:id`, (req, res) => aowWorkflowCtrl.getAAowWorkflow(req, res));
router.put(`/api-${sys}/aow-workflow/:id`, (req, res) => aowWorkflowCtrl.updateAowWorkflow(req, res));
router.delete(`/api-${sys}/aow-workflow/:id`, (req, res) => aowWorkflowCtrl.deleteAowWorkflow(req, res));

//</es-section>
module.exports = router;
