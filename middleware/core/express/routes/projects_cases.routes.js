/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:38:18 GMT-0400 (Bolivia Time)
 * Time: 18:38:18
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:38:18 GMT-0400 (Bolivia Time)
 * Last time updated: 18:38:18
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const projectsCasesCtrl = require("../controllers/projects_cases.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/projects-cases/findOneById/:id`, (req, res) => projectsCasesCtrl.findOneById(req, res));

router.get(`/api-${sys}/projects-cases/findOneByDeleted/:deleted`, (req, res) => projectsCasesCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/projects-cases/findOneByCaseId/:caseId`, (req, res) => projectsCasesCtrl.findOneByCaseId(req, res));

router.get(`/api-${sys}/projects-cases/findOneByProjectId/:projectId`, (req, res) => projectsCasesCtrl.findOneByProjectId(req, res));

router.get(`/api-${sys}/projects-cases/findOneByDateModified/:dateModified`, (req, res) => projectsCasesCtrl.findOneByDateModified(req, res));



router.post(`/api-${sys}/projects-cases/updateProjectCaseById`, (req, res) => projectsCasesCtrl.updateProjectCaseById(req, res));

router.post(`/api-${sys}/projects-cases/updateProjectCaseByDeleted`, (req, res) => projectsCasesCtrl.updateProjectCaseByDeleted(req, res));

router.post(`/api-${sys}/projects-cases/updateProjectCaseByCaseId`, (req, res) => projectsCasesCtrl.updateProjectCaseByCaseId(req, res));

router.post(`/api-${sys}/projects-cases/updateProjectCaseByProjectId`, (req, res) => projectsCasesCtrl.updateProjectCaseByProjectId(req, res));

router.post(`/api-${sys}/projects-cases/updateProjectCaseByDateModified`, (req, res) => projectsCasesCtrl.updateProjectCaseByDateModified(req, res));





router.get(`/api-${sys}/projects-cases/`, (req, res) => projectsCasesCtrl.getAllProjectsCases(req, res));
router.post(`/api-${sys}/projects-cases/`, (req, res) => projectsCasesCtrl.addProjectCase(req, res));
router.get(`/api-${sys}/projects-cases/:id`, (req, res) => projectsCasesCtrl.getAProjectCase(req, res));
router.put(`/api-${sys}/projects-cases/:id`, (req, res) => projectsCasesCtrl.updateProjectCase(req, res));
router.delete(`/api-${sys}/projects-cases/:id`, (req, res) => projectsCasesCtrl.deleteProjectCase(req, res));

//</es-section>
module.exports = router;
