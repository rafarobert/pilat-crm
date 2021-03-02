/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:01:04 GMT-0400 (Bolivia Time)
 * Time: 14:1:4
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:01:04 GMT-0400 (Bolivia Time)
 * Last time updated: 14:1:4
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const leadsCtrl = require("../controllers/leads.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/leads/findOneById/:id`, (req, res) => leadsCtrl.findOneById(req, res));

router.get(`/api-${sys}/leads/findOneByDeleted/:deleted`, (req, res) => leadsCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/leads/findOneByDoNotCall/:doNotCall`, (req, res) => leadsCtrl.findOneByDoNotCall(req, res));

router.get(`/api-${sys}/leads/findOneByConverted/:converted`, (req, res) => leadsCtrl.findOneByConverted(req, res));

router.get(`/api-${sys}/leads/findOneBySalutation/:salutation`, (req, res) => leadsCtrl.findOneBySalutation(req, res));

router.get(`/api-${sys}/leads/findOneByFirstName/:firstName`, (req, res) => leadsCtrl.findOneByFirstName(req, res));

router.get(`/api-${sys}/leads/findOneByLastName/:lastName`, (req, res) => leadsCtrl.findOneByLastName(req, res));

router.get(`/api-${sys}/leads/findOneByTitle/:title`, (req, res) => leadsCtrl.findOneByTitle(req, res));

router.get(`/api-${sys}/leads/findOneByPhoto/:photo`, (req, res) => leadsCtrl.findOneByPhoto(req, res));

router.get(`/api-${sys}/leads/findOneByDepartment/:department`, (req, res) => leadsCtrl.findOneByDepartment(req, res));

router.get(`/api-${sys}/leads/findOneByPhoneHome/:phoneHome`, (req, res) => leadsCtrl.findOneByPhoneHome(req, res));

router.get(`/api-${sys}/leads/findOneByPhoneMobile/:phoneMobile`, (req, res) => leadsCtrl.findOneByPhoneMobile(req, res));

router.get(`/api-${sys}/leads/findOneByPhoneWork/:phoneWork`, (req, res) => leadsCtrl.findOneByPhoneWork(req, res));

router.get(`/api-${sys}/leads/findOneByPhoneOther/:phoneOther`, (req, res) => leadsCtrl.findOneByPhoneOther(req, res));

router.get(`/api-${sys}/leads/findOneByPhoneFax/:phoneFax`, (req, res) => leadsCtrl.findOneByPhoneFax(req, res));

router.get(`/api-${sys}/leads/findOneByLawfulBasisSource/:lawfulBasisSource`, (req, res) => leadsCtrl.findOneByLawfulBasisSource(req, res));

router.get(`/api-${sys}/leads/findOneByPrimaryAddressStreet/:primaryAddressStreet`, (req, res) => leadsCtrl.findOneByPrimaryAddressStreet(req, res));

router.get(`/api-${sys}/leads/findOneByPrimaryAddressCity/:primaryAddressCity`, (req, res) => leadsCtrl.findOneByPrimaryAddressCity(req, res));

router.get(`/api-${sys}/leads/findOneByPrimaryAddressState/:primaryAddressState`, (req, res) => leadsCtrl.findOneByPrimaryAddressState(req, res));

router.get(`/api-${sys}/leads/findOneByPrimaryAddressPostalcode/:primaryAddressPostalcode`, (req, res) => leadsCtrl.findOneByPrimaryAddressPostalcode(req, res));

router.get(`/api-${sys}/leads/findOneByPrimaryAddressCountry/:primaryAddressCountry`, (req, res) => leadsCtrl.findOneByPrimaryAddressCountry(req, res));

router.get(`/api-${sys}/leads/findOneByAltAddressStreet/:altAddressStreet`, (req, res) => leadsCtrl.findOneByAltAddressStreet(req, res));

router.get(`/api-${sys}/leads/findOneByAltAddressCity/:altAddressCity`, (req, res) => leadsCtrl.findOneByAltAddressCity(req, res));

router.get(`/api-${sys}/leads/findOneByAltAddressState/:altAddressState`, (req, res) => leadsCtrl.findOneByAltAddressState(req, res));

router.get(`/api-${sys}/leads/findOneByAltAddressPostalcode/:altAddressPostalcode`, (req, res) => leadsCtrl.findOneByAltAddressPostalcode(req, res));

router.get(`/api-${sys}/leads/findOneByAltAddressCountry/:altAddressCountry`, (req, res) => leadsCtrl.findOneByAltAddressCountry(req, res));

router.get(`/api-${sys}/leads/findOneByAssistant/:assistant`, (req, res) => leadsCtrl.findOneByAssistant(req, res));

router.get(`/api-${sys}/leads/findOneByAssistantPhone/:assistantPhone`, (req, res) => leadsCtrl.findOneByAssistantPhone(req, res));

router.get(`/api-${sys}/leads/findOneByReferedBy/:referedBy`, (req, res) => leadsCtrl.findOneByReferedBy(req, res));

router.get(`/api-${sys}/leads/findOneByLeadSource/:leadSource`, (req, res) => leadsCtrl.findOneByLeadSource(req, res));

router.get(`/api-${sys}/leads/findOneByStatus/:status`, (req, res) => leadsCtrl.findOneByStatus(req, res));

router.get(`/api-${sys}/leads/findOneByAccountName/:accountName`, (req, res) => leadsCtrl.findOneByAccountName(req, res));

router.get(`/api-${sys}/leads/findOneByOpportunityName/:opportunityName`, (req, res) => leadsCtrl.findOneByOpportunityName(req, res));

router.get(`/api-${sys}/leads/findOneByOpportunityAmount/:opportunityAmount`, (req, res) => leadsCtrl.findOneByOpportunityAmount(req, res));

router.get(`/api-${sys}/leads/findOneByPortalName/:portalName`, (req, res) => leadsCtrl.findOneByPortalName(req, res));

router.get(`/api-${sys}/leads/findOneByPortalApp/:portalApp`, (req, res) => leadsCtrl.findOneByPortalApp(req, res));

router.get(`/api-${sys}/leads/findOneByWebsite/:website`, (req, res) => leadsCtrl.findOneByWebsite(req, res));

router.get(`/api-${sys}/leads/findOneByDescription/:description`, (req, res) => leadsCtrl.findOneByDescription(req, res));

router.get(`/api-${sys}/leads/findOneByLawfulBasis/:lawfulBasis`, (req, res) => leadsCtrl.findOneByLawfulBasis(req, res));

router.get(`/api-${sys}/leads/findOneByLeadSourceDescription/:leadSourceDescription`, (req, res) => leadsCtrl.findOneByLeadSourceDescription(req, res));

router.get(`/api-${sys}/leads/findOneByStatusDescription/:statusDescription`, (req, res) => leadsCtrl.findOneByStatusDescription(req, res));

router.get(`/api-${sys}/leads/findOneByAccountDescription/:accountDescription`, (req, res) => leadsCtrl.findOneByAccountDescription(req, res));

router.get(`/api-${sys}/leads/findOneByDateEntered/:dateEntered`, (req, res) => leadsCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/leads/findOneByDateModified/:dateModified`, (req, res) => leadsCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/leads/findOneByDateReviewed/:dateReviewed`, (req, res) => leadsCtrl.findOneByDateReviewed(req, res));

router.get(`/api-${sys}/leads/findOneByBirthdate/:birthdate`, (req, res) => leadsCtrl.findOneByBirthdate(req, res));

router.get(`/api-${sys}/leads/findOneByModifiedUserId/:modifiedUserId`, (req, res) => leadsCtrl.findOneByModifiedUserId(req, res));

router.get(`/api-${sys}/leads/findOneByCreatedBy/:createdBy`, (req, res) => leadsCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/leads/findOneByAssignedUserId/:assignedUserId`, (req, res) => leadsCtrl.findOneByAssignedUserId(req, res));

router.get(`/api-${sys}/leads/findOneByReportsToId/:reportsToId`, (req, res) => leadsCtrl.findOneByReportsToId(req, res));

router.get(`/api-${sys}/leads/findOneByContactId/:contactId`, (req, res) => leadsCtrl.findOneByContactId(req, res));

router.get(`/api-${sys}/leads/findOneByAccountId/:accountId`, (req, res) => leadsCtrl.findOneByAccountId(req, res));

router.get(`/api-${sys}/leads/findOneByOpportunityId/:opportunityId`, (req, res) => leadsCtrl.findOneByOpportunityId(req, res));

router.get(`/api-${sys}/leads/findOneByCampaignId/:campaignId`, (req, res) => leadsCtrl.findOneByCampaignId(req, res));



router.post(`/api-${sys}/leads/updateLeadById`, (req, res) => leadsCtrl.updateLeadById(req, res));

router.post(`/api-${sys}/leads/updateLeadByDeleted`, (req, res) => leadsCtrl.updateLeadByDeleted(req, res));

router.post(`/api-${sys}/leads/updateLeadByDoNotCall`, (req, res) => leadsCtrl.updateLeadByDoNotCall(req, res));

router.post(`/api-${sys}/leads/updateLeadByConverted`, (req, res) => leadsCtrl.updateLeadByConverted(req, res));

router.post(`/api-${sys}/leads/updateLeadBySalutation`, (req, res) => leadsCtrl.updateLeadBySalutation(req, res));

router.post(`/api-${sys}/leads/updateLeadByFirstName`, (req, res) => leadsCtrl.updateLeadByFirstName(req, res));

router.post(`/api-${sys}/leads/updateLeadByLastName`, (req, res) => leadsCtrl.updateLeadByLastName(req, res));

router.post(`/api-${sys}/leads/updateLeadByTitle`, (req, res) => leadsCtrl.updateLeadByTitle(req, res));

router.post(`/api-${sys}/leads/updateLeadByPhoto`, (req, res) => leadsCtrl.updateLeadByPhoto(req, res));

router.post(`/api-${sys}/leads/updateLeadByDepartment`, (req, res) => leadsCtrl.updateLeadByDepartment(req, res));

router.post(`/api-${sys}/leads/updateLeadByPhoneHome`, (req, res) => leadsCtrl.updateLeadByPhoneHome(req, res));

router.post(`/api-${sys}/leads/updateLeadByPhoneMobile`, (req, res) => leadsCtrl.updateLeadByPhoneMobile(req, res));

router.post(`/api-${sys}/leads/updateLeadByPhoneWork`, (req, res) => leadsCtrl.updateLeadByPhoneWork(req, res));

router.post(`/api-${sys}/leads/updateLeadByPhoneOther`, (req, res) => leadsCtrl.updateLeadByPhoneOther(req, res));

router.post(`/api-${sys}/leads/updateLeadByPhoneFax`, (req, res) => leadsCtrl.updateLeadByPhoneFax(req, res));

router.post(`/api-${sys}/leads/updateLeadByLawfulBasisSource`, (req, res) => leadsCtrl.updateLeadByLawfulBasisSource(req, res));

router.post(`/api-${sys}/leads/updateLeadByPrimaryAddressStreet`, (req, res) => leadsCtrl.updateLeadByPrimaryAddressStreet(req, res));

router.post(`/api-${sys}/leads/updateLeadByPrimaryAddressCity`, (req, res) => leadsCtrl.updateLeadByPrimaryAddressCity(req, res));

router.post(`/api-${sys}/leads/updateLeadByPrimaryAddressState`, (req, res) => leadsCtrl.updateLeadByPrimaryAddressState(req, res));

router.post(`/api-${sys}/leads/updateLeadByPrimaryAddressPostalcode`, (req, res) => leadsCtrl.updateLeadByPrimaryAddressPostalcode(req, res));

router.post(`/api-${sys}/leads/updateLeadByPrimaryAddressCountry`, (req, res) => leadsCtrl.updateLeadByPrimaryAddressCountry(req, res));

router.post(`/api-${sys}/leads/updateLeadByAltAddressStreet`, (req, res) => leadsCtrl.updateLeadByAltAddressStreet(req, res));

router.post(`/api-${sys}/leads/updateLeadByAltAddressCity`, (req, res) => leadsCtrl.updateLeadByAltAddressCity(req, res));

router.post(`/api-${sys}/leads/updateLeadByAltAddressState`, (req, res) => leadsCtrl.updateLeadByAltAddressState(req, res));

router.post(`/api-${sys}/leads/updateLeadByAltAddressPostalcode`, (req, res) => leadsCtrl.updateLeadByAltAddressPostalcode(req, res));

router.post(`/api-${sys}/leads/updateLeadByAltAddressCountry`, (req, res) => leadsCtrl.updateLeadByAltAddressCountry(req, res));

router.post(`/api-${sys}/leads/updateLeadByAssistant`, (req, res) => leadsCtrl.updateLeadByAssistant(req, res));

router.post(`/api-${sys}/leads/updateLeadByAssistantPhone`, (req, res) => leadsCtrl.updateLeadByAssistantPhone(req, res));

router.post(`/api-${sys}/leads/updateLeadByReferedBy`, (req, res) => leadsCtrl.updateLeadByReferedBy(req, res));

router.post(`/api-${sys}/leads/updateLeadByLeadSource`, (req, res) => leadsCtrl.updateLeadByLeadSource(req, res));

router.post(`/api-${sys}/leads/updateLeadByStatus`, (req, res) => leadsCtrl.updateLeadByStatus(req, res));

router.post(`/api-${sys}/leads/updateLeadByAccountName`, (req, res) => leadsCtrl.updateLeadByAccountName(req, res));

router.post(`/api-${sys}/leads/updateLeadByOpportunityName`, (req, res) => leadsCtrl.updateLeadByOpportunityName(req, res));

router.post(`/api-${sys}/leads/updateLeadByOpportunityAmount`, (req, res) => leadsCtrl.updateLeadByOpportunityAmount(req, res));

router.post(`/api-${sys}/leads/updateLeadByPortalName`, (req, res) => leadsCtrl.updateLeadByPortalName(req, res));

router.post(`/api-${sys}/leads/updateLeadByPortalApp`, (req, res) => leadsCtrl.updateLeadByPortalApp(req, res));

router.post(`/api-${sys}/leads/updateLeadByWebsite`, (req, res) => leadsCtrl.updateLeadByWebsite(req, res));

router.post(`/api-${sys}/leads/updateLeadByDescription`, (req, res) => leadsCtrl.updateLeadByDescription(req, res));

router.post(`/api-${sys}/leads/updateLeadByLawfulBasis`, (req, res) => leadsCtrl.updateLeadByLawfulBasis(req, res));

router.post(`/api-${sys}/leads/updateLeadByLeadSourceDescription`, (req, res) => leadsCtrl.updateLeadByLeadSourceDescription(req, res));

router.post(`/api-${sys}/leads/updateLeadByStatusDescription`, (req, res) => leadsCtrl.updateLeadByStatusDescription(req, res));

router.post(`/api-${sys}/leads/updateLeadByAccountDescription`, (req, res) => leadsCtrl.updateLeadByAccountDescription(req, res));

router.post(`/api-${sys}/leads/updateLeadByDateEntered`, (req, res) => leadsCtrl.updateLeadByDateEntered(req, res));

router.post(`/api-${sys}/leads/updateLeadByDateModified`, (req, res) => leadsCtrl.updateLeadByDateModified(req, res));

router.post(`/api-${sys}/leads/updateLeadByDateReviewed`, (req, res) => leadsCtrl.updateLeadByDateReviewed(req, res));

router.post(`/api-${sys}/leads/updateLeadByBirthdate`, (req, res) => leadsCtrl.updateLeadByBirthdate(req, res));

router.post(`/api-${sys}/leads/updateLeadByModifiedUserId`, (req, res) => leadsCtrl.updateLeadByModifiedUserId(req, res));

router.post(`/api-${sys}/leads/updateLeadByCreatedBy`, (req, res) => leadsCtrl.updateLeadByCreatedBy(req, res));

router.post(`/api-${sys}/leads/updateLeadByAssignedUserId`, (req, res) => leadsCtrl.updateLeadByAssignedUserId(req, res));

router.post(`/api-${sys}/leads/updateLeadByReportsToId`, (req, res) => leadsCtrl.updateLeadByReportsToId(req, res));

router.post(`/api-${sys}/leads/updateLeadByContactId`, (req, res) => leadsCtrl.updateLeadByContactId(req, res));

router.post(`/api-${sys}/leads/updateLeadByAccountId`, (req, res) => leadsCtrl.updateLeadByAccountId(req, res));

router.post(`/api-${sys}/leads/updateLeadByOpportunityId`, (req, res) => leadsCtrl.updateLeadByOpportunityId(req, res));

router.post(`/api-${sys}/leads/updateLeadByCampaignId`, (req, res) => leadsCtrl.updateLeadByCampaignId(req, res));





router.get(`/api-${sys}/leads/`, (req, res) => leadsCtrl.getAllLeads(req, res));
router.post(`/api-${sys}/leads/`, (req, res) => leadsCtrl.addLead(req, res));
router.get(`/api-${sys}/leads/:id`, (req, res) => leadsCtrl.getALead(req, res));
router.put(`/api-${sys}/leads/:id`, (req, res) => leadsCtrl.updateLead(req, res));
router.delete(`/api-${sys}/leads/:id`, (req, res) => leadsCtrl.deleteLead(req, res));

//</es-section>
module.exports = router;
