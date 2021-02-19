/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:38:38 GMT-0400 (Bolivia Time)
 * Time: 18:38:38
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:38:38 GMT-0400 (Bolivia Time)
 * Last time updated: 18:38:38
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const savedSearchCtrl = require("../controllers/saved_search.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/saved-search/findOneById/:id`, (req, res) => savedSearchCtrl.findOneById(req, res));

router.get(`/api-${sys}/saved-search/findOneByDeleted/:deleted`, (req, res) => savedSearchCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/saved-search/findOneByName/:name`, (req, res) => savedSearchCtrl.findOneByName(req, res));

router.get(`/api-${sys}/saved-search/findOneBySearchModule/:searchModule`, (req, res) => savedSearchCtrl.findOneBySearchModule(req, res));

router.get(`/api-${sys}/saved-search/findOneByContents/:contents`, (req, res) => savedSearchCtrl.findOneByContents(req, res));

router.get(`/api-${sys}/saved-search/findOneByDescription/:description`, (req, res) => savedSearchCtrl.findOneByDescription(req, res));

router.get(`/api-${sys}/saved-search/findOneByDateEntered/:dateEntered`, (req, res) => savedSearchCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/saved-search/findOneByDateModified/:dateModified`, (req, res) => savedSearchCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/saved-search/findOneByAssignedUserId/:assignedUserId`, (req, res) => savedSearchCtrl.findOneByAssignedUserId(req, res));



router.post(`/api-${sys}/saved-search/updateSavedSearchById`, (req, res) => savedSearchCtrl.updateSavedSearchById(req, res));

router.post(`/api-${sys}/saved-search/updateSavedSearchByDeleted`, (req, res) => savedSearchCtrl.updateSavedSearchByDeleted(req, res));

router.post(`/api-${sys}/saved-search/updateSavedSearchByName`, (req, res) => savedSearchCtrl.updateSavedSearchByName(req, res));

router.post(`/api-${sys}/saved-search/updateSavedSearchBySearchModule`, (req, res) => savedSearchCtrl.updateSavedSearchBySearchModule(req, res));

router.post(`/api-${sys}/saved-search/updateSavedSearchByContents`, (req, res) => savedSearchCtrl.updateSavedSearchByContents(req, res));

router.post(`/api-${sys}/saved-search/updateSavedSearchByDescription`, (req, res) => savedSearchCtrl.updateSavedSearchByDescription(req, res));

router.post(`/api-${sys}/saved-search/updateSavedSearchByDateEntered`, (req, res) => savedSearchCtrl.updateSavedSearchByDateEntered(req, res));

router.post(`/api-${sys}/saved-search/updateSavedSearchByDateModified`, (req, res) => savedSearchCtrl.updateSavedSearchByDateModified(req, res));

router.post(`/api-${sys}/saved-search/updateSavedSearchByAssignedUserId`, (req, res) => savedSearchCtrl.updateSavedSearchByAssignedUserId(req, res));





router.get(`/api-${sys}/saved-search/`, (req, res) => savedSearchCtrl.getAllSavedSearch(req, res));
router.post(`/api-${sys}/saved-search/`, (req, res) => savedSearchCtrl.addSavedSearch(req, res));
router.get(`/api-${sys}/saved-search/:id`, (req, res) => savedSearchCtrl.getASavedSearch(req, res));
router.put(`/api-${sys}/saved-search/:id`, (req, res) => savedSearchCtrl.updateSavedSearch(req, res));
router.delete(`/api-${sys}/saved-search/:id`, (req, res) => savedSearchCtrl.deleteSavedSearch(req, res));

//</es-section>
module.exports = router;
