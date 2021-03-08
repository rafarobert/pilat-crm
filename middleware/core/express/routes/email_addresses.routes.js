/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:36:01 GMT-0400 (Bolivia Time)
 * Time: 15:36:1
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:36:01 GMT-0400 (Bolivia Time)
 * Last time updated: 15:36:1
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const emailAddressesCtrl = require("../controllers/email_addresses.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/email-addresses/findOneById/:id`, (req, res) => emailAddressesCtrl.findOneById(req, res));

router.get(`/api-${sys}/email-addresses/findOneByInvalidEmail/:invalidEmail`, (req, res) => emailAddressesCtrl.findOneByInvalidEmail(req, res));

router.get(`/api-${sys}/email-addresses/findOneByOptOut/:optOut`, (req, res) => emailAddressesCtrl.findOneByOptOut(req, res));

router.get(`/api-${sys}/email-addresses/findOneByDeleted/:deleted`, (req, res) => emailAddressesCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/email-addresses/findOneByEmailAddress/:emailAddress`, (req, res) => emailAddressesCtrl.findOneByEmailAddress(req, res));

router.get(`/api-${sys}/email-addresses/findOneByEmailAddressCaps/:emailAddressCaps`, (req, res) => emailAddressesCtrl.findOneByEmailAddressCaps(req, res));

router.get(`/api-${sys}/email-addresses/findOneByConfirmOptIn/:confirmOptIn`, (req, res) => emailAddressesCtrl.findOneByConfirmOptIn(req, res));

router.get(`/api-${sys}/email-addresses/findOneByConfirmOptInToken/:confirmOptInToken`, (req, res) => emailAddressesCtrl.findOneByConfirmOptInToken(req, res));

router.get(`/api-${sys}/email-addresses/findOneByConfirmOptInDate/:confirmOptInDate`, (req, res) => emailAddressesCtrl.findOneByConfirmOptInDate(req, res));

router.get(`/api-${sys}/email-addresses/findOneByConfirmOptInSentDate/:confirmOptInSentDate`, (req, res) => emailAddressesCtrl.findOneByConfirmOptInSentDate(req, res));

router.get(`/api-${sys}/email-addresses/findOneByConfirmOptInFailDate/:confirmOptInFailDate`, (req, res) => emailAddressesCtrl.findOneByConfirmOptInFailDate(req, res));

router.get(`/api-${sys}/email-addresses/findOneByDateCreated/:dateCreated`, (req, res) => emailAddressesCtrl.findOneByDateCreated(req, res));

router.get(`/api-${sys}/email-addresses/findOneByDateModified/:dateModified`, (req, res) => emailAddressesCtrl.findOneByDateModified(req, res));



router.post(`/api-${sys}/email-addresses/updateEmailAddresseById`, (req, res) => emailAddressesCtrl.updateEmailAddresseById(req, res));

router.post(`/api-${sys}/email-addresses/updateEmailAddresseByInvalidEmail`, (req, res) => emailAddressesCtrl.updateEmailAddresseByInvalidEmail(req, res));

router.post(`/api-${sys}/email-addresses/updateEmailAddresseByOptOut`, (req, res) => emailAddressesCtrl.updateEmailAddresseByOptOut(req, res));

router.post(`/api-${sys}/email-addresses/updateEmailAddresseByDeleted`, (req, res) => emailAddressesCtrl.updateEmailAddresseByDeleted(req, res));

router.post(`/api-${sys}/email-addresses/updateEmailAddresseByEmailAddress`, (req, res) => emailAddressesCtrl.updateEmailAddresseByEmailAddress(req, res));

router.post(`/api-${sys}/email-addresses/updateEmailAddresseByEmailAddressCaps`, (req, res) => emailAddressesCtrl.updateEmailAddresseByEmailAddressCaps(req, res));

router.post(`/api-${sys}/email-addresses/updateEmailAddresseByConfirmOptIn`, (req, res) => emailAddressesCtrl.updateEmailAddresseByConfirmOptIn(req, res));

router.post(`/api-${sys}/email-addresses/updateEmailAddresseByConfirmOptInToken`, (req, res) => emailAddressesCtrl.updateEmailAddresseByConfirmOptInToken(req, res));

router.post(`/api-${sys}/email-addresses/updateEmailAddresseByConfirmOptInDate`, (req, res) => emailAddressesCtrl.updateEmailAddresseByConfirmOptInDate(req, res));

router.post(`/api-${sys}/email-addresses/updateEmailAddresseByConfirmOptInSentDate`, (req, res) => emailAddressesCtrl.updateEmailAddresseByConfirmOptInSentDate(req, res));

router.post(`/api-${sys}/email-addresses/updateEmailAddresseByConfirmOptInFailDate`, (req, res) => emailAddressesCtrl.updateEmailAddresseByConfirmOptInFailDate(req, res));

router.post(`/api-${sys}/email-addresses/updateEmailAddresseByDateCreated`, (req, res) => emailAddressesCtrl.updateEmailAddresseByDateCreated(req, res));

router.post(`/api-${sys}/email-addresses/updateEmailAddresseByDateModified`, (req, res) => emailAddressesCtrl.updateEmailAddresseByDateModified(req, res));





router.get(`/api-${sys}/email-addresses/`, (req, res) => emailAddressesCtrl.getAllEmailAddresses(req, res));
router.post(`/api-${sys}/email-addresses/`, (req, res) => emailAddressesCtrl.addEmailAddresse(req, res));
router.get(`/api-${sys}/email-addresses/:id`, (req, res) => emailAddressesCtrl.getAEmailAddresse(req, res));
router.put(`/api-${sys}/email-addresses/:id`, (req, res) => emailAddressesCtrl.updateEmailAddresse(req, res));
router.delete(`/api-${sys}/email-addresses/:id`, (req, res) => emailAddressesCtrl.deleteEmailAddresse(req, res));

//</es-section>
module.exports = router;
