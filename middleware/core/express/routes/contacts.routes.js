/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:35:49 GMT-0400 (Bolivia Time)
 * Time: 15:35:49
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:35:49 GMT-0400 (Bolivia Time)
 * Last time updated: 15:35:49
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const contactsCtrl = require("../controllers/contacts.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/contacts/findOneById/:id`, (req, res) => contactsCtrl.findOneById(req, res));

router.get(`/api-${sys}/contacts/findOneByDeleted/:deleted`, (req, res) => contactsCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/contacts/findOneByDoNotCall/:doNotCall`, (req, res) => contactsCtrl.findOneByDoNotCall(req, res));

router.get(`/api-${sys}/contacts/findOneByPortalAccountDisabled/:portalAccountDisabled`, (req, res) => contactsCtrl.findOneByPortalAccountDisabled(req, res));

router.get(`/api-${sys}/contacts/findOneBySalutation/:salutation`, (req, res) => contactsCtrl.findOneBySalutation(req, res));

router.get(`/api-${sys}/contacts/findOneByFirstName/:firstName`, (req, res) => contactsCtrl.findOneByFirstName(req, res));

router.get(`/api-${sys}/contacts/findOneByLastName/:lastName`, (req, res) => contactsCtrl.findOneByLastName(req, res));

router.get(`/api-${sys}/contacts/findOneByTitle/:title`, (req, res) => contactsCtrl.findOneByTitle(req, res));

router.get(`/api-${sys}/contacts/findOneByPhoto/:photo`, (req, res) => contactsCtrl.findOneByPhoto(req, res));

router.get(`/api-${sys}/contacts/findOneByDepartment/:department`, (req, res) => contactsCtrl.findOneByDepartment(req, res));

router.get(`/api-${sys}/contacts/findOneByPhoneHome/:phoneHome`, (req, res) => contactsCtrl.findOneByPhoneHome(req, res));

router.get(`/api-${sys}/contacts/findOneByPhoneMobile/:phoneMobile`, (req, res) => contactsCtrl.findOneByPhoneMobile(req, res));

router.get(`/api-${sys}/contacts/findOneByPhoneWork/:phoneWork`, (req, res) => contactsCtrl.findOneByPhoneWork(req, res));

router.get(`/api-${sys}/contacts/findOneByPhoneOther/:phoneOther`, (req, res) => contactsCtrl.findOneByPhoneOther(req, res));

router.get(`/api-${sys}/contacts/findOneByPhoneFax/:phoneFax`, (req, res) => contactsCtrl.findOneByPhoneFax(req, res));

router.get(`/api-${sys}/contacts/findOneByLawfulBasisSource/:lawfulBasisSource`, (req, res) => contactsCtrl.findOneByLawfulBasisSource(req, res));

router.get(`/api-${sys}/contacts/findOneByPrimaryAddressStreet/:primaryAddressStreet`, (req, res) => contactsCtrl.findOneByPrimaryAddressStreet(req, res));

router.get(`/api-${sys}/contacts/findOneByPrimaryAddressCity/:primaryAddressCity`, (req, res) => contactsCtrl.findOneByPrimaryAddressCity(req, res));

router.get(`/api-${sys}/contacts/findOneByPrimaryAddressState/:primaryAddressState`, (req, res) => contactsCtrl.findOneByPrimaryAddressState(req, res));

router.get(`/api-${sys}/contacts/findOneByPrimaryAddressPostalcode/:primaryAddressPostalcode`, (req, res) => contactsCtrl.findOneByPrimaryAddressPostalcode(req, res));

router.get(`/api-${sys}/contacts/findOneByPrimaryAddressCountry/:primaryAddressCountry`, (req, res) => contactsCtrl.findOneByPrimaryAddressCountry(req, res));

router.get(`/api-${sys}/contacts/findOneByAltAddressStreet/:altAddressStreet`, (req, res) => contactsCtrl.findOneByAltAddressStreet(req, res));

router.get(`/api-${sys}/contacts/findOneByAltAddressCity/:altAddressCity`, (req, res) => contactsCtrl.findOneByAltAddressCity(req, res));

router.get(`/api-${sys}/contacts/findOneByAltAddressState/:altAddressState`, (req, res) => contactsCtrl.findOneByAltAddressState(req, res));

router.get(`/api-${sys}/contacts/findOneByAltAddressPostalcode/:altAddressPostalcode`, (req, res) => contactsCtrl.findOneByAltAddressPostalcode(req, res));

router.get(`/api-${sys}/contacts/findOneByAltAddressCountry/:altAddressCountry`, (req, res) => contactsCtrl.findOneByAltAddressCountry(req, res));

router.get(`/api-${sys}/contacts/findOneByAssistant/:assistant`, (req, res) => contactsCtrl.findOneByAssistant(req, res));

router.get(`/api-${sys}/contacts/findOneByAssistantPhone/:assistantPhone`, (req, res) => contactsCtrl.findOneByAssistantPhone(req, res));

router.get(`/api-${sys}/contacts/findOneByLeadSource/:leadSource`, (req, res) => contactsCtrl.findOneByLeadSource(req, res));

router.get(`/api-${sys}/contacts/findOneByJoomlaAccountId/:joomlaAccountId`, (req, res) => contactsCtrl.findOneByJoomlaAccountId(req, res));

router.get(`/api-${sys}/contacts/findOneByPortalUserType/:portalUserType`, (req, res) => contactsCtrl.findOneByPortalUserType(req, res));

router.get(`/api-${sys}/contacts/findOneByDescription/:description`, (req, res) => contactsCtrl.findOneByDescription(req, res));

router.get(`/api-${sys}/contacts/findOneByLawfulBasis/:lawfulBasis`, (req, res) => contactsCtrl.findOneByLawfulBasis(req, res));

router.get(`/api-${sys}/contacts/findOneByDateEntered/:dateEntered`, (req, res) => contactsCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/contacts/findOneByDateModified/:dateModified`, (req, res) => contactsCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/contacts/findOneByDateReviewed/:dateReviewed`, (req, res) => contactsCtrl.findOneByDateReviewed(req, res));

router.get(`/api-${sys}/contacts/findOneByBirthdate/:birthdate`, (req, res) => contactsCtrl.findOneByBirthdate(req, res));

router.get(`/api-${sys}/contacts/findOneByModifiedUserId/:modifiedUserId`, (req, res) => contactsCtrl.findOneByModifiedUserId(req, res));

router.get(`/api-${sys}/contacts/findOneByCreatedBy/:createdBy`, (req, res) => contactsCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/contacts/findOneByAssignedUserId/:assignedUserId`, (req, res) => contactsCtrl.findOneByAssignedUserId(req, res));

router.get(`/api-${sys}/contacts/findOneByReportsToId/:reportsToId`, (req, res) => contactsCtrl.findOneByReportsToId(req, res));

router.get(`/api-${sys}/contacts/findOneByCampaignId/:campaignId`, (req, res) => contactsCtrl.findOneByCampaignId(req, res));



router.post(`/api-${sys}/contacts/updateContactById`, (req, res) => contactsCtrl.updateContactById(req, res));

router.post(`/api-${sys}/contacts/updateContactByDeleted`, (req, res) => contactsCtrl.updateContactByDeleted(req, res));

router.post(`/api-${sys}/contacts/updateContactByDoNotCall`, (req, res) => contactsCtrl.updateContactByDoNotCall(req, res));

router.post(`/api-${sys}/contacts/updateContactByPortalAccountDisabled`, (req, res) => contactsCtrl.updateContactByPortalAccountDisabled(req, res));

router.post(`/api-${sys}/contacts/updateContactBySalutation`, (req, res) => contactsCtrl.updateContactBySalutation(req, res));

router.post(`/api-${sys}/contacts/updateContactByFirstName`, (req, res) => contactsCtrl.updateContactByFirstName(req, res));

router.post(`/api-${sys}/contacts/updateContactByLastName`, (req, res) => contactsCtrl.updateContactByLastName(req, res));

router.post(`/api-${sys}/contacts/updateContactByTitle`, (req, res) => contactsCtrl.updateContactByTitle(req, res));

router.post(`/api-${sys}/contacts/updateContactByPhoto`, (req, res) => contactsCtrl.updateContactByPhoto(req, res));

router.post(`/api-${sys}/contacts/updateContactByDepartment`, (req, res) => contactsCtrl.updateContactByDepartment(req, res));

router.post(`/api-${sys}/contacts/updateContactByPhoneHome`, (req, res) => contactsCtrl.updateContactByPhoneHome(req, res));

router.post(`/api-${sys}/contacts/updateContactByPhoneMobile`, (req, res) => contactsCtrl.updateContactByPhoneMobile(req, res));

router.post(`/api-${sys}/contacts/updateContactByPhoneWork`, (req, res) => contactsCtrl.updateContactByPhoneWork(req, res));

router.post(`/api-${sys}/contacts/updateContactByPhoneOther`, (req, res) => contactsCtrl.updateContactByPhoneOther(req, res));

router.post(`/api-${sys}/contacts/updateContactByPhoneFax`, (req, res) => contactsCtrl.updateContactByPhoneFax(req, res));

router.post(`/api-${sys}/contacts/updateContactByLawfulBasisSource`, (req, res) => contactsCtrl.updateContactByLawfulBasisSource(req, res));

router.post(`/api-${sys}/contacts/updateContactByPrimaryAddressStreet`, (req, res) => contactsCtrl.updateContactByPrimaryAddressStreet(req, res));

router.post(`/api-${sys}/contacts/updateContactByPrimaryAddressCity`, (req, res) => contactsCtrl.updateContactByPrimaryAddressCity(req, res));

router.post(`/api-${sys}/contacts/updateContactByPrimaryAddressState`, (req, res) => contactsCtrl.updateContactByPrimaryAddressState(req, res));

router.post(`/api-${sys}/contacts/updateContactByPrimaryAddressPostalcode`, (req, res) => contactsCtrl.updateContactByPrimaryAddressPostalcode(req, res));

router.post(`/api-${sys}/contacts/updateContactByPrimaryAddressCountry`, (req, res) => contactsCtrl.updateContactByPrimaryAddressCountry(req, res));

router.post(`/api-${sys}/contacts/updateContactByAltAddressStreet`, (req, res) => contactsCtrl.updateContactByAltAddressStreet(req, res));

router.post(`/api-${sys}/contacts/updateContactByAltAddressCity`, (req, res) => contactsCtrl.updateContactByAltAddressCity(req, res));

router.post(`/api-${sys}/contacts/updateContactByAltAddressState`, (req, res) => contactsCtrl.updateContactByAltAddressState(req, res));

router.post(`/api-${sys}/contacts/updateContactByAltAddressPostalcode`, (req, res) => contactsCtrl.updateContactByAltAddressPostalcode(req, res));

router.post(`/api-${sys}/contacts/updateContactByAltAddressCountry`, (req, res) => contactsCtrl.updateContactByAltAddressCountry(req, res));

router.post(`/api-${sys}/contacts/updateContactByAssistant`, (req, res) => contactsCtrl.updateContactByAssistant(req, res));

router.post(`/api-${sys}/contacts/updateContactByAssistantPhone`, (req, res) => contactsCtrl.updateContactByAssistantPhone(req, res));

router.post(`/api-${sys}/contacts/updateContactByLeadSource`, (req, res) => contactsCtrl.updateContactByLeadSource(req, res));

router.post(`/api-${sys}/contacts/updateContactByJoomlaAccountId`, (req, res) => contactsCtrl.updateContactByJoomlaAccountId(req, res));

router.post(`/api-${sys}/contacts/updateContactByPortalUserType`, (req, res) => contactsCtrl.updateContactByPortalUserType(req, res));

router.post(`/api-${sys}/contacts/updateContactByDescription`, (req, res) => contactsCtrl.updateContactByDescription(req, res));

router.post(`/api-${sys}/contacts/updateContactByLawfulBasis`, (req, res) => contactsCtrl.updateContactByLawfulBasis(req, res));

router.post(`/api-${sys}/contacts/updateContactByDateEntered`, (req, res) => contactsCtrl.updateContactByDateEntered(req, res));

router.post(`/api-${sys}/contacts/updateContactByDateModified`, (req, res) => contactsCtrl.updateContactByDateModified(req, res));

router.post(`/api-${sys}/contacts/updateContactByDateReviewed`, (req, res) => contactsCtrl.updateContactByDateReviewed(req, res));

router.post(`/api-${sys}/contacts/updateContactByBirthdate`, (req, res) => contactsCtrl.updateContactByBirthdate(req, res));

router.post(`/api-${sys}/contacts/updateContactByModifiedUserId`, (req, res) => contactsCtrl.updateContactByModifiedUserId(req, res));

router.post(`/api-${sys}/contacts/updateContactByCreatedBy`, (req, res) => contactsCtrl.updateContactByCreatedBy(req, res));

router.post(`/api-${sys}/contacts/updateContactByAssignedUserId`, (req, res) => contactsCtrl.updateContactByAssignedUserId(req, res));

router.post(`/api-${sys}/contacts/updateContactByReportsToId`, (req, res) => contactsCtrl.updateContactByReportsToId(req, res));

router.post(`/api-${sys}/contacts/updateContactByCampaignId`, (req, res) => contactsCtrl.updateContactByCampaignId(req, res));





router.get(`/api-${sys}/contacts/`, (req, res) => contactsCtrl.getAllContacts(req, res));
router.post(`/api-${sys}/contacts/`, (req, res) => contactsCtrl.addContact(req, res));
router.get(`/api-${sys}/contacts/:id`, (req, res) => contactsCtrl.getAContact(req, res));
router.put(`/api-${sys}/contacts/:id`, (req, res) => contactsCtrl.updateContact(req, res));
router.delete(`/api-${sys}/contacts/:id`, (req, res) => contactsCtrl.deleteContact(req, res));

//</es-section>
module.exports = router;
