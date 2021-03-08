/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:35:53 GMT-0400 (Bolivia Time)
 * Time: 15:35:53
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:35:53 GMT-0400 (Bolivia Time)
 * Last time updated: 15:35:53
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const cronRemoveDocumentsCtrl = require("../controllers/cron_remove_documents.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/cron-remove-documents/findOneById/:id`, (req, res) => cronRemoveDocumentsCtrl.findOneById(req, res));

router.get(`/api-${sys}/cron-remove-documents/findOneByBeanId/:beanId`, (req, res) => cronRemoveDocumentsCtrl.findOneByBeanId(req, res));

router.get(`/api-${sys}/cron-remove-documents/findOneByModule/:module`, (req, res) => cronRemoveDocumentsCtrl.findOneByModule(req, res));

router.get(`/api-${sys}/cron-remove-documents/findOneByDateModified/:dateModified`, (req, res) => cronRemoveDocumentsCtrl.findOneByDateModified(req, res));



router.post(`/api-${sys}/cron-remove-documents/updateCronRemoveDocumentById`, (req, res) => cronRemoveDocumentsCtrl.updateCronRemoveDocumentById(req, res));

router.post(`/api-${sys}/cron-remove-documents/updateCronRemoveDocumentByBeanId`, (req, res) => cronRemoveDocumentsCtrl.updateCronRemoveDocumentByBeanId(req, res));

router.post(`/api-${sys}/cron-remove-documents/updateCronRemoveDocumentByModule`, (req, res) => cronRemoveDocumentsCtrl.updateCronRemoveDocumentByModule(req, res));

router.post(`/api-${sys}/cron-remove-documents/updateCronRemoveDocumentByDateModified`, (req, res) => cronRemoveDocumentsCtrl.updateCronRemoveDocumentByDateModified(req, res));





router.get(`/api-${sys}/cron-remove-documents/`, (req, res) => cronRemoveDocumentsCtrl.getAllCronRemoveDocuments(req, res));
router.post(`/api-${sys}/cron-remove-documents/`, (req, res) => cronRemoveDocumentsCtrl.addCronRemoveDocument(req, res));
router.get(`/api-${sys}/cron-remove-documents/:id`, (req, res) => cronRemoveDocumentsCtrl.getACronRemoveDocument(req, res));
router.put(`/api-${sys}/cron-remove-documents/:id`, (req, res) => cronRemoveDocumentsCtrl.updateCronRemoveDocument(req, res));
router.delete(`/api-${sys}/cron-remove-documents/:id`, (req, res) => cronRemoveDocumentsCtrl.deleteCronRemoveDocument(req, res));

//</es-section>
module.exports = router;
