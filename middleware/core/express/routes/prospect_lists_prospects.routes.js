/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:38:31 GMT-0400 (Bolivia Time)
 * Time: 18:38:31
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:38:31 GMT-0400 (Bolivia Time)
 * Last time updated: 18:38:31
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const prospectListsProspectsCtrl = require("../controllers/prospect_lists_prospects.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/prospect-lists-prospects/findOneById/:id`, (req, res) => prospectListsProspectsCtrl.findOneById(req, res));

router.get(`/api-${sys}/prospect-lists-prospects/findOneByDeleted/:deleted`, (req, res) => prospectListsProspectsCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/prospect-lists-prospects/findOneByProspectListId/:prospectListId`, (req, res) => prospectListsProspectsCtrl.findOneByProspectListId(req, res));

router.get(`/api-${sys}/prospect-lists-prospects/findOneByRelatedId/:relatedId`, (req, res) => prospectListsProspectsCtrl.findOneByRelatedId(req, res));

router.get(`/api-${sys}/prospect-lists-prospects/findOneByRelatedType/:relatedType`, (req, res) => prospectListsProspectsCtrl.findOneByRelatedType(req, res));

router.get(`/api-${sys}/prospect-lists-prospects/findOneByDateModified/:dateModified`, (req, res) => prospectListsProspectsCtrl.findOneByDateModified(req, res));



router.post(`/api-${sys}/prospect-lists-prospects/updateProspectListProspectById`, (req, res) => prospectListsProspectsCtrl.updateProspectListProspectById(req, res));

router.post(`/api-${sys}/prospect-lists-prospects/updateProspectListProspectByDeleted`, (req, res) => prospectListsProspectsCtrl.updateProspectListProspectByDeleted(req, res));

router.post(`/api-${sys}/prospect-lists-prospects/updateProspectListProspectByProspectListId`, (req, res) => prospectListsProspectsCtrl.updateProspectListProspectByProspectListId(req, res));

router.post(`/api-${sys}/prospect-lists-prospects/updateProspectListProspectByRelatedId`, (req, res) => prospectListsProspectsCtrl.updateProspectListProspectByRelatedId(req, res));

router.post(`/api-${sys}/prospect-lists-prospects/updateProspectListProspectByRelatedType`, (req, res) => prospectListsProspectsCtrl.updateProspectListProspectByRelatedType(req, res));

router.post(`/api-${sys}/prospect-lists-prospects/updateProspectListProspectByDateModified`, (req, res) => prospectListsProspectsCtrl.updateProspectListProspectByDateModified(req, res));





router.get(`/api-${sys}/prospect-lists-prospects/`, (req, res) => prospectListsProspectsCtrl.getAllProspectListsProspects(req, res));
router.post(`/api-${sys}/prospect-lists-prospects/`, (req, res) => prospectListsProspectsCtrl.addProspectListProspect(req, res));
router.get(`/api-${sys}/prospect-lists-prospects/:id`, (req, res) => prospectListsProspectsCtrl.getAProspectListProspect(req, res));
router.put(`/api-${sys}/prospect-lists-prospects/:id`, (req, res) => prospectListsProspectsCtrl.updateProspectListProspect(req, res));
router.delete(`/api-${sys}/prospect-lists-prospects/:id`, (req, res) => prospectListsProspectsCtrl.deleteProspectListProspect(req, res));

//</es-section>
module.exports = router;
