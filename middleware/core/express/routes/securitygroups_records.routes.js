/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:43 GMT-0400 (Bolivia Time)
 * Time: 14:57:43
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:43 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:43
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const securitygroupsRecordsCtrl = require("../controllers/securitygroups_records.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/securitygroups-records/findOneById/:id`, (req, res) => securitygroupsRecordsCtrl.findOneById(req, res));

router.get(`/api-${sys}/securitygroups-records/findOneByDeleted/:deleted`, (req, res) => securitygroupsRecordsCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/securitygroups-records/findOneByDateModified/:dateModified`, (req, res) => securitygroupsRecordsCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/securitygroups-records/findOneBySecuritygroupId/:securitygroupId`, (req, res) => securitygroupsRecordsCtrl.findOneBySecuritygroupId(req, res));

router.get(`/api-${sys}/securitygroups-records/findOneByRecordId/:recordId`, (req, res) => securitygroupsRecordsCtrl.findOneByRecordId(req, res));

router.get(`/api-${sys}/securitygroups-records/findOneByModule/:module`, (req, res) => securitygroupsRecordsCtrl.findOneByModule(req, res));

router.get(`/api-${sys}/securitygroups-records/findOneByModifiedUserId/:modifiedUserId`, (req, res) => securitygroupsRecordsCtrl.findOneByModifiedUserId(req, res));

router.get(`/api-${sys}/securitygroups-records/findOneByCreatedBy/:createdBy`, (req, res) => securitygroupsRecordsCtrl.findOneByCreatedBy(req, res));



router.post(`/api-${sys}/securitygroups-records/updateSecuritygroupRecordById`, (req, res) => securitygroupsRecordsCtrl.updateSecuritygroupRecordById(req, res));

router.post(`/api-${sys}/securitygroups-records/updateSecuritygroupRecordByDeleted`, (req, res) => securitygroupsRecordsCtrl.updateSecuritygroupRecordByDeleted(req, res));

router.post(`/api-${sys}/securitygroups-records/updateSecuritygroupRecordByDateModified`, (req, res) => securitygroupsRecordsCtrl.updateSecuritygroupRecordByDateModified(req, res));

router.post(`/api-${sys}/securitygroups-records/updateSecuritygroupRecordBySecuritygroupId`, (req, res) => securitygroupsRecordsCtrl.updateSecuritygroupRecordBySecuritygroupId(req, res));

router.post(`/api-${sys}/securitygroups-records/updateSecuritygroupRecordByRecordId`, (req, res) => securitygroupsRecordsCtrl.updateSecuritygroupRecordByRecordId(req, res));

router.post(`/api-${sys}/securitygroups-records/updateSecuritygroupRecordByModule`, (req, res) => securitygroupsRecordsCtrl.updateSecuritygroupRecordByModule(req, res));

router.post(`/api-${sys}/securitygroups-records/updateSecuritygroupRecordByModifiedUserId`, (req, res) => securitygroupsRecordsCtrl.updateSecuritygroupRecordByModifiedUserId(req, res));

router.post(`/api-${sys}/securitygroups-records/updateSecuritygroupRecordByCreatedBy`, (req, res) => securitygroupsRecordsCtrl.updateSecuritygroupRecordByCreatedBy(req, res));





router.get(`/api-${sys}/securitygroups-records/`, (req, res) => securitygroupsRecordsCtrl.getAllSecuritygroupsRecords(req, res));
router.post(`/api-${sys}/securitygroups-records/`, (req, res) => securitygroupsRecordsCtrl.addSecuritygroupRecord(req, res));
router.get(`/api-${sys}/securitygroups-records/:id`, (req, res) => securitygroupsRecordsCtrl.getASecuritygroupRecord(req, res));
router.put(`/api-${sys}/securitygroups-records/:id`, (req, res) => securitygroupsRecordsCtrl.updateSecuritygroupRecord(req, res));
router.delete(`/api-${sys}/securitygroups-records/:id`, (req, res) => securitygroupsRecordsCtrl.deleteSecuritygroupRecord(req, res));

//</es-section>
module.exports = router;
