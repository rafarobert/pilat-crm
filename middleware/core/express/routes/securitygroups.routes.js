/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:38:40 GMT-0400 (Bolivia Time)
 * Time: 18:38:40
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:38:40 GMT-0400 (Bolivia Time)
 * Last time updated: 18:38:40
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const securitygroupsCtrl = require("../controllers/securitygroups.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/securitygroups/findOneById/:id`, (req, res) => securitygroupsCtrl.findOneById(req, res));

router.get(`/api-${sys}/securitygroups/findOneByDeleted/:deleted`, (req, res) => securitygroupsCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/securitygroups/findOneByNoninheritable/:noninheritable`, (req, res) => securitygroupsCtrl.findOneByNoninheritable(req, res));

router.get(`/api-${sys}/securitygroups/findOneByName/:name`, (req, res) => securitygroupsCtrl.findOneByName(req, res));

router.get(`/api-${sys}/securitygroups/findOneByDescription/:description`, (req, res) => securitygroupsCtrl.findOneByDescription(req, res));

router.get(`/api-${sys}/securitygroups/findOneByDateEntered/:dateEntered`, (req, res) => securitygroupsCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/securitygroups/findOneByDateModified/:dateModified`, (req, res) => securitygroupsCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/securitygroups/findOneByModifiedUserId/:modifiedUserId`, (req, res) => securitygroupsCtrl.findOneByModifiedUserId(req, res));

router.get(`/api-${sys}/securitygroups/findOneByCreatedBy/:createdBy`, (req, res) => securitygroupsCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/securitygroups/findOneByAssignedUserId/:assignedUserId`, (req, res) => securitygroupsCtrl.findOneByAssignedUserId(req, res));



router.post(`/api-${sys}/securitygroups/updateSecuritygroupById`, (req, res) => securitygroupsCtrl.updateSecuritygroupById(req, res));

router.post(`/api-${sys}/securitygroups/updateSecuritygroupByDeleted`, (req, res) => securitygroupsCtrl.updateSecuritygroupByDeleted(req, res));

router.post(`/api-${sys}/securitygroups/updateSecuritygroupByNoninheritable`, (req, res) => securitygroupsCtrl.updateSecuritygroupByNoninheritable(req, res));

router.post(`/api-${sys}/securitygroups/updateSecuritygroupByName`, (req, res) => securitygroupsCtrl.updateSecuritygroupByName(req, res));

router.post(`/api-${sys}/securitygroups/updateSecuritygroupByDescription`, (req, res) => securitygroupsCtrl.updateSecuritygroupByDescription(req, res));

router.post(`/api-${sys}/securitygroups/updateSecuritygroupByDateEntered`, (req, res) => securitygroupsCtrl.updateSecuritygroupByDateEntered(req, res));

router.post(`/api-${sys}/securitygroups/updateSecuritygroupByDateModified`, (req, res) => securitygroupsCtrl.updateSecuritygroupByDateModified(req, res));

router.post(`/api-${sys}/securitygroups/updateSecuritygroupByModifiedUserId`, (req, res) => securitygroupsCtrl.updateSecuritygroupByModifiedUserId(req, res));

router.post(`/api-${sys}/securitygroups/updateSecuritygroupByCreatedBy`, (req, res) => securitygroupsCtrl.updateSecuritygroupByCreatedBy(req, res));

router.post(`/api-${sys}/securitygroups/updateSecuritygroupByAssignedUserId`, (req, res) => securitygroupsCtrl.updateSecuritygroupByAssignedUserId(req, res));





router.get(`/api-${sys}/securitygroups/`, (req, res) => securitygroupsCtrl.getAllSecuritygroups(req, res));
router.post(`/api-${sys}/securitygroups/`, (req, res) => securitygroupsCtrl.addSecuritygroup(req, res));
router.get(`/api-${sys}/securitygroups/:id`, (req, res) => securitygroupsCtrl.getASecuritygroup(req, res));
router.put(`/api-${sys}/securitygroups/:id`, (req, res) => securitygroupsCtrl.updateSecuritygroup(req, res));
router.delete(`/api-${sys}/securitygroups/:id`, (req, res) => securitygroupsCtrl.deleteSecuritygroup(req, res));

//</es-section>
module.exports = router;
