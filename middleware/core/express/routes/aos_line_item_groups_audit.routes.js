/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:35:25 GMT-0400 (Bolivia Time)
 * Time: 15:35:25
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:35:25 GMT-0400 (Bolivia Time)
 * Last time updated: 15:35:25
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const aosLineItemGroupsAuditCtrl = require("../controllers/aos_line_item_groups_audit.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/aos-line-item-groups-audit/findOneById/:id`, (req, res) => aosLineItemGroupsAuditCtrl.findOneById(req, res));

router.get(`/api-${sys}/aos-line-item-groups-audit/findOneByCreatedBy/:createdBy`, (req, res) => aosLineItemGroupsAuditCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/aos-line-item-groups-audit/findOneByFieldName/:fieldName`, (req, res) => aosLineItemGroupsAuditCtrl.findOneByFieldName(req, res));

router.get(`/api-${sys}/aos-line-item-groups-audit/findOneByDataType/:dataType`, (req, res) => aosLineItemGroupsAuditCtrl.findOneByDataType(req, res));

router.get(`/api-${sys}/aos-line-item-groups-audit/findOneByBeforeValueString/:beforeValueString`, (req, res) => aosLineItemGroupsAuditCtrl.findOneByBeforeValueString(req, res));

router.get(`/api-${sys}/aos-line-item-groups-audit/findOneByAfterValueString/:afterValueString`, (req, res) => aosLineItemGroupsAuditCtrl.findOneByAfterValueString(req, res));

router.get(`/api-${sys}/aos-line-item-groups-audit/findOneByBeforeValueText/:beforeValueText`, (req, res) => aosLineItemGroupsAuditCtrl.findOneByBeforeValueText(req, res));

router.get(`/api-${sys}/aos-line-item-groups-audit/findOneByAfterValueText/:afterValueText`, (req, res) => aosLineItemGroupsAuditCtrl.findOneByAfterValueText(req, res));

router.get(`/api-${sys}/aos-line-item-groups-audit/findOneByDateCreated/:dateCreated`, (req, res) => aosLineItemGroupsAuditCtrl.findOneByDateCreated(req, res));

router.get(`/api-${sys}/aos-line-item-groups-audit/findOneByParentId/:parentId`, (req, res) => aosLineItemGroupsAuditCtrl.findOneByParentId(req, res));



router.post(`/api-${sys}/aos-line-item-groups-audit/updateAoLineItemGroupAuditById`, (req, res) => aosLineItemGroupsAuditCtrl.updateAoLineItemGroupAuditById(req, res));

router.post(`/api-${sys}/aos-line-item-groups-audit/updateAoLineItemGroupAuditByCreatedBy`, (req, res) => aosLineItemGroupsAuditCtrl.updateAoLineItemGroupAuditByCreatedBy(req, res));

router.post(`/api-${sys}/aos-line-item-groups-audit/updateAoLineItemGroupAuditByFieldName`, (req, res) => aosLineItemGroupsAuditCtrl.updateAoLineItemGroupAuditByFieldName(req, res));

router.post(`/api-${sys}/aos-line-item-groups-audit/updateAoLineItemGroupAuditByDataType`, (req, res) => aosLineItemGroupsAuditCtrl.updateAoLineItemGroupAuditByDataType(req, res));

router.post(`/api-${sys}/aos-line-item-groups-audit/updateAoLineItemGroupAuditByBeforeValueString`, (req, res) => aosLineItemGroupsAuditCtrl.updateAoLineItemGroupAuditByBeforeValueString(req, res));

router.post(`/api-${sys}/aos-line-item-groups-audit/updateAoLineItemGroupAuditByAfterValueString`, (req, res) => aosLineItemGroupsAuditCtrl.updateAoLineItemGroupAuditByAfterValueString(req, res));

router.post(`/api-${sys}/aos-line-item-groups-audit/updateAoLineItemGroupAuditByBeforeValueText`, (req, res) => aosLineItemGroupsAuditCtrl.updateAoLineItemGroupAuditByBeforeValueText(req, res));

router.post(`/api-${sys}/aos-line-item-groups-audit/updateAoLineItemGroupAuditByAfterValueText`, (req, res) => aosLineItemGroupsAuditCtrl.updateAoLineItemGroupAuditByAfterValueText(req, res));

router.post(`/api-${sys}/aos-line-item-groups-audit/updateAoLineItemGroupAuditByDateCreated`, (req, res) => aosLineItemGroupsAuditCtrl.updateAoLineItemGroupAuditByDateCreated(req, res));

router.post(`/api-${sys}/aos-line-item-groups-audit/updateAoLineItemGroupAuditByParentId`, (req, res) => aosLineItemGroupsAuditCtrl.updateAoLineItemGroupAuditByParentId(req, res));





router.get(`/api-${sys}/aos-line-item-groups-audit/`, (req, res) => aosLineItemGroupsAuditCtrl.getAllAosLineItemGroupsAudit(req, res));
router.post(`/api-${sys}/aos-line-item-groups-audit/`, (req, res) => aosLineItemGroupsAuditCtrl.addAoLineItemGroupAudit(req, res));
router.get(`/api-${sys}/aos-line-item-groups-audit/:id`, (req, res) => aosLineItemGroupsAuditCtrl.getAAoLineItemGroupAudit(req, res));
router.put(`/api-${sys}/aos-line-item-groups-audit/:id`, (req, res) => aosLineItemGroupsAuditCtrl.updateAoLineItemGroupAudit(req, res));
router.delete(`/api-${sys}/aos-line-item-groups-audit/:id`, (req, res) => aosLineItemGroupsAuditCtrl.deleteAoLineItemGroupAudit(req, res));

//</es-section>
module.exports = router;
