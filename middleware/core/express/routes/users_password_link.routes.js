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
const usersPasswordLinkCtrl = require("../controllers/users_password_link.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/users-password-link/findOneById/:id`, (req, res) => usersPasswordLinkCtrl.findOneById(req, res));

router.get(`/api-${sys}/users-password-link/findOneByDeleted/:deleted`, (req, res) => usersPasswordLinkCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/users-password-link/findOneByUsername/:username`, (req, res) => usersPasswordLinkCtrl.findOneByUsername(req, res));

router.get(`/api-${sys}/users-password-link/findOneByDateGenerated/:dateGenerated`, (req, res) => usersPasswordLinkCtrl.findOneByDateGenerated(req, res));



router.post(`/api-${sys}/users-password-link/updateUserPasswordLinkById`, (req, res) => usersPasswordLinkCtrl.updateUserPasswordLinkById(req, res));

router.post(`/api-${sys}/users-password-link/updateUserPasswordLinkByDeleted`, (req, res) => usersPasswordLinkCtrl.updateUserPasswordLinkByDeleted(req, res));

router.post(`/api-${sys}/users-password-link/updateUserPasswordLinkByUsername`, (req, res) => usersPasswordLinkCtrl.updateUserPasswordLinkByUsername(req, res));

router.post(`/api-${sys}/users-password-link/updateUserPasswordLinkByDateGenerated`, (req, res) => usersPasswordLinkCtrl.updateUserPasswordLinkByDateGenerated(req, res));





router.get(`/api-${sys}/users-password-link/`, (req, res) => usersPasswordLinkCtrl.getAllUsersPasswordLink(req, res));
router.post(`/api-${sys}/users-password-link/`, (req, res) => usersPasswordLinkCtrl.addUserPasswordLink(req, res));
router.get(`/api-${sys}/users-password-link/:id`, (req, res) => usersPasswordLinkCtrl.getAUserPasswordLink(req, res));
router.put(`/api-${sys}/users-password-link/:id`, (req, res) => usersPasswordLinkCtrl.updateUserPasswordLink(req, res));
router.delete(`/api-${sys}/users-password-link/:id`, (req, res) => usersPasswordLinkCtrl.deleteUserPasswordLink(req, res));

//</es-section>
module.exports = router;
