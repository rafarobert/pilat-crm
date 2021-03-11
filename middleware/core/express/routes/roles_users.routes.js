/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:40 GMT-0400 (Bolivia Time)
 * Time: 14:57:40
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:40 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:40
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const rolesUsersCtrl = require("../controllers/roles_users.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/roles-users/findOneById/:id`, (req, res) => rolesUsersCtrl.findOneById(req, res));

router.get(`/api-${sys}/roles-users/findOneByDeleted/:deleted`, (req, res) => rolesUsersCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/roles-users/findOneByRoleId/:roleId`, (req, res) => rolesUsersCtrl.findOneByRoleId(req, res));

router.get(`/api-${sys}/roles-users/findOneByUserId/:userId`, (req, res) => rolesUsersCtrl.findOneByUserId(req, res));

router.get(`/api-${sys}/roles-users/findOneByDateModified/:dateModified`, (req, res) => rolesUsersCtrl.findOneByDateModified(req, res));



router.post(`/api-${sys}/roles-users/updateRoleUserById`, (req, res) => rolesUsersCtrl.updateRoleUserById(req, res));

router.post(`/api-${sys}/roles-users/updateRoleUserByDeleted`, (req, res) => rolesUsersCtrl.updateRoleUserByDeleted(req, res));

router.post(`/api-${sys}/roles-users/updateRoleUserByRoleId`, (req, res) => rolesUsersCtrl.updateRoleUserByRoleId(req, res));

router.post(`/api-${sys}/roles-users/updateRoleUserByUserId`, (req, res) => rolesUsersCtrl.updateRoleUserByUserId(req, res));

router.post(`/api-${sys}/roles-users/updateRoleUserByDateModified`, (req, res) => rolesUsersCtrl.updateRoleUserByDateModified(req, res));





router.get(`/api-${sys}/roles-users/`, (req, res) => rolesUsersCtrl.getAllRolesUsers(req, res));
router.post(`/api-${sys}/roles-users/`, (req, res) => rolesUsersCtrl.addRoleUser(req, res));
router.get(`/api-${sys}/roles-users/:id`, (req, res) => rolesUsersCtrl.getARoleUser(req, res));
router.put(`/api-${sys}/roles-users/:id`, (req, res) => rolesUsersCtrl.updateRoleUser(req, res));
router.delete(`/api-${sys}/roles-users/:id`, (req, res) => rolesUsersCtrl.deleteRoleUser(req, res));

//</es-section>
module.exports = router;
