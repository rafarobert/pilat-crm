/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:55:58 GMT-0400 (Bolivia Time)
 * Time: 14:55:58
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:55:58 GMT-0400 (Bolivia Time)
 * Last time updated: 14:55:58
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const aodIndexAuditCtrl = require("../controllers/aod_index_audit.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/aod-index-audit/findOneById/:id`, (req, res) => aodIndexAuditCtrl.findOneById(req, res));

router.get(`/api-${sys}/aod-index-audit/findOneByCreatedBy/:createdBy`, (req, res) => aodIndexAuditCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/aod-index-audit/findOneByFieldName/:fieldName`, (req, res) => aodIndexAuditCtrl.findOneByFieldName(req, res));

router.get(`/api-${sys}/aod-index-audit/findOneByDataType/:dataType`, (req, res) => aodIndexAuditCtrl.findOneByDataType(req, res));

router.get(`/api-${sys}/aod-index-audit/findOneByBeforeValueString/:beforeValueString`, (req, res) => aodIndexAuditCtrl.findOneByBeforeValueString(req, res));

router.get(`/api-${sys}/aod-index-audit/findOneByAfterValueString/:afterValueString`, (req, res) => aodIndexAuditCtrl.findOneByAfterValueString(req, res));

router.get(`/api-${sys}/aod-index-audit/findOneByBeforeValueText/:beforeValueText`, (req, res) => aodIndexAuditCtrl.findOneByBeforeValueText(req, res));

router.get(`/api-${sys}/aod-index-audit/findOneByAfterValueText/:afterValueText`, (req, res) => aodIndexAuditCtrl.findOneByAfterValueText(req, res));

router.get(`/api-${sys}/aod-index-audit/findOneByDateCreated/:dateCreated`, (req, res) => aodIndexAuditCtrl.findOneByDateCreated(req, res));

router.get(`/api-${sys}/aod-index-audit/findOneByParentId/:parentId`, (req, res) => aodIndexAuditCtrl.findOneByParentId(req, res));



router.post(`/api-${sys}/aod-index-audit/updateAodIndexAuditById`, (req, res) => aodIndexAuditCtrl.updateAodIndexAuditById(req, res));

router.post(`/api-${sys}/aod-index-audit/updateAodIndexAuditByCreatedBy`, (req, res) => aodIndexAuditCtrl.updateAodIndexAuditByCreatedBy(req, res));

router.post(`/api-${sys}/aod-index-audit/updateAodIndexAuditByFieldName`, (req, res) => aodIndexAuditCtrl.updateAodIndexAuditByFieldName(req, res));

router.post(`/api-${sys}/aod-index-audit/updateAodIndexAuditByDataType`, (req, res) => aodIndexAuditCtrl.updateAodIndexAuditByDataType(req, res));

router.post(`/api-${sys}/aod-index-audit/updateAodIndexAuditByBeforeValueString`, (req, res) => aodIndexAuditCtrl.updateAodIndexAuditByBeforeValueString(req, res));

router.post(`/api-${sys}/aod-index-audit/updateAodIndexAuditByAfterValueString`, (req, res) => aodIndexAuditCtrl.updateAodIndexAuditByAfterValueString(req, res));

router.post(`/api-${sys}/aod-index-audit/updateAodIndexAuditByBeforeValueText`, (req, res) => aodIndexAuditCtrl.updateAodIndexAuditByBeforeValueText(req, res));

router.post(`/api-${sys}/aod-index-audit/updateAodIndexAuditByAfterValueText`, (req, res) => aodIndexAuditCtrl.updateAodIndexAuditByAfterValueText(req, res));

router.post(`/api-${sys}/aod-index-audit/updateAodIndexAuditByDateCreated`, (req, res) => aodIndexAuditCtrl.updateAodIndexAuditByDateCreated(req, res));

router.post(`/api-${sys}/aod-index-audit/updateAodIndexAuditByParentId`, (req, res) => aodIndexAuditCtrl.updateAodIndexAuditByParentId(req, res));





router.get(`/api-${sys}/aod-index-audit/`, (req, res) => aodIndexAuditCtrl.getAllAodIndexAudit(req, res));
router.post(`/api-${sys}/datatable/aod-index-audit/`, (req, res) => aodIndexAuditCtrl.getAllAodIndexAudit(req, res));
router.post(`/api-${sys}/aod-index-audit/`, (req, res) => aodIndexAuditCtrl.addAodIndexAudit(req, res));
router.get(`/api-${sys}/aod-index-audit/:id`, (req, res) => aodIndexAuditCtrl.getAAodIndexAudit(req, res));
router.put(`/api-${sys}/aod-index-audit/:id`, (req, res) => aodIndexAuditCtrl.updateAodIndexAudit(req, res));
router.delete(`/api-${sys}/aod-index-audit/:id`, (req, res) => aodIndexAuditCtrl.deleteAodIndexAudit(req, res));

//</es-section>
module.exports = router;
