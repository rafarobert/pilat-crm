/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:35:14 GMT-0400 (Bolivia Time)
 * Time: 15:35:14
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:35:14 GMT-0400 (Bolivia Time)
 * Last time updated: 15:35:14
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const aorConditionsCtrl = require("../controllers/aor_conditions.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/aor-conditions/findOneById/:id`, (req, res) => aorConditionsCtrl.findOneById(req, res));

router.get(`/api-${sys}/aor-conditions/findOneByDeleted/:deleted`, (req, res) => aorConditionsCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/aor-conditions/findOneByParameter/:parameter`, (req, res) => aorConditionsCtrl.findOneByParameter(req, res));

router.get(`/api-${sys}/aor-conditions/findOneByConditionOrder/:conditionOrder`, (req, res) => aorConditionsCtrl.findOneByConditionOrder(req, res));

router.get(`/api-${sys}/aor-conditions/findOneByName/:name`, (req, res) => aorConditionsCtrl.findOneByName(req, res));

router.get(`/api-${sys}/aor-conditions/findOneByLogicOp/:logicOp`, (req, res) => aorConditionsCtrl.findOneByLogicOp(req, res));

router.get(`/api-${sys}/aor-conditions/findOneByParenthesis/:parenthesis`, (req, res) => aorConditionsCtrl.findOneByParenthesis(req, res));

router.get(`/api-${sys}/aor-conditions/findOneByField/:field`, (req, res) => aorConditionsCtrl.findOneByField(req, res));

router.get(`/api-${sys}/aor-conditions/findOneByOperator/:operator`, (req, res) => aorConditionsCtrl.findOneByOperator(req, res));

router.get(`/api-${sys}/aor-conditions/findOneByValueType/:valueType`, (req, res) => aorConditionsCtrl.findOneByValueType(req, res));

router.get(`/api-${sys}/aor-conditions/findOneByValue/:value`, (req, res) => aorConditionsCtrl.findOneByValue(req, res));

router.get(`/api-${sys}/aor-conditions/findOneByDescription/:description`, (req, res) => aorConditionsCtrl.findOneByDescription(req, res));

router.get(`/api-${sys}/aor-conditions/findOneByModulePath/:modulePath`, (req, res) => aorConditionsCtrl.findOneByModulePath(req, res));

router.get(`/api-${sys}/aor-conditions/findOneByDateEntered/:dateEntered`, (req, res) => aorConditionsCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/aor-conditions/findOneByDateModified/:dateModified`, (req, res) => aorConditionsCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/aor-conditions/findOneByModifiedUserId/:modifiedUserId`, (req, res) => aorConditionsCtrl.findOneByModifiedUserId(req, res));

router.get(`/api-${sys}/aor-conditions/findOneByCreatedBy/:createdBy`, (req, res) => aorConditionsCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/aor-conditions/findOneByAorReportId/:aorReportId`, (req, res) => aorConditionsCtrl.findOneByAorReportId(req, res));



router.post(`/api-${sys}/aor-conditions/updateAorConditionById`, (req, res) => aorConditionsCtrl.updateAorConditionById(req, res));

router.post(`/api-${sys}/aor-conditions/updateAorConditionByDeleted`, (req, res) => aorConditionsCtrl.updateAorConditionByDeleted(req, res));

router.post(`/api-${sys}/aor-conditions/updateAorConditionByParameter`, (req, res) => aorConditionsCtrl.updateAorConditionByParameter(req, res));

router.post(`/api-${sys}/aor-conditions/updateAorConditionByConditionOrder`, (req, res) => aorConditionsCtrl.updateAorConditionByConditionOrder(req, res));

router.post(`/api-${sys}/aor-conditions/updateAorConditionByName`, (req, res) => aorConditionsCtrl.updateAorConditionByName(req, res));

router.post(`/api-${sys}/aor-conditions/updateAorConditionByLogicOp`, (req, res) => aorConditionsCtrl.updateAorConditionByLogicOp(req, res));

router.post(`/api-${sys}/aor-conditions/updateAorConditionByParenthesis`, (req, res) => aorConditionsCtrl.updateAorConditionByParenthesis(req, res));

router.post(`/api-${sys}/aor-conditions/updateAorConditionByField`, (req, res) => aorConditionsCtrl.updateAorConditionByField(req, res));

router.post(`/api-${sys}/aor-conditions/updateAorConditionByOperator`, (req, res) => aorConditionsCtrl.updateAorConditionByOperator(req, res));

router.post(`/api-${sys}/aor-conditions/updateAorConditionByValueType`, (req, res) => aorConditionsCtrl.updateAorConditionByValueType(req, res));

router.post(`/api-${sys}/aor-conditions/updateAorConditionByValue`, (req, res) => aorConditionsCtrl.updateAorConditionByValue(req, res));

router.post(`/api-${sys}/aor-conditions/updateAorConditionByDescription`, (req, res) => aorConditionsCtrl.updateAorConditionByDescription(req, res));

router.post(`/api-${sys}/aor-conditions/updateAorConditionByModulePath`, (req, res) => aorConditionsCtrl.updateAorConditionByModulePath(req, res));

router.post(`/api-${sys}/aor-conditions/updateAorConditionByDateEntered`, (req, res) => aorConditionsCtrl.updateAorConditionByDateEntered(req, res));

router.post(`/api-${sys}/aor-conditions/updateAorConditionByDateModified`, (req, res) => aorConditionsCtrl.updateAorConditionByDateModified(req, res));

router.post(`/api-${sys}/aor-conditions/updateAorConditionByModifiedUserId`, (req, res) => aorConditionsCtrl.updateAorConditionByModifiedUserId(req, res));

router.post(`/api-${sys}/aor-conditions/updateAorConditionByCreatedBy`, (req, res) => aorConditionsCtrl.updateAorConditionByCreatedBy(req, res));

router.post(`/api-${sys}/aor-conditions/updateAorConditionByAorReportId`, (req, res) => aorConditionsCtrl.updateAorConditionByAorReportId(req, res));





router.get(`/api-${sys}/aor-conditions/`, (req, res) => aorConditionsCtrl.getAllAorConditions(req, res));
router.post(`/api-${sys}/aor-conditions/`, (req, res) => aorConditionsCtrl.addAorCondition(req, res));
router.get(`/api-${sys}/aor-conditions/:id`, (req, res) => aorConditionsCtrl.getAAorCondition(req, res));
router.put(`/api-${sys}/aor-conditions/:id`, (req, res) => aorConditionsCtrl.updateAorCondition(req, res));
router.delete(`/api-${sys}/aor-conditions/:id`, (req, res) => aorConditionsCtrl.deleteAorCondition(req, res));

//</es-section>
module.exports = router;
