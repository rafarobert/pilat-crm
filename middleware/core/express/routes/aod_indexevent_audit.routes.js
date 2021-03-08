/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:35:08 GMT-0400 (Bolivia Time)
 * Time: 15:35:8
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:35:08 GMT-0400 (Bolivia Time)
 * Last time updated: 15:35:8
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const aodIndexeventAuditCtrl = require("../controllers/aod_indexevent_audit.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/aod-indexevent-audit/findOneById/:id`, (req, res) => aodIndexeventAuditCtrl.findOneById(req, res));

router.get(`/api-${sys}/aod-indexevent-audit/findOneByCreatedBy/:createdBy`, (req, res) => aodIndexeventAuditCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/aod-indexevent-audit/findOneByFieldName/:fieldName`, (req, res) => aodIndexeventAuditCtrl.findOneByFieldName(req, res));

router.get(`/api-${sys}/aod-indexevent-audit/findOneByDataType/:dataType`, (req, res) => aodIndexeventAuditCtrl.findOneByDataType(req, res));

router.get(`/api-${sys}/aod-indexevent-audit/findOneByBeforeValueString/:beforeValueString`, (req, res) => aodIndexeventAuditCtrl.findOneByBeforeValueString(req, res));

router.get(`/api-${sys}/aod-indexevent-audit/findOneByAfterValueString/:afterValueString`, (req, res) => aodIndexeventAuditCtrl.findOneByAfterValueString(req, res));

router.get(`/api-${sys}/aod-indexevent-audit/findOneByBeforeValueText/:beforeValueText`, (req, res) => aodIndexeventAuditCtrl.findOneByBeforeValueText(req, res));

router.get(`/api-${sys}/aod-indexevent-audit/findOneByAfterValueText/:afterValueText`, (req, res) => aodIndexeventAuditCtrl.findOneByAfterValueText(req, res));

router.get(`/api-${sys}/aod-indexevent-audit/findOneByDateCreated/:dateCreated`, (req, res) => aodIndexeventAuditCtrl.findOneByDateCreated(req, res));

router.get(`/api-${sys}/aod-indexevent-audit/findOneByParentId/:parentId`, (req, res) => aodIndexeventAuditCtrl.findOneByParentId(req, res));



router.post(`/api-${sys}/aod-indexevent-audit/updateAodIndexeventAuditById`, (req, res) => aodIndexeventAuditCtrl.updateAodIndexeventAuditById(req, res));

router.post(`/api-${sys}/aod-indexevent-audit/updateAodIndexeventAuditByCreatedBy`, (req, res) => aodIndexeventAuditCtrl.updateAodIndexeventAuditByCreatedBy(req, res));

router.post(`/api-${sys}/aod-indexevent-audit/updateAodIndexeventAuditByFieldName`, (req, res) => aodIndexeventAuditCtrl.updateAodIndexeventAuditByFieldName(req, res));

router.post(`/api-${sys}/aod-indexevent-audit/updateAodIndexeventAuditByDataType`, (req, res) => aodIndexeventAuditCtrl.updateAodIndexeventAuditByDataType(req, res));

router.post(`/api-${sys}/aod-indexevent-audit/updateAodIndexeventAuditByBeforeValueString`, (req, res) => aodIndexeventAuditCtrl.updateAodIndexeventAuditByBeforeValueString(req, res));

router.post(`/api-${sys}/aod-indexevent-audit/updateAodIndexeventAuditByAfterValueString`, (req, res) => aodIndexeventAuditCtrl.updateAodIndexeventAuditByAfterValueString(req, res));

router.post(`/api-${sys}/aod-indexevent-audit/updateAodIndexeventAuditByBeforeValueText`, (req, res) => aodIndexeventAuditCtrl.updateAodIndexeventAuditByBeforeValueText(req, res));

router.post(`/api-${sys}/aod-indexevent-audit/updateAodIndexeventAuditByAfterValueText`, (req, res) => aodIndexeventAuditCtrl.updateAodIndexeventAuditByAfterValueText(req, res));

router.post(`/api-${sys}/aod-indexevent-audit/updateAodIndexeventAuditByDateCreated`, (req, res) => aodIndexeventAuditCtrl.updateAodIndexeventAuditByDateCreated(req, res));

router.post(`/api-${sys}/aod-indexevent-audit/updateAodIndexeventAuditByParentId`, (req, res) => aodIndexeventAuditCtrl.updateAodIndexeventAuditByParentId(req, res));





router.get(`/api-${sys}/aod-indexevent-audit/`, (req, res) => aodIndexeventAuditCtrl.getAllAodIndexeventAudit(req, res));
router.post(`/api-${sys}/aod-indexevent-audit/`, (req, res) => aodIndexeventAuditCtrl.addAodIndexeventAudit(req, res));
router.get(`/api-${sys}/aod-indexevent-audit/:id`, (req, res) => aodIndexeventAuditCtrl.getAAodIndexeventAudit(req, res));
router.put(`/api-${sys}/aod-indexevent-audit/:id`, (req, res) => aodIndexeventAuditCtrl.updateAodIndexeventAudit(req, res));
router.delete(`/api-${sys}/aod-indexevent-audit/:id`, (req, res) => aodIndexeventAuditCtrl.deleteAodIndexeventAudit(req, res));

//</es-section>
module.exports = router;
