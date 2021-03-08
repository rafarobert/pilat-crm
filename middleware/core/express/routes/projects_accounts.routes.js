/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:36:47 GMT-0400 (Bolivia Time)
 * Time: 15:36:47
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:36:47 GMT-0400 (Bolivia Time)
 * Last time updated: 15:36:47
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const projectsAccountsCtrl = require("../controllers/projects_accounts.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/projects-accounts/findOneById/:id`, (req, res) => projectsAccountsCtrl.findOneById(req, res));

router.get(`/api-${sys}/projects-accounts/findOneByDeleted/:deleted`, (req, res) => projectsAccountsCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/projects-accounts/findOneByAccountId/:accountId`, (req, res) => projectsAccountsCtrl.findOneByAccountId(req, res));

router.get(`/api-${sys}/projects-accounts/findOneByProjectId/:projectId`, (req, res) => projectsAccountsCtrl.findOneByProjectId(req, res));

router.get(`/api-${sys}/projects-accounts/findOneByDateModified/:dateModified`, (req, res) => projectsAccountsCtrl.findOneByDateModified(req, res));



router.post(`/api-${sys}/projects-accounts/updateProjectAccountById`, (req, res) => projectsAccountsCtrl.updateProjectAccountById(req, res));

router.post(`/api-${sys}/projects-accounts/updateProjectAccountByDeleted`, (req, res) => projectsAccountsCtrl.updateProjectAccountByDeleted(req, res));

router.post(`/api-${sys}/projects-accounts/updateProjectAccountByAccountId`, (req, res) => projectsAccountsCtrl.updateProjectAccountByAccountId(req, res));

router.post(`/api-${sys}/projects-accounts/updateProjectAccountByProjectId`, (req, res) => projectsAccountsCtrl.updateProjectAccountByProjectId(req, res));

router.post(`/api-${sys}/projects-accounts/updateProjectAccountByDateModified`, (req, res) => projectsAccountsCtrl.updateProjectAccountByDateModified(req, res));





router.get(`/api-${sys}/projects-accounts/`, (req, res) => projectsAccountsCtrl.getAllProjectsAccounts(req, res));
router.post(`/api-${sys}/projects-accounts/`, (req, res) => projectsAccountsCtrl.addProjectAccount(req, res));
router.get(`/api-${sys}/projects-accounts/:id`, (req, res) => projectsAccountsCtrl.getAProjectAccount(req, res));
router.put(`/api-${sys}/projects-accounts/:id`, (req, res) => projectsAccountsCtrl.updateProjectAccount(req, res));
router.delete(`/api-${sys}/projects-accounts/:id`, (req, res) => projectsAccountsCtrl.deleteProjectAccount(req, res));

//</es-section>
module.exports = router;
