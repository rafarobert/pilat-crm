/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:21:53 GMT-0400 (Bolivia Time)
 * Time: 0:21:53
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:21:53 GMT-0400 (Bolivia Time)
 * Last time updated: 0:21:53
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const aclRolesUsersCtrl = require("../controllers/acl_roles_users.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/acl-roles-users/findOneById/:id`, (req, res) => aclRolesUsersCtrl.findOneById(req, res));

router.get(`/api-${sys}/acl-roles-users/findOneByDeleted/:deleted`, (req, res) => aclRolesUsersCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/acl-roles-users/findOneByRoleId/:roleId`, (req, res) => aclRolesUsersCtrl.findOneByRoleId(req, res));

router.get(`/api-${sys}/acl-roles-users/findOneByUserId/:userId`, (req, res) => aclRolesUsersCtrl.findOneByUserId(req, res));

router.get(`/api-${sys}/acl-roles-users/findOneByDateModified/:dateModified`, (req, res) => aclRolesUsersCtrl.findOneByDateModified(req, res));



router.post(`/api-${sys}/acl-roles-users/updateAclRoleUserById`, (req, res) => aclRolesUsersCtrl.updateAclRoleUserById(req, res));

router.post(`/api-${sys}/acl-roles-users/updateAclRoleUserByDeleted`, (req, res) => aclRolesUsersCtrl.updateAclRoleUserByDeleted(req, res));

router.post(`/api-${sys}/acl-roles-users/updateAclRoleUserByRoleId`, (req, res) => aclRolesUsersCtrl.updateAclRoleUserByRoleId(req, res));

router.post(`/api-${sys}/acl-roles-users/updateAclRoleUserByUserId`, (req, res) => aclRolesUsersCtrl.updateAclRoleUserByUserId(req, res));

router.post(`/api-${sys}/acl-roles-users/updateAclRoleUserByDateModified`, (req, res) => aclRolesUsersCtrl.updateAclRoleUserByDateModified(req, res));





router.get(`/api-${sys}/acl-roles-users/`, (req, res) => aclRolesUsersCtrl.getAllAclRolesUsers(req, res));
router.post(`/api-${sys}/acl-roles-users/`, (req, res) => aclRolesUsersCtrl.addAclRoleUser(req, res));
router.get(`/api-${sys}/acl-roles-users/:id`, (req, res) => aclRolesUsersCtrl.getAAclRoleUser(req, res));
router.put(`/api-${sys}/acl-roles-users/:id`, (req, res) => aclRolesUsersCtrl.updateAclRoleUser(req, res));
router.delete(`/api-${sys}/acl-roles-users/:id`, (req, res) => aclRolesUsersCtrl.deleteAclRoleUser(req, res));

//</es-section>
module.exports = router;
