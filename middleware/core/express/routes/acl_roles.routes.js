/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:35:25 GMT-0400 (Bolivia Time)
 * Time: 18:35:25
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:35:25 GMT-0400 (Bolivia Time)
 * Last time updated: 18:35:25
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const aclRolesCtrl = require("../controllers/acl_roles.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/acl-roles/findOneById/:id`, (req, res) => aclRolesCtrl.findOneById(req, res));

router.get(`/api-${sys}/acl-roles/findOneByDeleted/:deleted`, (req, res) => aclRolesCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/acl-roles/findOneByName/:name`, (req, res) => aclRolesCtrl.findOneByName(req, res));

router.get(`/api-${sys}/acl-roles/findOneByDescription/:description`, (req, res) => aclRolesCtrl.findOneByDescription(req, res));

router.get(`/api-${sys}/acl-roles/findOneByDateEntered/:dateEntered`, (req, res) => aclRolesCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/acl-roles/findOneByDateModified/:dateModified`, (req, res) => aclRolesCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/acl-roles/findOneByModifiedUserId/:modifiedUserId`, (req, res) => aclRolesCtrl.findOneByModifiedUserId(req, res));

router.get(`/api-${sys}/acl-roles/findOneByCreatedBy/:createdBy`, (req, res) => aclRolesCtrl.findOneByCreatedBy(req, res));



router.post(`/api-${sys}/acl-roles/updateAclRoleById`, (req, res) => aclRolesCtrl.updateAclRoleById(req, res));

router.post(`/api-${sys}/acl-roles/updateAclRoleByDeleted`, (req, res) => aclRolesCtrl.updateAclRoleByDeleted(req, res));

router.post(`/api-${sys}/acl-roles/updateAclRoleByName`, (req, res) => aclRolesCtrl.updateAclRoleByName(req, res));

router.post(`/api-${sys}/acl-roles/updateAclRoleByDescription`, (req, res) => aclRolesCtrl.updateAclRoleByDescription(req, res));

router.post(`/api-${sys}/acl-roles/updateAclRoleByDateEntered`, (req, res) => aclRolesCtrl.updateAclRoleByDateEntered(req, res));

router.post(`/api-${sys}/acl-roles/updateAclRoleByDateModified`, (req, res) => aclRolesCtrl.updateAclRoleByDateModified(req, res));

router.post(`/api-${sys}/acl-roles/updateAclRoleByModifiedUserId`, (req, res) => aclRolesCtrl.updateAclRoleByModifiedUserId(req, res));

router.post(`/api-${sys}/acl-roles/updateAclRoleByCreatedBy`, (req, res) => aclRolesCtrl.updateAclRoleByCreatedBy(req, res));





router.get(`/api-${sys}/acl-roles/`, (req, res) => aclRolesCtrl.getAllAclRoles(req, res));
router.post(`/api-${sys}/acl-roles/`, (req, res) => aclRolesCtrl.addAclRole(req, res));
router.get(`/api-${sys}/acl-roles/:id`, (req, res) => aclRolesCtrl.getAAclRole(req, res));
router.put(`/api-${sys}/acl-roles/:id`, (req, res) => aclRolesCtrl.updateAclRole(req, res));
router.delete(`/api-${sys}/acl-roles/:id`, (req, res) => aclRolesCtrl.deleteAclRole(req, res));

//</es-section>
module.exports = router;
