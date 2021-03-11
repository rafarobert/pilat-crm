/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:31 GMT-0400 (Bolivia Time)
 * Time: 14:57:31
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:31 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:31
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const projectsOpportunitiesCtrl = require("../controllers/projects_opportunities.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/projects-opportunities/findOneById/:id`, (req, res) => projectsOpportunitiesCtrl.findOneById(req, res));

router.get(`/api-${sys}/projects-opportunities/findOneByDeleted/:deleted`, (req, res) => projectsOpportunitiesCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/projects-opportunities/findOneByOpportunityId/:opportunityId`, (req, res) => projectsOpportunitiesCtrl.findOneByOpportunityId(req, res));

router.get(`/api-${sys}/projects-opportunities/findOneByProjectId/:projectId`, (req, res) => projectsOpportunitiesCtrl.findOneByProjectId(req, res));

router.get(`/api-${sys}/projects-opportunities/findOneByDateModified/:dateModified`, (req, res) => projectsOpportunitiesCtrl.findOneByDateModified(req, res));



router.post(`/api-${sys}/projects-opportunities/updateProjectOpportunityById`, (req, res) => projectsOpportunitiesCtrl.updateProjectOpportunityById(req, res));

router.post(`/api-${sys}/projects-opportunities/updateProjectOpportunityByDeleted`, (req, res) => projectsOpportunitiesCtrl.updateProjectOpportunityByDeleted(req, res));

router.post(`/api-${sys}/projects-opportunities/updateProjectOpportunityByOpportunityId`, (req, res) => projectsOpportunitiesCtrl.updateProjectOpportunityByOpportunityId(req, res));

router.post(`/api-${sys}/projects-opportunities/updateProjectOpportunityByProjectId`, (req, res) => projectsOpportunitiesCtrl.updateProjectOpportunityByProjectId(req, res));

router.post(`/api-${sys}/projects-opportunities/updateProjectOpportunityByDateModified`, (req, res) => projectsOpportunitiesCtrl.updateProjectOpportunityByDateModified(req, res));





router.get(`/api-${sys}/projects-opportunities/`, (req, res) => projectsOpportunitiesCtrl.getAllProjectsOpportunities(req, res));
router.post(`/api-${sys}/datatable/projects-opportunities/`, (req, res) => projectsOpportunitiesCtrl.getAllProjectsOpportunities(req, res));
router.post(`/api-${sys}/projects-opportunities/`, (req, res) => projectsOpportunitiesCtrl.addProjectOpportunity(req, res));
router.get(`/api-${sys}/projects-opportunities/:id`, (req, res) => projectsOpportunitiesCtrl.getAProjectOpportunity(req, res));
router.put(`/api-${sys}/projects-opportunities/:id`, (req, res) => projectsOpportunitiesCtrl.updateProjectOpportunity(req, res));
router.delete(`/api-${sys}/projects-opportunities/:id`, (req, res) => projectsOpportunitiesCtrl.deleteProjectOpportunity(req, res));

//</es-section>
module.exports = router;
