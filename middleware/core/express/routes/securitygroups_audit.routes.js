/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:43 GMT-0400 (Bolivia Time)
 * Time: 14:57:43
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:43 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:43
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const securitygroupsAuditCtrl = require("../controllers/securitygroups_audit.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/securitygroups-audit/findOneById/:id`, (req, res) => securitygroupsAuditCtrl.findOneById(req, res));

router.get(`/api-${sys}/securitygroups-audit/findOneByCreatedBy/:createdBy`, (req, res) => securitygroupsAuditCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/securitygroups-audit/findOneByFieldName/:fieldName`, (req, res) => securitygroupsAuditCtrl.findOneByFieldName(req, res));

router.get(`/api-${sys}/securitygroups-audit/findOneByDataType/:dataType`, (req, res) => securitygroupsAuditCtrl.findOneByDataType(req, res));

router.get(`/api-${sys}/securitygroups-audit/findOneByBeforeValueString/:beforeValueString`, (req, res) => securitygroupsAuditCtrl.findOneByBeforeValueString(req, res));

router.get(`/api-${sys}/securitygroups-audit/findOneByAfterValueString/:afterValueString`, (req, res) => securitygroupsAuditCtrl.findOneByAfterValueString(req, res));

router.get(`/api-${sys}/securitygroups-audit/findOneByBeforeValueText/:beforeValueText`, (req, res) => securitygroupsAuditCtrl.findOneByBeforeValueText(req, res));

router.get(`/api-${sys}/securitygroups-audit/findOneByAfterValueText/:afterValueText`, (req, res) => securitygroupsAuditCtrl.findOneByAfterValueText(req, res));

router.get(`/api-${sys}/securitygroups-audit/findOneByDateCreated/:dateCreated`, (req, res) => securitygroupsAuditCtrl.findOneByDateCreated(req, res));

router.get(`/api-${sys}/securitygroups-audit/findOneByParentId/:parentId`, (req, res) => securitygroupsAuditCtrl.findOneByParentId(req, res));



router.post(`/api-${sys}/securitygroups-audit/updateSecuritygroupAuditById`, (req, res) => securitygroupsAuditCtrl.updateSecuritygroupAuditById(req, res));

router.post(`/api-${sys}/securitygroups-audit/updateSecuritygroupAuditByCreatedBy`, (req, res) => securitygroupsAuditCtrl.updateSecuritygroupAuditByCreatedBy(req, res));

router.post(`/api-${sys}/securitygroups-audit/updateSecuritygroupAuditByFieldName`, (req, res) => securitygroupsAuditCtrl.updateSecuritygroupAuditByFieldName(req, res));

router.post(`/api-${sys}/securitygroups-audit/updateSecuritygroupAuditByDataType`, (req, res) => securitygroupsAuditCtrl.updateSecuritygroupAuditByDataType(req, res));

router.post(`/api-${sys}/securitygroups-audit/updateSecuritygroupAuditByBeforeValueString`, (req, res) => securitygroupsAuditCtrl.updateSecuritygroupAuditByBeforeValueString(req, res));

router.post(`/api-${sys}/securitygroups-audit/updateSecuritygroupAuditByAfterValueString`, (req, res) => securitygroupsAuditCtrl.updateSecuritygroupAuditByAfterValueString(req, res));

router.post(`/api-${sys}/securitygroups-audit/updateSecuritygroupAuditByBeforeValueText`, (req, res) => securitygroupsAuditCtrl.updateSecuritygroupAuditByBeforeValueText(req, res));

router.post(`/api-${sys}/securitygroups-audit/updateSecuritygroupAuditByAfterValueText`, (req, res) => securitygroupsAuditCtrl.updateSecuritygroupAuditByAfterValueText(req, res));

router.post(`/api-${sys}/securitygroups-audit/updateSecuritygroupAuditByDateCreated`, (req, res) => securitygroupsAuditCtrl.updateSecuritygroupAuditByDateCreated(req, res));

router.post(`/api-${sys}/securitygroups-audit/updateSecuritygroupAuditByParentId`, (req, res) => securitygroupsAuditCtrl.updateSecuritygroupAuditByParentId(req, res));





router.get(`/api-${sys}/securitygroups-audit/`, (req, res) => securitygroupsAuditCtrl.getAllSecuritygroupsAudit(req, res));
router.post(`/api-${sys}/securitygroups-audit/`, (req, res) => securitygroupsAuditCtrl.addSecuritygroupAudit(req, res));
router.get(`/api-${sys}/securitygroups-audit/:id`, (req, res) => securitygroupsAuditCtrl.getASecuritygroupAudit(req, res));
router.put(`/api-${sys}/securitygroups-audit/:id`, (req, res) => securitygroupsAuditCtrl.updateSecuritygroupAudit(req, res));
router.delete(`/api-${sys}/securitygroups-audit/:id`, (req, res) => securitygroupsAuditCtrl.deleteSecuritygroupAudit(req, res));

//</es-section>
module.exports = router;
