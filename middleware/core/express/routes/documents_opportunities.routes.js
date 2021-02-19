/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:36:57 GMT-0400 (Bolivia Time)
 * Time: 18:36:57
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:36:57 GMT-0400 (Bolivia Time)
 * Last time updated: 18:36:57
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const documentsOpportunitiesCtrl = require("../controllers/documents_opportunities.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/documents-opportunities/findOneById/:id`, (req, res) => documentsOpportunitiesCtrl.findOneById(req, res));

router.get(`/api-${sys}/documents-opportunities/findOneByDeleted/:deleted`, (req, res) => documentsOpportunitiesCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/documents-opportunities/findOneByDocumentId/:documentId`, (req, res) => documentsOpportunitiesCtrl.findOneByDocumentId(req, res));

router.get(`/api-${sys}/documents-opportunities/findOneByOpportunityId/:opportunityId`, (req, res) => documentsOpportunitiesCtrl.findOneByOpportunityId(req, res));

router.get(`/api-${sys}/documents-opportunities/findOneByDateModified/:dateModified`, (req, res) => documentsOpportunitiesCtrl.findOneByDateModified(req, res));



router.post(`/api-${sys}/documents-opportunities/updateDocumentOpportunityById`, (req, res) => documentsOpportunitiesCtrl.updateDocumentOpportunityById(req, res));

router.post(`/api-${sys}/documents-opportunities/updateDocumentOpportunityByDeleted`, (req, res) => documentsOpportunitiesCtrl.updateDocumentOpportunityByDeleted(req, res));

router.post(`/api-${sys}/documents-opportunities/updateDocumentOpportunityByDocumentId`, (req, res) => documentsOpportunitiesCtrl.updateDocumentOpportunityByDocumentId(req, res));

router.post(`/api-${sys}/documents-opportunities/updateDocumentOpportunityByOpportunityId`, (req, res) => documentsOpportunitiesCtrl.updateDocumentOpportunityByOpportunityId(req, res));

router.post(`/api-${sys}/documents-opportunities/updateDocumentOpportunityByDateModified`, (req, res) => documentsOpportunitiesCtrl.updateDocumentOpportunityByDateModified(req, res));





router.get(`/api-${sys}/documents-opportunities/`, (req, res) => documentsOpportunitiesCtrl.getAllDocumentsOpportunities(req, res));
router.post(`/api-${sys}/documents-opportunities/`, (req, res) => documentsOpportunitiesCtrl.addDocumentOpportunity(req, res));
router.get(`/api-${sys}/documents-opportunities/:id`, (req, res) => documentsOpportunitiesCtrl.getADocumentOpportunity(req, res));
router.put(`/api-${sys}/documents-opportunities/:id`, (req, res) => documentsOpportunitiesCtrl.updateDocumentOpportunity(req, res));
router.delete(`/api-${sys}/documents-opportunities/:id`, (req, res) => documentsOpportunitiesCtrl.deleteDocumentOpportunity(req, res));

//</es-section>
module.exports = router;
