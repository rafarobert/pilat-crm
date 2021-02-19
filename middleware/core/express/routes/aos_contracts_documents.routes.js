/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:42:09 GMT-0400 (Bolivia Time)
 * Time: 4:42:9
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:42:09 GMT-0400 (Bolivia Time)
 * Last time updated: 4:42:9
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const aosContractsDocumentsCtrl = require("../controllers/aos_contracts_documents.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/aos-contracts-documents/findOneById/:id`, (req, res) => aosContractsDocumentsCtrl.findOneById(req, res));

router.get(`/api-${sys}/aos-contracts-documents/findOneByDeleted/:deleted`, (req, res) => aosContractsDocumentsCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/aos-contracts-documents/findOneByAosContractsId/:aosContractsId`, (req, res) => aosContractsDocumentsCtrl.findOneByAosContractsId(req, res));

router.get(`/api-${sys}/aos-contracts-documents/findOneByDocumentsId/:documentsId`, (req, res) => aosContractsDocumentsCtrl.findOneByDocumentsId(req, res));

router.get(`/api-${sys}/aos-contracts-documents/findOneByDocumentRevisionId/:documentRevisionId`, (req, res) => aosContractsDocumentsCtrl.findOneByDocumentRevisionId(req, res));

router.get(`/api-${sys}/aos-contracts-documents/findOneByDateModified/:dateModified`, (req, res) => aosContractsDocumentsCtrl.findOneByDateModified(req, res));



router.post(`/api-${sys}/aos-contracts-documents/updateAoContractDocumentById`, (req, res) => aosContractsDocumentsCtrl.updateAoContractDocumentById(req, res));

router.post(`/api-${sys}/aos-contracts-documents/updateAoContractDocumentByDeleted`, (req, res) => aosContractsDocumentsCtrl.updateAoContractDocumentByDeleted(req, res));

router.post(`/api-${sys}/aos-contracts-documents/updateAoContractDocumentByAosContractsId`, (req, res) => aosContractsDocumentsCtrl.updateAoContractDocumentByAosContractsId(req, res));

router.post(`/api-${sys}/aos-contracts-documents/updateAoContractDocumentByDocumentsId`, (req, res) => aosContractsDocumentsCtrl.updateAoContractDocumentByDocumentsId(req, res));

router.post(`/api-${sys}/aos-contracts-documents/updateAoContractDocumentByDocumentRevisionId`, (req, res) => aosContractsDocumentsCtrl.updateAoContractDocumentByDocumentRevisionId(req, res));

router.post(`/api-${sys}/aos-contracts-documents/updateAoContractDocumentByDateModified`, (req, res) => aosContractsDocumentsCtrl.updateAoContractDocumentByDateModified(req, res));





router.get(`/api-${sys}/aos-contracts-documents/`, (req, res) => aosContractsDocumentsCtrl.getAllAosContractsDocuments(req, res));
router.post(`/api-${sys}/aos-contracts-documents/`, (req, res) => aosContractsDocumentsCtrl.addAoContractDocument(req, res));
router.get(`/api-${sys}/aos-contracts-documents/:id`, (req, res) => aosContractsDocumentsCtrl.getAAoContractDocument(req, res));
router.put(`/api-${sys}/aos-contracts-documents/:id`, (req, res) => aosContractsDocumentsCtrl.updateAoContractDocument(req, res));
router.delete(`/api-${sys}/aos-contracts-documents/:id`, (req, res) => aosContractsDocumentsCtrl.deleteAoContractDocument(req, res));

//</es-section>
module.exports = router;
