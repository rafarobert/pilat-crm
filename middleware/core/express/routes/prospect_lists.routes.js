/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:38:30 GMT-0400 (Bolivia Time)
 * Time: 18:38:30
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:38:30 GMT-0400 (Bolivia Time)
 * Last time updated: 18:38:30
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const prospectListsCtrl = require("../controllers/prospect_lists.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/prospect-lists/findOneById/:id`, (req, res) => prospectListsCtrl.findOneById(req, res));

router.get(`/api-${sys}/prospect-lists/findOneByDeleted/:deleted`, (req, res) => prospectListsCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/prospect-lists/findOneByName/:name`, (req, res) => prospectListsCtrl.findOneByName(req, res));

router.get(`/api-${sys}/prospect-lists/findOneByListType/:listType`, (req, res) => prospectListsCtrl.findOneByListType(req, res));

router.get(`/api-${sys}/prospect-lists/findOneByDomainName/:domainName`, (req, res) => prospectListsCtrl.findOneByDomainName(req, res));

router.get(`/api-${sys}/prospect-lists/findOneByDescription/:description`, (req, res) => prospectListsCtrl.findOneByDescription(req, res));

router.get(`/api-${sys}/prospect-lists/findOneByDateEntered/:dateEntered`, (req, res) => prospectListsCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/prospect-lists/findOneByDateModified/:dateModified`, (req, res) => prospectListsCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/prospect-lists/findOneByAssignedUserId/:assignedUserId`, (req, res) => prospectListsCtrl.findOneByAssignedUserId(req, res));

router.get(`/api-${sys}/prospect-lists/findOneByModifiedUserId/:modifiedUserId`, (req, res) => prospectListsCtrl.findOneByModifiedUserId(req, res));

router.get(`/api-${sys}/prospect-lists/findOneByCreatedBy/:createdBy`, (req, res) => prospectListsCtrl.findOneByCreatedBy(req, res));



router.post(`/api-${sys}/prospect-lists/updateProspectListById`, (req, res) => prospectListsCtrl.updateProspectListById(req, res));

router.post(`/api-${sys}/prospect-lists/updateProspectListByDeleted`, (req, res) => prospectListsCtrl.updateProspectListByDeleted(req, res));

router.post(`/api-${sys}/prospect-lists/updateProspectListByName`, (req, res) => prospectListsCtrl.updateProspectListByName(req, res));

router.post(`/api-${sys}/prospect-lists/updateProspectListByListType`, (req, res) => prospectListsCtrl.updateProspectListByListType(req, res));

router.post(`/api-${sys}/prospect-lists/updateProspectListByDomainName`, (req, res) => prospectListsCtrl.updateProspectListByDomainName(req, res));

router.post(`/api-${sys}/prospect-lists/updateProspectListByDescription`, (req, res) => prospectListsCtrl.updateProspectListByDescription(req, res));

router.post(`/api-${sys}/prospect-lists/updateProspectListByDateEntered`, (req, res) => prospectListsCtrl.updateProspectListByDateEntered(req, res));

router.post(`/api-${sys}/prospect-lists/updateProspectListByDateModified`, (req, res) => prospectListsCtrl.updateProspectListByDateModified(req, res));

router.post(`/api-${sys}/prospect-lists/updateProspectListByAssignedUserId`, (req, res) => prospectListsCtrl.updateProspectListByAssignedUserId(req, res));

router.post(`/api-${sys}/prospect-lists/updateProspectListByModifiedUserId`, (req, res) => prospectListsCtrl.updateProspectListByModifiedUserId(req, res));

router.post(`/api-${sys}/prospect-lists/updateProspectListByCreatedBy`, (req, res) => prospectListsCtrl.updateProspectListByCreatedBy(req, res));





router.get(`/api-${sys}/prospect-lists/`, (req, res) => prospectListsCtrl.getAllProspectLists(req, res));
router.post(`/api-${sys}/prospect-lists/`, (req, res) => prospectListsCtrl.addProspectList(req, res));
router.get(`/api-${sys}/prospect-lists/:id`, (req, res) => prospectListsCtrl.getAProspectList(req, res));
router.put(`/api-${sys}/prospect-lists/:id`, (req, res) => prospectListsCtrl.updateProspectList(req, res));
router.delete(`/api-${sys}/prospect-lists/:id`, (req, res) => prospectListsCtrl.deleteProspectList(req, res));

//</es-section>
module.exports = router;
