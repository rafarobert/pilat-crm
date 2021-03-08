/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:36:33 GMT-0400 (Bolivia Time)
 * Time: 15:36:33
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:36:33 GMT-0400 (Bolivia Time)
 * Last time updated: 15:36:33
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const meetingsUsersCtrl = require("../controllers/meetings_users.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/meetings-users/findOneById/:id`, (req, res) => meetingsUsersCtrl.findOneById(req, res));

router.get(`/api-${sys}/meetings-users/findOneByDeleted/:deleted`, (req, res) => meetingsUsersCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/meetings-users/findOneByMeetingId/:meetingId`, (req, res) => meetingsUsersCtrl.findOneByMeetingId(req, res));

router.get(`/api-${sys}/meetings-users/findOneByUserId/:userId`, (req, res) => meetingsUsersCtrl.findOneByUserId(req, res));

router.get(`/api-${sys}/meetings-users/findOneByRequired/:required`, (req, res) => meetingsUsersCtrl.findOneByRequired(req, res));

router.get(`/api-${sys}/meetings-users/findOneByAcceptStatus/:acceptStatus`, (req, res) => meetingsUsersCtrl.findOneByAcceptStatus(req, res));

router.get(`/api-${sys}/meetings-users/findOneByDateModified/:dateModified`, (req, res) => meetingsUsersCtrl.findOneByDateModified(req, res));



router.post(`/api-${sys}/meetings-users/updateMeetingUserById`, (req, res) => meetingsUsersCtrl.updateMeetingUserById(req, res));

router.post(`/api-${sys}/meetings-users/updateMeetingUserByDeleted`, (req, res) => meetingsUsersCtrl.updateMeetingUserByDeleted(req, res));

router.post(`/api-${sys}/meetings-users/updateMeetingUserByMeetingId`, (req, res) => meetingsUsersCtrl.updateMeetingUserByMeetingId(req, res));

router.post(`/api-${sys}/meetings-users/updateMeetingUserByUserId`, (req, res) => meetingsUsersCtrl.updateMeetingUserByUserId(req, res));

router.post(`/api-${sys}/meetings-users/updateMeetingUserByRequired`, (req, res) => meetingsUsersCtrl.updateMeetingUserByRequired(req, res));

router.post(`/api-${sys}/meetings-users/updateMeetingUserByAcceptStatus`, (req, res) => meetingsUsersCtrl.updateMeetingUserByAcceptStatus(req, res));

router.post(`/api-${sys}/meetings-users/updateMeetingUserByDateModified`, (req, res) => meetingsUsersCtrl.updateMeetingUserByDateModified(req, res));





router.get(`/api-${sys}/meetings-users/`, (req, res) => meetingsUsersCtrl.getAllMeetingsUsers(req, res));
router.post(`/api-${sys}/meetings-users/`, (req, res) => meetingsUsersCtrl.addMeetingUser(req, res));
router.get(`/api-${sys}/meetings-users/:id`, (req, res) => meetingsUsersCtrl.getAMeetingUser(req, res));
router.put(`/api-${sys}/meetings-users/:id`, (req, res) => meetingsUsersCtrl.updateMeetingUser(req, res));
router.delete(`/api-${sys}/meetings-users/:id`, (req, res) => meetingsUsersCtrl.deleteMeetingUser(req, res));

//</es-section>
module.exports = router;
