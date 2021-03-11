/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:30 GMT-0400 (Bolivia Time)
 * Time: 14:57:30
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:30 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:30
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const projectsBugsCtrl = require("../controllers/projects_bugs.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/projects-bugs/findOneById/:id`, (req, res) => projectsBugsCtrl.findOneById(req, res));

router.get(`/api-${sys}/projects-bugs/findOneByDeleted/:deleted`, (req, res) => projectsBugsCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/projects-bugs/findOneByBugId/:bugId`, (req, res) => projectsBugsCtrl.findOneByBugId(req, res));

router.get(`/api-${sys}/projects-bugs/findOneByProjectId/:projectId`, (req, res) => projectsBugsCtrl.findOneByProjectId(req, res));

router.get(`/api-${sys}/projects-bugs/findOneByDateModified/:dateModified`, (req, res) => projectsBugsCtrl.findOneByDateModified(req, res));



router.post(`/api-${sys}/projects-bugs/updateProjectBugById`, (req, res) => projectsBugsCtrl.updateProjectBugById(req, res));

router.post(`/api-${sys}/projects-bugs/updateProjectBugByDeleted`, (req, res) => projectsBugsCtrl.updateProjectBugByDeleted(req, res));

router.post(`/api-${sys}/projects-bugs/updateProjectBugByBugId`, (req, res) => projectsBugsCtrl.updateProjectBugByBugId(req, res));

router.post(`/api-${sys}/projects-bugs/updateProjectBugByProjectId`, (req, res) => projectsBugsCtrl.updateProjectBugByProjectId(req, res));

router.post(`/api-${sys}/projects-bugs/updateProjectBugByDateModified`, (req, res) => projectsBugsCtrl.updateProjectBugByDateModified(req, res));





router.get(`/api-${sys}/projects-bugs/`, (req, res) => projectsBugsCtrl.getAllProjectsBugs(req, res));
router.post(`/api-${sys}/projects-bugs/`, (req, res) => projectsBugsCtrl.addProjectBug(req, res));
router.get(`/api-${sys}/projects-bugs/:id`, (req, res) => projectsBugsCtrl.getAProjectBug(req, res));
router.put(`/api-${sys}/projects-bugs/:id`, (req, res) => projectsBugsCtrl.updateProjectBug(req, res));
router.delete(`/api-${sys}/projects-bugs/:id`, (req, res) => projectsBugsCtrl.deleteProjectBug(req, res));

//</es-section>
module.exports = router;
