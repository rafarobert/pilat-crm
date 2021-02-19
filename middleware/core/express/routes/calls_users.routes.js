/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:42:36 GMT-0400 (Bolivia Time)
 * Time: 4:42:36
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:42:36 GMT-0400 (Bolivia Time)
 * Last time updated: 4:42:36
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const callsUsersCtrl = require("../controllers/calls_users.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/calls-users/findOneById/:id`, (req, res) => callsUsersCtrl.findOneById(req, res));

router.get(`/api-${sys}/calls-users/findOneByDeleted/:deleted`, (req, res) => callsUsersCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/calls-users/findOneByCallId/:callId`, (req, res) => callsUsersCtrl.findOneByCallId(req, res));

router.get(`/api-${sys}/calls-users/findOneByUserId/:userId`, (req, res) => callsUsersCtrl.findOneByUserId(req, res));

router.get(`/api-${sys}/calls-users/findOneByRequired/:required`, (req, res) => callsUsersCtrl.findOneByRequired(req, res));

router.get(`/api-${sys}/calls-users/findOneByAcceptStatus/:acceptStatus`, (req, res) => callsUsersCtrl.findOneByAcceptStatus(req, res));

router.get(`/api-${sys}/calls-users/findOneByDateModified/:dateModified`, (req, res) => callsUsersCtrl.findOneByDateModified(req, res));



router.post(`/api-${sys}/calls-users/updateCallUserById`, (req, res) => callsUsersCtrl.updateCallUserById(req, res));

router.post(`/api-${sys}/calls-users/updateCallUserByDeleted`, (req, res) => callsUsersCtrl.updateCallUserByDeleted(req, res));

router.post(`/api-${sys}/calls-users/updateCallUserByCallId`, (req, res) => callsUsersCtrl.updateCallUserByCallId(req, res));

router.post(`/api-${sys}/calls-users/updateCallUserByUserId`, (req, res) => callsUsersCtrl.updateCallUserByUserId(req, res));

router.post(`/api-${sys}/calls-users/updateCallUserByRequired`, (req, res) => callsUsersCtrl.updateCallUserByRequired(req, res));

router.post(`/api-${sys}/calls-users/updateCallUserByAcceptStatus`, (req, res) => callsUsersCtrl.updateCallUserByAcceptStatus(req, res));

router.post(`/api-${sys}/calls-users/updateCallUserByDateModified`, (req, res) => callsUsersCtrl.updateCallUserByDateModified(req, res));





router.get(`/api-${sys}/calls-users/`, (req, res) => callsUsersCtrl.getAllCallsUsers(req, res));
router.post(`/api-${sys}/calls-users/`, (req, res) => callsUsersCtrl.addCallUser(req, res));
router.get(`/api-${sys}/calls-users/:id`, (req, res) => callsUsersCtrl.getACallUser(req, res));
router.put(`/api-${sys}/calls-users/:id`, (req, res) => callsUsersCtrl.updateCallUser(req, res));
router.delete(`/api-${sys}/calls-users/:id`, (req, res) => callsUsersCtrl.deleteCallUser(req, res));

//</es-section>
module.exports = router;
