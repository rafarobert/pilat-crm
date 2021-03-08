/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:36:49 GMT-0400 (Bolivia Time)
 * Time: 15:36:49
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:36:49 GMT-0400 (Bolivia Time)
 * Last time updated: 15:36:49
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const projectContacts1CCtrl = require("../controllers/project_contacts_1_c.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/project-contacts-1-c/findOneById/:id`, (req, res) => projectContacts1CCtrl.findOneById(req, res));

router.get(`/api-${sys}/project-contacts-1-c/findOneByDeleted/:deleted`, (req, res) => projectContacts1CCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/project-contacts-1-c/findOneByProjectContacts1projectIda/:projectContacts1projectIda`, (req, res) => projectContacts1CCtrl.findOneByProjectContacts1projectIda(req, res));

router.get(`/api-${sys}/project-contacts-1-c/findOneByProjectContacts1contactsIdb/:projectContacts1contactsIdb`, (req, res) => projectContacts1CCtrl.findOneByProjectContacts1contactsIdb(req, res));

router.get(`/api-${sys}/project-contacts-1-c/findOneByDateModified/:dateModified`, (req, res) => projectContacts1CCtrl.findOneByDateModified(req, res));



router.post(`/api-${sys}/project-contacts-1-c/updateProjectContact1CById`, (req, res) => projectContacts1CCtrl.updateProjectContact1CById(req, res));

router.post(`/api-${sys}/project-contacts-1-c/updateProjectContact1CByDeleted`, (req, res) => projectContacts1CCtrl.updateProjectContact1CByDeleted(req, res));

router.post(`/api-${sys}/project-contacts-1-c/updateProjectContact1CByProjectContacts1projectIda`, (req, res) => projectContacts1CCtrl.updateProjectContact1CByProjectContacts1projectIda(req, res));

router.post(`/api-${sys}/project-contacts-1-c/updateProjectContact1CByProjectContacts1contactsIdb`, (req, res) => projectContacts1CCtrl.updateProjectContact1CByProjectContacts1contactsIdb(req, res));

router.post(`/api-${sys}/project-contacts-1-c/updateProjectContact1CByDateModified`, (req, res) => projectContacts1CCtrl.updateProjectContact1CByDateModified(req, res));





router.get(`/api-${sys}/project-contacts-1-c/`, (req, res) => projectContacts1CCtrl.getAllProjectContacts1C(req, res));
router.post(`/api-${sys}/project-contacts-1-c/`, (req, res) => projectContacts1CCtrl.addProjectContact1C(req, res));
router.get(`/api-${sys}/project-contacts-1-c/:id`, (req, res) => projectContacts1CCtrl.getAProjectContact1C(req, res));
router.put(`/api-${sys}/project-contacts-1-c/:id`, (req, res) => projectContacts1CCtrl.updateProjectContact1C(req, res));
router.delete(`/api-${sys}/project-contacts-1-c/:id`, (req, res) => projectContacts1CCtrl.deleteProjectContact1C(req, res));

//</es-section>
module.exports = router;
