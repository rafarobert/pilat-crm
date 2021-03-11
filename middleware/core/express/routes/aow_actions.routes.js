/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:23 GMT-0400 (Bolivia Time)
 * Time: 14:56:23
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:23 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:23
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const aowActionsCtrl = require("../controllers/aow_actions.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/aow-actions/findOneById/:id`, (req, res) => aowActionsCtrl.findOneById(req, res));

router.get(`/api-${sys}/aow-actions/findOneByDeleted/:deleted`, (req, res) => aowActionsCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/aow-actions/findOneByActionOrder/:actionOrder`, (req, res) => aowActionsCtrl.findOneByActionOrder(req, res));

router.get(`/api-${sys}/aow-actions/findOneByName/:name`, (req, res) => aowActionsCtrl.findOneByName(req, res));

router.get(`/api-${sys}/aow-actions/findOneByAction/:action`, (req, res) => aowActionsCtrl.findOneByAction(req, res));

router.get(`/api-${sys}/aow-actions/findOneByDescription/:description`, (req, res) => aowActionsCtrl.findOneByDescription(req, res));

router.get(`/api-${sys}/aow-actions/findOneByParameters/:parameters`, (req, res) => aowActionsCtrl.findOneByParameters(req, res));

router.get(`/api-${sys}/aow-actions/findOneByDateEntered/:dateEntered`, (req, res) => aowActionsCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/aow-actions/findOneByDateModified/:dateModified`, (req, res) => aowActionsCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/aow-actions/findOneByModifiedUserId/:modifiedUserId`, (req, res) => aowActionsCtrl.findOneByModifiedUserId(req, res));

router.get(`/api-${sys}/aow-actions/findOneByCreatedBy/:createdBy`, (req, res) => aowActionsCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/aow-actions/findOneByAowWorkflowId/:aowWorkflowId`, (req, res) => aowActionsCtrl.findOneByAowWorkflowId(req, res));



router.post(`/api-${sys}/aow-actions/updateAowActionById`, (req, res) => aowActionsCtrl.updateAowActionById(req, res));

router.post(`/api-${sys}/aow-actions/updateAowActionByDeleted`, (req, res) => aowActionsCtrl.updateAowActionByDeleted(req, res));

router.post(`/api-${sys}/aow-actions/updateAowActionByActionOrder`, (req, res) => aowActionsCtrl.updateAowActionByActionOrder(req, res));

router.post(`/api-${sys}/aow-actions/updateAowActionByName`, (req, res) => aowActionsCtrl.updateAowActionByName(req, res));

router.post(`/api-${sys}/aow-actions/updateAowActionByAction`, (req, res) => aowActionsCtrl.updateAowActionByAction(req, res));

router.post(`/api-${sys}/aow-actions/updateAowActionByDescription`, (req, res) => aowActionsCtrl.updateAowActionByDescription(req, res));

router.post(`/api-${sys}/aow-actions/updateAowActionByParameters`, (req, res) => aowActionsCtrl.updateAowActionByParameters(req, res));

router.post(`/api-${sys}/aow-actions/updateAowActionByDateEntered`, (req, res) => aowActionsCtrl.updateAowActionByDateEntered(req, res));

router.post(`/api-${sys}/aow-actions/updateAowActionByDateModified`, (req, res) => aowActionsCtrl.updateAowActionByDateModified(req, res));

router.post(`/api-${sys}/aow-actions/updateAowActionByModifiedUserId`, (req, res) => aowActionsCtrl.updateAowActionByModifiedUserId(req, res));

router.post(`/api-${sys}/aow-actions/updateAowActionByCreatedBy`, (req, res) => aowActionsCtrl.updateAowActionByCreatedBy(req, res));

router.post(`/api-${sys}/aow-actions/updateAowActionByAowWorkflowId`, (req, res) => aowActionsCtrl.updateAowActionByAowWorkflowId(req, res));





router.get(`/api-${sys}/aow-actions/`, (req, res) => aowActionsCtrl.getAllAowActions(req, res));
router.post(`/api-${sys}/datatable/aow-actions/`, (req, res) => aowActionsCtrl.getAllAowActions(req, res));
router.post(`/api-${sys}/aow-actions/`, (req, res) => aowActionsCtrl.addAowAction(req, res));
router.get(`/api-${sys}/aow-actions/:id`, (req, res) => aowActionsCtrl.getAAowAction(req, res));
router.put(`/api-${sys}/aow-actions/:id`, (req, res) => aowActionsCtrl.updateAowAction(req, res));
router.delete(`/api-${sys}/aow-actions/:id`, (req, res) => aowActionsCtrl.deleteAowAction(req, res));

//</es-section>
module.exports = router;
