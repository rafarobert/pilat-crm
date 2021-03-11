/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:09 GMT-0400 (Bolivia Time)
 * Time: 14:56:9
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:09 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:9
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const aosContractsAuditCtrl = require("../controllers/aos_contracts_audit.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/aos-contracts-audit/findOneById/:id`, (req, res) => aosContractsAuditCtrl.findOneById(req, res));

router.get(`/api-${sys}/aos-contracts-audit/findOneByCreatedBy/:createdBy`, (req, res) => aosContractsAuditCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/aos-contracts-audit/findOneByFieldName/:fieldName`, (req, res) => aosContractsAuditCtrl.findOneByFieldName(req, res));

router.get(`/api-${sys}/aos-contracts-audit/findOneByDataType/:dataType`, (req, res) => aosContractsAuditCtrl.findOneByDataType(req, res));

router.get(`/api-${sys}/aos-contracts-audit/findOneByBeforeValueString/:beforeValueString`, (req, res) => aosContractsAuditCtrl.findOneByBeforeValueString(req, res));

router.get(`/api-${sys}/aos-contracts-audit/findOneByAfterValueString/:afterValueString`, (req, res) => aosContractsAuditCtrl.findOneByAfterValueString(req, res));

router.get(`/api-${sys}/aos-contracts-audit/findOneByBeforeValueText/:beforeValueText`, (req, res) => aosContractsAuditCtrl.findOneByBeforeValueText(req, res));

router.get(`/api-${sys}/aos-contracts-audit/findOneByAfterValueText/:afterValueText`, (req, res) => aosContractsAuditCtrl.findOneByAfterValueText(req, res));

router.get(`/api-${sys}/aos-contracts-audit/findOneByDateCreated/:dateCreated`, (req, res) => aosContractsAuditCtrl.findOneByDateCreated(req, res));

router.get(`/api-${sys}/aos-contracts-audit/findOneByParentId/:parentId`, (req, res) => aosContractsAuditCtrl.findOneByParentId(req, res));



router.post(`/api-${sys}/aos-contracts-audit/updateAoContractAuditById`, (req, res) => aosContractsAuditCtrl.updateAoContractAuditById(req, res));

router.post(`/api-${sys}/aos-contracts-audit/updateAoContractAuditByCreatedBy`, (req, res) => aosContractsAuditCtrl.updateAoContractAuditByCreatedBy(req, res));

router.post(`/api-${sys}/aos-contracts-audit/updateAoContractAuditByFieldName`, (req, res) => aosContractsAuditCtrl.updateAoContractAuditByFieldName(req, res));

router.post(`/api-${sys}/aos-contracts-audit/updateAoContractAuditByDataType`, (req, res) => aosContractsAuditCtrl.updateAoContractAuditByDataType(req, res));

router.post(`/api-${sys}/aos-contracts-audit/updateAoContractAuditByBeforeValueString`, (req, res) => aosContractsAuditCtrl.updateAoContractAuditByBeforeValueString(req, res));

router.post(`/api-${sys}/aos-contracts-audit/updateAoContractAuditByAfterValueString`, (req, res) => aosContractsAuditCtrl.updateAoContractAuditByAfterValueString(req, res));

router.post(`/api-${sys}/aos-contracts-audit/updateAoContractAuditByBeforeValueText`, (req, res) => aosContractsAuditCtrl.updateAoContractAuditByBeforeValueText(req, res));

router.post(`/api-${sys}/aos-contracts-audit/updateAoContractAuditByAfterValueText`, (req, res) => aosContractsAuditCtrl.updateAoContractAuditByAfterValueText(req, res));

router.post(`/api-${sys}/aos-contracts-audit/updateAoContractAuditByDateCreated`, (req, res) => aosContractsAuditCtrl.updateAoContractAuditByDateCreated(req, res));

router.post(`/api-${sys}/aos-contracts-audit/updateAoContractAuditByParentId`, (req, res) => aosContractsAuditCtrl.updateAoContractAuditByParentId(req, res));





router.get(`/api-${sys}/aos-contracts-audit/`, (req, res) => aosContractsAuditCtrl.getAllAosContractsAudit(req, res));
router.post(`/api-${sys}/datatable/aos-contracts-audit/`, (req, res) => aosContractsAuditCtrl.getAllAosContractsAudit(req, res));
router.post(`/api-${sys}/aos-contracts-audit/`, (req, res) => aosContractsAuditCtrl.addAoContractAudit(req, res));
router.get(`/api-${sys}/aos-contracts-audit/:id`, (req, res) => aosContractsAuditCtrl.getAAoContractAudit(req, res));
router.put(`/api-${sys}/aos-contracts-audit/:id`, (req, res) => aosContractsAuditCtrl.updateAoContractAudit(req, res));
router.delete(`/api-${sys}/aos-contracts-audit/:id`, (req, res) => aosContractsAuditCtrl.deleteAoContractAudit(req, res));

//</es-section>
module.exports = router;
