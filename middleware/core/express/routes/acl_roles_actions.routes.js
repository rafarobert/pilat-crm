/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:35:26 GMT-0400 (Bolivia Time)
 * Time: 18:35:26
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:35:26 GMT-0400 (Bolivia Time)
 * Last time updated: 18:35:26
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const aclRolesActionsCtrl = require("../controllers/acl_roles_actions.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/acl-roles-actions/findOneById/:id`, (req, res) => aclRolesActionsCtrl.findOneById(req, res));

router.get(`/api-${sys}/acl-roles-actions/findOneByDeleted/:deleted`, (req, res) => aclRolesActionsCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/acl-roles-actions/findOneByAccessOverride/:accessOverride`, (req, res) => aclRolesActionsCtrl.findOneByAccessOverride(req, res));

router.get(`/api-${sys}/acl-roles-actions/findOneByRoleId/:roleId`, (req, res) => aclRolesActionsCtrl.findOneByRoleId(req, res));

router.get(`/api-${sys}/acl-roles-actions/findOneByActionId/:actionId`, (req, res) => aclRolesActionsCtrl.findOneByActionId(req, res));

router.get(`/api-${sys}/acl-roles-actions/findOneByDateModified/:dateModified`, (req, res) => aclRolesActionsCtrl.findOneByDateModified(req, res));



router.post(`/api-${sys}/acl-roles-actions/updateAclRoleActionById`, (req, res) => aclRolesActionsCtrl.updateAclRoleActionById(req, res));

router.post(`/api-${sys}/acl-roles-actions/updateAclRoleActionByDeleted`, (req, res) => aclRolesActionsCtrl.updateAclRoleActionByDeleted(req, res));

router.post(`/api-${sys}/acl-roles-actions/updateAclRoleActionByAccessOverride`, (req, res) => aclRolesActionsCtrl.updateAclRoleActionByAccessOverride(req, res));

router.post(`/api-${sys}/acl-roles-actions/updateAclRoleActionByRoleId`, (req, res) => aclRolesActionsCtrl.updateAclRoleActionByRoleId(req, res));

router.post(`/api-${sys}/acl-roles-actions/updateAclRoleActionByActionId`, (req, res) => aclRolesActionsCtrl.updateAclRoleActionByActionId(req, res));

router.post(`/api-${sys}/acl-roles-actions/updateAclRoleActionByDateModified`, (req, res) => aclRolesActionsCtrl.updateAclRoleActionByDateModified(req, res));





router.get(`/api-${sys}/acl-roles-actions/`, (req, res) => aclRolesActionsCtrl.getAllAclRolesActions(req, res));
router.post(`/api-${sys}/acl-roles-actions/`, (req, res) => aclRolesActionsCtrl.addAclRoleAction(req, res));
router.get(`/api-${sys}/acl-roles-actions/:id`, (req, res) => aclRolesActionsCtrl.getAAclRoleAction(req, res));
router.put(`/api-${sys}/acl-roles-actions/:id`, (req, res) => aclRolesActionsCtrl.updateAclRoleAction(req, res));
router.delete(`/api-${sys}/acl-roles-actions/:id`, (req, res) => aclRolesActionsCtrl.deleteAclRoleAction(req, res));

//</es-section>
module.exports = router;
