/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:42:27 GMT-0400 (Bolivia Time)
 * Time: 4:42:27
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:42:27 GMT-0400 (Bolivia Time)
 * Last time updated: 4:42:27
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const aowConditionsCtrl = require("../controllers/aow_conditions.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/aow-conditions/findOneById/:id`, (req, res) => aowConditionsCtrl.findOneById(req, res));

router.get(`/api-${sys}/aow-conditions/findOneByDeleted/:deleted`, (req, res) => aowConditionsCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/aow-conditions/findOneByConditionOrder/:conditionOrder`, (req, res) => aowConditionsCtrl.findOneByConditionOrder(req, res));

router.get(`/api-${sys}/aow-conditions/findOneByName/:name`, (req, res) => aowConditionsCtrl.findOneByName(req, res));

router.get(`/api-${sys}/aow-conditions/findOneByField/:field`, (req, res) => aowConditionsCtrl.findOneByField(req, res));

router.get(`/api-${sys}/aow-conditions/findOneByOperator/:operator`, (req, res) => aowConditionsCtrl.findOneByOperator(req, res));

router.get(`/api-${sys}/aow-conditions/findOneByValueType/:valueType`, (req, res) => aowConditionsCtrl.findOneByValueType(req, res));

router.get(`/api-${sys}/aow-conditions/findOneByValue/:value`, (req, res) => aowConditionsCtrl.findOneByValue(req, res));

router.get(`/api-${sys}/aow-conditions/findOneByDescription/:description`, (req, res) => aowConditionsCtrl.findOneByDescription(req, res));

router.get(`/api-${sys}/aow-conditions/findOneByModulePath/:modulePath`, (req, res) => aowConditionsCtrl.findOneByModulePath(req, res));

router.get(`/api-${sys}/aow-conditions/findOneByDateEntered/:dateEntered`, (req, res) => aowConditionsCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/aow-conditions/findOneByDateModified/:dateModified`, (req, res) => aowConditionsCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/aow-conditions/findOneByModifiedUserId/:modifiedUserId`, (req, res) => aowConditionsCtrl.findOneByModifiedUserId(req, res));

router.get(`/api-${sys}/aow-conditions/findOneByCreatedBy/:createdBy`, (req, res) => aowConditionsCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/aow-conditions/findOneByAowWorkflowId/:aowWorkflowId`, (req, res) => aowConditionsCtrl.findOneByAowWorkflowId(req, res));



router.post(`/api-${sys}/aow-conditions/updateAowConditionById`, (req, res) => aowConditionsCtrl.updateAowConditionById(req, res));

router.post(`/api-${sys}/aow-conditions/updateAowConditionByDeleted`, (req, res) => aowConditionsCtrl.updateAowConditionByDeleted(req, res));

router.post(`/api-${sys}/aow-conditions/updateAowConditionByConditionOrder`, (req, res) => aowConditionsCtrl.updateAowConditionByConditionOrder(req, res));

router.post(`/api-${sys}/aow-conditions/updateAowConditionByName`, (req, res) => aowConditionsCtrl.updateAowConditionByName(req, res));

router.post(`/api-${sys}/aow-conditions/updateAowConditionByField`, (req, res) => aowConditionsCtrl.updateAowConditionByField(req, res));

router.post(`/api-${sys}/aow-conditions/updateAowConditionByOperator`, (req, res) => aowConditionsCtrl.updateAowConditionByOperator(req, res));

router.post(`/api-${sys}/aow-conditions/updateAowConditionByValueType`, (req, res) => aowConditionsCtrl.updateAowConditionByValueType(req, res));

router.post(`/api-${sys}/aow-conditions/updateAowConditionByValue`, (req, res) => aowConditionsCtrl.updateAowConditionByValue(req, res));

router.post(`/api-${sys}/aow-conditions/updateAowConditionByDescription`, (req, res) => aowConditionsCtrl.updateAowConditionByDescription(req, res));

router.post(`/api-${sys}/aow-conditions/updateAowConditionByModulePath`, (req, res) => aowConditionsCtrl.updateAowConditionByModulePath(req, res));

router.post(`/api-${sys}/aow-conditions/updateAowConditionByDateEntered`, (req, res) => aowConditionsCtrl.updateAowConditionByDateEntered(req, res));

router.post(`/api-${sys}/aow-conditions/updateAowConditionByDateModified`, (req, res) => aowConditionsCtrl.updateAowConditionByDateModified(req, res));

router.post(`/api-${sys}/aow-conditions/updateAowConditionByModifiedUserId`, (req, res) => aowConditionsCtrl.updateAowConditionByModifiedUserId(req, res));

router.post(`/api-${sys}/aow-conditions/updateAowConditionByCreatedBy`, (req, res) => aowConditionsCtrl.updateAowConditionByCreatedBy(req, res));

router.post(`/api-${sys}/aow-conditions/updateAowConditionByAowWorkflowId`, (req, res) => aowConditionsCtrl.updateAowConditionByAowWorkflowId(req, res));





router.get(`/api-${sys}/aow-conditions/`, (req, res) => aowConditionsCtrl.getAllAowConditions(req, res));
router.post(`/api-${sys}/aow-conditions/`, (req, res) => aowConditionsCtrl.addAowCondition(req, res));
router.get(`/api-${sys}/aow-conditions/:id`, (req, res) => aowConditionsCtrl.getAAowCondition(req, res));
router.put(`/api-${sys}/aow-conditions/:id`, (req, res) => aowConditionsCtrl.updateAowCondition(req, res));
router.delete(`/api-${sys}/aow-conditions/:id`, (req, res) => aowConditionsCtrl.deleteAowCondition(req, res));

//</es-section>
module.exports = router;
