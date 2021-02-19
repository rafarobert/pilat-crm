/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:36:27 GMT-0400 (Bolivia Time)
 * Time: 18:36:27
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:36:27 GMT-0400 (Bolivia Time)
 * Last time updated: 18:36:27
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const aowWorkflowAuditCtrl = require("../controllers/aow_workflow_audit.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/aow-workflow-audit/findOneById/:id`, (req, res) => aowWorkflowAuditCtrl.findOneById(req, res));

router.get(`/api-${sys}/aow-workflow-audit/findOneByCreatedBy/:createdBy`, (req, res) => aowWorkflowAuditCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/aow-workflow-audit/findOneByFieldName/:fieldName`, (req, res) => aowWorkflowAuditCtrl.findOneByFieldName(req, res));

router.get(`/api-${sys}/aow-workflow-audit/findOneByDataType/:dataType`, (req, res) => aowWorkflowAuditCtrl.findOneByDataType(req, res));

router.get(`/api-${sys}/aow-workflow-audit/findOneByBeforeValueString/:beforeValueString`, (req, res) => aowWorkflowAuditCtrl.findOneByBeforeValueString(req, res));

router.get(`/api-${sys}/aow-workflow-audit/findOneByAfterValueString/:afterValueString`, (req, res) => aowWorkflowAuditCtrl.findOneByAfterValueString(req, res));

router.get(`/api-${sys}/aow-workflow-audit/findOneByBeforeValueText/:beforeValueText`, (req, res) => aowWorkflowAuditCtrl.findOneByBeforeValueText(req, res));

router.get(`/api-${sys}/aow-workflow-audit/findOneByAfterValueText/:afterValueText`, (req, res) => aowWorkflowAuditCtrl.findOneByAfterValueText(req, res));

router.get(`/api-${sys}/aow-workflow-audit/findOneByDateCreated/:dateCreated`, (req, res) => aowWorkflowAuditCtrl.findOneByDateCreated(req, res));

router.get(`/api-${sys}/aow-workflow-audit/findOneByParentId/:parentId`, (req, res) => aowWorkflowAuditCtrl.findOneByParentId(req, res));



router.post(`/api-${sys}/aow-workflow-audit/updateAowWorkflowAuditById`, (req, res) => aowWorkflowAuditCtrl.updateAowWorkflowAuditById(req, res));

router.post(`/api-${sys}/aow-workflow-audit/updateAowWorkflowAuditByCreatedBy`, (req, res) => aowWorkflowAuditCtrl.updateAowWorkflowAuditByCreatedBy(req, res));

router.post(`/api-${sys}/aow-workflow-audit/updateAowWorkflowAuditByFieldName`, (req, res) => aowWorkflowAuditCtrl.updateAowWorkflowAuditByFieldName(req, res));

router.post(`/api-${sys}/aow-workflow-audit/updateAowWorkflowAuditByDataType`, (req, res) => aowWorkflowAuditCtrl.updateAowWorkflowAuditByDataType(req, res));

router.post(`/api-${sys}/aow-workflow-audit/updateAowWorkflowAuditByBeforeValueString`, (req, res) => aowWorkflowAuditCtrl.updateAowWorkflowAuditByBeforeValueString(req, res));

router.post(`/api-${sys}/aow-workflow-audit/updateAowWorkflowAuditByAfterValueString`, (req, res) => aowWorkflowAuditCtrl.updateAowWorkflowAuditByAfterValueString(req, res));

router.post(`/api-${sys}/aow-workflow-audit/updateAowWorkflowAuditByBeforeValueText`, (req, res) => aowWorkflowAuditCtrl.updateAowWorkflowAuditByBeforeValueText(req, res));

router.post(`/api-${sys}/aow-workflow-audit/updateAowWorkflowAuditByAfterValueText`, (req, res) => aowWorkflowAuditCtrl.updateAowWorkflowAuditByAfterValueText(req, res));

router.post(`/api-${sys}/aow-workflow-audit/updateAowWorkflowAuditByDateCreated`, (req, res) => aowWorkflowAuditCtrl.updateAowWorkflowAuditByDateCreated(req, res));

router.post(`/api-${sys}/aow-workflow-audit/updateAowWorkflowAuditByParentId`, (req, res) => aowWorkflowAuditCtrl.updateAowWorkflowAuditByParentId(req, res));





router.get(`/api-${sys}/aow-workflow-audit/`, (req, res) => aowWorkflowAuditCtrl.getAllAowWorkflowAudit(req, res));
router.post(`/api-${sys}/aow-workflow-audit/`, (req, res) => aowWorkflowAuditCtrl.addAowWorkflowAudit(req, res));
router.get(`/api-${sys}/aow-workflow-audit/:id`, (req, res) => aowWorkflowAuditCtrl.getAAowWorkflowAudit(req, res));
router.put(`/api-${sys}/aow-workflow-audit/:id`, (req, res) => aowWorkflowAuditCtrl.updateAowWorkflowAudit(req, res));
router.delete(`/api-${sys}/aow-workflow-audit/:id`, (req, res) => aowWorkflowAuditCtrl.deleteAowWorkflowAudit(req, res));

//</es-section>
module.exports = router;
