/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:23:45 GMT-0400 (Bolivia Time)
 * Time: 0:23:45
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:23:45 GMT-0400 (Bolivia Time)
 * Last time updated: 0:23:45
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const securitygroupsAclRolesCtrl = require("../controllers/securitygroups_acl_roles.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/securitygroups-acl-roles/findOneById/:id`, (req, res) => securitygroupsAclRolesCtrl.findOneById(req, res));

router.get(`/api-${sys}/securitygroups-acl-roles/findOneByDeleted/:deleted`, (req, res) => securitygroupsAclRolesCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/securitygroups-acl-roles/findOneByDateModified/:dateModified`, (req, res) => securitygroupsAclRolesCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/securitygroups-acl-roles/findOneBySecuritygroupId/:securitygroupId`, (req, res) => securitygroupsAclRolesCtrl.findOneBySecuritygroupId(req, res));

router.get(`/api-${sys}/securitygroups-acl-roles/findOneByRoleId/:roleId`, (req, res) => securitygroupsAclRolesCtrl.findOneByRoleId(req, res));



router.post(`/api-${sys}/securitygroups-acl-roles/updateSecuritygroupAclRoleById`, (req, res) => securitygroupsAclRolesCtrl.updateSecuritygroupAclRoleById(req, res));

router.post(`/api-${sys}/securitygroups-acl-roles/updateSecuritygroupAclRoleByDeleted`, (req, res) => securitygroupsAclRolesCtrl.updateSecuritygroupAclRoleByDeleted(req, res));

router.post(`/api-${sys}/securitygroups-acl-roles/updateSecuritygroupAclRoleByDateModified`, (req, res) => securitygroupsAclRolesCtrl.updateSecuritygroupAclRoleByDateModified(req, res));

router.post(`/api-${sys}/securitygroups-acl-roles/updateSecuritygroupAclRoleBySecuritygroupId`, (req, res) => securitygroupsAclRolesCtrl.updateSecuritygroupAclRoleBySecuritygroupId(req, res));

router.post(`/api-${sys}/securitygroups-acl-roles/updateSecuritygroupAclRoleByRoleId`, (req, res) => securitygroupsAclRolesCtrl.updateSecuritygroupAclRoleByRoleId(req, res));





router.get(`/api-${sys}/securitygroups-acl-roles/`, (req, res) => securitygroupsAclRolesCtrl.getAllSecuritygroupsAclRoles(req, res));
router.post(`/api-${sys}/securitygroups-acl-roles/`, (req, res) => securitygroupsAclRolesCtrl.addSecuritygroupAclRole(req, res));
router.get(`/api-${sys}/securitygroups-acl-roles/:id`, (req, res) => securitygroupsAclRolesCtrl.getASecuritygroupAclRole(req, res));
router.put(`/api-${sys}/securitygroups-acl-roles/:id`, (req, res) => securitygroupsAclRolesCtrl.updateSecuritygroupAclRole(req, res));
router.delete(`/api-${sys}/securitygroups-acl-roles/:id`, (req, res) => securitygroupsAclRolesCtrl.deleteSecuritygroupAclRole(req, res));

//</es-section>
module.exports = router;
