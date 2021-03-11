/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:55 GMT-0400 (Bolivia Time)
 * Time: 14:57:55
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:55 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:55
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const usersLastImportCtrl = require("../controllers/users_last_import.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/users-last-import/findOneById/:id`, (req, res) => usersLastImportCtrl.findOneById(req, res));

router.get(`/api-${sys}/users-last-import/findOneByDeleted/:deleted`, (req, res) => usersLastImportCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/users-last-import/findOneByImportModule/:importModule`, (req, res) => usersLastImportCtrl.findOneByImportModule(req, res));

router.get(`/api-${sys}/users-last-import/findOneByBeanType/:beanType`, (req, res) => usersLastImportCtrl.findOneByBeanType(req, res));

router.get(`/api-${sys}/users-last-import/findOneByAssignedUserId/:assignedUserId`, (req, res) => usersLastImportCtrl.findOneByAssignedUserId(req, res));

router.get(`/api-${sys}/users-last-import/findOneByBeanId/:beanId`, (req, res) => usersLastImportCtrl.findOneByBeanId(req, res));



router.post(`/api-${sys}/users-last-import/updateUserLastImportById`, (req, res) => usersLastImportCtrl.updateUserLastImportById(req, res));

router.post(`/api-${sys}/users-last-import/updateUserLastImportByDeleted`, (req, res) => usersLastImportCtrl.updateUserLastImportByDeleted(req, res));

router.post(`/api-${sys}/users-last-import/updateUserLastImportByImportModule`, (req, res) => usersLastImportCtrl.updateUserLastImportByImportModule(req, res));

router.post(`/api-${sys}/users-last-import/updateUserLastImportByBeanType`, (req, res) => usersLastImportCtrl.updateUserLastImportByBeanType(req, res));

router.post(`/api-${sys}/users-last-import/updateUserLastImportByAssignedUserId`, (req, res) => usersLastImportCtrl.updateUserLastImportByAssignedUserId(req, res));

router.post(`/api-${sys}/users-last-import/updateUserLastImportByBeanId`, (req, res) => usersLastImportCtrl.updateUserLastImportByBeanId(req, res));





router.get(`/api-${sys}/users-last-import/`, (req, res) => usersLastImportCtrl.getAllUsersLastImport(req, res));
router.post(`/api-${sys}/datatable/users-last-import/`, (req, res) => usersLastImportCtrl.getAllUsersLastImport(req, res));
router.post(`/api-${sys}/users-last-import/`, (req, res) => usersLastImportCtrl.addUserLastImport(req, res));
router.get(`/api-${sys}/users-last-import/:id`, (req, res) => usersLastImportCtrl.getAUserLastImport(req, res));
router.put(`/api-${sys}/users-last-import/:id`, (req, res) => usersLastImportCtrl.updateUserLastImport(req, res));
router.delete(`/api-${sys}/users-last-import/:id`, (req, res) => usersLastImportCtrl.deleteUserLastImport(req, res));

//</es-section>
module.exports = router;
