/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:39 GMT-0400 (Bolivia Time)
 * Time: 14:57:39
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:39 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:39
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const rolesCtrl = require("../controllers/roles.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/roles/findOneById/:id`, (req, res) => rolesCtrl.findOneById(req, res));

router.get(`/api-${sys}/roles/findOneByDeleted/:deleted`, (req, res) => rolesCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/roles/findOneByName/:name`, (req, res) => rolesCtrl.findOneByName(req, res));

router.get(`/api-${sys}/roles/findOneByDescription/:description`, (req, res) => rolesCtrl.findOneByDescription(req, res));

router.get(`/api-${sys}/roles/findOneByModules/:modules`, (req, res) => rolesCtrl.findOneByModules(req, res));

router.get(`/api-${sys}/roles/findOneByDateEntered/:dateEntered`, (req, res) => rolesCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/roles/findOneByDateModified/:dateModified`, (req, res) => rolesCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/roles/findOneByModifiedUserId/:modifiedUserId`, (req, res) => rolesCtrl.findOneByModifiedUserId(req, res));

router.get(`/api-${sys}/roles/findOneByCreatedBy/:createdBy`, (req, res) => rolesCtrl.findOneByCreatedBy(req, res));



router.post(`/api-${sys}/roles/updateRoleById`, (req, res) => rolesCtrl.updateRoleById(req, res));

router.post(`/api-${sys}/roles/updateRoleByDeleted`, (req, res) => rolesCtrl.updateRoleByDeleted(req, res));

router.post(`/api-${sys}/roles/updateRoleByName`, (req, res) => rolesCtrl.updateRoleByName(req, res));

router.post(`/api-${sys}/roles/updateRoleByDescription`, (req, res) => rolesCtrl.updateRoleByDescription(req, res));

router.post(`/api-${sys}/roles/updateRoleByModules`, (req, res) => rolesCtrl.updateRoleByModules(req, res));

router.post(`/api-${sys}/roles/updateRoleByDateEntered`, (req, res) => rolesCtrl.updateRoleByDateEntered(req, res));

router.post(`/api-${sys}/roles/updateRoleByDateModified`, (req, res) => rolesCtrl.updateRoleByDateModified(req, res));

router.post(`/api-${sys}/roles/updateRoleByModifiedUserId`, (req, res) => rolesCtrl.updateRoleByModifiedUserId(req, res));

router.post(`/api-${sys}/roles/updateRoleByCreatedBy`, (req, res) => rolesCtrl.updateRoleByCreatedBy(req, res));





router.get(`/api-${sys}/roles/`, (req, res) => rolesCtrl.getAllRoles(req, res));
router.post(`/api-${sys}/roles/`, (req, res) => rolesCtrl.addRole(req, res));
router.get(`/api-${sys}/roles/:id`, (req, res) => rolesCtrl.getARole(req, res));
router.put(`/api-${sys}/roles/:id`, (req, res) => rolesCtrl.updateRole(req, res));
router.delete(`/api-${sys}/roles/:id`, (req, res) => rolesCtrl.deleteRole(req, res));

//</es-section>
module.exports = router;
