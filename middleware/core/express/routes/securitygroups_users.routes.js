/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:44 GMT-0400 (Bolivia Time)
 * Time: 14:57:44
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:44 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:44
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const securitygroupsUsersCtrl = require("../controllers/securitygroups_users.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/securitygroups-users/findOneById/:id`, (req, res) => securitygroupsUsersCtrl.findOneById(req, res));

router.get(`/api-${sys}/securitygroups-users/findOneByDeleted/:deleted`, (req, res) => securitygroupsUsersCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/securitygroups-users/findOneByPrimaryGroup/:primaryGroup`, (req, res) => securitygroupsUsersCtrl.findOneByPrimaryGroup(req, res));

router.get(`/api-${sys}/securitygroups-users/findOneByNoninheritable/:noninheritable`, (req, res) => securitygroupsUsersCtrl.findOneByNoninheritable(req, res));

router.get(`/api-${sys}/securitygroups-users/findOneBySecuritygroupId/:securitygroupId`, (req, res) => securitygroupsUsersCtrl.findOneBySecuritygroupId(req, res));

router.get(`/api-${sys}/securitygroups-users/findOneByUserId/:userId`, (req, res) => securitygroupsUsersCtrl.findOneByUserId(req, res));

router.get(`/api-${sys}/securitygroups-users/findOneByDateModified/:dateModified`, (req, res) => securitygroupsUsersCtrl.findOneByDateModified(req, res));



router.post(`/api-${sys}/securitygroups-users/updateSecuritygroupUserById`, (req, res) => securitygroupsUsersCtrl.updateSecuritygroupUserById(req, res));

router.post(`/api-${sys}/securitygroups-users/updateSecuritygroupUserByDeleted`, (req, res) => securitygroupsUsersCtrl.updateSecuritygroupUserByDeleted(req, res));

router.post(`/api-${sys}/securitygroups-users/updateSecuritygroupUserByPrimaryGroup`, (req, res) => securitygroupsUsersCtrl.updateSecuritygroupUserByPrimaryGroup(req, res));

router.post(`/api-${sys}/securitygroups-users/updateSecuritygroupUserByNoninheritable`, (req, res) => securitygroupsUsersCtrl.updateSecuritygroupUserByNoninheritable(req, res));

router.post(`/api-${sys}/securitygroups-users/updateSecuritygroupUserBySecuritygroupId`, (req, res) => securitygroupsUsersCtrl.updateSecuritygroupUserBySecuritygroupId(req, res));

router.post(`/api-${sys}/securitygroups-users/updateSecuritygroupUserByUserId`, (req, res) => securitygroupsUsersCtrl.updateSecuritygroupUserByUserId(req, res));

router.post(`/api-${sys}/securitygroups-users/updateSecuritygroupUserByDateModified`, (req, res) => securitygroupsUsersCtrl.updateSecuritygroupUserByDateModified(req, res));





router.get(`/api-${sys}/securitygroups-users/`, (req, res) => securitygroupsUsersCtrl.getAllSecuritygroupsUsers(req, res));
router.post(`/api-${sys}/securitygroups-users/`, (req, res) => securitygroupsUsersCtrl.addSecuritygroupUser(req, res));
router.get(`/api-${sys}/securitygroups-users/:id`, (req, res) => securitygroupsUsersCtrl.getASecuritygroupUser(req, res));
router.put(`/api-${sys}/securitygroups-users/:id`, (req, res) => securitygroupsUsersCtrl.updateSecuritygroupUser(req, res));
router.delete(`/api-${sys}/securitygroups-users/:id`, (req, res) => securitygroupsUsersCtrl.deleteSecuritygroupUser(req, res));

//</es-section>
module.exports = router;
