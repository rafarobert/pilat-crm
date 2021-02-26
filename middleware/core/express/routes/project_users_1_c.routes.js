/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:23:36 GMT-0400 (Bolivia Time)
 * Time: 0:23:36
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:23:36 GMT-0400 (Bolivia Time)
 * Last time updated: 0:23:36
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const projectUsers1CCtrl = require("../controllers/project_users_1_c.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/project-users-1-c/findOneById/:id`, (req, res) => projectUsers1CCtrl.findOneById(req, res));

router.get(`/api-${sys}/project-users-1-c/findOneByDeleted/:deleted`, (req, res) => projectUsers1CCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/project-users-1-c/findOneByProjectUsers1projectIda/:projectUsers1projectIda`, (req, res) => projectUsers1CCtrl.findOneByProjectUsers1projectIda(req, res));

router.get(`/api-${sys}/project-users-1-c/findOneByProjectUsers1usersIdb/:projectUsers1usersIdb`, (req, res) => projectUsers1CCtrl.findOneByProjectUsers1usersIdb(req, res));

router.get(`/api-${sys}/project-users-1-c/findOneByDateModified/:dateModified`, (req, res) => projectUsers1CCtrl.findOneByDateModified(req, res));



router.post(`/api-${sys}/project-users-1-c/updateProjectUser1CById`, (req, res) => projectUsers1CCtrl.updateProjectUser1CById(req, res));

router.post(`/api-${sys}/project-users-1-c/updateProjectUser1CByDeleted`, (req, res) => projectUsers1CCtrl.updateProjectUser1CByDeleted(req, res));

router.post(`/api-${sys}/project-users-1-c/updateProjectUser1CByProjectUsers1projectIda`, (req, res) => projectUsers1CCtrl.updateProjectUser1CByProjectUsers1projectIda(req, res));

router.post(`/api-${sys}/project-users-1-c/updateProjectUser1CByProjectUsers1usersIdb`, (req, res) => projectUsers1CCtrl.updateProjectUser1CByProjectUsers1usersIdb(req, res));

router.post(`/api-${sys}/project-users-1-c/updateProjectUser1CByDateModified`, (req, res) => projectUsers1CCtrl.updateProjectUser1CByDateModified(req, res));





router.get(`/api-${sys}/project-users-1-c/`, (req, res) => projectUsers1CCtrl.getAllProjectUsers1C(req, res));
router.post(`/api-${sys}/project-users-1-c/`, (req, res) => projectUsers1CCtrl.addProjectUser1C(req, res));
router.get(`/api-${sys}/project-users-1-c/:id`, (req, res) => projectUsers1CCtrl.getAProjectUser1C(req, res));
router.put(`/api-${sys}/project-users-1-c/:id`, (req, res) => projectUsers1CCtrl.updateProjectUser1C(req, res));
router.delete(`/api-${sys}/project-users-1-c/:id`, (req, res) => projectUsers1CCtrl.deleteProjectUser1C(req, res));

//</es-section>
module.exports = router;
