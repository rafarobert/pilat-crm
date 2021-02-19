/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:38:27 GMT-0400 (Bolivia Time)
 * Time: 18:38:27
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:38:27 GMT-0400 (Bolivia Time)
 * Last time updated: 18:38:27
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const prospectsCtrl = require("../controllers/prospects.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/prospects/findOneById/:id`, (req, res) => prospectsCtrl.findOneById(req, res));

router.get(`/api-${sys}/prospects/findOneByDeleted/:deleted`, (req, res) => prospectsCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/prospects/findOneByDoNotCall/:doNotCall`, (req, res) => prospectsCtrl.findOneByDoNotCall(req, res));

router.get(`/api-${sys}/prospects/findOneByTrackerKey/:trackerKey`, (req, res) => prospectsCtrl.findOneByTrackerKey(req, res));

router.get(`/api-${sys}/prospects/findOneBySalutation/:salutation`, (req, res) => prospectsCtrl.findOneBySalutation(req, res));

router.get(`/api-${sys}/prospects/findOneByFirstName/:firstName`, (req, res) => prospectsCtrl.findOneByFirstName(req, res));

router.get(`/api-${sys}/prospects/findOneByLastName/:lastName`, (req, res) => prospectsCtrl.findOneByLastName(req, res));

router.get(`/api-${sys}/prospects/findOneByTitle/:title`, (req, res) => prospectsCtrl.findOneByTitle(req, res));

router.get(`/api-${sys}/prospects/findOneByPhoto/:photo`, (req, res) => prospectsCtrl.findOneByPhoto(req, res));

router.get(`/api-${sys}/prospects/findOneByDepartment/:department`, (req, res) => prospectsCtrl.findOneByDepartment(req, res));

router.get(`/api-${sys}/prospects/findOneByPhoneHome/:phoneHome`, (req, res) => prospectsCtrl.findOneByPhoneHome(req, res));

router.get(`/api-${sys}/prospects/findOneByPhoneMobile/:phoneMobile`, (req, res) => prospectsCtrl.findOneByPhoneMobile(req, res));

router.get(`/api-${sys}/prospects/findOneByPhoneWork/:phoneWork`, (req, res) => prospectsCtrl.findOneByPhoneWork(req, res));

router.get(`/api-${sys}/prospects/findOneByPhoneOther/:phoneOther`, (req, res) => prospectsCtrl.findOneByPhoneOther(req, res));

router.get(`/api-${sys}/prospects/findOneByPhoneFax/:phoneFax`, (req, res) => prospectsCtrl.findOneByPhoneFax(req, res));

router.get(`/api-${sys}/prospects/findOneByLawfulBasisSource/:lawfulBasisSource`, (req, res) => prospectsCtrl.findOneByLawfulBasisSource(req, res));

router.get(`/api-${sys}/prospects/findOneByPrimaryAddressStreet/:primaryAddressStreet`, (req, res) => prospectsCtrl.findOneByPrimaryAddressStreet(req, res));

router.get(`/api-${sys}/prospects/findOneByPrimaryAddressCity/:primaryAddressCity`, (req, res) => prospectsCtrl.findOneByPrimaryAddressCity(req, res));

router.get(`/api-${sys}/prospects/findOneByPrimaryAddressState/:primaryAddressState`, (req, res) => prospectsCtrl.findOneByPrimaryAddressState(req, res));

router.get(`/api-${sys}/prospects/findOneByPrimaryAddressPostalcode/:primaryAddressPostalcode`, (req, res) => prospectsCtrl.findOneByPrimaryAddressPostalcode(req, res));

router.get(`/api-${sys}/prospects/findOneByPrimaryAddressCountry/:primaryAddressCountry`, (req, res) => prospectsCtrl.findOneByPrimaryAddressCountry(req, res));

router.get(`/api-${sys}/prospects/findOneByAltAddressStreet/:altAddressStreet`, (req, res) => prospectsCtrl.findOneByAltAddressStreet(req, res));

router.get(`/api-${sys}/prospects/findOneByAltAddressCity/:altAddressCity`, (req, res) => prospectsCtrl.findOneByAltAddressCity(req, res));

router.get(`/api-${sys}/prospects/findOneByAltAddressState/:altAddressState`, (req, res) => prospectsCtrl.findOneByAltAddressState(req, res));

router.get(`/api-${sys}/prospects/findOneByAltAddressPostalcode/:altAddressPostalcode`, (req, res) => prospectsCtrl.findOneByAltAddressPostalcode(req, res));

router.get(`/api-${sys}/prospects/findOneByAltAddressCountry/:altAddressCountry`, (req, res) => prospectsCtrl.findOneByAltAddressCountry(req, res));

router.get(`/api-${sys}/prospects/findOneByAssistant/:assistant`, (req, res) => prospectsCtrl.findOneByAssistant(req, res));

router.get(`/api-${sys}/prospects/findOneByAssistantPhone/:assistantPhone`, (req, res) => prospectsCtrl.findOneByAssistantPhone(req, res));

router.get(`/api-${sys}/prospects/findOneByAccountName/:accountName`, (req, res) => prospectsCtrl.findOneByAccountName(req, res));

router.get(`/api-${sys}/prospects/findOneByDescription/:description`, (req, res) => prospectsCtrl.findOneByDescription(req, res));

router.get(`/api-${sys}/prospects/findOneByLawfulBasis/:lawfulBasis`, (req, res) => prospectsCtrl.findOneByLawfulBasis(req, res));

router.get(`/api-${sys}/prospects/findOneByDateEntered/:dateEntered`, (req, res) => prospectsCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/prospects/findOneByDateModified/:dateModified`, (req, res) => prospectsCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/prospects/findOneByDateReviewed/:dateReviewed`, (req, res) => prospectsCtrl.findOneByDateReviewed(req, res));

router.get(`/api-${sys}/prospects/findOneByBirthdate/:birthdate`, (req, res) => prospectsCtrl.findOneByBirthdate(req, res));

router.get(`/api-${sys}/prospects/findOneByModifiedUserId/:modifiedUserId`, (req, res) => prospectsCtrl.findOneByModifiedUserId(req, res));

router.get(`/api-${sys}/prospects/findOneByCreatedBy/:createdBy`, (req, res) => prospectsCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/prospects/findOneByAssignedUserId/:assignedUserId`, (req, res) => prospectsCtrl.findOneByAssignedUserId(req, res));

router.get(`/api-${sys}/prospects/findOneByLeadId/:leadId`, (req, res) => prospectsCtrl.findOneByLeadId(req, res));

router.get(`/api-${sys}/prospects/findOneByCampaignId/:campaignId`, (req, res) => prospectsCtrl.findOneByCampaignId(req, res));



router.post(`/api-${sys}/prospects/updateProspectById`, (req, res) => prospectsCtrl.updateProspectById(req, res));

router.post(`/api-${sys}/prospects/updateProspectByDeleted`, (req, res) => prospectsCtrl.updateProspectByDeleted(req, res));

router.post(`/api-${sys}/prospects/updateProspectByDoNotCall`, (req, res) => prospectsCtrl.updateProspectByDoNotCall(req, res));

router.post(`/api-${sys}/prospects/updateProspectByTrackerKey`, (req, res) => prospectsCtrl.updateProspectByTrackerKey(req, res));

router.post(`/api-${sys}/prospects/updateProspectBySalutation`, (req, res) => prospectsCtrl.updateProspectBySalutation(req, res));

router.post(`/api-${sys}/prospects/updateProspectByFirstName`, (req, res) => prospectsCtrl.updateProspectByFirstName(req, res));

router.post(`/api-${sys}/prospects/updateProspectByLastName`, (req, res) => prospectsCtrl.updateProspectByLastName(req, res));

router.post(`/api-${sys}/prospects/updateProspectByTitle`, (req, res) => prospectsCtrl.updateProspectByTitle(req, res));

router.post(`/api-${sys}/prospects/updateProspectByPhoto`, (req, res) => prospectsCtrl.updateProspectByPhoto(req, res));

router.post(`/api-${sys}/prospects/updateProspectByDepartment`, (req, res) => prospectsCtrl.updateProspectByDepartment(req, res));

router.post(`/api-${sys}/prospects/updateProspectByPhoneHome`, (req, res) => prospectsCtrl.updateProspectByPhoneHome(req, res));

router.post(`/api-${sys}/prospects/updateProspectByPhoneMobile`, (req, res) => prospectsCtrl.updateProspectByPhoneMobile(req, res));

router.post(`/api-${sys}/prospects/updateProspectByPhoneWork`, (req, res) => prospectsCtrl.updateProspectByPhoneWork(req, res));

router.post(`/api-${sys}/prospects/updateProspectByPhoneOther`, (req, res) => prospectsCtrl.updateProspectByPhoneOther(req, res));

router.post(`/api-${sys}/prospects/updateProspectByPhoneFax`, (req, res) => prospectsCtrl.updateProspectByPhoneFax(req, res));

router.post(`/api-${sys}/prospects/updateProspectByLawfulBasisSource`, (req, res) => prospectsCtrl.updateProspectByLawfulBasisSource(req, res));

router.post(`/api-${sys}/prospects/updateProspectByPrimaryAddressStreet`, (req, res) => prospectsCtrl.updateProspectByPrimaryAddressStreet(req, res));

router.post(`/api-${sys}/prospects/updateProspectByPrimaryAddressCity`, (req, res) => prospectsCtrl.updateProspectByPrimaryAddressCity(req, res));

router.post(`/api-${sys}/prospects/updateProspectByPrimaryAddressState`, (req, res) => prospectsCtrl.updateProspectByPrimaryAddressState(req, res));

router.post(`/api-${sys}/prospects/updateProspectByPrimaryAddressPostalcode`, (req, res) => prospectsCtrl.updateProspectByPrimaryAddressPostalcode(req, res));

router.post(`/api-${sys}/prospects/updateProspectByPrimaryAddressCountry`, (req, res) => prospectsCtrl.updateProspectByPrimaryAddressCountry(req, res));

router.post(`/api-${sys}/prospects/updateProspectByAltAddressStreet`, (req, res) => prospectsCtrl.updateProspectByAltAddressStreet(req, res));

router.post(`/api-${sys}/prospects/updateProspectByAltAddressCity`, (req, res) => prospectsCtrl.updateProspectByAltAddressCity(req, res));

router.post(`/api-${sys}/prospects/updateProspectByAltAddressState`, (req, res) => prospectsCtrl.updateProspectByAltAddressState(req, res));

router.post(`/api-${sys}/prospects/updateProspectByAltAddressPostalcode`, (req, res) => prospectsCtrl.updateProspectByAltAddressPostalcode(req, res));

router.post(`/api-${sys}/prospects/updateProspectByAltAddressCountry`, (req, res) => prospectsCtrl.updateProspectByAltAddressCountry(req, res));

router.post(`/api-${sys}/prospects/updateProspectByAssistant`, (req, res) => prospectsCtrl.updateProspectByAssistant(req, res));

router.post(`/api-${sys}/prospects/updateProspectByAssistantPhone`, (req, res) => prospectsCtrl.updateProspectByAssistantPhone(req, res));

router.post(`/api-${sys}/prospects/updateProspectByAccountName`, (req, res) => prospectsCtrl.updateProspectByAccountName(req, res));

router.post(`/api-${sys}/prospects/updateProspectByDescription`, (req, res) => prospectsCtrl.updateProspectByDescription(req, res));

router.post(`/api-${sys}/prospects/updateProspectByLawfulBasis`, (req, res) => prospectsCtrl.updateProspectByLawfulBasis(req, res));

router.post(`/api-${sys}/prospects/updateProspectByDateEntered`, (req, res) => prospectsCtrl.updateProspectByDateEntered(req, res));

router.post(`/api-${sys}/prospects/updateProspectByDateModified`, (req, res) => prospectsCtrl.updateProspectByDateModified(req, res));

router.post(`/api-${sys}/prospects/updateProspectByDateReviewed`, (req, res) => prospectsCtrl.updateProspectByDateReviewed(req, res));

router.post(`/api-${sys}/prospects/updateProspectByBirthdate`, (req, res) => prospectsCtrl.updateProspectByBirthdate(req, res));

router.post(`/api-${sys}/prospects/updateProspectByModifiedUserId`, (req, res) => prospectsCtrl.updateProspectByModifiedUserId(req, res));

router.post(`/api-${sys}/prospects/updateProspectByCreatedBy`, (req, res) => prospectsCtrl.updateProspectByCreatedBy(req, res));

router.post(`/api-${sys}/prospects/updateProspectByAssignedUserId`, (req, res) => prospectsCtrl.updateProspectByAssignedUserId(req, res));

router.post(`/api-${sys}/prospects/updateProspectByLeadId`, (req, res) => prospectsCtrl.updateProspectByLeadId(req, res));

router.post(`/api-${sys}/prospects/updateProspectByCampaignId`, (req, res) => prospectsCtrl.updateProspectByCampaignId(req, res));





router.get(`/api-${sys}/prospects/`, (req, res) => prospectsCtrl.getAllProspects(req, res));
router.post(`/api-${sys}/prospects/`, (req, res) => prospectsCtrl.addProspect(req, res));
router.get(`/api-${sys}/prospects/:id`, (req, res) => prospectsCtrl.getAProspect(req, res));
router.put(`/api-${sys}/prospects/:id`, (req, res) => prospectsCtrl.updateProspect(req, res));
router.delete(`/api-${sys}/prospects/:id`, (req, res) => prospectsCtrl.deleteProspect(req, res));

//</es-section>
module.exports = router;
