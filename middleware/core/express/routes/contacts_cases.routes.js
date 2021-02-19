/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:36:49 GMT-0400 (Bolivia Time)
 * Time: 18:36:49
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:36:49 GMT-0400 (Bolivia Time)
 * Last time updated: 18:36:49
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const contactsCasesCtrl = require("../controllers/contacts_cases.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/contacts-cases/findOneById/:id`, (req, res) => contactsCasesCtrl.findOneById(req, res));

router.get(`/api-${sys}/contacts-cases/findOneByDeleted/:deleted`, (req, res) => contactsCasesCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/contacts-cases/findOneByContactId/:contactId`, (req, res) => contactsCasesCtrl.findOneByContactId(req, res));

router.get(`/api-${sys}/contacts-cases/findOneByCaseId/:caseId`, (req, res) => contactsCasesCtrl.findOneByCaseId(req, res));

router.get(`/api-${sys}/contacts-cases/findOneByContactRole/:contactRole`, (req, res) => contactsCasesCtrl.findOneByContactRole(req, res));

router.get(`/api-${sys}/contacts-cases/findOneByDateModified/:dateModified`, (req, res) => contactsCasesCtrl.findOneByDateModified(req, res));



router.post(`/api-${sys}/contacts-cases/updateContactCaseById`, (req, res) => contactsCasesCtrl.updateContactCaseById(req, res));

router.post(`/api-${sys}/contacts-cases/updateContactCaseByDeleted`, (req, res) => contactsCasesCtrl.updateContactCaseByDeleted(req, res));

router.post(`/api-${sys}/contacts-cases/updateContactCaseByContactId`, (req, res) => contactsCasesCtrl.updateContactCaseByContactId(req, res));

router.post(`/api-${sys}/contacts-cases/updateContactCaseByCaseId`, (req, res) => contactsCasesCtrl.updateContactCaseByCaseId(req, res));

router.post(`/api-${sys}/contacts-cases/updateContactCaseByContactRole`, (req, res) => contactsCasesCtrl.updateContactCaseByContactRole(req, res));

router.post(`/api-${sys}/contacts-cases/updateContactCaseByDateModified`, (req, res) => contactsCasesCtrl.updateContactCaseByDateModified(req, res));





router.get(`/api-${sys}/contacts-cases/`, (req, res) => contactsCasesCtrl.getAllContactsCases(req, res));
router.post(`/api-${sys}/contacts-cases/`, (req, res) => contactsCasesCtrl.addContactCase(req, res));
router.get(`/api-${sys}/contacts-cases/:id`, (req, res) => contactsCasesCtrl.getAContactCase(req, res));
router.put(`/api-${sys}/contacts-cases/:id`, (req, res) => contactsCasesCtrl.updateContactCase(req, res));
router.delete(`/api-${sys}/contacts-cases/:id`, (req, res) => contactsCasesCtrl.deleteContactCase(req, res));

//</es-section>
module.exports = router;
