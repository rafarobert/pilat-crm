/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:41:54 GMT-0400 (Bolivia Time)
 * Time: 4:41:54
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:41:54 GMT-0400 (Bolivia Time)
 * Last time updated: 4:41:54
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const aodIndexeventCtrl = require("../controllers/aod_indexevent.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/aod-indexevent/findOneById/:id`, (req, res) => aodIndexeventCtrl.findOneById(req, res));

router.get(`/api-${sys}/aod-indexevent/findOneByDeleted/:deleted`, (req, res) => aodIndexeventCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/aod-indexevent/findOneBySuccess/:success`, (req, res) => aodIndexeventCtrl.findOneBySuccess(req, res));

router.get(`/api-${sys}/aod-indexevent/findOneByName/:name`, (req, res) => aodIndexeventCtrl.findOneByName(req, res));

router.get(`/api-${sys}/aod-indexevent/findOneByError/:error`, (req, res) => aodIndexeventCtrl.findOneByError(req, res));

router.get(`/api-${sys}/aod-indexevent/findOneByRecordModule/:recordModule`, (req, res) => aodIndexeventCtrl.findOneByRecordModule(req, res));

router.get(`/api-${sys}/aod-indexevent/findOneByDescription/:description`, (req, res) => aodIndexeventCtrl.findOneByDescription(req, res));

router.get(`/api-${sys}/aod-indexevent/findOneByDateEntered/:dateEntered`, (req, res) => aodIndexeventCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/aod-indexevent/findOneByDateModified/:dateModified`, (req, res) => aodIndexeventCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/aod-indexevent/findOneByModifiedUserId/:modifiedUserId`, (req, res) => aodIndexeventCtrl.findOneByModifiedUserId(req, res));

router.get(`/api-${sys}/aod-indexevent/findOneByCreatedBy/:createdBy`, (req, res) => aodIndexeventCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/aod-indexevent/findOneByAssignedUserId/:assignedUserId`, (req, res) => aodIndexeventCtrl.findOneByAssignedUserId(req, res));

router.get(`/api-${sys}/aod-indexevent/findOneByRecordId/:recordId`, (req, res) => aodIndexeventCtrl.findOneByRecordId(req, res));



router.post(`/api-${sys}/aod-indexevent/updateAodIndexeventById`, (req, res) => aodIndexeventCtrl.updateAodIndexeventById(req, res));

router.post(`/api-${sys}/aod-indexevent/updateAodIndexeventByDeleted`, (req, res) => aodIndexeventCtrl.updateAodIndexeventByDeleted(req, res));

router.post(`/api-${sys}/aod-indexevent/updateAodIndexeventBySuccess`, (req, res) => aodIndexeventCtrl.updateAodIndexeventBySuccess(req, res));

router.post(`/api-${sys}/aod-indexevent/updateAodIndexeventByName`, (req, res) => aodIndexeventCtrl.updateAodIndexeventByName(req, res));

router.post(`/api-${sys}/aod-indexevent/updateAodIndexeventByError`, (req, res) => aodIndexeventCtrl.updateAodIndexeventByError(req, res));

router.post(`/api-${sys}/aod-indexevent/updateAodIndexeventByRecordModule`, (req, res) => aodIndexeventCtrl.updateAodIndexeventByRecordModule(req, res));

router.post(`/api-${sys}/aod-indexevent/updateAodIndexeventByDescription`, (req, res) => aodIndexeventCtrl.updateAodIndexeventByDescription(req, res));

router.post(`/api-${sys}/aod-indexevent/updateAodIndexeventByDateEntered`, (req, res) => aodIndexeventCtrl.updateAodIndexeventByDateEntered(req, res));

router.post(`/api-${sys}/aod-indexevent/updateAodIndexeventByDateModified`, (req, res) => aodIndexeventCtrl.updateAodIndexeventByDateModified(req, res));

router.post(`/api-${sys}/aod-indexevent/updateAodIndexeventByModifiedUserId`, (req, res) => aodIndexeventCtrl.updateAodIndexeventByModifiedUserId(req, res));

router.post(`/api-${sys}/aod-indexevent/updateAodIndexeventByCreatedBy`, (req, res) => aodIndexeventCtrl.updateAodIndexeventByCreatedBy(req, res));

router.post(`/api-${sys}/aod-indexevent/updateAodIndexeventByAssignedUserId`, (req, res) => aodIndexeventCtrl.updateAodIndexeventByAssignedUserId(req, res));

router.post(`/api-${sys}/aod-indexevent/updateAodIndexeventByRecordId`, (req, res) => aodIndexeventCtrl.updateAodIndexeventByRecordId(req, res));





router.get(`/api-${sys}/aod-indexevent/`, (req, res) => aodIndexeventCtrl.getAllAodIndexevent(req, res));
router.post(`/api-${sys}/aod-indexevent/`, (req, res) => aodIndexeventCtrl.addAodIndexevent(req, res));
router.get(`/api-${sys}/aod-indexevent/:id`, (req, res) => aodIndexeventCtrl.getAAodIndexevent(req, res));
router.put(`/api-${sys}/aod-indexevent/:id`, (req, res) => aodIndexeventCtrl.updateAodIndexevent(req, res));
router.delete(`/api-${sys}/aod-indexevent/:id`, (req, res) => aodIndexeventCtrl.deleteAodIndexevent(req, res));

//</es-section>
module.exports = router;
