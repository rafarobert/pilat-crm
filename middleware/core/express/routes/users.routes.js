/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:38:59 GMT-0400 (Bolivia Time)
 * Time: 18:38:59
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:38:59 GMT-0400 (Bolivia Time)
 * Last time updated: 18:38:59
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const usersCtrl = require("../controllers/users.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/users/findOneById/:id`, (req, res) => usersCtrl.findOneById(req, res));

router.get(`/api-${sys}/users/findOneBySystemGeneratedPassword/:systemGeneratedPassword`, (req, res) => usersCtrl.findOneBySystemGeneratedPassword(req, res));

router.get(`/api-${sys}/users/findOneBySugarLogin/:sugarLogin`, (req, res) => usersCtrl.findOneBySugarLogin(req, res));

router.get(`/api-${sys}/users/findOneByIsAdmin/:isAdmin`, (req, res) => usersCtrl.findOneByIsAdmin(req, res));

router.get(`/api-${sys}/users/findOneByExternalAuthOnly/:externalAuthOnly`, (req, res) => usersCtrl.findOneByExternalAuthOnly(req, res));

router.get(`/api-${sys}/users/findOneByReceiveNotifications/:receiveNotifications`, (req, res) => usersCtrl.findOneByReceiveNotifications(req, res));

router.get(`/api-${sys}/users/findOneByDeleted/:deleted`, (req, res) => usersCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/users/findOneByPortalOnly/:portalOnly`, (req, res) => usersCtrl.findOneByPortalOnly(req, res));

router.get(`/api-${sys}/users/findOneByShowOnEmployees/:showOnEmployees`, (req, res) => usersCtrl.findOneByShowOnEmployees(req, res));

router.get(`/api-${sys}/users/findOneByIsGroup/:isGroup`, (req, res) => usersCtrl.findOneByIsGroup(req, res));

router.get(`/api-${sys}/users/findOneByFactorAuth/:factorAuth`, (req, res) => usersCtrl.findOneByFactorAuth(req, res));

router.get(`/api-${sys}/users/findOneByUserName/:userName`, (req, res) => usersCtrl.findOneByUserName(req, res));

router.get(`/api-${sys}/users/findOneByUserHash/:userHash`, (req, res) => usersCtrl.findOneByUserHash(req, res));

router.get(`/api-${sys}/users/findOneByAuthenticateId/:authenticateId`, (req, res) => usersCtrl.findOneByAuthenticateId(req, res));

router.get(`/api-${sys}/users/findOneByFirstName/:firstName`, (req, res) => usersCtrl.findOneByFirstName(req, res));

router.get(`/api-${sys}/users/findOneByLastName/:lastName`, (req, res) => usersCtrl.findOneByLastName(req, res));

router.get(`/api-${sys}/users/findOneByTitle/:title`, (req, res) => usersCtrl.findOneByTitle(req, res));

router.get(`/api-${sys}/users/findOneByPhoto/:photo`, (req, res) => usersCtrl.findOneByPhoto(req, res));

router.get(`/api-${sys}/users/findOneByDepartment/:department`, (req, res) => usersCtrl.findOneByDepartment(req, res));

router.get(`/api-${sys}/users/findOneByPhoneHome/:phoneHome`, (req, res) => usersCtrl.findOneByPhoneHome(req, res));

router.get(`/api-${sys}/users/findOneByPhoneMobile/:phoneMobile`, (req, res) => usersCtrl.findOneByPhoneMobile(req, res));

router.get(`/api-${sys}/users/findOneByPhoneWork/:phoneWork`, (req, res) => usersCtrl.findOneByPhoneWork(req, res));

router.get(`/api-${sys}/users/findOneByPhoneOther/:phoneOther`, (req, res) => usersCtrl.findOneByPhoneOther(req, res));

router.get(`/api-${sys}/users/findOneByPhoneFax/:phoneFax`, (req, res) => usersCtrl.findOneByPhoneFax(req, res));

router.get(`/api-${sys}/users/findOneByStatus/:status`, (req, res) => usersCtrl.findOneByStatus(req, res));

router.get(`/api-${sys}/users/findOneByAddressStreet/:addressStreet`, (req, res) => usersCtrl.findOneByAddressStreet(req, res));

router.get(`/api-${sys}/users/findOneByAddressCity/:addressCity`, (req, res) => usersCtrl.findOneByAddressCity(req, res));

router.get(`/api-${sys}/users/findOneByAddressState/:addressState`, (req, res) => usersCtrl.findOneByAddressState(req, res));

router.get(`/api-${sys}/users/findOneByAddressCountry/:addressCountry`, (req, res) => usersCtrl.findOneByAddressCountry(req, res));

router.get(`/api-${sys}/users/findOneByAddressPostalcode/:addressPostalcode`, (req, res) => usersCtrl.findOneByAddressPostalcode(req, res));

router.get(`/api-${sys}/users/findOneByEmployeeStatus/:employeeStatus`, (req, res) => usersCtrl.findOneByEmployeeStatus(req, res));

router.get(`/api-${sys}/users/findOneByMessengerId/:messengerId`, (req, res) => usersCtrl.findOneByMessengerId(req, res));

router.get(`/api-${sys}/users/findOneByMessengerType/:messengerType`, (req, res) => usersCtrl.findOneByMessengerType(req, res));

router.get(`/api-${sys}/users/findOneByFactorAuthInterface/:factorAuthInterface`, (req, res) => usersCtrl.findOneByFactorAuthInterface(req, res));

router.get(`/api-${sys}/users/findOneByDescription/:description`, (req, res) => usersCtrl.findOneByDescription(req, res));

router.get(`/api-${sys}/users/findOneByPwdLastChanged/:pwdLastChanged`, (req, res) => usersCtrl.findOneByPwdLastChanged(req, res));

router.get(`/api-${sys}/users/findOneByDateEntered/:dateEntered`, (req, res) => usersCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/users/findOneByDateModified/:dateModified`, (req, res) => usersCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/users/findOneByModifiedUserId/:modifiedUserId`, (req, res) => usersCtrl.findOneByModifiedUserId(req, res));

router.get(`/api-${sys}/users/findOneByCreatedBy/:createdBy`, (req, res) => usersCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/users/findOneByReportsToId/:reportsToId`, (req, res) => usersCtrl.findOneByReportsToId(req, res));



router.post(`/api-${sys}/users/updateUserById`, (req, res) => usersCtrl.updateUserById(req, res));

router.post(`/api-${sys}/users/updateUserBySystemGeneratedPassword`, (req, res) => usersCtrl.updateUserBySystemGeneratedPassword(req, res));

router.post(`/api-${sys}/users/updateUserBySugarLogin`, (req, res) => usersCtrl.updateUserBySugarLogin(req, res));

router.post(`/api-${sys}/users/updateUserByIsAdmin`, (req, res) => usersCtrl.updateUserByIsAdmin(req, res));

router.post(`/api-${sys}/users/updateUserByExternalAuthOnly`, (req, res) => usersCtrl.updateUserByExternalAuthOnly(req, res));

router.post(`/api-${sys}/users/updateUserByReceiveNotifications`, (req, res) => usersCtrl.updateUserByReceiveNotifications(req, res));

router.post(`/api-${sys}/users/updateUserByDeleted`, (req, res) => usersCtrl.updateUserByDeleted(req, res));

router.post(`/api-${sys}/users/updateUserByPortalOnly`, (req, res) => usersCtrl.updateUserByPortalOnly(req, res));

router.post(`/api-${sys}/users/updateUserByShowOnEmployees`, (req, res) => usersCtrl.updateUserByShowOnEmployees(req, res));

router.post(`/api-${sys}/users/updateUserByIsGroup`, (req, res) => usersCtrl.updateUserByIsGroup(req, res));

router.post(`/api-${sys}/users/updateUserByFactorAuth`, (req, res) => usersCtrl.updateUserByFactorAuth(req, res));

router.post(`/api-${sys}/users/updateUserByUserName`, (req, res) => usersCtrl.updateUserByUserName(req, res));

router.post(`/api-${sys}/users/updateUserByUserHash`, (req, res) => usersCtrl.updateUserByUserHash(req, res));

router.post(`/api-${sys}/users/updateUserByAuthenticateId`, (req, res) => usersCtrl.updateUserByAuthenticateId(req, res));

router.post(`/api-${sys}/users/updateUserByFirstName`, (req, res) => usersCtrl.updateUserByFirstName(req, res));

router.post(`/api-${sys}/users/updateUserByLastName`, (req, res) => usersCtrl.updateUserByLastName(req, res));

router.post(`/api-${sys}/users/updateUserByTitle`, (req, res) => usersCtrl.updateUserByTitle(req, res));

router.post(`/api-${sys}/users/updateUserByPhoto`, (req, res) => usersCtrl.updateUserByPhoto(req, res));

router.post(`/api-${sys}/users/updateUserByDepartment`, (req, res) => usersCtrl.updateUserByDepartment(req, res));

router.post(`/api-${sys}/users/updateUserByPhoneHome`, (req, res) => usersCtrl.updateUserByPhoneHome(req, res));

router.post(`/api-${sys}/users/updateUserByPhoneMobile`, (req, res) => usersCtrl.updateUserByPhoneMobile(req, res));

router.post(`/api-${sys}/users/updateUserByPhoneWork`, (req, res) => usersCtrl.updateUserByPhoneWork(req, res));

router.post(`/api-${sys}/users/updateUserByPhoneOther`, (req, res) => usersCtrl.updateUserByPhoneOther(req, res));

router.post(`/api-${sys}/users/updateUserByPhoneFax`, (req, res) => usersCtrl.updateUserByPhoneFax(req, res));

router.post(`/api-${sys}/users/updateUserByStatus`, (req, res) => usersCtrl.updateUserByStatus(req, res));

router.post(`/api-${sys}/users/updateUserByAddressStreet`, (req, res) => usersCtrl.updateUserByAddressStreet(req, res));

router.post(`/api-${sys}/users/updateUserByAddressCity`, (req, res) => usersCtrl.updateUserByAddressCity(req, res));

router.post(`/api-${sys}/users/updateUserByAddressState`, (req, res) => usersCtrl.updateUserByAddressState(req, res));

router.post(`/api-${sys}/users/updateUserByAddressCountry`, (req, res) => usersCtrl.updateUserByAddressCountry(req, res));

router.post(`/api-${sys}/users/updateUserByAddressPostalcode`, (req, res) => usersCtrl.updateUserByAddressPostalcode(req, res));

router.post(`/api-${sys}/users/updateUserByEmployeeStatus`, (req, res) => usersCtrl.updateUserByEmployeeStatus(req, res));

router.post(`/api-${sys}/users/updateUserByMessengerId`, (req, res) => usersCtrl.updateUserByMessengerId(req, res));

router.post(`/api-${sys}/users/updateUserByMessengerType`, (req, res) => usersCtrl.updateUserByMessengerType(req, res));

router.post(`/api-${sys}/users/updateUserByFactorAuthInterface`, (req, res) => usersCtrl.updateUserByFactorAuthInterface(req, res));

router.post(`/api-${sys}/users/updateUserByDescription`, (req, res) => usersCtrl.updateUserByDescription(req, res));

router.post(`/api-${sys}/users/updateUserByPwdLastChanged`, (req, res) => usersCtrl.updateUserByPwdLastChanged(req, res));

router.post(`/api-${sys}/users/updateUserByDateEntered`, (req, res) => usersCtrl.updateUserByDateEntered(req, res));

router.post(`/api-${sys}/users/updateUserByDateModified`, (req, res) => usersCtrl.updateUserByDateModified(req, res));

router.post(`/api-${sys}/users/updateUserByModifiedUserId`, (req, res) => usersCtrl.updateUserByModifiedUserId(req, res));

router.post(`/api-${sys}/users/updateUserByCreatedBy`, (req, res) => usersCtrl.updateUserByCreatedBy(req, res));

router.post(`/api-${sys}/users/updateUserByReportsToId`, (req, res) => usersCtrl.updateUserByReportsToId(req, res));





router.get(`/api-${sys}/users/`, (req, res) => usersCtrl.getAllUsers(req, res));
router.post(`/api-${sys}/users/`, (req, res) => usersCtrl.addUser(req, res));
router.get(`/api-${sys}/users/:id`, (req, res) => usersCtrl.getAUser(req, res));
router.put(`/api-${sys}/users/:id`, (req, res) => usersCtrl.updateUser(req, res));
router.delete(`/api-${sys}/users/:id`, (req, res) => usersCtrl.deleteUser(req, res));

//</es-section>
module.exports = router;
