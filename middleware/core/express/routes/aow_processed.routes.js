/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:24 GMT-0400 (Bolivia Time)
 * Time: 14:56:24
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:24 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:24
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const aowProcessedCtrl = require("../controllers/aow_processed.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/aow-processed/findOneById/:id`, (req, res) => aowProcessedCtrl.findOneById(req, res));

router.get(`/api-${sys}/aow-processed/findOneByDeleted/:deleted`, (req, res) => aowProcessedCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/aow-processed/findOneByName/:name`, (req, res) => aowProcessedCtrl.findOneByName(req, res));

router.get(`/api-${sys}/aow-processed/findOneByParentType/:parentType`, (req, res) => aowProcessedCtrl.findOneByParentType(req, res));

router.get(`/api-${sys}/aow-processed/findOneByStatus/:status`, (req, res) => aowProcessedCtrl.findOneByStatus(req, res));

router.get(`/api-${sys}/aow-processed/findOneByDescription/:description`, (req, res) => aowProcessedCtrl.findOneByDescription(req, res));

router.get(`/api-${sys}/aow-processed/findOneByDateEntered/:dateEntered`, (req, res) => aowProcessedCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/aow-processed/findOneByDateModified/:dateModified`, (req, res) => aowProcessedCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/aow-processed/findOneByModifiedUserId/:modifiedUserId`, (req, res) => aowProcessedCtrl.findOneByModifiedUserId(req, res));

router.get(`/api-${sys}/aow-processed/findOneByCreatedBy/:createdBy`, (req, res) => aowProcessedCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/aow-processed/findOneByAowWorkflowId/:aowWorkflowId`, (req, res) => aowProcessedCtrl.findOneByAowWorkflowId(req, res));

router.get(`/api-${sys}/aow-processed/findOneByParentId/:parentId`, (req, res) => aowProcessedCtrl.findOneByParentId(req, res));



router.post(`/api-${sys}/aow-processed/updateAowProcessedById`, (req, res) => aowProcessedCtrl.updateAowProcessedById(req, res));

router.post(`/api-${sys}/aow-processed/updateAowProcessedByDeleted`, (req, res) => aowProcessedCtrl.updateAowProcessedByDeleted(req, res));

router.post(`/api-${sys}/aow-processed/updateAowProcessedByName`, (req, res) => aowProcessedCtrl.updateAowProcessedByName(req, res));

router.post(`/api-${sys}/aow-processed/updateAowProcessedByParentType`, (req, res) => aowProcessedCtrl.updateAowProcessedByParentType(req, res));

router.post(`/api-${sys}/aow-processed/updateAowProcessedByStatus`, (req, res) => aowProcessedCtrl.updateAowProcessedByStatus(req, res));

router.post(`/api-${sys}/aow-processed/updateAowProcessedByDescription`, (req, res) => aowProcessedCtrl.updateAowProcessedByDescription(req, res));

router.post(`/api-${sys}/aow-processed/updateAowProcessedByDateEntered`, (req, res) => aowProcessedCtrl.updateAowProcessedByDateEntered(req, res));

router.post(`/api-${sys}/aow-processed/updateAowProcessedByDateModified`, (req, res) => aowProcessedCtrl.updateAowProcessedByDateModified(req, res));

router.post(`/api-${sys}/aow-processed/updateAowProcessedByModifiedUserId`, (req, res) => aowProcessedCtrl.updateAowProcessedByModifiedUserId(req, res));

router.post(`/api-${sys}/aow-processed/updateAowProcessedByCreatedBy`, (req, res) => aowProcessedCtrl.updateAowProcessedByCreatedBy(req, res));

router.post(`/api-${sys}/aow-processed/updateAowProcessedByAowWorkflowId`, (req, res) => aowProcessedCtrl.updateAowProcessedByAowWorkflowId(req, res));

router.post(`/api-${sys}/aow-processed/updateAowProcessedByParentId`, (req, res) => aowProcessedCtrl.updateAowProcessedByParentId(req, res));





router.get(`/api-${sys}/aow-processed/`, (req, res) => aowProcessedCtrl.getAllAowProcessed(req, res));
router.post(`/api-${sys}/aow-processed/`, (req, res) => aowProcessedCtrl.addAowProcessed(req, res));
router.get(`/api-${sys}/aow-processed/:id`, (req, res) => aowProcessedCtrl.getAAowProcessed(req, res));
router.put(`/api-${sys}/aow-processed/:id`, (req, res) => aowProcessedCtrl.updateAowProcessed(req, res));
router.delete(`/api-${sys}/aow-processed/:id`, (req, res) => aowProcessedCtrl.deleteAowProcessed(req, res));

//</es-section>
module.exports = router;
