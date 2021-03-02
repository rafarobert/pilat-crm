/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:36 GMT-0400 (Bolivia Time)
 * Time: 14:0:36
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:36 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:36
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const casesBugsCtrl = require("../controllers/cases_bugs.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/cases-bugs/findOneById/:id`, (req, res) => casesBugsCtrl.findOneById(req, res));

router.get(`/api-${sys}/cases-bugs/findOneByDeleted/:deleted`, (req, res) => casesBugsCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/cases-bugs/findOneByCaseId/:caseId`, (req, res) => casesBugsCtrl.findOneByCaseId(req, res));

router.get(`/api-${sys}/cases-bugs/findOneByBugId/:bugId`, (req, res) => casesBugsCtrl.findOneByBugId(req, res));

router.get(`/api-${sys}/cases-bugs/findOneByDateModified/:dateModified`, (req, res) => casesBugsCtrl.findOneByDateModified(req, res));



router.post(`/api-${sys}/cases-bugs/updateCaseBugById`, (req, res) => casesBugsCtrl.updateCaseBugById(req, res));

router.post(`/api-${sys}/cases-bugs/updateCaseBugByDeleted`, (req, res) => casesBugsCtrl.updateCaseBugByDeleted(req, res));

router.post(`/api-${sys}/cases-bugs/updateCaseBugByCaseId`, (req, res) => casesBugsCtrl.updateCaseBugByCaseId(req, res));

router.post(`/api-${sys}/cases-bugs/updateCaseBugByBugId`, (req, res) => casesBugsCtrl.updateCaseBugByBugId(req, res));

router.post(`/api-${sys}/cases-bugs/updateCaseBugByDateModified`, (req, res) => casesBugsCtrl.updateCaseBugByDateModified(req, res));





router.get(`/api-${sys}/cases-bugs/`, (req, res) => casesBugsCtrl.getAllCasesBugs(req, res));
router.post(`/api-${sys}/cases-bugs/`, (req, res) => casesBugsCtrl.addCaseBug(req, res));
router.get(`/api-${sys}/cases-bugs/:id`, (req, res) => casesBugsCtrl.getACaseBug(req, res));
router.put(`/api-${sys}/cases-bugs/:id`, (req, res) => casesBugsCtrl.updateCaseBug(req, res));
router.delete(`/api-${sys}/cases-bugs/:id`, (req, res) => casesBugsCtrl.deleteCaseBug(req, res));

//</es-section>
module.exports = router;
