/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:29 GMT-0400 (Bolivia Time)
 * Time: 14:0:29
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:29 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:29
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const bugsCtrl = require("../controllers/bugs.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/bugs/findOneById/:id`, (req, res) => bugsCtrl.findOneById(req, res));

router.get(`/api-${sys}/bugs/findOneByDeleted/:deleted`, (req, res) => bugsCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/bugs/findOneByBugNumber/:bugNumber`, (req, res) => bugsCtrl.findOneByBugNumber(req, res));

router.get(`/api-${sys}/bugs/findOneByName/:name`, (req, res) => bugsCtrl.findOneByName(req, res));

router.get(`/api-${sys}/bugs/findOneByType/:type`, (req, res) => bugsCtrl.findOneByType(req, res));

router.get(`/api-${sys}/bugs/findOneByStatus/:status`, (req, res) => bugsCtrl.findOneByStatus(req, res));

router.get(`/api-${sys}/bugs/findOneByPriority/:priority`, (req, res) => bugsCtrl.findOneByPriority(req, res));

router.get(`/api-${sys}/bugs/findOneByResolution/:resolution`, (req, res) => bugsCtrl.findOneByResolution(req, res));

router.get(`/api-${sys}/bugs/findOneByFoundInRelease/:foundInRelease`, (req, res) => bugsCtrl.findOneByFoundInRelease(req, res));

router.get(`/api-${sys}/bugs/findOneByFixedInRelease/:fixedInRelease`, (req, res) => bugsCtrl.findOneByFixedInRelease(req, res));

router.get(`/api-${sys}/bugs/findOneBySource/:source`, (req, res) => bugsCtrl.findOneBySource(req, res));

router.get(`/api-${sys}/bugs/findOneByProductCategory/:productCategory`, (req, res) => bugsCtrl.findOneByProductCategory(req, res));

router.get(`/api-${sys}/bugs/findOneByDescription/:description`, (req, res) => bugsCtrl.findOneByDescription(req, res));

router.get(`/api-${sys}/bugs/findOneByWorkLog/:workLog`, (req, res) => bugsCtrl.findOneByWorkLog(req, res));

router.get(`/api-${sys}/bugs/findOneByDateEntered/:dateEntered`, (req, res) => bugsCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/bugs/findOneByDateModified/:dateModified`, (req, res) => bugsCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/bugs/findOneByModifiedUserId/:modifiedUserId`, (req, res) => bugsCtrl.findOneByModifiedUserId(req, res));

router.get(`/api-${sys}/bugs/findOneByCreatedBy/:createdBy`, (req, res) => bugsCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/bugs/findOneByAssignedUserId/:assignedUserId`, (req, res) => bugsCtrl.findOneByAssignedUserId(req, res));



router.post(`/api-${sys}/bugs/updateBugById`, (req, res) => bugsCtrl.updateBugById(req, res));

router.post(`/api-${sys}/bugs/updateBugByDeleted`, (req, res) => bugsCtrl.updateBugByDeleted(req, res));

router.post(`/api-${sys}/bugs/updateBugByBugNumber`, (req, res) => bugsCtrl.updateBugByBugNumber(req, res));

router.post(`/api-${sys}/bugs/updateBugByName`, (req, res) => bugsCtrl.updateBugByName(req, res));

router.post(`/api-${sys}/bugs/updateBugByType`, (req, res) => bugsCtrl.updateBugByType(req, res));

router.post(`/api-${sys}/bugs/updateBugByStatus`, (req, res) => bugsCtrl.updateBugByStatus(req, res));

router.post(`/api-${sys}/bugs/updateBugByPriority`, (req, res) => bugsCtrl.updateBugByPriority(req, res));

router.post(`/api-${sys}/bugs/updateBugByResolution`, (req, res) => bugsCtrl.updateBugByResolution(req, res));

router.post(`/api-${sys}/bugs/updateBugByFoundInRelease`, (req, res) => bugsCtrl.updateBugByFoundInRelease(req, res));

router.post(`/api-${sys}/bugs/updateBugByFixedInRelease`, (req, res) => bugsCtrl.updateBugByFixedInRelease(req, res));

router.post(`/api-${sys}/bugs/updateBugBySource`, (req, res) => bugsCtrl.updateBugBySource(req, res));

router.post(`/api-${sys}/bugs/updateBugByProductCategory`, (req, res) => bugsCtrl.updateBugByProductCategory(req, res));

router.post(`/api-${sys}/bugs/updateBugByDescription`, (req, res) => bugsCtrl.updateBugByDescription(req, res));

router.post(`/api-${sys}/bugs/updateBugByWorkLog`, (req, res) => bugsCtrl.updateBugByWorkLog(req, res));

router.post(`/api-${sys}/bugs/updateBugByDateEntered`, (req, res) => bugsCtrl.updateBugByDateEntered(req, res));

router.post(`/api-${sys}/bugs/updateBugByDateModified`, (req, res) => bugsCtrl.updateBugByDateModified(req, res));

router.post(`/api-${sys}/bugs/updateBugByModifiedUserId`, (req, res) => bugsCtrl.updateBugByModifiedUserId(req, res));

router.post(`/api-${sys}/bugs/updateBugByCreatedBy`, (req, res) => bugsCtrl.updateBugByCreatedBy(req, res));

router.post(`/api-${sys}/bugs/updateBugByAssignedUserId`, (req, res) => bugsCtrl.updateBugByAssignedUserId(req, res));





router.get(`/api-${sys}/bugs/`, (req, res) => bugsCtrl.getAllBugs(req, res));
router.post(`/api-${sys}/bugs/`, (req, res) => bugsCtrl.addBug(req, res));
router.get(`/api-${sys}/bugs/:id`, (req, res) => bugsCtrl.getABug(req, res));
router.put(`/api-${sys}/bugs/:id`, (req, res) => bugsCtrl.updateBug(req, res));
router.delete(`/api-${sys}/bugs/:id`, (req, res) => bugsCtrl.deleteBug(req, res));

//</es-section>
module.exports = router;
