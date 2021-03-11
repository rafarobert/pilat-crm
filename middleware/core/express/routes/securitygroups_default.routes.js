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
const securitygroupsDefaultCtrl = require("../controllers/securitygroups_default.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/securitygroups-default/findOneById/:id`, (req, res) => securitygroupsDefaultCtrl.findOneById(req, res));

router.get(`/api-${sys}/securitygroups-default/findOneByDeleted/:deleted`, (req, res) => securitygroupsDefaultCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/securitygroups-default/findOneByModule/:module`, (req, res) => securitygroupsDefaultCtrl.findOneByModule(req, res));

router.get(`/api-${sys}/securitygroups-default/findOneByDateModified/:dateModified`, (req, res) => securitygroupsDefaultCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/securitygroups-default/findOneBySecuritygroupId/:securitygroupId`, (req, res) => securitygroupsDefaultCtrl.findOneBySecuritygroupId(req, res));



router.post(`/api-${sys}/securitygroups-default/updateSecuritygroupDefaultById`, (req, res) => securitygroupsDefaultCtrl.updateSecuritygroupDefaultById(req, res));

router.post(`/api-${sys}/securitygroups-default/updateSecuritygroupDefaultByDeleted`, (req, res) => securitygroupsDefaultCtrl.updateSecuritygroupDefaultByDeleted(req, res));

router.post(`/api-${sys}/securitygroups-default/updateSecuritygroupDefaultByModule`, (req, res) => securitygroupsDefaultCtrl.updateSecuritygroupDefaultByModule(req, res));

router.post(`/api-${sys}/securitygroups-default/updateSecuritygroupDefaultByDateModified`, (req, res) => securitygroupsDefaultCtrl.updateSecuritygroupDefaultByDateModified(req, res));

router.post(`/api-${sys}/securitygroups-default/updateSecuritygroupDefaultBySecuritygroupId`, (req, res) => securitygroupsDefaultCtrl.updateSecuritygroupDefaultBySecuritygroupId(req, res));





router.get(`/api-${sys}/securitygroups-default/`, (req, res) => securitygroupsDefaultCtrl.getAllSecuritygroupsDefault(req, res));
router.post(`/api-${sys}/datatable/securitygroups-default/`, (req, res) => securitygroupsDefaultCtrl.getAllSecuritygroupsDefault(req, res));
router.post(`/api-${sys}/securitygroups-default/`, (req, res) => securitygroupsDefaultCtrl.addSecuritygroupDefault(req, res));
router.get(`/api-${sys}/securitygroups-default/:id`, (req, res) => securitygroupsDefaultCtrl.getASecuritygroupDefault(req, res));
router.put(`/api-${sys}/securitygroups-default/:id`, (req, res) => securitygroupsDefaultCtrl.updateSecuritygroupDefault(req, res));
router.delete(`/api-${sys}/securitygroups-default/:id`, (req, res) => securitygroupsDefaultCtrl.deleteSecuritygroupDefault(req, res));

//</es-section>
module.exports = router;
