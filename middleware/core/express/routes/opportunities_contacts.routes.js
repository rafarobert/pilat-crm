/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:21 GMT-0400 (Bolivia Time)
 * Time: 14:57:21
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:21 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:21
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const opportunitiesContactsCtrl = require("../controllers/opportunities_contacts.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/opportunities-contacts/findOneById/:id`, (req, res) => opportunitiesContactsCtrl.findOneById(req, res));

router.get(`/api-${sys}/opportunities-contacts/findOneByDeleted/:deleted`, (req, res) => opportunitiesContactsCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/opportunities-contacts/findOneByContactId/:contactId`, (req, res) => opportunitiesContactsCtrl.findOneByContactId(req, res));

router.get(`/api-${sys}/opportunities-contacts/findOneByOpportunityId/:opportunityId`, (req, res) => opportunitiesContactsCtrl.findOneByOpportunityId(req, res));

router.get(`/api-${sys}/opportunities-contacts/findOneByContactRole/:contactRole`, (req, res) => opportunitiesContactsCtrl.findOneByContactRole(req, res));

router.get(`/api-${sys}/opportunities-contacts/findOneByDateModified/:dateModified`, (req, res) => opportunitiesContactsCtrl.findOneByDateModified(req, res));



router.post(`/api-${sys}/opportunities-contacts/updateOpportunityContactById`, (req, res) => opportunitiesContactsCtrl.updateOpportunityContactById(req, res));

router.post(`/api-${sys}/opportunities-contacts/updateOpportunityContactByDeleted`, (req, res) => opportunitiesContactsCtrl.updateOpportunityContactByDeleted(req, res));

router.post(`/api-${sys}/opportunities-contacts/updateOpportunityContactByContactId`, (req, res) => opportunitiesContactsCtrl.updateOpportunityContactByContactId(req, res));

router.post(`/api-${sys}/opportunities-contacts/updateOpportunityContactByOpportunityId`, (req, res) => opportunitiesContactsCtrl.updateOpportunityContactByOpportunityId(req, res));

router.post(`/api-${sys}/opportunities-contacts/updateOpportunityContactByContactRole`, (req, res) => opportunitiesContactsCtrl.updateOpportunityContactByContactRole(req, res));

router.post(`/api-${sys}/opportunities-contacts/updateOpportunityContactByDateModified`, (req, res) => opportunitiesContactsCtrl.updateOpportunityContactByDateModified(req, res));





router.get(`/api-${sys}/opportunities-contacts/`, (req, res) => opportunitiesContactsCtrl.getAllOpportunitiesContacts(req, res));
router.post(`/api-${sys}/datatable/opportunities-contacts/`, (req, res) => opportunitiesContactsCtrl.getAllOpportunitiesContacts(req, res));
router.post(`/api-${sys}/opportunities-contacts/`, (req, res) => opportunitiesContactsCtrl.addOpportunityContact(req, res));
router.get(`/api-${sys}/opportunities-contacts/:id`, (req, res) => opportunitiesContactsCtrl.getAOpportunityContact(req, res));
router.put(`/api-${sys}/opportunities-contacts/:id`, (req, res) => opportunitiesContactsCtrl.updateOpportunityContact(req, res));
router.delete(`/api-${sys}/opportunities-contacts/:id`, (req, res) => opportunitiesContactsCtrl.deleteOpportunityContact(req, res));

//</es-section>
module.exports = router;
