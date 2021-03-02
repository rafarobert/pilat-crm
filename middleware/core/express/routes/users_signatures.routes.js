/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:01:40 GMT-0400 (Bolivia Time)
 * Time: 14:1:40
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:01:40 GMT-0400 (Bolivia Time)
 * Last time updated: 14:1:40
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const usersSignaturesCtrl = require("../controllers/users_signatures.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/users-signatures/findOneById/:id`, (req, res) => usersSignaturesCtrl.findOneById(req, res));

router.get(`/api-${sys}/users-signatures/findOneByDeleted/:deleted`, (req, res) => usersSignaturesCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/users-signatures/findOneByUserId/:userId`, (req, res) => usersSignaturesCtrl.findOneByUserId(req, res));

router.get(`/api-${sys}/users-signatures/findOneByName/:name`, (req, res) => usersSignaturesCtrl.findOneByName(req, res));

router.get(`/api-${sys}/users-signatures/findOneBySignature/:signature`, (req, res) => usersSignaturesCtrl.findOneBySignature(req, res));

router.get(`/api-${sys}/users-signatures/findOneBySignatureHtml/:signatureHtml`, (req, res) => usersSignaturesCtrl.findOneBySignatureHtml(req, res));

router.get(`/api-${sys}/users-signatures/findOneByDateEntered/:dateEntered`, (req, res) => usersSignaturesCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/users-signatures/findOneByDateModified/:dateModified`, (req, res) => usersSignaturesCtrl.findOneByDateModified(req, res));



router.post(`/api-${sys}/users-signatures/updateUserSignatureById`, (req, res) => usersSignaturesCtrl.updateUserSignatureById(req, res));

router.post(`/api-${sys}/users-signatures/updateUserSignatureByDeleted`, (req, res) => usersSignaturesCtrl.updateUserSignatureByDeleted(req, res));

router.post(`/api-${sys}/users-signatures/updateUserSignatureByUserId`, (req, res) => usersSignaturesCtrl.updateUserSignatureByUserId(req, res));

router.post(`/api-${sys}/users-signatures/updateUserSignatureByName`, (req, res) => usersSignaturesCtrl.updateUserSignatureByName(req, res));

router.post(`/api-${sys}/users-signatures/updateUserSignatureBySignature`, (req, res) => usersSignaturesCtrl.updateUserSignatureBySignature(req, res));

router.post(`/api-${sys}/users-signatures/updateUserSignatureBySignatureHtml`, (req, res) => usersSignaturesCtrl.updateUserSignatureBySignatureHtml(req, res));

router.post(`/api-${sys}/users-signatures/updateUserSignatureByDateEntered`, (req, res) => usersSignaturesCtrl.updateUserSignatureByDateEntered(req, res));

router.post(`/api-${sys}/users-signatures/updateUserSignatureByDateModified`, (req, res) => usersSignaturesCtrl.updateUserSignatureByDateModified(req, res));





router.get(`/api-${sys}/users-signatures/`, (req, res) => usersSignaturesCtrl.getAllUsersSignatures(req, res));
router.post(`/api-${sys}/users-signatures/`, (req, res) => usersSignaturesCtrl.addUserSignature(req, res));
router.get(`/api-${sys}/users-signatures/:id`, (req, res) => usersSignaturesCtrl.getAUserSignature(req, res));
router.put(`/api-${sys}/users-signatures/:id`, (req, res) => usersSignaturesCtrl.updateUserSignature(req, res));
router.delete(`/api-${sys}/users-signatures/:id`, (req, res) => usersSignaturesCtrl.deleteUserSignature(req, res));

//</es-section>
module.exports = router;
