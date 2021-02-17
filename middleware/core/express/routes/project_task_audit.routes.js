/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:43:55 GMT-0400 (Bolivia Time)
 * Time: 4:43:55
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:43:55 GMT-0400 (Bolivia Time)
 * Last time updated: 4:43:55
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const projectTaskAuditCtrl = require("../controllers/project_task_audit.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/project-task-audit/findOneById/:id`, (req, res) => projectTaskAuditCtrl.findOneById(req, res));

router.get(`/api-${sys}/project-task-audit/findOneByCreatedBy/:createdBy`, (req, res) => projectTaskAuditCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/project-task-audit/findOneByFieldName/:fieldName`, (req, res) => projectTaskAuditCtrl.findOneByFieldName(req, res));

router.get(`/api-${sys}/project-task-audit/findOneByDataType/:dataType`, (req, res) => projectTaskAuditCtrl.findOneByDataType(req, res));

router.get(`/api-${sys}/project-task-audit/findOneByBeforeValueString/:beforeValueString`, (req, res) => projectTaskAuditCtrl.findOneByBeforeValueString(req, res));

router.get(`/api-${sys}/project-task-audit/findOneByAfterValueString/:afterValueString`, (req, res) => projectTaskAuditCtrl.findOneByAfterValueString(req, res));

router.get(`/api-${sys}/project-task-audit/findOneByBeforeValueText/:beforeValueText`, (req, res) => projectTaskAuditCtrl.findOneByBeforeValueText(req, res));

router.get(`/api-${sys}/project-task-audit/findOneByAfterValueText/:afterValueText`, (req, res) => projectTaskAuditCtrl.findOneByAfterValueText(req, res));

router.get(`/api-${sys}/project-task-audit/findOneByDateCreated/:dateCreated`, (req, res) => projectTaskAuditCtrl.findOneByDateCreated(req, res));

router.get(`/api-${sys}/project-task-audit/findOneByParentId/:parentId`, (req, res) => projectTaskAuditCtrl.findOneByParentId(req, res));



router.post(`/api-${sys}/project-task-audit/updateProjectTaskAuditById`, (req, res) => projectTaskAuditCtrl.updateProjectTaskAuditById(req, res));

router.post(`/api-${sys}/project-task-audit/updateProjectTaskAuditByCreatedBy`, (req, res) => projectTaskAuditCtrl.updateProjectTaskAuditByCreatedBy(req, res));

router.post(`/api-${sys}/project-task-audit/updateProjectTaskAuditByFieldName`, (req, res) => projectTaskAuditCtrl.updateProjectTaskAuditByFieldName(req, res));

router.post(`/api-${sys}/project-task-audit/updateProjectTaskAuditByDataType`, (req, res) => projectTaskAuditCtrl.updateProjectTaskAuditByDataType(req, res));

router.post(`/api-${sys}/project-task-audit/updateProjectTaskAuditByBeforeValueString`, (req, res) => projectTaskAuditCtrl.updateProjectTaskAuditByBeforeValueString(req, res));

router.post(`/api-${sys}/project-task-audit/updateProjectTaskAuditByAfterValueString`, (req, res) => projectTaskAuditCtrl.updateProjectTaskAuditByAfterValueString(req, res));

router.post(`/api-${sys}/project-task-audit/updateProjectTaskAuditByBeforeValueText`, (req, res) => projectTaskAuditCtrl.updateProjectTaskAuditByBeforeValueText(req, res));

router.post(`/api-${sys}/project-task-audit/updateProjectTaskAuditByAfterValueText`, (req, res) => projectTaskAuditCtrl.updateProjectTaskAuditByAfterValueText(req, res));

router.post(`/api-${sys}/project-task-audit/updateProjectTaskAuditByDateCreated`, (req, res) => projectTaskAuditCtrl.updateProjectTaskAuditByDateCreated(req, res));

router.post(`/api-${sys}/project-task-audit/updateProjectTaskAuditByParentId`, (req, res) => projectTaskAuditCtrl.updateProjectTaskAuditByParentId(req, res));





router.get(`/api-${sys}/project-task-audit/`, (req, res) => projectTaskAuditCtrl.getAllProjectTaskAudit(req, res));
router.post(`/api-${sys}/project-task-audit/`, (req, res) => projectTaskAuditCtrl.addProjectTaskAudit(req, res));
router.get(`/api-${sys}/project-task-audit/:id`, (req, res) => projectTaskAuditCtrl.getAProjectTaskAudit(req, res));
router.put(`/api-${sys}/project-task-audit/:id`, (req, res) => projectTaskAuditCtrl.updateProjectTaskAudit(req, res));
router.delete(`/api-${sys}/project-task-audit/:id`, (req, res) => projectTaskAuditCtrl.deleteProjectTaskAudit(req, res));

//</es-section>
module.exports = router;
