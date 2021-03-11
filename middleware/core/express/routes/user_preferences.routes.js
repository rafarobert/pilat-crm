/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:56 GMT-0400 (Bolivia Time)
 * Time: 14:57:56
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:56 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:56
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const userPreferencesCtrl = require("../controllers/user_preferences.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/user-preferences/findOneById/:id`, (req, res) => userPreferencesCtrl.findOneById(req, res));

router.get(`/api-${sys}/user-preferences/findOneByDeleted/:deleted`, (req, res) => userPreferencesCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/user-preferences/findOneByCategory/:category`, (req, res) => userPreferencesCtrl.findOneByCategory(req, res));

router.get(`/api-${sys}/user-preferences/findOneByContents/:contents`, (req, res) => userPreferencesCtrl.findOneByContents(req, res));

router.get(`/api-${sys}/user-preferences/findOneByDateEntered/:dateEntered`, (req, res) => userPreferencesCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/user-preferences/findOneByDateModified/:dateModified`, (req, res) => userPreferencesCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/user-preferences/findOneByAssignedUserId/:assignedUserId`, (req, res) => userPreferencesCtrl.findOneByAssignedUserId(req, res));



router.post(`/api-${sys}/user-preferences/updateUserPreferenceById`, (req, res) => userPreferencesCtrl.updateUserPreferenceById(req, res));

router.post(`/api-${sys}/user-preferences/updateUserPreferenceByDeleted`, (req, res) => userPreferencesCtrl.updateUserPreferenceByDeleted(req, res));

router.post(`/api-${sys}/user-preferences/updateUserPreferenceByCategory`, (req, res) => userPreferencesCtrl.updateUserPreferenceByCategory(req, res));

router.post(`/api-${sys}/user-preferences/updateUserPreferenceByContents`, (req, res) => userPreferencesCtrl.updateUserPreferenceByContents(req, res));

router.post(`/api-${sys}/user-preferences/updateUserPreferenceByDateEntered`, (req, res) => userPreferencesCtrl.updateUserPreferenceByDateEntered(req, res));

router.post(`/api-${sys}/user-preferences/updateUserPreferenceByDateModified`, (req, res) => userPreferencesCtrl.updateUserPreferenceByDateModified(req, res));

router.post(`/api-${sys}/user-preferences/updateUserPreferenceByAssignedUserId`, (req, res) => userPreferencesCtrl.updateUserPreferenceByAssignedUserId(req, res));





router.get(`/api-${sys}/user-preferences/`, (req, res) => userPreferencesCtrl.getAllUserPreferences(req, res));
router.post(`/api-${sys}/user-preferences/`, (req, res) => userPreferencesCtrl.addUserPreference(req, res));
router.get(`/api-${sys}/user-preferences/:id`, (req, res) => userPreferencesCtrl.getAUserPreference(req, res));
router.put(`/api-${sys}/user-preferences/:id`, (req, res) => userPreferencesCtrl.updateUserPreference(req, res));
router.delete(`/api-${sys}/user-preferences/:id`, (req, res) => userPreferencesCtrl.deleteUserPreference(req, res));

//</es-section>
module.exports = router;
