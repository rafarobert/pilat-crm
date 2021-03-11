/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:25 GMT-0400 (Bolivia Time)
 * Time: 14:56:25
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:25 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:25
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const aowProcessedAowActionsCtrl = require("../controllers/aow_processed_aow_actions.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/aow-processed-aow-actions/findOneById/:id`, (req, res) => aowProcessedAowActionsCtrl.findOneById(req, res));

router.get(`/api-${sys}/aow-processed-aow-actions/findOneByDeleted/:deleted`, (req, res) => aowProcessedAowActionsCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/aow-processed-aow-actions/findOneByAowProcessedId/:aowProcessedId`, (req, res) => aowProcessedAowActionsCtrl.findOneByAowProcessedId(req, res));

router.get(`/api-${sys}/aow-processed-aow-actions/findOneByAowActionId/:aowActionId`, (req, res) => aowProcessedAowActionsCtrl.findOneByAowActionId(req, res));

router.get(`/api-${sys}/aow-processed-aow-actions/findOneByStatus/:status`, (req, res) => aowProcessedAowActionsCtrl.findOneByStatus(req, res));

router.get(`/api-${sys}/aow-processed-aow-actions/findOneByDateModified/:dateModified`, (req, res) => aowProcessedAowActionsCtrl.findOneByDateModified(req, res));



router.post(`/api-${sys}/aow-processed-aow-actions/updateAowProcessedAowActionById`, (req, res) => aowProcessedAowActionsCtrl.updateAowProcessedAowActionById(req, res));

router.post(`/api-${sys}/aow-processed-aow-actions/updateAowProcessedAowActionByDeleted`, (req, res) => aowProcessedAowActionsCtrl.updateAowProcessedAowActionByDeleted(req, res));

router.post(`/api-${sys}/aow-processed-aow-actions/updateAowProcessedAowActionByAowProcessedId`, (req, res) => aowProcessedAowActionsCtrl.updateAowProcessedAowActionByAowProcessedId(req, res));

router.post(`/api-${sys}/aow-processed-aow-actions/updateAowProcessedAowActionByAowActionId`, (req, res) => aowProcessedAowActionsCtrl.updateAowProcessedAowActionByAowActionId(req, res));

router.post(`/api-${sys}/aow-processed-aow-actions/updateAowProcessedAowActionByStatus`, (req, res) => aowProcessedAowActionsCtrl.updateAowProcessedAowActionByStatus(req, res));

router.post(`/api-${sys}/aow-processed-aow-actions/updateAowProcessedAowActionByDateModified`, (req, res) => aowProcessedAowActionsCtrl.updateAowProcessedAowActionByDateModified(req, res));





router.get(`/api-${sys}/aow-processed-aow-actions/`, (req, res) => aowProcessedAowActionsCtrl.getAllAowProcessedAowActions(req, res));
router.post(`/api-${sys}/aow-processed-aow-actions/`, (req, res) => aowProcessedAowActionsCtrl.addAowProcessedAowAction(req, res));
router.get(`/api-${sys}/aow-processed-aow-actions/:id`, (req, res) => aowProcessedAowActionsCtrl.getAAowProcessedAowAction(req, res));
router.put(`/api-${sys}/aow-processed-aow-actions/:id`, (req, res) => aowProcessedAowActionsCtrl.updateAowProcessedAowAction(req, res));
router.delete(`/api-${sys}/aow-processed-aow-actions/:id`, (req, res) => aowProcessedAowActionsCtrl.deleteAowProcessedAowAction(req, res));

//</es-section>
module.exports = router;
