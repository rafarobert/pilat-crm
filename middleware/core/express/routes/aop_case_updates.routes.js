/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:35:46 GMT-0400 (Bolivia Time)
 * Time: 18:35:46
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:35:46 GMT-0400 (Bolivia Time)
 * Last time updated: 18:35:46
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const aopCaseUpdatesCtrl = require("../controllers/aop_case_updates.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/aop-case-updates/findOneById/:id`, (req, res) => aopCaseUpdatesCtrl.findOneById(req, res));

router.get(`/api-${sys}/aop-case-updates/findOneByDeleted/:deleted`, (req, res) => aopCaseUpdatesCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/aop-case-updates/findOneByInternal/:internal`, (req, res) => aopCaseUpdatesCtrl.findOneByInternal(req, res));

router.get(`/api-${sys}/aop-case-updates/findOneByName/:name`, (req, res) => aopCaseUpdatesCtrl.findOneByName(req, res));

router.get(`/api-${sys}/aop-case-updates/findOneByDescription/:description`, (req, res) => aopCaseUpdatesCtrl.findOneByDescription(req, res));

router.get(`/api-${sys}/aop-case-updates/findOneByDateEntered/:dateEntered`, (req, res) => aopCaseUpdatesCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/aop-case-updates/findOneByDateModified/:dateModified`, (req, res) => aopCaseUpdatesCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/aop-case-updates/findOneByModifiedUserId/:modifiedUserId`, (req, res) => aopCaseUpdatesCtrl.findOneByModifiedUserId(req, res));

router.get(`/api-${sys}/aop-case-updates/findOneByCreatedBy/:createdBy`, (req, res) => aopCaseUpdatesCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/aop-case-updates/findOneByAssignedUserId/:assignedUserId`, (req, res) => aopCaseUpdatesCtrl.findOneByAssignedUserId(req, res));

router.get(`/api-${sys}/aop-case-updates/findOneByCaseId/:caseId`, (req, res) => aopCaseUpdatesCtrl.findOneByCaseId(req, res));

router.get(`/api-${sys}/aop-case-updates/findOneByContactId/:contactId`, (req, res) => aopCaseUpdatesCtrl.findOneByContactId(req, res));



router.post(`/api-${sys}/aop-case-updates/updateAopCaseUpdateById`, (req, res) => aopCaseUpdatesCtrl.updateAopCaseUpdateById(req, res));

router.post(`/api-${sys}/aop-case-updates/updateAopCaseUpdateByDeleted`, (req, res) => aopCaseUpdatesCtrl.updateAopCaseUpdateByDeleted(req, res));

router.post(`/api-${sys}/aop-case-updates/updateAopCaseUpdateByInternal`, (req, res) => aopCaseUpdatesCtrl.updateAopCaseUpdateByInternal(req, res));

router.post(`/api-${sys}/aop-case-updates/updateAopCaseUpdateByName`, (req, res) => aopCaseUpdatesCtrl.updateAopCaseUpdateByName(req, res));

router.post(`/api-${sys}/aop-case-updates/updateAopCaseUpdateByDescription`, (req, res) => aopCaseUpdatesCtrl.updateAopCaseUpdateByDescription(req, res));

router.post(`/api-${sys}/aop-case-updates/updateAopCaseUpdateByDateEntered`, (req, res) => aopCaseUpdatesCtrl.updateAopCaseUpdateByDateEntered(req, res));

router.post(`/api-${sys}/aop-case-updates/updateAopCaseUpdateByDateModified`, (req, res) => aopCaseUpdatesCtrl.updateAopCaseUpdateByDateModified(req, res));

router.post(`/api-${sys}/aop-case-updates/updateAopCaseUpdateByModifiedUserId`, (req, res) => aopCaseUpdatesCtrl.updateAopCaseUpdateByModifiedUserId(req, res));

router.post(`/api-${sys}/aop-case-updates/updateAopCaseUpdateByCreatedBy`, (req, res) => aopCaseUpdatesCtrl.updateAopCaseUpdateByCreatedBy(req, res));

router.post(`/api-${sys}/aop-case-updates/updateAopCaseUpdateByAssignedUserId`, (req, res) => aopCaseUpdatesCtrl.updateAopCaseUpdateByAssignedUserId(req, res));

router.post(`/api-${sys}/aop-case-updates/updateAopCaseUpdateByCaseId`, (req, res) => aopCaseUpdatesCtrl.updateAopCaseUpdateByCaseId(req, res));

router.post(`/api-${sys}/aop-case-updates/updateAopCaseUpdateByContactId`, (req, res) => aopCaseUpdatesCtrl.updateAopCaseUpdateByContactId(req, res));





router.get(`/api-${sys}/aop-case-updates/`, (req, res) => aopCaseUpdatesCtrl.getAllAopCaseUpdates(req, res));
router.post(`/api-${sys}/aop-case-updates/`, (req, res) => aopCaseUpdatesCtrl.addAopCaseUpdate(req, res));
router.get(`/api-${sys}/aop-case-updates/:id`, (req, res) => aopCaseUpdatesCtrl.getAAopCaseUpdate(req, res));
router.put(`/api-${sys}/aop-case-updates/:id`, (req, res) => aopCaseUpdatesCtrl.updateAopCaseUpdate(req, res));
router.delete(`/api-${sys}/aop-case-updates/:id`, (req, res) => aopCaseUpdatesCtrl.deleteAopCaseUpdate(req, res));

//</es-section>
module.exports = router;
