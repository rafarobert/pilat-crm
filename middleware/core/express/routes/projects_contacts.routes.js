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
const projectsContactsCtrl = require("../controllers/projects_contacts.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/projects-contacts/findOneById/:id`, (req, res) => projectsContactsCtrl.findOneById(req, res));

router.get(`/api-${sys}/projects-contacts/findOneByDeleted/:deleted`, (req, res) => projectsContactsCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/projects-contacts/findOneByContactId/:contactId`, (req, res) => projectsContactsCtrl.findOneByContactId(req, res));

router.get(`/api-${sys}/projects-contacts/findOneByProjectId/:projectId`, (req, res) => projectsContactsCtrl.findOneByProjectId(req, res));

router.get(`/api-${sys}/projects-contacts/findOneByDateModified/:dateModified`, (req, res) => projectsContactsCtrl.findOneByDateModified(req, res));



router.post(`/api-${sys}/projects-contacts/updateProjectContactById`, (req, res) => projectsContactsCtrl.updateProjectContactById(req, res));

router.post(`/api-${sys}/projects-contacts/updateProjectContactByDeleted`, (req, res) => projectsContactsCtrl.updateProjectContactByDeleted(req, res));

router.post(`/api-${sys}/projects-contacts/updateProjectContactByContactId`, (req, res) => projectsContactsCtrl.updateProjectContactByContactId(req, res));

router.post(`/api-${sys}/projects-contacts/updateProjectContactByProjectId`, (req, res) => projectsContactsCtrl.updateProjectContactByProjectId(req, res));

router.post(`/api-${sys}/projects-contacts/updateProjectContactByDateModified`, (req, res) => projectsContactsCtrl.updateProjectContactByDateModified(req, res));





router.get(`/api-${sys}/projects-contacts/`, (req, res) => projectsContactsCtrl.getAllProjectsContacts(req, res));
router.post(`/api-${sys}/datatable/projects-contacts/`, (req, res) => projectsContactsCtrl.getAllProjectsContacts(req, res));
router.post(`/api-${sys}/projects-contacts/`, (req, res) => projectsContactsCtrl.addProjectContact(req, res));
router.get(`/api-${sys}/projects-contacts/:id`, (req, res) => projectsContactsCtrl.getAProjectContact(req, res));
router.put(`/api-${sys}/projects-contacts/:id`, (req, res) => projectsContactsCtrl.updateProjectContact(req, res));
router.delete(`/api-${sys}/projects-contacts/:id`, (req, res) => projectsContactsCtrl.deleteProjectContact(req, res));

//</es-section>
module.exports = router;
