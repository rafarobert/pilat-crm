/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:21:54 GMT-0400 (Bolivia Time)
 * Time: 0:21:54
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:21:54 GMT-0400 (Bolivia Time)
 * Last time updated: 0:21:54
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const amProjecttemplatesCtrl = require("../controllers/am_projecttemplates.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/am-projecttemplates/findOneById/:id`, (req, res) => amProjecttemplatesCtrl.findOneById(req, res));

router.get(`/api-${sys}/am-projecttemplates/findOneByDeleted/:deleted`, (req, res) => amProjecttemplatesCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/am-projecttemplates/findOneByOverrideBusinessHours/:overrideBusinessHours`, (req, res) => amProjecttemplatesCtrl.findOneByOverrideBusinessHours(req, res));

router.get(`/api-${sys}/am-projecttemplates/findOneByName/:name`, (req, res) => amProjecttemplatesCtrl.findOneByName(req, res));

router.get(`/api-${sys}/am-projecttemplates/findOneByStatus/:status`, (req, res) => amProjecttemplatesCtrl.findOneByStatus(req, res));

router.get(`/api-${sys}/am-projecttemplates/findOneByPriority/:priority`, (req, res) => amProjecttemplatesCtrl.findOneByPriority(req, res));

router.get(`/api-${sys}/am-projecttemplates/findOneByDescription/:description`, (req, res) => amProjecttemplatesCtrl.findOneByDescription(req, res));

router.get(`/api-${sys}/am-projecttemplates/findOneByDateEntered/:dateEntered`, (req, res) => amProjecttemplatesCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/am-projecttemplates/findOneByDateModified/:dateModified`, (req, res) => amProjecttemplatesCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/am-projecttemplates/findOneByModifiedUserId/:modifiedUserId`, (req, res) => amProjecttemplatesCtrl.findOneByModifiedUserId(req, res));

router.get(`/api-${sys}/am-projecttemplates/findOneByCreatedBy/:createdBy`, (req, res) => amProjecttemplatesCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/am-projecttemplates/findOneByAssignedUserId/:assignedUserId`, (req, res) => amProjecttemplatesCtrl.findOneByAssignedUserId(req, res));



router.post(`/api-${sys}/am-projecttemplates/updateAmProjecttemplateById`, (req, res) => amProjecttemplatesCtrl.updateAmProjecttemplateById(req, res));

router.post(`/api-${sys}/am-projecttemplates/updateAmProjecttemplateByDeleted`, (req, res) => amProjecttemplatesCtrl.updateAmProjecttemplateByDeleted(req, res));

router.post(`/api-${sys}/am-projecttemplates/updateAmProjecttemplateByOverrideBusinessHours`, (req, res) => amProjecttemplatesCtrl.updateAmProjecttemplateByOverrideBusinessHours(req, res));

router.post(`/api-${sys}/am-projecttemplates/updateAmProjecttemplateByName`, (req, res) => amProjecttemplatesCtrl.updateAmProjecttemplateByName(req, res));

router.post(`/api-${sys}/am-projecttemplates/updateAmProjecttemplateByStatus`, (req, res) => amProjecttemplatesCtrl.updateAmProjecttemplateByStatus(req, res));

router.post(`/api-${sys}/am-projecttemplates/updateAmProjecttemplateByPriority`, (req, res) => amProjecttemplatesCtrl.updateAmProjecttemplateByPriority(req, res));

router.post(`/api-${sys}/am-projecttemplates/updateAmProjecttemplateByDescription`, (req, res) => amProjecttemplatesCtrl.updateAmProjecttemplateByDescription(req, res));

router.post(`/api-${sys}/am-projecttemplates/updateAmProjecttemplateByDateEntered`, (req, res) => amProjecttemplatesCtrl.updateAmProjecttemplateByDateEntered(req, res));

router.post(`/api-${sys}/am-projecttemplates/updateAmProjecttemplateByDateModified`, (req, res) => amProjecttemplatesCtrl.updateAmProjecttemplateByDateModified(req, res));

router.post(`/api-${sys}/am-projecttemplates/updateAmProjecttemplateByModifiedUserId`, (req, res) => amProjecttemplatesCtrl.updateAmProjecttemplateByModifiedUserId(req, res));

router.post(`/api-${sys}/am-projecttemplates/updateAmProjecttemplateByCreatedBy`, (req, res) => amProjecttemplatesCtrl.updateAmProjecttemplateByCreatedBy(req, res));

router.post(`/api-${sys}/am-projecttemplates/updateAmProjecttemplateByAssignedUserId`, (req, res) => amProjecttemplatesCtrl.updateAmProjecttemplateByAssignedUserId(req, res));





router.get(`/api-${sys}/am-projecttemplates/`, (req, res) => amProjecttemplatesCtrl.getAllAmProjecttemplates(req, res));
router.post(`/api-${sys}/am-projecttemplates/`, (req, res) => amProjecttemplatesCtrl.addAmProjecttemplate(req, res));
router.get(`/api-${sys}/am-projecttemplates/:id`, (req, res) => amProjecttemplatesCtrl.getAAmProjecttemplate(req, res));
router.put(`/api-${sys}/am-projecttemplates/:id`, (req, res) => amProjecttemplatesCtrl.updateAmProjecttemplate(req, res));
router.delete(`/api-${sys}/am-projecttemplates/:id`, (req, res) => amProjecttemplatesCtrl.deleteAmProjecttemplate(req, res));

//</es-section>
module.exports = router;
