/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:55:59 GMT-0400 (Bolivia Time)
 * Time: 14:55:59
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:55:59 GMT-0400 (Bolivia Time)
 * Last time updated: 14:55:59
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const aokKnowledgebaseCtrl = require("../controllers/aok_knowledgebase.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/aok-knowledgebase/findOneById/:id`, (req, res) => aokKnowledgebaseCtrl.findOneById(req, res));

router.get(`/api-${sys}/aok-knowledgebase/findOneByDeleted/:deleted`, (req, res) => aokKnowledgebaseCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/aok-knowledgebase/findOneByName/:name`, (req, res) => aokKnowledgebaseCtrl.findOneByName(req, res));

router.get(`/api-${sys}/aok-knowledgebase/findOneByStatus/:status`, (req, res) => aokKnowledgebaseCtrl.findOneByStatus(req, res));

router.get(`/api-${sys}/aok-knowledgebase/findOneByRevision/:revision`, (req, res) => aokKnowledgebaseCtrl.findOneByRevision(req, res));

router.get(`/api-${sys}/aok-knowledgebase/findOneByDescription/:description`, (req, res) => aokKnowledgebaseCtrl.findOneByDescription(req, res));

router.get(`/api-${sys}/aok-knowledgebase/findOneByAdditionalInfo/:additionalInfo`, (req, res) => aokKnowledgebaseCtrl.findOneByAdditionalInfo(req, res));

router.get(`/api-${sys}/aok-knowledgebase/findOneByDateEntered/:dateEntered`, (req, res) => aokKnowledgebaseCtrl.findOneByDateEntered(req, res));

router.get(`/api-${sys}/aok-knowledgebase/findOneByDateModified/:dateModified`, (req, res) => aokKnowledgebaseCtrl.findOneByDateModified(req, res));

router.get(`/api-${sys}/aok-knowledgebase/findOneByModifiedUserId/:modifiedUserId`, (req, res) => aokKnowledgebaseCtrl.findOneByModifiedUserId(req, res));

router.get(`/api-${sys}/aok-knowledgebase/findOneByCreatedBy/:createdBy`, (req, res) => aokKnowledgebaseCtrl.findOneByCreatedBy(req, res));

router.get(`/api-${sys}/aok-knowledgebase/findOneByAssignedUserId/:assignedUserId`, (req, res) => aokKnowledgebaseCtrl.findOneByAssignedUserId(req, res));

router.get(`/api-${sys}/aok-knowledgebase/findOneByUserIdC/:userIdC`, (req, res) => aokKnowledgebaseCtrl.findOneByUserIdC(req, res));

router.get(`/api-${sys}/aok-knowledgebase/findOneByUserId1C/:userId1C`, (req, res) => aokKnowledgebaseCtrl.findOneByUserId1C(req, res));



router.post(`/api-${sys}/aok-knowledgebase/updateAokKnowledgebaseById`, (req, res) => aokKnowledgebaseCtrl.updateAokKnowledgebaseById(req, res));

router.post(`/api-${sys}/aok-knowledgebase/updateAokKnowledgebaseByDeleted`, (req, res) => aokKnowledgebaseCtrl.updateAokKnowledgebaseByDeleted(req, res));

router.post(`/api-${sys}/aok-knowledgebase/updateAokKnowledgebaseByName`, (req, res) => aokKnowledgebaseCtrl.updateAokKnowledgebaseByName(req, res));

router.post(`/api-${sys}/aok-knowledgebase/updateAokKnowledgebaseByStatus`, (req, res) => aokKnowledgebaseCtrl.updateAokKnowledgebaseByStatus(req, res));

router.post(`/api-${sys}/aok-knowledgebase/updateAokKnowledgebaseByRevision`, (req, res) => aokKnowledgebaseCtrl.updateAokKnowledgebaseByRevision(req, res));

router.post(`/api-${sys}/aok-knowledgebase/updateAokKnowledgebaseByDescription`, (req, res) => aokKnowledgebaseCtrl.updateAokKnowledgebaseByDescription(req, res));

router.post(`/api-${sys}/aok-knowledgebase/updateAokKnowledgebaseByAdditionalInfo`, (req, res) => aokKnowledgebaseCtrl.updateAokKnowledgebaseByAdditionalInfo(req, res));

router.post(`/api-${sys}/aok-knowledgebase/updateAokKnowledgebaseByDateEntered`, (req, res) => aokKnowledgebaseCtrl.updateAokKnowledgebaseByDateEntered(req, res));

router.post(`/api-${sys}/aok-knowledgebase/updateAokKnowledgebaseByDateModified`, (req, res) => aokKnowledgebaseCtrl.updateAokKnowledgebaseByDateModified(req, res));

router.post(`/api-${sys}/aok-knowledgebase/updateAokKnowledgebaseByModifiedUserId`, (req, res) => aokKnowledgebaseCtrl.updateAokKnowledgebaseByModifiedUserId(req, res));

router.post(`/api-${sys}/aok-knowledgebase/updateAokKnowledgebaseByCreatedBy`, (req, res) => aokKnowledgebaseCtrl.updateAokKnowledgebaseByCreatedBy(req, res));

router.post(`/api-${sys}/aok-knowledgebase/updateAokKnowledgebaseByAssignedUserId`, (req, res) => aokKnowledgebaseCtrl.updateAokKnowledgebaseByAssignedUserId(req, res));

router.post(`/api-${sys}/aok-knowledgebase/updateAokKnowledgebaseByUserIdC`, (req, res) => aokKnowledgebaseCtrl.updateAokKnowledgebaseByUserIdC(req, res));

router.post(`/api-${sys}/aok-knowledgebase/updateAokKnowledgebaseByUserId1C`, (req, res) => aokKnowledgebaseCtrl.updateAokKnowledgebaseByUserId1C(req, res));





router.get(`/api-${sys}/aok-knowledgebase/`, (req, res) => aokKnowledgebaseCtrl.getAllAokKnowledgebase(req, res));
router.post(`/api-${sys}/aok-knowledgebase/`, (req, res) => aokKnowledgebaseCtrl.addAokKnowledgebase(req, res));
router.get(`/api-${sys}/aok-knowledgebase/:id`, (req, res) => aokKnowledgebaseCtrl.getAAokKnowledgebase(req, res));
router.put(`/api-${sys}/aok-knowledgebase/:id`, (req, res) => aokKnowledgebaseCtrl.updateAokKnowledgebase(req, res));
router.delete(`/api-${sys}/aok-knowledgebase/:id`, (req, res) => aokKnowledgebaseCtrl.deleteAokKnowledgebase(req, res));

//</es-section>
module.exports = router;
